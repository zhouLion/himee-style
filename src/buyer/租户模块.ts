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
    // 企业编码
    code?: string;
    // 连接类型
    connectType?: string;
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
    // 企业名称
    name?: string;
    // 内置
    readonly?: boolean;
    // 状态
    status?: string;
    // 类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 租户连接
 */
export interface TenantConnectDTO {
    // 基础库数据源配置
    baseDatasourceId?: number;
    // 连接类型
    connectType?: string;
    // 扩展库数据源配置
    extendDatasourceId?: number;
    // 企业ID
    id?: number;
    tenant?: string;
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

export type TBodyOfsaveUsingPOST_20 = DatasourceConfigSaveDTO;
export type TResponseOfsaveUsingPOST_20 = R_DatasourceConfig_;
export type TBodyOfupdateUsingPUT_19 = DatasourceConfigUpdateDTO;
export type TResponseOfupdateUsingPUT_19 = R_DatasourceConfig_;
export type TBodyOfdeleteUsingDELETE_23 = number[];
export type TResponseOfdeleteUsingDELETE_23 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_19 = DatasourceConfig;
export type TResponseOfupdateAllUsingPUT_19 = R_DatasourceConfig_;
export type TBodyOfexportExcelUsingPOST_21 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfexportExcelUsingPOST_21 = any;
export interface TFormDataOfimportExcelUsingPOST_20 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_20 = R_boolean_;
export type TBodyOfpageUsingPOST_25 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfpageUsingPOST_25 = R_IPage_DatasourceConfig__;
export type TBodyOfpreviewUsingPOST_21 = PageParams_DatasourceConfigPageQuery_;
export type TResponseOfpreviewUsingPOST_21 = R_string_;
export type TBodyOfqueryUsingPOST_21 = DatasourceConfig;
export type TResponseOfqueryUsingPOST_21 = R_List_DatasourceConfig__;
export interface TPathOfgetUsingGET_23 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_23 = R_DatasourceConfig_;
export type TBodyOfsaveUsingPOST_21 = TenantSaveDTO;
export type TResponseOfsaveUsingPOST_21 = R_Tenant_;
export type TBodyOfupdateUsingPUT_20 = TenantUpdateDTO;
export type TResponseOfupdateUsingPUT_20 = R_Tenant_;
export type TBodyOfdeleteUsingDELETE_24 = number[];
export type TResponseOfdeleteUsingDELETE_24 = R_boolean_;
export type TResponseOflistUsingGET = R_List_Tenant__;
export type TBodyOfupdateAllUsingPUT_20 = Tenant;
export type TResponseOfupdateAllUsingPUT_20 = R_Tenant_;
export interface TPathOfcheckUsingGET_5 {
    // code
    code: string;
}
export type TResponseOfcheckUsingGET_5 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_6 = R_boolean_;
export type TBodyOfdeleteAllUsingDELETE = number[];
export type TResponseOfdeleteAllUsingDELETE = R_boolean_;
export type TBodyOfexportExcelUsingPOST_22 = PageParams_TenantPageQuery_;
export type TResponseOfexportExcelUsingPOST_22 = any;
export interface TFormDataOfimportExcelUsingPOST_21 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_21 = R_boolean_;
export type TBodyOfinitConnectUsingPOST = TenantConnectDTO;
export type TResponseOfinitConnectUsingPOST = R_boolean_;
export type TBodyOfpageUsingPOST_26 = PageParams_TenantPageQuery_;
export type TResponseOfpageUsingPOST_26 = R_IPage_Tenant__;
export type TBodyOfpreviewUsingPOST_22 = PageParams_TenantPageQuery_;
export type TResponseOfpreviewUsingPOST_22 = R_string_;
export type TBodyOfqueryUsingPOST_22 = Tenant;
export type TResponseOfqueryUsingPOST_22 = R_List_Tenant__;
export type TResponseOfrefreshCacheUsingPOST_6 = R_boolean_;
export interface TQueryOfupdateStatusUsingPOST {
    // ids[]
    "ids[]": number[];
    // status
    status: string;
}
export type TResponseOfupdateStatusUsingPOST = R_boolean_;
export interface TPathOfgetUsingGET_24 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_24 = R_Tenant_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/datasourceConfig"): {
    /**
     * @description 新增 saveUsingPOST_20
     * 数据源
     */
    post(options: { body: TBodyOfsaveUsingPOST_20 }): Promise<TResponseOfsaveUsingPOST_20>;

    /**
     * @description 修改 updateUsingPUT_19
     * 数据源
     */
    put(options: { body: TBodyOfupdateUsingPUT_19 }): Promise<TResponseOfupdateUsingPUT_19>;

    /**
     * @description 删除 deleteUsingDELETE_23
     * 数据源
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_23;
    }): Promise<TResponseOfdeleteUsingDELETE_23>;
  };
  (url: "/datasourceConfig/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_19
     * 数据源
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_19 }): Promise<TResponseOfupdateAllUsingPUT_19>;
  };
  (url: "/datasourceConfig/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_21
     * 数据源
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_21;
    }): Promise<TResponseOfexportExcelUsingPOST_21>;
  };
  (url: "/datasourceConfig/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_20
     * 数据源
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_20;
    }): Promise<TResponseOfimportExcelUsingPOST_20>;
  };
  (url: "/datasourceConfig/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_25
     * 数据源
     */
    post(options: { body: TBodyOfpageUsingPOST_25 }): Promise<TResponseOfpageUsingPOST_25>;
  };
  (url: "/datasourceConfig/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_21
     * 数据源
     */
    post(options: { body: TBodyOfpreviewUsingPOST_21 }): Promise<TResponseOfpreviewUsingPOST_21>;
  };
  (url: "/datasourceConfig/query"): {
    /**
     * @description 批量查询 queryUsingPOST_21
     * 数据源
     */
    post(options: { body: TBodyOfqueryUsingPOST_21 }): Promise<TResponseOfqueryUsingPOST_21>;
  };
  (url: "/datasourceConfig/{id}"): {
    /**
     * @description 单体查询 getUsingGET_23
     * 数据源
     */
    get(options: { path: TPathOfgetUsingGET_23 }): Promise<TResponseOfgetUsingGET_23>;
  };
  (url: "/tenant"): {
    /**
     * @description 新增 saveUsingPOST_21
     * 企业
     */
    post(options: { body: TBodyOfsaveUsingPOST_21 }): Promise<TResponseOfsaveUsingPOST_21>;

    /**
     * @description 修改 updateUsingPUT_20
     * 企业
     */
    put(options: { body: TBodyOfupdateUsingPUT_20 }): Promise<TResponseOfupdateUsingPUT_20>;

    /**
     * @description 删除 deleteUsingDELETE_24
     * 企业
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_24;
    }): Promise<TResponseOfdeleteUsingDELETE_24>;
  };
  (url: "/tenant/all"): {
    /**
     * @description 查询所有企业 listUsingGET
     * 企业
     */
    get(options: {}): Promise<TResponseOflistUsingGET>;

    /**
     * @description 修改所有字段 updateAllUsingPUT_20
     * 企业
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_20 }): Promise<TResponseOfupdateAllUsingPUT_20>;
  };
  (url: "/tenant/check/{code}"): {
    /**
     * @description 检测租户是否存在 checkUsingGET_5
     * 企业
     */
    get(options: { path: TPathOfcheckUsingGET_5 }): Promise<TResponseOfcheckUsingGET_5>;
  };
  (url: "/tenant/clearCache"): {
    /**
     * @description 清理缓存 clearCacheUsingPOST_6
     * 企业
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_6>;
  };
  (url: "/tenant/deleteAll"): {
    /**
     * @description 删除租户和基础租户数据，请谨慎操作 deleteAllUsingDELETE
     * 企业
     */
    delete(options: {
      body: TBodyOfdeleteAllUsingDELETE;
    }): Promise<TResponseOfdeleteAllUsingDELETE>;
  };
  (url: "/tenant/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_22
     * 企业
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_22;
    }): Promise<TResponseOfexportExcelUsingPOST_22>;
  };
  (url: "/tenant/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_21
     * 企业
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_21;
    }): Promise<TResponseOfimportExcelUsingPOST_21>;
  };
  (url: "/tenant/initConnect"): {
    /**
     * @description 连接数据源 initConnectUsingPOST
     * 企业
     */
    post(options: { body: TBodyOfinitConnectUsingPOST }): Promise<TResponseOfinitConnectUsingPOST>;
  };
  (url: "/tenant/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_26
     * 企业
     */
    post(options: { body: TBodyOfpageUsingPOST_26 }): Promise<TResponseOfpageUsingPOST_26>;
  };
  (url: "/tenant/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_22
     * 企业
     */
    post(options: { body: TBodyOfpreviewUsingPOST_22 }): Promise<TResponseOfpreviewUsingPOST_22>;
  };
  (url: "/tenant/query"): {
    /**
     * @description 批量查询 queryUsingPOST_22
     * 企业
     */
    post(options: { body: TBodyOfqueryUsingPOST_22 }): Promise<TResponseOfqueryUsingPOST_22>;
  };
  (url: "/tenant/refreshCache"): {
    /**
     * @description 刷新缓存 refreshCacheUsingPOST_6
     * 企业
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_6>;
  };
  (url: "/tenant/status"): {
    /**
     * @description 修改租户状态 updateStatusUsingPOST
     * 企业
     */
    post(options: {
      query: TQueryOfupdateStatusUsingPOST;
    }): Promise<TResponseOfupdateStatusUsingPOST>;
  };
  (url: "/tenant/{id}"): {
    /**
     * @description 单体查询 getUsingGET_24
     * 企业
     */
    get(options: { path: TPathOfgetUsingGET_24 }): Promise<TResponseOfgetUsingGET_24>;
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
