/**
 * @description: 员工
 */
export interface Employee {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户id
    merchantId?: string;
    // 姓名
    name?: string;
    // 状态;;[1-正常 2-停用]
    state?: string;
    // 门店id
    storeId?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 用户id;;关联管理的用户id
    userId?: number;
    // 用户名
    userName?: string;
}

/**
 * @description: 员工
 */
export interface EmployeePageQuery {
    // 创建时间
    createdTime?: string;
    // 商户id
    merchantId?: string;
    // 姓名
    name?: string;
    // 状态;;[1-正常 2-停用]
    state?: string;
    // 门店id
    storeId?: string;
    // 用户id;;关联管理的用户id
    userId?: number;
    // 用户名
    userName?: string;
}

/**
 * @description: 员工
 */
export interface EmployeeSaveDTO {
    // 创建时间
    createdTime?: string;
    // 商户id
    merchantId?: string;
    // 姓名
    name?: string;
    // 状态;;[1-正常 2-停用]
    state?: string;
    // 门店id
    storeId?: string;
    // 用户id;;关联管理的用户id
    userId?: number;
    // 用户名
    userName?: string;
}

/**
 * @description: 员工
 */
export interface EmployeeUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 商户id
    merchantId?: string;
    // 姓名
    name?: string;
    // 状态;;[1-正常 2-停用]
    state?: string;
    // 门店id
    storeId?: string;
    // 用户id;;关联管理的用户id
    userId?: number;
    // 用户名
    userName?: string;
}

export interface IPage_Employee_ {
    current?: number;
    pages?: number;
    records?: Employee[];
    size?: number;
    total?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_EmployeePageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: EmployeePageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_Employee_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Employee;
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

export interface R_IPage_Employee__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Employee_;
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

export interface R_List_Employee__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Employee[];
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

export type TBodyOfsaveUsingPOST_1 = EmployeeSaveDTO;
export type TResponseOfsaveUsingPOST_1 = R_Employee_;
export type TBodyOfupdateUsingPUT_1 = EmployeeUpdateDTO;
export type TResponseOfupdateUsingPUT_1 = R_Employee_;
export type TBodyOfdeleteUsingDELETE_1 = number[];
export type TResponseOfdeleteUsingDELETE_1 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_1 = Employee;
export type TResponseOfupdateAllUsingPUT_1 = R_Employee_;
export type TBodyOfexportExcelUsingPOST_1 = PageParams_EmployeePageQuery_;
export type TResponseOfexportExcelUsingPOST_1 = any;
export interface TFormDataOfimportExcelUsingPOST_1 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_1 = R_boolean_;
export type TBodyOfpageUsingPOST_1 = PageParams_EmployeePageQuery_;
export type TResponseOfpageUsingPOST_1 = R_IPage_Employee__;
export type TBodyOfpreviewUsingPOST_1 = PageParams_EmployeePageQuery_;
export type TResponseOfpreviewUsingPOST_1 = R_string_;
export type TBodyOfqueryUsingPOST_1 = Employee;
export type TResponseOfqueryUsingPOST_1 = R_List_Employee__;
export interface TPathOfgetUsingGET_1 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_1 = R_Employee_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/employee"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/员工模块/员工/saveUsingPOST_1)
     *
     * @tag员工
     */
    post(options: { body: TBodyOfsaveUsingPOST_1 }): Promise<TResponseOfsaveUsingPOST_1>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/员工模块/员工/updateUsingPUT_1)
     *
     * @tag员工
     */
    put(options: { body: TBodyOfupdateUsingPUT_1 }): Promise<TResponseOfupdateUsingPUT_1>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/员工模块/员工/deleteUsingDELETE_1)
     *
     * @tag员工
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_1 }): Promise<TResponseOfdeleteUsingDELETE_1>;
  };
  (url: "/employee/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/员工模块/员工/updateAllUsingPUT_1)
     *
     * @tag员工
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_1 }): Promise<TResponseOfupdateAllUsingPUT_1>;
  };
  (url: "/employee/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/exportExcelUsingPOST_1)
     *
     * @tag员工
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_1;
    }): Promise<TResponseOfexportExcelUsingPOST_1>;
  };
  (url: "/employee/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/importExcelUsingPOST_1)
     *
     * @tag员工
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_1;
    }): Promise<TResponseOfimportExcelUsingPOST_1>;
  };
  (url: "/employee/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/pageUsingPOST_1)
     *
     * @tag员工
     */
    post(options: { body: TBodyOfpageUsingPOST_1 }): Promise<TResponseOfpageUsingPOST_1>;
  };
  (url: "/employee/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/previewUsingPOST_1)
     *
     * @tag员工
     */
    post(options: { body: TBodyOfpreviewUsingPOST_1 }): Promise<TResponseOfpreviewUsingPOST_1>;
  };
  (url: "/employee/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/queryUsingPOST_1)
     *
     * @tag员工
     */
    post(options: { body: TBodyOfqueryUsingPOST_1 }): Promise<TResponseOfqueryUsingPOST_1>;
  };
  (url: "/employee/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/getUsingGET_1)
     *
     * @tag员工
     */
    get(options: { path: TPathOfgetUsingGET_1 }): Promise<TResponseOfgetUsingGET_1>;
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
