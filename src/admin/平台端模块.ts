export interface IPage_Order_ {
    current?: number;
    pages?: number;
    records?: Order[];
    size?: number;
    total?: number;
}

export interface Merchant {
    // 登录用户名称
    account?: string;
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户名称
    merchantName?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 登录密码
    password?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 商户状态;
    state?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 用户id;关联用户表
    userId?: number;
}

/**
 * @description: 订单
 */
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

/**
 * @description: 订单
 */
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

/**
 * @description: 订单
 */
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

/**
 * @description: 订单
 */
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

/**
 * @description: 分页参数
 */
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

export type TBodyOfapproveUsingPOST = Merchant;
export type TResponseOfapproveUsingPOST = R_boolean_;
export type TBodyOfsaveUsingPOST_4 = OrderSaveDTO;
export type TResponseOfsaveUsingPOST_4 = R_Order_;
export type TBodyOfupdateUsingPUT_4 = OrderUpdateDTO;
export type TResponseOfupdateUsingPUT_4 = R_Order_;
export type TBodyOfdeleteUsingDELETE_5 = number[];
export type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_4 = Order;
export type TResponseOfupdateAllUsingPUT_4 = R_Order_;
export type TBodyOfexportExcelUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfexportExcelUsingPOST_5 = any;
export interface TFormDataOfimportExcelUsingPOST_5 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
export type TBodyOfpageUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfpageUsingPOST_5 = R_IPage_Order__;
export type TBodyOfpreviewUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfpreviewUsingPOST_5 = R_string_;
export type TResponseOfqueryUsingGET = R_string_;
export type TBodyOfqueryUsingPOST_4 = Order;
export type TResponseOfqueryUsingPOST_4 = R_List_Order__;
export interface TPathOfgetUsingGET_5 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_5 = R_Order_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/admin/merchant/approve"): {
    /**
     * @description 商户审核 approveUsingPOST
     * 平台商户
     */
    post(options: { body: TBodyOfapproveUsingPOST }): Promise<TResponseOfapproveUsingPOST>;
  };
  (url: "/order"): {
    /**
     * @description 新增 saveUsingPOST_4
     * 订单
     */
    post(options: { body: TBodyOfsaveUsingPOST_4 }): Promise<TResponseOfsaveUsingPOST_4>;

    /**
     * @description 修改 updateUsingPUT_4
     * 订单
     */
    put(options: { body: TBodyOfupdateUsingPUT_4 }): Promise<TResponseOfupdateUsingPUT_4>;

    /**
     * @description 删除 deleteUsingDELETE_5
     * 订单
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_5 }): Promise<TResponseOfdeleteUsingDELETE_5>;
  };
  (url: "/order/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_4
     * 订单
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_4 }): Promise<TResponseOfupdateAllUsingPUT_4>;
  };
  (url: "/order/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_5
     * 订单
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_5;
    }): Promise<TResponseOfexportExcelUsingPOST_5>;
  };
  (url: "/order/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_5
     * 订单
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_5;
    }): Promise<TResponseOfimportExcelUsingPOST_5>;
  };
  (url: "/order/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_5
     * 订单
     */
    post(options: { body: TBodyOfpageUsingPOST_5 }): Promise<TResponseOfpageUsingPOST_5>;
  };
  (url: "/order/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_5
     * 订单
     */
    post(options: { body: TBodyOfpreviewUsingPOST_5 }): Promise<TResponseOfpreviewUsingPOST_5>;
  };
  (url: "/order/query"): {
    /**
     * @description query queryUsingGET
     * 订单
     */
    get(options: {}): Promise<TResponseOfqueryUsingGET>;

    /**
     * @description 批量查询 queryUsingPOST_4
     * 订单
     */
    post(options: { body: TBodyOfqueryUsingPOST_4 }): Promise<TResponseOfqueryUsingPOST_4>;
  };
  (url: "/order/{id}"): {
    /**
     * @description 单体查询 getUsingGET_5
     * 订单
     */
    get(options: { path: TPathOfgetUsingGET_5 }): Promise<TResponseOfgetUsingGET_5>;
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
