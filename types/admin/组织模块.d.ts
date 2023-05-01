interface IPage_Org_ {
    current?: number;
    pages?: number;
    records?: Org[];
    size?: number;
    total?: number;
}
interface IPage_Station_ {
    current?: number;
    pages?: number;
    records?: Station[];
    size?: number;
    total?: number;
}
/**
 * @description: 组织
 */
interface Org {
    abbreviation?: string;
    createTime?: string;
    createdBy?: number;
    describe?: string;
    echoMap?: any;
    id?: number;
    label?: string;
    parentId?: number;
    sortValue?: number;
    state?: boolean;
    treePath?: string;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 组织
 */
interface OrgPageQuery {
    abbreviation?: string;
    describe?: string;
    label?: string;
    parentId?: number;
    sortValue?: number;
    state?: boolean;
    treePath?: string;
    type?: string;
}
/**
 * @description: 组织
 */
interface OrgSaveDTO {
    abbreviation?: string;
    describe?: string;
    label?: string;
    parentId?: number;
    sortValue?: number;
    state?: boolean;
    type?: string;
}
/**
 * @description: 组织
 */
interface OrgUpdateDTO {
    abbreviation?: string;
    describe?: string;
    id?: number;
    label?: string;
    parentId?: number;
    sortValue?: number;
    state?: boolean;
    type?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_OrgPageQuery_ {
    current?: number;
    extra?: any;
    model: OrgPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_StationPageQuery_ {
    current?: number;
    extra?: any;
    model: StationPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_Org__ {
    code?: number;
    data?: IPage_Org_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Station__ {
    code?: number;
    data?: IPage_Station_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Org__ {
    code?: number;
    data?: Org[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Station__ {
    code?: number;
    data?: Station[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Org_ {
    code?: number;
    data?: Org;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Station_ {
    code?: number;
    data?: Station;
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
 * @description: 岗位
 */
interface Station {
    createTime?: string;
    createdBy?: number;
    createdOrgId?: number;
    describe?: string;
    echoMap?: any;
    id?: number;
    name?: string;
    orgId?: number;
    state?: boolean;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 岗位
 */
interface StationPageQuery {
    createdOrgId?: number;
    describe?: string;
    name?: string;
    orgId?: number;
    state?: boolean;
}
/**
 * @description: 岗位
 */
interface StationSaveDTO {
    createdOrgId?: number;
    describe?: string;
    name?: string;
    orgId?: number;
    state?: boolean;
}
/**
 * @description: 岗位
 */
interface StationUpdateDTO {
    describe?: string;
    id?: number;
    name?: string;
    orgId?: number;
    state?: boolean;
}
type TBodyOfsaveUsingPOST_16 = OrgSaveDTO;
type TResponseOfsaveUsingPOST_16 = R_Org_;
type TBodyOfupdateUsingPUT_15 = OrgUpdateDTO;
type TResponseOfupdateUsingPUT_15 = R_Org_;
type TBodyOfdeleteUsingDELETE_19 = number[];
type TResponseOfdeleteUsingDELETE_19 = R_boolean_;
type TBodyOfupdateAllUsingPUT_15 = Org;
type TResponseOfupdateAllUsingPUT_15 = R_Org_;
interface TQueryOfcheckUsingGET_6 {
    id?: number;
    name?: string;
}
type TResponseOfcheckUsingGET_6 = R_boolean_;
type TResponseOfclearCacheUsingPOST_7 = R_boolean_;
type TBodyOfexportExcelUsingPOST_17 = PageParams_OrgPageQuery_;
type TResponseOfexportExcelUsingPOST_17 = any;
interface TFormDataOfimportExcelUsingPOST_16 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_16 = R_boolean_;
type TBodyOfpageUsingPOST_21 = PageParams_OrgPageQuery_;
type TResponseOfpageUsingPOST_21 = R_IPage_Org__;
type TBodyOfpreviewUsingPOST_17 = PageParams_OrgPageQuery_;
type TResponseOfpreviewUsingPOST_17 = R_string_;
type TBodyOfqueryUsingPOST_17 = Org;
type TResponseOfqueryUsingPOST_17 = R_List_Org__;
type TResponseOfrefreshCacheUsingPOST_7 = R_boolean_;
interface TQueryOftreeUsingGET {
    name?: string;
    state?: boolean;
}
type TResponseOftreeUsingGET = R_List_Org__;
interface TPathOfgetUsingGET_19 {
    id?: number;
}
type TResponseOfgetUsingGET_19 = R_Org_;
type TBodyOfsaveUsingPOST_17 = StationSaveDTO;
type TResponseOfsaveUsingPOST_17 = R_Station_;
type TBodyOfupdateUsingPUT_16 = StationUpdateDTO;
type TResponseOfupdateUsingPUT_16 = R_Station_;
type TBodyOfdeleteUsingDELETE_20 = number[];
type TResponseOfdeleteUsingDELETE_20 = R_boolean_;
type TBodyOfupdateAllUsingPUT_16 = Station;
type TResponseOfupdateAllUsingPUT_16 = R_Station_;
interface TQueryOfcheckUsingGET_7 {
    id?: number;
    name?: string;
}
type TResponseOfcheckUsingGET_7 = R_boolean_;
type TResponseOfclearCacheUsingPOST_8 = R_boolean_;
type TBodyOfexportExcelUsingPOST_18 = PageParams_StationPageQuery_;
type TResponseOfexportExcelUsingPOST_18 = any;
interface TFormDataOfimportExcelUsingPOST_17 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_17 = R_boolean_;
type TBodyOfpageUsingPOST_22 = PageParams_StationPageQuery_;
type TResponseOfpageUsingPOST_22 = R_IPage_Station__;
type TBodyOfpreviewUsingPOST_18 = PageParams_StationPageQuery_;
type TResponseOfpreviewUsingPOST_18 = R_string_;
type TBodyOfqueryUsingPOST_18 = Station;
type TResponseOfqueryUsingPOST_18 = R_List_Station__;
type TResponseOfrefreshCacheUsingPOST_8 = R_boolean_;
interface TPathOfgetUsingGET_20 {
    id?: number;
}
type TResponseOfgetUsingGET_20 = R_Station_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/org"): {
        /**
         * @description 新增 saveUsingPOST_16
         * 组织
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_16;
        }): Promise<TResponseOfsaveUsingPOST_16>;
        /**
         * @description 修改 updateUsingPUT_15
         * 组织
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_15;
        }): Promise<TResponseOfupdateUsingPUT_15>;
        /**
         * @description 删除 deleteUsingDELETE_19
         * 组织
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_19;
        }): Promise<TResponseOfdeleteUsingDELETE_19>;
    };
    (url: "/org/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_15
         * 组织
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_15;
        }): Promise<TResponseOfupdateAllUsingPUT_15>;
    };
    (url: "/org/check"): {
        /**
         * @description 检测名称是否可用 checkUsingGET_6
         * 组织
         */
        get(options: {
            query: TQueryOfcheckUsingGET_6;
        }): Promise<TResponseOfcheckUsingGET_6>;
    };
    (url: "/org/clearCache"): {
        /**
         * @description 清理缓存 clearCacheUsingPOST_7
         * 组织
         */
        post(options: {}): Promise<TResponseOfclearCacheUsingPOST_7>;
    };
    (url: "/org/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_17
         * 组织
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_17;
        }): Promise<TResponseOfexportExcelUsingPOST_17>;
    };
    (url: "/org/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_16
         * 组织
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_16;
        }): Promise<TResponseOfimportExcelUsingPOST_16>;
    };
    (url: "/org/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_21
         * 组织
         */
        post(options: {
            body: TBodyOfpageUsingPOST_21;
        }): Promise<TResponseOfpageUsingPOST_21>;
    };
    (url: "/org/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_17
         * 组织
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_17;
        }): Promise<TResponseOfpreviewUsingPOST_17>;
    };
    (url: "/org/query"): {
        /**
         * @description 批量查询 queryUsingPOST_17
         * 组织
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_17;
        }): Promise<TResponseOfqueryUsingPOST_17>;
    };
    (url: "/org/refreshCache"): {
        /**
         * @description 刷新缓存 refreshCacheUsingPOST_7
         * 组织
         */
        post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_7>;
    };
    (url: "/org/tree"): {
        /**
         * @description 查询系统所有的组织树 treeUsingGET
         * 组织
         */
        get(options: {
            query: TQueryOftreeUsingGET;
        }): Promise<TResponseOftreeUsingGET>;
    };
    (url: "/org/{id}"): {
        /**
         * @description 单体查询 getUsingGET_19
         * 组织
         */
        get(options: {
            path: TPathOfgetUsingGET_19;
        }): Promise<TResponseOfgetUsingGET_19>;
    };
    (url: "/station"): {
        /**
         * @description 新增 saveUsingPOST_17
         * 岗位
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_17;
        }): Promise<TResponseOfsaveUsingPOST_17>;
        /**
         * @description 修改 updateUsingPUT_16
         * 岗位
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_16;
        }): Promise<TResponseOfupdateUsingPUT_16>;
        /**
         * @description 删除 deleteUsingDELETE_20
         * 岗位
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_20;
        }): Promise<TResponseOfdeleteUsingDELETE_20>;
    };
    (url: "/station/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_16
         * 岗位
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_16;
        }): Promise<TResponseOfupdateAllUsingPUT_16>;
    };
    (url: "/station/check"): {
        /**
         * @description 检测名称是否可用 checkUsingGET_7
         * 岗位
         */
        get(options: {
            query: TQueryOfcheckUsingGET_7;
        }): Promise<TResponseOfcheckUsingGET_7>;
    };
    (url: "/station/clearCache"): {
        /**
         * @description 清理缓存 clearCacheUsingPOST_8
         * 岗位
         */
        post(options: {}): Promise<TResponseOfclearCacheUsingPOST_8>;
    };
    (url: "/station/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_18
         * 岗位
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_18;
        }): Promise<TResponseOfexportExcelUsingPOST_18>;
    };
    (url: "/station/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_17
         * 岗位
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_17;
        }): Promise<TResponseOfimportExcelUsingPOST_17>;
    };
    (url: "/station/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_22
         * 岗位
         */
        post(options: {
            body: TBodyOfpageUsingPOST_22;
        }): Promise<TResponseOfpageUsingPOST_22>;
    };
    (url: "/station/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_18
         * 岗位
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_18;
        }): Promise<TResponseOfpreviewUsingPOST_18>;
    };
    (url: "/station/query"): {
        /**
         * @description 批量查询 queryUsingPOST_18
         * 岗位
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_18;
        }): Promise<TResponseOfqueryUsingPOST_18>;
    };
    (url: "/station/refreshCache"): {
        /**
         * @description 刷新缓存 refreshCacheUsingPOST_8
         * 岗位
         */
        post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_8>;
    };
    (url: "/station/{id}"): {
        /**
         * @description 单体查询 getUsingGET_20
         * 岗位
         */
        get(options: {
            path: TPathOfgetUsingGET_20;
        }): Promise<TResponseOfgetUsingGET_20>;
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

export { IApiFn, IPage_Org_, IPage_Station_, Org, OrgPageQuery, OrgSaveDTO, OrgUpdateDTO, PageParams_OrgPageQuery_, PageParams_StationPageQuery_, R_IPage_Org__, R_IPage_Station__, R_List_Org__, R_List_Station__, R_Org_, R_Station_, R_boolean_, R_string_, RequestProvider, Station, StationPageQuery, StationSaveDTO, StationUpdateDTO, TBodyOfdeleteUsingDELETE_19, TBodyOfdeleteUsingDELETE_20, TBodyOfexportExcelUsingPOST_17, TBodyOfexportExcelUsingPOST_18, TBodyOfpageUsingPOST_21, TBodyOfpageUsingPOST_22, TBodyOfpreviewUsingPOST_17, TBodyOfpreviewUsingPOST_18, TBodyOfqueryUsingPOST_17, TBodyOfqueryUsingPOST_18, TBodyOfsaveUsingPOST_16, TBodyOfsaveUsingPOST_17, TBodyOfupdateAllUsingPUT_15, TBodyOfupdateAllUsingPUT_16, TBodyOfupdateUsingPUT_15, TBodyOfupdateUsingPUT_16, TFormDataOfimportExcelUsingPOST_16, TFormDataOfimportExcelUsingPOST_17, TPathOfgetUsingGET_19, TPathOfgetUsingGET_20, TQueryOfcheckUsingGET_6, TQueryOfcheckUsingGET_7, TQueryOftreeUsingGET, TResponseOfcheckUsingGET_6, TResponseOfcheckUsingGET_7, TResponseOfclearCacheUsingPOST_7, TResponseOfclearCacheUsingPOST_8, TResponseOfdeleteUsingDELETE_19, TResponseOfdeleteUsingDELETE_20, TResponseOfexportExcelUsingPOST_17, TResponseOfexportExcelUsingPOST_18, TResponseOfgetUsingGET_19, TResponseOfgetUsingGET_20, TResponseOfimportExcelUsingPOST_16, TResponseOfimportExcelUsingPOST_17, TResponseOfpageUsingPOST_21, TResponseOfpageUsingPOST_22, TResponseOfpreviewUsingPOST_17, TResponseOfpreviewUsingPOST_18, TResponseOfqueryUsingPOST_17, TResponseOfqueryUsingPOST_18, TResponseOfrefreshCacheUsingPOST_7, TResponseOfrefreshCacheUsingPOST_8, TResponseOfsaveUsingPOST_16, TResponseOfsaveUsingPOST_17, TResponseOftreeUsingGET, TResponseOfupdateAllUsingPUT_15, TResponseOfupdateAllUsingPUT_16, TResponseOfupdateUsingPUT_15, TResponseOfupdateUsingPUT_16, createRequest };
