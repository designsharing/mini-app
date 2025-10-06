# mini_app_open_sdk_h5

This is h5 mini app open sdk.

## APK Download
https://s3.cqbaijiale.com/build-android/b1838e31a0-3-android-play-1.0.171-1749714678.apk

#### 接口
```typescript
interface Window {
  /**
   * @example 
   * window.chat.getAppConfig((data: any) => {
   *   if(data.code == 0){   //如果请求正常
   *     console.log('appConfig ',data.data)
   *   }
   * });
  */
  chat: {
    /**
     * 获取配置
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    getAppConfig: (cb?: (data: object | null) => void) => void

    /**
     * 获取设备信息
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    getDeviceInfo: (cb?: (data: object | null) => void) => void

    /**
     * 关闭进入小程序时flutter开启的loading
     */
    closeLoading: () => void

    /**
     * 小程序登陆
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    login: (cb?: (data: object | null) => void) => void

    /**
     * 打im接口
     * @param params 请求参数 { type: 'POST' | 'GET' 请求类型, url: string 请求地址, params: object 其他参数 }
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    request: (params: object, cb?: (data: object | null) => void) => void

    /**
     * 获取位置
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 403, 0代表请求正常并返回数据data, 403代表请求异常 } 
     */
    getLocation: (params: object, cb?: (data: object | null) => void) => void

    /**
     * 打开收银台
     * @param params 请求参数 { prepayId: string 预付订单号 }
     */
    openCashier: (params: object) => void

    /**
     * 分享链接
     * @param params 请求参数 { url: string 小程序路由, imageUrl: string 小程序封面图, description: string 小程序描述 }
     */
    sharedLink: (params: object) => void

    /**
     * 设置导航栏标题
     * @param params 请求参数 { title: string 标题 }
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    setNavigationBarTitle:(params: object, cb?: (data: object | null) => void)=>void

    /**
     * 设置导航栏颜色
     * @param params 请求参数 { color: string 颜色 }
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    setNavigationBarColor:(params: object, cb?: (data: object | null) => void) => void

    /**
     * 隐藏home按钮
     * @param params 请求参数 { hide: boolean 是否隐藏 }
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    hideHomeButton:(params: object, cb?: (data: object | null) => void) => void

    /**
     * 设置当前页面是否可以分享
     * @param params 请求参数 { enable: boolean 是否可以分享, url: string 小程序路由, imageUrl: string 小程序封面图, description: string 小程序描述 }
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    enableShare:(params: object, cb?: (data: object | null) => void) => void

    /**
     * 打开相册
     * @param params 图片列表请求参数 {index: 1, data: [ { name: “1”, url: “https://…/xxx.jpg” }, { name: “2”, url: “https://…/xxx.jpg”} ] }
     */
    openAlbum:(params: object) => void

    /**
     * 设置右上角bar显示or隐藏
     * @param params 请求参数 { display: 1; 默认1, 1是显示,0是隐藏 }
     */
    miniappBar:(params: object) => void

    /**
     * 设置屏幕横向纵向
     * @param params 请求参数 { orientation: 1; 默认1, 1是纵向, 0是左横向, 2是右横向 }
     */
    rotateScreen:(params: object) => void

    /**
     * flutter ready
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 } 
     */
    onReady: (cb?: (data: object | null) => void) => void

    /**
     * 获取程序唤醒状态
     * @param cb 请求后执行函数
     * @callback data { data: data, code: 0 | 1, 0代表请求正常并返回数据data, 1代表请求报错 }
     */
    getAppStatus:(cb?: (data: object | null) => void) => void
  }
  
  
}
```
