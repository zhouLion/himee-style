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
export interface DictionaryTypeSaveDTO {
    // 类型标签
    label?: string;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}
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
export interface R_Map_string,object__ {
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