import {NativeModules, Alert, Platform} from 'react-native';
const {TapNGoSDK} = NativeModules;

class RNTapNGoSDKClass {
    doSinglePayment = (isSandBoxMode, appId, apiKey, publicKey, callbackId, merTradeNo, price, currency, remark, notifyUrl) => {
        var convertedPrice = price;
        if (price.constructor === Number){
            convertedPrice = price.toString();
        }
        TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
        TapNGoSDK.doSinglePayment(appId, apiKey, publicKey, callbackId, merTradeNo, convertedPrice, currency, remark, notifyUrl);
    }
    doRecurrentPayment = (isSandBoxMode, appId, apiKey, publicKey, callbackId, merTradeNo, currency, remark) => {
        TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
        TapNGoSDK.doRecurrentPayment(appId, apiKey, publicKey, callbackId, merTradeNo, currency, remark);
    }
    doSingleAndRecurrentPayment = (isSandBoxMode, appId, apiKey, publicKey, callbackId, merTradeNo, price, currency, remark, notifyUrl) => {
        var convertedPrice = price;
        if (price.constructor === Number){
            convertedPrice = price.toString;
        }
        TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
        TapNGoSDK.doSingleAndRecurrentPayment(appId, apiKey, publicKey, callbackId, merTradeNo, convertedPrice, currency, remark, notifyUrl);
    }
    getSdkVersion = () => {
        return new Promise((resolve, reject) => {
            if (Platform.OS === 'ios') {
                TapNGoSDK.getSDKVersion((error, result) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(result);
                }
                });
            }else {
                TapNGoSDK.getSDKVersion((error) => {
                        console.log(error);
                        reject(error);
                    }, (result) => {
                        resolve(result);
                    }
                );
            }
        });
    }
}
const RNTapNGoSDK = new RNTapNGoSDKClass();
export {RNTapNGoSDK, TapNGoSDK};
