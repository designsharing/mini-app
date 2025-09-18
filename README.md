# mini_app_open_sdk_h5

This is h5 mini app open sdk.

## APK Download
https://s3.cqbaijiale.com/build-android/b1838e31a0-3-android-play-1.0.171-1749714678.apk

## 接口
```typescript
interface Window {
  chat: {
    /**
     * 获取配置
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    getAppConfig: (success?: (data: object | null) => void, fail?: () => void) => void

    /**
     * 获取设备信息
     */
    getDeviceInfo: (success?: (data: object | null) => void, fail?: () => void) => void

    /**
     * 关闭进入小程序时flutter开启的loading
     */
    closeLoading: () => void
    /**
     * 小程序登陆
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    login: (success?: (data: object | null) => void, fail?: () => void) => void
    /**
     * 打im接口
     * @param params 请求参数 { type: 'POST' | 'GET' 请求类型, url: string 请求地址, params: object 其他参数 }
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    request: (params: object, success?: (data: object | null) => void, fail?: () => void) => void
    /**
     * 获取位置
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    getLocation: (success?: (data: object | null) => void, fail?: () => void) => void,
    /**
     * 打开收银台
     * @param params 请求参数 { prepayId: string 预付订单号 }
     */
    openCashier: (params: object) => void,
    /**
     * 分享链接
     * @param params 请求参数 { url: string 小程序路由, imageUrl: string 小程序封面图, description: string 小程序描述 }
     */
    sharedLink: (params: object) => void,

     /**
     * 设置导航栏标题
     * @param params 请求参数 { title: string 标题 }
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    setNavigationBarTitle:(params: object, success?: () => void, fail?: () => void)=>void

    /**
     * 设置导航栏颜色
     * @param params 请求参数 { color: string 颜色 }
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    setNavigationBarColor:(params: object, success?: () => void, fail?: () => void) => void
    /**
     * 隐藏home按钮
     * @param params 请求参数 { hide: boolean 是否隐藏 }
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    hideHomeButton:(params: object, success?: () => void, fail?: () => void) => void
    /**
     * 设置当前页面是否可以分享
     * @param params 请求参数 { enable: boolean 是否可以分享, url: string 小程序路由, imageUrl: string 小程序封面图, description: string 小程序描述 }
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    enableShare:(params: object, success?: () => void, fail?: () => void) => void
    /**
     * 打开相册
     * @param params 图片列表请求参数 {index: 1, data: [ { name: “1”, url: “https://…/xxx.jpg” }, { name: “2”, url: “https://…/xxx.jpg”} ] }
     */
    openAlbum:(params: object) => void
    }
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
     * @param success 成功后执行函数
     */
    onReady: (success?: (data: object | null) => void) => void

    /**
     * 获取程序唤醒状态
     * @param success 成功后执行函数
     * @param fail 失败后执行函数
     */
    getAppStatus:(success?: () => void, fail?: () => void) => void
}
```
