/**
 * @description: 业务附件
 */
export interface AppendixSaveVO {
    // 业务id
    bizId?: number;
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件类型
    fileType?: string;
    // 附件id c_file表的id
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
}

/**
 * @description: 数据源
 */
export interface DatasourceConfig {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 驱动
    driverClassName?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 数据源名
    poolName?: string;
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 链接
    url?: string;
    // 账号
    username?: string;
}

/**
 * @description: 数据源
 */
export interface DatasourceConfigPageQuery {
    // 驱动
    driverClassName?: string;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}

/**
 * @description: 数据源
 */
export interface DatasourceConfigSaveDTO {
    // 驱动
    driverClassName?: string;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}

/**
 * @description: 数据源
 */
export interface DatasourceConfigUpdateDTO {
    // 驱动
    driverClassName?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 密码
    password?: string;
    // 链接
    url?: string;
    // 账号
    username?: string;
}

export interface IPage_DatasourceConfig_ {
    current?: number;
    pages?: number;
    records?: DatasourceConfig[];
    size?: number;
    total?: number;
}

export interface IPage_Tenant_ {
    current?: number;
    pages?: number;
    records?: Tenant[];
    size?: number;
    total?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_DatasourceConfigPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: DatasourceConfigPageQuery;
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
export interface PageParams_TenantPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: TenantPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_DatasourceConfig_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: DatasourceConfig;
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

export interface R_IPage_DatasourceConfig__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_DatasourceConfig_;
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

export interface R_IPage_Tenant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Tenant_;
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

export interface R_List_DatasourceConfig__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: DatasourceConfig[];
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

export interface R_List_Tenant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Tenant[];
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

export interface R_Tenant_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Tenant;
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
 * @description: 企业
 */
export interface Tenant {
    account?: string;
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // 主键
    id?: number;
    // logo地址
    logo?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 企业名称
    name?: string;
    password?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 商户审核
 */
export interface TenantApproveDTO {
    // 商户id
    id?: number;
    // 状态
    status?: string;
}

/**
 * @description: 企业
 */
export interface TenantPageQuery {
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // logo地址
    logo?: string;
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
}

/**
 * @description: 企业
 */
export interface TenantSaveDTO {
    // 企业编码
    code?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // logo地址
    logos?: AppendixSaveVO[];
    // 企业名称
    name?: string;
}

/**
 * @description: 企业
 */
export interface TenantUpdateDTO {
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
    // 企业简介
    describe?: string;
    // 责任人
    duty?: string;
    // 有效期
    expirationTime?: string;
    // 主键
    id?: number;
    // logo地址
    logos?: AppendixSaveVO[];
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
}

export type TBodyOfsaveUsingPOST_14 = DatasourceConfigSaveDTO;
export type TResponseOfsaveUsingPOST_14 = R_DatasourceConfig_;
export type TBodyOfupdateUsingPUT_13 = DatasourceConfigUpdateDTO;
export type TResponseOfupdateUsingPUT_13 = R_DatasourceConfig_;
export type TBodyOfdeleteUsingDELETE_17 = number[];
export type TResponseOfdeleteUsingDELETE_17 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_13 = DatasourceConfig;
export type TResponseOfupdateAllUsingPUT_13 = R_DatasourceConfig_;
export type TBodyOfexportExcelUsingPOST_15 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfexportExcelUsingPOST_15 = any;
export interface TFormDataOfimportExcelUsingPOST_14 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_14 = R_boolean_;
export type TBodyOfpageUsingPOST_19 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfpageUsingPOST_19 = R_IPage_DatasourceConfig__;
export type TBodyOfpreviewUsingPOST_15 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfpreviewUsingPOST_15 = R_string_;
export type TBodyOfqueryUsingPOST_15 = DatasourceConfig;
export type TResponseOfqueryUsingPOST_15 = R_List_DatasourceConfig__;
export interface TPathOfgetUsingGET_17 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_17 = R_DatasourceConfig_;
export type TBodyOfsaveUsingPOST_15 = TenantSaveDTO;
export type TResponseOfsaveUsingPOST_15 = R_Tenant_;
export type TBodyOfupdateUsingPUT_14 = TenantUpdateDTO;
export type TResponseOfupdateUsingPUT_14 = R_Tenant_;
export type TBodyOfdeleteUsingDELETE_18 = number[];
export type TResponseOfdeleteUsingDELETE_18 = R_boolean_;
export type TResponseOflistUsingGET = R_List_Tenant__;
export type TBodyOfupdateAllUsingPUT_14 = Tenant;
export type TResponseOfupdateAllUsingPUT_14 = R_Tenant_;
export type TBodyOfapproveUsingPOST = TenantApproveDTO;
export type TResponseOfapproveUsingPOST = R_boolean_;
export interface TPathOfcheckUsingGET_5 {
    // code
    code: string;
}
export type TResponseOfcheckUsingGET_5 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_6 = R_boolean_;
export type TBodyOfdeleteAllUsingDELETE = number[];
export type TResponseOfdeleteAllUsingDELETE = R_boolean_;
export type TBodyOfexportExcelUsingPOST_16 = PageParams_TenantPageQuery_;
export type TResponseOfexportExcelUsingPOST_16 = any;
export interface TFormDataOfimportExcelUsingPOST_15 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_15 = R_boolean_;
export type TBodyOfpageUsingPOST_20 = PageParams_TenantPageQuery_;
export type TResponseOfpageUsingPOST_20 = R_IPage_Tenant__;
export type TBodyOfpreviewUsingPOST_16 = PageParams_TenantPageQuery_;
export type TResponseOfpreviewUsingPOST_16 = R_string_;
export type TBodyOfqueryUsingPOST_16 = Tenant;
export type TResponseOfqueryUsingPOST_16 = R_List_Tenant__;
export type TResponseOfrefreshCacheUsingPOST_6 = R_boolean_;
export interface TQueryOfupdateStatusUsingPOST {
    // ids[]
    "ids[]": number[];
    // status
    status: string;
}
export type TResponseOfupdateStatusUsingPOST = R_boolean_;
export interface TPathOfgetUsingGET_18 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_18 = R_Tenant_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/datasourceConfig"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/租户模块/数据源/saveUsingPOST_14)
     *
     * @tag数据源
     */
    post(options: { body: TBodyOfsaveUsingPOST_14 }): Promise<TResponseOfsaveUsingPOST_14>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/租户模块/数据源/updateUsingPUT_13)
     *
     * @tag数据源
     */
    put(options: { body: TBodyOfupdateUsingPUT_13 }): Promise<TResponseOfupdateUsingPUT_13>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/租户模块/数据源/deleteUsingDELETE_17)
     *
     * @tag数据源
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_17;
    }): Promise<TResponseOfdeleteUsingDELETE_17>;
  };
  (url: "/datasourceConfig/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/租户模块/数据源/updateAllUsingPUT_13)
     *
     * @tag数据源
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_13 }): Promise<TResponseOfupdateAllUsingPUT_13>;
  };
  (url: "/datasourceConfig/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/租户模块/数据源/exportExcelUsingPOST_15)
     *
     * @tag数据源
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_15;
    }): Promise<TResponseOfexportExcelUsingPOST_15>;
  };
  (url: "/datasourceConfig/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/租户模块/数据源/importExcelUsingPOST_14)
     *
     * @tag数据源
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_14;
    }): Promise<TResponseOfimportExcelUsingPOST_14>;
  };
  (url: "/datasourceConfig/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/租户模块/数据源/pageUsingPOST_19)
     *
     * @tag数据源
     */
    post(options: { body: TBodyOfpageUsingPOST_19 }): Promise<TResponseOfpageUsingPOST_19>;
  };
  (url: "/datasourceConfig/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/租户模块/数据源/previewUsingPOST_15)
     *
     * @tag数据源
     */
    post(options: { body: TBodyOfpreviewUsingPOST_15 }): Promise<TResponseOfpreviewUsingPOST_15>;
  };
  (url: "/datasourceConfig/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/租户模块/数据源/queryUsingPOST_15)
     *
     * @tag数据源
     */
    post(options: { body: TBodyOfqueryUsingPOST_15 }): Promise<TResponseOfqueryUsingPOST_15>;
  };
  (url: "/datasourceConfig/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/租户模块/数据源/getUsingGET_17)
     *
     * @tag数据源
     */
    get(options: { path: TPathOfgetUsingGET_17 }): Promise<TResponseOfgetUsingGET_17>;
  };
  (url: "/tenant"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/saveUsingPOST_15)
     *
     * @tag商户（租户）
     */
    post(options: { body: TBodyOfsaveUsingPOST_15 }): Promise<TResponseOfsaveUsingPOST_15>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/updateUsingPUT_14)
     *
     * @tag商户（租户）
     */
    put(options: { body: TBodyOfupdateUsingPUT_14 }): Promise<TResponseOfupdateUsingPUT_14>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/deleteUsingDELETE_18)
     *
     * @tag商户（租户）
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_18;
    }): Promise<TResponseOfdeleteUsingDELETE_18>;
  };
  (url: "/tenant/all"): {
    /**
     * @description 查询所有商户
     * @see [Swagger doc: 查询所有商户](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/listUsingGET)
     *
     * @tag商户（租户）
     */
    get(options: {}): Promise<TResponseOflistUsingGET>;

    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/updateAllUsingPUT_14)
     *
     * @tag商户（租户）
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_14 }): Promise<TResponseOfupdateAllUsingPUT_14>;
  };
  (url: "/tenant/approve"): {
    /**
     * @description 商户审核
     * @see [Swagger doc: 商户审核](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/approveUsingPOST)
     *
     * @tag商户（租户）
     */
    post(options: { body: TBodyOfapproveUsingPOST }): Promise<TResponseOfapproveUsingPOST>;
  };
  (url: "/tenant/check/{code}"): {
    /**
     * @description 检测租户是否存在
     * @see [Swagger doc: 检测租户是否存在](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/checkUsingGET_5)
     *
     * @tag商户（租户）
     */
    get(options: { path: TPathOfcheckUsingGET_5 }): Promise<TResponseOfcheckUsingGET_5>;
  };
  (url: "/tenant/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/clearCacheUsingPOST_6)
     *
     * @tag商户（租户）
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_6>;
  };
  (url: "/tenant/deleteAll"): {
    /**
     * @description 删除租户和基础租户数据，请谨慎操作
     * @see [Swagger doc: 删除租户和基础租户数据，请谨慎操作](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/deleteAllUsingDELETE)
     *
     * @tag商户（租户）
     */
    delete(options: {
      body: TBodyOfdeleteAllUsingDELETE;
    }): Promise<TResponseOfdeleteAllUsingDELETE>;
  };
  (url: "/tenant/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/exportExcelUsingPOST_16)
     *
     * @tag商户（租户）
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_16;
    }): Promise<TResponseOfexportExcelUsingPOST_16>;
  };
  (url: "/tenant/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/importExcelUsingPOST_15)
     *
     * @tag商户（租户）
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_15;
    }): Promise<TResponseOfimportExcelUsingPOST_15>;
  };
  (url: "/tenant/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/pageUsingPOST_20)
     *
     * @tag商户（租户）
     */
    post(options: { body: TBodyOfpageUsingPOST_20 }): Promise<TResponseOfpageUsingPOST_20>;
  };
  (url: "/tenant/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/previewUsingPOST_16)
     *
     * @tag商户（租户）
     */
    post(options: { body: TBodyOfpreviewUsingPOST_16 }): Promise<TResponseOfpreviewUsingPOST_16>;
  };
  (url: "/tenant/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/queryUsingPOST_16)
     *
     * @tag商户（租户）
     */
    post(options: { body: TBodyOfqueryUsingPOST_16 }): Promise<TResponseOfqueryUsingPOST_16>;
  };
  (url: "/tenant/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/refreshCacheUsingPOST_6)
     *
     * @tag商户（租户）
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_6>;
  };
  (url: "/tenant/status"): {
    /**
     * @description 修改租户状态
     * @see [Swagger doc: 修改租户状态](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/updateStatusUsingPOST)
     *
     * @tag商户（租户）
     */
    post(options: {
      query: TQueryOfupdateStatusUsingPOST;
    }): Promise<TResponseOfupdateStatusUsingPOST>;
  };
  (url: "/tenant/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/租户模块/商户（租户）/getUsingGET_18)
     *
     * @tag商户（租户）
     */
    get(options: { path: TPathOfgetUsingGET_18 }): Promise<TResponseOfgetUsingGET_18>;
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
