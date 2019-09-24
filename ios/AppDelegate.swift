//
//  AppDelegate.swift
//  carlib
//
//  Created by Navanath Prabhudessai on 9/23/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate  {
  var window: UIWindow?
  var bridge: RCTBridge!
  
   func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    
    self.bridge = RCTBridge(delegate: self, launchOptions: launchOptions)
       let rootView = RCTRootView(bridge: bridge, moduleName: "carlib", initialProperties: nil)
       rootView.backgroundColor = UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1)
    self.window = UIWindow(frame: UIScreen.main.bounds)
       let rootViewController = UIViewController()
       rootViewController.view = rootView
    window!.rootViewController = rootViewController
    window!.makeKeyAndVisible()
       return true
   }
  
   func sourceURL(for bridge: RCTBridge) -> URL {
     return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
    
    /* uncomment when DEBUG is defined in debug mode
       #if DEBUG
           return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
       #else
           return (Bundle.main.url(forResource: "main", withExtension: "jsbundle"))!
       #endif
    */
   }
}

