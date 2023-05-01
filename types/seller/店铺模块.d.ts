interface IPage_StoreUser_ {
    current?: number;
    pages?: number;
    records?: StoreUser[];
    size?: number;
    total?: number;
}
interface IPage_Store_ {
    current?: number;
    pages?: number;
    records?: Store[];
    size?: number;
    total?: number;
}
/**
 * @description: 分页参数
 */
interface PageParams_StorePageQuery_ {
    current?: number;
    extra?: any;
    model: StorePageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_StoreUserPageQuery_ {
    current?: number;
    extra?: any;
    model: StoreUserPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_StoreUser__ {
    code?: number;
    data?: IPage_StoreUser_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Store__ {
    code?: number;
    data?: IPage_Store_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_StoreUser__ {
    code?: number;
    data?: StoreUser[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Store__ {
    code?: number;
    data?: Store[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_StoreUser_ {
    code?: number;
    data?: StoreUser;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Store_ {
    code?: number;
    data?: Store;
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
 * @description: 店铺
 */
interface Store {
    address?: string;
    cityCode?: string;
    countyCode?: string;
    createTime?: string;
    createdBy?: number;
    districtId?: number;
    echoMap?: any;
    id?: number;
    isHeadOffice?: string;
    lat?: string;
    lon?: string;
    memberManageType?: string;
    merchantId?: number;
    payIndependent?: string;
    principalPerson?: string;
    principalPhone?: string;
    provCode?: string;
    state?: string;
    storeName?: string;
    storeSq?: number;
    storeType?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 店铺
 */
interface StorePageQuery {
    address?: string;
    cityCode?: string;
    countyCode?: string;
    districtId?: number;
    isHeadOffice?: string;
    lat?: string;
    lon?: string;
    memberManageType?: string;
    merchantId?: number;
    payIndependent?: string;
    principalPerson?: string;
    principalPhone?: string;
    provCode?: string;
    state?: string;
    storeName?: string;
    storeSq?: number;
    storeType?: string;
}
/**
 * @description: 店铺
 */
interface StoreSaveDTO {
    address?: string;
    cityCode?: string;
    countyCode?: string;
    districtId?: number;
    isHeadOffice?: string;
    lat?: string;
    lon?: string;
    memberManageType?: string;
    merchantId?: number;
    payIndependent?: string;
    principalPerson?: string;
    principalPhone?: string;
    provCode?: string;
    state?: string;
    storeName?: string;
    storeSq?: number;
    storeType?: string;
}
/**
 * @description: 店铺
 */
interface StoreUpdateDTO {
    address?: string;
    cityCode?: string;
    countyCode?: string;
    districtId?: number;
    id?: number;
    isHeadOffice?: string;
    lat?: string;
    lon?: string;
    memberManageType?: string;
    merchantId?: number;
    payIndependent?: string;
    principalPerson?: string;
    principalPhone?: string;
    provCode?: string;
    state?: string;
    storeName?: string;
    storeSq?: number;
    storeType?: string;
}
/**
 * @description: 店铺用户
 */
interface StoreUser {
    account?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    id?: number;
    merchantId?: number;
    storeId?: number;
    updateTime?: string;
    updatedBy?: number;
    userId?: number;
}
/**
 * @description: 店铺用户
 */
interface StoreUserPageQuery {
    account?: string;
    merchantId?: number;
    storeId?: number;
    userId?: number;
}
/**
 * @description: 店铺用户
 */
interface StoreUserSaveDTO {
    account?: string;
    merchantId?: number;
    storeId?: number;
    userId?: number;
}
/**
 * @description: 店铺用户
 */
interface StoreUserUpdateDTO {
    account?: string;
    id?: number;
    merchantId?: number;
    storeId?: number;
    userId?: number;
}
type TBodyOfsaveUsingPOST_3 = StoreSaveDTO;
type TResponseOfsaveUsingPOST_3 = R_Store_;
type TBodyOfupdateUsingPUT_3 = StoreUpdateDTO;
type TResponseOfupdateUsingPUT_3 = R_Store_;
type TBodyOfdeleteUsingDELETE_3 = number[];
type TResponseOfdeleteUsingDELETE_3 = R_boolean_;
type TBodyOfupdateAllUsingPUT_3 = Store;
type TResponseOfupdateAllUsingPUT_3 = R_Store_;
type TBodyOfexportExcelUsingPOST_3 = PageParams_StorePageQuery_;
type TResponseOfexportExcelUsingPOST_3 = any;
interface TFormDataOfimportExcelUsingPOST_3 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_3 = R_boolean_;
type TBodyOfpageUsingPOST_3 = PageParams_StorePageQuery_;
type TResponseOfpageUsingPOST_3 = R_IPage_Store__;
type TBodyOfpreviewUsingPOST_3 = PageParams_StorePageQuery_;
type TResponseOfpreviewUsingPOST_3 = R_string_;
type TBodyOfqueryUsingPOST_3 = Store;
type TResponseOfqueryUsingPOST_3 = R_List_Store__;
interface TPathOfgetUsingGET_3 {
    id?: number;
}
type TResponseOfgetUsingGET_3 = R_Store_;
type TBodyOfsaveUsingPOST_4 = StoreUserSaveDTO;
type TResponseOfsaveUsingPOST_4 = R_StoreUser_;
type TBodyOfupdateUsingPUT_4 = StoreUserUpdateDTO;
type TResponseOfupdateUsingPUT_4 = R_StoreUser_;
type TBodyOfdeleteUsingDELETE_4 = number[];
type TResponseOfdeleteUsingDELETE_4 = R_boolean_;
type TBodyOfupdateAllUsingPUT_4 = StoreUser;
type TResponseOfupdateAllUsingPUT_4 = R_StoreUser_;
type TBodyOfexportExcelUsingPOST_4 = PageParams_StoreUserPageQuery_;
type TResponseOfexportExcelUsingPOST_4 = any;
interface TFormDataOfimportExcelUsingPOST_4 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_4 = R_boolean_;
type TBodyOfpageUsingPOST_4 = PageParams_StoreUserPageQuery_;
type TResponseOfpageUsingPOST_4 = R_IPage_StoreUser__;
type TBodyOfpreviewUsingPOST_4 = PageParams_StoreUserPageQuery_;
type TResponseOfpreviewUsingPOST_4 = R_string_;
type TBodyOfqueryUsingPOST_4 = StoreUser;
type TResponseOfqueryUsingPOST_4 = R_List_StoreUser__;
interface TPathOfgetUsingGET_4 {
    id?: number;
}
type TResponseOfgetUsingGET_4 = R_StoreUser_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/store"): {
        /**
         * @description 新增 saveUsingPOST_3
         * 店铺
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_3;
        }): Promise<TResponseOfsaveUsingPOST_3>;
        /**
         * @description 修改 updateUsingPUT_3
         * 店铺
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_3;
        }): Promise<TResponseOfupdateUsingPUT_3>;
        /**
         * @description 删除 deleteUsingDELETE_3
         * 店铺
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_3;
        }): Promise<TResponseOfdeleteUsingDELETE_3>;
    };
    (url: "/store/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_3
         * 店铺
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_3;
        }): Promise<TResponseOfupdateAllUsingPUT_3>;
    };
    (url: "/store/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_3
         * 店铺
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_3;
        }): Promise<TResponseOfexportExcelUsingPOST_3>;
    };
    (url: "/store/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_3
         * 店铺
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_3;
        }): Promise<TResponseOfimportExcelUsingPOST_3>;
    };
    (url: "/store/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_3
         * 店铺
         */
        post(options: {
            body: TBodyOfpageUsingPOST_3;
        }): Promise<TResponseOfpageUsingPOST_3>;
    };
    (url: "/store/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_3
         * 店铺
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_3;
        }): Promise<TResponseOfpreviewUsingPOST_3>;
    };
    (url: "/store/query"): {
        /**
         * @description 批量查询 queryUsingPOST_3
         * 店铺
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_3;
        }): Promise<TResponseOfqueryUsingPOST_3>;
    };
    (url: "/store/{id}"): {
        /**
         * @description 单体查询 getUsingGET_3
         * 店铺
         */
        get(options: {
            path: TPathOfgetUsingGET_3;
        }): Promise<TResponseOfgetUsingGET_3>;
    };
    (url: "/storeUser"): {
        /**
         * @description 新增 saveUsingPOST_4
         * 店铺用户
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_4;
        }): Promise<TResponseOfsaveUsingPOST_4>;
        /**
         * @description 修改 updateUsingPUT_4
         * 店铺用户
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_4;
        }): Promise<TResponseOfupdateUsingPUT_4>;
        /**
         * @description 删除 deleteUsingDELETE_4
         * 店铺用户
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_4;
        }): Promise<TResponseOfdeleteUsingDELETE_4>;
    };
    (url: "/storeUser/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_4
         * 店铺用户
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_4;
        }): Promise<TResponseOfupdateAllUsingPUT_4>;
    };
    (url: "/storeUser/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_4
         * 店铺用户
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_4;
        }): Promise<TResponseOfexportExcelUsingPOST_4>;
    };
    (url: "/storeUser/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_4
         * 店铺用户
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_4;
        }): Promise<TResponseOfimportExcelUsingPOST_4>;
    };
    (url: "/storeUser/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_4
         * 店铺用户
         */
        post(options: {
            body: TBodyOfpageUsingPOST_4;
        }): Promise<TResponseOfpageUsingPOST_4>;
    };
    (url: "/storeUser/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_4
         * 店铺用户
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_4;
        }): Promise<TResponseOfpreviewUsingPOST_4>;
    };
    (url: "/storeUser/query"): {
        /**
         * @description 批量查询 queryUsingPOST_4
         * 店铺用户
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_4;
        }): Promise<TResponseOfqueryUsingPOST_4>;
    };
    (url: "/storeUser/{id}"): {
        /**
         * @description 单体查询 getUsingGET_4
         * 店铺用户
         */
        get(options: {
            path: TPathOfgetUsingGET_4;
        }): Promise<TResponseOfgetUsingGET_4>;
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

export { IApiFn, IPage_StoreUser_, IPage_Store_, PageParams_StorePageQuery_, PageParams_StoreUserPageQuery_, R_IPage_StoreUser__, R_IPage_Store__, R_List_StoreUser__, R_List_Store__, R_StoreUser_, R_Store_, R_boolean_, R_string_, RequestProvider, Store, StorePageQuery, StoreSaveDTO, StoreUpdateDTO, StoreUser, StoreUserPageQuery, StoreUserSaveDTO, StoreUserUpdateDTO, TBodyOfdeleteUsingDELETE_3, TBodyOfdeleteUsingDELETE_4, TBodyOfexportExcelUsingPOST_3, TBodyOfexportExcelUsingPOST_4, TBodyOfpageUsingPOST_3, TBodyOfpageUsingPOST_4, TBodyOfpreviewUsingPOST_3, TBodyOfpreviewUsingPOST_4, TBodyOfqueryUsingPOST_3, TBodyOfqueryUsingPOST_4, TBodyOfsaveUsingPOST_3, TBodyOfsaveUsingPOST_4, TBodyOfupdateAllUsingPUT_3, TBodyOfupdateAllUsingPUT_4, TBodyOfupdateUsingPUT_3, TBodyOfupdateUsingPUT_4, TFormDataOfimportExcelUsingPOST_3, TFormDataOfimportExcelUsingPOST_4, TPathOfgetUsingGET_3, TPathOfgetUsingGET_4, TResponseOfdeleteUsingDELETE_3, TResponseOfdeleteUsingDELETE_4, TResponseOfexportExcelUsingPOST_3, TResponseOfexportExcelUsingPOST_4, TResponseOfgetUsingGET_3, TResponseOfgetUsingGET_4, TResponseOfimportExcelUsingPOST_3, TResponseOfimportExcelUsingPOST_4, TResponseOfpageUsingPOST_3, TResponseOfpageUsingPOST_4, TResponseOfpreviewUsingPOST_3, TResponseOfpreviewUsingPOST_4, TResponseOfqueryUsingPOST_3, TResponseOfqueryUsingPOST_4, TResponseOfsaveUsingPOST_3, TResponseOfsaveUsingPOST_4, TResponseOfupdateAllUsingPUT_3, TResponseOfupdateAllUsingPUT_4, TResponseOfupdateUsingPUT_3, TResponseOfupdateUsingPUT_4, createRequest };
