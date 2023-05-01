/**
 * @description: 业务附件
 */
interface AppendixSaveVO {
    bizId?: number;
    bizType?: string;
    bucket?: string;
    contentType?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
}
/**
 * @description: 数据源
 */
interface DatasourceConfig {
    createTime?: string;
    createdBy?: number;
    driverClassName?: string;
    id?: number;
    name?: string;
    password?: string;
    poolName?: string;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
    url?: string;
    username?: string;
}
/**
 * @description: 数据源
 */
interface DatasourceConfigPageQuery {
    driverClassName?: string;
    name?: string;
    password?: string;
    url?: string;
    username?: string;
}
/**
 * @description: 数据源
 */
interface DatasourceConfigSaveDTO {
    driverClassName?: string;
    name?: string;
    password?: string;
    url?: string;
    username?: string;
}
/**
 * @description: 数据源
 */
interface DatasourceConfigUpdateDTO {
    driverClassName?: string;
    id?: number;
    name?: string;
    password?: string;
    url?: string;
    username?: string;
}
interface IPage_DatasourceConfig_ {
    current?: number;
    pages?: number;
    records?: DatasourceConfig[];
    size?: number;
    total?: number;
}
interface IPage_Tenant_ {
    current?: number;
    pages?: number;
    records?: Tenant[];
    size?: number;
    total?: number;
}
/**
 * @description: 分页参数
 */
interface PageParams_DatasourceConfigPageQuery_ {
    current?: number;
    extra?: any;
    model: DatasourceConfigPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_TenantPageQuery_ {
    current?: number;
    extra?: any;
    model: TenantPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_DatasourceConfig_ {
    code?: number;
    data?: DatasourceConfig;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_DatasourceConfig__ {
    code?: number;
    data?: IPage_DatasourceConfig_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Tenant__ {
    code?: number;
    data?: IPage_Tenant_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_DatasourceConfig__ {
    code?: number;
    data?: DatasourceConfig[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Tenant__ {
    code?: number;
    data?: Tenant[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Tenant_ {
    code?: number;
    data?: Tenant;
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
 * @description: 企业
 */
interface Tenant {
    code?: string;
    connectType?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    duty?: string;
    expirationTime?: string;
    id?: number;
    logo?: string;
    name?: string;
    readonly?: boolean;
    status?: string;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 租户连接
 */
interface TenantConnectDTO {
    baseDatasourceId?: number;
    connectType?: string;
    extendDatasourceId?: number;
    id?: number;
    tenant?: string;
}
/**
 * @description: 企业
 */
interface TenantPageQuery {
    code?: string;
    connectType?: string;
    describe?: string;
    duty?: string;
    expirationTime?: string;
    logo?: string;
    name?: string;
    readonly?: boolean;
    status?: string;
    type?: string;
}
/**
 * @description: 企业
 */
interface TenantSaveDTO {
    code?: string;
    describe?: string;
    duty?: string;
    expirationTime?: string;
    logos?: AppendixSaveVO[];
    name?: string;
}
/**
 * @description: 企业
 */
interface TenantUpdateDTO {
    code?: string;
    connectType?: string;
    describe?: string;
    duty?: string;
    expirationTime?: string;
    id?: number;
    logos?: AppendixSaveVO[];
    name?: string;
    readonly?: boolean;
    status?: string;
    type?: string;
}
type TBodyOfsaveUsingPOST_20 = DatasourceConfigSaveDTO;
type TResponseOfsaveUsingPOST_20 = R_DatasourceConfig_;
type TBodyOfupdateUsingPUT_19 = DatasourceConfigUpdateDTO;
type TResponseOfupdateUsingPUT_19 = R_DatasourceConfig_;
type TBodyOfdeleteUsingDELETE_23 = number[];
type TResponseOfdeleteUsingDELETE_23 = R_boolean_;
type TBodyOfupdateAllUsingPUT_19 = DatasourceConfig;
type TResponseOfupdateAllUsingPUT_19 = R_DatasourceConfig_;
type TBodyOfexportExcelUsingPOST_21 = PageParams_DatasourceConfigPageQuery_;
type TResponseOfexportExcelUsingPOST_21 = any;
interface TFormDataOfimportExcelUsingPOST_20 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_20 = R_boolean_;
type TBodyOfpageUsingPOST_25 = PageParams_DatasourceConfigPageQuery_;
type TResponseOfpageUsingPOST_25 = R_IPage_DatasourceConfig__;
type TBodyOfpreviewUsingPOST_21 = PageParams_DatasourceConfigPageQuery_;
type TResponseOfpreviewUsingPOST_21 = R_string_;
type TBodyOfqueryUsingPOST_21 = DatasourceConfig;
type TResponseOfqueryUsingPOST_21 = R_List_DatasourceConfig__;
interface TPathOfgetUsingGET_23 {
    id?: number;
}
type TResponseOfgetUsingGET_23 = R_DatasourceConfig_;
type TBodyOfsaveUsingPOST_21 = TenantSaveDTO;
type TResponseOfsaveUsingPOST_21 = R_Tenant_;
type TBodyOfupdateUsingPUT_20 = TenantUpdateDTO;
type TResponseOfupdateUsingPUT_20 = R_Tenant_;
type TBodyOfdeleteUsingDELETE_24 = number[];
type TResponseOfdeleteUsingDELETE_24 = R_boolean_;
type TResponseOflistUsingGET = R_List_Tenant__;
type TBodyOfupdateAllUsingPUT_20 = Tenant;
type TResponseOfupdateAllUsingPUT_20 = R_Tenant_;
interface TPathOfcheckUsingGET_5 {
    code: string;
}
type TResponseOfcheckUsingGET_5 = R_boolean_;
type TResponseOfclearCacheUsingPOST_6 = R_boolean_;
type TBodyOfdeleteAllUsingDELETE = number[];
type TResponseOfdeleteAllUsingDELETE = R_boolean_;
type TBodyOfexportExcelUsingPOST_22 = PageParams_TenantPageQuery_;
type TResponseOfexportExcelUsingPOST_22 = any;
interface TFormDataOfimportExcelUsingPOST_21 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_21 = R_boolean_;
type TBodyOfinitConnectUsingPOST = TenantConnectDTO;
type TResponseOfinitConnectUsingPOST = R_boolean_;
type TBodyOfpageUsingPOST_26 = PageParams_TenantPageQuery_;
type TResponseOfpageUsingPOST_26 = R_IPage_Tenant__;
type TBodyOfpreviewUsingPOST_22 = PageParams_TenantPageQuery_;
type TResponseOfpreviewUsingPOST_22 = R_string_;
type TBodyOfqueryUsingPOST_22 = Tenant;
type TResponseOfqueryUsingPOST_22 = R_List_Tenant__;
type TResponseOfrefreshCacheUsingPOST_6 = R_boolean_;
interface TQueryOfupdateStatusUsingPOST {
    "ids[]": number[];
    status: string;
}
type TResponseOfupdateStatusUsingPOST = R_boolean_;
interface TPathOfgetUsingGET_24 {
    id?: number;
}
type TResponseOfgetUsingGET_24 = R_Tenant_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/datasourceConfig"): {
        /**
         * @description 新增 saveUsingPOST_20
         * 数据源
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_20;
        }): Promise<TResponseOfsaveUsingPOST_20>;
        /**
         * @description 修改 updateUsingPUT_19
         * 数据源
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_19;
        }): Promise<TResponseOfupdateUsingPUT_19>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_19;
        }): Promise<TResponseOfupdateAllUsingPUT_19>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_25;
        }): Promise<TResponseOfpageUsingPOST_25>;
    };
    (url: "/datasourceConfig/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_21
         * 数据源
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_21;
        }): Promise<TResponseOfpreviewUsingPOST_21>;
    };
    (url: "/datasourceConfig/query"): {
        /**
         * @description 批量查询 queryUsingPOST_21
         * 数据源
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_21;
        }): Promise<TResponseOfqueryUsingPOST_21>;
    };
    (url: "/datasourceConfig/{id}"): {
        /**
         * @description 单体查询 getUsingGET_23
         * 数据源
         */
        get(options: {
            path: TPathOfgetUsingGET_23;
        }): Promise<TResponseOfgetUsingGET_23>;
    };
    (url: "/tenant"): {
        /**
         * @description 新增 saveUsingPOST_21
         * 企业
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_21;
        }): Promise<TResponseOfsaveUsingPOST_21>;
        /**
         * @description 修改 updateUsingPUT_20
         * 企业
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_20;
        }): Promise<TResponseOfupdateUsingPUT_20>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_20;
        }): Promise<TResponseOfupdateAllUsingPUT_20>;
    };
    (url: "/tenant/check/{code}"): {
        /**
         * @description 检测租户是否存在 checkUsingGET_5
         * 企业
         */
        get(options: {
            path: TPathOfcheckUsingGET_5;
        }): Promise<TResponseOfcheckUsingGET_5>;
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
        post(options: {
            body: TBodyOfinitConnectUsingPOST;
        }): Promise<TResponseOfinitConnectUsingPOST>;
    };
    (url: "/tenant/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_26
         * 企业
         */
        post(options: {
            body: TBodyOfpageUsingPOST_26;
        }): Promise<TResponseOfpageUsingPOST_26>;
    };
    (url: "/tenant/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_22
         * 企业
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_22;
        }): Promise<TResponseOfpreviewUsingPOST_22>;
    };
    (url: "/tenant/query"): {
        /**
         * @description 批量查询 queryUsingPOST_22
         * 企业
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_22;
        }): Promise<TResponseOfqueryUsingPOST_22>;
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
        get(options: {
            path: TPathOfgetUsingGET_24;
        }): Promise<TResponseOfgetUsingGET_24>;
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

export { AppendixSaveVO, DatasourceConfig, DatasourceConfigPageQuery, DatasourceConfigSaveDTO, DatasourceConfigUpdateDTO, IApiFn, IPage_DatasourceConfig_, IPage_Tenant_, PageParams_DatasourceConfigPageQuery_, PageParams_TenantPageQuery_, R_DatasourceConfig_, R_IPage_DatasourceConfig__, R_IPage_Tenant__, R_List_DatasourceConfig__, R_List_Tenant__, R_Tenant_, R_boolean_, R_string_, RequestProvider, TBodyOfdeleteAllUsingDELETE, TBodyOfdeleteUsingDELETE_23, TBodyOfdeleteUsingDELETE_24, TBodyOfexportExcelUsingPOST_21, TBodyOfexportExcelUsingPOST_22, TBodyOfinitConnectUsingPOST, TBodyOfpageUsingPOST_25, TBodyOfpageUsingPOST_26, TBodyOfpreviewUsingPOST_21, TBodyOfpreviewUsingPOST_22, TBodyOfqueryUsingPOST_21, TBodyOfqueryUsingPOST_22, TBodyOfsaveUsingPOST_20, TBodyOfsaveUsingPOST_21, TBodyOfupdateAllUsingPUT_19, TBodyOfupdateAllUsingPUT_20, TBodyOfupdateUsingPUT_19, TBodyOfupdateUsingPUT_20, TFormDataOfimportExcelUsingPOST_20, TFormDataOfimportExcelUsingPOST_21, TPathOfcheckUsingGET_5, TPathOfgetUsingGET_23, TPathOfgetUsingGET_24, TQueryOfupdateStatusUsingPOST, TResponseOfcheckUsingGET_5, TResponseOfclearCacheUsingPOST_6, TResponseOfdeleteAllUsingDELETE, TResponseOfdeleteUsingDELETE_23, TResponseOfdeleteUsingDELETE_24, TResponseOfexportExcelUsingPOST_21, TResponseOfexportExcelUsingPOST_22, TResponseOfgetUsingGET_23, TResponseOfgetUsingGET_24, TResponseOfimportExcelUsingPOST_20, TResponseOfimportExcelUsingPOST_21, TResponseOfinitConnectUsingPOST, TResponseOflistUsingGET, TResponseOfpageUsingPOST_25, TResponseOfpageUsingPOST_26, TResponseOfpreviewUsingPOST_21, TResponseOfpreviewUsingPOST_22, TResponseOfqueryUsingPOST_21, TResponseOfqueryUsingPOST_22, TResponseOfrefreshCacheUsingPOST_6, TResponseOfsaveUsingPOST_20, TResponseOfsaveUsingPOST_21, TResponseOfupdateAllUsingPUT_19, TResponseOfupdateAllUsingPUT_20, TResponseOfupdateStatusUsingPOST, TResponseOfupdateUsingPUT_19, TResponseOfupdateUsingPUT_20, Tenant, TenantConnectDTO, TenantPageQuery, TenantSaveDTO, TenantUpdateDTO, createRequest };
