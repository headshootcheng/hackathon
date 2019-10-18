package com.hktpayment.tapngosdk;

import java.io.Serializable;

public class TapNGoSDKPaymentParams implements Serializable {
    private String apiKey;
    private String appId;
    private String callbackId;
    private String currency;
    private String merTradeNo;
    private String notifyUrl;
    private String publicKey;
    private String remark;
    private Double totalPrice;

    public TapNGoSDKPaymentParams(String appId, String apiKey, String publicKey, String callbackId, String merTradeNo, Double totalPrice, String currency, String remark, String notifyUrl) {
        this.appId = appId;
        this.apiKey = apiKey;
        this.publicKey = publicKey;
        this.callbackId = callbackId;
        this.merTradeNo = merTradeNo;
        this.totalPrice = totalPrice;
        this.currency = currency;
        this.remark = remark;
        this.notifyUrl = notifyUrl;
    }

    public String getAppId() {
        return this.appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getApiKey() {
        return this.apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getPublicKey() {
        return this.publicKey;
    }

    public void setPublicKey(String publicKey) {
        this.publicKey = publicKey;
    }

    public String getCallbackId() {
        return this.callbackId;
    }

    public void setCallbackId(String callbackId) {
        this.callbackId = callbackId;
    }

    public String getMerTradeNo() {
        return this.merTradeNo;
    }

    public void setMerTradeNo(String merTradeNo) {
        this.merTradeNo = merTradeNo;
    }

    public Double getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getCurrency() {
        return this.currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getNotifyUrl() {
        return this.notifyUrl;
    }

    public void setNotifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
    }
}
