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
export interface DatasourceConfig {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 驱动
    driverClassName?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 数据源名
    poolName?: string;
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 链接
    url?: string;
    // 账号
    username?: string;
}
export interface DatasourceConfigPageQuery {
    // 驱动
    driverClassName?: string;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}
export interface DatasourceConfigSaveDTO {
    // 驱动
    driverClassName?: string;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}
export interface DatasourceConfigUpdateDTO {
    // 驱动
    driverClassName?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}
export interface IPage_DatasourceConfig_ {
    current?: number;
    pages?: number;
    records?: DatasourceConfig[];
    size?: number;
    total?: number;
}
export interface IPage_Tenant_ {
    current?: number;
    pages?: number;
    records?: Tenant[];
    size?: number;
    total?: number;
}
export interface PageParams_DatasourceConfigPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: DatasourceConfigPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface PageParams_TenantPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: TenantPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface R_DatasourceConfig_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: DatasourceConfig;
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
export interface R_IPage_DatasourceConfig__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_DatasourceConfig_;
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
export interface R_IPage_Tenant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Tenant_;
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
export interface R_List_DatasourceConfig__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: DatasourceConfig[];
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
export interface R_List_Tenant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Tenant[];
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
export interface R_Tenant_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Tenant;
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
export interface Tenant {
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // 主键
    id?: number;
    // logo地址
    logo?: string;
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface TenantConnectDTO {
    // 基础库数据源配置
    baseDatasourceId?: number;
    // 连接类型
    connectType?: string;
    // 扩展库数据源配置
    extendDatasourceId?: number;
    // 企业ID
    id?: number;
    tenant?: string;
}
export interface TenantPageQuery {
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // logo地址
    logo?: string;
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
}
export interface TenantSaveDTO {
    // 企业编码
    code?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // logo地址
    logos?: AppendixSaveVO[];
    // 企业名称
    name?: string;
}
export interface TenantUpdateDTO {
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // 主键
    id?: number;
    // logo地址
    logos?: AppendixSaveVO[];
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
}