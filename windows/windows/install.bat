@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Agora Market Installer
echo Version: 1.0.469+470
echo ========================================
echo.

set "INSTALL_DIR=%LOCALAPPDATA%\AgoraMarket"
echo Creating installation directory: %INSTALL_DIR%
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"

echo Installing files...
xcopy /E /Y /I * "%INSTALL_DIR%\" >nul

echo Creating desktop shortcut...
set "EXE_PATH=%INSTALL_DIR%\agora-market.exe"
if exist "%EXE_PATH%" (
    powershell.exe -Command " = New-Object -ComObject WScript.Shell;  = .CreateShortcut('%USERPROFILE%\Desktop\Agora Market.lnk'); .TargetPath = '%EXE_PATH%'; .WorkingDirectory = '%INSTALL_DIR%'; .Description = 'Agora Market - C2C Trading Platform'; .Save()"
    echo Desktop shortcut created successfully.
)

echo.
echo ========================================
echo Installation completed successfully!
echo ========================================
echo Application installed to: %INSTALL_DIR%
echo.
pause
