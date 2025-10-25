# mini_app_open_sdk_h5
This is h5 micro app open sdk.

#### index.html中引用mini-app-open-sdk@${version}.min.js文件
```html
<!DOCTYPE html>
<html lang="">
  <head>
    <script src="/mini-app-open-sdk@1.0.17.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

#### 接口
```typescript
interface Window {
  /**
   * 回调返回数据结构示例
   * @example 
   * @callback response 回调返回数据结构
   * --回调数据结构示例
   * { 
   *   data: {}, 
   *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
   * }
   * @example
   * window.chat.getAppConfig((response: object) => {
   *   if(response.code == 0){   //如果请求正常
   *     console.log('appConfig ',response.data)
   *   }
   * });
  */
  chat: {
    /**
     * 获取配置
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --repsonse示例
     * { 
     *   data: {
     *     currency: "USDT",  //企业货币类型 string
     *     workSpaceId: 1234  //企业ID number
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.getAppConfig((response: object) => {
     *   console.log('appConfig ',response)
     * });
     */
    getAppConfig: (callback?: (response: object | null) => void) => void

    /**
     * 获取设备信息
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --repsonse示例
     * { 
     *   data: {
     *     safeArea: {
     *       top: 47.0,    //顶部安全距离 number
     *       bottom: 34.0  //底部安全距离 number
     *     },
     *     languageCode: "zh"  //设备当前语言信息
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.getDeviceInfo((response: object) => {
     *   console.log('deviceInfo ',response.data)
     * });
     */
    getDeviceInfo: (callback?: (response: object | null) => void) => void

    /**
     * 关闭进入小程序时客户端开启的loading
     * @example
     * window.addEventListener('load', () => {
     *   window.chat.closeLoading()
     * });
     */
    closeLoading: () => void

    /**
     * 小程序登录
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --repsonse示例
     * { 
     *   data: {
     *     code: "347djchd-3394-44-98dd-2323dc9cdjc" // 用户登录凭证 string
     *   }, 
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.login((response) => {
     *  console.log('login code', response.data.code)
     * })
     */
    login: (callback?: (response: object | null) => void) => void

    /**
     * 获取位置
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --repsonse示例
     * { 
     *    data: {
     *       "position": {
     *         "longitude": -122.084,
     *         "latitude": 37.4219983,
     *         "timestamp": 1761288810843,
     *         "accuracy": 5.0,
     *         "altitude": 5.0,
     *         "altitude_accuracy": 0.31958332657814026,
     *         "floor": null,
     *         "heading": 0.0,
     *         "heading_accuracy": 0.0,
     *         "speed": 0.0,
     *         "speed_accuracy": 0.5,
     *         "is_mocked": false,
     *         "gnss_satellite_count": 0.0,
     *         "gnss_satellites_used_in_fix": 0.0
     *      },
     *      "placemark": {
     *        "name": "1600",
     *        "street": "1600 Amphitheatre Pkwy",
     *        "isoCountryCode": "US",
     *        "country": "United States",
     *        "postalCode": "94043",
     *        "administrativeArea": "California",
     *        "subAdministrativeArea": "Santa Clara County",
     *        "locality": "Mountain View",
     *        "subLocality": "",
     *        "thoroughfare": "Amphitheatre Parkway",
     *        "subThoroughfare": "1600"
     *      }
     *   }, 
     *   code: 0 | 403 //0代表请求正常，并返回数据data；403代表请求异常
     * }
     * @example
     * window.chat.getLocation((response) => {
     *   console.log('location position',response.data)
     * })
     */
    getLocation: (callback?: (response: object | null) => void) => void

    /**
     * 打开收银台
     * @param params 请求参数
     * --请求参数 
     * { 
     *   prepayId: "347djchd-3394-44-98dd-2323dc9cdjc"  //预付订单号 string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --response示例
     * {
     *    "appId": "23n34nm43nm34nk34jkx", //小程序ID string
     *    "orderPayStatus": true,   //订单支付结果 boolean
     *    "prepayId": "347djchd-3394-44-98dd-2323dc9cdjc" //预付订单号 string
     *  }
     * @example
     * window.chat.openCashier({ prepay_id: "从后端获取预付订单号"}, () => {
     *   //收银台操作执行完后回调后续操作
     * })
     */
    openCashier: (params: object) => void

    /**
     * 分享链接
     * @param params 请求参数
     * --请求参数 
     * { 
     *   url: '/help',  //要分享的小程序页面链接 string
     *   bannerPic: 'https://example.com/help.png', //小程序封面图URL设置；设置成"local"则启动本地相册上传
     *   description: '这是一个帮助页' //小程序描述 string
     * }
     * @example
     * window.chat.sharedLink({
     *   url: '/help',
     *   bannerPic: 'https://example.com/help.png',
     *   description: '这是一个帮助页'  //小程序封面图
     * })
     */
    sharedLink: (params: object) => void

    /**
     * 设置右上角按钮显示or隐藏
     * @param params 请求参数
     * --请求参数 
     * display: 1 //1是显示，0是隐藏；默认1（显示）
     * @example
     * window.chat.miniappBar(0); //设置右上角按钮隐藏
     */
    miniappBar: (params: number) => void

    /**
     * 调用客户端预览图片
     * @param params 请求参数 
     * --请求参数
     * {
     *   index: 1,  //当前预览的图片在集合中的索引值
     *   data: [  // 预览的图片集合
     *     { 
     *        name: “1”, 
     *        url: “https://…/xxx.jpg” 
     *     },
     *     { 
     *        name: “2”, 
     *        url: “https://…/xxx.jpg”
     *     }
     *   ] 
     * }
     * @example
     * window.chat.openAlbum({
     *   index: 1,
     *   data: [  // 预览的图片集合
     *     { 
     *        name: “1”, 
     *        url: “https://…/xxx.jpg” 
     *     },
     *     { 
     *        name: “2”, 
     *        url: “https://…/xxx.jpg”
     *     }
     *   ] 
     * })
     */
    openAlbum: (params: object) => void

    /**
     * 设置屏幕横向纵向
     * @param params 请求参数
     * --请求参数 
     * orientation: 1 //1是纵向，0是左横向，2是右横向；默认1（纵向）
     * @example
     * window.chat.rotateScreen(0); //设置左横向
     */
    rotateScreen: (orientation: number) => void

    /**
     * 当客户端准备就绪时会执行，可在此事件的回调中初始化前端项目
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --repsonse示例
     * { 
     *   data: {}, 
     *   code: 0 | 1 //0代表请求正常并返回数据data，1代表请求报错 
     * } 
     * @example
     * window.chat.onReady((response) => {
     *   //可在此事件的回调中初始化前端项目
     *   app.mount("#app");
     * })
     */
    onReady: (callback?: (response: object | null) => void) => void

    /** 
     * 往客户端存储数据 
     * @param params 请求参数
     * --请求参数 
     * { 
     *    key: 'userName', //数据存储对应的key string
     *    value: 'may' //需要存储的数据 string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --repsonse示例
     * { 
     *    data: { isSuccess: true }, 
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.storeOnNative({
     *   key: 'userName',
     *   value: 'may'
     * }, (response) => {
     *    console.log('回调数据', response)
     * });
     */
    storeOnNative: (params: object | null, callback?: (response: object | null) => void) => void

    /** 
     * 往客户端获取存储的数据 
     * @param params 请求参数
     * --请求参数
     * { 
     *    key: 'userName' //存储的数据对应的key
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --repsonse示例
     * { 
     *    data: {
     *      key: 'userName', 
     *      value: 'may'
     *    }, //返回所传key对应的数据
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.fetchStoredFromNative({ key: 'userName' }, (response) => {
     *   console.log('取数据', response.data) 
     * });
     */
    fetchStoredFromNative: (params: object | null, callback: (response: object | null) => void) => void
  }
  
}
```
