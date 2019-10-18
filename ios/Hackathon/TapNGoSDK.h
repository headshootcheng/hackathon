//
//  TapNGoSDK.h
//  TapNGoSDK
//
//  Created by Tim Lam on 12/3/2019.
//  Copyright © 2019 TapNGoSDK. All rights reserved.
//

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#if __has_include("RCTEventEmitter.h")
#import "RCTEventEmitter.h"
#else
#import <React/RCTEventEmitter.h>
#endif

#import <Foundation/Foundation.h>
#import <tapngosdk/TGSDKPaymentResultDelegate.h>

@interface TapNGoSDK : RCTEventEmitter <RCTBridgeModule, TGSDKPaymentResultDelegate>

@end
  
