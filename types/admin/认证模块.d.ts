/**
 * @description: 认证信息
 */
interface AuthInfo {
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
interface AuthorityResourceDTO {
    caseSensitive?: boolean;
    enabled?: boolean;
    resourceList?: string[];
    roleList?: string[];
}
/**
 * @description: 字典项
 */
interface Dictionary {
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
interface LoginParamDTO {
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
interface LoginUserAuthInfo {
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
interface Map_string_List_Dictionary__ {
    [index: string]: Array<unknown>;
}
interface Map_string_List_Option__ {
    [index: string]: Array<unknown>;
}
interface Map_string_Map_string_string__ {
    [index: string]: Record<string, unknown>;
}
interface Map_string_string_ {
    [index: string]: string;
}
/**
 * @description: 菜单
 */
interface Menu {
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
interface Option {
    label?: string;
    text?: string;
    value?: string;
}
interface RouterMeta {
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
interface R_AuthInfo_ {
    code?: number;
    data?: AuthInfo;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_AuthorityResourceDTO_ {
    code?: number;
    data?: AuthorityResourceDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Menu__ {
    code?: number;
    data?: Menu[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_VueRouter__ {
    code?: number;
    data?: VueRouter[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_LoginUserAuthInfo_ {
    code?: number;
    data?: LoginUserAuthInfo;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Map_string_List_Dictionary___ {
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
interface R_Map_string_List_Option___ {
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
interface R_Map_string_Map_string_string___ {
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
interface R_Map_string_string__ {
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
interface R_Tenant_ {
    code?: number;
    data?: Tenant;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_boolean_ {
    code?: number;
    data?: boolean;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_string_ {
    code?: number;
    data?: string;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
/**
 * @description: 企业
 */
interface Tenant {
    account?: string;
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    code?: string;
    connectType?: string;
    contact?: string;
    countyCode?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    duty?: string;
    expirationTime?: string;
    id?: number;
    logo?: string;
    merchantType?: string;
    mobile?: string;
    name?: string;
    password?: string;
    provCode?: string;
    readonly?: boolean;
    status?: string;
    type?: string;
    unifiedCreditCode?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 商户注册
 */
interface TenantRegisterDTO {
    account?: string;
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    confirmPassword?: string;
    contact?: string;
    countyCode?: string;
    merchantType?: string;
    mobile?: string;
    name?: string;
    password?: string;
    provCode?: string;
    unifiedCreditCode?: string;
    verifyCode?: string;
    verifyKey?: string;
}
interface VueRouter {
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
interface TQueryOfcaptchaUsingGET {
    key: string;
}
type TResponseOfcaptchaUsingGET = any;
interface TQueryOfcheckUsingGET_8 {
    code: string;
    key: string;
}
type TResponseOfcheckUsingGET_8 = R_boolean_;
type TResponseOfverifyUsingGET = R_AuthInfo_;
type TBodyOfcodeListUsingPOST = string[];
type TResponseOfcodeListUsingPOST = R_Map_string_List_Option___;
type TBodyOflistUsingPOST_1 = string[];
type TResponseOflistUsingPOST_1 = R_Map_string_List_Dictionary___;
type TBodyOfenumListsUsingPOST = string[];
type TResponseOfenumListsUsingPOST = R_Map_string_List_Option___;
type TBodyOfenumsUsingPOST = string[];
type TResponseOfenumsUsingPOST = R_Map_string_Map_string_string___;
interface TQueryOfmyMenusUsingGET {
    group?: string;
    userId?: number;
}
type TResponseOfmyMenusUsingGET = R_List_Menu__;
interface TQueryOfmyRouterUsingGET {
    group?: string;
    userId?: number;
}
type TResponseOfmyRouterUsingGET = R_List_VueRouter__;
type TBodyOfloginUsingPOST = LoginParamDTO;
type TResponseOfloginUsingPOST = R_LoginUserAuthInfo_;
interface TQueryOflogoutUsingPOST_1 {
    clientId?: string;
    userId?: number;
}
type TResponseOflogoutUsingPOST_1 = R_boolean_;
type TBodyOfnoTokenTenantUsingPOST = LoginParamDTO;
type TResponseOfnoTokenTenantUsingPOST = R_string_;
type TBodyOfregisterUsingPUT = TenantRegisterDTO;
type TResponseOfregisterUsingPUT = R_Tenant_;
type TBodyOffindParamsUsingPOST = string[];
type TResponseOffindParamsUsingPOST = R_Map_string_string__;
interface TQueryOfgetValueUsingGET {
    defVal?: string;
    key: string;
}
type TResponseOfgetValueUsingGET = R_string_;
interface TQueryOfvisibleUsingGET {
    menuId?: number;
    userId?: number;
}
type TResponseOfvisibleUsingGET = R_AuthorityResourceDTO_;
interface IApiFn {
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
    (url: "/noToken/tenant/register"): {
        /**
         * @description 商户注册 registerUsingPUT
         * 登录接口
         */
        put(options: {
            body: TBodyOfregisterUsingPUT;
        }): Promise<TResponseOfregisterUsingPUT>;
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
interface RequestProvider {
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
declare function createRequest(provider: RequestProvider): IApiFn;

export { AuthInfo, AuthorityResourceDTO, Dictionary, IApiFn, LoginParamDTO, LoginUserAuthInfo, Map_string_List_Dictionary__, Map_string_List_Option__, Map_string_Map_string_string__, Map_string_string_, Menu, Option, R_AuthInfo_, R_AuthorityResourceDTO_, R_List_Menu__, R_List_VueRouter__, R_LoginUserAuthInfo_, R_Map_string_List_Dictionary___, R_Map_string_List_Option___, R_Map_string_Map_string_string___, R_Map_string_string__, R_Tenant_, R_boolean_, R_string_, RequestProvider, RouterMeta, TBodyOfcodeListUsingPOST, TBodyOfenumListsUsingPOST, TBodyOfenumsUsingPOST, TBodyOffindParamsUsingPOST, TBodyOflistUsingPOST_1, TBodyOfloginUsingPOST, TBodyOfnoTokenTenantUsingPOST, TBodyOfregisterUsingPUT, TQueryOfcaptchaUsingGET, TQueryOfcheckUsingGET_8, TQueryOfgetValueUsingGET, TQueryOflogoutUsingPOST_1, TQueryOfmyMenusUsingGET, TQueryOfmyRouterUsingGET, TQueryOfvisibleUsingGET, TResponseOfcaptchaUsingGET, TResponseOfcheckUsingGET_8, TResponseOfcodeListUsingPOST, TResponseOfenumListsUsingPOST, TResponseOfenumsUsingPOST, TResponseOffindParamsUsingPOST, TResponseOfgetValueUsingGET, TResponseOflistUsingPOST_1, TResponseOfloginUsingPOST, TResponseOflogoutUsingPOST_1, TResponseOfmyMenusUsingGET, TResponseOfmyRouterUsingGET, TResponseOfnoTokenTenantUsingPOST, TResponseOfregisterUsingPUT, TResponseOfverifyUsingGET, TResponseOfvisibleUsingGET, Tenant, TenantRegisterDTO, VueRouter, createRequest };
