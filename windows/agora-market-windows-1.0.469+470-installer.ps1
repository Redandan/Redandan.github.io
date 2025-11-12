# Agora Market Windows Installer
# Version: 1.0.469+470
# This script automatically extracts and installs Agora Market

$ErrorActionPreference = "Stop"
$appName = "agora-market"
$installDir = Join-Path $env:LOCALAPPDATA "AgoraMarket"
$zipName = "agora-market-windows-1.0.469+470.zip"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$zipPath = Join-Path $scriptDir $zipName

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Agora Market Windows Installer" -ForegroundColor Cyan
Write-Host "Version: 1.0.469+470" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if ZIP file exists
if (-not (Test-Path $zipPath)) {
    Write-Host "Error: ZIP file not found: $zipPath" -ForegroundColor Red
    Write-Host "Please ensure the ZIP file is in the same directory as this installer." -ForegroundColor Red
    pause
    exit 1
}

# Create installation directory
Write-Host "Creating installation directory: $installDir" -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $installDir | Out-Null

# Extract ZIP to temp directory
$tempDir = Join-Path $env:TEMP "agora-market-install"
Write-Host "Extracting files..." -ForegroundColor Yellow
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force

# Copy files to installation directory
Write-Host "Installing files..." -ForegroundColor Yellow
$sourceDir = Join-Path $tempDir "windows"
if (Test-Path $sourceDir) {
    Copy-Item -Path "$sourceDir\*" -Destination $installDir -Recurse -Force
} else {
    Copy-Item -Path "$tempDir\*" -Destination $installDir -Recurse -Force
}

# Clean up temp directory
Remove-Item -Path $tempDir -Recurse -Force

# Create desktop shortcut
Write-Host "Creating desktop shortcut..." -ForegroundColor Yellow
$exePath = Join-Path $installDir "agora-market.exe"
if (Test-Path $exePath) {
    $shortcutPath = Join-Path ([Environment]::GetFolderPath("Desktop")) "Agora Market.lnk"
    $shell = New-Object -ComObject WScript.Shell
    $shortcut = $shell.CreateShortcut($shortcutPath)
    $shortcut.TargetPath = $exePath
    $shortcut.WorkingDirectory = $installDir
    $shortcut.Description = "Agora Market - C2C Trading Platform"
    $shortcut.Save()
    Write-Host "Desktop shortcut created successfully." -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Installation completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Application installed to: $installDir" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
