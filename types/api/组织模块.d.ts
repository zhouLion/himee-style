export interface IPage_Org_ {
    current?: number;
    pages?: number;
    records?: Org[];
    size?: number;
    total?: number;
}
export interface IPage_Station_ {
    current?: number;
    pages?: number;
    records?: Station[];
    size?: number;
    total?: number;
}
export interface Org {
    // 简称
    abbreviation?: string;
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
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 树结构
    treePath?: string;
    // 类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface OrgPageQuery {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 树结构
    treePath?: string;
    // 类型
    type?: string;
}
export interface OrgSaveDTO {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}
export interface OrgUpdateDTO {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}
export interface PageParams_OrgPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: OrgPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface PageParams_StationPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StationPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface R_IPage_Org__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Org_;
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
export interface R_IPage_Station__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Station_;
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
export interface R_List_Org__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Org[];
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
export interface R_List_Station__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Station[];
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
export interface R_Org_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Org;
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
export interface R_Station_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Station;
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
export interface Station {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建者所属机构
    createdOrgId?: number;
    // 描述
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface StationPageQuery {
    createdOrgId?: number;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}
export interface StationSaveDTO {
    createdOrgId?: number;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}
export interface StationUpdateDTO {
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}