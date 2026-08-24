# mini_app_open_sdk_h5
This is h5 micro app open sdk.


#### sdk-global.ts 什么情况下需要引入
`sdk-global.ts` 是 SDK 的全局 TypeScript 类型声明文件，只含类型声明、无运行时逻辑。

- ✅ 使用方是 **TypeScript 项目**，希望调用 `window.chat.*` 等 API 时获得类型提示、参数校验和自动补全时引入。将文件拷入项目（建议重命名为 `sdk-global.d.ts`），并确保它在 `tsconfig.json` 的 `include` 范围内即可。
- ❌ 使用方是**纯 JS 项目**或不需要类型检查时**无需引入**
  
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
     * --response示例
     * { 
     *   data: {
     *     currency: "USDT",  //企业货币类型 string
     *     workSpaceId: 1234  //企业ID number
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * 非企业小程序时获取，data返回{}
     * {
     *   data: {}, code: 0 | 1
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
     * --response示例
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
     * --response示例
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
     * --response示例
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
     * --response示例
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
     * --response示例
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
     * 从客户端获取存储的数据 
     * @param params 请求参数
     * --请求参数
     * { 
     *    key: 'userName' //存储的数据对应的key
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --response示例
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

    /** 
     * 获取用户余额 
     * @param callback 请求后执行函数
     * @callback response 回调数据结构 
     * --response示例
     * { 
     *    data: {
     *      totalAmt: 0.00,
     *      totalAmtCurrencyType: "PEA",
     *      PEA: {
     *        user_avail: 0.00,
     *        user_balance: 0.00,
     *        user_box: 0.00
     *      }
     *    }, //返回所传key对应的数据
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.getRequestAssets((response) => {
     *   console.log('用户余额信息', response)
     * });
     */
    getRequestAssets: (callback: (response: object | null) => void) => void

    /**
     * 发送机器人信息
     * @param params 请求参数
     * --请求参数 
     * {
     *    botName: 'timer_bot',  //机器人名称
     *    title: '弹框的标题',
     *    list: [
     *      { 
     *        label: '选项1',  // 选项标题
     *        value: true | false // true 表示该选项被开启，false 表示关闭
     *      },
     *      { 
     *        label: '选项2',  // 选项标题
     *        value: true | false // true 表示该选项被开启，false 表示关闭
     *      }
     *    ]
     * }
     * @callback response 回调数据结构 
     * --response示例
     * {
     *   data:{
     *     botName: 'timer_bot',  //机器人名称
     *     title: '弹框的标题', 
     *     list: [
     *       { 
     *         label: '选项1',  // 选项标题
     *         value: true | false // true 表示该选项被开启，false 表示关闭
     *       },
     *       { 
     *         label: '选项2',  // 选项标题
     *         value: true | false // true 表示该选项被开启，false 表示关闭
     *       }
     *     ],
     *     result : 'existing', //本次操作结果类型：
     *                          // invalidate_bot_name  → 小程序传的机器人名字为空或无效
     *                          // no_existing          → 服务器中不存在该机器人
     *                          // existing             → 本地已有可用机器人（无需再创建）
     *                          // rejected             → 用户点击了“拒绝”
     *                          // accepted             → 用户点击了“允许”（最终能否使用取决于 can_use）
     *                          // others               → 其它参数不合理提前返回
     *                          // unknow               → 未知错误，try catch
     *     can_use: '1' | '0' //机器人最终是否可用，'1'表示可直接使用，'0'表示机器人不可用（如拒绝、激活失败、机器人不存在）
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.onSendBotInfo({
     *   botName: 'timer_bot',
     *   title: '发送一次以下消息',
     *   list: [
     *     { label: '订单变更', value: false },
     *     { label: '审批变更', value: false }
     *   ]
     *  }, (response) => {
     *   console.log('机器人数据',response)
     * });
     */
    onSendBotInfo:(params: object, callback?: (response: object | null) => void) => void

    /** 
     * 设置fastClick
     * @example
     * window.chat.initFastClick(); 
     */
    initFastClick: () => void

    /**
     * 设置右上角按钮深色/浅色
     * @param params 请求参数
     * --请求参数 
     * themeType: 1 //1是浅色，0是深色
     * @example
     * window.chat.setThemeType(0); //设置深色
     */
    setThemeType: (themeType: number) => void

    /**
     * 发送心跳
     * @param appIdOrCallback 当前小程序 appId，或直接传入回调函数
     * @param callback 第一个参数为 appId 时的回调函数
     * @example
     * window.chat.sendKeepHeart(${小程序ID app-id}, (response) => {
     *   console.log(response)
     * });
     */
    sendKeepHeart(
      appIdOrCallback?: string | ((response: object | null) => void),
      callback?: (response: object | null) => void
    ) => void

    /**
     * 设置右上角bar位置
     * @param params 请求参数
     * --请求参数 
     * {x: number, y: number}
     * @example
     * window.chat.setMiniBarPos({
     *  x: 30,
     *  y: 30
     * }); //设置右上角按钮隐藏
     */
    setMiniBarPos: (params: object) => void

    /**
     * 设置震动效果
     * @param duration 震动持续时长，单位为毫秒；默认为50毫秒
     * --请求参数 
     * duration: 100
     * @example
     * window.chat.setToVibrate(100); //设设置震动效果
     */
    setToVibrate: (duration: number) => void

    /**
     * 隐藏或显示底部
     * @param bool=true 隐藏底部，false显示底部
     * @example
     * window.chat.postBottomBarHide(true); 
     */
    postBottomBarHide: (bool: boolean) => void
  
    /**
     * 隐藏或显示导航条
     * @param bool=true 隐藏导航条，false显示导航条
     * @example
     * window.chat.postMiniAppContainerAppBarHide(true); 
     */
    postMiniAppContainerAppBarHide: (bool: boolean) => void
  
    /**
     * 唤起flutter的键盘操作
     * @param action 
     * show:打开数字键盘，不带小数点
     * showWithDot：打开带小数点的键盘
     * hide:关闭小数点键盘
     * @example
     * window.chat.openFlutterKeyboardTap('show')
     */
    openFlutterKeyboardTap(action: KeyTapActionType)=>void
    
    /**
     * flutter的键盘操作传过来的值
     * @param data 
     * keyTap：键盘按入数字
     * delete：键盘按入删除
     * done：键盘按入完成
     * value:传过来的数字或者小数点，该值是每个单独的数字，按下1，就传过来1，其他也是如此
     * @example
     * window.chat.getFlutterKeyboardTap((response)=>{})
     */
    getFlutterKeyboardTap(callback?: (response: object | null) => void)=>void

    /**
     * 打开扫码
     * @param callback 
     * @callback response 回调数据结构 
     * --response示例 
     * { 
     *   data: {
     *    url: 'xxx.xx/me/FCJFG9_2' // 扫码后得到的结果
     *   }, 
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * @example
     * window.chat.openScan((response)=>{})
     */
    openScan(callback?: (response: object | null) => void)=>void

    /**
     * 打开上传头像
     * @param bool 是否已有头像
     * @param callback 
     * @callback response 回调数据结构 
     * --response示例 
     * { 
     *   data: {
     *     imageUrl: 'Image/4e/65/4e65cf404236065505b35c77ea6fa38c/4e65cf404236065505b35c77ea6fa38c.jpg' //图片相对路径
     *     iconGaussian: 'LoIhmcj]WBt7~qoeWBoeM{bHRjWB' //高斯模糊处理后
     *   }, 
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
     * }
     * window.chat.openUploadAvatar(false,(response)=>{})
     */
    openUploadAvatar(bool: boolean, callback?: (response: object | null) => void)=>void

     /**
      * 打开Webview
      * @param url 要打开的网页地址
      * @example
      * window.chat.onOpenWebview('https://example.com')
      */
     onOpenWebview(url: string) => void

     /**
      * 关闭当前页面，回到控制台
      * @example
      * window.chat.onHomeBack()
      */
    onHomeBack() => void
  
    /**
     * 蓝牙 - 开始扫描附近设备
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {
     *     scanning: true,           // 是否正在扫描 boolean；false 表示扫描已结束
     *     devices: [                // 当前已发现的设备列表 array
     *       {
     *         deviceId: '5C:1C:88:44:56:B7',  // 设备唯一标识（MAC地址）
     *         name: 'TPY-S(BLE)',             // 设备名称
     *         rssi: 0,                        // 信号强度，越大越近
     *         type: 'generic',                // 设备类型枚举值 
     *         typeLabel: '经典蓝牙',           // 设备类型中文描述
     *         isConnected: false              // 是否已连接，扫描列表中始终为 false
     *       },
     *     ],
     *     error: '蓝牙权限被拒绝'  // 仅失败时存在，如"蓝牙权限被拒绝"、"请先开启蓝牙" 
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.bluetoothStartScan((response) => {
     *   if (!response.data.scanning && response.data.error) {
     *     console.error('扫描异常', response.data.error)
     *     return
     *   }
     *   console.log('已发现设备', response.data.devices)
     * })
     */
    bluetoothStartScan(callback?: (response: object | null) => void) => void
    
    /**
     * 蓝牙 - 停止扫描设备
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {
     *     scanning: false  // 扫描已停止 boolean
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.bluetoothStopScan((response) => {
     *   if (response.code === 0) {
     *     console.log('扫描已停止', response.data.scanning)
     *   }
     * })
     */
    bluetoothStopScan(callback?: (response: object | null) => void) => void
    
    /**
     * 蓝牙 - 连接指定设备
     * @param deviceId 要连接的设备唯一标识，由 bluetoothStartScan 返回的 devices[].deviceId
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {
     *     deviceId: 'xx:xx:xx:xx:xx:xx',  // 已连接的设备唯一标识
     *     connected: true                  // 是否连接成功
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.bluetoothConnect('xx:xx:xx:xx:xx:xx', (response) => {
     *   if (response.code === 0 && response.data.connected) {
     *     console.log('连接成功', response.data.deviceId)
     *   }
     * })
     */
    bluetoothConnect(deviceId: string, callback?: (response: object | null) => void) => void
    
    
    /**
     * 蓝牙 - 断开当前已连接的设备
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {
     *     deviceId: 'xx:xx:xx:xx:xx:xx',  // 已断开的设备唯一标识 
     *     connected: false                  // 连接状态，断开后为 false 
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.bluetoothDisconnect((response) => {
     *   if (response.code === 0) {
     *     console.log('已断开设备', response.data.deviceId)
     *   }
     * })
     */
    bluetoothDisconnect(callback?: (response: object | null) => void) => void

    /**
     * 获取我的头像信息
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {
     *     text     : string,  // 头像上显示的缩写文字（首字符大写，为空时返回 "-"）
     *     color0   : string,  // 渐变起始色，默认'#DBDBDB'
     *     color1   : string,  // 渐变结束色，默认 '#B8B8B8'
     *     background: string, // 背景渐变色 linear-gradient(to bottom, color0, color1)
     *     textColor: string,  // 文字颜色，默认'#fff'
     *   },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.getMyAvatarInfo((response) => {
     *     console.log(response.data.text)       // 'AB'
     *     console.log(response.data.color0)     // '#85A3F9'
     *     console.log(response.data.color1)     // '#5D60F6'
     *     console.log(response.data.background) // 'linear-gradient(to bottom, #85A3F9, #5D60F6)'
     *     console.log(response.data.textColor)  // '#FFFFFF'
     * })
     */
    getMyAvatarInfo(callback?: (response: object | null) => void) => void

    /**
     * 根据聊天室 ID 直接进入聊天页
     * @param chatId 聊天室 ID（必填）number
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例（成功）
     * {
     *   success: true
     * }
     * --response示例（找不到聊天室）
     * {
     *   success: false,
     *   error: string  // 错误描述
     * }
     * @example
     * window.chat.openChatRoom(123, (response) => {
     *   if (response.success) {
     *     console.log('已跳转聊天室')
     *   } else {
     *     console.error('跳转失败', response.error)
     *   }
     * })
     */
    openChatRoom(chatId: number, callback?: (response: object | null) => void) => void

    /**
     * 设置屏幕常亮
     * @param keepScreenOn true 开启常亮，false 关闭常亮（允许熄屏）
     * @param callback 回调执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   success: true,        //本次操作是否成功 boolean
     *   keepScreenOn: true    //当前屏幕常亮状态 boolean
     * }
     * @example
     * window.chat.setKeepScreenOn(true, (response) => {
     *   console.log('屏幕常亮已开启', response.keepScreenOn)
     * })
     * window.chat.setKeepScreenOn(false) //关闭屏幕常亮
     */
    setKeepScreenOn(keepScreenOn: boolean, callback?: (response: object | null) => void) => void

    /** 
     * 往客户端存储全局数据 
     * @param params 请求参数
     * --请求参数 
     * { 
     *    key: 'userName', //数据存储对应的key string
     *    value: 'may' //需要存储的数据 string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * { 
     *    data: { isSuccess: true }, 
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.postSaveGlobalLocalStorage({
     *   key: 'userName',
     *   value: 'may'
     * }, (response) => {
     *    console.log('回调数据', response)
     * });
     */
    postSaveGlobalLocalStorage: (params: object | null, callback?: (response: object | null) => void) => void

    /** 
     * 往客户端获取全局存储的数据 
     * @param params 请求参数
     * --请求参数 
     * { 
     *    key: 'userName', //需要读取数据对应的key string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * { 
     *    data: { key: 'userName', value: 'may' }, //返回所传key对应的数据
     *    code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.postReadGlobalLocalStorage({
     *   key: 'userName'
     * }, (response) => {
     *    console.log('回调数据', response)
     * });
     */
    postReadGlobalLocalStorage: (params: object | null, callback: (response: object | null) => void) => void

    /**
     * 显示 Flutter 原生 Toast
     * @param params 请求参数
     * --请求参数
     * {
     *   msg: '操作成功',  //Toast 文案 string
     *   message: '操作成功', //msg 的兼容别名，二者传其一即可 string
     *   type: 'success' | 'error' | 'fail' | 'warning' | 'info' //Toast 类型，默认 info
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: { success: true },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.showToast({ msg: '操作成功', type: 'success' }, (response) => {
     *   console.log('toast 结果', response)
     * });
     */
    showToast: (params: object, callback?: (response: object | null) => void) => void
  
    /**
     * 关闭当前外部应用面板/小程序容器，返回上一层级
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {},
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.closeApp((response) => {
     *   //先回传成功再关闭容器，避免页面销毁后收不到回调
     *   console.log('closeApp 结果', response)
     * });
     */
    closeApp: (callback?: (response: object | null) => void) => void
  
    /**
     * 设置 Flutter 小程序容器顶部导航栏标题
     * @param params 请求参数
     * --请求参数
     * {
     *   title: '首页' //导航栏标题 string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: { success: true },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.setNavigationBarTitle({ title: '首页' }, (response) => {
     *   console.log('设置标题结果', response)
     * });
     */
    setNavigationBarTitle: (params: object, callback?: (response: object | null) => void) => void
  
    /**
     * 打开 Flutter 日期选择器，支持按月选择或日期区间选择
     * @param params 请求参数
     * --请求参数
     * {
     *   isTimePeriod: false, //false 为按月选择，返回 yyyy/MM；true 为日期区间，返回 yyyy/MM/dd boolean
     *   startTime: '2024/01/01', //区间模式下的起始日期 string
     *   endTime: '2024/12/31' //区间模式下的结束日期 string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: { value: '2024/06' }, //按月返回 yyyy/MM，区间返回起止日期
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错，用户取消或非法参数返回失败
     * }
     * @example
     * window.chat.showPicker({ isTimePeriod: false }, (response) => {
     *   console.log('选择结果', response)
     * });
     * 说明：日期限制在 2020 至 2100 年，区间不能超过一年；用户取消或输入无效时返回失败，不能静默不回调。
     */
    showPicker: (params: object, callback?: (response: object | null) => void) => void
  
    /**
     * 获取宿主当前网络类型
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: { networkType: 'wifi' | 'mobile' | 'none' },
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.getNetworkType((response) => {
     *   console.log('网络类型', response.data.networkType)
     * });
     */
    getNetworkType: (callback?: (response: object | null) => void) => void
  
    /**
     * 让 Flutter 当前输入焦点失焦，从而隐藏系统键盘
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: {},
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.hideKeyboard((response) => {
     *   console.log('hideKeyboard 结果', response)
     * });
     */
    hideKeyboard: (callback?: (response: object | null) => void) => void
  
    /**
     * 根据用户 ID 打开与好友的聊天页
     * @param params 请求参数
     * --请求参数
     * {
     *   userId: 12345 //目标用户 ID，须能转换为大于 0 的值 number | string
     * }
     * @param callback 请求后执行函数
     * @callback response 回调数据结构
     * --response示例
     * {
     *   data: { success: true }, //跳转成功；用户无效、频率超限或跳转失败返回错误
     *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错
     * }
     * @example
     * window.chat.sendMessageToFriend({ userId: 12345 }, (response) => {
     *   console.log('跳转结果', response)
     * });
     * 说明：Flutter 侧限制每分钟最多调用 10 次。
     */
    sendMessageToFriend: (params: object, callback?: (response: object | null) => void) => void

    /**
     * 下载文件
     * @param url 文件下载地址
     * @returns 下载结果 Promise
     * --进行中回参（options.onProgress）
     * {
     *   url: 'https://example.com/file.pdf', //文件下载地址 string
     *   progress: 42, //下载进度，0-100 number
     *   received: 4404019, //已接收字节数 number
     *   total: 10485760 //文件总字节数，未知时为 -1 number
     * }
     * --最终态回参（Promise then/catch）
     * {
     *   url: 'https://example.com/file.pdf', //文件下载地址 string
     *   success: true, //是否下载或命中缓存成功 boolean
     *   localPath: '/path/to/file.pdf', //成功时的本地文件路径；失败时为 null string | null
     *   fromCache: false, //是否命中 Flutter 本地缓存 boolean
     *   error: '下载异常: ...' //失败原因，仅失败时存在 string
     * }
     * @example
     * window.chat.downloadFile('https://example.com/file.pdf', {
     *   onProgress(progress) {
     *     console.log('下载进度', progress.progress, progress.received, progress.total)
     *   }
     * }).then((result) => {
     *   console.log('下载完成', result.localPath, result.fromCache)
     * }).catch((error) => {
     *   console.error('下载失败', error.error)
     * });
     */
    downloadFile: (url: string, options?: object) => Promise<object>

    /**
     * 请求小程序分享链接
     * Flutter 事件：onShareMiniAppLink
     * @example
     * window.chat.requestSharedLink({ invite_code: 'hereisthecode' }, (response) => {
     *   console.log(response.data.url)
     * })
     */
    requestSharedLink: (
      params: Record<string, unknown>,
      callback?: (response: { code: number; data: { url: string } } | null) => void
    ) => void
  }
  
}
```
