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
type TBodyOfsaveUsingPOST_22 = OrgSaveDTO;
type TResponseOfsaveUsingPOST_22 = R_Org_;
type TBodyOfupdateUsingPUT_21 = OrgUpdateDTO;
type TResponseOfupdateUsingPUT_21 = R_Org_;
type TBodyOfdeleteUsingDELETE_25 = number[];
type TResponseOfdeleteUsingDELETE_25 = R_boolean_;
type TBodyOfupdateAllUsingPUT_21 = Org;
type TResponseOfupdateAllUsingPUT_21 = R_Org_;
interface TQueryOfcheckUsingGET_6 {
    id?: number;
    name?: string;
}
type TResponseOfcheckUsingGET_6 = R_boolean_;
type TResponseOfclearCacheUsingPOST_7 = R_boolean_;
type TBodyOfexportExcelUsingPOST_23 = PageParams_OrgPageQuery_;
type TResponseOfexportExcelUsingPOST_23 = any;
interface TFormDataOfimportExcelUsingPOST_22 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_22 = R_boolean_;
type TBodyOfpageUsingPOST_27 = PageParams_OrgPageQuery_;
type TResponseOfpageUsingPOST_27 = R_IPage_Org__;
type TBodyOfpreviewUsingPOST_23 = PageParams_OrgPageQuery_;
type TResponseOfpreviewUsingPOST_23 = R_string_;
type TBodyOfqueryUsingPOST_23 = Org;
type TResponseOfqueryUsingPOST_23 = R_List_Org__;
type TResponseOfrefreshCacheUsingPOST_7 = R_boolean_;
interface TQueryOftreeUsingGET {
    name?: string;
    state?: boolean;
}
type TResponseOftreeUsingGET = R_List_Org__;
interface TPathOfgetUsingGET_25 {
    id?: number;
}
type TResponseOfgetUsingGET_25 = R_Org_;
type TBodyOfsaveUsingPOST_23 = StationSaveDTO;
type TResponseOfsaveUsingPOST_23 = R_Station_;
type TBodyOfupdateUsingPUT_22 = StationUpdateDTO;
type TResponseOfupdateUsingPUT_22 = R_Station_;
type TBodyOfdeleteUsingDELETE_26 = number[];
type TResponseOfdeleteUsingDELETE_26 = R_boolean_;
type TBodyOfupdateAllUsingPUT_22 = Station;
type TResponseOfupdateAllUsingPUT_22 = R_Station_;
interface TQueryOfcheckUsingGET_7 {
    id?: number;
    name?: string;
}
type TResponseOfcheckUsingGET_7 = R_boolean_;
type TResponseOfclearCacheUsingPOST_8 = R_boolean_;
type TBodyOfexportExcelUsingPOST_24 = PageParams_StationPageQuery_;
type TResponseOfexportExcelUsingPOST_24 = any;
interface TFormDataOfimportExcelUsingPOST_23 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_23 = R_boolean_;
type TBodyOfpageUsingPOST_28 = PageParams_StationPageQuery_;
type TResponseOfpageUsingPOST_28 = R_IPage_Station__;
type TBodyOfpreviewUsingPOST_24 = PageParams_StationPageQuery_;
type TResponseOfpreviewUsingPOST_24 = R_string_;
type TBodyOfqueryUsingPOST_24 = Station;
type TResponseOfqueryUsingPOST_24 = R_List_Station__;
type TResponseOfrefreshCacheUsingPOST_8 = R_boolean_;
interface TPathOfgetUsingGET_26 {
    id?: number;
}
type TResponseOfgetUsingGET_26 = R_Station_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/org"): {
        /**
         * @description 新增 saveUsingPOST_22
         * 组织
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_22;
        }): Promise<TResponseOfsaveUsingPOST_22>;
        /**
         * @description 修改 updateUsingPUT_21
         * 组织
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_21;
        }): Promise<TResponseOfupdateUsingPUT_21>;
        /**
         * @description 删除 deleteUsingDELETE_25
         * 组织
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_25;
        }): Promise<TResponseOfdeleteUsingDELETE_25>;
    };
    (url: "/org/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_21
         * 组织
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_21;
        }): Promise<TResponseOfupdateAllUsingPUT_21>;
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
         * @description 导出Excel exportExcelUsingPOST_23
         * 组织
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_23;
        }): Promise<TResponseOfexportExcelUsingPOST_23>;
    };
    (url: "/org/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_22
         * 组织
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_22;
        }): Promise<TResponseOfimportExcelUsingPOST_22>;
    };
    (url: "/org/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_27
         * 组织
         */
        post(options: {
            body: TBodyOfpageUsingPOST_27;
        }): Promise<TResponseOfpageUsingPOST_27>;
    };
    (url: "/org/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_23
         * 组织
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_23;
        }): Promise<TResponseOfpreviewUsingPOST_23>;
    };
    (url: "/org/query"): {
        /**
         * @description 批量查询 queryUsingPOST_23
         * 组织
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_23;
        }): Promise<TResponseOfqueryUsingPOST_23>;
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
         * @description 单体查询 getUsingGET_25
         * 组织
         */
        get(options: {
            path: TPathOfgetUsingGET_25;
        }): Promise<TResponseOfgetUsingGET_25>;
    };
    (url: "/station"): {
        /**
         * @description 新增 saveUsingPOST_23
         * 岗位
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_23;
        }): Promise<TResponseOfsaveUsingPOST_23>;
        /**
         * @description 修改 updateUsingPUT_22
         * 岗位
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_22;
        }): Promise<TResponseOfupdateUsingPUT_22>;
        /**
         * @description 删除 deleteUsingDELETE_26
         * 岗位
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_26;
        }): Promise<TResponseOfdeleteUsingDELETE_26>;
    };
    (url: "/station/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_22
         * 岗位
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_22;
        }): Promise<TResponseOfupdateAllUsingPUT_22>;
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
         * @description 导出Excel exportExcelUsingPOST_24
         * 岗位
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_24;
        }): Promise<TResponseOfexportExcelUsingPOST_24>;
    };
    (url: "/station/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_23
         * 岗位
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_23;
        }): Promise<TResponseOfimportExcelUsingPOST_23>;
    };
    (url: "/station/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_28
         * 岗位
         */
        post(options: {
            body: TBodyOfpageUsingPOST_28;
        }): Promise<TResponseOfpageUsingPOST_28>;
    };
    (url: "/station/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_24
         * 岗位
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_24;
        }): Promise<TResponseOfpreviewUsingPOST_24>;
    };
    (url: "/station/query"): {
        /**
         * @description 批量查询 queryUsingPOST_24
         * 岗位
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_24;
        }): Promise<TResponseOfqueryUsingPOST_24>;
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
         * @description 单体查询 getUsingGET_26
         * 岗位
         */
        get(options: {
            path: TPathOfgetUsingGET_26;
        }): Promise<TResponseOfgetUsingGET_26>;
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

export { IApiFn, IPage_Org_, IPage_Station_, Org, OrgPageQuery, OrgSaveDTO, OrgUpdateDTO, PageParams_OrgPageQuery_, PageParams_StationPageQuery_, R_IPage_Org__, R_IPage_Station__, R_List_Org__, R_List_Station__, R_Org_, R_Station_, R_boolean_, R_string_, RequestProvider, Station, StationPageQuery, StationSaveDTO, StationUpdateDTO, TBodyOfdeleteUsingDELETE_25, TBodyOfdeleteUsingDELETE_26, TBodyOfexportExcelUsingPOST_23, TBodyOfexportExcelUsingPOST_24, TBodyOfpageUsingPOST_27, TBodyOfpageUsingPOST_28, TBodyOfpreviewUsingPOST_23, TBodyOfpreviewUsingPOST_24, TBodyOfqueryUsingPOST_23, TBodyOfqueryUsingPOST_24, TBodyOfsaveUsingPOST_22, TBodyOfsaveUsingPOST_23, TBodyOfupdateAllUsingPUT_21, TBodyOfupdateAllUsingPUT_22, TBodyOfupdateUsingPUT_21, TBodyOfupdateUsingPUT_22, TFormDataOfimportExcelUsingPOST_22, TFormDataOfimportExcelUsingPOST_23, TPathOfgetUsingGET_25, TPathOfgetUsingGET_26, TQueryOfcheckUsingGET_6, TQueryOfcheckUsingGET_7, TQueryOftreeUsingGET, TResponseOfcheckUsingGET_6, TResponseOfcheckUsingGET_7, TResponseOfclearCacheUsingPOST_7, TResponseOfclearCacheUsingPOST_8, TResponseOfdeleteUsingDELETE_25, TResponseOfdeleteUsingDELETE_26, TResponseOfexportExcelUsingPOST_23, TResponseOfexportExcelUsingPOST_24, TResponseOfgetUsingGET_25, TResponseOfgetUsingGET_26, TResponseOfimportExcelUsingPOST_22, TResponseOfimportExcelUsingPOST_23, TResponseOfpageUsingPOST_27, TResponseOfpageUsingPOST_28, TResponseOfpreviewUsingPOST_23, TResponseOfpreviewUsingPOST_24, TResponseOfqueryUsingPOST_23, TResponseOfqueryUsingPOST_24, TResponseOfrefreshCacheUsingPOST_7, TResponseOfrefreshCacheUsingPOST_8, TResponseOfsaveUsingPOST_22, TResponseOfsaveUsingPOST_23, TResponseOftreeUsingGET, TResponseOfupdateAllUsingPUT_21, TResponseOfupdateAllUsingPUT_22, TResponseOfupdateUsingPUT_21, TResponseOfupdateUsingPUT_22, createRequest };
