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

/**
 * @description: 消息表
 */
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

/**
 * @description: 消息中心
 */
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

/**
 * @description: 消息分页返回
 */
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

/**
 * @description: 消息分页参数
 */
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

/**
 * @description: 消息中心
 */
export interface MsgSaveDTO {
    msgDTO?: MsgDTO;
    // 角色编码
    roleCodeList?: string[];
    // 接收人id集合
    userIdList?: number[];
}

/**
 * @description: 我的消息
 */
export interface MyMsgResult {
    earlyWarningList?: IPage_MsgPageResult_;
    noticeList?: IPage_MsgPageResult_;
    notifyList?: IPage_MsgPageResult_;
    todoList?: IPage_MsgPageResult_;
}

/**
 * @description: 分页参数
 */
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

/**
 * @description: 分页参数
 */
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

/**
 * @description: 分页参数
 */
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

/**
 * @description: 分页参数
 */
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

/**
 * @description: 短信发送状态
 */
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

/**
 * @description: 短信发送状态
 */
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

/**
 * @description: 发送任务
 */
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

/**
 * @description: 发送任务
 */
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

/**
 * @description: 发送任务
 */
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

/**
 * @description: 发送任务
 */
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

/**
 * @description: 发送任务
 */
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

/**
 * @description: 短信模板
 */
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

/**
 * @description: 短信模板
 */
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

/**
 * @description: 短信模板
 */
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

/**
 * @description: 短信模板
 */
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

/**
 * @description: 验证码发送验证DTO
 */
export interface VerificationCodeDTO {
    // 验证码
    code?: string;
    // 手机号
    mobile?: string;
    // 类型
    type?: string;
}

export type TBodyOfmyMsgUsingPOST = PageParams_MsgQuery_;
export type TResponseOfmyMsgUsingPOST = R_MyMsgResult_;
export type TBodyOfmarkUsingPOST = number[];
export type TResponseOfmarkUsingPOST = R_boolean_;
export type TBodyOfpageUsingPOST_15 = PageParams_MsgQuery_;
export type TResponseOfpageUsingPOST_15 = R_IPage_MsgPageResult__;
export type TBodyOfsaveUsingPOST_11 = MsgSaveDTO;
export type TResponseOfsaveUsingPOST_11 = R_Msg_;
export type TBodyOfdeleteUsingDELETE_14 = number[];
export type TResponseOfdeleteUsingDELETE_14 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_12 = PageParams_MsgQuery_;
export type TResponseOfexportExcelUsingPOST_12 = any;
export type TBodyOfpageUsingPOST_14 = PageParams_MsgQuery_;
export type TResponseOfpageUsingPOST_14 = R_IPage_Msg__;
export type TBodyOfpreviewUsingPOST_12 = PageParams_MsgQuery_;
export type TResponseOfpreviewUsingPOST_12 = R_string_;
export interface TPathOfgetUsingGET_13 {
    // id
    id: number;
}
export type TResponseOfgetUsingGET_13 = R_Msg_;
export type TBodyOfpageUsingPOST_16 = PageParams_SmsSendStatusPageQuery_;
export type TResponseOfpageUsingPOST_16 = R_IPage_SmsSendStatus__;
export type TBodyOfqueryUsingPOST_12 = SmsSendStatus;
export type TResponseOfqueryUsingPOST_12 = R_List_SmsSendStatus__;
export interface TPathOfgetUsingGET_14 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_14 = R_SmsSendStatus_;
export type TBodyOfsaveUsingPOST_12 = SmsTaskSaveDTO;
export type TResponseOfsaveUsingPOST_12 = R_SmsTask__1;
export type TBodyOfupdateUsingPUT_11 = SmsTaskUpdateDTO;
export type TResponseOfupdateUsingPUT_11 = R_SmsTask__1;
export type TBodyOfdeleteUsingDELETE_15 = number[];
export type TResponseOfdeleteUsingDELETE_15 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_11 = SmsTask;
export type TResponseOfupdateAllUsingPUT_11 = R_SmsTask__1;
export interface TPathOfdetailUsingGET {
    // 主键
    id?: number;
}
export type TResponseOfdetailUsingGET = R_SmsTask_;
export type TBodyOfexportExcelUsingPOST_13 = PageParams_SmsTaskPageQuery_;
export type TResponseOfexportExcelUsingPOST_13 = any;
export interface TFormDataOfimportExcelUsingPOST_12 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_12 = R_boolean_;
export type TBodyOfpageUsingPOST_17 = PageParams_SmsTaskPageQuery_;
export type TResponseOfpageUsingPOST_17 = R_IPage_SmsTask__;
export type TBodyOfpreviewUsingPOST_13 = PageParams_SmsTaskPageQuery_;
export type TResponseOfpreviewUsingPOST_13 = R_string_;
export type TBodyOfqueryUsingPOST_13 = SmsTask;
export type TResponseOfqueryUsingPOST_13 = R_List_SmsTask__;
export interface TPathOfgetUsingGET_15 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_15 = R_SmsTask__1;
export type TBodyOfsaveUsingPOST_13 = SmsTemplateSaveDTO;
export type TResponseOfsaveUsingPOST_13 = R_SmsTemplate_;
export type TBodyOfupdateUsingPUT_12 = SmsTemplateUpdateDTO;
export type TResponseOfupdateUsingPUT_12 = R_SmsTemplate_;
export type TBodyOfdeleteUsingDELETE_16 = number[];
export type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_12 = SmsTemplate;
export type TResponseOfupdateAllUsingPUT_12 = R_SmsTemplate_;
export type TBodyOfexportExcelUsingPOST_14 = PageParams_SmsTemplatePageQuery_;
export type TResponseOfexportExcelUsingPOST_14 = any;
export interface TFormDataOfimportExcelUsingPOST_13 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_13 = R_boolean_;
export type TBodyOfpageUsingPOST_18 = PageParams_SmsTemplatePageQuery_;
export type TResponseOfpageUsingPOST_18 = R_IPage_SmsTemplate__;
export type TBodyOfpreviewUsingPOST_14 = PageParams_SmsTemplatePageQuery_;
export type TResponseOfpreviewUsingPOST_14 = R_string_;
export type TBodyOfqueryUsingPOST_14 = SmsTemplate;
export type TResponseOfqueryUsingPOST_14 = R_List_SmsTemplate__;
export interface TPathOfgetUsingGET_16 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_16 = R_SmsTemplate_;
export type TBodyOfverificationUsingPOST = VerificationCodeDTO;
export type TResponseOfverificationUsingPOST = R_boolean_;
export type TBodyOfsendUsingPOST = VerificationCodeDTO;
export type TResponseOfsendUsingPOST = R_boolean_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/anyone/myMsg"): {
    /**
     * @description 全量查询我的消息 myMsgUsingPOST
     * 我的消息
     */
    post(options: { body: TBodyOfmyMsgUsingPOST }): Promise<TResponseOfmyMsgUsingPOST>;
  };
  (url: "/anyone/myMsg/mark"): {
    /**
     * @description 标记消息为已读 markUsingPOST
     * 我的消息
     */
    post(options: { body: TBodyOfmarkUsingPOST }): Promise<TResponseOfmarkUsingPOST>;
  };
  (url: "/anyone/myMsg/page"): {
    /**
     * @description 分页查询我的消息 pageUsingPOST_15
     * 我的消息
     */
    post(options: { body: TBodyOfpageUsingPOST_15 }): Promise<TResponseOfpageUsingPOST_15>;
  };
  (url: "/msg"): {
    /**
     * @description 新增消息中心 saveUsingPOST_11
     * 消息中心
     */
    post(options: { body: TBodyOfsaveUsingPOST_11 }): Promise<TResponseOfsaveUsingPOST_11>;

    /**
     * @description 删除消息 deleteUsingDELETE_14
     * 消息中心
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_14;
    }): Promise<TResponseOfdeleteUsingDELETE_14>;
  };
  (url: "/msg/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_12
     * 消息中心
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_12;
    }): Promise<TResponseOfexportExcelUsingPOST_12>;
  };
  (url: "/msg/page"): {
    /**
     * @description 分页查询消息中心 pageUsingPOST_14
     * 消息中心
     */
    post(options: { body: TBodyOfpageUsingPOST_14 }): Promise<TResponseOfpageUsingPOST_14>;
  };
  (url: "/msg/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_12
     * 消息中心
     */
    post(options: { body: TBodyOfpreviewUsingPOST_12 }): Promise<TResponseOfpreviewUsingPOST_12>;
  };
  (url: "/msg/{id}"): {
    /**
     * @description 查询消息中心 getUsingGET_13
     * 消息中心
     */
    get(options: { path: TPathOfgetUsingGET_13 }): Promise<TResponseOfgetUsingGET_13>;
  };
  (url: "/smsSendStatus/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_16
     * 短信发送状态
     */
    post(options: { body: TBodyOfpageUsingPOST_16 }): Promise<TResponseOfpageUsingPOST_16>;
  };
  (url: "/smsSendStatus/query"): {
    /**
     * @description 批量查询 queryUsingPOST_12
     * 短信发送状态
     */
    post(options: { body: TBodyOfqueryUsingPOST_12 }): Promise<TResponseOfqueryUsingPOST_12>;
  };
  (url: "/smsSendStatus/{id}"): {
    /**
     * @description 单体查询 getUsingGET_14
     * 短信发送状态
     */
    get(options: { path: TPathOfgetUsingGET_14 }): Promise<TResponseOfgetUsingGET_14>;
  };
  (url: "/smsTask"): {
    /**
     * @description 新增 saveUsingPOST_12
     * 短信发送
     */
    post(options: { body: TBodyOfsaveUsingPOST_12 }): Promise<TResponseOfsaveUsingPOST_12>;

    /**
     * @description 修改 updateUsingPUT_11
     * 短信发送
     */
    put(options: { body: TBodyOfupdateUsingPUT_11 }): Promise<TResponseOfupdateUsingPUT_11>;

    /**
     * @description 删除 deleteUsingDELETE_15
     * 短信发送
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_15;
    }): Promise<TResponseOfdeleteUsingDELETE_15>;
  };
  (url: "/smsTask/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_11
     * 短信发送
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_11 }): Promise<TResponseOfupdateAllUsingPUT_11>;
  };
  (url: "/smsTask/detail/{id}"): {
    /**
     * @description 详情 detailUsingGET
     * 短信发送
     */
    get(options: { path: TPathOfdetailUsingGET }): Promise<TResponseOfdetailUsingGET>;
  };
  (url: "/smsTask/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_13
     * 短信发送
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_13;
    }): Promise<TResponseOfexportExcelUsingPOST_13>;
  };
  (url: "/smsTask/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_12
     * 短信发送
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_12;
    }): Promise<TResponseOfimportExcelUsingPOST_12>;
  };
  (url: "/smsTask/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_17
     * 短信发送
     */
    post(options: { body: TBodyOfpageUsingPOST_17 }): Promise<TResponseOfpageUsingPOST_17>;
  };
  (url: "/smsTask/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_13
     * 短信发送
     */
    post(options: { body: TBodyOfpreviewUsingPOST_13 }): Promise<TResponseOfpreviewUsingPOST_13>;
  };
  (url: "/smsTask/query"): {
    /**
     * @description 批量查询 queryUsingPOST_13
     * 短信发送
     */
    post(options: { body: TBodyOfqueryUsingPOST_13 }): Promise<TResponseOfqueryUsingPOST_13>;
  };
  (url: "/smsTask/{id}"): {
    /**
     * @description 单体查询 getUsingGET_15
     * 短信发送
     */
    get(options: { path: TPathOfgetUsingGET_15 }): Promise<TResponseOfgetUsingGET_15>;
  };
  (url: "/smsTemplate"): {
    /**
     * @description 新增 saveUsingPOST_13
     * 短信模板
     */
    post(options: { body: TBodyOfsaveUsingPOST_13 }): Promise<TResponseOfsaveUsingPOST_13>;

    /**
     * @description 修改 updateUsingPUT_12
     * 短信模板
     */
    put(options: { body: TBodyOfupdateUsingPUT_12 }): Promise<TResponseOfupdateUsingPUT_12>;

    /**
     * @description 删除 deleteUsingDELETE_16
     * 短信模板
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_16;
    }): Promise<TResponseOfdeleteUsingDELETE_16>;
  };
  (url: "/smsTemplate/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_12
     * 短信模板
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_12 }): Promise<TResponseOfupdateAllUsingPUT_12>;
  };
  (url: "/smsTemplate/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_14
     * 短信模板
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_14;
    }): Promise<TResponseOfexportExcelUsingPOST_14>;
  };
  (url: "/smsTemplate/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_13
     * 短信模板
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_13;
    }): Promise<TResponseOfimportExcelUsingPOST_13>;
  };
  (url: "/smsTemplate/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_18
     * 短信模板
     */
    post(options: { body: TBodyOfpageUsingPOST_18 }): Promise<TResponseOfpageUsingPOST_18>;
  };
  (url: "/smsTemplate/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_14
     * 短信模板
     */
    post(options: { body: TBodyOfpreviewUsingPOST_14 }): Promise<TResponseOfpreviewUsingPOST_14>;
  };
  (url: "/smsTemplate/query"): {
    /**
     * @description 批量查询 queryUsingPOST_14
     * 短信模板
     */
    post(options: { body: TBodyOfqueryUsingPOST_14 }): Promise<TResponseOfqueryUsingPOST_14>;
  };
  (url: "/smsTemplate/{id}"): {
    /**
     * @description 单体查询 getUsingGET_16
     * 短信模板
     */
    get(options: { path: TPathOfgetUsingGET_16 }): Promise<TResponseOfgetUsingGET_16>;
  };
  (url: "/verification"): {
    /**
     * @description 验证验证码 verificationUsingPOST
     * 验证码
     */
    post(options: {
      body: TBodyOfverificationUsingPOST;
    }): Promise<TResponseOfverificationUsingPOST>;
  };
  (url: "/verification/send"): {
    /**
     * @description 发送验证码 sendUsingPOST
     * 验证码
     */
    post(options: { body: TBodyOfsendUsingPOST }): Promise<TResponseOfsendUsingPOST>;
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
