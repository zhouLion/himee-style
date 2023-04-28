/**
 * @description: 业务附件
 */
export interface AppendixSaveVO {
    bizId?: number;
    bizType?: string;
    bucket?: string;
    contentType?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
}
/**
 * @description: 应用
 */
export interface Application {
    appType?: string;
    clientId?: string;
    clientSecret?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    icon?: string;
    id?: number;
    name?: string;
    state?: boolean;
    updateTime?: string;
    updatedBy?: number;
    website?: string;
}
/**
 * @description: 应用
 */
export interface ApplicationPageQuery {
    appType?: string;
    clientId?: string;
    clientSecret?: string;
    describe?: string;
    icon?: string;
    name?: string;
    state?: boolean;
    website?: string;
}
/**
 * @description: 应用
 */
export interface ApplicationSaveDTO {
    appType?: string;
    clientId?: string;
    clientSecret?: string;
    describe?: string;
    icon?: string;
    name?: string;
    state?: boolean;
    website?: string;
}
/**
 * @description: 应用
 */
export interface ApplicationUpdateDTO {
    appType?: string;
    clientId?: string;
    clientSecret?: string;
    describe?: string;
    icon?: string;
    id?: number;
    name?: string;
    state?: boolean;
    website?: string;
}
/**
 * @description: 全局账号
 */
export interface GlobalUserSaveDTO {
    account?: string;
    email?: string;
    mobile?: string;
    name?: string;
    tenantCode?: string;
}
/**
 * @description: 全局账号
 */
export interface GlobalUserSaveDTO_1 {
    account?: string;
    confirmPassword?: string;
    email?: string;
    mobile?: string;
    name?: string;
    password?: string;
    sex?: string;
    tenantCode?: string;
    userType?: string;
}
/**
 * @description: 全局账号
 */
export interface GlobalUserUpdateDTO {
    email?: string;
    id?: number;
    mobile?: string;
    name?: string;
    sex?: string;
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
export interface MenuResourceTreeVO {
    code?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    icon?: string;
    id?: number;
    isDef?: boolean;
    label?: string;
    parentId?: number;
    sortValue?: number;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 菜单
 */
export interface MenuSaveDTO {
    component?: string;
    customClass?: string;
    dataScope?: string;
    describe?: string;
    group?: string;
    icon?: string;
    isDef?: boolean;
    isGeneral?: boolean;
    label?: string;
    parentId?: number;
    path?: string;
    readonly?: boolean;
    resourceType?: string;
    sortValue?: number;
    state?: boolean;
}
/**
 * @description: 菜单
 */
export interface MenuUpdateDTO {
    component?: string;
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
}
/**
 * @description: 在线用户
 */
export interface Online {
    account?: string;
    clientId?: string;
    expireMillis?: number;
    expireTime?: string;
    location?: string;
    loginIp?: string;
    loginTime?: string;
    name?: string;
    token?: string;
    userId?: number;
}
/**
 * @description: 分页参数
 */
export interface PageParams_ApplicationPageQuery_ {
    current?: number;
    extra?: any;
    model: ApplicationPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_GlobalUserSaveDTO_ {
    current?: number;
    extra?: any;
    model: GlobalUserSaveDTO;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_Menu_ {
    current?: number;
    extra?: any;
    model: Menu;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_Online_ {
    current?: number;
    extra?: any;
    model: Online;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_Resource_ {
    current?: number;
    extra?: any;
    model: Resource;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_RolePageQuery_ {
    current?: number;
    extra?: any;
    model: RolePageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_UserPageQuery_ {
    current?: number;
    extra?: any;
    model: UserPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 资源
 */
export interface Resource {
    code?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    id?: number;
    menuId?: number;
    name?: string;
    readonly?: boolean;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 资源
 */
export interface ResourceSaveDTO {
    code?: string;
    describe?: string;
    menuId?: number;
    name?: string;
    readonly?: boolean;
}
/**
 * @description: 资源
 */
export interface ResourceUpdateDTO {
    code?: string;
    describe?: string;
    id?: number;
    menuId?: number;
    name?: string;
    readonly?: boolean;
}
/**
 * @description: 角色
 */
export interface Role {
    category?: string;
    code?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    echoMap?: any;
    id?: number;
    name?: string;
    readonly?: boolean;
    state?: boolean;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 角色的资源
 */
export interface RoleAuthority {
    authorityId?: number;
    authorityType?: string;
    createTime?: string;
    createdBy?: number;
    id?: number;
    roleId?: number;
}
/**
 * @description: 角色的资源
 */
export interface RoleAuthoritySaveDTO {
    menuIdList?: number[];
    resourceIdList?: number[];
    roleId?: number;
}
/**
 * @description: 角色
 */
export interface RolePageQuery {
    category?: string[];
    code?: string;
    describe?: string;
    name?: string;
    readonly?: boolean[];
    state?: boolean[];
    type?: string;
}
/**
 * @description: 角色
 */
export interface RoleSaveDTO {
    category?: string;
    code?: string;
    describe?: string;
    id?: number;
    name?: string;
    orgList?: number[];
    readonly?: boolean;
    state?: boolean;
    type?: string;
}
/**
 * @description: 角色
 */
export interface RoleSaveDTO_1 {
    category?: string;
    code?: string;
    describe?: string;
    name?: string;
    orgList?: number[];
    state?: boolean;
    type?: string;
}
/**
 * @description: 角色
 */
export interface RoleUpdateDTO {
    category?: string;
    code?: string;
    describe?: string;
    id?: number;
    name?: string;
    orgList?: number[];
    readonly?: boolean;
    state?: boolean;
}
/**
 * @description: 给角色分配员工
 */
export interface RoleUserSaveVO {
    flag?: boolean;
    roleId?: number;
    userIdList?: number[];
}
export interface R_Application_ {
    code?: number;
    data?: Application;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_Application__ {
    code?: number;
    data?: IPage_Application_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_Menu__ {
    code?: number;
    data?: IPage_Menu_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_Online__ {
    code?: number;
    data?: IPage_Online_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_Resource__ {
    code?: number;
    data?: IPage_Resource_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_Role__ {
    code?: number;
    data?: IPage_Role_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_User__ {
    code?: number;
    data?: IPage_User_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_Application__ {
    code?: number;
    data?: Application[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_MenuResourceTreeVO__ {
    code?: number;
    data?: MenuResourceTreeVO[];
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
export interface R_List_Online__ {
    code?: number;
    data?: Online[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_Resource__ {
    code?: number;
    data?: Resource[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_RoleAuthority__ {
    code?: number;
    data?: RoleAuthority[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_Role__ {
    code?: number;
    data?: Role[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_User__ {
    code?: number;
    data?: User[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_long__ {
    code?: number;
    data?: number[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Menu_ {
    code?: number;
    data?: Menu;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Resource_ {
    code?: number;
    data?: Resource;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_RoleAuthoritySaveDTO_ {
    code?: number;
    data?: RoleAuthoritySaveDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_RoleSaveDTO_ {
    code?: number;
    data?: RoleSaveDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Role_ {
    code?: number;
    data?: Role;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_UserRoleDTO_ {
    code?: number;
    data?: UserRoleDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_User_ {
    code?: number;
    data?: User;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_WechatUser_ {
    code?: number;
    data?: WechatUser;
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
/**
 * @description: 用户
 */
export interface User {
    account?: string;
    avatar?: string;
    createTime?: string;
    createdBy?: number;
    createdOrgId?: number;
    echoMap?: any;
    education?: string;
    email?: string;
    id?: number;
    lastLoginTime?: string;
    mobile?: string;
    name?: string;
    nation?: string;
    orgId?: number;
    password?: string;
    passwordErrorLastTime?: string;
    passwordErrorNum?: number;
    passwordExpireTime?: string;
    positionStatus?: string;
    readonly?: boolean;
    salt?: string;
    sex?: string;
    state?: boolean;
    stationId?: number;
    tenantCode?: string;
    updateTime?: string;
    updatedBy?: number;
    userType?: string;
    workDescribe?: string;
}
/**
 * @description: 用户
 */
export interface UserPageQuery {
    account?: string;
    avatar?: string;
    createdOrgId?: number;
    education?: string[];
    email?: string;
    lastLoginTime?: string;
    mobile?: string;
    name?: string;
    nation?: string[];
    orgId?: number;
    password?: string;
    passwordErrorLastTime?: string;
    passwordErrorNum?: number;
    passwordExpireTime?: string;
    positionStatus?: string[];
    readonly?: boolean;
    roleId?: string;
    salt?: string;
    scope?: string;
    sex?: string[];
    state?: boolean;
    stationId?: number;
    workDescribe?: string;
}
/**
 * @description: 用户角色DTO
 */
export interface UserRoleDTO {
    idList?: number[];
    userList?: User[];
}
/**
 * @description: 角色分配 账号角色绑定
 */
export interface UserRoleSaveDTO {
    roleId?: number;
    userIdList?: number[];
}
/**
 * @description: 用户
 */
export interface UserSaveDTO {
    account?: string;
    avatar?: string;
    createdOrgId?: number;
    education?: string;
    email?: string;
    mobile?: string;
    name?: string;
    nation?: string;
    orgId?: number;
    password?: string;
    positionStatus?: string;
    sex?: string;
    state?: boolean;
    stationId?: number;
    workDescribe?: string;
}
/**
 * @description: 用户
 */
export interface UserUpdateAvatarDTO {
    appendixAvatar?: AppendixSaveVO;
    avatar?: string;
    id?: number;
}
/**
 * @description: 用户修改基础信息实体
 */
export interface UserUpdateBaseInfoDTO {
    education?: string;
    email?: string;
    id?: number;
    mobile?: string;
    name?: string;
    nation?: string;
    positionStatus?: string;
    sex?: string;
    workDescribe?: string;
}
/**
 * @description: 用户
 */
export interface UserUpdateDTO {
    account?: string;
    avatar?: string;
    education?: string;
    email?: string;
    id?: number;
    mobile?: string;
    name?: string;
    nation?: string;
    orgId?: number;
    positionStatus?: string;
    sex?: string;
    state?: boolean;
    stationId?: number;
    workDescribe?: string;
}
/**
 * @description: 用户
 */
export interface UserUpdatePasswordDTO {
    confirmPassword?: string;
    id?: number;
    oldPassword?: string;
    password?: string;
    tenantCode?: string;
}
export interface WechatLoginRequestDTO {
    code: string;
    encryptedData?: string;
    iv?: string;
    rawData?: string;
    signature?: string;
}
/**
 * @description: 小程序用户表
 */
export interface WechatUser {
    avatarUrl?: string;
    city?: string;
    country?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    gender?: number;
    id?: number;
    mobile?: string;
    nickname?: string;
    openId?: string;
    province?: string;
    token?: string;
    unionId?: string;
    updateTime?: string;
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
    account?: string;
    tenantCode?: string;
}
export type TResponseOfcheckUsingGET_1 = R_boolean_;
export interface TQueryOfdeleteUsingDELETE_8 {
    "ids[]"?: string[];
    tenantCode?: string;
}
export type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
export type TResponseOfexportExcelUsingPOST_7 = any;
export interface TFormDataOfimportExcelUsingPOST_7 {
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
    id?: number;
}
export type TResponseOfgetUsingGET_9 = R_Menu_;
export interface TQueryOflistUsingPOST {
    name?: string;
}
export type TResponseOflistUsingPOST = R_List_Online__;
export type TBodyOfpageUsingPOST_10 = PageParams_Online_;
export type TResponseOfpageUsingPOST_10 = R_IPage_Online__;
export interface TQueryOflogoutUsingPOST {
    clientId?: string;
    userId?: number;
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
    code?: string;
    id?: number;
}
export type TResponseOfcheckUsingGET_2 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_3 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_9 = PageParams_Resource_;
export type TResponseOfexportExcelUsingPOST_9 = any;
export interface TFormDataOfimportExcelUsingPOST_9 {
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
    code: string;
}
export type TResponseOfcheckUsingGET_3 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_4 = R_boolean_;
export interface TQueryOffindUserIdByCodeUsingGET {
    codes: string[];
}
export type TResponseOffindUserIdByCodeUsingGET = R_List_long__;
export interface TQueryOfgetDetailsUsingGET {
    id: number;
}
export type TResponseOfgetDetailsUsingGET = R_RoleSaveDTO_;
export type TBodyOfexportExcelUsingPOST_10 = PageParams_RolePageQuery_;
export type TResponseOfexportExcelUsingPOST_10 = any;
export interface TFormDataOfimportExcelUsingPOST_10 {
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
    roleId: number;
}
export type TResponseOffindResourceListByRoleIdUsingGET = R_RoleAuthoritySaveDTO_;
export type TBodyOfsaveRoleAuthorityUsingPOST = RoleAuthoritySaveDTO;
export type TResponseOfsaveRoleAuthorityUsingPOST = R_boolean_;
export type TBodyOfsaveUserRoleUsingPOST_1 = RoleUserSaveVO;
export type TResponseOfsaveUserRoleUsingPOST_1 = R_List_long__;
export interface TQueryOffindUserIdByRoleIdUsingGET {
    roleId: number;
}
export type TResponseOffindUserIdByRoleIdUsingGET = R_List_long__;
export interface TPathOfgetUsingGET_11 {
    id?: number;
}
export type TResponseOfgetUsingGET_11 = R_Role_;
export interface TPathOfqueryByRoleIdUsingGET {
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
    id?: number;
    name?: string;
}
export type TResponseOfcheckUsingGET_4 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_5 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_11 = PageParams_UserPageQuery_;
export type TResponseOfexportExcelUsingPOST_11 = any;
export type TResponseOffindAllUserIdUsingGET = R_List_long__;
export type TResponseOffindAllUsingGET = R_List_User__;
export interface TQueryOffindUserByIdUsingGET {
    ids: number[];
}
export type TResponseOffindUserByIdUsingGET = R_List_User__;
export interface TFormDataOfimportExcelUsingPOST_11 {
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
    roleId: number;
}
export interface TQueryOffindUserByRoleIdUsingGET {
    keyword?: string;
}
export type TResponseOffindUserByRoleIdUsingGET = R_UserRoleDTO_;
export interface TPathOfgetUsingGET_12 {
    id?: number;
}
export type TResponseOfgetUsingGET_12 = R_User_;
export type TBodyOfprogramLoginUsingPOST = WechatLoginRequestDTO;
export type TResponseOfprogramLoginUsingPOST = R_WechatUser_;
export type TBodyOfprogramLogin2UsingPOST = WechatLoginRequestDTO;
export type TResponseOfprogramLogin2UsingPOST = R_WechatUser_;
export interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/application"): {
        /**
         * @description 新增 saveUsingPOST_5
         * 应用
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_5;
        }): Promise<TResponseOfsaveUsingPOST_5>;
        /**
         * @description 修改 updateUsingPUT_5
         * 应用
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_5;
        }): Promise<TResponseOfupdateUsingPUT_5>;
        /**
         * @description 删除 deleteUsingDELETE_7
         * 应用
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_7;
        }): Promise<TResponseOfdeleteUsingDELETE_7>;
    };
    (url: "/application/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_5
         * 应用
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_5;
        }): Promise<TResponseOfupdateAllUsingPUT_5>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_7;
        }): Promise<TResponseOfpageUsingPOST_7>;
    };
    (url: "/application/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_6
         * 应用
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_6;
        }): Promise<TResponseOfpreviewUsingPOST_6>;
    };
    (url: "/application/query"): {
        /**
         * @description 批量查询 queryUsingPOST_6
         * 应用
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_6;
        }): Promise<TResponseOfqueryUsingPOST_6>;
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
        get(options: {
            path: TPathOfgetUsingGET_7;
        }): Promise<TResponseOfgetUsingGET_7>;
    };
    (url: "/globalUser"): {
        /**
         * @description 新增 saveUsingPOST_6
         * 全局账号
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_6;
        }): Promise<TResponseOfsaveUsingPOST_6>;
        /**
         * @description 修改 updateUsingPUT_6
         * 全局账号
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_6;
        }): Promise<TResponseOfupdateUsingPUT_6>;
        /**
         * @description 删除 deleteUsingDELETE_9
         * 全局账号
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_9;
        }): Promise<TResponseOfdeleteUsingDELETE_9>;
    };
    (url: "/globalUser/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_6
         * 全局账号
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_6;
        }): Promise<TResponseOfupdateAllUsingPUT_6>;
    };
    (url: "/globalUser/check"): {
        /**
         * @description 检测账号是否可用 checkUsingGET_1
         * 全局账号
         */
        get(options: {
            query: TQueryOfcheckUsingGET_1;
        }): Promise<TResponseOfcheckUsingGET_1>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_8;
        }): Promise<TResponseOfpageUsingPOST_8>;
    };
    (url: "/globalUser/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_7
         * 全局账号
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_7;
        }): Promise<TResponseOfpreviewUsingPOST_7>;
    };
    (url: "/globalUser/query"): {
        /**
         * @description 批量查询 queryUsingPOST_7
         * 全局账号
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_7;
        }): Promise<TResponseOfqueryUsingPOST_7>;
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
        get(options: {
            path: TPathOfgetUsingGET_8;
        }): Promise<TResponseOfgetUsingGET_8>;
    };
    (url: "/menu"): {
        /**
         * @description 新增 saveUsingPOST_7
         * 菜单
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_7;
        }): Promise<TResponseOfsaveUsingPOST_7>;
        /**
         * @description 修改 updateUsingPUT_7
         * 菜单
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_7;
        }): Promise<TResponseOfupdateUsingPUT_7>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_7;
        }): Promise<TResponseOfupdateAllUsingPUT_7>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_9;
        }): Promise<TResponseOfpageUsingPOST_9>;
    };
    (url: "/menu/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_8
         * 菜单
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_8;
        }): Promise<TResponseOfpreviewUsingPOST_8>;
    };
    (url: "/menu/query"): {
        /**
         * @description 批量查询 queryUsingPOST_8
         * 菜单
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_8;
        }): Promise<TResponseOfqueryUsingPOST_8>;
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
        get(options: {
            path: TPathOfgetUsingGET_9;
        }): Promise<TResponseOfgetUsingGET_9>;
    };
    (url: "/online/list"): {
        /**
         * @description list listUsingPOST
         * 在线用户
         */
        post(options: {
            query: TQueryOflistUsingPOST;
        }): Promise<TResponseOflistUsingPOST>;
    };
    (url: "/online/page"): {
        /**
         * @description page pageUsingPOST_10
         * 在线用户
         */
        post(options: {
            body: TBodyOfpageUsingPOST_10;
        }): Promise<TResponseOfpageUsingPOST_10>;
    };
    (url: "/online/t"): {
        /**
         * @description T人 logoutUsingPOST
         * 在线用户
         */
        post(options: {
            query: TQueryOflogoutUsingPOST;
        }): Promise<TResponseOflogoutUsingPOST>;
    };
    (url: "/resource"): {
        /**
         * @description 新增 saveUsingPOST_8
         * 资源
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_8;
        }): Promise<TResponseOfsaveUsingPOST_8>;
        /**
         * @description 修改 updateUsingPUT_8
         * 资源
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_8;
        }): Promise<TResponseOfupdateUsingPUT_8>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_8;
        }): Promise<TResponseOfupdateAllUsingPUT_8>;
    };
    (url: "/resource/check"): {
        /**
         * @description 检测资源编码是否可用 checkUsingGET_2
         * 资源
         */
        get(options: {
            query: TQueryOfcheckUsingGET_2;
        }): Promise<TResponseOfcheckUsingGET_2>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_11;
        }): Promise<TResponseOfpageUsingPOST_11>;
    };
    (url: "/resource/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_9
         * 资源
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_9;
        }): Promise<TResponseOfpreviewUsingPOST_9>;
    };
    (url: "/resource/query"): {
        /**
         * @description 批量查询 queryUsingPOST_9
         * 资源
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_9;
        }): Promise<TResponseOfqueryUsingPOST_9>;
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
        get(options: {
            path: TPathOfgetUsingGET_10;
        }): Promise<TResponseOfgetUsingGET_10>;
    };
    (url: "/role"): {
        /**
         * @description 新增 saveUsingPOST_9
         * 角色
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_9;
        }): Promise<TResponseOfsaveUsingPOST_9>;
        /**
         * @description 修改 updateUsingPUT_9
         * 角色
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_9;
        }): Promise<TResponseOfupdateUsingPUT_9>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_9;
        }): Promise<TResponseOfupdateAllUsingPUT_9>;
    };
    (url: "/role/check"): {
        /**
         * @description 检测角色编码 checkUsingGET_3
         * 角色
         */
        get(options: {
            query: TQueryOfcheckUsingGET_3;
        }): Promise<TResponseOfcheckUsingGET_3>;
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
        get(options: {
            query: TQueryOfgetDetailsUsingGET;
        }): Promise<TResponseOfgetDetailsUsingGET>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_12;
        }): Promise<TResponseOfpageUsingPOST_12>;
    };
    (url: "/role/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_10
         * 角色
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_10;
        }): Promise<TResponseOfpreviewUsingPOST_10>;
    };
    (url: "/role/query"): {
        /**
         * @description 批量查询 queryUsingPOST_10
         * 角色
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_10;
        }): Promise<TResponseOfqueryUsingPOST_10>;
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
        get(options: {
            path: TPathOfgetUsingGET_11;
        }): Promise<TResponseOfgetUsingGET_11>;
    };
    (url: "/roleAuthority/{roleId}"): {
        /**
         * @description 查询指定角色关联的菜单和资源 queryByRoleIdUsingGET
         * 角色的资源
         */
        get(options: {
            path: TPathOfqueryByRoleIdUsingGET;
        }): Promise<TResponseOfqueryByRoleIdUsingGET>;
    };
    (url: "/user"): {
        /**
         * @description 新增 saveUsingPOST_10
         * 用户
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_10;
        }): Promise<TResponseOfsaveUsingPOST_10>;
        /**
         * @description 修改 updateUsingPUT_10
         * 用户
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_10;
        }): Promise<TResponseOfupdateUsingPUT_10>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_10;
        }): Promise<TResponseOfupdateAllUsingPUT_10>;
    };
    (url: "/user/avatar"): {
        /**
         * @description 修改头像 avatarUsingPUT
         * 用户
         */
        put(options: {
            body: TBodyOfavatarUsingPUT;
        }): Promise<TResponseOfavatarUsingPUT>;
    };
    (url: "/user/base"): {
        /**
         * @description 修改基础信息 updateBaseUsingPUT
         * 用户
         */
        put(options: {
            body: TBodyOfupdateBaseUsingPUT;
        }): Promise<TResponseOfupdateBaseUsingPUT>;
    };
    (url: "/user/check"): {
        /**
         * @description 检测名称是否可用 checkUsingGET_4
         * 用户
         */
        get(options: {
            query: TQueryOfcheckUsingGET_4;
        }): Promise<TResponseOfcheckUsingGET_4>;
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
        get(options: {
            query: TQueryOffindUserByIdUsingGET;
        }): Promise<TResponseOffindUserByIdUsingGET>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_13;
        }): Promise<TResponseOfpageUsingPOST_13>;
    };
    (url: "/user/pageAll"): {
        /**
         * @description 分页查询所有用户 pageAllUsingPOST
         * 用户
         */
        post(options: {
            body: TBodyOfpageAllUsingPOST;
        }): Promise<TResponseOfpageAllUsingPOST>;
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
        post(options: {
            body: TBodyOfpreviewUsingPOST_11;
        }): Promise<TResponseOfpreviewUsingPOST_11>;
    };
    (url: "/user/query"): {
        /**
         * @description 批量查询 queryUsingPOST_11
         * 用户
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_11;
        }): Promise<TResponseOfqueryUsingPOST_11>;
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
        post(options: {
            body: TBodyOfresetUsingPOST;
        }): Promise<TResponseOfresetUsingPOST>;
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
        get(options: {
            path: TPathOfgetUsingGET_12;
        }): Promise<TResponseOfgetUsingGET_12>;
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
export declare function createRequest(provider: RequestProvider): IApiFn;
