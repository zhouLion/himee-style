/**
 * @description: 地区表
 */
export interface Area {
    // 编码
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 全名
    fullName?: string;
    // 主键
    id?: number;
    // 名称
    label?: string;
    // 维度
    latitude?: string;
    // 行政区级
    level?: string;
    // 经度
    longitude?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 数据来源
    source?: string;
    // 状态
    state?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 地区表
 */
export interface AreaPageQuery {
    // 编码
    code?: string;
    // 全名
    fullName?: string;
    // 名称
    label?: string;
    // 维度
    latitude?: string;
    // 行政区级
    level?: string;
    // 经度
    longitude?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 数据来源
    source?: string;
    // 状态
    state?: boolean;
}

/**
 * @description: 地区表
 */
export interface AreaSaveDTO {
    // 编码
    code?: string;
    // 全名
    fullName?: string;
    // 名称
    label?: string;
    // 维度
    latitude?: string;
    // 行政区级
    level?: string;
    // 经度
    longitude?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 数据来源
    source?: string;
    // 状态
    state?: boolean;
}

/**
 * @description: 地区表
 */
export interface AreaUpdateDTO {
    // 编码
    code?: string;
    // 全名
    fullName?: string;
    // 主键
    id?: number;
    // 名称
    label?: string;
    // 维度
    latitude?: string;
    // 行政区级
    level?: string;
    // 经度
    longitude?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 数据来源
    source?: string;
    // 状态
    state?: boolean;
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
 * @description: 字典项
 */
export interface DictionaryPageQuery {
    // 编码
    code?: string;
    // 类选择器
    cssClass?: string;
    // css样式
    cssStyle?: string;
    // 描述
    describe?: string;
    // 图标
    icon?: string;
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
}

/**
 * @description: 字典项
 */
export interface DictionarySaveDTO {
    // 编码
    code?: string;
    // 类选择器
    cssClass?: string;
    // css样式
    cssStyle?: string;
    // 描述
    describe?: string;
    // 图标
    icon?: string;
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
}

/**
 * @description: 字典类型
 */
export interface DictionaryTypeSaveDTO {
    // 类型标签
    label?: string;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}

/**
 * @description: 字典项
 */
export interface DictionaryUpdateDTO {
    // 编码
    code?: string;
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
}

export interface IPage_Area_ {
    current?: number;
    pages?: number;
    records?: Area[];
    size?: number;
    total?: number;
}

export interface IPage_Dictionary_ {
    current?: number;
    pages?: number;
    records?: Dictionary[];
    size?: number;
    total?: number;
}

export interface IPage_LoginLog_ {
    current?: number;
    pages?: number;
    records?: LoginLog[];
    size?: number;
    total?: number;
}

export interface IPage_OptLog_ {
    current?: number;
    pages?: number;
    records?: OptLog[];
    size?: number;
    total?: number;
}

export interface IPage_Parameter_ {
    current?: number;
    pages?: number;
    records?: Parameter[];
    size?: number;
    total?: number;
}

/**
 * @description: 登录日志
 */
export interface LoginLog {
    // 登录人账号
    account?: string;
    // 浏览器名称
    browser?: string;
    // 浏览器版本
    browserVersion?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 登录描述
    description?: string;
    // 主键
    id?: number;
    // 登录地点
    location?: string;
    // 登录时间
    loginDate?: string;
    // 操作系统
    operatingSystem?: string;
    // 登录IP
    requestIp?: string;
    // 浏览器请求头
    ua?: string;
    // 登录人ID
    userId?: number;
    // 登录人姓名
    userName?: string;
}

/**
 * @description: 登录日志
 */
export interface LoginLogUpdateDTO {
    // 登录人账号
    account?: string;
    // 浏览器名称
    browser?: string;
    // 浏览器版本
    browserVersion?: string;
    // 登录描述
    description?: string;
    // 主键
    id?: number;
    // 登录地点
    location?: string;
    // 登录时间
    loginDate?: string;
    // 操作系统
    operatingSystem?: string;
    // 登录IP
    requestIp?: string;
    // 浏览器请求头
    ua?: string;
    // 登录人ID
    userId?: number;
    // 登录人姓名
    userName?: string;
}

/**
 * @description: 系统日志
 */
export interface OptLog {
    // 请求方法
    actionMethod?: string;
    // 类路径
    classPath?: string;
    // 消耗时间
    consumingTime?: number;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 操作描述
    description?: string;
    // 完成时间
    finishTime?: string;
    // 请求类型
    httpMethod?: string;
    // 主键
    id?: number;
    // 操作IP
    requestIp?: string;
    // 请求地址
    requestUri?: string;
    // 开始时间
    startTime?: string;
    // 日志类型
    type?: string;
    // 浏览器
    ua?: string;
    // 操作人
    userName?: string;
}

/**
 * @description: 系统日志扩展
 */
export interface OptLogResult {
    // 请求方法
    actionMethod?: string;
    // 类路径
    classPath?: string;
    // 消耗时间
    consumingTime?: number;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 操作描述
    description?: string;
    // 异常描述
    exDetail?: string;
    // 完成时间
    finishTime?: string;
    // 请求类型
    httpMethod?: string;
    // 主键
    id?: number;
    // 请求参数
    params?: string;
    // 操作IP
    requestIp?: string;
    // 请求地址
    requestUri?: string;
    // 返回值
    result?: string;
    // 开始时间
    startTime?: string;
    // 日志类型
    type?: string;
    // 浏览器
    ua?: string;
    // 操作人
    userName?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_AreaPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: AreaPageQuery;
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
export interface PageParams_DictionaryPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: DictionaryPageQuery;
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
export interface PageParams_LoginLog_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: LoginLog;
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
export interface PageParams_OptLog_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: OptLog;
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
export interface PageParams_ParameterPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: ParameterPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 参数配置
 */
export interface Parameter {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 参数键
    key?: string;
    // 参数名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 参数值
    value?: string;
}

/**
 * @description: 参数配置
 */
export interface ParameterPageQuery {
    // 描述
    describe?: string;
    // 参数键
    key?: string;
    // 参数名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 参数值
    value?: string;
}

/**
 * @description: 参数配置
 */
export interface ParameterSaveDTO {
    // 描述
    describe?: string;
    // 参数键
    key?: string;
    // 参数名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 参数值
    value?: string;
}

/**
 * @description: 参数配置
 */
export interface ParameterUpdateDTO {
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 参数键
    key?: string;
    // 参数名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    state?: boolean;
    // 参数值
    value?: string;
}

export interface R_Area_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Area;
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

export interface R_Dictionary_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Dictionary;
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

export interface R_IPage_Area__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Area_;
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

export interface R_IPage_Dictionary__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Dictionary_;
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

export interface R_IPage_LoginLog__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_LoginLog_;
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

export interface R_IPage_OptLog__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_OptLog_;
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

export interface R_IPage_Parameter__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Parameter_;
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

export interface R_List_Area__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Area[];
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

export interface R_List_Dictionary__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Dictionary[];
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

export interface R_List_LoginLog__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: LoginLog[];
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

export interface R_List_Parameter__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Parameter[];
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

export interface R_LoginLog_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: LoginLog;
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

export interface R_Map_string_object__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: any;
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

export interface R_OptLogResult_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: OptLogResult;
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

export interface R_Parameter_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Parameter;
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

export interface R_object_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: any;
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

export type TBodyOfsaveUsingPOST = AreaSaveDTO;
export type TResponseOfsaveUsingPOST = R_Area_;
export type TBodyOfupdateUsingPUT = AreaUpdateDTO;
export type TResponseOfupdateUsingPUT = R_Area_;
export type TBodyOfdeleteUsingDELETE = number[];
export type TResponseOfdeleteUsingDELETE = R_boolean_;
export type TBodyOfupdateAllUsingPUT = Area;
export type TResponseOfupdateAllUsingPUT = R_Area_;
export interface TPathOfcheckUsingGET {
    // code
    code: string;
}
export interface TQueryOfcheckUsingGET {
    // id
    id?: number;
}
export type TResponseOfcheckUsingGET = R_boolean_;
export type TResponseOfclearCacheUsingPOST = R_boolean_;
export type TBodyOfexportExcelUsingPOST = PageParams_AreaPageQuery_;
export type TResponseOfexportExcelUsingPOST = any;
export interface TFormDataOfimportExcelUsingPOST {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST = R_boolean_;
export interface TQueryOflinkageQueryUsingGET {
    // parentId
    parentId?: number;
}
export type TResponseOflinkageQueryUsingGET = R_List_Area__;
export type TBodyOfpageUsingPOST = PageParams_AreaPageQuery_;
export type TResponseOfpageUsingPOST = R_IPage_Area__;
export type TBodyOfpreviewUsingPOST = PageParams_AreaPageQuery_;
export type TResponseOfpreviewUsingPOST = R_string_;
export type TBodyOfqueryUsingPOST = Area;
export type TResponseOfqueryUsingPOST = R_List_Area__;
export type TResponseOfrefreshCacheUsingPOST = R_boolean_;
export interface TPathOfgetUsingGET {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET = R_Area_;
export type TResponseOfgenerateUsingGET = R_object_;
export type TResponseOfchartUsingGET = R_Map_string_object__;
export type TResponseOfitemUsingGET = R_Map_string_object__;
export type TResponseOfpvIncrUsingPOST = R_boolean_;
export type TBodyOfsaveUsingPOST_1 = DictionarySaveDTO;
export type TResponseOfsaveUsingPOST_1 = R_Dictionary_;
export type TBodyOfupdateUsingPUT_1 = DictionaryUpdateDTO;
export type TResponseOfupdateUsingPUT_1 = R_Dictionary_;
export type TBodyOfdeleteUsingDELETE_1 = number[];
export type TResponseOfdeleteUsingDELETE_1 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_1 = Dictionary;
export type TResponseOfupdateAllUsingPUT_1 = R_Dictionary_;
export type TBodyOfexportExcelUsingPOST_1 = PageParams_DictionaryPageQuery_;
export type TResponseOfexportExcelUsingPOST_1 = any;
export interface TFormDataOfimportExcelUsingPOST_1 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_1 = R_boolean_;
export type TBodyOfpageUsingPOST_1 = PageParams_DictionaryPageQuery_;
export type TResponseOfpageUsingPOST_1 = R_IPage_Dictionary__;
export type TBodyOfpageTypeUsingPOST = PageParams_DictionaryPageQuery_;
export type TResponseOfpageTypeUsingPOST = R_IPage_Dictionary__;
export type TBodyOfpreviewUsingPOST_1 = PageParams_DictionaryPageQuery_;
export type TResponseOfpreviewUsingPOST_1 = R_string_;
export type TBodyOfqueryUsingPOST_1 = Dictionary;
export type TResponseOfqueryUsingPOST_1 = R_List_Dictionary__;
export type TBodyOfsaveTypeUsingPOST = DictionaryTypeSaveDTO;
export type TResponseOfsaveTypeUsingPOST = R_Dictionary_;
export type TBodyOfupdateTypeUsingPUT = DictionaryTypeSaveDTO;
export type TResponseOfupdateTypeUsingPUT = R_boolean_;
export type TBodyOfdeleteTypeUsingDELETE = string[];
export type TResponseOfdeleteTypeUsingDELETE = R_boolean_;
export interface TPathOfgetUsingGET_1 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_1 = R_Dictionary_;
export type TBodyOfsaveUsingPOST_2 = LoginLog;
export type TResponseOfsaveUsingPOST_2 = R_LoginLog_;
export type TBodyOfupdateUsingPUT_2 = LoginLogUpdateDTO;
export type TResponseOfupdateUsingPUT_2 = R_LoginLog_;
export type TBodyOfdeleteUsingDELETE_2 = number[];
export type TResponseOfdeleteUsingDELETE_2 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_2 = LoginLog;
export type TResponseOfupdateAllUsingPUT_2 = R_LoginLog_;
export interface TQueryOfclearUsingDELETE {
    // type
    type?: number;
}
export type TResponseOfclearUsingDELETE = R_boolean_;
export type TBodyOfexportExcelUsingPOST_2 = PageParams_LoginLog_;
export type TResponseOfexportExcelUsingPOST_2 = any;
export interface TFormDataOfimportExcelUsingPOST_2 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_2 = R_boolean_;
export type TBodyOfpageUsingPOST_2 = PageParams_LoginLog_;
export type TResponseOfpageUsingPOST_2 = R_IPage_LoginLog__;
export type TBodyOfpreviewUsingPOST_2 = PageParams_LoginLog_;
export type TResponseOfpreviewUsingPOST_2 = R_string_;
export type TBodyOfqueryUsingPOST_2 = LoginLog;
export type TResponseOfqueryUsingPOST_2 = R_List_LoginLog__;
export interface TPathOfgetUsingGET_2 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_2 = R_LoginLog_;
export type TBodyOfdeleteUsingDELETE_3 = number[];
export type TResponseOfdeleteUsingDELETE_3 = R_boolean_;
export interface TQueryOfclearUsingDELETE_1 {
    // type
    type?: number;
}
export type TResponseOfclearUsingDELETE_1 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_3 = PageParams_OptLog_;
export type TResponseOfexportExcelUsingPOST_3 = any;
export interface TQueryOfgetUsingGET_3 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_3 = R_OptLogResult_;
export interface TFormDataOfimportExcelUsingPOST_3 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_3 = R_boolean_;
export type TBodyOfpageUsingPOST_3 = PageParams_OptLog_;
export type TResponseOfpageUsingPOST_3 = R_IPage_OptLog__;
export type TBodyOfpreviewUsingPOST_3 = PageParams_OptLog_;
export type TResponseOfpreviewUsingPOST_3 = R_string_;
export type TBodyOfsaveUsingPOST_3 = ParameterSaveDTO;
export type TResponseOfsaveUsingPOST_3 = R_Parameter_;
export type TBodyOfupdateUsingPUT_3 = ParameterUpdateDTO;
export type TResponseOfupdateUsingPUT_3 = R_Parameter_;
export type TBodyOfdeleteUsingDELETE_4 = number[];
export type TResponseOfdeleteUsingDELETE_4 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_3 = Parameter;
export type TResponseOfupdateAllUsingPUT_3 = R_Parameter_;
export type TBodyOfexportExcelUsingPOST_4 = PageParams_ParameterPageQuery_;
export type TResponseOfexportExcelUsingPOST_4 = any;
export interface TFormDataOfimportExcelUsingPOST_4 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_4 = R_boolean_;
export type TBodyOfpageUsingPOST_4 = PageParams_ParameterPageQuery_;
export type TResponseOfpageUsingPOST_4 = R_IPage_Parameter__;
export type TBodyOfpreviewUsingPOST_4 = PageParams_ParameterPageQuery_;
export type TResponseOfpreviewUsingPOST_4 = R_string_;
export type TBodyOfqueryUsingPOST_3 = Parameter;
export type TResponseOfqueryUsingPOST_3 = R_List_Parameter__;
export interface TPathOfgetUsingGET_4 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_4 = R_Parameter_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/area"): {
    /**
     * @description 新增 saveUsingPOST
     * 地区表
     */
    post(options: { body: TBodyOfsaveUsingPOST }): Promise<TResponseOfsaveUsingPOST>;

    /**
     * @description 修改 updateUsingPUT
     * 地区表
     */
    put(options: { body: TBodyOfupdateUsingPUT }): Promise<TResponseOfupdateUsingPUT>;

    /**
     * @description 删除 deleteUsingDELETE
     * 地区表
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE }): Promise<TResponseOfdeleteUsingDELETE>;
  };
  (url: "/area/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT
     * 地区表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT }): Promise<TResponseOfupdateAllUsingPUT>;
  };
  (url: "/area/check/{code}"): {
    /**
     * @description 检测地区编码是否重复 checkUsingGET
     * 地区表
     */
    get(options: {
      path: TPathOfcheckUsingGET;
      query: TQueryOfcheckUsingGET;
    }): Promise<TResponseOfcheckUsingGET>;
  };
  (url: "/area/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST
     * 地区表
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST>;
  };
  (url: "/area/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST
     * 地区表
     */
    post(options: { body: TBodyOfexportExcelUsingPOST }): Promise<TResponseOfexportExcelUsingPOST>;
  };
  (url: "/area/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST
     * 地区表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST;
    }): Promise<TResponseOfimportExcelUsingPOST>;
  };
  (url: "/area/linkage"): {
    /**
     * @description 级联查询缓存中的地区 linkageQueryUsingGET
     * 地区表
     */
    get(options: { query: TQueryOflinkageQueryUsingGET }): Promise<TResponseOflinkageQueryUsingGET>;
  };
  (url: "/area/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST
     * 地区表
     */
    post(options: { body: TBodyOfpageUsingPOST }): Promise<TResponseOfpageUsingPOST>;
  };
  (url: "/area/preview"): {
    /**
     * @description 预览Excel previewUsingPOST
     * 地区表
     */
    post(options: { body: TBodyOfpreviewUsingPOST }): Promise<TResponseOfpreviewUsingPOST>;
  };
  (url: "/area/query"): {
    /**
     * @description 批量查询 queryUsingPOST
     * 地区表
     */
    post(options: { body: TBodyOfqueryUsingPOST }): Promise<TResponseOfqueryUsingPOST>;
  };
  (url: "/area/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST
     * 地区表
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST>;
  };
  (url: "/area/{id}"): {
    /**
     * @description 单体查询 getUsingGET
     * 地区表
     */
    get(options: { path: TPathOfgetUsingGET }): Promise<TResponseOfgetUsingGET>;
  };
  (url: "/common/generateId"): {
    /**
     * @description generate generateUsingGET
     * 首页
     */
    get(options: {}): Promise<TResponseOfgenerateUsingGET>;
  };
  (url: "/dashboard/chart"): {
    /**
     * @description chart chartUsingGET
     * 首页
     */
    get(options: {}): Promise<TResponseOfchartUsingGET>;
  };
  (url: "/dashboard/item"): {
    /**
     * @description item itemUsingGET
     * 首页
     */
    get(options: {}): Promise<TResponseOfitemUsingGET>;
  };
  (url: "/dashboard/pvIncr"): {
    /**
     * @description pvIncr pvIncrUsingPOST
     * 首页
     */
    post(options: {}): Promise<TResponseOfpvIncrUsingPOST>;
  };
  (url: "/dictionary"): {
    /**
     * @description 新增 saveUsingPOST_1
     * 字典类型
     */
    post(options: { body: TBodyOfsaveUsingPOST_1 }): Promise<TResponseOfsaveUsingPOST_1>;

    /**
     * @description 修改 updateUsingPUT_1
     * 字典类型
     */
    put(options: { body: TBodyOfupdateUsingPUT_1 }): Promise<TResponseOfupdateUsingPUT_1>;

    /**
     * @description 删除 deleteUsingDELETE_1
     * 字典类型
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_1 }): Promise<TResponseOfdeleteUsingDELETE_1>;
  };
  (url: "/dictionary/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_1
     * 字典类型
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_1 }): Promise<TResponseOfupdateAllUsingPUT_1>;
  };
  (url: "/dictionary/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_1
     * 字典类型
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_1;
    }): Promise<TResponseOfexportExcelUsingPOST_1>;
  };
  (url: "/dictionary/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_1
     * 字典类型
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_1;
    }): Promise<TResponseOfimportExcelUsingPOST_1>;
  };
  (url: "/dictionary/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_1
     * 字典类型
     */
    post(options: { body: TBodyOfpageUsingPOST_1 }): Promise<TResponseOfpageUsingPOST_1>;
  };
  (url: "/dictionary/pageType"): {
    /**
     * @description 分页列表查询-字典类型 pageTypeUsingPOST
     * 字典类型
     */
    post(options: { body: TBodyOfpageTypeUsingPOST }): Promise<TResponseOfpageTypeUsingPOST>;
  };
  (url: "/dictionary/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_1
     * 字典类型
     */
    post(options: { body: TBodyOfpreviewUsingPOST_1 }): Promise<TResponseOfpreviewUsingPOST_1>;
  };
  (url: "/dictionary/query"): {
    /**
     * @description 批量查询 queryUsingPOST_1
     * 字典类型
     */
    post(options: { body: TBodyOfqueryUsingPOST_1 }): Promise<TResponseOfqueryUsingPOST_1>;
  };
  (url: "/dictionary/type"): {
    /**
     * @description 保存-字典类型 saveTypeUsingPOST
     * 字典类型
     */
    post(options: { body: TBodyOfsaveTypeUsingPOST }): Promise<TResponseOfsaveTypeUsingPOST>;

    /**
     * @description 修改-字典类型 updateTypeUsingPUT
     * 字典类型
     */
    put(options: { body: TBodyOfupdateTypeUsingPUT }): Promise<TResponseOfupdateTypeUsingPUT>;

    /**
     * @description 删除-字典类型 deleteTypeUsingDELETE
     * 字典类型
     */
    delete(options: {
      body: TBodyOfdeleteTypeUsingDELETE;
    }): Promise<TResponseOfdeleteTypeUsingDELETE>;
  };
  (url: "/dictionary/{id}"): {
    /**
     * @description 单体查询 getUsingGET_1
     * 字典类型
     */
    get(options: { path: TPathOfgetUsingGET_1 }): Promise<TResponseOfgetUsingGET_1>;
  };
  (url: "/loginLog"): {
    /**
     * @description 新增 saveUsingPOST_2
     * 登录日志
     */
    post(options: { body: TBodyOfsaveUsingPOST_2 }): Promise<TResponseOfsaveUsingPOST_2>;

    /**
     * @description 修改 updateUsingPUT_2
     * 登录日志
     */
    put(options: { body: TBodyOfupdateUsingPUT_2 }): Promise<TResponseOfupdateUsingPUT_2>;

    /**
     * @description 删除 deleteUsingDELETE_2
     * 登录日志
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_2 }): Promise<TResponseOfdeleteUsingDELETE_2>;
  };
  (url: "/loginLog/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_2
     * 登录日志
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_2 }): Promise<TResponseOfupdateAllUsingPUT_2>;
  };
  (url: "/loginLog/clear"): {
    /**
     * @description 清空日志 clearUsingDELETE
     * 登录日志
     */
    delete(options: { query: TQueryOfclearUsingDELETE }): Promise<TResponseOfclearUsingDELETE>;
  };
  (url: "/loginLog/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_2
     * 登录日志
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_2;
    }): Promise<TResponseOfexportExcelUsingPOST_2>;
  };
  (url: "/loginLog/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_2
     * 登录日志
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_2;
    }): Promise<TResponseOfimportExcelUsingPOST_2>;
  };
  (url: "/loginLog/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_2
     * 登录日志
     */
    post(options: { body: TBodyOfpageUsingPOST_2 }): Promise<TResponseOfpageUsingPOST_2>;
  };
  (url: "/loginLog/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_2
     * 登录日志
     */
    post(options: { body: TBodyOfpreviewUsingPOST_2 }): Promise<TResponseOfpreviewUsingPOST_2>;
  };
  (url: "/loginLog/query"): {
    /**
     * @description 批量查询 queryUsingPOST_2
     * 登录日志
     */
    post(options: { body: TBodyOfqueryUsingPOST_2 }): Promise<TResponseOfqueryUsingPOST_2>;
  };
  (url: "/loginLog/{id}"): {
    /**
     * @description 单体查询 getUsingGET_2
     * 登录日志
     */
    get(options: { path: TPathOfgetUsingGET_2 }): Promise<TResponseOfgetUsingGET_2>;
  };
  (url: "/optLog"): {
    /**
     * @description 删除 deleteUsingDELETE_3
     * 系统日志
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_3 }): Promise<TResponseOfdeleteUsingDELETE_3>;
  };
  (url: "/optLog/clear"): {
    /**
     * @description 清空日志 clearUsingDELETE_1
     * 系统日志
     */
    delete(options: { query: TQueryOfclearUsingDELETE_1 }): Promise<TResponseOfclearUsingDELETE_1>;
  };
  (url: "/optLog/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_3
     * 系统日志
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_3;
    }): Promise<TResponseOfexportExcelUsingPOST_3>;
  };
  (url: "/optLog/get"): {
    /**
     * @description 单体查询 getUsingGET_3
     * 系统日志
     */
    get(options: { query: TQueryOfgetUsingGET_3 }): Promise<TResponseOfgetUsingGET_3>;
  };
  (url: "/optLog/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_3
     * 系统日志
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_3;
    }): Promise<TResponseOfimportExcelUsingPOST_3>;
  };
  (url: "/optLog/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_3
     * 系统日志
     */
    post(options: { body: TBodyOfpageUsingPOST_3 }): Promise<TResponseOfpageUsingPOST_3>;
  };
  (url: "/optLog/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_3
     * 系统日志
     */
    post(options: { body: TBodyOfpreviewUsingPOST_3 }): Promise<TResponseOfpreviewUsingPOST_3>;
  };
  (url: "/parameter"): {
    /**
     * @description 新增 saveUsingPOST_3
     * 参数配置
     */
    post(options: { body: TBodyOfsaveUsingPOST_3 }): Promise<TResponseOfsaveUsingPOST_3>;

    /**
     * @description 修改 updateUsingPUT_3
     * 参数配置
     */
    put(options: { body: TBodyOfupdateUsingPUT_3 }): Promise<TResponseOfupdateUsingPUT_3>;

    /**
     * @description 删除 deleteUsingDELETE_4
     * 参数配置
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_4 }): Promise<TResponseOfdeleteUsingDELETE_4>;
  };
  (url: "/parameter/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_3
     * 参数配置
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_3 }): Promise<TResponseOfupdateAllUsingPUT_3>;
  };
  (url: "/parameter/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_4
     * 参数配置
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_4;
    }): Promise<TResponseOfexportExcelUsingPOST_4>;
  };
  (url: "/parameter/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_4
     * 参数配置
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_4;
    }): Promise<TResponseOfimportExcelUsingPOST_4>;
  };
  (url: "/parameter/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_4
     * 参数配置
     */
    post(options: { body: TBodyOfpageUsingPOST_4 }): Promise<TResponseOfpageUsingPOST_4>;
  };
  (url: "/parameter/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_4
     * 参数配置
     */
    post(options: { body: TBodyOfpreviewUsingPOST_4 }): Promise<TResponseOfpreviewUsingPOST_4>;
  };
  (url: "/parameter/query"): {
    /**
     * @description 批量查询 queryUsingPOST_3
     * 参数配置
     */
    post(options: { body: TBodyOfqueryUsingPOST_3 }): Promise<TResponseOfqueryUsingPOST_3>;
  };
  (url: "/parameter/{id}"): {
    /**
     * @description 单体查询 getUsingGET_4
     * 参数配置
     */
    get(options: { path: TPathOfgetUsingGET_4 }): Promise<TResponseOfgetUsingGET_4>;
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
