export interface IPage_Order_ {
    current?: number;
    pages?: number;
    records?: Order[];
    size?: number;
    total?: number;
}
export interface Order {
    // 编号
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 学历
    education?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 民族
    nation?: string;
    // 组织ID
    orgId?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface OrderPageQuery {
    // 编号
    code?: string;
    // 学历
    education?: string;
    // 名称
    name?: string;
    // 民族
    nation?: string;
    // 组织ID
    orgId?: number;
}
export interface OrderSaveDTO {
    // 编号
    code?: string;
    // 学历
    education?: string;
    // 名称
    name?: string;
    // 民族
    nation?: string;
    // 组织ID
    orgId?: number;
}
export interface OrderUpdateDTO {
    // 编号
    code?: string;
    // 学历
    education?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 民族
    nation?: string;
    // 组织ID
    orgId?: number;
}
export interface PageParams_OrderPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: OrderPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface R_IPage_Order__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Order_;
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
export interface R_List_Order__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Order[];
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
export interface R_Order_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Order;
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