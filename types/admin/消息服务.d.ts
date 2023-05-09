interface IPage_MsgPageResult_ {
    current?: number;
    pages?: number;
    records?: MsgPageResult[];
    size?: number;
    total?: number;
}
interface IPage_Msg_ {
    current?: number;
    pages?: number;
    records?: Msg[];
    size?: number;
    total?: number;
}
interface IPage_SmsSendStatus_ {
    current?: number;
    pages?: number;
    records?: SmsSendStatus[];
    size?: number;
    total?: number;
}
interface IPage_SmsTask_ {
    current?: number;
    pages?: number;
    records?: SmsTask[];
    size?: number;
    total?: number;
}
interface IPage_SmsTemplate_ {
    current?: number;
    pages?: number;
    records?: SmsTemplate[];
    size?: number;
    total?: number;
}
interface Kv {
    key?: string;
    value?: string;
}
/**
 * @description: 消息表
 */
interface Msg {
    author?: string;
    bizId?: string;
    bizType?: string;
    content?: string;
    createTime?: string;
    createdBy?: number;
    handlerParams?: string;
    handlerUrl?: string;
    id?: number;
    isSingleHandle?: boolean;
    msgType?: string;
    title?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 消息中心
 */
interface MsgDTO {
    author?: string;
    bizId?: string;
    bizType?: string;
    content?: string;
    handlerParams?: string;
    handlerUrl?: string;
    isSingleHandle?: boolean;
    msgType?: string;
    title?: string;
}
/**
 * @description: 消息分页返回
 */
interface MsgPageResult {
    author?: string;
    bizId?: string;
    bizType?: string;
    content?: string;
    createTime?: string;
    createdBy?: number;
    handlerParams?: string;
    handlerUrl?: string;
    id?: number;
    isRead?: boolean;
    isSingleHandle?: boolean;
    msgType?: string;
    readTime?: string;
    receiveId?: number;
    title?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 消息分页参数
 */
interface MsgQuery {
    author?: string;
    bizType?: string;
    content?: string;
    isRead?: boolean;
    msgType?: string;
    title?: string;
    userId?: number;
}
/**
 * @description: 消息中心
 */
interface MsgSaveDTO {
    msgDTO?: MsgDTO;
    roleCodeList?: string[];
    userIdList?: number[];
}
/**
 * @description: 我的消息
 */
interface MyMsgResult {
    earlyWarningList?: IPage_MsgPageResult_;
    noticeList?: IPage_MsgPageResult_;
    notifyList?: IPage_MsgPageResult_;
    todoList?: IPage_MsgPageResult_;
}
/**
 * @description: 分页参数
 */
interface PageParams_MsgQuery_ {
    current?: number;
    extra?: any;
    model: MsgQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_SmsSendStatusPageQuery_ {
    current?: number;
    extra?: any;
    model: SmsSendStatusPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_SmsTaskPageQuery_ {
    current?: number;
    extra?: any;
    model: SmsTaskPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_SmsTemplatePageQuery_ {
    current?: number;
    extra?: any;
    model: SmsTemplatePageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_MsgPageResult__ {
    code?: number;
    data?: IPage_MsgPageResult_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Msg__ {
    code?: number;
    data?: IPage_Msg_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_SmsSendStatus__ {
    code?: number;
    data?: IPage_SmsSendStatus_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_SmsTask__ {
    code?: number;
    data?: IPage_SmsTask_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_SmsTemplate__ {
    code?: number;
    data?: IPage_SmsTemplate_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_SmsSendStatus__ {
    code?: number;
    data?: SmsSendStatus[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_SmsTask__ {
    code?: number;
    data?: SmsTask[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_SmsTemplate__ {
    code?: number;
    data?: SmsTemplate[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Msg_ {
    code?: number;
    data?: Msg;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_MyMsgResult_ {
    code?: number;
    data?: MyMsgResult;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SmsSendStatus_ {
    code?: number;
    data?: SmsSendStatus;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SmsTask_ {
    code?: number;
    data?: SmsTask_1;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SmsTask__1 {
    code?: number;
    data?: SmsTask;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SmsTemplate_ {
    code?: number;
    data?: SmsTemplate;
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
 * @description: 短信发送状态
 */
interface SmsSendStatus {
    bizId?: string;
    code?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    ext?: string;
    fee?: number;
    id?: number;
    message?: string;
    sendStatus?: string;
    taskId?: number;
    telNum?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 短信发送状态
 */
interface SmsSendStatusPageQuery {
    bizId?: string;
    code?: string;
    ext?: string;
    fee?: number;
    message?: string;
    sendStatus?: string[];
    taskId?: number;
    telNum?: string;
}
/**
 * @description: 发送任务
 */
interface SmsTask {
    content?: string;
    createTime?: string;
    createdBy?: number;
    draft?: boolean;
    echoMap?: any;
    id?: number;
    sendTime?: string;
    sourceType?: string;
    status?: string;
    templateId?: number;
    templateParams?: string;
    topic?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 发送任务
 */
interface SmsTaskPageQuery {
    content?: string;
    draft?: boolean;
    sendTime?: string;
    sourceType?: string;
    status?: string;
    telNum?: string;
    templateId?: number;
    templateParams?: string;
    topic?: string;
}
/**
 * @description: 发送任务
 */
interface SmsTaskSaveDTO {
    content?: string;
    draft?: boolean;
    sendTime?: string;
    telNum?: string[];
    templateId?: number;
    templateParam?: Kv[];
    topic?: string;
}
/**
 * @description: 发送任务
 */
interface SmsTaskUpdateDTO {
    content?: string;
    draft?: boolean;
    id?: number;
    sendTime?: string;
    telNum?: string[];
    templateId?: number;
    templateParam?: {
        [index: string]: string;
    };
    topic?: string;
}
/**
 * @description: 发送任务
 */
interface SmsTask_1 {
    content?: string;
    createTime?: string;
    createdBy?: number;
    draft?: boolean;
    echoMap?: any;
    id?: number;
    sendTime?: string;
    sourceType?: string;
    status?: string;
    telNumList?: string[];
    templateId?: number;
    templateParams?: string;
    topic?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 短信模板
 */
interface SmsTemplate {
    appId?: string;
    appSecret?: string;
    content?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    id?: number;
    name?: string;
    providerType?: string;
    signName?: string;
    templateCode?: string;
    templateDescribe?: string;
    templateParams?: string;
    updateTime?: string;
    updatedBy?: number;
    url?: string;
}
/**
 * @description: 短信模板
 */
interface SmsTemplatePageQuery {
    appId?: string;
    appSecret?: string;
    content?: string;
    name?: string;
    providerType?: string;
    signName?: string;
    templateCode?: string;
    templateDescribe?: string;
    templateParams?: string;
    url?: string;
}
/**
 * @description: 短信模板
 */
interface SmsTemplateSaveDTO {
    appId?: string;
    appSecret?: string;
    content?: string;
    name?: string;
    providerType?: string;
    signName?: string;
    templateCode?: string;
    templateDescribe?: string;
    url?: string;
}
/**
 * @description: 短信模板
 */
interface SmsTemplateUpdateDTO {
    appId?: string;
    appSecret?: string;
    content?: string;
    id?: number;
    name?: string;
    providerType?: string;
    signName?: string;
    templateCode?: string;
    templateDescribe?: string;
    url?: string;
}
/**
 * @description: 验证码发送验证DTO
 */
interface VerificationCodeDTO {
    code?: string;
    mobile?: string;
    type?: string;
}
type TBodyOfmyMsgUsingPOST = PageParams_MsgQuery_;
type TResponseOfmyMsgUsingPOST = R_MyMsgResult_;
type TBodyOfmarkUsingPOST = number[];
type TResponseOfmarkUsingPOST = R_boolean_;
type TBodyOfpageUsingPOST_15 = PageParams_MsgQuery_;
type TResponseOfpageUsingPOST_15 = R_IPage_MsgPageResult__;
type TBodyOfsaveUsingPOST_11 = MsgSaveDTO;
type TResponseOfsaveUsingPOST_11 = R_Msg_;
type TBodyOfdeleteUsingDELETE_14 = number[];
type TResponseOfdeleteUsingDELETE_14 = R_boolean_;
type TBodyOfexportExcelUsingPOST_12 = PageParams_MsgQuery_;
type TResponseOfexportExcelUsingPOST_12 = any;
type TBodyOfpageUsingPOST_14 = PageParams_MsgQuery_;
type TResponseOfpageUsingPOST_14 = R_IPage_Msg__;
type TBodyOfpreviewUsingPOST_12 = PageParams_MsgQuery_;
type TResponseOfpreviewUsingPOST_12 = R_string_;
interface TPathOfgetUsingGET_13 {
    id: number;
}
type TResponseOfgetUsingGET_13 = R_Msg_;
type TBodyOfpageUsingPOST_16 = PageParams_SmsSendStatusPageQuery_;
type TResponseOfpageUsingPOST_16 = R_IPage_SmsSendStatus__;
type TBodyOfqueryUsingPOST_12 = SmsSendStatus;
type TResponseOfqueryUsingPOST_12 = R_List_SmsSendStatus__;
interface TPathOfgetUsingGET_14 {
    id?: number;
}
type TResponseOfgetUsingGET_14 = R_SmsSendStatus_;
type TBodyOfsaveUsingPOST_12 = SmsTaskSaveDTO;
type TResponseOfsaveUsingPOST_12 = R_SmsTask__1;
type TBodyOfupdateUsingPUT_11 = SmsTaskUpdateDTO;
type TResponseOfupdateUsingPUT_11 = R_SmsTask__1;
type TBodyOfdeleteUsingDELETE_15 = number[];
type TResponseOfdeleteUsingDELETE_15 = R_boolean_;
type TBodyOfupdateAllUsingPUT_11 = SmsTask;
type TResponseOfupdateAllUsingPUT_11 = R_SmsTask__1;
interface TPathOfdetailUsingGET {
    id?: number;
}
type TResponseOfdetailUsingGET = R_SmsTask_;
type TBodyOfexportExcelUsingPOST_13 = PageParams_SmsTaskPageQuery_;
type TResponseOfexportExcelUsingPOST_13 = any;
interface TFormDataOfimportExcelUsingPOST_12 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_12 = R_boolean_;
type TBodyOfpageUsingPOST_17 = PageParams_SmsTaskPageQuery_;
type TResponseOfpageUsingPOST_17 = R_IPage_SmsTask__;
type TBodyOfpreviewUsingPOST_13 = PageParams_SmsTaskPageQuery_;
type TResponseOfpreviewUsingPOST_13 = R_string_;
type TBodyOfqueryUsingPOST_13 = SmsTask;
type TResponseOfqueryUsingPOST_13 = R_List_SmsTask__;
interface TPathOfgetUsingGET_15 {
    id?: number;
}
type TResponseOfgetUsingGET_15 = R_SmsTask__1;
type TBodyOfsaveUsingPOST_13 = SmsTemplateSaveDTO;
type TResponseOfsaveUsingPOST_13 = R_SmsTemplate_;
type TBodyOfupdateUsingPUT_12 = SmsTemplateUpdateDTO;
type TResponseOfupdateUsingPUT_12 = R_SmsTemplate_;
type TBodyOfdeleteUsingDELETE_16 = number[];
type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
type TBodyOfupdateAllUsingPUT_12 = SmsTemplate;
type TResponseOfupdateAllUsingPUT_12 = R_SmsTemplate_;
type TBodyOfexportExcelUsingPOST_14 = PageParams_SmsTemplatePageQuery_;
type TResponseOfexportExcelUsingPOST_14 = any;
interface TFormDataOfimportExcelUsingPOST_13 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_13 = R_boolean_;
type TBodyOfpageUsingPOST_18 = PageParams_SmsTemplatePageQuery_;
type TResponseOfpageUsingPOST_18 = R_IPage_SmsTemplate__;
type TBodyOfpreviewUsingPOST_14 = PageParams_SmsTemplatePageQuery_;
type TResponseOfpreviewUsingPOST_14 = R_string_;
type TBodyOfqueryUsingPOST_14 = SmsTemplate;
type TResponseOfqueryUsingPOST_14 = R_List_SmsTemplate__;
interface TPathOfgetUsingGET_16 {
    id?: number;
}
type TResponseOfgetUsingGET_16 = R_SmsTemplate_;
type TBodyOfverificationUsingPOST = VerificationCodeDTO;
type TResponseOfverificationUsingPOST = R_boolean_;
type TBodyOfsendUsingPOST = VerificationCodeDTO;
type TResponseOfsendUsingPOST = R_boolean_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/anyone/myMsg"): {
        /**
         * @description 全量查询我的消息
         * @see [Swagger doc: 全量查询我的消息](http://120.79.250.86:8760/doc.html#/消息服务/我的消息/myMsgUsingPOST)
         *
         * @tag我的消息
         */
        post(options: {
            body: TBodyOfmyMsgUsingPOST;
        }): Promise<TResponseOfmyMsgUsingPOST>;
    };
    (url: "/anyone/myMsg/mark"): {
        /**
         * @description 标记消息为已读
         * @see [Swagger doc: 标记消息为已读](http://120.79.250.86:8760/doc.html#/消息服务/我的消息/markUsingPOST)
         *
         * @tag我的消息
         */
        post(options: {
            body: TBodyOfmarkUsingPOST;
        }): Promise<TResponseOfmarkUsingPOST>;
    };
    (url: "/anyone/myMsg/page"): {
        /**
         * @description 分页查询我的消息
         * @see [Swagger doc: 分页查询我的消息](http://120.79.250.86:8760/doc.html#/消息服务/我的消息/pageUsingPOST_15)
         *
         * @tag我的消息
         */
        post(options: {
            body: TBodyOfpageUsingPOST_15;
        }): Promise<TResponseOfpageUsingPOST_15>;
    };
    (url: "/msg"): {
        /**
         * @description 新增消息中心
         * @see [Swagger doc: 新增消息中心](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/saveUsingPOST_11)
         *
         * @tag消息中心
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_11;
        }): Promise<TResponseOfsaveUsingPOST_11>;
        /**
         * @description 删除消息
         * @see [Swagger doc: 删除消息](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/deleteUsingDELETE_14)
         *
         * @tag消息中心
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_14;
        }): Promise<TResponseOfdeleteUsingDELETE_14>;
    };
    (url: "/msg/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/exportExcelUsingPOST_12)
         *
         * @tag消息中心
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_12;
        }): Promise<TResponseOfexportExcelUsingPOST_12>;
    };
    (url: "/msg/page"): {
        /**
         * @description 分页查询消息中心
         * @see [Swagger doc: 分页查询消息中心](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/pageUsingPOST_14)
         *
         * @tag消息中心
         */
        post(options: {
            body: TBodyOfpageUsingPOST_14;
        }): Promise<TResponseOfpageUsingPOST_14>;
    };
    (url: "/msg/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/previewUsingPOST_12)
         *
         * @tag消息中心
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_12;
        }): Promise<TResponseOfpreviewUsingPOST_12>;
    };
    (url: "/msg/{id}"): {
        /**
         * @description 查询消息中心
         * @see [Swagger doc: 查询消息中心](http://120.79.250.86:8760/doc.html#/消息服务/消息中心/getUsingGET_13)
         *
         * @tag消息中心
         */
        get(options: {
            path: TPathOfgetUsingGET_13;
        }): Promise<TResponseOfgetUsingGET_13>;
    };
    (url: "/smsSendStatus/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送状态/pageUsingPOST_16)
         *
         * @tag短信发送状态
         */
        post(options: {
            body: TBodyOfpageUsingPOST_16;
        }): Promise<TResponseOfpageUsingPOST_16>;
    };
    (url: "/smsSendStatus/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送状态/queryUsingPOST_12)
         *
         * @tag短信发送状态
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_12;
        }): Promise<TResponseOfqueryUsingPOST_12>;
    };
    (url: "/smsSendStatus/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送状态/getUsingGET_14)
         *
         * @tag短信发送状态
         */
        get(options: {
            path: TPathOfgetUsingGET_14;
        }): Promise<TResponseOfgetUsingGET_14>;
    };
    (url: "/smsTask"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/saveUsingPOST_12)
         *
         * @tag短信发送
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_12;
        }): Promise<TResponseOfsaveUsingPOST_12>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/updateUsingPUT_11)
         *
         * @tag短信发送
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_11;
        }): Promise<TResponseOfupdateUsingPUT_11>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/deleteUsingDELETE_15)
         *
         * @tag短信发送
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_15;
        }): Promise<TResponseOfdeleteUsingDELETE_15>;
    };
    (url: "/smsTask/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/updateAllUsingPUT_11)
         *
         * @tag短信发送
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_11;
        }): Promise<TResponseOfupdateAllUsingPUT_11>;
    };
    (url: "/smsTask/detail/{id}"): {
        /**
         * @description 详情
         * @see [Swagger doc: 详情](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/detailUsingGET)
         *
         * @tag短信发送
         */
        get(options: {
            path: TPathOfdetailUsingGET;
        }): Promise<TResponseOfdetailUsingGET>;
    };
    (url: "/smsTask/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/exportExcelUsingPOST_13)
         *
         * @tag短信发送
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_13;
        }): Promise<TResponseOfexportExcelUsingPOST_13>;
    };
    (url: "/smsTask/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/importExcelUsingPOST_12)
         *
         * @tag短信发送
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_12;
        }): Promise<TResponseOfimportExcelUsingPOST_12>;
    };
    (url: "/smsTask/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/pageUsingPOST_17)
         *
         * @tag短信发送
         */
        post(options: {
            body: TBodyOfpageUsingPOST_17;
        }): Promise<TResponseOfpageUsingPOST_17>;
    };
    (url: "/smsTask/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/previewUsingPOST_13)
         *
         * @tag短信发送
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_13;
        }): Promise<TResponseOfpreviewUsingPOST_13>;
    };
    (url: "/smsTask/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/queryUsingPOST_13)
         *
         * @tag短信发送
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_13;
        }): Promise<TResponseOfqueryUsingPOST_13>;
    };
    (url: "/smsTask/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/消息服务/短信发送/getUsingGET_15)
         *
         * @tag短信发送
         */
        get(options: {
            path: TPathOfgetUsingGET_15;
        }): Promise<TResponseOfgetUsingGET_15>;
    };
    (url: "/smsTemplate"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/saveUsingPOST_13)
         *
         * @tag短信模板
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_13;
        }): Promise<TResponseOfsaveUsingPOST_13>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/updateUsingPUT_12)
         *
         * @tag短信模板
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_12;
        }): Promise<TResponseOfupdateUsingPUT_12>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/deleteUsingDELETE_16)
         *
         * @tag短信模板
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_16;
        }): Promise<TResponseOfdeleteUsingDELETE_16>;
    };
    (url: "/smsTemplate/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/updateAllUsingPUT_12)
         *
         * @tag短信模板
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_12;
        }): Promise<TResponseOfupdateAllUsingPUT_12>;
    };
    (url: "/smsTemplate/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/exportExcelUsingPOST_14)
         *
         * @tag短信模板
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_14;
        }): Promise<TResponseOfexportExcelUsingPOST_14>;
    };
    (url: "/smsTemplate/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/importExcelUsingPOST_13)
         *
         * @tag短信模板
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_13;
        }): Promise<TResponseOfimportExcelUsingPOST_13>;
    };
    (url: "/smsTemplate/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/pageUsingPOST_18)
         *
         * @tag短信模板
         */
        post(options: {
            body: TBodyOfpageUsingPOST_18;
        }): Promise<TResponseOfpageUsingPOST_18>;
    };
    (url: "/smsTemplate/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/previewUsingPOST_14)
         *
         * @tag短信模板
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_14;
        }): Promise<TResponseOfpreviewUsingPOST_14>;
    };
    (url: "/smsTemplate/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/queryUsingPOST_14)
         *
         * @tag短信模板
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_14;
        }): Promise<TResponseOfqueryUsingPOST_14>;
    };
    (url: "/smsTemplate/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/消息服务/短信模板/getUsingGET_16)
         *
         * @tag短信模板
         */
        get(options: {
            path: TPathOfgetUsingGET_16;
        }): Promise<TResponseOfgetUsingGET_16>;
    };
    (url: "/verification"): {
        /**
         * @description 验证验证码
         * @see [Swagger doc: 验证验证码](http://120.79.250.86:8760/doc.html#/消息服务/验证码/verificationUsingPOST)
         *
         * @tag验证码
         */
        post(options: {
            body: TBodyOfverificationUsingPOST;
        }): Promise<TResponseOfverificationUsingPOST>;
    };
    (url: "/verification/send"): {
        /**
         * @description 发送验证码
         * @see [Swagger doc: 发送验证码](http://120.79.250.86:8760/doc.html#/消息服务/验证码/sendUsingPOST)
         *
         * @tag验证码
         */
        post(options: {
            body: TBodyOfsendUsingPOST;
        }): Promise<TResponseOfsendUsingPOST>;
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

export { IApiFn, IPage_MsgPageResult_, IPage_Msg_, IPage_SmsSendStatus_, IPage_SmsTask_, IPage_SmsTemplate_, Kv, Msg, MsgDTO, MsgPageResult, MsgQuery, MsgSaveDTO, MyMsgResult, PageParams_MsgQuery_, PageParams_SmsSendStatusPageQuery_, PageParams_SmsTaskPageQuery_, PageParams_SmsTemplatePageQuery_, R_IPage_MsgPageResult__, R_IPage_Msg__, R_IPage_SmsSendStatus__, R_IPage_SmsTask__, R_IPage_SmsTemplate__, R_List_SmsSendStatus__, R_List_SmsTask__, R_List_SmsTemplate__, R_Msg_, R_MyMsgResult_, R_SmsSendStatus_, R_SmsTask_, R_SmsTask__1, R_SmsTemplate_, R_boolean_, R_string_, RequestProvider, SmsSendStatus, SmsSendStatusPageQuery, SmsTask, SmsTaskPageQuery, SmsTaskSaveDTO, SmsTaskUpdateDTO, SmsTask_1, SmsTemplate, SmsTemplatePageQuery, SmsTemplateSaveDTO, SmsTemplateUpdateDTO, TBodyOfdeleteUsingDELETE_14, TBodyOfdeleteUsingDELETE_15, TBodyOfdeleteUsingDELETE_16, TBodyOfexportExcelUsingPOST_12, TBodyOfexportExcelUsingPOST_13, TBodyOfexportExcelUsingPOST_14, TBodyOfmarkUsingPOST, TBodyOfmyMsgUsingPOST, TBodyOfpageUsingPOST_14, TBodyOfpageUsingPOST_15, TBodyOfpageUsingPOST_16, TBodyOfpageUsingPOST_17, TBodyOfpageUsingPOST_18, TBodyOfpreviewUsingPOST_12, TBodyOfpreviewUsingPOST_13, TBodyOfpreviewUsingPOST_14, TBodyOfqueryUsingPOST_12, TBodyOfqueryUsingPOST_13, TBodyOfqueryUsingPOST_14, TBodyOfsaveUsingPOST_11, TBodyOfsaveUsingPOST_12, TBodyOfsaveUsingPOST_13, TBodyOfsendUsingPOST, TBodyOfupdateAllUsingPUT_11, TBodyOfupdateAllUsingPUT_12, TBodyOfupdateUsingPUT_11, TBodyOfupdateUsingPUT_12, TBodyOfverificationUsingPOST, TFormDataOfimportExcelUsingPOST_12, TFormDataOfimportExcelUsingPOST_13, TPathOfdetailUsingGET, TPathOfgetUsingGET_13, TPathOfgetUsingGET_14, TPathOfgetUsingGET_15, TPathOfgetUsingGET_16, TResponseOfdeleteUsingDELETE_14, TResponseOfdeleteUsingDELETE_15, TResponseOfdeleteUsingDELETE_16, TResponseOfdetailUsingGET, TResponseOfexportExcelUsingPOST_12, TResponseOfexportExcelUsingPOST_13, TResponseOfexportExcelUsingPOST_14, TResponseOfgetUsingGET_13, TResponseOfgetUsingGET_14, TResponseOfgetUsingGET_15, TResponseOfgetUsingGET_16, TResponseOfimportExcelUsingPOST_12, TResponseOfimportExcelUsingPOST_13, TResponseOfmarkUsingPOST, TResponseOfmyMsgUsingPOST, TResponseOfpageUsingPOST_14, TResponseOfpageUsingPOST_15, TResponseOfpageUsingPOST_16, TResponseOfpageUsingPOST_17, TResponseOfpageUsingPOST_18, TResponseOfpreviewUsingPOST_12, TResponseOfpreviewUsingPOST_13, TResponseOfpreviewUsingPOST_14, TResponseOfqueryUsingPOST_12, TResponseOfqueryUsingPOST_13, TResponseOfqueryUsingPOST_14, TResponseOfsaveUsingPOST_11, TResponseOfsaveUsingPOST_12, TResponseOfsaveUsingPOST_13, TResponseOfsendUsingPOST, TResponseOfupdateAllUsingPUT_11, TResponseOfupdateAllUsingPUT_12, TResponseOfupdateUsingPUT_11, TResponseOfupdateUsingPUT_12, TResponseOfverificationUsingPOST, VerificationCodeDTO, createRequest };
