#!/bin/bash

ionic build
CURRENT_DIR="$PWD"
ln -s $CURRENT_DIR/android/app/release/app-release.apk $CURRENT_DIR/build/firefly.apk

ionic cap build android --release

echo "Complete release build in Android Studio then go to fireflyhosting/firebase folder to deploy"