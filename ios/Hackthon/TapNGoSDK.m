//
//  TapNGoSDK.m
//  TapNGoSDK
//
//  Created by Tim Lam on 12/3/2019.
//  Copyright © 2019 TapNGoSDK. All rights reserved.
//

#import "TapNGoSDK.h"

#if __has_include("RCTConvert.h")
#import "RCTConvert.h"
#else
#import <React/RCTConvert.h>
#endif

#import <tapngosdk/TGSDKSettings.h>
#import <tapngosdk/TGSDKPaymentManager.h>

#ifndef DEBUG
#define NSLog(...) /* replace NSLog method with nothing/blank */
#endif

static NSString  *const kSubscriptionName = @"TGSDKPayResult";

@interface TapNGoSDK ()

@property (strong, nonatomic) TGSDKPaymentManager *manager;

@end

@implementation TapNGoSDK

RCT_EXPORT_MODULE()

- (void)printDebugLog:(NSString *)appId apiKey:(NSString *)apiKey publicKey:(NSString *)publicKey callbackId:(NSString *)callbackId merTradeNo:(NSString *)merTradeNo price:(NSString *)price currency:(NSString *)currency remark:(NSString *)remark notifyUrl:(NSString *)notifyUrl
{
#ifdef DEBUG
    NSLog(@"appId: %@", appId);
    NSLog(@"apiKey: %@", apiKey);
    NSLog(@"publicKey: %@", publicKey);
    NSLog(@"callbackId: %@", callbackId);
    NSLog(@"merTradeNo: %@", merTradeNo);
    NSLog(@"price String: %@", price);
    NSLog(@"price doubleValue: %f", [price doubleValue]);
    NSLog(@"currency: %@", currency);
    NSLog(@"remark: %@", remark);
    NSLog(@"notifyUrl: %@", notifyUrl);
#endif
}

- (void)printDebugLog:(NSString *)functionName payResult:(TGSDKPayResult *)payResult
{
#ifdef DEBUG
    NSLog(@"resultCode: %@", payResult.resultCode);
    NSLog(@"recurrentToken: %@" , payResult.recurrentToken);
    NSLog(@"merTradeNo: %@" , payResult.merTradeNo);
    NSLog(@"tradeStatus: %@" , [payResult getStringForTradeStatus:payResult.tradeStatus]);
    NSLog(@"tradeNo: %@", payResult.tradeNo);
    NSLog(@"message: %@", payResult.message);
#endif
}

#pragma mark - Getters (Lazy Loading)

- (TGSDKPaymentManager *)manager
{
    if (!_manager) {
        self.manager = [[TGSDKPaymentManager alloc] initWithDelegate:self];
    }
    return _manager;
}

#pragma mark RNTap&GoSDK functions

RCT_EXPORT_METHOD(doSinglePayment:(NSString *)appId apiKey:(NSString *)apiKey publicKey:(NSString *)publicKey callbackId:(NSString *)callbackId merTradeNo:(NSString *)merTradeNo price:(NSString *)price currency:(NSString *)currency remark:(NSString *)remark notifyUrl:(NSString *)notifyUrl)
{
    @try {
        [self printDebugLog:appId apiKey:apiKey publicKey:publicKey callbackId:callbackId merTradeNo:merTradeNo price:price currency:currency remark:remark notifyUrl:notifyUrl];

        TGSDKPayment *payment = [[TGSDKPayment alloc] initWithAppId:appId apiKey:apiKey publicKey:publicKey callBackId:callbackId];
        [payment setSinglePaymentWithMerTradeNo:merTradeNo totalPrice:price.doubleValue currency:currency remark:remark notifyUrl:notifyUrl];

        [self.manager doPayment:payment];
    } @catch (NSException *exception) {
        NSLog(@"[ERROR]: %@", exception.description);
    }
}

RCT_EXPORT_METHOD(doRecurrentPayment:(NSString *)appId apiKey:(NSString *)apiKey publicKey:(NSString *)publicKey callbackId:(NSString *)callbackId merTradeNo:(NSString *)merTradeNo currency:(NSString *)currency remark:(NSString *)remark)
{
    @try {
        [self printDebugLog:appId apiKey:apiKey publicKey:publicKey callbackId:callbackId merTradeNo:merTradeNo price:NULL currency:currency remark:remark notifyUrl:nil];

        TGSDKPayment *payment = [[TGSDKPayment alloc] initWithAppId:appId apiKey:apiKey publicKey:publicKey callBackId:callbackId];
        [payment setRecurrentPaymentWithMerTradeNo:merTradeNo currency:currency remark:remark];

        [self.manager doPayment:payment];
    } @catch (NSException *exception) {
        NSLog(@"[ERROR]: %@", exception.description);
    }
}

RCT_EXPORT_METHOD(doSingleAndRecurrentPayment:(NSString *)appId apiKey:(NSString *)apiKey publicKey:(NSString *)publicKey callbackId:(NSString *)callbackId merTradeNo:(NSString *)merTradeNo price:(NSString *)price currency:(NSString *)currency remark:(NSString *)remark notifyUrl:(NSString *)notifyUrl)
{
    @try {
        [self printDebugLog:appId apiKey:apiKey publicKey:publicKey callbackId:callbackId merTradeNo:merTradeNo price:price currency:currency remark:remark notifyUrl:notifyUrl];

        TGSDKPayment *payment = [[TGSDKPayment alloc] initWithAppId:appId apiKey:apiKey publicKey:publicKey callBackId:callbackId];
        [payment setSinglePaymentWithMerTradeNo:merTradeNo totalPrice:price.doubleValue currency:currency remark:remark notifyUrl:notifyUrl];

        [self.manager doPayment:payment];
    } @catch (NSException *exception) {
        NSLog(@"[ERROR]: %@", exception.description);
    }
}

RCT_EXPORT_METHOD(getSDKVersion:(RCTResponseSenderBlock)callback)
{
    @try {
        callback(@[[NSNull null], [TGSDKSettings getSdkVersion]]);
    } @catch (NSException *exception) {
        NSLog(@"[ERROR]: %@", exception.description);
    }
}

RCT_EXPORT_METHOD(setSandBoxModeEnabled:(NSString *)flag)
{
    @try {
        [TGSDKSettings setSandBoxModeEnable:flag.boolValue];
    } @catch (NSException *exception) {
        NSLog(@"[ERROR]: %@", exception.description);
    }
}

#pragma mark RNTap&Go SDK callback

- (NSArray<NSString *> *)supportedEvents
{
    return @[kSubscriptionName];
}

- (void)sendPayResultEvent:(NSString *)subscriptionName payResult:(TGSDKPayResult *)payResult
{
    NSString *resultCode = payResult.resultCode;
    NSString *recurrentToken = payResult.recurrentToken;
    NSString *merTradeNo = payResult.merTradeNo;
    NSString *tradeStatus = [payResult getStringForTradeStatus:payResult.tradeStatus];
    NSString *message = payResult.message;
    NSString *tradeNo = payResult.tradeNo;

    [self sendEventWithName:subscriptionName body:@{
                                                    @"resultCode": (resultCode) ?: @"",
                                                    @"recurrentToken": (recurrentToken) ?: @"",
                                                    @"merTradeNo": (merTradeNo) ?: @"",
                                                    @"tradeStatus": (tradeStatus) ?: @"",
                                                    @"message": (message) ?: @"",
                                                    @"tradeNo": (tradeNo) ?: @""
                                                    }];
}


#pragma mark Tap&Go SDK delegate

- (void)doPaymentFailWithPayResult:(TGSDKPayResult *)payResult
{
    [self printDebugLog:@"doPaymentFailWithPayResult" payResult:payResult];

    [self sendPayResultEvent:kSubscriptionName payResult:payResult];
}

- (void)doPaymentSuccessWithPayResult:(TGSDKPayResult *)payResult
{
    [self printDebugLog:@"doPaymentSuccessWithPayResult" payResult:payResult];

    [self sendPayResultEvent:kSubscriptionName payResult:payResult];
}

- (void)doPaymentErrorWithPayResult:(TGSDKPayResult*)payResult
{
    [self printDebugLog:@"doPaymentErrorWithPayResult" payResult:payResult];

    [self sendPayResultEvent:kSubscriptionName payResult:payResult];
}

@end
  
