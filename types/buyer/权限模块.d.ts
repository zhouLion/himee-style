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
    updateTime?: string;
    updatedBy?: number;
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
type TBodyOfsaveUsingPOST_4 = ApplicationSaveDTO;
type TResponseOfsaveUsingPOST_4 = R_Application_;
type TBodyOfupdateUsingPUT_4 = ApplicationUpdateDTO;
type TResponseOfupdateUsingPUT_4 = R_Application_;
type TBodyOfdeleteUsingDELETE_6 = number[];
type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
type TBodyOfupdateAllUsingPUT_4 = Application;
type TResponseOfupdateAllUsingPUT_4 = R_Application_;
type TResponseOfclearCacheUsingPOST_1 = R_boolean_;
type TBodyOfexportExcelUsingPOST_5 = PageParams_ApplicationPageQuery_;
type TResponseOfexportExcelUsingPOST_5 = any;
interface TFormDataOfimportExcelUsingPOST_5 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
type TBodyOfpageUsingPOST_6 = PageParams_ApplicationPageQuery_;
type TResponseOfpageUsingPOST_6 = R_IPage_Application__;
type TBodyOfpreviewUsingPOST_5 = PageParams_ApplicationPageQuery_;
type TResponseOfpreviewUsingPOST_5 = R_string_;
type TBodyOfqueryUsingPOST_5 = Application;
type TResponseOfqueryUsingPOST_5 = R_List_Application__;
type TResponseOfrefreshCacheUsingPOST_1 = R_boolean_;
interface TPathOfgetUsingGET_6 {
    id?: number;
}
type TResponseOfgetUsingGET_6 = R_Application_;
type TBodyOfsaveUsingPOST_5 = GlobalUserSaveDTO_1;
type TResponseOfsaveUsingPOST_5 = R_User_;
type TBodyOfupdateUsingPUT_5 = GlobalUserUpdateDTO;
type TResponseOfupdateUsingPUT_5 = R_User_;
type TBodyOfdeleteUsingDELETE_8 = number[];
type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
type TBodyOfupdateAllUsingPUT_5 = User;
type TResponseOfupdateAllUsingPUT_5 = R_User_;
interface TQueryOfcheckUsingGET_1 {
    account?: string;
    tenantCode?: string;
}
type TResponseOfcheckUsingGET_1 = R_boolean_;
interface TQueryOfdeleteUsingDELETE_7 {
    "ids[]"?: string[];
    tenantCode?: string;
}
type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
type TBodyOfexportExcelUsingPOST_6 = PageParams_GlobalUserSaveDTO_;
type TResponseOfexportExcelUsingPOST_6 = any;
interface TFormDataOfimportExcelUsingPOST_6 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
type TBodyOfpageUsingPOST_7 = PageParams_GlobalUserSaveDTO_;
type TResponseOfpageUsingPOST_7 = R_IPage_User__;
type TBodyOfpreviewUsingPOST_6 = PageParams_GlobalUserSaveDTO_;
type TResponseOfpreviewUsingPOST_6 = R_string_;
type TBodyOfqueryUsingPOST_6 = User;
type TResponseOfqueryUsingPOST_6 = R_List_User__;
type TBodyOfupdatePasswordUsingPUT = UserUpdatePasswordDTO;
type TResponseOfupdatePasswordUsingPUT = R_boolean_;
interface TPathOfgetUsingGET_7 {
    id?: number;
}
type TResponseOfgetUsingGET_7 = R_User_;
type TBodyOfsaveUsingPOST_6 = MenuSaveDTO;
type TResponseOfsaveUsingPOST_6 = R_Menu_;
type TBodyOfupdateUsingPUT_6 = MenuUpdateDTO;
type TResponseOfupdateUsingPUT_6 = R_Menu_;
type TBodyOfdeleteUsingDELETE_9 = number[];
type TResponseOfdeleteUsingDELETE_9 = R_boolean_;
type TBodyOfupdateAllUsingPUT_6 = Menu;
type TResponseOfupdateAllUsingPUT_6 = R_Menu_;
type TResponseOfclearCacheUsingPOST_2 = R_boolean_;
type TBodyOfexportExcelUsingPOST_7 = PageParams_Menu_;
type TResponseOfexportExcelUsingPOST_7 = any;
type TResponseOffindMenuDataScopeTreeUsingPOST = R_List_MenuResourceTreeVO__;
interface TFormDataOfimportExcelUsingPOST_7 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
type TResponseOfmenuResourceTreeUsingPOST = R_List_MenuResourceTreeVO__;
type TBodyOfpageUsingPOST_8 = PageParams_Menu_;
type TResponseOfpageUsingPOST_8 = R_IPage_Menu__;
type TBodyOfpreviewUsingPOST_7 = PageParams_Menu_;
type TResponseOfpreviewUsingPOST_7 = R_string_;
type TBodyOfqueryUsingPOST_7 = Menu;
type TResponseOfqueryUsingPOST_7 = R_List_Menu__;
type TResponseOfrefreshCacheUsingPOST_2 = R_boolean_;
type TResponseOfallTreeUsingPOST = R_List_Menu__;
interface TPathOfgetUsingGET_8 {
    id?: number;
}
type TResponseOfgetUsingGET_8 = R_Menu_;
interface TQueryOflistUsingPOST {
    name?: string;
}
type TResponseOflistUsingPOST = R_List_Online__;
type TBodyOfpageUsingPOST_9 = PageParams_Online_;
type TResponseOfpageUsingPOST_9 = R_IPage_Online__;
interface TQueryOflogoutUsingPOST {
    clientId?: string;
    userId?: number;
    userToken?: string;
}
type TResponseOflogoutUsingPOST = R_boolean_;
type TBodyOfsaveUsingPOST_7 = ResourceSaveDTO;
type TResponseOfsaveUsingPOST_7 = R_Resource_;
type TBodyOfupdateUsingPUT_7 = ResourceUpdateDTO;
type TResponseOfupdateUsingPUT_7 = R_Resource_;
type TBodyOfdeleteUsingDELETE_10 = number[];
type TResponseOfdeleteUsingDELETE_10 = R_boolean_;
type TBodyOfupdateAllUsingPUT_7 = Resource;
type TResponseOfupdateAllUsingPUT_7 = R_Resource_;
interface TQueryOfcheckUsingGET_2 {
    code?: string;
    id?: number;
}
type TResponseOfcheckUsingGET_2 = R_boolean_;
type TResponseOfclearCacheUsingPOST_3 = R_boolean_;
type TBodyOfexportExcelUsingPOST_8 = PageParams_Resource_;
type TResponseOfexportExcelUsingPOST_8 = any;
interface TFormDataOfimportExcelUsingPOST_8 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
type TBodyOfpageUsingPOST_10 = PageParams_Resource_;
type TResponseOfpageUsingPOST_10 = R_IPage_Resource__;
type TBodyOfpreviewUsingPOST_8 = PageParams_Resource_;
type TResponseOfpreviewUsingPOST_8 = R_string_;
type TBodyOfqueryUsingPOST_8 = Resource;
type TResponseOfqueryUsingPOST_8 = R_List_Resource__;
type TResponseOfrefreshCacheUsingPOST_3 = R_boolean_;
interface TPathOfgetUsingGET_9 {
    id?: number;
}
type TResponseOfgetUsingGET_9 = R_Resource_;
type TBodyOfsaveUsingPOST_8 = RoleSaveDTO_1;
type TResponseOfsaveUsingPOST_8 = R_Role_;
type TBodyOfupdateUsingPUT_8 = RoleUpdateDTO;
type TResponseOfupdateUsingPUT_8 = R_Role_;
type TBodyOfdeleteUsingDELETE_11 = number[];
type TResponseOfdeleteUsingDELETE_11 = R_boolean_;
type TBodyOfupdateAllUsingPUT_8 = Role;
type TResponseOfupdateAllUsingPUT_8 = R_Role_;
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
type TBodyOfexportExcelUsingPOST_9 = PageParams_RolePageQuery_;
type TResponseOfexportExcelUsingPOST_9 = any;
interface TFormDataOfimportExcelUsingPOST_9 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_9 = R_boolean_;
type TBodyOfpageUsingPOST_11 = PageParams_RolePageQuery_;
type TResponseOfpageUsingPOST_11 = R_IPage_Role__;
type TBodyOfpreviewUsingPOST_9 = PageParams_RolePageQuery_;
type TResponseOfpreviewUsingPOST_9 = R_string_;
type TBodyOfqueryUsingPOST_9 = Role;
type TResponseOfqueryUsingPOST_9 = R_List_Role__;
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
interface TPathOfgetUsingGET_10 {
    id?: number;
}
type TResponseOfgetUsingGET_10 = R_Role_;
interface TPathOfqueryByRoleIdUsingGET {
    roleId: number;
}
type TResponseOfqueryByRoleIdUsingGET = R_List_RoleAuthority__;
type TBodyOfsaveUsingPOST_9 = UserSaveDTO;
type TResponseOfsaveUsingPOST_9 = R_User_;
type TBodyOfupdateUsingPUT_9 = UserUpdateDTO;
type TResponseOfupdateUsingPUT_9 = R_User_;
type TBodyOfdeleteUsingDELETE_12 = number[];
type TResponseOfdeleteUsingDELETE_12 = R_boolean_;
type TBodyOfupdateAllUsingPUT_9 = User;
type TResponseOfupdateAllUsingPUT_9 = R_User_;
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
type TBodyOfexportExcelUsingPOST_10 = PageParams_UserPageQuery_;
type TResponseOfexportExcelUsingPOST_10 = any;
type TResponseOffindAllUserIdUsingGET = R_List_long__;
type TResponseOffindAllUsingGET = R_List_User__;
interface TQueryOffindUserByIdUsingGET {
    ids: number[];
}
type TResponseOffindUserByIdUsingGET = R_List_User__;
interface TFormDataOfimportExcelUsingPOST_10 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_10 = R_boolean_;
type TBodyOfpageUsingPOST_12 = PageParams_UserPageQuery_;
type TResponseOfpageUsingPOST_12 = R_IPage_User__;
type TBodyOfpageAllUsingPOST = PageParams_UserPageQuery_;
type TResponseOfpageAllUsingPOST = R_IPage_User__;
type TBodyOfupdatePasswordUsingPUT_1 = UserUpdatePasswordDTO;
type TResponseOfupdatePasswordUsingPUT_1 = R_boolean_;
type TBodyOfpreviewUsingPOST_10 = PageParams_UserPageQuery_;
type TResponseOfpreviewUsingPOST_10 = R_string_;
type TBodyOfqueryUsingPOST_10 = User;
type TResponseOfqueryUsingPOST_10 = R_List_User__;
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
interface TPathOfgetUsingGET_11 {
    id?: number;
}
type TResponseOfgetUsingGET_11 = R_User_;
interface IApiFn {
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
        post(options: {
            body: TBodyOfsaveUsingPOST_4;
        }): Promise<TResponseOfsaveUsingPOST_4>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/应用/updateUsingPUT_4)
         *
         * @tag应用
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_4;
        }): Promise<TResponseOfupdateUsingPUT_4>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/应用/deleteUsingDELETE_6)
         *
         * @tag应用
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_6;
        }): Promise<TResponseOfdeleteUsingDELETE_6>;
    };
    (url: "/application/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/应用/updateAllUsingPUT_4)
         *
         * @tag应用
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_4;
        }): Promise<TResponseOfupdateAllUsingPUT_4>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_6;
        }): Promise<TResponseOfpageUsingPOST_6>;
    };
    (url: "/application/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/应用/previewUsingPOST_5)
         *
         * @tag应用
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_5;
        }): Promise<TResponseOfpreviewUsingPOST_5>;
    };
    (url: "/application/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/应用/queryUsingPOST_5)
         *
         * @tag应用
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_5;
        }): Promise<TResponseOfqueryUsingPOST_5>;
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
        get(options: {
            path: TPathOfgetUsingGET_6;
        }): Promise<TResponseOfgetUsingGET_6>;
    };
    (url: "/globalUser"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/saveUsingPOST_5)
         *
         * @tag全局账号
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_5;
        }): Promise<TResponseOfsaveUsingPOST_5>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/updateUsingPUT_5)
         *
         * @tag全局账号
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_5;
        }): Promise<TResponseOfupdateUsingPUT_5>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/deleteUsingDELETE_8)
         *
         * @tag全局账号
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_8;
        }): Promise<TResponseOfdeleteUsingDELETE_8>;
    };
    (url: "/globalUser/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/updateAllUsingPUT_5)
         *
         * @tag全局账号
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_5;
        }): Promise<TResponseOfupdateAllUsingPUT_5>;
    };
    (url: "/globalUser/check"): {
        /**
         * @description 检测账号是否可用
         * @see [Swagger doc: 检测账号是否可用](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/checkUsingGET_1)
         *
         * @tag全局账号
         */
        get(options: {
            query: TQueryOfcheckUsingGET_1;
        }): Promise<TResponseOfcheckUsingGET_1>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_7;
        }): Promise<TResponseOfpageUsingPOST_7>;
    };
    (url: "/globalUser/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/previewUsingPOST_6)
         *
         * @tag全局账号
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_6;
        }): Promise<TResponseOfpreviewUsingPOST_6>;
    };
    (url: "/globalUser/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/全局账号/queryUsingPOST_6)
         *
         * @tag全局账号
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_6;
        }): Promise<TResponseOfqueryUsingPOST_6>;
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
        get(options: {
            path: TPathOfgetUsingGET_7;
        }): Promise<TResponseOfgetUsingGET_7>;
    };
    (url: "/menu"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/菜单/saveUsingPOST_6)
         *
         * @tag菜单
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_6;
        }): Promise<TResponseOfsaveUsingPOST_6>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/菜单/updateUsingPUT_6)
         *
         * @tag菜单
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_6;
        }): Promise<TResponseOfupdateUsingPUT_6>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/权限模块/菜单/deleteUsingDELETE_9)
         *
         * @tag菜单
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_9;
        }): Promise<TResponseOfdeleteUsingDELETE_9>;
    };
    (url: "/menu/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/权限模块/菜单/updateAllUsingPUT_6)
         *
         * @tag菜单
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_6;
        }): Promise<TResponseOfupdateAllUsingPUT_6>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_8;
        }): Promise<TResponseOfpageUsingPOST_8>;
    };
    (url: "/menu/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/菜单/previewUsingPOST_7)
         *
         * @tag菜单
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_7;
        }): Promise<TResponseOfpreviewUsingPOST_7>;
    };
    (url: "/menu/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/菜单/queryUsingPOST_7)
         *
         * @tag菜单
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_7;
        }): Promise<TResponseOfqueryUsingPOST_7>;
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
        get(options: {
            path: TPathOfgetUsingGET_8;
        }): Promise<TResponseOfgetUsingGET_8>;
    };
    (url: "/online/list"): {
        /**
         * @description list
         * @see [Swagger doc: list](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/listUsingPOST)
         *
         * @tag在线用户
         */
        post(options: {
            query: TQueryOflistUsingPOST;
        }): Promise<TResponseOflistUsingPOST>;
    };
    (url: "/online/page"): {
        /**
         * @description page
         * @see [Swagger doc: page](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/pageUsingPOST_9)
         *
         * @tag在线用户
         */
        post(options: {
            body: TBodyOfpageUsingPOST_9;
        }): Promise<TResponseOfpageUsingPOST_9>;
    };
    (url: "/online/t"): {
        /**
         * @description T人
         * @see [Swagger doc: T人](http://120.79.250.86:8762/doc.html#/权限模块/在线用户/logoutUsingPOST)
         *
         * @tag在线用户
         */
        post(options: {
            query: TQueryOflogoutUsingPOST;
        }): Promise<TResponseOflogoutUsingPOST>;
    };
    (url: "/resource"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/资源/saveUsingPOST_7)
         *
         * @tag资源
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_7;
        }): Promise<TResponseOfsaveUsingPOST_7>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/资源/updateUsingPUT_7)
         *
         * @tag资源
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_7;
        }): Promise<TResponseOfupdateUsingPUT_7>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_7;
        }): Promise<TResponseOfupdateAllUsingPUT_7>;
    };
    (url: "/resource/check"): {
        /**
         * @description 检测资源编码是否可用
         * @see [Swagger doc: 检测资源编码是否可用](http://120.79.250.86:8762/doc.html#/权限模块/资源/checkUsingGET_2)
         *
         * @tag资源
         */
        get(options: {
            query: TQueryOfcheckUsingGET_2;
        }): Promise<TResponseOfcheckUsingGET_2>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_10;
        }): Promise<TResponseOfpageUsingPOST_10>;
    };
    (url: "/resource/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/资源/previewUsingPOST_8)
         *
         * @tag资源
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_8;
        }): Promise<TResponseOfpreviewUsingPOST_8>;
    };
    (url: "/resource/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/资源/queryUsingPOST_8)
         *
         * @tag资源
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_8;
        }): Promise<TResponseOfqueryUsingPOST_8>;
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
        get(options: {
            path: TPathOfgetUsingGET_9;
        }): Promise<TResponseOfgetUsingGET_9>;
    };
    (url: "/role"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/角色/saveUsingPOST_8)
         *
         * @tag角色
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_8;
        }): Promise<TResponseOfsaveUsingPOST_8>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/角色/updateUsingPUT_8)
         *
         * @tag角色
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_8;
        }): Promise<TResponseOfupdateUsingPUT_8>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_8;
        }): Promise<TResponseOfupdateAllUsingPUT_8>;
    };
    (url: "/role/check"): {
        /**
         * @description 检测角色编码
         * @see [Swagger doc: 检测角色编码](http://120.79.250.86:8762/doc.html#/权限模块/角色/checkUsingGET_3)
         *
         * @tag角色
         */
        get(options: {
            query: TQueryOfcheckUsingGET_3;
        }): Promise<TResponseOfcheckUsingGET_3>;
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
        get(options: {
            query: TQueryOfgetDetailsUsingGET;
        }): Promise<TResponseOfgetDetailsUsingGET>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_11;
        }): Promise<TResponseOfpageUsingPOST_11>;
    };
    (url: "/role/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/权限模块/角色/previewUsingPOST_9)
         *
         * @tag角色
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_9;
        }): Promise<TResponseOfpreviewUsingPOST_9>;
    };
    (url: "/role/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/角色/queryUsingPOST_9)
         *
         * @tag角色
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_9;
        }): Promise<TResponseOfqueryUsingPOST_9>;
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
        get(options: {
            path: TPathOfgetUsingGET_10;
        }): Promise<TResponseOfgetUsingGET_10>;
    };
    (url: "/roleAuthority/{roleId}"): {
        /**
         * @description 查询指定角色关联的菜单和资源
         * @see [Swagger doc: 查询指定角色关联的菜单和资源](http://120.79.250.86:8762/doc.html#/权限模块/角色的资源/queryByRoleIdUsingGET)
         *
         * @tag角色的资源
         */
        get(options: {
            path: TPathOfqueryByRoleIdUsingGET;
        }): Promise<TResponseOfqueryByRoleIdUsingGET>;
    };
    (url: "/user"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/权限模块/用户/saveUsingPOST_9)
         *
         * @tag用户
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_9;
        }): Promise<TResponseOfsaveUsingPOST_9>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/权限模块/用户/updateUsingPUT_9)
         *
         * @tag用户
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_9;
        }): Promise<TResponseOfupdateUsingPUT_9>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_9;
        }): Promise<TResponseOfupdateAllUsingPUT_9>;
    };
    (url: "/user/avatar"): {
        /**
         * @description 修改头像
         * @see [Swagger doc: 修改头像](http://120.79.250.86:8762/doc.html#/权限模块/用户/avatarUsingPUT)
         *
         * @tag用户
         */
        put(options: {
            body: TBodyOfavatarUsingPUT;
        }): Promise<TResponseOfavatarUsingPUT>;
    };
    (url: "/user/base"): {
        /**
         * @description 修改基础信息
         * @see [Swagger doc: 修改基础信息](http://120.79.250.86:8762/doc.html#/权限模块/用户/updateBaseUsingPUT)
         *
         * @tag用户
         */
        put(options: {
            body: TBodyOfupdateBaseUsingPUT;
        }): Promise<TResponseOfupdateBaseUsingPUT>;
    };
    (url: "/user/check"): {
        /**
         * @description 检测名称是否可用
         * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8762/doc.html#/权限模块/用户/checkUsingGET_4)
         *
         * @tag用户
         */
        get(options: {
            query: TQueryOfcheckUsingGET_4;
        }): Promise<TResponseOfcheckUsingGET_4>;
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
        get(options: {
            query: TQueryOffindUserByIdUsingGET;
        }): Promise<TResponseOffindUserByIdUsingGET>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_12;
        }): Promise<TResponseOfpageUsingPOST_12>;
    };
    (url: "/user/pageAll"): {
        /**
         * @description 分页查询所有用户
         * @see [Swagger doc: 分页查询所有用户](http://120.79.250.86:8762/doc.html#/权限模块/用户/pageAllUsingPOST)
         *
         * @tag用户
         */
        post(options: {
            body: TBodyOfpageAllUsingPOST;
        }): Promise<TResponseOfpageAllUsingPOST>;
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
        post(options: {
            body: TBodyOfpreviewUsingPOST_10;
        }): Promise<TResponseOfpreviewUsingPOST_10>;
    };
    (url: "/user/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/权限模块/用户/queryUsingPOST_10)
         *
         * @tag用户
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_10;
        }): Promise<TResponseOfqueryUsingPOST_10>;
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
        post(options: {
            body: TBodyOfresetUsingPOST;
        }): Promise<TResponseOfresetUsingPOST>;
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
        get(options: {
            path: TPathOfgetUsingGET_11;
        }): Promise<TResponseOfgetUsingGET_11>;
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

export { AppendixSaveVO, Application, ApplicationPageQuery, ApplicationSaveDTO, ApplicationUpdateDTO, GlobalUserSaveDTO, GlobalUserSaveDTO_1, GlobalUserUpdateDTO, IApiFn, IPage_Application_, IPage_Menu_, IPage_Online_, IPage_Resource_, IPage_Role_, IPage_User_, Menu, MenuResourceTreeVO, MenuSaveDTO, MenuUpdateDTO, Online, PageParams_ApplicationPageQuery_, PageParams_GlobalUserSaveDTO_, PageParams_Menu_, PageParams_Online_, PageParams_Resource_, PageParams_RolePageQuery_, PageParams_UserPageQuery_, R_Application_, R_IPage_Application__, R_IPage_Menu__, R_IPage_Online__, R_IPage_Resource__, R_IPage_Role__, R_IPage_User__, R_List_Application__, R_List_MenuResourceTreeVO__, R_List_Menu__, R_List_Online__, R_List_Resource__, R_List_RoleAuthority__, R_List_Role__, R_List_User__, R_List_long__, R_Menu_, R_Resource_, R_RoleAuthoritySaveDTO_, R_RoleSaveDTO_, R_Role_, R_UserRoleDTO_, R_User_, R_boolean_, R_string_, RequestProvider, Resource, ResourceSaveDTO, ResourceUpdateDTO, Role, RoleAuthority, RoleAuthoritySaveDTO, RolePageQuery, RoleSaveDTO, RoleSaveDTO_1, RoleUpdateDTO, RoleUserSaveVO, TBodyOfavatarUsingPUT, TBodyOfdeleteUsingDELETE_10, TBodyOfdeleteUsingDELETE_11, TBodyOfdeleteUsingDELETE_12, TBodyOfdeleteUsingDELETE_6, TBodyOfdeleteUsingDELETE_8, TBodyOfdeleteUsingDELETE_9, TBodyOfexportExcelUsingPOST_10, TBodyOfexportExcelUsingPOST_5, TBodyOfexportExcelUsingPOST_6, TBodyOfexportExcelUsingPOST_7, TBodyOfexportExcelUsingPOST_8, TBodyOfexportExcelUsingPOST_9, TBodyOfpageAllUsingPOST, TBodyOfpageUsingPOST_10, TBodyOfpageUsingPOST_11, TBodyOfpageUsingPOST_12, TBodyOfpageUsingPOST_6, TBodyOfpageUsingPOST_7, TBodyOfpageUsingPOST_8, TBodyOfpageUsingPOST_9, TBodyOfpreviewUsingPOST_10, TBodyOfpreviewUsingPOST_5, TBodyOfpreviewUsingPOST_6, TBodyOfpreviewUsingPOST_7, TBodyOfpreviewUsingPOST_8, TBodyOfpreviewUsingPOST_9, TBodyOfqueryUsingPOST_10, TBodyOfqueryUsingPOST_5, TBodyOfqueryUsingPOST_6, TBodyOfqueryUsingPOST_7, TBodyOfqueryUsingPOST_8, TBodyOfqueryUsingPOST_9, TBodyOfresetUsingPOST, TBodyOfsaveRoleAuthorityUsingPOST, TBodyOfsaveUserRoleUsingPOST_1, TBodyOfsaveUsingPOST_4, TBodyOfsaveUsingPOST_5, TBodyOfsaveUsingPOST_6, TBodyOfsaveUsingPOST_7, TBodyOfsaveUsingPOST_8, TBodyOfsaveUsingPOST_9, TBodyOfupdateAllUsingPUT_4, TBodyOfupdateAllUsingPUT_5, TBodyOfupdateAllUsingPUT_6, TBodyOfupdateAllUsingPUT_7, TBodyOfupdateAllUsingPUT_8, TBodyOfupdateAllUsingPUT_9, TBodyOfupdateBaseUsingPUT, TBodyOfupdatePasswordUsingPUT, TBodyOfupdatePasswordUsingPUT_1, TBodyOfupdateUsingPUT_4, TBodyOfupdateUsingPUT_5, TBodyOfupdateUsingPUT_6, TBodyOfupdateUsingPUT_7, TBodyOfupdateUsingPUT_8, TBodyOfupdateUsingPUT_9, TFormDataOfimportExcelUsingPOST_10, TFormDataOfimportExcelUsingPOST_5, TFormDataOfimportExcelUsingPOST_6, TFormDataOfimportExcelUsingPOST_7, TFormDataOfimportExcelUsingPOST_8, TFormDataOfimportExcelUsingPOST_9, TPathOffindUserByRoleIdUsingGET, TPathOfgetUsingGET_10, TPathOfgetUsingGET_11, TPathOfgetUsingGET_6, TPathOfgetUsingGET_7, TPathOfgetUsingGET_8, TPathOfgetUsingGET_9, TPathOfqueryByRoleIdUsingGET, TQueryOfcheckUsingGET_1, TQueryOfcheckUsingGET_2, TQueryOfcheckUsingGET_3, TQueryOfcheckUsingGET_4, TQueryOfdeleteUsingDELETE_7, TQueryOffindResourceListByRoleIdUsingGET, TQueryOffindUserByIdUsingGET, TQueryOffindUserByRoleIdUsingGET, TQueryOffindUserIdByCodeUsingGET, TQueryOffindUserIdByRoleIdUsingGET, TQueryOfgetDetailsUsingGET, TQueryOflistUsingPOST, TQueryOflogoutUsingPOST, TResponseOfallTreeUsingPOST, TResponseOfavatarUsingPUT, TResponseOfcheckUsingGET_1, TResponseOfcheckUsingGET_2, TResponseOfcheckUsingGET_3, TResponseOfcheckUsingGET_4, TResponseOfclearCacheUsingPOST_1, TResponseOfclearCacheUsingPOST_2, TResponseOfclearCacheUsingPOST_3, TResponseOfclearCacheUsingPOST_4, TResponseOfclearCacheUsingPOST_5, TResponseOfdeleteUsingDELETE_10, TResponseOfdeleteUsingDELETE_11, TResponseOfdeleteUsingDELETE_12, TResponseOfdeleteUsingDELETE_6, TResponseOfdeleteUsingDELETE_7, TResponseOfdeleteUsingDELETE_8, TResponseOfdeleteUsingDELETE_9, TResponseOfexportExcelUsingPOST_10, TResponseOfexportExcelUsingPOST_5, TResponseOfexportExcelUsingPOST_6, TResponseOfexportExcelUsingPOST_7, TResponseOfexportExcelUsingPOST_8, TResponseOfexportExcelUsingPOST_9, TResponseOffindAllUserIdUsingGET, TResponseOffindAllUsingGET, TResponseOffindMenuDataScopeTreeUsingPOST, TResponseOffindResourceListByRoleIdUsingGET, TResponseOffindUserByIdUsingGET, TResponseOffindUserByRoleIdUsingGET, TResponseOffindUserIdByCodeUsingGET, TResponseOffindUserIdByRoleIdUsingGET, TResponseOfgetDetailsUsingGET, TResponseOfgetUsingGET_10, TResponseOfgetUsingGET_11, TResponseOfgetUsingGET_6, TResponseOfgetUsingGET_7, TResponseOfgetUsingGET_8, TResponseOfgetUsingGET_9, TResponseOfimportExcelUsingPOST_10, TResponseOfimportExcelUsingPOST_5, TResponseOfimportExcelUsingPOST_6, TResponseOfimportExcelUsingPOST_7, TResponseOfimportExcelUsingPOST_8, TResponseOfimportExcelUsingPOST_9, TResponseOflistUsingPOST, TResponseOflogoutUsingPOST, TResponseOfmenuResourceTreeUsingPOST, TResponseOfpageAllUsingPOST, TResponseOfpageUsingPOST_10, TResponseOfpageUsingPOST_11, TResponseOfpageUsingPOST_12, TResponseOfpageUsingPOST_6, TResponseOfpageUsingPOST_7, TResponseOfpageUsingPOST_8, TResponseOfpageUsingPOST_9, TResponseOfpreviewUsingPOST_10, TResponseOfpreviewUsingPOST_5, TResponseOfpreviewUsingPOST_6, TResponseOfpreviewUsingPOST_7, TResponseOfpreviewUsingPOST_8, TResponseOfpreviewUsingPOST_9, TResponseOfqueryByRoleIdUsingGET, TResponseOfqueryUsingPOST_10, TResponseOfqueryUsingPOST_5, TResponseOfqueryUsingPOST_6, TResponseOfqueryUsingPOST_7, TResponseOfqueryUsingPOST_8, TResponseOfqueryUsingPOST_9, TResponseOfrefreshCacheUsingPOST_1, TResponseOfrefreshCacheUsingPOST_2, TResponseOfrefreshCacheUsingPOST_3, TResponseOfrefreshCacheUsingPOST_4, TResponseOfrefreshCacheUsingPOST_5, TResponseOfresetUsingPOST, TResponseOfsaveRoleAuthorityUsingPOST, TResponseOfsaveUserRoleUsingPOST_1, TResponseOfsaveUsingPOST_4, TResponseOfsaveUsingPOST_5, TResponseOfsaveUsingPOST_6, TResponseOfsaveUsingPOST_7, TResponseOfsaveUsingPOST_8, TResponseOfsaveUsingPOST_9, TResponseOfupdateAllUsingPUT_4, TResponseOfupdateAllUsingPUT_5, TResponseOfupdateAllUsingPUT_6, TResponseOfupdateAllUsingPUT_7, TResponseOfupdateAllUsingPUT_8, TResponseOfupdateAllUsingPUT_9, TResponseOfupdateBaseUsingPUT, TResponseOfupdatePasswordUsingPUT, TResponseOfupdatePasswordUsingPUT_1, TResponseOfupdateUsingPUT_4, TResponseOfupdateUsingPUT_5, TResponseOfupdateUsingPUT_6, TResponseOfupdateUsingPUT_7, TResponseOfupdateUsingPUT_8, TResponseOfupdateUsingPUT_9, User, UserPageQuery, UserRoleDTO, UserRoleSaveDTO, UserSaveDTO, UserUpdateAvatarDTO, UserUpdateBaseInfoDTO, UserUpdateDTO, UserUpdatePasswordDTO, createRequest };
