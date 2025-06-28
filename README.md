# mini_app_open_sdk_h5

This is h5 mini app open sdk.

## Project Setup

```sh
pnpm install
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
### DOC

#### 协议结构
```jsos
{
  "methodName": "eventName",
  "methodParam": {
    "key": value,
    "key1": value1,
    },
}
```

#### 接口
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
  }
}
```