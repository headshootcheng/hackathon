package com.hktpayment.tapngosdk;

import android.content.Intent;
import android.os.Bundle;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

public class TapNGoSDKPaymentActivity extends TapNGoPaymentActivity {
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        TapNGoSDKPaymentParams params = (TapNGoSDKPaymentParams) intent.getSerializableExtra(TapNGoSDKModule.PAYMENT_PARAMETERS);
        String action = intent.getAction();
        switch (action) {
            case TapNGoSDKModule.SINGLE_PAYMENT_ACTION:
                doSinglePayment(params.getAppId(), params.getApiKey(), params.getPublicKey(), params.getCallbackId(), params.getMerTradeNo(), params.getTotalPrice().doubleValue(), params.getCurrency(), params.getRemark(), params.getNotifyUrl());
                return;
            case TapNGoSDKModule.RECURRENT_PAYMENT_ACTION:
                doRecurrentPayment(params.getAppId(), params.getApiKey(), params.getPublicKey(), params.getCallbackId(), params.getMerTradeNo(), params.getCurrency(), params.getRemark());
                return;
            case TapNGoSDKModule.SINGLE_AND_RECURRENT_PAYMENT_ACTION:
                doSingleRecurrentPayment(params.getAppId(), params.getApiKey(), params.getPublicKey(), params.getCallbackId(), params.getMerTradeNo(), params.getTotalPrice().doubleValue(), params.getCurrency(), params.getRemark(), params.getNotifyUrl());
                return;
            default:
                onPaymentError();
                return;
        }
    }
    @Override
    protected void onPaymentSuccess(TapNGoPayResult payResult) {
        LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(this);
        Intent callbackIntent = new Intent(TapNGoSDKModule.PAYMENT_CALLBACK_EVENT);
        callbackIntent.putExtra(TapNGoSDKModule.RESULT_CODE, null == payResult.getResultCode() ? "" : payResult.getResultCode());
        callbackIntent.putExtra(TapNGoSDKModule.RECURRENT_TOKEN, null == payResult.getRecurrentToken() ? "" : payResult.getRecurrentToken());
        callbackIntent.putExtra(TapNGoSDKModule.MER_TRADE_NO, null == payResult.getMerTradeNo() ? "" : payResult.getMerTradeNo());
        callbackIntent.putExtra(TapNGoSDKModule.TRADE_STATUS, null == payResult.getTradeStatus() ? "" : payResult.getTradeStatus().toString());
        callbackIntent.putExtra(TapNGoSDKModule.MESSAGE, null == payResult.getMessage() ? "" : payResult.getMessage());
        callbackIntent.putExtra(TapNGoSDKModule.TRADE_NO, null == payResult.getTradeNo() ? "" : payResult.getTradeNo());
        localBroadcastManager.sendBroadcast(callbackIntent);
        finish();
    }

    @Override
    protected void onPaymentFail(TapNGoPayResult payResult) {
        LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(this);
        Intent callbackIntent = new Intent(TapNGoSDKModule.PAYMENT_CALLBACK_EVENT);
        callbackIntent.putExtra(TapNGoSDKModule.RESULT_CODE, null == payResult.getResultCode() ? "" : payResult.getResultCode());
        callbackIntent.putExtra(TapNGoSDKModule.RECURRENT_TOKEN, null == payResult.getRecurrentToken() ? "" : payResult.getRecurrentToken());
        callbackIntent.putExtra(TapNGoSDKModule.MER_TRADE_NO, null == payResult.getMerTradeNo() ? "" : payResult.getMerTradeNo());
        callbackIntent.putExtra(TapNGoSDKModule.TRADE_STATUS, null == payResult.getTradeStatus() ? "" : payResult.getTradeStatus().toString());
        callbackIntent.putExtra(TapNGoSDKModule.MESSAGE, null == payResult.getMessage() ? "" : payResult.getMessage());
        callbackIntent.putExtra(TapNGoSDKModule.TRADE_NO, null == payResult.getTradeNo() ? "" : payResult.getTradeNo());
        localBroadcastManager.sendBroadcast(callbackIntent);
        finish();
    }

    private  void onPaymentError() {
        finish();
    }

    private void doSinglePayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String MER_TRADE_NO, double totalPrice, String currency, String remark, String notifyUrl) {
        TapNGoPayment payment = new TapNGoPayment(APP_ID, API_KEY, PUBLIC_KEY);
        payment.setSinglePayment(MER_TRADE_NO, totalPrice, currency, remark, notifyUrl);
        doPayment(payment);
    }

    private void doRecurrentPayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String MER_TRADE_NO, String currency, String remark) {
        TapNGoPayment payment = new TapNGoPayment(APP_ID, API_KEY, PUBLIC_KEY);
        payment.setRecurrentPayment(MER_TRADE_NO, currency, remark);
        doPayment(payment);
    }

    private void doSingleRecurrentPayment(String APP_ID, String API_KEY, String PUBLIC_KEY, String CALLBACK_ID, String MER_TRADE_NO, double totalPrice, String currency, String remark, String notifyUrl) {
        TapNGoPayment payment = new TapNGoPayment(APP_ID, API_KEY, PUBLIC_KEY);
        payment.setSingleAndRecurrentPayment(MER_TRADE_NO, totalPrice, currency, remark, notifyUrl);
        doPayment(payment);
    }
}
