export interface IPage_Kpi_ {
    current?: number;
    pages?: number;
    records?: Kpi[];
    size?: number;
    total?: number;
}

/**
 * @description: 绩效目标
 */
export interface Kpi {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 员工id
    employeeId?: number;
    // 主键
    id?: number;
    // 商户id
    merchantId?: string;
    // 业绩月份
    month?: string;
    // 门店id
    storeId?: string;
    // 目标销售金额（订单金额）
    targetSale?: number;
    // 目标发展会员数
    targetVipNum?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 绩效目标
 */
export interface KpiPageQuery {
    // 创建时间
    createdTime?: string;
    // 员工id
    employeeId?: number;
    // 商户id
    merchantId?: string;
    // 业绩月份
    month?: string;
    // 门店id
    storeId?: string;
    // 目标销售金额（订单金额）
    targetSale?: number;
    // 目标发展会员数
    targetVipNum?: number;
}

/**
 * @description: 绩效目标
 */
export interface KpiSaveDTO {
    // 创建时间
    createdTime?: string;
    // 员工id
    employeeId?: number;
    // 商户id
    merchantId?: string;
    // 业绩月份
    month?: string;
    // 门店id
    storeId?: string;
    // 目标销售金额（订单金额）
    targetSale?: number;
    // 目标发展会员数
    targetVipNum?: number;
}

/**
 * @description: 绩效目标
 */
export interface KpiUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 员工id
    employeeId?: number;
    // 主键
    id?: number;
    // 商户id
    merchantId?: string;
    // 业绩月份
    month?: string;
    // 门店id
    storeId?: string;
    // 目标销售金额（订单金额）
    targetSale?: number;
    // 目标发展会员数
    targetVipNum?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_KpiPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: KpiPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_IPage_Kpi__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Kpi_;
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

export interface R_Kpi_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Kpi;
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

export interface R_List_Kpi__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Kpi[];
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

export type TBodyOfsaveUsingPOST_15 = KpiSaveDTO;
export type TResponseOfsaveUsingPOST_15 = R_Kpi_;
export type TBodyOfupdateUsingPUT_15 = KpiUpdateDTO;
export type TResponseOfupdateUsingPUT_15 = R_Kpi_;
export type TBodyOfdeleteUsingDELETE_16 = number[];
export type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_15 = Kpi;
export type TResponseOfupdateAllUsingPUT_15 = R_Kpi_;
export type TBodyOfexportExcelUsingPOST_15 = PageParams_KpiPageQuery_;
export type TResponseOfexportExcelUsingPOST_15 = any;
export interface TFormDataOfimportExcelUsingPOST_15 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_15 = R_boolean_;
export type TBodyOfpageUsingPOST_16 = PageParams_KpiPageQuery_;
export type TResponseOfpageUsingPOST_16 = R_IPage_Kpi__;
export type TBodyOfpreviewUsingPOST_15 = PageParams_KpiPageQuery_;
export type TResponseOfpreviewUsingPOST_15 = R_string_;
export type TBodyOfqueryUsingPOST_15 = Kpi;
export type TResponseOfqueryUsingPOST_15 = R_List_Kpi__;
export interface TPathOfgetUsingGET_15 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_15 = R_Kpi_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/kpi"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/saveUsingPOST_15)
     *
     * @tag绩效目标
     */
    post(options: { body: TBodyOfsaveUsingPOST_15 }): Promise<TResponseOfsaveUsingPOST_15>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/updateUsingPUT_15)
     *
     * @tag绩效目标
     */
    put(options: { body: TBodyOfupdateUsingPUT_15 }): Promise<TResponseOfupdateUsingPUT_15>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/deleteUsingDELETE_16)
     *
     * @tag绩效目标
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_16;
    }): Promise<TResponseOfdeleteUsingDELETE_16>;
  };
  (url: "/kpi/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/updateAllUsingPUT_15)
     *
     * @tag绩效目标
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_15 }): Promise<TResponseOfupdateAllUsingPUT_15>;
  };
  (url: "/kpi/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/exportExcelUsingPOST_15)
     *
     * @tag绩效目标
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_15;
    }): Promise<TResponseOfexportExcelUsingPOST_15>;
  };
  (url: "/kpi/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/importExcelUsingPOST_15)
     *
     * @tag绩效目标
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_15;
    }): Promise<TResponseOfimportExcelUsingPOST_15>;
  };
  (url: "/kpi/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/pageUsingPOST_16)
     *
     * @tag绩效目标
     */
    post(options: { body: TBodyOfpageUsingPOST_16 }): Promise<TResponseOfpageUsingPOST_16>;
  };
  (url: "/kpi/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/previewUsingPOST_15)
     *
     * @tag绩效目标
     */
    post(options: { body: TBodyOfpreviewUsingPOST_15 }): Promise<TResponseOfpreviewUsingPOST_15>;
  };
  (url: "/kpi/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/queryUsingPOST_15)
     *
     * @tag绩效目标
     */
    post(options: { body: TBodyOfqueryUsingPOST_15 }): Promise<TResponseOfqueryUsingPOST_15>;
  };
  (url: "/kpi/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/getUsingGET_15)
     *
     * @tag绩效目标
     */
    get(options: { path: TPathOfgetUsingGET_15 }): Promise<TResponseOfgetUsingGET_15>;
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
