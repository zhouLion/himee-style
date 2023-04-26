export interface AppendixResultVO {
    // 业务id
    bizId?: number;
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 创建时间
    createTime?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
}
export interface File {
    bizType?: string;
    bucket?: string;
    contentType?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    fileMd5?: string;
    fileType?: string;
    // 主键
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
    storageType?: string;
    suffix?: string;
    uniqueFileName?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    url?: string;
}
export interface FileFileParamVO {
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件md5
    fileMd5?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
    // 存储类型
    storageType?: string;
    // 后缀
    suffix?: string;
    // 唯一文件名
    uniqueFileName?: string;
    // 文件访问地址
    url?: string;
}
export interface FileFileResultVO {
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件md5
    fileMd5?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
    // 后缀
    suffix?: string;
    // 唯一文件名
    uniqueFileName?: string;
    // 文件访问地址
    url?: string;
}
export interface IPage_File_ {
    current?: number;
    pages?: number;
    records?: File[];
    size?: number;
    total?: number;
}
export interface Map_long_string_ {
    [index: string]: string;
}
export interface Map_string_string_ {
    [index: string]: string;
}
export interface PageParams_FileFileParamVO_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: FileFileParamVO;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface R_FileFileResultVO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: FileFileResultVO;
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
export interface R_File_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: File;
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
export interface R_IPage_File__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_File_;
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
export interface R_List_AppendixResultVO__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: AppendixResultVO[];
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
export interface R_List_File__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: File[];
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
export interface R_Map_long_string__ {
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
export interface R_Map_string_string__ {
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