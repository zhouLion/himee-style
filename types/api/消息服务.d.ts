export interface IPage_MsgPageResult_ {
    current?: number;
    pages?: number;
    records?: MsgPageResult[];
    size?: number;
    total?: number;
}
export interface IPage_Msg_ {
    current?: number;
    pages?: number;
    records?: Msg[];
    size?: number;
    total?: number;
}
export interface IPage_SmsSendStatus_ {
    current?: number;
    pages?: number;
    records?: SmsSendStatus[];
    size?: number;
    total?: number;
}
export interface IPage_SmsTask_ {
    current?: number;
    pages?: number;
    records?: SmsTask[];
    size?: number;
    total?: number;
}
export interface IPage_SmsTemplate_ {
    current?: number;
    pages?: number;
    records?: SmsTemplate[];
    size?: number;
    total?: number;
}
export interface Kv {
    key?: string;
    value?: string;
}
export interface Msg {
    // 发布人
    author?: string;
    // 业务ID
    bizId?: string;
    // 业务类型
    bizType?: string;
    // 内容
    content?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 处理参数
    handlerParams?: string;
    // 处理地址
    handlerUrl?: string;
    // 主键
    id?: number;
    // 是否单人处理
    isSingleHandle?: boolean;
    // 消息类型
    msgType?: string;
    // 标题
    title?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface MsgDTO {
    // 作者
    author?: string;
    // 业务ID
    bizId?: string;
    // 业务类型
    bizType?: string;
    // 内容
    content?: string;
    // 处理参数
    handlerParams?: string;
    // 处理地址
    handlerUrl?: string;
    // 是否单人处理
    isSingleHandle?: boolean;
    // 消息类型
    msgType?: string;
    // 标题
    title?: string;
}
export interface MsgPageResult {
    // 发布人
    author?: string;
    // 业务ID
    bizId?: string;
    // 业务类型
    bizType?: string;
    // 内容
    content?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 处理参数
    handlerParams?: string;
    // 处理地址
    handlerUrl?: string;
    // 主键
    id?: number;
    // 状态
    isRead?: boolean;
    // 是否单人处理
    isSingleHandle?: boolean;
    // 消息类型
    msgType?: string;
    // 读消息的时间
    readTime?: string;
    // 接收表id
    receiveId?: number;
    // 标题
    title?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface MsgQuery {
    // 作者
    author?: string;
    // 业务类型
    bizType?: string;
    // 内容
    content?: string;
    // 是否已读
    isRead?: boolean;
    // 消息类型
    msgType?: string;
    // 标题
    title?: string;
    // 接收人ID
    userId?: number;
}
export interface MsgSaveDTO {
    msgDTO?: MsgDTO;
    // 角色编码
    roleCodeList?: string[];
    // 接收人id集合
    userIdList?: number[];
}
export interface MyMsgResult {
    earlyWarningList?: IPage_MsgPageResult_;
    noticeList?: IPage_MsgPageResult_;
    notifyList?: IPage_MsgPageResult_;
    todoList?: IPage_MsgPageResult_;
}
export interface PageParams_MsgQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: MsgQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface PageParams_SmsSendStatusPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: SmsSendStatusPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface PageParams_SmsTaskPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: SmsTaskPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface PageParams_SmsTemplatePageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: SmsTemplatePageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}
export interface R_IPage_MsgPageResult__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_MsgPageResult_;
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
export interface R_IPage_Msg__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Msg_;
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
export interface R_IPage_SmsSendStatus__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_SmsSendStatus_;
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
export interface R_IPage_SmsTask__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_SmsTask_;
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
export interface R_IPage_SmsTemplate__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_SmsTemplate_;
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
export interface R_List_SmsSendStatus__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: SmsSendStatus[];
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
export interface R_List_SmsTask__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: SmsTask[];
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
export interface R_List_SmsTemplate__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: SmsTemplate[];
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
export interface R_Msg_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Msg;
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
export interface R_MyMsgResult_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: MyMsgResult;
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
export interface R_SmsSendStatus_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SmsSendStatus;
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
export interface R_SmsTask_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SmsTask_1;
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
export interface R_SmsTask__1 {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SmsTask;
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
export interface R_SmsTemplate_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SmsTemplate;
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
export interface SmsSendStatus {
    // 发送回执ID
    bizId?: string;
    // 状态码
    code?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 发送返回
    ext?: string;
    // 短信计费的条数
    fee?: number;
    // 主键
    id?: number;
    // 状态码的描述
    message?: string;
    // 发送状态
    sendStatus?: string;
    // 任务ID
    taskId?: number;
    // 接收者手机
    telNum?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface SmsSendStatusPageQuery {
    // 发送回执ID
    bizId?: string;
    // 状态码
    code?: string;
    // 发送返回
    ext?: string;
    // 短信计费的条数
    fee?: number;
    // 状态码的描述
    message?: string;
    // 发送状态
    sendStatus?: string[];
    // 任务ID
    taskId?: number;
    // 接收者手机
    telNum?: string;
}
export interface SmsTask {
    // 发送内容
    content?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 是否草稿
    draft?: boolean;
    echoMap?: any;
    // 主键
    id?: number;
    // 发送时间
    sendTime?: string;
    // 发送渠道
    sourceType?: string;
    // 执行状态
    status?: string;
    // 短信模板
    templateId?: number;
    // 参数
    templateParams?: string;
    // 主题
    topic?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface SmsTaskPageQuery {
    // 发送内容
    content?: string;
    // 是否草稿
    draft?: boolean;
    // 发送时间
    sendTime?: string;
    // 发送渠道
    sourceType?: string;
    // 执行状态
    status?: string;
    // 接收者手机
    telNum?: string;
    // 短信模板
    templateId?: number;
    // 参数
    templateParams?: string;
    // 主题
    topic?: string;
}
export interface SmsTaskSaveDTO {
    // 发送内容
    content?: string;
    // 是否草稿
    draft?: boolean;
    // 发送时间
    sendTime?: string;
    // 接收者手机
    telNum?: string[];
    // 短信模板
    templateId?: number;
    // 参数
    templateParam?: Kv[];
    // 主题
    topic?: string;
}
export interface SmsTaskUpdateDTO {
    // 发送内容
    content?: string;
    // 是否草稿
    draft?: boolean;
    // 主键
    id?: number;
    // 发送时间
    sendTime?: string;
    // 接收者手机
    telNum?: string[];
    // 短信模板
    templateId?: number;
    // 参数
    templateParam?: {
        [index: string]: string;
    };
    // 主题
    topic?: string;
}
export interface SmsTask_1 {
    // 发送内容
    content?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 是否草稿
    draft?: boolean;
    echoMap?: any;
    // 主键
    id?: number;
    // 发送时间
    sendTime?: string;
    // 发送渠道
    sourceType?: string;
    // 执行状态
    status?: string;
    telNumList?: string[];
    // 短信模板
    templateId?: number;
    // 参数
    templateParams?: string;
    // 主题
    topic?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}
export interface SmsTemplate {
    // 应用ID
    appId?: string;
    // 应用密码
    appSecret?: string;
    // 模板内容
    content?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 主键
    id?: number;
    // 模板名称
    name?: string;
    // 供应商类型
    providerType?: string;
    // 签名
    signName?: string;
    // 模板编码
    templateCode?: string;
    // 备注
    templateDescribe?: string;
    // 模板参数
    templateParams?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // SMS服务域名
    url?: string;
}
export interface SmsTemplatePageQuery {
    // 应用ID
    appId?: string;
    // 应用密码
    appSecret?: string;
    // 模板内容
    content?: string;
    // 模板名称
    name?: string;
    // 供应商类型
    providerType?: string;
    // 签名
    signName?: string;
    // 模板编码
    templateCode?: string;
    // 备注
    templateDescribe?: string;
    // 模板参数
    templateParams?: string;
    // SMS服务域名
    url?: string;
}
export interface SmsTemplateSaveDTO {
    // 应用ID
    appId?: string;
    // 应用密码
    appSecret?: string;
    // 模板内容
    content?: string;
    // 模板名称
    name?: string;
    // 供应商类型
    providerType?: string;
    // 签名
    signName?: string;
    // 模板编码
    templateCode?: string;
    // 备注
    templateDescribe?: string;
    // SMS服务域名
    url?: string;
}
export interface SmsTemplateUpdateDTO {
    // 应用ID
    appId?: string;
    // 应用密码
    appSecret?: string;
    // 模板内容
    content?: string;
    // 主键
    id?: number;
    // 模板名称
    name?: string;
    // 供应商类型
    providerType?: string;
    // 签名
    signName?: string;
    // 模板编码
    templateCode?: string;
    // 备注
    templateDescribe?: string;
    // SMS服务域名
    url?: string;
}
export interface VerificationCodeDTO {
    // 验证码
    code?: string;
    // 手机号
    mobile?: string;
    // 类型
    type?: string;
}