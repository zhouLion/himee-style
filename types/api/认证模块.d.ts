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
    // 用户类型:1-平台用户，2-商户店铺用户,默认是1
    userType?: string;
}
export interface LoginUserAuthInfo {
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
    // 租户编码信息
    tenantCode?: string;
    // 令牌
    token?: string;
    // 令牌类型
    tokenType?: string;
    // 用户id
    userId?: number;
    // 工作描述
    workDescribe?: string;
}
export interface Map_string,List_Dictionary__ {
    [index: string]: List;
}
export interface Map_string,List_Option__ {
    [index: string]: List;
}
export interface Map_string,Map_string,string__ {
    [index: string]: Map;
}
export interface Map_string,string_ {
    [index: string]: string;
}
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
export interface R_LoginUserAuthInfo_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: LoginUserAuthInfo;
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
export interface R_Map_string,List_Dictionary___ {
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
export interface R_Map_string,List_Option___ {
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
export interface R_Map_string,Map_string,string___ {
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
export interface R_Map_string,string__ {
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