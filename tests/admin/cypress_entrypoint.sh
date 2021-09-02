#!/bin/bash
echo "Init cypress, starting Xvfb server on port 99..."
pkill Xvfb

FILE=/tmp/.X99-lock
if test -f "$FILE"; then
    rm $FILE
fi

Xvfb -screen 0 1920x1080x24 :99
tail -F /dev/null

