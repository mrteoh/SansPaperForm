
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// react-native-sqlite-storage
import io.liteglue.SQLitePluginPackage;
// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/checkbox
import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;
// @react-native-community/datetimepicker
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// appcenter
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
// appcenter-analytics
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
// appcenter-crashes
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
// react-native-fs
import com.rnfs.RNFSPackage;
// react-native-image-crop-picker
import com.reactnative.ivpusic.imagepicker.PickerPackage;
// react-native-navigation
import com.reactnativenavigation.react.NavigationPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-signature-capture
import com.rssignaturecapture.RSSignatureCapturePackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;
// rn-fetch-blob
import com.RNFetchBlob.RNFetchBlobPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new SQLitePluginPackage(),
      new AsyncStoragePackage(),
      new ReactCheckBoxPackage(),
      new RNDateTimePickerPackage(),
      new NetInfoPackage(),
      new AppCenterReactNativePackage(getApplication()),
      new AppCenterReactNativeAnalyticsPackage(getApplication(), getResources().getString(com.sanspaper.form.R.string.appCenterAnalytics_whenToEnableAnalytics)),
      new AppCenterReactNativeCrashesPackage(getApplication(), getResources().getString(com.sanspaper.form.R.string.appCenterCrashes_whenToSendCrashes)),
      new RNFSPackage(),
      new PickerPackage(),
      new NavigationPackage(reactNativeHost),
      new SafeAreaContextPackage(),
      new RSSignatureCapturePackage(),
      new SvgPackage(),
      new VectorIconsPackage(),
      new RNFetchBlobPackage()
    ));
  }
}
