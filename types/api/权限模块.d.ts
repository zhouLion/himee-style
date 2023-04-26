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
export interface RoleAuthoritySaveDTO {
    // 资源ID
    menuIdList?: number[];
    resourceIdList?: number[];
    // 角色id
    roleId?: number;
}
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
export interface UserRoleDTO {
    // 用户id
    idList?: number[];
    // 用户信息
    userList?: User[];
}
export interface UserRoleSaveDTO {
    // 角色ID
    roleId?: number;
    // 用户ID
    userIdList?: number[];
}
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
export interface UserUpdateAvatarDTO {
    appendixAvatar?: AppendixSaveVO;
    // 选择的头像
    avatar?: string;
    // 主键
    id?: number;
}
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
    // token
    token?: string;
    // 小程序unionId
    unionId?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}