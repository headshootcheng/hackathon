
package com.hktpayment.tapngosdk;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import androidx.annotation.Nullable;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class TapNGoSDKModule extends ReactContextBaseJavaModule {
  private static final String moduleName = "TapNGoSDK";
  public static final String MER_TRADE_NO = "merTradeNo";
  public static final String MESSAGE = "message";
  public static final String PAYMENT_CALLBACK_EVENT = "PAYMENT_CALLBACK_EVENT";
  public static final String PAYMENT_PARAMETERS = "com.hktpayment.tapngosdk.PAYMENT_PARAMETERS";
  public static final String RECURRENT_PAYMENT_ACTION = "RECURRENT_PAYMENT_ACTION";
  public static final String RECURRENT_TOKEN = "recurrentToken";
  public static final String RESULT_CODE = "resultCode";
  public static final String SINGLE_AND_RECURRENT_PAYMENT_ACTION = "SINGLE_AND_RECURRENT_PAYMENT_ACTION";
  public static final String SINGLE_PAYMENT_ACTION = "SINGLE_PAYMENT_ACTION";
  public static final String TGSDK_PAYRESULT = "TGSDKPayResult";
  public static final String TRADE_STATUS = "tradeStatus";
  public static final String TRADE_NO = "tradeNo";
  private LocalBroadcastReceiver mLocalBroadcastReceiver = new LocalBroadcastReceiver();
  private ReactApplicationContext mReactContext;

  class LocalBroadcastReceiver extends BroadcastReceiver {

    LocalBroadcastReceiver() {
    }

    public void onReceive(Context context, Intent intent) {
        TapNGoSDKModule.this.paymentResultCallback(intent.getStringExtra(TapNGoSDKModule.RESULT_CODE), 
                                                  intent.getStringExtra(TapNGoSDKModule.RECURRENT_TOKEN), 
                                                  intent.getStringExtra(TapNGoSDKModule.MER_TRADE_NO), 
                                                  intent.getStringExtra(TapNGoSDKModule.TRADE_STATUS), 
                                                  intent.getStringExtra(TapNGoSDKModule.MESSAGE),
                                                  intent.getStringExtra(TapNGoSDKModule.TRADE_NO));
    }
  }
  public TapNGoSDKModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.mReactContext = reactContext;
    LocalBroadcastManager.getInstance(this.mReactContext).registerReceiver(this.mLocalBroadcastReceiver, new IntentFilter(PAYMENT_CALLBACK_EVENT));
  }

  @Override
  public String getName() {
    return moduleName;
  }

  @ReactMethod
  public void doSinglePayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String merTradeNo, String totalPrice, String currency, String remark, String notifyUrl) {
    try {
      Double mTotalPrice = Double.parseDouble(totalPrice);

      Intent paymentIntent = new Intent(this.mReactContext, TapNGoSDKPaymentActivity.class);
      TapNGoSDKPaymentParams params = new TapNGoSDKPaymentParams(APP_ID, API_KEY, PUBLIC_KEY, CALLBACK_ID, merTradeNo, mTotalPrice, currency, remark, notifyUrl);
      paymentIntent.setAction(SINGLE_PAYMENT_ACTION);
      paymentIntent.putExtra(PAYMENT_PARAMETERS, params);
      paymentIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      this.mReactContext.startActivity(paymentIntent);
    }catch (Exception e) {
      e.printStackTrace();
    }
  }

  @ReactMethod
  public void doRecurrentPayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String merTradeNo, String currency, String remark) {
    Intent paymentIntent = new Intent(this.mReactContext, TapNGoSDKPaymentActivity.class);
    TapNGoSDKPaymentParams params = new TapNGoSDKPaymentParams(APP_ID, API_KEY, PUBLIC_KEY, CALLBACK_ID, merTradeNo, null, currency, remark, null);
    paymentIntent.setAction(RECURRENT_PAYMENT_ACTION);
    paymentIntent.putExtra(PAYMENT_PARAMETERS, params);
    paymentIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    this.mReactContext.startActivity(paymentIntent);
  }

  @ReactMethod
  public void doSingleAndRecurrentPayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String merTradeNo, String totalPrice, String currency, String remark, String notifyUrl) {
    try {
      Double mTotalPrice = Double.parseDouble(totalPrice);
      Intent paymentIntent = new Intent(this.mReactContext, TapNGoSDKPaymentActivity.class);
      TapNGoSDKPaymentParams params = new TapNGoSDKPaymentParams(APP_ID, API_KEY, PUBLIC_KEY, CALLBACK_ID, merTradeNo, mTotalPrice, currency, remark, notifyUrl);
      paymentIntent.setAction(SINGLE_AND_RECURRENT_PAYMENT_ACTION);
      paymentIntent.putExtra(PAYMENT_PARAMETERS, params);
      paymentIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      this.mReactContext.startActivity(paymentIntent);
    }catch (Exception e) {
      e.printStackTrace();
    }
  }

  @ReactMethod
  public void setSandBoxModeEnabled(String enabled) {
    TapNGoSdkSettings.setSandboxMode(Boolean.parseBoolean(enabled));
  }

  @ReactMethod
  public void getSDKVersion(Callback errorCallback, Callback successCallback) {
    try {
      successCallback.invoke(TapNGoSdkSettings.getSdkVersion());
    } catch (Exception e) {
      errorCallback.invoke(e.getMessage());
    }
  }

  private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
    ((DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit(eventName, params);
  }

  public void paymentResultCallback(String resultCode, String recurrentToken, String merTradeNo, String tradeStatus, String message, String tradeNo) {
    WritableMap paymentResultMap = Arguments.createMap();
    paymentResultMap.putString(RESULT_CODE, resultCode);
    paymentResultMap.putString(RECURRENT_TOKEN, recurrentToken);
    paymentResultMap.putString(MER_TRADE_NO, merTradeNo);
    paymentResultMap.putString(TRADE_STATUS, tradeStatus);
    paymentResultMap.putString(MESSAGE, message);
    paymentResultMap.putString(TRADE_NO, tradeNo);
    sendEvent(this.mReactContext, TGSDK_PAYRESULT, paymentResultMap);
  }

}