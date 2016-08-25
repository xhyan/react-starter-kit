@echo off
set DEST=.\.exvim.react
set TOOLS=D:\exVim\vimfiles\tools\
set TMP=%DEST%\_symbols
set TARGET=%DEST%\symbols
call %TOOLS%\shell\batch\update-symbols.bat
