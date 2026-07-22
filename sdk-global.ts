export interface QueueData {
  name: string
  data: any
  code: number
}

export type WsActionQueueData = {
  requestId: string
  action: string
}

export type WSQueueData = WsActionQueueData & { data: any }

export enum ControlModuleTheme {
  LIGHTMODE,
  DARKMODE,
}

export enum RuntimeConditionKeyEnum {
  BridgeConnected = 'isBridgeConnected',
  Heartbeat = 'isHeartbeat',
  HttpBaseURL = 'httpBaseURL',
  Token = 'token',
  AppID = 'appID',
  EnvMode = 'envMode',
  WebSocketConnected = 'isWebSocketConnected',
  Platform = 'platform',
  Language = 'language',
  ChannelId = 'channelId',
  WsId = 'wsId',
  CurrentAppVersion = 'currentAppVersion',
  GroupId = 'groupId',
}

export enum EnvModeEnum {
  dev = 'development',
  pro = 'production'
}

export type ConditionsType = {
  isBridgeConnected: boolean
  isHeartbeat: boolean
  httpBaseURL: string
  token: string
  appID: string
  envMode: EnvModeEnum
  isWebSocketConnected: boolean
  platform: string
  language: number | string
  channelId: number | string
  wsId: number | string
  currentAppVersion: string
  groupId: number | string
}

export type ShowToastType = 'success' | 'error' | 'fail' | 'warning' | 'info'

export interface ShowToastParams {
  /** Flutter 原生 Toast 文案；message 作为兼容别名。 */
  msg?: string
  message?: string
  type?: ShowToastType
}

export interface SetNavigationBarTitleParams {
  title: string
}

export interface ShowPickerParams {
  /** true 为日期区间，false 为按月选择。 */
  isTimePeriod?: boolean
  startTime?: string
  endTime?: string
  /** 兼容旧测试调用参数，Flutter 会忽略。 */
  type?: string
  value?: string
}

export interface SendMessageToFriendParams {
  userId: number | string
}

/** 外部可传入的样式配置类型 */
interface DebuggerLogSDKStyle {
  maskBg?: string
  panelBg?: string
  panelRadius?: string
  panelPadding?: string
  safeDistancePaddingTop?: string | number
  panelTop?: string | number

  inputBorderColor?: string
  inputRadius?: string
  inputPadding?: string

  okBtnBg?: string
  okBtnColor?: string
  okBtnRadius?: string
  okBtnPadding?: string

  cancelBtnBg?: string
  cancelBtnColor?: string
  cancelBtnRadius?: string
  cancelBtnPadding?: string

  closeBtnBg?: string
  fullBtnBg?: string
  closeBtnColor?: string
  closeBtnRadius?: string
  closeBtnPadding?: string

  logWidth?: string,
  logHeight?: string,
  logPanelLeft?: string | number,
  logBg?: string
  logColor?: string
  logItemBorderColor?: string
  logFontSize?: string
}

export interface AppConfig {
  httpBaseURL: string
  token: string
  channelId: number
  language: string
  platform: string
  currentAppVersion: string
  topPadding?: number
  bottomPadding?: number
  workSpaceId: number
  uid: number
  screenHeight: number
  groupId: number
  appId: string
  amountRange: {
    limitHigh: number
    limitLow: number
  }
  hideNavigationBar: boolean
  // 是否默认显示flutter都头部
  showFlutterNavigationBarDefaultValue: boolean
}

export interface ReadLocalStorageType { key: string, value: string }

export interface GetServerTimeType { serverTime: number }

export interface OpenFlutterPinkTimeType { startTime: number; endTime: number }

export interface RefreshTokenType { token: string, httpBaseURL: string, workSpaceId: number, groupId: number }

export interface ShowingDebugLogType {
  data: {
    logSource: string
    msg: string
    tag: string
  }[]
}

export interface AppStatus {
  status: {
    AppStatus?: 'resumed' | 'close' | 'paused'
    bgStatus: 'show' | 'hide' | null
  }
}

export interface FlutterQueryGameType { query: string }

// 奖期类型
export interface NewRoundType {
  action: string
  appid: string
  current: {
    closure_time: number
    draw_time: number
    round: string
    server_time: number
    simple_round: string
    start_time: number
  }
  data_from_type: string
  game_id: string
  game_name: string
  key: string
  last: {
    main_result: string[],
    result: any[]
    round: string
    simple_round: string
  }
  localPhoneTime: number
}
// 开奖记录列表数据类型
export interface NewRoundListType {
  total_cnt: number
  items: NewRoundType['last'][]
}
// 投注记录列表数据类型
export interface NewRecordListType {
  total_bet_cnt: number
  total_cnt: number
  total_profit: string
  total_win_amt: string
  win_rate: string
  items: {
    bet_amount: string
    class_name: string
    id: string
    item_id: number
    item_name: string
    odds: string
    result: number
    round: number
    time: number
    winning_amount: string
  }[]
}
// 下注结果参数
export interface NormalBetType {
  asset: string;
  result: { code: number; message: string }[]
}
// 获取游戏信息的数据类型
export interface GameInfoType {
  games: {
    amount: string
    bet_cnt: number
    game_id: string
    current: NewRoundType['current']
    last: NewRoundType['last']
  }[]
}

/**用户投注的类型 */
export interface UserBetTypeItem {
  projectid: number
  amount?: number | string
}
/**下注提交参数 */
export interface BettingParam {
  gameId: string
  round: string
  items: UserBetTypeItem[]
}
// 开机记录查询参数
export interface RecordParam {
  gameId?: string
  page: number
  count?: number
  start_time?: number
  end_time?: number
  result?: number
}
// 用户余额参数类型
export interface UserAssetType {
  asset: string
  currency: string
}

// ws进入yx后返回的数据类型
export interface EnterGameCallBackDataType {
  message: string
  resource: string
  status: number
  version: number
}


export interface FlutterGetRoundResultType {
  text: string
  result: string[]
  color: string
}


export enum KeyTapActionType {
  KEY_TAP = 'keyTap',
  DELETE = 'delete',
  DONE = 'done',
  SHOW = 'show',
  SHOW_WITH_DOT = 'showWithDot',
  HIDE = 'hide'
}

export interface KeyboardTapValueType {
  action: KeyTapActionType
  requestId?: string,
  value?: string | number
}

export interface RuntimeBarrierInitRunTime {
  appId: string
  envMode: EnvModeEnum
}
/**游戏类型 */
export enum APP_ID_ENUM {
  // 全屏lucky
  LUCKY = 'lucky',
  // 半屏幕lucky
  LUCKY2 = 'lucky2',
  // 企业
  COMPANY = 'company',
}

// ws在初始化是挂载的一些提示方法
export interface WeSocketInitType {
  errorCodes: (string | number)[]
  vantToastFn: (text: string) => void
  luckyLayoutToast: (code: number, text?: string) => void
}

export type InitAxiosType = {
  loader: (props?: object | undefined) => () => void
}

type AxiosRequestType<R = any, Q extends any = {}> = {
  (payload?: Q, configure?: any): Promise<R>
  abort?: Function
}

type AxiosResultType =
  <R = any, Q = any>(
    url: string,
    config?: { cancelable?: boolean, loading?: boolean, silent?: boolean, headers?: { disableTransform?: boolean, noToken?: boolean } }
  ) => AxiosRequestType<R, Q>


export interface ErrorCollectorOptions {
  appName: string
  env: string
}


export enum ErrorType {
  /**
 * JS 运行时错误
 * 捕获来源：
 * - window.onerror
 * 常见场景：
 * - 语法错误（SyntaxError）
 * - 运行时异常（TypeError / ReferenceError）
 * - Vue 组件执行异常
 * - 第三方库抛出的同步异常
 * 特点：
 * - 通常会中断当前 JS 执行流程
 * - 属于高优先级错误
 */
  JS_ERROR = 'JS_ERROR',
  /**
 * Promise 未处理的异常
 * 捕获来源：
 * - window.addEventListener('unhandledrejection')
 * 常见场景：
 * - async / await 中未 try-catch
 * - Promise.then 中 throw
 * - 接口请求 reject 后未捕获
 * 特点：
 * - 不一定立即影响 UI
 * - 但容易在复杂异步链路中引发隐性问题
 */
  PROMISE_ERROR = 'PROMISE_ERROR',
  /**
  * 静态资源加载失败
  * 捕获来源：
  * - window.addEventListener('error', capture = true)
  * 覆盖资源类型：
  * - <script> JS 文件加载失败
  * - <link> CSS 文件加载失败
  * - 字体、音频等资源
  * 常见原因：
  * - 网络中断 / 弱网
  * - CDN 异常
  * - 资源路径错误
  * - 熄屏 / WebView 恢复后资源失效
  */
  RESOURCE_ERROR = 'RESOURCE_ERROR',
  /**
   * 图片资源加载异常
   * 捕获来源：
   * - <img> 标签的 error 事件
   * 常见场景：
   * - 图片 404 / 403
   * - CDN 超时
   * - WebView 熄屏后图片上下文丢失
   * - iOS / Android WebView 内存回收导致图片失效
   * 特点：
   * - 通常不影响 JS 逻辑
   * - 但会直接影响用户可见 UI
   * - 可通过重载、自愈机制修复
   */
  IMG_ERROR = 'IMG_ERROR',
  /**
   * 性能异常 / 白屏异常
   * 捕获来源：
   * - 首屏渲染检测
   * - DOM 状态异常判断
   * 常见场景：
   * - JS 阻塞导致页面长时间未渲染
   * - 异常错误导致渲染中断
   * - Flutter WebView 恢复后白屏
   * 特点：
   * - 用户感知极强
   * - 但通常没有明确 JS 异常堆栈
   */
  PERFORMANCE_ERROR = 'PERFORMANCE_ERROR',
  /**
   * 内存使用预警
   * 捕获来源：
   * - performance.memory（部分浏览器支持）
   * 常见场景：
   * - 大量图片 / Canvas 未释放
   * - 长时间运行的 WebView
   * - Flutter 内嵌 H5 多次进入未销毁
   * 特点：
   * - 属于预警类异常
   * - 不一定立即 crash，但可能导致后续白屏或资源加载失败
   */
  MEMORY_WARNING = 'MEMORY_WARNING',
  /**
   * 应用 / 页面生命周期变化
   * 捕获来源：
   * - document.visibilitychange
   * - Flutter 主动通知（如 resume / pause）
   * 常见场景：
   * - App 熄屏
   * - App 切后台
   * - WebView 被系统暂停 / 恢复
   * 作用：
   * - 用于辅助分析错误发生的上下文
   * - 判断异常是否与生命周期切换有关
   */
  APP_STATE_CHANGE = 'APP_STATE_CHANGE',
}

export type CustomToastType = (options: {
  message: string;
  type?: string | undefined;
  isImages?: string | undefined;
  forbidClick?: boolean | undefined;
}) => any

export interface CollectedError {
  type: ErrorType
  message: string
  stack?: string
  url: string
  userAgent: string
  time: number
  appName: string
  env: string
  extra?: Record<string, any>
}

// 唤起flutter首映台的数据类型
export interface FlutterShowCashierSheetType {
  amountText: string | number
  currencyText: string | number
  title: string | number
  transferTypeCode: string | number
  transferTypeValue: string
  transferTypeTitle: string
  myPaymentMethod: string | number
  myPaymentMethodTip: string | number
}
/**
 * 
 * on开头，需要监听flutter或ws传过来的值
 * post开头，需要我们向flutter或ws传递事件
 */

declare global {
  interface Window {
    chat: {
      /**日志插件 */
      DebuggerLogSDK: {
        init: (data: {
          style?: DebuggerLogSDKStyle
          /**密码成功后回调 */
          showLogCallBack?: () => void
          /**隐藏时回调 */
          hideCallBack?: () => void
          /**列表在更新时是否默认滚动到底部 */
          isScrollTop?: boolean
          passwordMd5: string
        }) => void
        updateStyle: (style: DebuggerLogSDKStyle) => void
        /**用于更新日志 */
        updateLogs: (data: {
          title: string
          logList: {
            msg: string
            logSource: string
            tag: string
          }[]
        }, action?: 'push' | 'unshift') => void
        /**打开密码弹窗 */
        show: () => void
        /**关闭弹窗 */
        hide: () => void
      }
      /**公共的状态管理和数据共享 */
      RUN_TIME_BARRIER: {
        /**桥心跳状态 */
        isHeartbeat: ConditionsType['isHeartbeat']
        /**桥的连接状态 */
        isBridgeConnected: ConditionsType['isBridgeConnected']
        /**http连接 */
        httpBaseURL: ConditionsType['httpBaseURL']
        /**token，sdk使用token的地方，token有更新，需要同步 */
        token: ConditionsType['token']
        /** appid 在axios里面用到 */
        appID: ConditionsType['appID']
        /**ws是否连接成功 */
        isWebSocketConnected: ConditionsType['isBridgeConnected']
        /**项目运行的状态 */
        envMode: EnvModeEnum
        /**平台 */
        platform: ConditionsType['platform']
        /**语言 */
        language: ConditionsType['language']
        /**渠道id */
        channelId: ConditionsType['channelId']
        /**平台id */
        wsId: ConditionsType['wsId']
        /**当前app的版本 */
        currentAppVersion: ConditionsType['currentAppVersion']
        /**群主id，可能没有 */
        groupId: ConditionsType['groupId']
        /** 等待完整放行：桥连接，http，token */
        waitOpen: () => Promise<void>
        /** 等待桥连接且http有的情况放行 */
        waitNoTokenOpen: () => Promise<void>
        /** 等待桥连接的放行 */
        waitOnlyBridgeOpen: () => Promise<void>
        /** 更新某个条件状态 */
        update: <K extends RuntimeConditionKeyEnum>(key: K, value: ConditionsType[K]) => void
        /** 当前条件快照（调试用） */
        snapshot: () => Readonly<ConditionsType>
        /**初始注册一下功能 */
        init: (initData: RuntimeBarrierInitRunTime) => void
      }
      /**axios的封装 */
      IM_AXIOS: {
        initAxios: (init: InitAxiosType) => void
        initMethods: () => ({
          get: AxiosResultType,
          post: AxiosResultType
        })
      }
      /**项目错误监听 */
      Error_Collector: {
        reloadTypeList: string[]
        init: (options: ErrorCollectorOptions) => void
        start: () => void
        stop: () => void
        onError: (listener: (error: CollectedError) => void) => () => boolean
      }
      /**放在flutter的http事件 */
      Brideg_Http: {
        initBridegHttpMethods: () => ({
          get: AxiosResultType,
          post: AxiosResultType
        })
        useLoading: <R>(plugin: (config: boolean) => R) => any
        useError: (codeInfo: Record<string, string>, fn: CustomToastType) => void
      }
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
       * 打im接口
       * @param params 请求参数
       * --请求参数 params
       * { 
       *   type: 'POST' | 'GET', //请求类型 strig 
       *   url: string, //请求地址 string
       *   params: object //其他参数 
       * }
       * @param callback 请求后执行函数
       * @callback response 回调数据结构 
       * --response示例 
       * { 
       *   data: {}, 
       *   code: 0 | 1 //0代表请求正常，并返回数据data；1代表请求报错 
       * }
       * @example
       * @待补充
       */
      request: (params: object, callback?: (response: object | null) => void) => void

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
      openCashier: (params: object, callback?: (data: object | null) => void) => void

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
       * 设置右上角按钮显示or隐藏
       * @param params 请求参数
       * --请求参数 
       * display: 1 //1是显示，0是隐藏；默认1（显示）
       * @example
       * window.chat.miniappBar(0); //设置右上角按钮隐藏
       */
      miniappBar: (params: number) => void

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
       * 往客户端获取存储的数据 
       * @param params 需要存储的数据 
       * @param callback 回调执行函数 
       */
      fetchStoredFromNative: (params: object | null, callback: (data: object | null) => void) => void
      /**
       * 获取程序唤醒状态
       * @param callback 请求后执行函数
       * @callback response 回调数据结构
       * --response示例
       * { 
       *   data: {}, 
       *   code: 0 | 1 //0代表请求正常并返回数据data，1代表请求报错 
       * }
       */
      getAppStatus: (callback?: (response: object | null) => void) => void

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
       *  }, (data) => {
       *   console.log('机器人数据',data)
       * });
       */
      onSendBotInfo: (params: object, callback?: (response: object | null) => void) => void

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
       * appid: string 
       * @param callback 回调执行函数
       * @example
       * window.chat.sendKeepHeart( (data) => {
       *   console.log(data)
       * }); 
       */
      sendKeepHeart: (appid?: string, callback?: (response: object | null) => void) => void
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
      openFlutterKeyboardTap: (action: KeyTapActionType) => void

      /**
       * flutter的键盘操作传过来的值
       * @param data 
       * keyTap：键盘按入数字
       * delete：键盘按入删除
       * done：键盘按入完成
       * value:传过来的数字或者小数点，该值是每个单独的数字，按下1，就传过来1，其他也是如此
       * @example
       * window.chat.getFlutterKeyboardTap((data)=>{})
       */
      getFlutterKeyboardTap: (callback?: (data: object | null) => void) => void
      /**
       * 打开扫码
       */
      openScan: (callback?: (data: object | null) => void) => void
      /**
       * 打开上传头像
       */
      openUploadAvatar: (bool: boolean, callback?: (data: object | null) => void) => void

      /** 往客户端存储全局数据 */
      postSaveGlobalLocalStorage: (params: { key: any, value: any }, callback?: (data: object | null) => void) => void
      /** 往客户端获取全局存储的数据 */
      postReadGlobalLocalStorage: (params: object | null, callback: (data: object | null) => void) => void
      /** 打开 Webview */
      onOpenWebview: (url: string) => void
      /** 蓝牙 - 开始扫描附近设备 */
      bluetoothStartScan: (callback?: (data: object | null) => void) => void
      /** 蓝牙 - 停止扫描设备 */
      bluetoothStopScan: (callback?: (data: object | null) => void) => void
      /** 蓝牙 - 连接指定设备 */
      bluetoothConnect: (deviceId: string, callback?: (data: object | null) => void) => void
      /** 蓝牙 - 断开当前已连接的设备 */
      bluetoothDisconnect: (callback?: (data: object | null) => void) => void
      /** 获取我的头像信息 */
      getMyAvatarInfo: (callback?: (data: object | null) => void) => void
      /** 关闭当前页面，回到控制台 */
      onHomeBack: () => void
      /** 根据聊天室 ID 直接进入聊天页 */
      openChatRoom: (chatId: number, callback?: (data: object | null) => void) => void
      /** 分享小程序二维码；新旧 Flutter 宿主当前均未注册对应 handler。 */
      shareMiniAppQrCode: (params?: { query?: Record<string, string | number>; title?: string }) => void
      /** 设置屏幕常亮 */
      setKeepScreenOn: (keepScreenOn: boolean, callback?: (data: object | null) => void) => void
      /** 显示 Flutter 原生 Toast */
      showToast: (params: ShowToastParams, callback?: (data: object | null) => void) => void
      /** 关闭外部应用面板 */
      closeApp: (callback?: (data: object | null) => void) => void
      /** 设置 Flutter 导航栏标题 */
      setNavigationBarTitle: (params: SetNavigationBarTitleParams, callback?: (data: object | null) => void) => void
      /** 打开 Flutter 日期选择器 */
      showPicker: (params: ShowPickerParams, callback?: (data: object | null) => void) => void
      /** 获取当前网络类型 */
      getNetworkType: (callback?: (data: object | null) => void) => void
      /** 隐藏系统键盘 */
      hideKeyboard: (callback?: (data: object | null) => void) => void
      /** 给好友发送消息 */
      sendMessageToFriend: (params: SendMessageToFriendParams, callback?: (data: object | null) => void) => void

      /**
       * 注销消息监听器：
       * - off() 清空所有监听器
       * - off(callback) 注销全局消息的该回调
       * - off(methodName) 注销该方法所有监听器
       * - off(methodName, callback) 注销该方法的该回调
       */
      off: (methodName?: string | ((payload: any) => void), callback?: (payload: any) => void) => void
      /**
      * 注册消息监听器：
      * - on(callback) 监听所有消息
      * - on(methodName, callback) 监听指定方法消息
      */
      on: (methodName: string | ((payload: any) => void), callback?: (payload: any) => void) => void
      /**
       * 请求日志打印。
       * 新旧 Flutter 宿主当前均未注册 onStartDebugLog handler。
       */
      startLog: () => void
      /**
       * 发送拿用户日志 确认获取日志或者暂停日志获取，isEnable：true为获取，false为暂停，seconds日志发送过来的频率，默认5秒
       * @param {
       *    isEnable: boolean
       *    seconds?: number
       *   } 参数
       * @param callback 回调执行函数
       */
      sendShowingDebugLog: (params: { isEnable: boolean, seconds?: number }, callback?: (data: object | null) => void) => void
    }

    init_config?: {
      wsId?: string
      gId?: string
      httpBaseUrl?: string
      token?: string
      platform?: string
      language?: string
      currentAppVersion?: string
      orgChannel?: string
      orgChannelGroup?: string
      isNewGameVersion?: boolean
    }
    flutter_inappwebview?: {
      callHandler: (name: string, data?: any) => Promise<any>
    }
    webkit?: any
    OpenSdk?: any
    mini_app_web_msg?: any
    IM_DB_F_H: Record<string, any>
  }
}
