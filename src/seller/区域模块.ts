/**
 * @description: 区域
 */
export interface District {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    // 区域名称
    districtName?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户id
    merchantId?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 区域
 */
export interface DistrictPageQuery {
    // 创建时间
    createdTime?: string;
    // 区域名称
    districtName?: string;
    // 商户id
    merchantId?: number;
}

/**
 * @description: 区域
 */
export interface DistrictSaveDTO {
    // 创建时间
    createdTime?: string;
    // 区域名称
    districtName?: string;
    // 商户id
    merchantId?: number;
}

/**
 * @description: 区域
 */
export interface DistrictUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 区域名称
    districtName?: string;
    // 主键
    id?: number;
    // 商户id
    merchantId?: number;
}

export interface IPage_District_ {
    current?: number;
    pages?: number;
    records?: District[];
    size?: number;
    total?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_DistrictPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: DistrictPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_District_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: District;
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

export interface R_IPage_District__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_District_;
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

export interface R_List_District__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: District[];
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

export type TBodyOfsaveUsingPOST = DistrictSaveDTO;
export type TResponseOfsaveUsingPOST = R_District_;
export type TBodyOfupdateUsingPUT = DistrictUpdateDTO;
export type TResponseOfupdateUsingPUT = R_District_;
export type TBodyOfdeleteUsingDELETE = number[];
export type TResponseOfdeleteUsingDELETE = R_boolean_;
export type TBodyOfupdateAllUsingPUT = District;
export type TResponseOfupdateAllUsingPUT = R_District_;
export type TBodyOfexportExcelUsingPOST = PageParams_DistrictPageQuery_;
export type TResponseOfexportExcelUsingPOST = any;
export interface TFormDataOfimportExcelUsingPOST {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST = R_boolean_;
export type TBodyOfpageUsingPOST = PageParams_DistrictPageQuery_;
export type TResponseOfpageUsingPOST = R_IPage_District__;
export type TBodyOfpreviewUsingPOST = PageParams_DistrictPageQuery_;
export type TResponseOfpreviewUsingPOST = R_string_;
export type TBodyOfqueryUsingPOST = District;
export type TResponseOfqueryUsingPOST = R_List_District__;
export interface TPathOfgetUsingGET {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET = R_District_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/district"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/区域模块/区域/saveUsingPOST)
     *
     * @tag区域
     */
    post(options: { body: TBodyOfsaveUsingPOST }): Promise<TResponseOfsaveUsingPOST>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/区域模块/区域/updateUsingPUT)
     *
     * @tag区域
     */
    put(options: { body: TBodyOfupdateUsingPUT }): Promise<TResponseOfupdateUsingPUT>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/区域模块/区域/deleteUsingDELETE)
     *
     * @tag区域
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE }): Promise<TResponseOfdeleteUsingDELETE>;
  };
  (url: "/district/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/区域模块/区域/updateAllUsingPUT)
     *
     * @tag区域
     */
    put(options: { body: TBodyOfupdateAllUsingPUT }): Promise<TResponseOfupdateAllUsingPUT>;
  };
  (url: "/district/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/exportExcelUsingPOST)
     *
     * @tag区域
     */
    post(options: { body: TBodyOfexportExcelUsingPOST }): Promise<TResponseOfexportExcelUsingPOST>;
  };
  (url: "/district/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/importExcelUsingPOST)
     *
     * @tag区域
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST;
    }): Promise<TResponseOfimportExcelUsingPOST>;
  };
  (url: "/district/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/pageUsingPOST)
     *
     * @tag区域
     */
    post(options: { body: TBodyOfpageUsingPOST }): Promise<TResponseOfpageUsingPOST>;
  };
  (url: "/district/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/previewUsingPOST)
     *
     * @tag区域
     */
    post(options: { body: TBodyOfpreviewUsingPOST }): Promise<TResponseOfpreviewUsingPOST>;
  };
  (url: "/district/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/queryUsingPOST)
     *
     * @tag区域
     */
    post(options: { body: TBodyOfqueryUsingPOST }): Promise<TResponseOfqueryUsingPOST>;
  };
  (url: "/district/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/getUsingGET)
     *
     * @tag区域
     */
    get(options: { path: TPathOfgetUsingGET }): Promise<TResponseOfgetUsingGET>;
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
