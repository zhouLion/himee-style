/**
 * @description: 业务附件
 */
export interface AppendixSaveVO {
    // 业务id
    bizId?: number;
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件类型
    fileType?: string;
    // 附件id c_file表的id
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
}

/**
 * @description: 应用
 */
export interface Application {
    // 类型
    appType?: string;
    // 客户端ID
    clientId?: string;
    // 客户端密码
    clientSecret?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 备注
    describe?: string;
    // 应用图标
    icon?: string;
    // 主键
    id?: number;
    // 应用名称
    name?: string;
    // 状态
    state?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 官网
    website?: string;
}

/**
 * @description: 应用
 */
export interface ApplicationPageQuery {
    // 类型
    appType?: string;
    // 客户端ID
    clientId?: string;
    // 客户端密码
    clientSecret?: string;
    // 备注
    describe?: string;
    // 应用图标
    icon?: string;
    // 应用名称
    name?: string;
    // 状态
    state?: boolean;
    // 官网
    website?: string;
}

/**
 * @description: 应用
 */
export interface ApplicationSaveDTO {
    // 类型
    appType?: string;
    // 客户端ID
    clientId?: string;
    // 客户端密码
    clientSecret?: string;
    // 备注
    describe?: string;
    // 应用图标
    icon?: string;
    // 应用名称
    name?: string;
    // 状态
    state?: boolean;
    // 官网
    website?: string;
}

/**
 * @description: 应用
 */
export interface ApplicationUpdateDTO {
    // 类型
    appType?: string;
    // 客户端ID
    clientId?: string;
    // 客户端密码
    clientSecret?: string;
    // 备注
    describe?: string;
    // 应用图标
    icon?: string;
    // 主键
    id?: number;
    // 应用名称
    name?: string;
    // 状态
    state?: boolean;
    // 官网
    website?: string;
}

/**
 * @description: 全局账号
 */
export interface GlobalUserSaveDTO {
    // 账号
    account?: string;
    // 邮箱
    email?: string;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 租户编号
    tenantCode?: string;
}

/**
 * @description: 全局账号
 */
export interface GlobalUserSaveDTO_1 {
    // 账号
    account?: string;
    // 确认密码
    confirmPassword?: string;
    // 邮箱
    email?: string;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 密码
    password?: string;
    // 性别
    sex?: string;
    // 企业编码
    tenantCode?: string;
    // 用户类型:1-平台用户，2-商户店铺用户,默认是1
    userType?: string;
}

/**
 * @description: 全局账号
 */
export interface GlobalUserUpdateDTO {
    // 邮箱
    email?: string;
    // 主键
    id?: number;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 性别
    sex?: string;
    // 企业编码
    tenantCode?: string;
}

export interface IPage_Application_ {
    current?: number;
    pages?: number;
    records?: Application[];
    size?: number;
    total?: number;
}

export interface IPage_Menu_ {
    current?: number;
    pages?: number;
    records?: Menu[];
    size?: number;
    total?: number;
}

export interface IPage_Online_ {
    current?: number;
    pages?: number;
    records?: Online[];
    size?: number;
    total?: number;
}

export interface IPage_Resource_ {
    current?: number;
    pages?: number;
    records?: Resource[];
    size?: number;
    total?: number;
}

export interface IPage_Role_ {
    current?: number;
    pages?: number;
    records?: Role[];
    size?: number;
    total?: number;
}

export interface IPage_User_ {
    current?: number;
    pages?: number;
    records?: User[];
    size?: number;
    total?: number;
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

export interface MenuResourceTreeVO {
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 描述
    describe?: string;
    icon?: string;
    // 主键
    id?: number;
    isDef?: boolean;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 菜单
 */
export interface MenuSaveDTO {
    // 页面代码地址
    component?: string;
    // 实现类
    customClass?: string;
    // 数据范围
    dataScope?: string;
    // 描述
    describe?: string;
    // 分组
    group?: string;
    // 图标
    icon?: string;
    // 是否默认
    isDef?: boolean;
    // 通用菜单
    isGeneral?: boolean;
    // 名称
    label?: string;
    // 上级资源
    parentId?: number;
    // 地址栏地址
    path?: string;
    // 内置
    readonly?: boolean;
    // 类型
    resourceType?: string;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
}

/**
 * @description: 菜单
 */
export interface MenuUpdateDTO {
    // 页面代码地址
    component?: string;
    // 实现类
    customClass?: string;
    // 数据范围
    dataScope?: string;
    // 描述
    describe?: string;
    // 分组
    group?: string;
    // 图标
    icon?: string;
    // 主键
    id?: number;
    // 是否默认
    isDef?: boolean;
    // 通用菜单
    isGeneral?: boolean;
    // 名称
    label?: string;
    // 上级资源
    parentId?: number;
    // 地址栏地址
    path?: string;
    // 内置
    readonly?: boolean;
    // 类型
    resourceType?: string;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
}

/**
 * @description: 在线用户
 */
export interface Online {
    // 账号
    account?: string;
    // 客户端Key
    clientId?: string;
    // 有效期
    expireMillis?: number;
    // 过期时间
    expireTime?: string;
    // 登录地点
    location?: string;
    // 登录IP
    loginIp?: string;
    // 登录时间
    loginTime?: string;
    // 姓名
    name?: string;
    // token
    token?: string;
    // 用户id
    userId?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_ApplicationPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: ApplicationPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_GlobalUserSaveDTO_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: GlobalUserSaveDTO;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_Menu_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: Menu;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_Online_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: Online;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_Resource_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: Resource;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_RolePageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: RolePageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_UserPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: UserPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 资源
 */
export interface Resource {
    // 编码
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 菜单ID
    menuId?: number;
    // 名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 资源
 */
export interface ResourceSaveDTO {
    // 编码
    code?: string;
    // 描述
    describe?: string;
    // 菜单ID
    menuId?: number;
    // 名称
    name?: string;
    // 内置
    readonly?: boolean;
}

/**
 * @description: 资源
 */
export interface ResourceUpdateDTO {
    // 编码
    code?: string;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 菜单ID
    menuId?: number;
    // 名称
    name?: string;
    // 内置
    readonly?: boolean;
}

/**
 * @description: 角色
 */
export interface Role {
    // 角色类别
    category?: string;
    // 编码
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 描述
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 内置角色
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 角色类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 角色的资源
 */
export interface RoleAuthority {
    // 资源id
    authorityId?: number;
    // 权限类型
    authorityType?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 主键
    id?: number;
    // 角色id
    roleId?: number;
}

/**
 * @description: 角色的资源
 */
export interface RoleAuthoritySaveDTO {
    // 资源ID
    menuIdList?: number[];
    resourceIdList?: number[];
    // 角色id
    roleId?: number;
}

/**
 * @description: 角色
 */
export interface RolePageQuery {
    // 角色类别
    category?: string[];
    // 编码
    code?: string;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 内置角色
    readonly?: boolean[];
    // 状态
    state?: boolean[];
    // 角色类型
    type?: string;
}

/**
 * @description: 角色
 */
export interface RoleSaveDTO {
    // 角色类别
    category?: string;
    // 角色编码
    code?: string;
    // 描述
    describe?: string;
    // ID
    id?: number;
    // 角色名称
    name?: string;
    // 关联的组织
    orgList?: number[];
    // 内置角色
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 角色类型
    type?: string;
}

/**
 * @description: 角色
 */
export interface RoleSaveDTO_1 {
    // 角色类别
    category?: string;
    // 编码
    code?: string;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 关联的组织
    orgList?: number[];
    // 状态
    state?: boolean;
    // 角色类型
    type?: string;
}

/**
 * @description: 角色
 */
export interface RoleUpdateDTO {
    // 角色类别
    category?: string;
    // 编码
    code?: string;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 关联的组织
    orgList?: number[];
    // 内置角色
    readonly?: boolean;
    // 状态
    state?: boolean;
}

/**
 * @description: 给角色分配员工
 */
export interface RoleUserSaveVO {
    // 绑定或取消
    flag?: boolean;
    // 角色
    roleId?: number;
    // 用户
    userIdList?: number[];
}

export interface R_Application_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Application;
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

export interface R_IPage_Application__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Application_;
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

export interface R_IPage_Menu__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Menu_;
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

export interface R_IPage_Online__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Online_;
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

export interface R_IPage_Resource__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Resource_;
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

export interface R_IPage_Role__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Role_;
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

export interface R_IPage_User__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_User_;
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

export interface R_List_Application__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Application[];
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

export interface R_List_MenuResourceTreeVO__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: MenuResourceTreeVO[];
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

export interface R_List_Online__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Online[];
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

export interface R_List_Resource__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Resource[];
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

export interface R_List_RoleAuthority__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: RoleAuthority[];
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

export interface R_List_Role__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Role[];
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

export interface R_List_User__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: User[];
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

export interface R_List_long__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: number[];
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

export interface R_Menu_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Menu;
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

export interface R_Resource_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Resource;
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

export interface R_RoleAuthoritySaveDTO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: RoleAuthoritySaveDTO;
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

export interface R_RoleSaveDTO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: RoleSaveDTO;
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

export interface R_Role_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Role;
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

export interface R_UserRoleDTO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: UserRoleDTO;
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

export interface R_User_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: User;
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

export interface R_WechatUser_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: WechatUser;
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

/**
 * @description: 用户
 */
export interface User {
    // 账号
    account?: string;
    // 头像
    avatar?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建者所属机构
    createdOrgId?: number;
    echoMap?: any;
    // 学历
    education?: string;
    // 邮箱
    email?: string;
    // 主键
    id?: number;
    // 最后登录时间
    lastLoginTime?: string;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 民族
    nation?: string;
    // 组织
    orgId?: number;
    // 密码
    password?: string;
    // 最后一次输错密码时间
    passwordErrorLastTime?: string;
    // 密码错误次数
    passwordErrorNum?: number;
    // 密码过期时间
    passwordExpireTime?: string;
    // 职位状态
    positionStatus?: string;
    // 内置
    readonly?: boolean;
    // 密码盐
    salt?: string;
    // 性别
    sex?: string;
    // 状态
    state?: boolean;
    // 岗位
    stationId?: number;
    // 租户编码
    tenantCode?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 用户类型:1-平台用户，2-商户店铺用户,默认是1
    userType?: string;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 用户
 */
export interface UserPageQuery {
    // 账号
    account?: string;
    // 头像
    avatar?: string;
    createdOrgId?: number;
    // 学历
    education?: string[];
    // 邮箱
    email?: string;
    // 最后登录时间
    lastLoginTime?: string;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 民族
    nation?: string[];
    // 组织
    orgId?: number;
    // 密码
    password?: string;
    // 最后一次输错密码时间
    passwordErrorLastTime?: string;
    // 密码错误次数
    passwordErrorNum?: number;
    // 密码过期时间
    passwordExpireTime?: string;
    // 职位状态
    positionStatus?: string[];
    // 内置
    readonly?: boolean;
    // 角色id
    roleId?: string;
    // 密码盐
    salt?: string;
    // 范围
    scope?: string;
    // 性别
    sex?: string[];
    // 状态
    state?: boolean;
    // 岗位
    stationId?: number;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 用户角色DTO
 */
export interface UserRoleDTO {
    // 用户id
    idList?: number[];
    // 用户信息
    userList?: User[];
}

/**
 * @description: 角色分配 账号角色绑定
 */
export interface UserRoleSaveDTO {
    // 角色ID
    roleId?: number;
    // 用户ID
    userIdList?: number[];
}

/**
 * @description: 用户
 */
export interface UserSaveDTO {
    // 账号
    account?: string;
    // 头像
    avatar?: string;
    createdOrgId?: number;
    // 学历
    education?: string;
    // 邮箱
    email?: string;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 民族
    nation?: string;
    // 组织
    orgId?: number;
    // 密码
    password?: string;
    // 职位状态
    positionStatus?: string;
    // 性别
    sex?: string;
    // 状态
    state?: boolean;
    // 岗位
    stationId?: number;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 用户
 */
export interface UserUpdateAvatarDTO {
    appendixAvatar?: AppendixSaveVO;
    // 选择的头像
    avatar?: string;
    // 主键
    id?: number;
}

/**
 * @description: 用户修改基础信息实体
 */
export interface UserUpdateBaseInfoDTO {
    // 学历
    education?: string;
    // 邮箱
    email?: string;
    // 主键
    id?: number;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 民族
    nation?: string;
    // 职位状态
    positionStatus?: string;
    // 性别
    sex?: string;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 用户
 */
export interface UserUpdateDTO {
    // 账号
    account?: string;
    // 头像
    avatar?: string;
    // 学历
    education?: string;
    // 邮箱
    email?: string;
    // 主键
    id?: number;
    // 手机
    mobile?: string;
    // 姓名
    name?: string;
    // 民族
    nation?: string;
    // 组织
    orgId?: number;
    // 职位状态
    positionStatus?: string;
    // 性别
    sex?: string;
    // 状态
    state?: boolean;
    // 岗位
    stationId?: number;
    // 工作描述
    workDescribe?: string;
}

/**
 * @description: 用户
 */
export interface UserUpdatePasswordDTO {
    // 确认密码
    confirmPassword?: string;
    // 主键
    id?: number;
    // 当前密码
    oldPassword?: string;
    // 密码
    password?: string;
    // 租户编码，lamp-admin-ui页面使用
    tenantCode?: string;
}

export interface WechatLoginRequestDTO {
    // 微信code
    code: string;
    // 用户敏感字段
    encryptedData?: string;
    // 解密向量
    iv?: string;
    // 用户非敏感字段
    rawData?: string;
    // 签名
    signature?: string;
}

/**
 * @description: 小程序用户表
 */
export interface WechatUser {
    // 用户头像
    avatarUrl?: string;
    // 城市
    city?: string;
    // 所在国家
    country?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 性别  0-未知、1-男性、2-女性
    gender?: number;
    // 主键
    id?: number;
    // 手机号码
    mobile?: string;
    // 用户昵称
    nickname?: string;
    // 小程序openId
    openId?: string;
    // 省份
    province?: string;
    // 租户编码
    tenantCode?: string;
    // token
    token?: string;
    // 小程序unionId
    unionId?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

export type TBodyOfsaveUsingPOST_5 = ApplicationSaveDTO;
export type TResponseOfsaveUsingPOST_5 = R_Application_;
export type TBodyOfupdateUsingPUT_5 = ApplicationUpdateDTO;
export type TResponseOfupdateUsingPUT_5 = R_Application_;
export type TBodyOfdeleteUsingDELETE_7 = number[];
export type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_5 = Application;
export type TResponseOfupdateAllUsingPUT_5 = R_Application_;
export type TResponseOfclearCacheUsingPOST_1 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_6 = PageParams_ApplicationPageQuery_;
export type TResponseOfexportExcelUsingPOST_6 = any;
export interface TFormDataOfimportExcelUsingPOST_6 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
export type TBodyOfpageUsingPOST_7 = PageParams_ApplicationPageQuery_;
export type TResponseOfpageUsingPOST_7 = R_IPage_Application__;
export type TBodyOfpreviewUsingPOST_6 = PageParams_ApplicationPageQuery_;
export type TResponseOfpreviewUsingPOST_6 = R_string_;
export type TBodyOfqueryUsingPOST_6 = Application;
export type TResponseOfqueryUsingPOST_6 = R_List_Application__;
export type TResponseOfrefreshCacheUsingPOST_1 = R_boolean_;
export interface TPathOfgetUsingGET_7 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_7 = R_Application_;
export type TBodyOfsaveUsingPOST_6 = GlobalUserSaveDTO_1;
export type TResponseOfsaveUsingPOST_6 = R_User_;
export type TBodyOfupdateUsingPUT_6 = GlobalUserUpdateDTO;
export type TResponseOfupdateUsingPUT_6 = R_User_;
export type TBodyOfdeleteUsingDELETE_9 = number[];
export type TResponseOfdeleteUsingDELETE_9 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_6 = User;
export type TResponseOfupdateAllUsingPUT_6 = R_User_;
export interface TQueryOfcheckUsingGET_1 {
    // 账号
    account?: string;
    // 企业编码
    tenantCode?: string;
}
export type TResponseOfcheckUsingGET_1 = R_boolean_;
export interface TQueryOfdeleteUsingDELETE_8 {
    // 主键id
    "ids[]"?: string[];
    // 企业编码
    tenantCode?: string;
}
export type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfexportExcelUsingPOST_7 = any;
export interface TFormDataOfimportExcelUsingPOST_7 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
export type TBodyOfpageUsingPOST_8 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfpageUsingPOST_8 = R_IPage_User__;
export type TBodyOfpreviewUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfpreviewUsingPOST_7 = R_string_;
export type TBodyOfqueryUsingPOST_7 = User;
export type TResponseOfqueryUsingPOST_7 = R_List_User__;
export type TBodyOfupdatePasswordUsingPUT = UserUpdatePasswordDTO;
export type TResponseOfupdatePasswordUsingPUT = R_boolean_;
export interface TPathOfgetUsingGET_8 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_8 = R_User_;
export type TBodyOfsaveUsingPOST_7 = MenuSaveDTO;
export type TResponseOfsaveUsingPOST_7 = R_Menu_;
export type TBodyOfupdateUsingPUT_7 = MenuUpdateDTO;
export type TResponseOfupdateUsingPUT_7 = R_Menu_;
export type TBodyOfdeleteUsingDELETE_10 = number[];
export type TResponseOfdeleteUsingDELETE_10 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_7 = Menu;
export type TResponseOfupdateAllUsingPUT_7 = R_Menu_;
export type TResponseOfclearCacheUsingPOST_2 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_8 = PageParams_Menu_;
export type TResponseOfexportExcelUsingPOST_8 = any;
export type TResponseOffindMenuDataScopeTreeUsingPOST = R_List_MenuResourceTreeVO__;
export interface TFormDataOfimportExcelUsingPOST_8 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
export type TResponseOfmenuResourceTreeUsingPOST = R_List_MenuResourceTreeVO__;
export type TBodyOfpageUsingPOST_9 = PageParams_Menu_;
export type TResponseOfpageUsingPOST_9 = R_IPage_Menu__;
export type TBodyOfpreviewUsingPOST_8 = PageParams_Menu_;
export type TResponseOfpreviewUsingPOST_8 = R_string_;
export type TBodyOfqueryUsingPOST_8 = Menu;
export type TResponseOfqueryUsingPOST_8 = R_List_Menu__;
export type TResponseOfrefreshCacheUsingPOST_2 = R_boolean_;
export type TResponseOfallTreeUsingPOST = R_List_Menu__;
export interface TPathOfgetUsingGET_9 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_9 = R_Menu_;
export interface TQueryOflistUsingPOST {
    // name
    name?: string;
}
export type TResponseOflistUsingPOST = R_List_Online__;
export type TBodyOfpageUsingPOST_10 = PageParams_Online_;
export type TResponseOfpageUsingPOST_10 = R_IPage_Online__;
export interface TQueryOflogoutUsingPOST {
    // clientId
    clientId?: string;
    // userId
    userId?: number;
    // userToken
    userToken?: string;
}
export type TResponseOflogoutUsingPOST = R_boolean_;
export type TBodyOfsaveUsingPOST_8 = ResourceSaveDTO;
export type TResponseOfsaveUsingPOST_8 = R_Resource_;
export type TBodyOfupdateUsingPUT_8 = ResourceUpdateDTO;
export type TResponseOfupdateUsingPUT_8 = R_Resource_;
export type TBodyOfdeleteUsingDELETE_11 = number[];
export type TResponseOfdeleteUsingDELETE_11 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_8 = Resource;
export type TResponseOfupdateAllUsingPUT_8 = R_Resource_;
export interface TQueryOfcheckUsingGET_2 {
    // 编码
    code?: string;
    // ID
    id?: number;
}
export type TResponseOfcheckUsingGET_2 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_3 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_9 = PageParams_Resource_;
export type TResponseOfexportExcelUsingPOST_9 = any;
export interface TFormDataOfimportExcelUsingPOST_9 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_9 = R_boolean_;
export type TBodyOfpageUsingPOST_11 = PageParams_Resource_;
export type TResponseOfpageUsingPOST_11 = R_IPage_Resource__;
export type TBodyOfpreviewUsingPOST_9 = PageParams_Resource_;
export type TResponseOfpreviewUsingPOST_9 = R_string_;
export type TBodyOfqueryUsingPOST_9 = Resource;
export type TResponseOfqueryUsingPOST_9 = R_List_Resource__;
export type TResponseOfrefreshCacheUsingPOST_3 = R_boolean_;
export interface TPathOfgetUsingGET_10 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_10 = R_Resource_;
export type TBodyOfsaveUsingPOST_9 = RoleSaveDTO_1;
export type TResponseOfsaveUsingPOST_9 = R_Role_;
export type TBodyOfupdateUsingPUT_9 = RoleUpdateDTO;
export type TResponseOfupdateUsingPUT_9 = R_Role_;
export type TBodyOfdeleteUsingDELETE_12 = number[];
export type TResponseOfdeleteUsingDELETE_12 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_9 = Role;
export type TResponseOfupdateAllUsingPUT_9 = R_Role_;
export interface TQueryOfcheckUsingGET_3 {
    // code
    code: string;
}
export type TResponseOfcheckUsingGET_3 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_4 = R_boolean_;
export interface TQueryOffindUserIdByCodeUsingGET {
    // codes
    codes: string[];
}
export type TResponseOffindUserIdByCodeUsingGET = R_List_long__;
export interface TQueryOfgetDetailsUsingGET {
    // id
    id: number;
}
export type TResponseOfgetDetailsUsingGET = R_RoleSaveDTO_;
export type TBodyOfexportExcelUsingPOST_10 = PageParams_RolePageQuery_;
export type TResponseOfexportExcelUsingPOST_10 = any;
export interface TFormDataOfimportExcelUsingPOST_10 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_10 = R_boolean_;
export type TBodyOfpageUsingPOST_12 = PageParams_RolePageQuery_;
export type TResponseOfpageUsingPOST_12 = R_IPage_Role__;
export type TBodyOfpreviewUsingPOST_10 = PageParams_RolePageQuery_;
export type TResponseOfpreviewUsingPOST_10 = R_string_;
export type TBodyOfqueryUsingPOST_10 = Role;
export type TResponseOfqueryUsingPOST_10 = R_List_Role__;
export type TResponseOfrefreshCacheUsingPOST_4 = R_boolean_;
export interface TQueryOffindResourceListByRoleIdUsingGET {
    // roleId
    roleId: number;
}
export type TResponseOffindResourceListByRoleIdUsingGET = R_RoleAuthoritySaveDTO_;
export type TBodyOfsaveRoleAuthorityUsingPOST = RoleAuthoritySaveDTO;
export type TResponseOfsaveRoleAuthorityUsingPOST = R_boolean_;
export type TBodyOfsaveUserRoleUsingPOST_1 = RoleUserSaveVO;
export type TResponseOfsaveUserRoleUsingPOST_1 = R_List_long__;
export interface TQueryOffindUserIdByRoleIdUsingGET {
    // roleId
    roleId: number;
}
export type TResponseOffindUserIdByRoleIdUsingGET = R_List_long__;
export interface TPathOfgetUsingGET_11 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_11 = R_Role_;
export interface TPathOfqueryByRoleIdUsingGET {
    // roleId
    roleId: number;
}
export type TResponseOfqueryByRoleIdUsingGET = R_List_RoleAuthority__;
export type TBodyOfsaveUsingPOST_10 = UserSaveDTO;
export type TResponseOfsaveUsingPOST_10 = R_User_;
export type TBodyOfupdateUsingPUT_10 = UserUpdateDTO;
export type TResponseOfupdateUsingPUT_10 = R_User_;
export type TBodyOfdeleteUsingDELETE_13 = number[];
export type TResponseOfdeleteUsingDELETE_13 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_10 = User;
export type TResponseOfupdateAllUsingPUT_10 = R_User_;
export type TBodyOfavatarUsingPUT = UserUpdateAvatarDTO;
export type TResponseOfavatarUsingPUT = R_boolean_;
export type TBodyOfupdateBaseUsingPUT = UserUpdateBaseInfoDTO;
export type TResponseOfupdateBaseUsingPUT = R_User_;
export interface TQueryOfcheckUsingGET_4 {
    // ID
    id?: number;
    // 名称
    name?: string;
}
export type TResponseOfcheckUsingGET_4 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_5 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_11 = PageParams_UserPageQuery_;
export type TResponseOfexportExcelUsingPOST_11 = any;
export type TResponseOffindAllUserIdUsingGET = R_List_long__;
export type TResponseOffindAllUsingGET = R_List_User__;
export interface TQueryOffindUserByIdUsingGET {
    // ids
    ids: number[];
}
export type TResponseOffindUserByIdUsingGET = R_List_User__;
export interface TFormDataOfimportExcelUsingPOST_11 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_11 = R_boolean_;
export type TBodyOfpageUsingPOST_13 = PageParams_UserPageQuery_;
export type TResponseOfpageUsingPOST_13 = R_IPage_User__;
export type TBodyOfpageAllUsingPOST = PageParams_UserPageQuery_;
export type TResponseOfpageAllUsingPOST = R_IPage_User__;
export type TBodyOfupdatePasswordUsingPUT_1 = UserUpdatePasswordDTO;
export type TResponseOfupdatePasswordUsingPUT_1 = R_boolean_;
export type TBodyOfpreviewUsingPOST_11 = PageParams_UserPageQuery_;
export type TResponseOfpreviewUsingPOST_11 = R_string_;
export type TBodyOfqueryUsingPOST_11 = User;
export type TResponseOfqueryUsingPOST_11 = R_List_User__;
export type TResponseOfrefreshCacheUsingPOST_5 = R_boolean_;
export type TBodyOfresetUsingPOST = UserUpdatePasswordDTO;
export type TResponseOfresetUsingPOST = R_boolean_;
export interface TPathOffindUserByRoleIdUsingGET {
    // roleId
    roleId: number;
}
export interface TQueryOffindUserByRoleIdUsingGET {
    // keyword
    keyword?: string;
}
export type TResponseOffindUserByRoleIdUsingGET = R_UserRoleDTO_;
export interface TPathOfgetUsingGET_12 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_12 = R_User_;
export type TBodyOfprogramLoginUsingPOST = WechatLoginRequestDTO;
export type TResponseOfprogramLoginUsingPOST = R_WechatUser_;
export type TBodyOfprogramLogin2UsingPOST = WechatLoginRequestDTO;
export type TResponseOfprogramLogin2UsingPOST = R_WechatUser_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/application"): {
    /**
     * @description 新增 saveUsingPOST_5
     * 应用
     */
    post(options: { body: TBodyOfsaveUsingPOST_5 }): Promise<TResponseOfsaveUsingPOST_5>;

    /**
     * @description 修改 updateUsingPUT_5
     * 应用
     */
    put(options: { body: TBodyOfupdateUsingPUT_5 }): Promise<TResponseOfupdateUsingPUT_5>;

    /**
     * @description 删除 deleteUsingDELETE_7
     * 应用
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_7 }): Promise<TResponseOfdeleteUsingDELETE_7>;
  };
  (url: "/application/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_5
     * 应用
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_5 }): Promise<TResponseOfupdateAllUsingPUT_5>;
  };
  (url: "/application/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_1
     * 应用
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_1>;
  };
  (url: "/application/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_6
     * 应用
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_6;
    }): Promise<TResponseOfexportExcelUsingPOST_6>;
  };
  (url: "/application/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_6
     * 应用
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_6;
    }): Promise<TResponseOfimportExcelUsingPOST_6>;
  };
  (url: "/application/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_7
     * 应用
     */
    post(options: { body: TBodyOfpageUsingPOST_7 }): Promise<TResponseOfpageUsingPOST_7>;
  };
  (url: "/application/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_6
     * 应用
     */
    post(options: { body: TBodyOfpreviewUsingPOST_6 }): Promise<TResponseOfpreviewUsingPOST_6>;
  };
  (url: "/application/query"): {
    /**
     * @description 批量查询 queryUsingPOST_6
     * 应用
     */
    post(options: { body: TBodyOfqueryUsingPOST_6 }): Promise<TResponseOfqueryUsingPOST_6>;
  };
  (url: "/application/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_1
     * 应用
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_1>;
  };
  (url: "/application/{id}"): {
    /**
     * @description 单体查询 getUsingGET_7
     * 应用
     */
    get(options: { path: TPathOfgetUsingGET_7 }): Promise<TResponseOfgetUsingGET_7>;
  };
  (url: "/globalUser"): {
    /**
     * @description 新增 saveUsingPOST_6
     * 全局账号
     */
    post(options: { body: TBodyOfsaveUsingPOST_6 }): Promise<TResponseOfsaveUsingPOST_6>;

    /**
     * @description 修改 updateUsingPUT_6
     * 全局账号
     */
    put(options: { body: TBodyOfupdateUsingPUT_6 }): Promise<TResponseOfupdateUsingPUT_6>;

    /**
     * @description 删除 deleteUsingDELETE_9
     * 全局账号
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_9 }): Promise<TResponseOfdeleteUsingDELETE_9>;
  };
  (url: "/globalUser/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_6
     * 全局账号
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_6 }): Promise<TResponseOfupdateAllUsingPUT_6>;
  };
  (url: "/globalUser/check"): {
    /**
     * @description 检测账号是否可用 checkUsingGET_1
     * 全局账号
     */
    get(options: { query: TQueryOfcheckUsingGET_1 }): Promise<TResponseOfcheckUsingGET_1>;
  };
  (url: "/globalUser/delete"): {
    /**
     * @description 删除用户 deleteUsingDELETE_8
     * 全局账号
     */
    delete(options: {
      query: TQueryOfdeleteUsingDELETE_8;
    }): Promise<TResponseOfdeleteUsingDELETE_8>;
  };
  (url: "/globalUser/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_7
     * 全局账号
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_7;
    }): Promise<TResponseOfexportExcelUsingPOST_7>;
  };
  (url: "/globalUser/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_7
     * 全局账号
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_7;
    }): Promise<TResponseOfimportExcelUsingPOST_7>;
  };
  (url: "/globalUser/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_8
     * 全局账号
     */
    post(options: { body: TBodyOfpageUsingPOST_8 }): Promise<TResponseOfpageUsingPOST_8>;
  };
  (url: "/globalUser/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_7
     * 全局账号
     */
    post(options: { body: TBodyOfpreviewUsingPOST_7 }): Promise<TResponseOfpreviewUsingPOST_7>;
  };
  (url: "/globalUser/query"): {
    /**
     * @description 批量查询 queryUsingPOST_7
     * 全局账号
     */
    post(options: { body: TBodyOfqueryUsingPOST_7 }): Promise<TResponseOfqueryUsingPOST_7>;
  };
  (url: "/globalUser/reset"): {
    /**
     * @description 修改密码 updatePasswordUsingPUT
     * 全局账号
     */
    put(options: {
      body: TBodyOfupdatePasswordUsingPUT;
    }): Promise<TResponseOfupdatePasswordUsingPUT>;
  };
  (url: "/globalUser/{id}"): {
    /**
     * @description 单体查询 getUsingGET_8
     * 全局账号
     */
    get(options: { path: TPathOfgetUsingGET_8 }): Promise<TResponseOfgetUsingGET_8>;
  };
  (url: "/menu"): {
    /**
     * @description 新增 saveUsingPOST_7
     * 菜单
     */
    post(options: { body: TBodyOfsaveUsingPOST_7 }): Promise<TResponseOfsaveUsingPOST_7>;

    /**
     * @description 修改 updateUsingPUT_7
     * 菜单
     */
    put(options: { body: TBodyOfupdateUsingPUT_7 }): Promise<TResponseOfupdateUsingPUT_7>;

    /**
     * @description 删除 deleteUsingDELETE_10
     * 菜单
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_10;
    }): Promise<TResponseOfdeleteUsingDELETE_10>;
  };
  (url: "/menu/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_7
     * 菜单
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_7 }): Promise<TResponseOfupdateAllUsingPUT_7>;
  };
  (url: "/menu/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_2
     * 菜单
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_2>;
  };
  (url: "/menu/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_8
     * 菜单
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_8;
    }): Promise<TResponseOfexportExcelUsingPOST_8>;
  };
  (url: "/menu/findMenuDataScopeTree"): {
    /**
     * @description 查询系统所有的数据权限 findMenuDataScopeTreeUsingPOST
     * 菜单
     */
    post(options: {}): Promise<TResponseOffindMenuDataScopeTreeUsingPOST>;
  };
  (url: "/menu/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_8
     * 菜单
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_8;
    }): Promise<TResponseOfimportExcelUsingPOST_8>;
  };
  (url: "/menu/menuResourceTree"): {
    /**
     * @description 查询系统所有的菜单和资源树 menuResourceTreeUsingPOST
     * 菜单
     */
    post(options: {}): Promise<TResponseOfmenuResourceTreeUsingPOST>;
  };
  (url: "/menu/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_9
     * 菜单
     */
    post(options: { body: TBodyOfpageUsingPOST_9 }): Promise<TResponseOfpageUsingPOST_9>;
  };
  (url: "/menu/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_8
     * 菜单
     */
    post(options: { body: TBodyOfpreviewUsingPOST_8 }): Promise<TResponseOfpreviewUsingPOST_8>;
  };
  (url: "/menu/query"): {
    /**
     * @description 批量查询 queryUsingPOST_8
     * 菜单
     */
    post(options: { body: TBodyOfqueryUsingPOST_8 }): Promise<TResponseOfqueryUsingPOST_8>;
  };
  (url: "/menu/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_2
     * 菜单
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_2>;
  };
  (url: "/menu/tree"): {
    /**
     * @description 查询系统所有的菜单 allTreeUsingPOST
     * 菜单
     */
    post(options: {}): Promise<TResponseOfallTreeUsingPOST>;
  };
  (url: "/menu/{id}"): {
    /**
     * @description 单体查询 getUsingGET_9
     * 菜单
     */
    get(options: { path: TPathOfgetUsingGET_9 }): Promise<TResponseOfgetUsingGET_9>;
  };
  (url: "/online/list"): {
    /**
     * @description list listUsingPOST
     * 在线用户
     */
    post(options: { query: TQueryOflistUsingPOST }): Promise<TResponseOflistUsingPOST>;
  };
  (url: "/online/page"): {
    /**
     * @description page pageUsingPOST_10
     * 在线用户
     */
    post(options: { body: TBodyOfpageUsingPOST_10 }): Promise<TResponseOfpageUsingPOST_10>;
  };
  (url: "/online/t"): {
    /**
     * @description T人 logoutUsingPOST
     * 在线用户
     */
    post(options: { query: TQueryOflogoutUsingPOST }): Promise<TResponseOflogoutUsingPOST>;
  };
  (url: "/resource"): {
    /**
     * @description 新增 saveUsingPOST_8
     * 资源
     */
    post(options: { body: TBodyOfsaveUsingPOST_8 }): Promise<TResponseOfsaveUsingPOST_8>;

    /**
     * @description 修改 updateUsingPUT_8
     * 资源
     */
    put(options: { body: TBodyOfupdateUsingPUT_8 }): Promise<TResponseOfupdateUsingPUT_8>;

    /**
     * @description 删除 deleteUsingDELETE_11
     * 资源
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_11;
    }): Promise<TResponseOfdeleteUsingDELETE_11>;
  };
  (url: "/resource/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_8
     * 资源
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_8 }): Promise<TResponseOfupdateAllUsingPUT_8>;
  };
  (url: "/resource/check"): {
    /**
     * @description 检测资源编码是否可用 checkUsingGET_2
     * 资源
     */
    get(options: { query: TQueryOfcheckUsingGET_2 }): Promise<TResponseOfcheckUsingGET_2>;
  };
  (url: "/resource/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_3
     * 资源
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_3>;
  };
  (url: "/resource/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_9
     * 资源
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_9;
    }): Promise<TResponseOfexportExcelUsingPOST_9>;
  };
  (url: "/resource/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_9
     * 资源
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_9;
    }): Promise<TResponseOfimportExcelUsingPOST_9>;
  };
  (url: "/resource/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_11
     * 资源
     */
    post(options: { body: TBodyOfpageUsingPOST_11 }): Promise<TResponseOfpageUsingPOST_11>;
  };
  (url: "/resource/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_9
     * 资源
     */
    post(options: { body: TBodyOfpreviewUsingPOST_9 }): Promise<TResponseOfpreviewUsingPOST_9>;
  };
  (url: "/resource/query"): {
    /**
     * @description 批量查询 queryUsingPOST_9
     * 资源
     */
    post(options: { body: TBodyOfqueryUsingPOST_9 }): Promise<TResponseOfqueryUsingPOST_9>;
  };
  (url: "/resource/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_3
     * 资源
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_3>;
  };
  (url: "/resource/{id}"): {
    /**
     * @description 单体查询 getUsingGET_10
     * 资源
     */
    get(options: { path: TPathOfgetUsingGET_10 }): Promise<TResponseOfgetUsingGET_10>;
  };
  (url: "/role"): {
    /**
     * @description 新增 saveUsingPOST_9
     * 角色
     */
    post(options: { body: TBodyOfsaveUsingPOST_9 }): Promise<TResponseOfsaveUsingPOST_9>;

    /**
     * @description 修改 updateUsingPUT_9
     * 角色
     */
    put(options: { body: TBodyOfupdateUsingPUT_9 }): Promise<TResponseOfupdateUsingPUT_9>;

    /**
     * @description 删除 deleteUsingDELETE_12
     * 角色
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_12;
    }): Promise<TResponseOfdeleteUsingDELETE_12>;
  };
  (url: "/role/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_9
     * 角色
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_9 }): Promise<TResponseOfupdateAllUsingPUT_9>;
  };
  (url: "/role/check"): {
    /**
     * @description 检测角色编码 checkUsingGET_3
     * 角色
     */
    get(options: { query: TQueryOfcheckUsingGET_3 }): Promise<TResponseOfcheckUsingGET_3>;
  };
  (url: "/role/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_4
     * 角色
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_4>;
  };
  (url: "/role/codes"): {
    /**
     * @description 根据角色编码查询用户ID findUserIdByCodeUsingGET
     * 角色
     */
    get(options: {
      query: TQueryOffindUserIdByCodeUsingGET;
    }): Promise<TResponseOffindUserIdByCodeUsingGET>;
  };
  (url: "/role/details"): {
    /**
     * @description 查询角色 getDetailsUsingGET
     * 角色
     */
    get(options: { query: TQueryOfgetDetailsUsingGET }): Promise<TResponseOfgetDetailsUsingGET>;
  };
  (url: "/role/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_10
     * 角色
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_10;
    }): Promise<TResponseOfexportExcelUsingPOST_10>;
  };
  (url: "/role/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_10
     * 角色
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_10;
    }): Promise<TResponseOfimportExcelUsingPOST_10>;
  };
  (url: "/role/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_12
     * 角色
     */
    post(options: { body: TBodyOfpageUsingPOST_12 }): Promise<TResponseOfpageUsingPOST_12>;
  };
  (url: "/role/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_10
     * 角色
     */
    post(options: { body: TBodyOfpreviewUsingPOST_10 }): Promise<TResponseOfpreviewUsingPOST_10>;
  };
  (url: "/role/query"): {
    /**
     * @description 批量查询 queryUsingPOST_10
     * 角色
     */
    post(options: { body: TBodyOfqueryUsingPOST_10 }): Promise<TResponseOfqueryUsingPOST_10>;
  };
  (url: "/role/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_4
     * 角色
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_4>;
  };
  (url: "/role/resourceList"): {
    /**
     * @description 查询角色拥有的资源id集合 findResourceListByRoleIdUsingGET
     * 角色
     */
    get(options: {
      query: TQueryOffindResourceListByRoleIdUsingGET;
    }): Promise<TResponseOffindResourceListByRoleIdUsingGET>;
  };
  (url: "/role/saveResource"): {
    /**
     * @description 给角色配置权限 saveRoleAuthorityUsingPOST
     * 角色
     */
    post(options: {
      body: TBodyOfsaveRoleAuthorityUsingPOST;
    }): Promise<TResponseOfsaveRoleAuthorityUsingPOST>;
  };
  (url: "/role/saveRoleUser"): {
    /**
     * @description 给角色绑定用户 saveUserRoleUsingPOST_1
     * 角色
     */
    post(options: {
      body: TBodyOfsaveUserRoleUsingPOST_1;
    }): Promise<TResponseOfsaveUserRoleUsingPOST_1>;
  };
  (url: "/role/userList"): {
    /**
     * @description 查询角色的用户 findUserIdByRoleIdUsingGET
     * 角色
     */
    get(options: {
      query: TQueryOffindUserIdByRoleIdUsingGET;
    }): Promise<TResponseOffindUserIdByRoleIdUsingGET>;
  };
  (url: "/role/{id}"): {
    /**
     * @description 单体查询 getUsingGET_11
     * 角色
     */
    get(options: { path: TPathOfgetUsingGET_11 }): Promise<TResponseOfgetUsingGET_11>;
  };
  (url: "/roleAuthority/{roleId}"): {
    /**
     * @description 查询指定角色关联的菜单和资源 queryByRoleIdUsingGET
     * 角色的资源
     */
    get(options: { path: TPathOfqueryByRoleIdUsingGET }): Promise<TResponseOfqueryByRoleIdUsingGET>;
  };
  (url: "/user"): {
    /**
     * @description 新增 saveUsingPOST_10
     * 用户
     */
    post(options: { body: TBodyOfsaveUsingPOST_10 }): Promise<TResponseOfsaveUsingPOST_10>;

    /**
     * @description 修改 updateUsingPUT_10
     * 用户
     */
    put(options: { body: TBodyOfupdateUsingPUT_10 }): Promise<TResponseOfupdateUsingPUT_10>;

    /**
     * @description 删除 deleteUsingDELETE_13
     * 用户
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_13;
    }): Promise<TResponseOfdeleteUsingDELETE_13>;
  };
  (url: "/user/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_10
     * 用户
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_10 }): Promise<TResponseOfupdateAllUsingPUT_10>;
  };
  (url: "/user/avatar"): {
    /**
     * @description 修改头像 avatarUsingPUT
     * 用户
     */
    put(options: { body: TBodyOfavatarUsingPUT }): Promise<TResponseOfavatarUsingPUT>;
  };
  (url: "/user/base"): {
    /**
     * @description 修改基础信息 updateBaseUsingPUT
     * 用户
     */
    put(options: { body: TBodyOfupdateBaseUsingPUT }): Promise<TResponseOfupdateBaseUsingPUT>;
  };
  (url: "/user/check"): {
    /**
     * @description 检测名称是否可用 checkUsingGET_4
     * 用户
     */
    get(options: { query: TQueryOfcheckUsingGET_4 }): Promise<TResponseOfcheckUsingGET_4>;
  };
  (url: "/user/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_5
     * 用户
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_5>;
  };
  (url: "/user/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_11
     * 用户
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_11;
    }): Promise<TResponseOfexportExcelUsingPOST_11>;
  };
  (url: "/user/find"): {
    /**
     * @description 查询所有用户 findAllUserIdUsingGET
     * 用户
     */
    get(options: {}): Promise<TResponseOffindAllUserIdUsingGET>;
  };
  (url: "/user/findAll"): {
    /**
     * @description 查询所有用户实体 findAllUsingGET
     * 用户
     */
    get(options: {}): Promise<TResponseOffindAllUsingGET>;
  };
  (url: "/user/findUserById"): {
    /**
     * @description findUserById findUserByIdUsingGET
     * 用户
     */
    get(options: { query: TQueryOffindUserByIdUsingGET }): Promise<TResponseOffindUserByIdUsingGET>;
  };
  (url: "/user/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_11
     * 用户
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_11;
    }): Promise<TResponseOfimportExcelUsingPOST_11>;
  };
  (url: "/user/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_13
     * 用户
     */
    post(options: { body: TBodyOfpageUsingPOST_13 }): Promise<TResponseOfpageUsingPOST_13>;
  };
  (url: "/user/pageAll"): {
    /**
     * @description 分页查询所有用户 pageAllUsingPOST
     * 用户
     */
    post(options: { body: TBodyOfpageAllUsingPOST }): Promise<TResponseOfpageAllUsingPOST>;
  };
  (url: "/user/password"): {
    /**
     * @description 修改密码 updatePasswordUsingPUT_1
     * 用户
     */
    put(options: {
      body: TBodyOfupdatePasswordUsingPUT_1;
    }): Promise<TResponseOfupdatePasswordUsingPUT_1>;
  };
  (url: "/user/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_11
     * 用户
     */
    post(options: { body: TBodyOfpreviewUsingPOST_11 }): Promise<TResponseOfpreviewUsingPOST_11>;
  };
  (url: "/user/query"): {
    /**
     * @description 批量查询 queryUsingPOST_11
     * 用户
     */
    post(options: { body: TBodyOfqueryUsingPOST_11 }): Promise<TResponseOfqueryUsingPOST_11>;
  };
  (url: "/user/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_5
     * 用户
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_5>;
  };
  (url: "/user/reset"): {
    /**
     * @description 重置密码 resetUsingPOST
     * 用户
     */
    post(options: { body: TBodyOfresetUsingPOST }): Promise<TResponseOfresetUsingPOST>;
  };
  (url: "/user/role/{roleId}"): {
    /**
     * @description 查询角色的已关联用户 findUserByRoleIdUsingGET
     * 用户
     */
    get(options: {
      path: TPathOffindUserByRoleIdUsingGET;
      query: TQueryOffindUserByRoleIdUsingGET;
    }): Promise<TResponseOffindUserByRoleIdUsingGET>;
  };
  (url: "/user/{id}"): {
    /**
     * @description 单体查询 getUsingGET_12
     * 用户
     */
    get(options: { path: TPathOfgetUsingGET_12 }): Promise<TResponseOfgetUsingGET_12>;
  };
  (url: "/wx/program/login"): {
    /**
     * @description 小程序登录 programLoginUsingPOST
     * 微信端登录
     */
    post(options: {
      body: TBodyOfprogramLoginUsingPOST;
    }): Promise<TResponseOfprogramLoginUsingPOST>;
  };
  (url: "/wx/program/login2"): {
    /**
     * @description 小程序登录简单实现 programLogin2UsingPOST
     * 微信端登录
     */
    post(options: {
      body: TBodyOfprogramLogin2UsingPOST;
    }): Promise<TResponseOfprogramLogin2UsingPOST>;
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
