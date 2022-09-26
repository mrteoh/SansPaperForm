#!/usr/bin/env bash
#

echo "Starting appcenter pre build script $APPCENTER_SOURCE_DIRECTORY "

if [ -z "$VERSION_CODE" ]
then
    echo "You need define the VERSION_CODE variable in App Center"
    exit
fi

PROJECT_NAME=MyProject
ANDROID_GRADLE_FILE=$APPCENTER_SOURCE_DIRECTORY/android/gradle.properties
INFO_PLIST_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/SansPaper/Info.plist
NEW_VERSION_CODE=$((VERSION_CODE + APPCENTER_BUILD_ID))

if [ "$ANDROIDBUILD" == "true" ]
then
	echo "Building for Android"
	if [ -e "$ANDROID_GRADLE_FILE" ]
	then
		echo "Updating version code to $NEW_VERSION_CODE in $ANDROID_GRADLE_FILE"
		sed -i "" 's/VERSION_CODE=[0-9]*/VERSION_CODE='$NEW_VERSION_CODE'/' $ANDROID_GRADLE_FILE

		echo "File content:"
		cat $ANDROID_GRADLE_FILE
	fi
fi

if [ "$IOSBUILD" == "true" ]
then
	echo "Building for IOS"
	if [ -e "$INFO_PLIST_FILE" ]
	then
		echo "Updating version code to $NEW_VERSION_CODE in Info.plist"
		plutil -replace CFBundleVersion -string $NEW_VERSION_CODE $INFO_PLIST_FILE

		echo "File content:"
		cat $INFO_PLIST_FILE
	fi
fi

echo "Pre build script completed"