/**
 * @description: 业务附件
 */
interface AppendixSaveVO {
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
interface Application {
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
interface ApplicationPageQuery {
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
interface ApplicationSaveDTO {
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
interface ApplicationUpdateDTO {
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
interface GlobalUserSaveDTO {
    account?: string;
    email?: string;
    mobile?: string;
    name?: string;
    tenantCode?: string;
}
/**
 * @description: 全局账号
 */
interface GlobalUserSaveDTO_1 {
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
interface GlobalUserUpdateDTO {
    email?: string;
    id?: number;
    mobile?: string;
    name?: string;
    sex?: string;
    tenantCode?: string;
}
interface IPage_Application_ {
    current?: number;
    pages?: number;
    records?: Application[];
    size?: number;
    total?: number;
}
interface IPage_Menu_ {
    current?: number;
    pages?: number;
    records?: Menu[];
    size?: number;
    total?: number;
}
interface IPage_Online_ {
    current?: number;
    pages?: number;
    records?: Online[];
    size?: number;
    total?: number;
}
interface IPage_Resource_ {
    current?: number;
    pages?: number;
    records?: Resource[];
    size?: number;
    total?: number;
}
interface IPage_Role_ {
    current?: number;
    pages?: number;
    records?: Role[];
    size?: number;
    total?: number;
}
interface IPage_User_ {
    current?: number;
    pages?: number;
    records?: User[];
    size?: number;
    total?: number;
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
interface MenuResourceTreeVO {
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
interface MenuSaveDTO {
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
interface MenuUpdateDTO {
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
interface Online {
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
interface PageParams_ApplicationPageQuery_ {
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
interface PageParams_GlobalUserSaveDTO_ {
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
interface PageParams_Menu_ {
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
interface PageParams_Online_ {
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
interface PageParams_Resource_ {
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
interface PageParams_RolePageQuery_ {
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
interface PageParams_UserPageQuery_ {
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
interface Resource {
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
interface ResourceSaveDTO {
    code?: string;
    describe?: string;
    menuId?: number;
    name?: string;
    readonly?: boolean;
}
/**
 * @description: 资源
 */
interface ResourceUpdateDTO {
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
interface Role {
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
interface RoleAuthority {
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
interface RoleAuthoritySaveDTO {
    menuIdList?: number[];
    resourceIdList?: number[];
    roleId?: number;
}
/**
 * @description: 角色
 */
interface RolePageQuery {
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
interface RoleSaveDTO {
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
interface RoleSaveDTO_1 {
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
interface RoleUpdateDTO {
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
interface RoleUserSaveVO {
    flag?: boolean;
    roleId?: number;
    userIdList?: number[];
}
interface R_Application_ {
    code?: number;
    data?: Application;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Application__ {
    code?: number;
    data?: IPage_Application_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Menu__ {
    code?: number;
    data?: IPage_Menu_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Online__ {
    code?: number;
    data?: IPage_Online_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Resource__ {
    code?: number;
    data?: IPage_Resource_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Role__ {
    code?: number;
    data?: IPage_Role_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_User__ {
    code?: number;
    data?: IPage_User_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Application__ {
    code?: number;
    data?: Application[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_MenuResourceTreeVO__ {
    code?: number;
    data?: MenuResourceTreeVO[];
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
interface R_List_Online__ {
    code?: number;
    data?: Online[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Resource__ {
    code?: number;
    data?: Resource[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_RoleAuthority__ {
    code?: number;
    data?: RoleAuthority[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Role__ {
    code?: number;
    data?: Role[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_User__ {
    code?: number;
    data?: User[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_long__ {
    code?: number;
    data?: number[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Menu_ {
    code?: number;
    data?: Menu;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Resource_ {
    code?: number;
    data?: Resource;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_RoleAuthoritySaveDTO_ {
    code?: number;
    data?: RoleAuthoritySaveDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_RoleSaveDTO_ {
    code?: number;
    data?: RoleSaveDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Role_ {
    code?: number;
    data?: Role;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_UserRoleDTO_ {
    code?: number;
    data?: UserRoleDTO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_User_ {
    code?: number;
    data?: User;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_WechatUser_ {
    code?: number;
    data?: WechatUser;
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
 * @description: 用户
 */
interface User {
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
interface UserPageQuery {
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
interface UserRoleDTO {
    idList?: number[];
    userList?: User[];
}
/**
 * @description: 角色分配 账号角色绑定
 */
interface UserRoleSaveDTO {
    roleId?: number;
    userIdList?: number[];
}
/**
 * @description: 用户
 */
interface UserSaveDTO {
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
interface UserUpdateAvatarDTO {
    appendixAvatar?: AppendixSaveVO;
    avatar?: string;
    id?: number;
}
/**
 * @description: 用户修改基础信息实体
 */
interface UserUpdateBaseInfoDTO {
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
interface UserUpdateDTO {
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
interface UserUpdatePasswordDTO {
    confirmPassword?: string;
    id?: number;
    oldPassword?: string;
    password?: string;
    tenantCode?: string;
}
interface WechatLoginRequestDTO {
    code: string;
    encryptedData?: string;
    iv?: string;
    rawData?: string;
    signature?: string;
}
/**
 * @description: 小程序用户表
 */
interface WechatUser {
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
    tenantCode?: string;
    token?: string;
    unionId?: string;
    updateTime?: string;
    updatedBy?: number;
}
type TBodyOfsaveUsingPOST_5 = ApplicationSaveDTO;
type TResponseOfsaveUsingPOST_5 = R_Application_;
type TBodyOfupdateUsingPUT_5 = ApplicationUpdateDTO;
type TResponseOfupdateUsingPUT_5 = R_Application_;
type TBodyOfdeleteUsingDELETE_7 = number[];
type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
type TBodyOfupdateAllUsingPUT_5 = Application;
type TResponseOfupdateAllUsingPUT_5 = R_Application_;
type TResponseOfclearCacheUsingPOST_1 = R_boolean_;
type TBodyOfexportExcelUsingPOST_6 = PageParams_ApplicationPageQuery_;
type TResponseOfexportExcelUsingPOST_6 = any;
interface TFormDataOfimportExcelUsingPOST_6 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
type TBodyOfpageUsingPOST_7 = PageParams_ApplicationPageQuery_;
type TResponseOfpageUsingPOST_7 = R_IPage_Application__;
type TBodyOfpreviewUsingPOST_6 = PageParams_ApplicationPageQuery_;
type TResponseOfpreviewUsingPOST_6 = R_string_;
type TBodyOfqueryUsingPOST_6 = Application;
type TResponseOfqueryUsingPOST_6 = R_List_Application__;
type TResponseOfrefreshCacheUsingPOST_1 = R_boolean_;
interface TPathOfgetUsingGET_7 {
    id?: number;
}
type TResponseOfgetUsingGET_7 = R_Application_;
type TBodyOfsaveUsingPOST_6 = GlobalUserSaveDTO_1;
type TResponseOfsaveUsingPOST_6 = R_User_;
type TBodyOfupdateUsingPUT_6 = GlobalUserUpdateDTO;
type TResponseOfupdateUsingPUT_6 = R_User_;
type TBodyOfdeleteUsingDELETE_9 = number[];
type TResponseOfdeleteUsingDELETE_9 = R_boolean_;
type TBodyOfupdateAllUsingPUT_6 = User;
type TResponseOfupdateAllUsingPUT_6 = R_User_;
interface TQueryOfcheckUsingGET_1 {
    account?: string;
    tenantCode?: string;
}
type TResponseOfcheckUsingGET_1 = R_boolean_;
interface TQueryOfdeleteUsingDELETE_8 {
    "ids[]"?: string[];
    tenantCode?: string;
}
type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
type TBodyOfexportExcelUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
type TResponseOfexportExcelUsingPOST_7 = any;
interface TFormDataOfimportExcelUsingPOST_7 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
type TBodyOfpageUsingPOST_8 = PageParams_GlobalUserSaveDTO_;
type TResponseOfpageUsingPOST_8 = R_IPage_User__;
type TBodyOfpreviewUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
type TResponseOfpreviewUsingPOST_7 = R_string_;
type TBodyOfqueryUsingPOST_7 = User;
type TResponseOfqueryUsingPOST_7 = R_List_User__;
type TBodyOfupdatePasswordUsingPUT = UserUpdatePasswordDTO;
type TResponseOfupdatePasswordUsingPUT = R_boolean_;
interface TPathOfgetUsingGET_8 {
    id?: number;
}
type TResponseOfgetUsingGET_8 = R_User_;
type TBodyOfsaveUsingPOST_7 = MenuSaveDTO;
type TResponseOfsaveUsingPOST_7 = R_Menu_;
type TBodyOfupdateUsingPUT_7 = MenuUpdateDTO;
type TResponseOfupdateUsingPUT_7 = R_Menu_;
type TBodyOfdeleteUsingDELETE_10 = number[];
type TResponseOfdeleteUsingDELETE_10 = R_boolean_;
type TBodyOfupdateAllUsingPUT_7 = Menu;
type TResponseOfupdateAllUsingPUT_7 = R_Menu_;
type TResponseOfclearCacheUsingPOST_2 = R_boolean_;
type TBodyOfexportExcelUsingPOST_8 = PageParams_Menu_;
type TResponseOfexportExcelUsingPOST_8 = any;
type TResponseOffindMenuDataScopeTreeUsingPOST = R_List_MenuResourceTreeVO__;
interface TFormDataOfimportExcelUsingPOST_8 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
type TResponseOfmenuResourceTreeUsingPOST = R_List_MenuResourceTreeVO__;
type TBodyOfpageUsingPOST_9 = PageParams_Menu_;
type TResponseOfpageUsingPOST_9 = R_IPage_Menu__;
type TBodyOfpreviewUsingPOST_8 = PageParams_Menu_;
type TResponseOfpreviewUsingPOST_8 = R_string_;
type TBodyOfqueryUsingPOST_8 = Menu;
type TResponseOfqueryUsingPOST_8 = R_List_Menu__;
type TResponseOfrefreshCacheUsingPOST_2 = R_boolean_;
type TResponseOfallTreeUsingPOST = R_List_Menu__;
interface TPathOfgetUsingGET_9 {
    id?: number;
}
type TResponseOfgetUsingGET_9 = R_Menu_;
interface TQueryOflistUsingPOST {
    name?: string;
}
type TResponseOflistUsingPOST = R_List_Online__;
type TBodyOfpageUsingPOST_10 = PageParams_Online_;
type TResponseOfpageUsingPOST_10 = R_IPage_Online__;
interface TQueryOflogoutUsingPOST {
    clientId?: string;
    userId?: number;
    userToken?: string;
}
type TResponseOflogoutUsingPOST = R_boolean_;
type TBodyOfsaveUsingPOST_8 = ResourceSaveDTO;
type TResponseOfsaveUsingPOST_8 = R_Resource_;
type TBodyOfupdateUsingPUT_8 = ResourceUpdateDTO;
type TResponseOfupdateUsingPUT_8 = R_Resource_;
type TBodyOfdeleteUsingDELETE_11 = number[];
type TResponseOfdeleteUsingDELETE_11 = R_boolean_;
type TBodyOfupdateAllUsingPUT_8 = Resource;
type TResponseOfupdateAllUsingPUT_8 = R_Resource_;
interface TQueryOfcheckUsingGET_2 {
    code?: string;
    id?: number;
}
type TResponseOfcheckUsingGET_2 = R_boolean_;
type TResponseOfclearCacheUsingPOST_3 = R_boolean_;
type TBodyOfexportExcelUsingPOST_9 = PageParams_Resource_;
type TResponseOfexportExcelUsingPOST_9 = any;
interface TFormDataOfimportExcelUsingPOST_9 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_9 = R_boolean_;
type TBodyOfpageUsingPOST_11 = PageParams_Resource_;
type TResponseOfpageUsingPOST_11 = R_IPage_Resource__;
type TBodyOfpreviewUsingPOST_9 = PageParams_Resource_;
type TResponseOfpreviewUsingPOST_9 = R_string_;
type TBodyOfqueryUsingPOST_9 = Resource;
type TResponseOfqueryUsingPOST_9 = R_List_Resource__;
type TResponseOfrefreshCacheUsingPOST_3 = R_boolean_;
interface TPathOfgetUsingGET_10 {
    id?: number;
}
type TResponseOfgetUsingGET_10 = R_Resource_;
type TBodyOfsaveUsingPOST_9 = RoleSaveDTO_1;
type TResponseOfsaveUsingPOST_9 = R_Role_;
type TBodyOfupdateUsingPUT_9 = RoleUpdateDTO;
type TResponseOfupdateUsingPUT_9 = R_Role_;
type TBodyOfdeleteUsingDELETE_12 = number[];
type TResponseOfdeleteUsingDELETE_12 = R_boolean_;
type TBodyOfupdateAllUsingPUT_9 = Role;
type TResponseOfupdateAllUsingPUT_9 = R_Role_;
interface TQueryOfcheckUsingGET_3 {
    code: string;
}
type TResponseOfcheckUsingGET_3 = R_boolean_;
type TResponseOfclearCacheUsingPOST_4 = R_boolean_;
interface TQueryOffindUserIdByCodeUsingGET {
    codes: string[];
}
type TResponseOffindUserIdByCodeUsingGET = R_List_long__;
interface TQueryOfgetDetailsUsingGET {
    id: number;
}
type TResponseOfgetDetailsUsingGET = R_RoleSaveDTO_;
type TBodyOfexportExcelUsingPOST_10 = PageParams_RolePageQuery_;
type TResponseOfexportExcelUsingPOST_10 = any;
interface TFormDataOfimportExcelUsingPOST_10 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_10 = R_boolean_;
type TBodyOfpageUsingPOST_12 = PageParams_RolePageQuery_;
type TResponseOfpageUsingPOST_12 = R_IPage_Role__;
type TBodyOfpreviewUsingPOST_10 = PageParams_RolePageQuery_;
type TResponseOfpreviewUsingPOST_10 = R_string_;
type TBodyOfqueryUsingPOST_10 = Role;
type TResponseOfqueryUsingPOST_10 = R_List_Role__;
type TResponseOfrefreshCacheUsingPOST_4 = R_boolean_;
interface TQueryOffindResourceListByRoleIdUsingGET {
    roleId: number;
}
type TResponseOffindResourceListByRoleIdUsingGET = R_RoleAuthoritySaveDTO_;
type TBodyOfsaveRoleAuthorityUsingPOST = RoleAuthoritySaveDTO;
type TResponseOfsaveRoleAuthorityUsingPOST = R_boolean_;
type TBodyOfsaveUserRoleUsingPOST_1 = RoleUserSaveVO;
type TResponseOfsaveUserRoleUsingPOST_1 = R_List_long__;
interface TQueryOffindUserIdByRoleIdUsingGET {
    roleId: number;
}
type TResponseOffindUserIdByRoleIdUsingGET = R_List_long__;
interface TPathOfgetUsingGET_11 {
    id?: number;
}
type TResponseOfgetUsingGET_11 = R_Role_;
interface TPathOfqueryByRoleIdUsingGET {
    roleId: number;
}
type TResponseOfqueryByRoleIdUsingGET = R_List_RoleAuthority__;
type TBodyOfsaveUsingPOST_10 = UserSaveDTO;
type TResponseOfsaveUsingPOST_10 = R_User_;
type TBodyOfupdateUsingPUT_10 = UserUpdateDTO;
type TResponseOfupdateUsingPUT_10 = R_User_;
type TBodyOfdeleteUsingDELETE_13 = number[];
type TResponseOfdeleteUsingDELETE_13 = R_boolean_;
type TBodyOfupdateAllUsingPUT_10 = User;
type TResponseOfupdateAllUsingPUT_10 = R_User_;
type TBodyOfavatarUsingPUT = UserUpdateAvatarDTO;
type TResponseOfavatarUsingPUT = R_boolean_;
type TBodyOfupdateBaseUsingPUT = UserUpdateBaseInfoDTO;
type TResponseOfupdateBaseUsingPUT = R_User_;
interface TQueryOfcheckUsingGET_4 {
    id?: number;
    name?: string;
}
type TResponseOfcheckUsingGET_4 = R_boolean_;
type TResponseOfclearCacheUsingPOST_5 = R_boolean_;
type TBodyOfexportExcelUsingPOST_11 = PageParams_UserPageQuery_;
type TResponseOfexportExcelUsingPOST_11 = any;
type TResponseOffindAllUserIdUsingGET = R_List_long__;
type TResponseOffindAllUsingGET = R_List_User__;
interface TQueryOffindUserByIdUsingGET {
    ids: number[];
}
type TResponseOffindUserByIdUsingGET = R_List_User__;
interface TFormDataOfimportExcelUsingPOST_11 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_11 = R_boolean_;
type TBodyOfpageUsingPOST_13 = PageParams_UserPageQuery_;
type TResponseOfpageUsingPOST_13 = R_IPage_User__;
type TBodyOfpageAllUsingPOST = PageParams_UserPageQuery_;
type TResponseOfpageAllUsingPOST = R_IPage_User__;
type TBodyOfupdatePasswordUsingPUT_1 = UserUpdatePasswordDTO;
type TResponseOfupdatePasswordUsingPUT_1 = R_boolean_;
type TBodyOfpreviewUsingPOST_11 = PageParams_UserPageQuery_;
type TResponseOfpreviewUsingPOST_11 = R_string_;
type TBodyOfqueryUsingPOST_11 = User;
type TResponseOfqueryUsingPOST_11 = R_List_User__;
type TResponseOfrefreshCacheUsingPOST_5 = R_boolean_;
type TBodyOfresetUsingPOST = UserUpdatePasswordDTO;
type TResponseOfresetUsingPOST = R_boolean_;
interface TPathOffindUserByRoleIdUsingGET {
    roleId: number;
}
interface TQueryOffindUserByRoleIdUsingGET {
    keyword?: string;
}
type TResponseOffindUserByRoleIdUsingGET = R_UserRoleDTO_;
interface TPathOfgetUsingGET_12 {
    id?: number;
}
type TResponseOfgetUsingGET_12 = R_User_;
type TBodyOfprogramLoginUsingPOST = WechatLoginRequestDTO;
type TResponseOfprogramLoginUsingPOST = R_WechatUser_;
type TBodyOfprogramLogin2UsingPOST = WechatLoginRequestDTO;
type TResponseOfprogramLogin2UsingPOST = R_WechatUser_;
interface IApiFn {
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

export { AppendixSaveVO, Application, ApplicationPageQuery, ApplicationSaveDTO, ApplicationUpdateDTO, GlobalUserSaveDTO, GlobalUserSaveDTO_1, GlobalUserUpdateDTO, IApiFn, IPage_Application_, IPage_Menu_, IPage_Online_, IPage_Resource_, IPage_Role_, IPage_User_, Menu, MenuResourceTreeVO, MenuSaveDTO, MenuUpdateDTO, Online, PageParams_ApplicationPageQuery_, PageParams_GlobalUserSaveDTO_, PageParams_Menu_, PageParams_Online_, PageParams_Resource_, PageParams_RolePageQuery_, PageParams_UserPageQuery_, R_Application_, R_IPage_Application__, R_IPage_Menu__, R_IPage_Online__, R_IPage_Resource__, R_IPage_Role__, R_IPage_User__, R_List_Application__, R_List_MenuResourceTreeVO__, R_List_Menu__, R_List_Online__, R_List_Resource__, R_List_RoleAuthority__, R_List_Role__, R_List_User__, R_List_long__, R_Menu_, R_Resource_, R_RoleAuthoritySaveDTO_, R_RoleSaveDTO_, R_Role_, R_UserRoleDTO_, R_User_, R_WechatUser_, R_boolean_, R_string_, RequestProvider, Resource, ResourceSaveDTO, ResourceUpdateDTO, Role, RoleAuthority, RoleAuthoritySaveDTO, RolePageQuery, RoleSaveDTO, RoleSaveDTO_1, RoleUpdateDTO, RoleUserSaveVO, TBodyOfavatarUsingPUT, TBodyOfdeleteUsingDELETE_10, TBodyOfdeleteUsingDELETE_11, TBodyOfdeleteUsingDELETE_12, TBodyOfdeleteUsingDELETE_13, TBodyOfdeleteUsingDELETE_7, TBodyOfdeleteUsingDELETE_9, TBodyOfexportExcelUsingPOST_10, TBodyOfexportExcelUsingPOST_11, TBodyOfexportExcelUsingPOST_6, TBodyOfexportExcelUsingPOST_7, TBodyOfexportExcelUsingPOST_8, TBodyOfexportExcelUsingPOST_9, TBodyOfpageAllUsingPOST, TBodyOfpageUsingPOST_10, TBodyOfpageUsingPOST_11, TBodyOfpageUsingPOST_12, TBodyOfpageUsingPOST_13, TBodyOfpageUsingPOST_7, TBodyOfpageUsingPOST_8, TBodyOfpageUsingPOST_9, TBodyOfpreviewUsingPOST_10, TBodyOfpreviewUsingPOST_11, TBodyOfpreviewUsingPOST_6, TBodyOfpreviewUsingPOST_7, TBodyOfpreviewUsingPOST_8, TBodyOfpreviewUsingPOST_9, TBodyOfprogramLogin2UsingPOST, TBodyOfprogramLoginUsingPOST, TBodyOfqueryUsingPOST_10, TBodyOfqueryUsingPOST_11, TBodyOfqueryUsingPOST_6, TBodyOfqueryUsingPOST_7, TBodyOfqueryUsingPOST_8, TBodyOfqueryUsingPOST_9, TBodyOfresetUsingPOST, TBodyOfsaveRoleAuthorityUsingPOST, TBodyOfsaveUserRoleUsingPOST_1, TBodyOfsaveUsingPOST_10, TBodyOfsaveUsingPOST_5, TBodyOfsaveUsingPOST_6, TBodyOfsaveUsingPOST_7, TBodyOfsaveUsingPOST_8, TBodyOfsaveUsingPOST_9, TBodyOfupdateAllUsingPUT_10, TBodyOfupdateAllUsingPUT_5, TBodyOfupdateAllUsingPUT_6, TBodyOfupdateAllUsingPUT_7, TBodyOfupdateAllUsingPUT_8, TBodyOfupdateAllUsingPUT_9, TBodyOfupdateBaseUsingPUT, TBodyOfupdatePasswordUsingPUT, TBodyOfupdatePasswordUsingPUT_1, TBodyOfupdateUsingPUT_10, TBodyOfupdateUsingPUT_5, TBodyOfupdateUsingPUT_6, TBodyOfupdateUsingPUT_7, TBodyOfupdateUsingPUT_8, TBodyOfupdateUsingPUT_9, TFormDataOfimportExcelUsingPOST_10, TFormDataOfimportExcelUsingPOST_11, TFormDataOfimportExcelUsingPOST_6, TFormDataOfimportExcelUsingPOST_7, TFormDataOfimportExcelUsingPOST_8, TFormDataOfimportExcelUsingPOST_9, TPathOffindUserByRoleIdUsingGET, TPathOfgetUsingGET_10, TPathOfgetUsingGET_11, TPathOfgetUsingGET_12, TPathOfgetUsingGET_7, TPathOfgetUsingGET_8, TPathOfgetUsingGET_9, TPathOfqueryByRoleIdUsingGET, TQueryOfcheckUsingGET_1, TQueryOfcheckUsingGET_2, TQueryOfcheckUsingGET_3, TQueryOfcheckUsingGET_4, TQueryOfdeleteUsingDELETE_8, TQueryOffindResourceListByRoleIdUsingGET, TQueryOffindUserByIdUsingGET, TQueryOffindUserByRoleIdUsingGET, TQueryOffindUserIdByCodeUsingGET, TQueryOffindUserIdByRoleIdUsingGET, TQueryOfgetDetailsUsingGET, TQueryOflistUsingPOST, TQueryOflogoutUsingPOST, TResponseOfallTreeUsingPOST, TResponseOfavatarUsingPUT, TResponseOfcheckUsingGET_1, TResponseOfcheckUsingGET_2, TResponseOfcheckUsingGET_3, TResponseOfcheckUsingGET_4, TResponseOfclearCacheUsingPOST_1, TResponseOfclearCacheUsingPOST_2, TResponseOfclearCacheUsingPOST_3, TResponseOfclearCacheUsingPOST_4, TResponseOfclearCacheUsingPOST_5, TResponseOfdeleteUsingDELETE_10, TResponseOfdeleteUsingDELETE_11, TResponseOfdeleteUsingDELETE_12, TResponseOfdeleteUsingDELETE_13, TResponseOfdeleteUsingDELETE_7, TResponseOfdeleteUsingDELETE_8, TResponseOfdeleteUsingDELETE_9, TResponseOfexportExcelUsingPOST_10, TResponseOfexportExcelUsingPOST_11, TResponseOfexportExcelUsingPOST_6, TResponseOfexportExcelUsingPOST_7, TResponseOfexportExcelUsingPOST_8, TResponseOfexportExcelUsingPOST_9, TResponseOffindAllUserIdUsingGET, TResponseOffindAllUsingGET, TResponseOffindMenuDataScopeTreeUsingPOST, TResponseOffindResourceListByRoleIdUsingGET, TResponseOffindUserByIdUsingGET, TResponseOffindUserByRoleIdUsingGET, TResponseOffindUserIdByCodeUsingGET, TResponseOffindUserIdByRoleIdUsingGET, TResponseOfgetDetailsUsingGET, TResponseOfgetUsingGET_10, TResponseOfgetUsingGET_11, TResponseOfgetUsingGET_12, TResponseOfgetUsingGET_7, TResponseOfgetUsingGET_8, TResponseOfgetUsingGET_9, TResponseOfimportExcelUsingPOST_10, TResponseOfimportExcelUsingPOST_11, TResponseOfimportExcelUsingPOST_6, TResponseOfimportExcelUsingPOST_7, TResponseOfimportExcelUsingPOST_8, TResponseOfimportExcelUsingPOST_9, TResponseOflistUsingPOST, TResponseOflogoutUsingPOST, TResponseOfmenuResourceTreeUsingPOST, TResponseOfpageAllUsingPOST, TResponseOfpageUsingPOST_10, TResponseOfpageUsingPOST_11, TResponseOfpageUsingPOST_12, TResponseOfpageUsingPOST_13, TResponseOfpageUsingPOST_7, TResponseOfpageUsingPOST_8, TResponseOfpageUsingPOST_9, TResponseOfpreviewUsingPOST_10, TResponseOfpreviewUsingPOST_11, TResponseOfpreviewUsingPOST_6, TResponseOfpreviewUsingPOST_7, TResponseOfpreviewUsingPOST_8, TResponseOfpreviewUsingPOST_9, TResponseOfprogramLogin2UsingPOST, TResponseOfprogramLoginUsingPOST, TResponseOfqueryByRoleIdUsingGET, TResponseOfqueryUsingPOST_10, TResponseOfqueryUsingPOST_11, TResponseOfqueryUsingPOST_6, TResponseOfqueryUsingPOST_7, TResponseOfqueryUsingPOST_8, TResponseOfqueryUsingPOST_9, TResponseOfrefreshCacheUsingPOST_1, TResponseOfrefreshCacheUsingPOST_2, TResponseOfrefreshCacheUsingPOST_3, TResponseOfrefreshCacheUsingPOST_4, TResponseOfrefreshCacheUsingPOST_5, TResponseOfresetUsingPOST, TResponseOfsaveRoleAuthorityUsingPOST, TResponseOfsaveUserRoleUsingPOST_1, TResponseOfsaveUsingPOST_10, TResponseOfsaveUsingPOST_5, TResponseOfsaveUsingPOST_6, TResponseOfsaveUsingPOST_7, TResponseOfsaveUsingPOST_8, TResponseOfsaveUsingPOST_9, TResponseOfupdateAllUsingPUT_10, TResponseOfupdateAllUsingPUT_5, TResponseOfupdateAllUsingPUT_6, TResponseOfupdateAllUsingPUT_7, TResponseOfupdateAllUsingPUT_8, TResponseOfupdateAllUsingPUT_9, TResponseOfupdateBaseUsingPUT, TResponseOfupdatePasswordUsingPUT, TResponseOfupdatePasswordUsingPUT_1, TResponseOfupdateUsingPUT_10, TResponseOfupdateUsingPUT_5, TResponseOfupdateUsingPUT_6, TResponseOfupdateUsingPUT_7, TResponseOfupdateUsingPUT_8, TResponseOfupdateUsingPUT_9, User, UserPageQuery, UserRoleDTO, UserRoleSaveDTO, UserSaveDTO, UserUpdateAvatarDTO, UserUpdateBaseInfoDTO, UserUpdateDTO, UserUpdatePasswordDTO, WechatLoginRequestDTO, WechatUser, createRequest };
