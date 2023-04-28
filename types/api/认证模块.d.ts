/**
 * @description: 认证信息
 */
export interface AuthInfo {
    account?: string;
    avatarId?: number;
    expiration?: string;
    expire?: number;
    expireMillis?: number;
    name?: string;
    refreshToken?: string;
    token?: string;
    tokenType?: string;
    userId?: number;
    workDescribe?: string;
}
/**
 * @description: 权限资源
 */
export interface AuthorityResourceDTO {
    caseSensitive?: boolean;
    enabled?: boolean;
    resourceList?: string[];
    roleList?: string[];
}
/**
 * @description: 字典项
 */
export interface Dictionary {
    code?: string;
    createTime?: string;
    createdBy?: number;
    cssClass?: string;
    cssStyle?: string;
    describe?: string;
    icon?: string;
    id?: number;
    label?: string;
    name?: string;
    readonly?: boolean;
    sortValue?: number;
    state?: boolean;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 登录参数
 */
export interface LoginParamDTO {
    account?: string;
    code?: string;
    grantType?: string;
    key?: string;
    password?: string;
    refreshToken?: string;
    userType?: string;
}
/**
 * @description: 认证信息带租户信息
 */
export interface LoginUserAuthInfo {
    account?: string;
    avatarId?: number;
    expiration?: string;
    expire?: number;
    expireMillis?: number;
    name?: string;
    refreshToken?: string;
    tenantCode?: string;
    token?: string;
    tokenType?: string;
    userId?: number;
    workDescribe?: string;
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
    component?: string;
    createTime?: string;
    createdBy?: number;
    customClass?: string;
    dataScope?: string;
    describe?: string;
    group?: string;
    icon?: string;
    id?: number;
    isDef?: boolean;
    isGeneral?: boolean;
    label?: string;
    parentId?: number;
    path?: string;
    readonly?: boolean;
    resourceType?: string;
    sortValue?: number;
    state?: boolean;
    treeGrade?: number;
    treePath?: string;
    updateTime?: string;
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
    affix?: boolean;
    breadcrumb?: boolean;
    carryParam?: boolean;
    currentActiveMenu?: string;
    frameSrc?: string;
    hideBreadcrumb?: boolean;
    hideMenu?: boolean;
    hideTab?: boolean;
    icon?: string;
    ignoreKeepAlive?: boolean;
    title?: string;
    transitionName?: string;
}
export interface R_AuthInfo_ {
    code?: number;
    data?: AuthInfo;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_AuthorityResourceDTO_ {
    code?: number;
    data?: AuthorityResourceDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_Menu__ {
    code?: number;
    data?: Menu[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_VueRouter__ {
    code?: number;
    data?: VueRouter[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_LoginUserAuthInfo_ {
    code?: number;
    data?: LoginUserAuthInfo;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Map_string_List_Dictionary___ {
    code?: number;
    data?: {
        [index: string]: Dictionary[];
    };
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Map_string_List_Option___ {
    code?: number;
    data?: {
        [index: string]: Option[];
    };
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Map_string_Map_string_string___ {
    code?: number;
    data?: {
        [index: string]: {
            [index: string]: string;
        };
    };
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Map_string_string__ {
    code?: number;
    data?: {
        [index: string]: string;
    };
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_boolean_ {
    code?: number;
    data?: boolean;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_string_ {
    code?: number;
    data?: string;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface VueRouter {
    alwaysShow?: boolean;
    component?: string;
    createTime?: string;
    createdBy?: number;
    label?: string;
    meta?: RouterMeta;
    name?: string;
    path?: string;
    redirect?: string;
    sortValue?: number;
    updateTime?: string;
    updatedBy?: number;
}
export interface TQueryOfcaptchaUsingGET {
    key: string;
}
export type TResponseOfcaptchaUsingGET = any;
export interface TQueryOfcheckUsingGET_8 {
    code: string;
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
    group?: string;
    userId?: number;
}
export type TResponseOfmyMenusUsingGET = R_List_Menu__;
export interface TQueryOfmyRouterUsingGET {
    group?: string;
    userId?: number;
}
export type TResponseOfmyRouterUsingGET = R_List_VueRouter__;
export type TBodyOfloginUsingPOST = LoginParamDTO;
export type TResponseOfloginUsingPOST = R_LoginUserAuthInfo_;
export interface TQueryOflogoutUsingPOST_1 {
    clientId?: string;
    userId?: number;
}
export type TResponseOflogoutUsingPOST_1 = R_boolean_;
export type TBodyOfnoTokenTenantUsingPOST = LoginParamDTO;
export type TResponseOfnoTokenTenantUsingPOST = R_string_;
export type TBodyOffindParamsUsingPOST = string[];
export type TResponseOffindParamsUsingPOST = R_Map_string_string__;
export interface TQueryOfgetValueUsingGET {
    defVal?: string;
    key: string;
}
export type TResponseOfgetValueUsingGET = R_string_;
export interface TQueryOfvisibleUsingGET {
    menuId?: number;
    userId?: number;
}
export type TResponseOfvisibleUsingGET = R_AuthorityResourceDTO_;
export interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/anno/captcha"): {
        /**
         * @description 验证码 captchaUsingGET
         * 登录接口
         */
        get(options: {
            query: TQueryOfcaptchaUsingGET;
        }): Promise<TResponseOfcaptchaUsingGET>;
    };
    (url: "/anno/check"): {
        /**
         * @description 验证验证码 checkUsingGET_8
         * 登录接口
         */
        get(options: {
            query: TQueryOfcheckUsingGET_8;
        }): Promise<TResponseOfcheckUsingGET_8>;
    };
    (url: "/anno/verify"): {
        /**
         * @description 验证token verifyUsingGET
         * 登录接口
         */
        get(options: {}): Promise<TResponseOfverifyUsingGET>;
    };
    (url: "/dictionary/codeList"): {
        /**
         * @description 根据类型编码查询字典项 codeListUsingPOST
         * 通用Controller
         */
        post(options: {
            body: TBodyOfcodeListUsingPOST;
        }): Promise<TResponseOfcodeListUsingPOST>;
    };
    (url: "/dictionary/codes"): {
        /**
         * @description 根据类型编码查询字典项 listUsingPOST_1
         * 通用Controller
         */
        post(options: {
            body: TBodyOflistUsingPOST_1;
        }): Promise<TResponseOflistUsingPOST_1>;
    };
    (url: "/enumList"): {
        /**
         * @description 获取当前系统指定枚举 List enumListsUsingPOST
         * 通用Controller
         */
        post(options: {
            body: TBodyOfenumListsUsingPOST;
        }): Promise<TResponseOfenumListsUsingPOST>;
    };
    (url: "/enums"): {
        /**
         * @description 获取当前系统指定枚举 Map enumsUsingPOST
         * 通用Controller
         */
        post(options: {
            body: TBodyOfenumsUsingPOST;
        }): Promise<TResponseOfenumsUsingPOST>;
    };
    (url: "/menu/menus"): {
        /**
         * @description 查询用户可用的所有菜单 myMenusUsingGET
         * 资源
         */
        get(options: {
            query: TQueryOfmyMenusUsingGET;
        }): Promise<TResponseOfmyMenusUsingGET>;
    };
    (url: "/menu/router"): {
        /**
         * @description 查询用户可用的所有菜单路由树 myRouterUsingGET
         * 资源
         */
        get(options: {
            query: TQueryOfmyRouterUsingGET;
        }): Promise<TResponseOfmyRouterUsingGET>;
    };
    (url: "/noToken/login"): {
        /**
         * @description 登录接口 loginUsingPOST
         * 登录接口
         */
        post(options: {
            body: TBodyOfloginUsingPOST;
        }): Promise<TResponseOfloginUsingPOST>;
    };
    (url: "/noToken/logout"): {
        /**
         * @description 退出 logoutUsingPOST_1
         * 登录接口
         */
        post(options: {
            query: TQueryOflogoutUsingPOST_1;
        }): Promise<TResponseOflogoutUsingPOST_1>;
    };
    (url: "/noToken/tenant"): {
        /**
         * @description 登录租户 noTokenTenantUsingPOST
         * 登录接口
         */
        post(options: {
            body: TBodyOfnoTokenTenantUsingPOST;
        }): Promise<TResponseOfnoTokenTenantUsingPOST>;
    };
    (url: "/parameter/findParams"): {
        /**
         * @description 根据key批量获取系统参数 findParamsUsingPOST
         * 通用Controller
         */
        post(options: {
            body: TBodyOffindParamsUsingPOST;
        }): Promise<TResponseOffindParamsUsingPOST>;
    };
    (url: "/parameter/value"): {
        /**
         * @description 根据key获取系统参数 getValueUsingGET
         * 通用Controller
         */
        get(options: {
            query: TQueryOfgetValueUsingGET;
        }): Promise<TResponseOfgetValueUsingGET>;
    };
    (url: "/resource/visible"): {
        /**
         * @description 查询用户可用的所有资源 visibleUsingGET
         * 资源
         */
        get(options: {
            query: TQueryOfvisibleUsingGET;
        }): Promise<TResponseOfvisibleUsingGET>;
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
export declare function createRequest(provider: RequestProvider): IApiFn;
