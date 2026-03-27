# ============================================
# UNUSUAL CHARACTERS CHECK SCRIPT
# Detects corrupted characters, encoding issues, and invalid Unicode
# ============================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "     UNUSUAL CHARACTERS CHECK" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$issuesFound = $false
$issueCount = 0
$totalFiles = 0

# Define problematic patterns
$badPatterns = @(
    @{Pattern = '[^\x20-\x7E\x0A\x0D\x09\u00A0-\u00FF]'; Name = "Non-ASCII/Invalid Unicode"},
    @{Pattern = '�'; Name = "Replacement Character (�)"},
    @{Pattern = '\\x[0-9a-fA-F]{2}'; Name = "Raw Hex Escape Sequence"},
    @{Pattern = '\\u[0-9a-fA-F]{4}'; Name = "Raw Unicode Escape Sequence"},
    @{Pattern = '[\x00-\x08\x0B\x0C\x0E-\x1F]'; Name = "Control Characters (non-printable)"},
    @{Pattern = '�|�|�|�|�|�|�'; Name = "Common Corrupted Characters"}
)

# Files to check
$checkPaths = @(
    "pages",
    "components", 
    "lib",
    "context",
    "data",
    "public",
    "styles"
)

# Function to check file
function Check-File {
    param($filePath)
    
    try {
        $content = Get-Content $filePath -Raw -ErrorAction Stop
        $hasIssue = $false
        $issues = @()
        
        # Check each pattern
        foreach ($pattern in $badPatterns) {
            if ($content -match $pattern.Pattern) {
                $hasIssue = $true
                $issues += $pattern.Name
            }
        }
        
        # Check for BOM (Byte Order Mark)
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
            $hasIssue = $true
            $issues += "UTF-8 BOM (should be without BOM)"
        }
        
        if ($hasIssue) {
            return @{
                Path = $filePath
                Issues = $issues
                Content = $content
            }
        }
    }
    catch {
        return @{
            Path = $filePath
            Issues = @("ERROR READING FILE: $_")
            Content = $null
        }
    }
    return $null
}

# Scan all files
Write-Host "Scanning files for unusual characters..." -ForegroundColor Yellow
Write-Host ""

$allFiles = @()
foreach ($path in $checkPaths) {
    if (Test-Path $path) {
        $files = Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue
        $allFiles += $files
    }
}

$totalFiles = $allFiles.Count
Write-Host "Total files to check: $totalFiles" -ForegroundColor Gray
Write-Host ""

$problemFiles = @()
$progress = 0

foreach ($file in $allFiles) {
    $progress++
    if ($progress % 50 -eq 0) {
        Write-Host "   Checking: $progress / $totalFiles" -ForegroundColor Gray
    }
    
    $result = Check-File $file.FullName
    if ($result) {
        $problemFiles += $result
        $issueCount++
        $issuesFound = $true
    }
}

# Display results
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "              RESULTS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($issueCount -eq 0) {
    Write-Host "✅ NO UNUSUAL CHARACTERS FOUND!" -ForegroundColor Green
    Write-Host "✅ All $totalFiles files are clean." -ForegroundColor Green
} else {
    Write-Host "⚠️ Found $issueCount files with unusual characters:" -ForegroundColor Red
    Write-Host ""
    
    foreach ($problem in $problemFiles) {
        Write-Host "📁 $($problem.Path)" -ForegroundColor Yellow
        Write-Host "   Issues: $($problem.Issues -join ', ')" -ForegroundColor Red
        
        # Show the line with the issue
        if ($problem.Content) {
            $lines = $problem.Content -split "`n"
            $lineNum = 0
            foreach ($line in $lines) {
                $lineNum++
                foreach ($pattern in $badPatterns) {
                    if ($line -match $pattern.Pattern) {
                        Write-Host "   Line $lineNum: $($line.Trim())" -ForegroundColor Gray
                        # Highlight the problematic part
                        $match = [regex]::Match($line, $pattern.Pattern)
                        if ($match.Success) {
                            Write-Host "   Problematic text: '$($match.Value)'" -ForegroundColor Red
                        }
                        break
                    }
                }
            }
        }
        Write-Host ""
    }
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "              SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Total files scanned: $totalFiles" -ForegroundColor Gray
Write-Host "Files with issues: $issueCount" -ForegroundColor $(if ($issueCount -gt 0) { "Red" } else { "Green" })

if ($issueCount -gt 0) {
    Write-Host ""
    Write-Host "🔧 To fix issues:" -ForegroundColor Yellow
    Write-Host "   1. Open the file in VS Code" -ForegroundColor White
    Write-Host "   2. Save with UTF-8 encoding (without BOM)" -ForegroundColor White
    Write-Host "   3. Remove any unusual characters manually" -ForegroundColor White
    Write-Host ""
    Write-Host "   Quick fix for common issues:" -ForegroundColor Yellow
    Write-Host "   Get-ChildItem -Path pages -Recurse -File | ForEach-Object {" -ForegroundColor Gray
    Write-Host "       $content = Get-Content $_.FullName -Raw" -ForegroundColor Gray
    Write-Host "       $content = $content -replace '[^\x20-\x7E\x0A\x0D\x09]', ''" -ForegroundColor Gray
    Write-Host "       Set-Content $_.FullName -Value $content -Encoding UTF8 -NoNewline" -ForegroundColor Gray
    Write-Host "   }" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✅ Check complete!" -ForegroundColor Green