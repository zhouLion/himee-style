/**
 * @description: 认证信息
 */
export interface AuthInfo {
    // 账号名
    account?: string;
    // 头像
    avatarId?: number;
    // 到期时间
    expiration?: string;
    // 过期时间（秒）
    expire?: number;
    // 有效期
    expireMillis?: number;
    // 用户名
    name?: string;
    // 刷新令牌
    refreshToken?: string;
    // 令牌
    token?: string;
    // 令牌类型
    tokenType?: string;
    // 用户id
    userId?: number;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 权限资源
 */
export interface AuthorityResourceDTO {
    // 是否区分大小写
    caseSensitive?: boolean;
    // 是否启用URI/按钮权限
    enabled?: boolean;
    // 拥有的资源编码
    resourceList?: string[];
    // 拥有的角色编码
    roleList?: string[];
}

/**
 * @description: 字典项
 */
export interface Dictionary {
    // 编码
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 类选择器
    cssClass?: string;
    // css样式
    cssStyle?: string;
    // 描述
    describe?: string;
    // 图标
    icon?: string;
    // 主键
    id?: number;
    // 类型标签
    label?: string;
    // 名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 排序
    sortValue?: number;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 登录参数
 */
export interface LoginParamDTO {
    // 账号
    account?: string;
    // 验证码
    code?: string;
    // 授权类型
    grantType?: string;
    // 验证码KEY
    key?: string;
    // 密码
    password?: string;
    // 刷新token
    refreshToken?: string;
}

export interface Map_string_List_Dictionary__ {
    [index: string]: Array<unknown>;
}

export interface Map_string_List_Option__ {
    [index: string]: Array<unknown>;
}

export interface Map_string_Map_string_string__ {
    [index: string]: Record<string, unknown>;
}

export interface Map_string_string_ {
    [index: string]: string;
}

/**
 * @description: 菜单
 */
export interface Menu {
    // 组件
    component?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 实现类
    customClass?: string;
    // 数据范围
    dataScope?: string;
    // 描述
    describe?: string;
    // 分组
    group?: string;
    // 菜单图标
    icon?: string;
    // 主键
    id?: number;
    // 是否默认
    isDef?: boolean;
    // 通用菜单
    isGeneral?: boolean;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 路径
    path?: string;
    // 内置
    readonly?: boolean;
    // 类型
    resourceType?: string;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 树层级
    treeGrade?: number;
    // 树路径
    treePath?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 下拉、多选组件选项
 */
export interface Option {
    label?: string;
    text?: string;
    value?: string;
}

export interface RouterMeta {
    // 是否固定标签
    affix?: boolean;
    // 面包屑
    breadcrumb?: boolean;
    // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
    carryParam?: boolean;
    // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
    currentActiveMenu?: string;
    // 内嵌iframe的地址
    frameSrc?: string;
    // 隐藏该路由在面包屑上面的显示
    hideBreadcrumb?: boolean;
    // 当前路由不再菜单显示
    hideMenu?: boolean;
    // 当前路由不再标签页显示
    hideTab?: boolean;
    // 图标
    icon?: string;
    // 是否忽略KeepAlive缓存
    ignoreKeepAlive?: boolean;
    // 标题
    title?: string;
    // 指定该路由切换的动画名
    transitionName?: string;
}

export interface R_AuthInfo_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: AuthInfo;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_AuthorityResourceDTO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: AuthorityResourceDTO;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_List_Menu__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Menu[];
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_List_VueRouter__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: VueRouter[];
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_string_List_Dictionary___ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: Dictionary[];
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_string_List_Option___ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: Option[];
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_string_Map_string_string___ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: {
            [index: string]: string;
        };
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_string_string__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: string;
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_boolean_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: boolean;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_string_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: string;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface VueRouter {
    alwaysShow?: boolean;
    // 组件
    component?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 名称
    label?: string;
    meta?: RouterMeta;
    // 菜单名称
    name?: string;
    // 路径
    path?: string;
    // 重定向
    redirect?: string;
    // 排序号
    sortValue?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

export interface TQueryOfcaptchaUsingGET {
    // key
    key: string;
}
export type TResponseOfcaptchaUsingGET = any;
export interface TQueryOfcheckUsingGET_8 {
    // code
    code: string;
    // key
    key: string;
}
export type TResponseOfcheckUsingGET_8 = R_boolean_;
export type TResponseOfverifyUsingGET = R_AuthInfo_;
export type TBodyOfcodeListUsingPOST = string[];
export type TResponseOfcodeListUsingPOST = R_Map_string_List_Option___;
export type TBodyOflistUsingPOST_1 = string[];
export type TResponseOflistUsingPOST_1 = R_Map_string_List_Dictionary___;
export type TBodyOfenumListsUsingPOST = string[];
export type TResponseOfenumListsUsingPOST = R_Map_string_List_Option___;
export type TBodyOfenumsUsingPOST = string[];
export type TResponseOfenumsUsingPOST = R_Map_string_Map_string_string___;
export interface TQueryOfmyMenusUsingGET {
    // 菜单组
    group?: string;
    // 用户id
    userId?: number;
}
export type TResponseOfmyMenusUsingGET = R_List_Menu__;
export interface TQueryOfmyRouterUsingGET {
    // 菜单组
    group?: string;
    // 用户id
    userId?: number;
}
export type TResponseOfmyRouterUsingGET = R_List_VueRouter__;
export type TBodyOfloginUsingPOST = LoginParamDTO;
export type TResponseOfloginUsingPOST = R_AuthInfo_;
export interface TQueryOflogoutUsingPOST_1 {
    // clientId
    clientId?: string;
    // userId
    userId?: number;
}
export type TResponseOflogoutUsingPOST_1 = R_boolean_;
export type TBodyOffindParamsUsingPOST = string[];
export type TResponseOffindParamsUsingPOST = R_Map_string_string__;
export interface TQueryOfgetValueUsingGET {
    // defVal
    defVal?: string;
    // key
    key: string;
}
export type TResponseOfgetValueUsingGET = R_string_;
export interface TQueryOfvisibleUsingGET {
    // 菜单id
    menuId?: number;
    // 指定用户id
    userId?: number;
}
export type TResponseOfvisibleUsingGET = R_AuthorityResourceDTO_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/anno/captcha"): {
    /**
     * @description 验证码
     * @see [Swagger doc: 验证码](http://120.79.250.86:8762/doc.html#/认证模块/登录接口/captchaUsingGET)
     *
     * @tag登录接口
     */
    get(options: { query: TQueryOfcaptchaUsingGET }): Promise<TResponseOfcaptchaUsingGET>;
  };
  (url: "/anno/check"): {
    /**
     * @description 验证验证码
     * @see [Swagger doc: 验证验证码](http://120.79.250.86:8762/doc.html#/认证模块/登录接口/checkUsingGET_8)
     *
     * @tag登录接口
     */
    get(options: { query: TQueryOfcheckUsingGET_8 }): Promise<TResponseOfcheckUsingGET_8>;
  };
  (url: "/anno/verify"): {
    /**
     * @description 验证token
     * @see [Swagger doc: 验证token](http://120.79.250.86:8762/doc.html#/认证模块/登录接口/verifyUsingGET)
     *
     * @tag登录接口
     */
    get(options: {}): Promise<TResponseOfverifyUsingGET>;
  };
  (url: "/dictionary/codeList"): {
    /**
     * @description 根据类型编码查询字典项
     * @see [Swagger doc: 根据类型编码查询字典项](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/codeListUsingPOST)
     *
     * @tag通用Controller
     */
    post(options: { body: TBodyOfcodeListUsingPOST }): Promise<TResponseOfcodeListUsingPOST>;
  };
  (url: "/dictionary/codes"): {
    /**
     * @description 根据类型编码查询字典项
     * @see [Swagger doc: 根据类型编码查询字典项](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/listUsingPOST_1)
     *
     * @tag通用Controller
     */
    post(options: { body: TBodyOflistUsingPOST_1 }): Promise<TResponseOflistUsingPOST_1>;
  };
  (url: "/enumList"): {
    /**
     * @description 获取当前系统指定枚举 List
     * @see [Swagger doc: 获取当前系统指定枚举 List](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/enumListsUsingPOST)
     *
     * @tag通用Controller
     */
    post(options: { body: TBodyOfenumListsUsingPOST }): Promise<TResponseOfenumListsUsingPOST>;
  };
  (url: "/enums"): {
    /**
     * @description 获取当前系统指定枚举 Map
     * @see [Swagger doc: 获取当前系统指定枚举 Map](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/enumsUsingPOST)
     *
     * @tag通用Controller
     */
    post(options: { body: TBodyOfenumsUsingPOST }): Promise<TResponseOfenumsUsingPOST>;
  };
  (url: "/menu/menus"): {
    /**
     * @description 查询用户可用的所有菜单
     * @see [Swagger doc: 查询用户可用的所有菜单](http://120.79.250.86:8762/doc.html#/认证模块/资源/myMenusUsingGET)
     *
     * @tag资源
     */
    get(options: { query: TQueryOfmyMenusUsingGET }): Promise<TResponseOfmyMenusUsingGET>;
  };
  (url: "/menu/router"): {
    /**
     * @description 查询用户可用的所有菜单路由树
     * @see [Swagger doc: 查询用户可用的所有菜单路由树](http://120.79.250.86:8762/doc.html#/认证模块/资源/myRouterUsingGET)
     *
     * @tag资源
     */
    get(options: { query: TQueryOfmyRouterUsingGET }): Promise<TResponseOfmyRouterUsingGET>;
  };
  (url: "/noToken/login"): {
    /**
     * @description 登录接口
     * @see [Swagger doc: 登录接口](http://120.79.250.86:8762/doc.html#/认证模块/登录接口/loginUsingPOST)
     *
     * @tag登录接口
     */
    post(options: { body: TBodyOfloginUsingPOST }): Promise<TResponseOfloginUsingPOST>;
  };
  (url: "/noToken/logout"): {
    /**
     * @description 退出
     * @see [Swagger doc: 退出](http://120.79.250.86:8762/doc.html#/认证模块/登录接口/logoutUsingPOST_1)
     *
     * @tag登录接口
     */
    post(options: { query: TQueryOflogoutUsingPOST_1 }): Promise<TResponseOflogoutUsingPOST_1>;
  };
  (url: "/parameter/findParams"): {
    /**
     * @description 根据key批量获取系统参数
     * @see [Swagger doc: 根据key批量获取系统参数](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/findParamsUsingPOST)
     *
     * @tag通用Controller
     */
    post(options: { body: TBodyOffindParamsUsingPOST }): Promise<TResponseOffindParamsUsingPOST>;
  };
  (url: "/parameter/value"): {
    /**
     * @description 根据key获取系统参数
     * @see [Swagger doc: 根据key获取系统参数](http://120.79.250.86:8762/doc.html#/认证模块/通用Controller/getValueUsingGET)
     *
     * @tag通用Controller
     */
    get(options: { query: TQueryOfgetValueUsingGET }): Promise<TResponseOfgetValueUsingGET>;
  };
  (url: "/resource/visible"): {
    /**
     * @description 查询用户可用的所有资源
     * @see [Swagger doc: 查询用户可用的所有资源](http://120.79.250.86:8762/doc.html#/认证模块/资源/visibleUsingGET)
     *
     * @tag资源
     */
    get(options: { query: TQueryOfvisibleUsingGET }): Promise<TResponseOfvisibleUsingGET>;
  };
}

export interface RequestProvider {
  get(url: string, options: any): Promise<any>;
  post(url: string, options: any): Promise<any>;
  put(url: string, options: any): Promise<any>;
  head(url: string, options: any): Promise<any>;
  delete(url: string, options: any): Promise<any>;
  patch(url: string, options: any): Promise<any>;
}

/**
 * create a request by a provider
 */
export function createRequest(provider: RequestProvider): IApiFn {
  return (url: string) => {
    return {
      get: (options: any) => provider.get(url, options),
      post: (options: any) => provider.post(url, options),
      put: (options: any) => provider.put(url, options),
      head: (options: any) => provider.head(url, options),
      delete: (options: any) => provider.delete(url, options),
      patch: (options: any) => provider.patch(url, options),
    };
  };
}
