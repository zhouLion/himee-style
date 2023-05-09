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
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
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

export type TBodyOfsaveUsingPOST_4 = ApplicationSaveDTO;
export type TResponseOfsaveUsingPOST_4 = R_Application_;
export type TBodyOfupdateUsingPUT_4 = ApplicationUpdateDTO;
export type TResponseOfupdateUsingPUT_4 = R_Application_;
export type TBodyOfdeleteUsingDELETE_6 = number[];
export type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_4 = Application;
export type TResponseOfupdateAllUsingPUT_4 = R_Application_;
export type TResponseOfclearCacheUsingPOST_1 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_5 = PageParams_ApplicationPageQuery_;
export type TResponseOfexportExcelUsingPOST_5 = any;
export interface TFormDataOfimportExcelUsingPOST_5 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
export type TBodyOfpageUsingPOST_6 = PageParams_ApplicationPageQuery_;
export type TResponseOfpageUsingPOST_6 = R_IPage_Application__;
export type TBodyOfpreviewUsingPOST_5 = PageParams_ApplicationPageQuery_;
export type TResponseOfpreviewUsingPOST_5 = R_string_;
export type TBodyOfqueryUsingPOST_5 = Application;
export type TResponseOfqueryUsingPOST_5 = R_List_Application__;
export type TResponseOfrefreshCacheUsingPOST_1 = R_boolean_;
export interface TPathOfgetUsingGET_6 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_6 = R_Application_;
export type TBodyOfsaveUsingPOST_5 = GlobalUserSaveDTO_1;
export type TResponseOfsaveUsingPOST_5 = R_User_;
export type TBodyOfupdateUsingPUT_5 = GlobalUserUpdateDTO;
export type TResponseOfupdateUsingPUT_5 = R_User_;
export type TBodyOfdeleteUsingDELETE_8 = number[];
export type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_5 = User;
export type TResponseOfupdateAllUsingPUT_5 = R_User_;
export interface TQueryOfcheckUsingGET_1 {
    // 账号
    account?: string;
    // 企业编码
    tenantCode?: string;
}
export type TResponseOfcheckUsingGET_1 = R_boolean_;
export interface TQueryOfdeleteUsingDELETE_7 {
    // 主键id
    "ids[]"?: string[];
    // 企业编码
    tenantCode?: string;
}
export type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_6 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfexportExcelUsingPOST_6 = any;
export interface TFormDataOfimportExcelUsingPOST_6 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
export type TBodyOfpageUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfpageUsingPOST_7 = R_IPage_User__;
export type TBodyOfpreviewUsingPOST_6 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfpreviewUsingPOST_6 = R_string_;
export type TBodyOfqueryUsingPOST_6 = User;
export type TResponseOfqueryUsingPOST_6 = R_List_User__;
export type TBodyOfupdatePasswordUsingPUT = UserUpdatePasswordDTO;
export type TResponseOfupdatePasswordUsingPUT = R_boolean_;
export interface TPathOfgetUsingGET_7 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_7 = R_User_;
export type TBodyOfsaveUsingPOST_6 = MenuSaveDTO;
export type TResponseOfsaveUsingPOST_6 = R_Menu_;
export type TBodyOfupdateUsingPUT_6 = MenuUpdateDTO;
export type TResponseOfupdateUsingPUT_6 = R_Menu_;
export type TBodyOfdeleteUsingDELETE_9 = number[];
export type TResponseOfdeleteUsingDELETE_9 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_6 = Menu;
export type TResponseOfupdateAllUsingPUT_6 = R_Menu_;
export type TResponseOfclearCacheUsingPOST_2 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_7 = PageParams_Menu_;
export type TResponseOfexportExcelUsingPOST_7 = any;
export type TResponseOffindMenuDataScopeTreeUsingPOST = R_List_MenuResourceTreeVO__;
export interface TFormDataOfimportExcelUsingPOST_7 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
export type TResponseOfmenuResourceTreeUsingPOST = R_List_MenuResourceTreeVO__;
export type TBodyOfpageUsingPOST_8 = PageParams_Menu_;
export type TResponseOfpageUsingPOST_8 = R_IPage_Menu__;
export type TBodyOfpreviewUsingPOST_7 = PageParams_Menu_;
export type TResponseOfpreviewUsingPOST_7 = R_string_;
export type TBodyOfqueryUsingPOST_7 = Menu;
export type TResponseOfqueryUsingPOST_7 = R_List_Menu__;
export type TResponseOfrefreshCacheUsingPOST_2 = R_boolean_;
export type TResponseOfallTreeUsingPOST = R_List_Menu__;
export interface TPathOfgetUsingGET_8 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_8 = R_Menu_;
export interface TQueryOflistUsingPOST {
    // name
    name?: string;
}
export type TResponseOflistUsingPOST = R_List_Online__;
export type TBodyOfpageUsingPOST_9 = PageParams_Online_;
export type TResponseOfpageUsingPOST_9 = R_IPage_Online__;
export interface TQueryOflogoutUsingPOST {
    // clientId
    clientId?: string;
    // userId
    userId?: number;
    // userToken
    userToken?: string;
}
export type TResponseOflogoutUsingPOST = R_boolean_;
export type TBodyOfsaveUsingPOST_7 = ResourceSaveDTO;
export type TResponseOfsaveUsingPOST_7 = R_Resource_;
export type TBodyOfupdateUsingPUT_7 = ResourceUpdateDTO;
export type TResponseOfupdateUsingPUT_7 = R_Resource_;
export type TBodyOfdeleteUsingDELETE_10 = number[];
export type TResponseOfdeleteUsingDELETE_10 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_7 = Resource;
export type TResponseOfupdateAllUsingPUT_7 = R_Resource_;
export interface TQueryOfcheckUsingGET_2 {
    // 编码
    code?: string;
    // ID
    id?: number;
}
export type TResponseOfcheckUsingGET_2 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_3 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_8 = PageParams_Resource_;
export type TResponseOfexportExcelUsingPOST_8 = any;
export interface TFormDataOfimportExcelUsingPOST_8 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
export type TBodyOfpageUsingPOST_10 = PageParams_Resource_;
export type TResponseOfpageUsingPOST_10 = R_IPage_Resource__;
export type TBodyOfpreviewUsingPOST_8 = PageParams_Resource_;
export type TResponseOfpreviewUsingPOST_8 = R_string_;
export type TBodyOfqueryUsingPOST_8 = Resource;
export type TResponseOfqueryUsingPOST_8 = R_List_Resource__;
export type TResponseOfrefreshCacheUsingPOST_3 = R_boolean_;
export interface TPathOfgetUsingGET_9 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_9 = R_Resource_;
export type TBodyOfsaveUsingPOST_8 = RoleSaveDTO_1;
export type TResponseOfsaveUsingPOST_8 = R_Role_;
export type TBodyOfupdateUsingPUT_8 = RoleUpdateDTO;
export type TResponseOfupdateUsingPUT_8 = R_Role_;
export type TBodyOfdeleteUsingDELETE_11 = number[];
export type TResponseOfdeleteUsingDELETE_11 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_8 = Role;
export type TResponseOfupdateAllUsingPUT_8 = R_Role_;
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
export type TBodyOfexportExcelUsingPOST_9 = PageParams_RolePageQuery_;
export type TResponseOfexportExcelUsingPOST_9 = any;
export interface TFormDataOfimportExcelUsingPOST_9 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_9 = R_boolean_;
export type TBodyOfpageUsingPOST_11 = PageParams_RolePageQuery_;
export type TResponseOfpageUsingPOST_11 = R_IPage_Role__;
export type TBodyOfpreviewUsingPOST_9 = PageParams_RolePageQuery_;
export type TResponseOfpreviewUsingPOST_9 = R_string_;
export type TBodyOfqueryUsingPOST_9 = Role;
export type TResponseOfqueryUsingPOST_9 = R_List_Role__;
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
export interface TPathOfgetUsingGET_10 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_10 = R_Role_;
export interface TPathOfqueryByRoleIdUsingGET {
    // roleId
    roleId: number;
}
export type TResponseOfqueryByRoleIdUsingGET = R_List_RoleAuthority__;
export type TBodyOfsaveUsingPOST_9 = UserSaveDTO;
export type TResponseOfsaveUsingPOST_9 = R_User_;
export type TBodyOfupdateUsingPUT_9 = UserUpdateDTO;
export type TResponseOfupdateUsingPUT_9 = R_User_;
export type TBodyOfdeleteUsingDELETE_12 = number[];
export type TResponseOfdeleteUsingDELETE_12 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_9 = User;
export type TResponseOfupdateAllUsingPUT_9 = R_User_;
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
export type TBodyOfexportExcelUsingPOST_10 = PageParams_UserPageQuery_;
export type TResponseOfexportExcelUsingPOST_10 = any;
export type TResponseOffindAllUserIdUsingGET = R_List_long__;
export type TResponseOffindAllUsingGET = R_List_User__;
export interface TQueryOffindUserByIdUsingGET {
    // ids
    ids: number[];
}
export type TResponseOffindUserByIdUsingGET = R_List_User__;
export interface TFormDataOfimportExcelUsingPOST_10 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_10 = R_boolean_;
export type TBodyOfpageUsingPOST_12 = PageParams_UserPageQuery_;
export type TResponseOfpageUsingPOST_12 = R_IPage_User__;
export type TBodyOfpageAllUsingPOST = PageParams_UserPageQuery_;
export type TResponseOfpageAllUsingPOST = R_IPage_User__;
export type TBodyOfupdatePasswordUsingPUT_1 = UserUpdatePasswordDTO;
export type TResponseOfupdatePasswordUsingPUT_1 = R_boolean_;
export type TBodyOfpreviewUsingPOST_10 = PageParams_UserPageQuery_;
export type TResponseOfpreviewUsingPOST_10 = R_string_;
export type TBodyOfqueryUsingPOST_10 = User;
export type TResponseOfqueryUsingPOST_10 = R_List_User__;
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
export interface TPathOfgetUsingGET_11 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_11 = R_User_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/application"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/应用/saveUsingPOST_4)
     *
     * @tag应用
     */
    post(options: { body: TBodyOfsaveUsingPOST_4 }): Promise<TResponseOfsaveUsingPOST_4>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/应用/updateUsingPUT_4)
     *
     * @tag应用
     */
    put(options: { body: TBodyOfupdateUsingPUT_4 }): Promise<TResponseOfupdateUsingPUT_4>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/应用/deleteUsingDELETE_6)
     *
     * @tag应用
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_6 }): Promise<TResponseOfdeleteUsingDELETE_6>;
  };
  (url: "/application/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/应用/updateAllUsingPUT_4)
     *
     * @tag应用
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_4 }): Promise<TResponseOfupdateAllUsingPUT_4>;
  };
  (url: "/application/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/权限模块/应用/clearCacheUsingPOST_1)
     *
     * @tag应用
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_1>;
  };
  (url: "/application/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/应用/exportExcelUsingPOST_5)
     *
     * @tag应用
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_5;
    }): Promise<TResponseOfexportExcelUsingPOST_5>;
  };
  (url: "/application/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/应用/importExcelUsingPOST_5)
     *
     * @tag应用
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_5;
    }): Promise<TResponseOfimportExcelUsingPOST_5>;
  };
  (url: "/application/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/应用/pageUsingPOST_6)
     *
     * @tag应用
     */
    post(options: { body: TBodyOfpageUsingPOST_6 }): Promise<TResponseOfpageUsingPOST_6>;
  };
  (url: "/application/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/应用/previewUsingPOST_5)
     *
     * @tag应用
     */
    post(options: { body: TBodyOfpreviewUsingPOST_5 }): Promise<TResponseOfpreviewUsingPOST_5>;
  };
  (url: "/application/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/应用/queryUsingPOST_5)
     *
     * @tag应用
     */
    post(options: { body: TBodyOfqueryUsingPOST_5 }): Promise<TResponseOfqueryUsingPOST_5>;
  };
  (url: "/application/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/权限模块/应用/refreshCacheUsingPOST_1)
     *
     * @tag应用
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_1>;
  };
  (url: "/application/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/应用/getUsingGET_6)
     *
     * @tag应用
     */
    get(options: { path: TPathOfgetUsingGET_6 }): Promise<TResponseOfgetUsingGET_6>;
  };
  (url: "/globalUser"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/saveUsingPOST_5)
     *
     * @tag全局账号
     */
    post(options: { body: TBodyOfsaveUsingPOST_5 }): Promise<TResponseOfsaveUsingPOST_5>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/updateUsingPUT_5)
     *
     * @tag全局账号
     */
    put(options: { body: TBodyOfupdateUsingPUT_5 }): Promise<TResponseOfupdateUsingPUT_5>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/deleteUsingDELETE_8)
     *
     * @tag全局账号
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_8 }): Promise<TResponseOfdeleteUsingDELETE_8>;
  };
  (url: "/globalUser/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/updateAllUsingPUT_5)
     *
     * @tag全局账号
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_5 }): Promise<TResponseOfupdateAllUsingPUT_5>;
  };
  (url: "/globalUser/check"): {
    /**
     * @description 检测账号是否可用
     * @see [Swagger doc: 检测账号是否可用](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/checkUsingGET_1)
     *
     * @tag全局账号
     */
    get(options: { query: TQueryOfcheckUsingGET_1 }): Promise<TResponseOfcheckUsingGET_1>;
  };
  (url: "/globalUser/delete"): {
    /**
     * @description 删除用户
     * @see [Swagger doc: 删除用户](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/deleteUsingDELETE_7)
     *
     * @tag全局账号
     */
    delete(options: {
      query: TQueryOfdeleteUsingDELETE_7;
    }): Promise<TResponseOfdeleteUsingDELETE_7>;
  };
  (url: "/globalUser/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/exportExcelUsingPOST_6)
     *
     * @tag全局账号
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_6;
    }): Promise<TResponseOfexportExcelUsingPOST_6>;
  };
  (url: "/globalUser/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/importExcelUsingPOST_6)
     *
     * @tag全局账号
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_6;
    }): Promise<TResponseOfimportExcelUsingPOST_6>;
  };
  (url: "/globalUser/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/pageUsingPOST_7)
     *
     * @tag全局账号
     */
    post(options: { body: TBodyOfpageUsingPOST_7 }): Promise<TResponseOfpageUsingPOST_7>;
  };
  (url: "/globalUser/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/previewUsingPOST_6)
     *
     * @tag全局账号
     */
    post(options: { body: TBodyOfpreviewUsingPOST_6 }): Promise<TResponseOfpreviewUsingPOST_6>;
  };
  (url: "/globalUser/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/queryUsingPOST_6)
     *
     * @tag全局账号
     */
    post(options: { body: TBodyOfqueryUsingPOST_6 }): Promise<TResponseOfqueryUsingPOST_6>;
  };
  (url: "/globalUser/reset"): {
    /**
     * @description 修改密码
     * @see [Swagger doc: 修改密码](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/updatePasswordUsingPUT)
     *
     * @tag全局账号
     */
    put(options: {
      body: TBodyOfupdatePasswordUsingPUT;
    }): Promise<TResponseOfupdatePasswordUsingPUT>;
  };
  (url: "/globalUser/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/getUsingGET_7)
     *
     * @tag全局账号
     */
    get(options: { path: TPathOfgetUsingGET_7 }): Promise<TResponseOfgetUsingGET_7>;
  };
  (url: "/menu"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/菜单/saveUsingPOST_6)
     *
     * @tag菜单
     */
    post(options: { body: TBodyOfsaveUsingPOST_6 }): Promise<TResponseOfsaveUsingPOST_6>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/菜单/updateUsingPUT_6)
     *
     * @tag菜单
     */
    put(options: { body: TBodyOfupdateUsingPUT_6 }): Promise<TResponseOfupdateUsingPUT_6>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/菜单/deleteUsingDELETE_9)
     *
     * @tag菜单
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_9 }): Promise<TResponseOfdeleteUsingDELETE_9>;
  };
  (url: "/menu/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/菜单/updateAllUsingPUT_6)
     *
     * @tag菜单
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_6 }): Promise<TResponseOfupdateAllUsingPUT_6>;
  };
  (url: "/menu/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/权限模块/菜单/clearCacheUsingPOST_2)
     *
     * @tag菜单
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_2>;
  };
  (url: "/menu/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/菜单/exportExcelUsingPOST_7)
     *
     * @tag菜单
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_7;
    }): Promise<TResponseOfexportExcelUsingPOST_7>;
  };
  (url: "/menu/findMenuDataScopeTree"): {
    /**
     * @description 查询系统所有的数据权限
     * @see [Swagger doc: 查询系统所有的数据权限](http://120.79.250.86:8762/doc.html#/权限模块/菜单/findMenuDataScopeTreeUsingPOST)
     *
     * @tag菜单
     */
    post(options: {}): Promise<TResponseOffindMenuDataScopeTreeUsingPOST>;
  };
  (url: "/menu/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/菜单/importExcelUsingPOST_7)
     *
     * @tag菜单
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_7;
    }): Promise<TResponseOfimportExcelUsingPOST_7>;
  };
  (url: "/menu/menuResourceTree"): {
    /**
     * @description 查询系统所有的菜单和资源树
     * @see [Swagger doc: 查询系统所有的菜单和资源树](http://120.79.250.86:8762/doc.html#/权限模块/菜单/menuResourceTreeUsingPOST)
     *
     * @tag菜单
     */
    post(options: {}): Promise<TResponseOfmenuResourceTreeUsingPOST>;
  };
  (url: "/menu/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/菜单/pageUsingPOST_8)
     *
     * @tag菜单
     */
    post(options: { body: TBodyOfpageUsingPOST_8 }): Promise<TResponseOfpageUsingPOST_8>;
  };
  (url: "/menu/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/菜单/previewUsingPOST_7)
     *
     * @tag菜单
     */
    post(options: { body: TBodyOfpreviewUsingPOST_7 }): Promise<TResponseOfpreviewUsingPOST_7>;
  };
  (url: "/menu/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/菜单/queryUsingPOST_7)
     *
     * @tag菜单
     */
    post(options: { body: TBodyOfqueryUsingPOST_7 }): Promise<TResponseOfqueryUsingPOST_7>;
  };
  (url: "/menu/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/权限模块/菜单/refreshCacheUsingPOST_2)
     *
     * @tag菜单
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_2>;
  };
  (url: "/menu/tree"): {
    /**
     * @description 查询系统所有的菜单
     * @see [Swagger doc: 查询系统所有的菜单](http://120.79.250.86:8762/doc.html#/权限模块/菜单/allTreeUsingPOST)
     *
     * @tag菜单
     */
    post(options: {}): Promise<TResponseOfallTreeUsingPOST>;
  };
  (url: "/menu/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/菜单/getUsingGET_8)
     *
     * @tag菜单
     */
    get(options: { path: TPathOfgetUsingGET_8 }): Promise<TResponseOfgetUsingGET_8>;
  };
  (url: "/online/list"): {
    /**
     * @description list
     * @see [Swagger doc: list](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/listUsingPOST)
     *
     * @tag在线用户
     */
    post(options: { query: TQueryOflistUsingPOST }): Promise<TResponseOflistUsingPOST>;
  };
  (url: "/online/page"): {
    /**
     * @description page
     * @see [Swagger doc: page](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/pageUsingPOST_9)
     *
     * @tag在线用户
     */
    post(options: { body: TBodyOfpageUsingPOST_9 }): Promise<TResponseOfpageUsingPOST_9>;
  };
  (url: "/online/t"): {
    /**
     * @description T人
     * @see [Swagger doc: T人](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/logoutUsingPOST)
     *
     * @tag在线用户
     */
    post(options: { query: TQueryOflogoutUsingPOST }): Promise<TResponseOflogoutUsingPOST>;
  };
  (url: "/resource"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/资源/saveUsingPOST_7)
     *
     * @tag资源
     */
    post(options: { body: TBodyOfsaveUsingPOST_7 }): Promise<TResponseOfsaveUsingPOST_7>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/资源/updateUsingPUT_7)
     *
     * @tag资源
     */
    put(options: { body: TBodyOfupdateUsingPUT_7 }): Promise<TResponseOfupdateUsingPUT_7>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/资源/deleteUsingDELETE_10)
     *
     * @tag资源
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_10;
    }): Promise<TResponseOfdeleteUsingDELETE_10>;
  };
  (url: "/resource/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/资源/updateAllUsingPUT_7)
     *
     * @tag资源
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_7 }): Promise<TResponseOfupdateAllUsingPUT_7>;
  };
  (url: "/resource/check"): {
    /**
     * @description 检测资源编码是否可用
     * @see [Swagger doc: 检测资源编码是否可用](http://120.79.250.86:8762/doc.html#/权限模块/资源/checkUsingGET_2)
     *
     * @tag资源
     */
    get(options: { query: TQueryOfcheckUsingGET_2 }): Promise<TResponseOfcheckUsingGET_2>;
  };
  (url: "/resource/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/权限模块/资源/clearCacheUsingPOST_3)
     *
     * @tag资源
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_3>;
  };
  (url: "/resource/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/资源/exportExcelUsingPOST_8)
     *
     * @tag资源
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_8;
    }): Promise<TResponseOfexportExcelUsingPOST_8>;
  };
  (url: "/resource/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/资源/importExcelUsingPOST_8)
     *
     * @tag资源
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_8;
    }): Promise<TResponseOfimportExcelUsingPOST_8>;
  };
  (url: "/resource/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/资源/pageUsingPOST_10)
     *
     * @tag资源
     */
    post(options: { body: TBodyOfpageUsingPOST_10 }): Promise<TResponseOfpageUsingPOST_10>;
  };
  (url: "/resource/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/资源/previewUsingPOST_8)
     *
     * @tag资源
     */
    post(options: { body: TBodyOfpreviewUsingPOST_8 }): Promise<TResponseOfpreviewUsingPOST_8>;
  };
  (url: "/resource/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/资源/queryUsingPOST_8)
     *
     * @tag资源
     */
    post(options: { body: TBodyOfqueryUsingPOST_8 }): Promise<TResponseOfqueryUsingPOST_8>;
  };
  (url: "/resource/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/权限模块/资源/refreshCacheUsingPOST_3)
     *
     * @tag资源
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_3>;
  };
  (url: "/resource/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/资源/getUsingGET_9)
     *
     * @tag资源
     */
    get(options: { path: TPathOfgetUsingGET_9 }): Promise<TResponseOfgetUsingGET_9>;
  };
  (url: "/role"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/角色/saveUsingPOST_8)
     *
     * @tag角色
     */
    post(options: { body: TBodyOfsaveUsingPOST_8 }): Promise<TResponseOfsaveUsingPOST_8>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/角色/updateUsingPUT_8)
     *
     * @tag角色
     */
    put(options: { body: TBodyOfupdateUsingPUT_8 }): Promise<TResponseOfupdateUsingPUT_8>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/角色/deleteUsingDELETE_11)
     *
     * @tag角色
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_11;
    }): Promise<TResponseOfdeleteUsingDELETE_11>;
  };
  (url: "/role/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/角色/updateAllUsingPUT_8)
     *
     * @tag角色
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_8 }): Promise<TResponseOfupdateAllUsingPUT_8>;
  };
  (url: "/role/check"): {
    /**
     * @description 检测角色编码
     * @see [Swagger doc: 检测角色编码](http://120.79.250.86:8762/doc.html#/权限模块/角色/checkUsingGET_3)
     *
     * @tag角色
     */
    get(options: { query: TQueryOfcheckUsingGET_3 }): Promise<TResponseOfcheckUsingGET_3>;
  };
  (url: "/role/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/权限模块/角色/clearCacheUsingPOST_4)
     *
     * @tag角色
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_4>;
  };
  (url: "/role/codes"): {
    /**
     * @description 根据角色编码查询用户ID
     * @see [Swagger doc: 根据角色编码查询用户ID](http://120.79.250.86:8762/doc.html#/权限模块/角色/findUserIdByCodeUsingGET)
     *
     * @tag角色
     */
    get(options: {
      query: TQueryOffindUserIdByCodeUsingGET;
    }): Promise<TResponseOffindUserIdByCodeUsingGET>;
  };
  (url: "/role/details"): {
    /**
     * @description 查询角色
     * @see [Swagger doc: 查询角色](http://120.79.250.86:8762/doc.html#/权限模块/角色/getDetailsUsingGET)
     *
     * @tag角色
     */
    get(options: { query: TQueryOfgetDetailsUsingGET }): Promise<TResponseOfgetDetailsUsingGET>;
  };
  (url: "/role/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/角色/exportExcelUsingPOST_9)
     *
     * @tag角色
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_9;
    }): Promise<TResponseOfexportExcelUsingPOST_9>;
  };
  (url: "/role/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/角色/importExcelUsingPOST_9)
     *
     * @tag角色
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_9;
    }): Promise<TResponseOfimportExcelUsingPOST_9>;
  };
  (url: "/role/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/角色/pageUsingPOST_11)
     *
     * @tag角色
     */
    post(options: { body: TBodyOfpageUsingPOST_11 }): Promise<TResponseOfpageUsingPOST_11>;
  };
  (url: "/role/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/角色/previewUsingPOST_9)
     *
     * @tag角色
     */
    post(options: { body: TBodyOfpreviewUsingPOST_9 }): Promise<TResponseOfpreviewUsingPOST_9>;
  };
  (url: "/role/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/角色/queryUsingPOST_9)
     *
     * @tag角色
     */
    post(options: { body: TBodyOfqueryUsingPOST_9 }): Promise<TResponseOfqueryUsingPOST_9>;
  };
  (url: "/role/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/权限模块/角色/refreshCacheUsingPOST_4)
     *
     * @tag角色
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_4>;
  };
  (url: "/role/resourceList"): {
    /**
     * @description 查询角色拥有的资源id集合
     * @see [Swagger doc: 查询角色拥有的资源id集合](http://120.79.250.86:8762/doc.html#/权限模块/角色/findResourceListByRoleIdUsingGET)
     *
     * @tag角色
     */
    get(options: {
      query: TQueryOffindResourceListByRoleIdUsingGET;
    }): Promise<TResponseOffindResourceListByRoleIdUsingGET>;
  };
  (url: "/role/saveResource"): {
    /**
     * @description 给角色配置权限
     * @see [Swagger doc: 给角色配置权限](http://120.79.250.86:8762/doc.html#/权限模块/角色/saveRoleAuthorityUsingPOST)
     *
     * @tag角色
     */
    post(options: {
      body: TBodyOfsaveRoleAuthorityUsingPOST;
    }): Promise<TResponseOfsaveRoleAuthorityUsingPOST>;
  };
  (url: "/role/saveRoleUser"): {
    /**
     * @description 给角色绑定用户
     * @see [Swagger doc: 给角色绑定用户](http://120.79.250.86:8762/doc.html#/权限模块/角色/saveUserRoleUsingPOST_1)
     *
     * @tag角色
     */
    post(options: {
      body: TBodyOfsaveUserRoleUsingPOST_1;
    }): Promise<TResponseOfsaveUserRoleUsingPOST_1>;
  };
  (url: "/role/userList"): {
    /**
     * @description 查询角色的用户
     * @see [Swagger doc: 查询角色的用户](http://120.79.250.86:8762/doc.html#/权限模块/角色/findUserIdByRoleIdUsingGET)
     *
     * @tag角色
     */
    get(options: {
      query: TQueryOffindUserIdByRoleIdUsingGET;
    }): Promise<TResponseOffindUserIdByRoleIdUsingGET>;
  };
  (url: "/role/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/角色/getUsingGET_10)
     *
     * @tag角色
     */
    get(options: { path: TPathOfgetUsingGET_10 }): Promise<TResponseOfgetUsingGET_10>;
  };
  (url: "/roleAuthority/{roleId}"): {
    /**
     * @description 查询指定角色关联的菜单和资源
     * @see [Swagger doc: 查询指定角色关联的菜单和资源](http://120.79.250.86:8762/doc.html#/权限模块/角色的资源/queryByRoleIdUsingGET)
     *
     * @tag角色的资源
     */
    get(options: { path: TPathOfqueryByRoleIdUsingGET }): Promise<TResponseOfqueryByRoleIdUsingGET>;
  };
  (url: "/user"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/用户/saveUsingPOST_9)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfsaveUsingPOST_9 }): Promise<TResponseOfsaveUsingPOST_9>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/用户/updateUsingPUT_9)
     *
     * @tag用户
     */
    put(options: { body: TBodyOfupdateUsingPUT_9 }): Promise<TResponseOfupdateUsingPUT_9>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/用户/deleteUsingDELETE_12)
     *
     * @tag用户
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_12;
    }): Promise<TResponseOfdeleteUsingDELETE_12>;
  };
  (url: "/user/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/用户/updateAllUsingPUT_9)
     *
     * @tag用户
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_9 }): Promise<TResponseOfupdateAllUsingPUT_9>;
  };
  (url: "/user/avatar"): {
    /**
     * @description 修改头像
     * @see [Swagger doc: 修改头像](http://120.79.250.86:8762/doc.html#/权限模块/用户/avatarUsingPUT)
     *
     * @tag用户
     */
    put(options: { body: TBodyOfavatarUsingPUT }): Promise<TResponseOfavatarUsingPUT>;
  };
  (url: "/user/base"): {
    /**
     * @description 修改基础信息
     * @see [Swagger doc: 修改基础信息](http://120.79.250.86:8762/doc.html#/权限模块/用户/updateBaseUsingPUT)
     *
     * @tag用户
     */
    put(options: { body: TBodyOfupdateBaseUsingPUT }): Promise<TResponseOfupdateBaseUsingPUT>;
  };
  (url: "/user/check"): {
    /**
     * @description 检测名称是否可用
     * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8762/doc.html#/权限模块/用户/checkUsingGET_4)
     *
     * @tag用户
     */
    get(options: { query: TQueryOfcheckUsingGET_4 }): Promise<TResponseOfcheckUsingGET_4>;
  };
  (url: "/user/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/权限模块/用户/clearCacheUsingPOST_5)
     *
     * @tag用户
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_5>;
  };
  (url: "/user/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/权限模块/用户/exportExcelUsingPOST_10)
     *
     * @tag用户
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_10;
    }): Promise<TResponseOfexportExcelUsingPOST_10>;
  };
  (url: "/user/find"): {
    /**
     * @description 查询所有用户
     * @see [Swagger doc: 查询所有用户](http://120.79.250.86:8762/doc.html#/权限模块/用户/findAllUserIdUsingGET)
     *
     * @tag用户
     */
    get(options: {}): Promise<TResponseOffindAllUserIdUsingGET>;
  };
  (url: "/user/findAll"): {
    /**
     * @description 查询所有用户实体
     * @see [Swagger doc: 查询所有用户实体](http://120.79.250.86:8762/doc.html#/权限模块/用户/findAllUsingGET)
     *
     * @tag用户
     */
    get(options: {}): Promise<TResponseOffindAllUsingGET>;
  };
  (url: "/user/findUserById"): {
    /**
     * @description findUserById
     * @see [Swagger doc: findUserById](http://120.79.250.86:8762/doc.html#/权限模块/用户/findUserByIdUsingGET)
     *
     * @tag用户
     */
    get(options: { query: TQueryOffindUserByIdUsingGET }): Promise<TResponseOffindUserByIdUsingGET>;
  };
  (url: "/user/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/权限模块/用户/importExcelUsingPOST_10)
     *
     * @tag用户
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_10;
    }): Promise<TResponseOfimportExcelUsingPOST_10>;
  };
  (url: "/user/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/权限模块/用户/pageUsingPOST_12)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfpageUsingPOST_12 }): Promise<TResponseOfpageUsingPOST_12>;
  };
  (url: "/user/pageAll"): {
    /**
     * @description 分页查询所有用户
     * @see [Swagger doc: 分页查询所有用户](http://120.79.250.86:8762/doc.html#/权限模块/用户/pageAllUsingPOST)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfpageAllUsingPOST }): Promise<TResponseOfpageAllUsingPOST>;
  };
  (url: "/user/password"): {
    /**
     * @description 修改密码
     * @see [Swagger doc: 修改密码](http://120.79.250.86:8762/doc.html#/权限模块/用户/updatePasswordUsingPUT_1)
     *
     * @tag用户
     */
    put(options: {
      body: TBodyOfupdatePasswordUsingPUT_1;
    }): Promise<TResponseOfupdatePasswordUsingPUT_1>;
  };
  (url: "/user/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/用户/previewUsingPOST_10)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfpreviewUsingPOST_10 }): Promise<TResponseOfpreviewUsingPOST_10>;
  };
  (url: "/user/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/用户/queryUsingPOST_10)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfqueryUsingPOST_10 }): Promise<TResponseOfqueryUsingPOST_10>;
  };
  (url: "/user/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/权限模块/用户/refreshCacheUsingPOST_5)
     *
     * @tag用户
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_5>;
  };
  (url: "/user/reset"): {
    /**
     * @description 重置密码
     * @see [Swagger doc: 重置密码](http://120.79.250.86:8762/doc.html#/权限模块/用户/resetUsingPOST)
     *
     * @tag用户
     */
    post(options: { body: TBodyOfresetUsingPOST }): Promise<TResponseOfresetUsingPOST>;
  };
  (url: "/user/role/{roleId}"): {
    /**
     * @description 查询角色的已关联用户
     * @see [Swagger doc: 查询角色的已关联用户](http://120.79.250.86:8762/doc.html#/权限模块/用户/findUserByRoleIdUsingGET)
     *
     * @tag用户
     */
    get(options: {
      path: TPathOffindUserByRoleIdUsingGET;
      query: TQueryOffindUserByRoleIdUsingGET;
    }): Promise<TResponseOffindUserByRoleIdUsingGET>;
  };
  (url: "/user/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/权限模块/用户/getUsingGET_11)
     *
     * @tag用户
     */
    get(options: { path: TPathOfgetUsingGET_11 }): Promise<TResponseOfgetUsingGET_11>;
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
