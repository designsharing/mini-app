# mini_app_open_sdk_h5
This is h5 mini app open sdk.

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
    <script type="module">
      window.addEventListener('load', () => {
        window.chat.closeLoading()
      });
    </script>
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
     * --回调数据结构示例
     * { 
     *   data: {},
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.getAppConfig((response: object) => {
     *   console.log('appConfig ',response.data)
     * });
     */
    getAppConfig: (callback?: (response: object | null) => void) => void

    /**
     * 获取设备信息
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --回调数据结构示例 
     * { 
     *   data: {},
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
     * --回调数据结构示例
     * { 
     *   data: {}, 
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
     * --回调数据结构示例
     * { 
     *   data: {}, 
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
     *   prepayId: string //预付订单号 
     * }
     * @example
     * window.chat.openCashier({ prepay_id: "从后端获取预付订单号"}, (response) => {
     *   //收银台操作执行完后回调后续操作
     * })
     */
    openCashier: (params: object, callback?: (response: object | null) => void) => void

    /**
     * 分享链接
     * @param params 请求参数
     * --请求参数 
     * { 
     *   url: string  //小程序路由
     * }
     * @example
     * window.chat.sharedLink({
     *   url: '/help'
     * })
     */
    sharedLink: (params: object) => void

    /**
     * 设置右上角按钮显示or隐藏
     * @param params 请求参数
     * --请求参数 
     * { 
     *   display: 1 //1是显示，0是隐藏；默认1（显示）
     * }
     * @example
     * window.chat.miniappBar(0); //设置右上角按钮隐藏
     */
    miniappBar:(params: number) => void

    /**
     * 设置屏幕横向纵向
     * @param params 请求参数
     * --请求参数 
     * orientation: 1 //1是纵向，0是左横向，2是右横向；默认1（纵向）
     * @example
     * window.chat.rotateScreen(0); //设置左横向
     */
    rotateScreen:(orientation: number) => void

    /**
     * 当客户端准备就绪时会执行，可在此事件的回调中初始化前端项目
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --回调数据结构示例 
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
     *    key: string, //数据存储对应的key
     *    value: any //需要存储的数据 
     * }
     * --请求参数示例：{ key: 'userName', value: 'may' }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --回调数据结构示例 
     * { 
     *    data: { isSuccess: true }, 
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.storeOnNative({
     *     key: 'userName',
     *     value: 'may'
     *   }, (response) => {
     *    console.log('回调数据', { data: { isSuccess: true }, code: 0})
     * });
     */
    storeOnNative(params: object | null, callback?: (response: object | null) => void) => void

    /** 
     * 往客户端获取存储的数据 
     * @param params 请求参数
     * --请求参数
     * { 
     *    key: string //存储的数据对应的key
     * }
     * --请求参数示例：{ key: 'userName'}
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --回调数据结构示例 
     * { 
     *    data: {}, //返回所传key对应的数据
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * --返回数据示例：{ key: 'userName', value: 'may' }
     * @example
     * window.chat.fetchStoredFromNative({ key: 'userName' }, (response) => {
     *   console.log('取数据', response.data) // response.data => { key: 'userName', value: 'may' }
     * });
     */
    fetchStoredFromNative(params: object | null, callback: (response: object | null) => void) => void
  }
  
}
```
