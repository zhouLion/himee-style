export interface IPage_Order_ {
    current?: number;
    pages?: number;
    records?: Order[];
    size?: number;
    total?: number;
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

  (url: "/order"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/平台端模块/订单/saveUsingPOST_4)
     *
     * @tag订单
     */
    post(options: { body: TBodyOfsaveUsingPOST_4 }): Promise<TResponseOfsaveUsingPOST_4>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/平台端模块/订单/updateUsingPUT_4)
     *
     * @tag订单
     */
    put(options: { body: TBodyOfupdateUsingPUT_4 }): Promise<TResponseOfupdateUsingPUT_4>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/平台端模块/订单/deleteUsingDELETE_5)
     *
     * @tag订单
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_5 }): Promise<TResponseOfdeleteUsingDELETE_5>;
  };
  (url: "/order/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/平台端模块/订单/updateAllUsingPUT_4)
     *
     * @tag订单
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_4 }): Promise<TResponseOfupdateAllUsingPUT_4>;
  };
  (url: "/order/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/exportExcelUsingPOST_5)
     *
     * @tag订单
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_5;
    }): Promise<TResponseOfexportExcelUsingPOST_5>;
  };
  (url: "/order/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/importExcelUsingPOST_5)
     *
     * @tag订单
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_5;
    }): Promise<TResponseOfimportExcelUsingPOST_5>;
  };
  (url: "/order/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/pageUsingPOST_5)
     *
     * @tag订单
     */
    post(options: { body: TBodyOfpageUsingPOST_5 }): Promise<TResponseOfpageUsingPOST_5>;
  };
  (url: "/order/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/previewUsingPOST_5)
     *
     * @tag订单
     */
    post(options: { body: TBodyOfpreviewUsingPOST_5 }): Promise<TResponseOfpreviewUsingPOST_5>;
  };
  (url: "/order/query"): {
    /**
     * @description query
     * @see [Swagger doc: query](http://120.79.250.86:8760/doc.html#/平台端模块/订单/queryUsingGET)
     *
     * @tag订单
     */
    get(options: {}): Promise<TResponseOfqueryUsingGET>;

    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/queryUsingPOST_4)
     *
     * @tag订单
     */
    post(options: { body: TBodyOfqueryUsingPOST_4 }): Promise<TResponseOfqueryUsingPOST_4>;
  };
  (url: "/order/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/getUsingGET_5)
     *
     * @tag订单
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
