interface IPage_MerchantSvc_ {
    current?: number;
    pages?: number;
    records?: MerchantSvc[];
    size?: number;
    total?: number;
}
interface IPage_StoreSvcCategory_ {
    current?: number;
    pages?: number;
    records?: StoreSvcCategory[];
    size?: number;
    total?: number;
}
interface IPage_StoreSvc_ {
    current?: number;
    pages?: number;
    records?: StoreSvc[];
    size?: number;
    total?: number;
}
interface IPage_SvcCatetory_ {
    current?: number;
    pages?: number;
    records?: SvcCatetory[];
    size?: number;
    total?: number;
}
/**
 * @description: 商户服务
 */
interface MerchantSvc {
    commissionType?: string;
    commissionValue?: number;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    describe?: string;
    echoMap?: any;
    id?: number;
    lastSyncTime?: string;
    merchantId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    soldPrice?: number;
    state?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    syncState?: string;
    updateTime?: string;
    updatedBy?: number;
    vipPrice?: string;
}
/**
 * @description: 商户服务
 */
interface MerchantSvcPageQuery {
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    lastSyncTime?: string;
    merchantId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    soldPrice?: number;
    state?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    syncState?: string;
    vipPrice?: string;
}
/**
 * @description: 商户服务
 */
interface MerchantSvcSaveDTO {
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    lastSyncTime?: string;
    merchantId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    soldPrice?: number;
    state?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    syncState?: string;
    vipPrice?: string;
}
/**
 * @description: 商户服务
 */
interface MerchantSvcUpdateDTO {
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    id?: number;
    lastSyncTime?: string;
    merchantId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    soldPrice?: number;
    state?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    syncState?: string;
    vipPrice?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_MerchantSvcPageQuery_ {
    current?: number;
    extra?: any;
    model: MerchantSvcPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_StoreSvcCategoryPageQuery_ {
    current?: number;
    extra?: any;
    model: StoreSvcCategoryPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_StoreSvcPageQuery_ {
    current?: number;
    extra?: any;
    model: StoreSvcPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_SvcCatetoryPageQuery_ {
    current?: number;
    extra?: any;
    model: SvcCatetoryPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_MerchantSvc__ {
    code?: number;
    data?: IPage_MerchantSvc_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_StoreSvcCategory__ {
    code?: number;
    data?: IPage_StoreSvcCategory_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_StoreSvc__ {
    code?: number;
    data?: IPage_StoreSvc_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_SvcCatetory__ {
    code?: number;
    data?: IPage_SvcCatetory_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_MerchantSvc__ {
    code?: number;
    data?: MerchantSvc[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_StoreSvcCategory__ {
    code?: number;
    data?: StoreSvcCategory[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_StoreSvc__ {
    code?: number;
    data?: StoreSvc[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_SvcCatetory__ {
    code?: number;
    data?: SvcCatetory[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_MerchantSvc_ {
    code?: number;
    data?: MerchantSvc;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_StoreSvcCategory_ {
    code?: number;
    data?: StoreSvcCategory;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_StoreSvc_ {
    code?: number;
    data?: StoreSvc;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SvcCatetory_ {
    code?: number;
    data?: SvcCatetory;
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
 * @description: 门店服务
 */
interface StoreSvc {
    canPoint?: string;
    commissionType?: string;
    commissionValue?: number;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    describe?: string;
    echoMap?: any;
    id?: number;
    lastSyncTime?: string;
    merchantId?: string;
    merchantServiceId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    onState?: string;
    otherVipPriceStrategy?: string;
    payVipPriceStrategy?: string;
    soldPrice?: number;
    state?: string;
    storeId?: string;
    storeMinSoldPrice?: number;
    storeSoldPrice?: number;
    storeVipPrice?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    updateTime?: string;
    updatedBy?: number;
    vipPrice?: string;
    vipPriceStrategy?: string;
}
/**
 * @description: 门店服务分类
 */
interface StoreSvcCategory {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    merchantId?: number;
    storeId?: number;
    svcCatetoryId?: number;
    updateTime?: string;
    updatedBy?: number;
    visible?: string;
}
/**
 * @description: 门店服务分类
 */
interface StoreSvcCategoryPageQuery {
    createdTime?: string;
    merchantId?: number;
    storeId?: number;
    svcCatetoryId?: number;
    visible?: string;
}
/**
 * @description: 门店服务分类
 */
interface StoreSvcCategorySaveDTO {
    createdTime?: string;
    merchantId?: number;
    storeId?: number;
    svcCatetoryId?: number;
    visible?: string;
}
/**
 * @description: 门店服务分类
 */
interface StoreSvcCategoryUpdateDTO {
    createdTime?: string;
    id?: number;
    merchantId?: number;
    storeId?: number;
    svcCatetoryId?: number;
    visible?: string;
}
/**
 * @description: 门店服务
 */
interface StoreSvcPageQuery {
    canPoint?: string;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    lastSyncTime?: string;
    merchantId?: string;
    merchantServiceId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    onState?: string;
    otherVipPriceStrategy?: string;
    payVipPriceStrategy?: string;
    soldPrice?: number;
    state?: string;
    storeId?: string;
    storeMinSoldPrice?: number;
    storeSoldPrice?: number;
    storeVipPrice?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    vipPrice?: string;
    vipPriceStrategy?: string;
}
/**
 * @description: 门店服务
 */
interface StoreSvcSaveDTO {
    canPoint?: string;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    lastSyncTime?: string;
    merchantId?: string;
    merchantServiceId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    onState?: string;
    otherVipPriceStrategy?: string;
    payVipPriceStrategy?: string;
    soldPrice?: number;
    state?: string;
    storeId?: string;
    storeMinSoldPrice?: number;
    storeSoldPrice?: number;
    storeVipPrice?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    vipPrice?: string;
    vipPriceStrategy?: string;
}
/**
 * @description: 门店服务
 */
interface StoreSvcUpdateDTO {
    canPoint?: string;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    describe?: string;
    id?: number;
    lastSyncTime?: string;
    merchantId?: string;
    merchantServiceId?: number;
    minSoldPrice?: number;
    mnemocode?: string;
    onState?: string;
    otherVipPriceStrategy?: string;
    payVipPriceStrategy?: string;
    soldPrice?: number;
    state?: string;
    storeId?: string;
    storeMinSoldPrice?: number;
    storeSoldPrice?: number;
    storeVipPrice?: string;
    svcCatetoryId?: number;
    svcImgFile?: string;
    svcName?: string;
    svcTimeNum?: number;
    svcTimeUnit?: string;
    svcType?: string;
    vipPrice?: string;
    vipPriceStrategy?: string;
}
/**
 * @description: 服务分类
 */
interface SvcCatetory {
    categoryName?: string;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    merchantId?: number;
    parentId?: number;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 服务分类
 */
interface SvcCatetoryPageQuery {
    categoryName?: string;
    createdTime?: string;
    merchantId?: number;
    parentId?: number;
}
/**
 * @description: 服务分类
 */
interface SvcCatetorySaveDTO {
    categoryName?: string;
    createdTime?: string;
    merchantId?: number;
    parentId?: number;
}
/**
 * @description: 服务分类
 */
interface SvcCatetoryUpdateDTO {
    categoryName?: string;
    createdTime?: string;
    id?: number;
    merchantId?: number;
    parentId?: number;
}
type TBodyOfsaveUsingPOST_5 = MerchantSvcSaveDTO;
type TResponseOfsaveUsingPOST_5 = R_MerchantSvc_;
type TBodyOfupdateUsingPUT_5 = MerchantSvcUpdateDTO;
type TResponseOfupdateUsingPUT_5 = R_MerchantSvc_;
type TBodyOfdeleteUsingDELETE_5 = number[];
type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
type TBodyOfupdateAllUsingPUT_5 = MerchantSvc;
type TResponseOfupdateAllUsingPUT_5 = R_MerchantSvc_;
type TBodyOfexportExcelUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
type TResponseOfexportExcelUsingPOST_5 = any;
interface TFormDataOfimportExcelUsingPOST_5 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
type TBodyOfpageUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
type TResponseOfpageUsingPOST_5 = R_IPage_MerchantSvc__;
type TBodyOfpreviewUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
type TResponseOfpreviewUsingPOST_5 = R_string_;
type TBodyOfqueryUsingPOST_5 = MerchantSvc;
type TResponseOfqueryUsingPOST_5 = R_List_MerchantSvc__;
interface TPathOfgetUsingGET_5 {
    id?: number;
}
type TResponseOfgetUsingGET_5 = R_MerchantSvc_;
type TBodyOfsaveUsingPOST_7 = StoreSvcSaveDTO;
type TResponseOfsaveUsingPOST_7 = R_StoreSvc_;
type TBodyOfupdateUsingPUT_7 = StoreSvcUpdateDTO;
type TResponseOfupdateUsingPUT_7 = R_StoreSvc_;
type TBodyOfdeleteUsingDELETE_7 = number[];
type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
type TBodyOfupdateAllUsingPUT_7 = StoreSvc;
type TResponseOfupdateAllUsingPUT_7 = R_StoreSvc_;
type TBodyOfexportExcelUsingPOST_7 = PageParams_StoreSvcPageQuery_;
type TResponseOfexportExcelUsingPOST_7 = any;
interface TFormDataOfimportExcelUsingPOST_7 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
type TBodyOfpageUsingPOST_7 = PageParams_StoreSvcPageQuery_;
type TResponseOfpageUsingPOST_7 = R_IPage_StoreSvc__;
type TBodyOfpreviewUsingPOST_7 = PageParams_StoreSvcPageQuery_;
type TResponseOfpreviewUsingPOST_7 = R_string_;
type TBodyOfqueryUsingPOST_7 = StoreSvc;
type TResponseOfqueryUsingPOST_7 = R_List_StoreSvc__;
interface TPathOfgetUsingGET_7 {
    id?: number;
}
type TResponseOfgetUsingGET_7 = R_StoreSvc_;
type TBodyOfsaveUsingPOST_6 = StoreSvcCategorySaveDTO;
type TResponseOfsaveUsingPOST_6 = R_StoreSvcCategory_;
type TBodyOfupdateUsingPUT_6 = StoreSvcCategoryUpdateDTO;
type TResponseOfupdateUsingPUT_6 = R_StoreSvcCategory_;
type TBodyOfdeleteUsingDELETE_6 = number[];
type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
type TBodyOfupdateAllUsingPUT_6 = StoreSvcCategory;
type TResponseOfupdateAllUsingPUT_6 = R_StoreSvcCategory_;
type TBodyOfexportExcelUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
type TResponseOfexportExcelUsingPOST_6 = any;
interface TFormDataOfimportExcelUsingPOST_6 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
type TBodyOfpageUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
type TResponseOfpageUsingPOST_6 = R_IPage_StoreSvcCategory__;
type TBodyOfpreviewUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
type TResponseOfpreviewUsingPOST_6 = R_string_;
type TBodyOfqueryUsingPOST_6 = StoreSvcCategory;
type TResponseOfqueryUsingPOST_6 = R_List_StoreSvcCategory__;
interface TPathOfgetUsingGET_6 {
    id?: number;
}
type TResponseOfgetUsingGET_6 = R_StoreSvcCategory_;
type TBodyOfsaveUsingPOST_8 = SvcCatetorySaveDTO;
type TResponseOfsaveUsingPOST_8 = R_SvcCatetory_;
type TBodyOfupdateUsingPUT_8 = SvcCatetoryUpdateDTO;
type TResponseOfupdateUsingPUT_8 = R_SvcCatetory_;
type TBodyOfdeleteUsingDELETE_8 = number[];
type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
type TBodyOfupdateAllUsingPUT_8 = SvcCatetory;
type TResponseOfupdateAllUsingPUT_8 = R_SvcCatetory_;
type TBodyOfexportExcelUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
type TResponseOfexportExcelUsingPOST_8 = any;
interface TFormDataOfimportExcelUsingPOST_8 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
type TBodyOfpageUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
type TResponseOfpageUsingPOST_8 = R_IPage_SvcCatetory__;
type TBodyOfpreviewUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
type TResponseOfpreviewUsingPOST_8 = R_string_;
type TBodyOfqueryUsingPOST_8 = SvcCatetory;
type TResponseOfqueryUsingPOST_8 = R_List_SvcCatetory__;
interface TPathOfgetUsingGET_8 {
    id?: number;
}
type TResponseOfgetUsingGET_8 = R_SvcCatetory_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/merchantSvc"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/saveUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_5;
        }): Promise<TResponseOfsaveUsingPOST_5>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/updateUsingPUT_5)
         *
         * @tag商户服务
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_5;
        }): Promise<TResponseOfupdateUsingPUT_5>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/deleteUsingDELETE_5)
         *
         * @tag商户服务
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_5;
        }): Promise<TResponseOfdeleteUsingDELETE_5>;
    };
    (url: "/merchantSvc/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/updateAllUsingPUT_5)
         *
         * @tag商户服务
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_5;
        }): Promise<TResponseOfupdateAllUsingPUT_5>;
    };
    (url: "/merchantSvc/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/exportExcelUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_5;
        }): Promise<TResponseOfexportExcelUsingPOST_5>;
    };
    (url: "/merchantSvc/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/importExcelUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_5;
        }): Promise<TResponseOfimportExcelUsingPOST_5>;
    };
    (url: "/merchantSvc/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/pageUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            body: TBodyOfpageUsingPOST_5;
        }): Promise<TResponseOfpageUsingPOST_5>;
    };
    (url: "/merchantSvc/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/previewUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_5;
        }): Promise<TResponseOfpreviewUsingPOST_5>;
    };
    (url: "/merchantSvc/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/queryUsingPOST_5)
         *
         * @tag商户服务
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_5;
        }): Promise<TResponseOfqueryUsingPOST_5>;
    };
    (url: "/merchantSvc/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/服务模块/商户服务/getUsingGET_5)
         *
         * @tag商户服务
         */
        get(options: {
            path: TPathOfgetUsingGET_5;
        }): Promise<TResponseOfgetUsingGET_5>;
    };
    (url: "/storeSvc"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/saveUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_7;
        }): Promise<TResponseOfsaveUsingPOST_7>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/updateUsingPUT_7)
         *
         * @tag门店服务
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_7;
        }): Promise<TResponseOfupdateUsingPUT_7>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/deleteUsingDELETE_7)
         *
         * @tag门店服务
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_7;
        }): Promise<TResponseOfdeleteUsingDELETE_7>;
    };
    (url: "/storeSvc/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/updateAllUsingPUT_7)
         *
         * @tag门店服务
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_7;
        }): Promise<TResponseOfupdateAllUsingPUT_7>;
    };
    (url: "/storeSvc/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/exportExcelUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_7;
        }): Promise<TResponseOfexportExcelUsingPOST_7>;
    };
    (url: "/storeSvc/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/importExcelUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_7;
        }): Promise<TResponseOfimportExcelUsingPOST_7>;
    };
    (url: "/storeSvc/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/pageUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            body: TBodyOfpageUsingPOST_7;
        }): Promise<TResponseOfpageUsingPOST_7>;
    };
    (url: "/storeSvc/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/previewUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_7;
        }): Promise<TResponseOfpreviewUsingPOST_7>;
    };
    (url: "/storeSvc/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/queryUsingPOST_7)
         *
         * @tag门店服务
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_7;
        }): Promise<TResponseOfqueryUsingPOST_7>;
    };
    (url: "/storeSvc/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务/getUsingGET_7)
         *
         * @tag门店服务
         */
        get(options: {
            path: TPathOfgetUsingGET_7;
        }): Promise<TResponseOfgetUsingGET_7>;
    };
    (url: "/storeSvcCategory"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/saveUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_6;
        }): Promise<TResponseOfsaveUsingPOST_6>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/updateUsingPUT_6)
         *
         * @tag门店服务分类
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_6;
        }): Promise<TResponseOfupdateUsingPUT_6>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/deleteUsingDELETE_6)
         *
         * @tag门店服务分类
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_6;
        }): Promise<TResponseOfdeleteUsingDELETE_6>;
    };
    (url: "/storeSvcCategory/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/updateAllUsingPUT_6)
         *
         * @tag门店服务分类
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_6;
        }): Promise<TResponseOfupdateAllUsingPUT_6>;
    };
    (url: "/storeSvcCategory/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/exportExcelUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_6;
        }): Promise<TResponseOfexportExcelUsingPOST_6>;
    };
    (url: "/storeSvcCategory/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/importExcelUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_6;
        }): Promise<TResponseOfimportExcelUsingPOST_6>;
    };
    (url: "/storeSvcCategory/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/pageUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            body: TBodyOfpageUsingPOST_6;
        }): Promise<TResponseOfpageUsingPOST_6>;
    };
    (url: "/storeSvcCategory/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/previewUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_6;
        }): Promise<TResponseOfpreviewUsingPOST_6>;
    };
    (url: "/storeSvcCategory/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/queryUsingPOST_6)
         *
         * @tag门店服务分类
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_6;
        }): Promise<TResponseOfqueryUsingPOST_6>;
    };
    (url: "/storeSvcCategory/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/服务模块/门店服务分类/getUsingGET_6)
         *
         * @tag门店服务分类
         */
        get(options: {
            path: TPathOfgetUsingGET_6;
        }): Promise<TResponseOfgetUsingGET_6>;
    };
    (url: "/svcCatetory"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/saveUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_8;
        }): Promise<TResponseOfsaveUsingPOST_8>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/updateUsingPUT_8)
         *
         * @tag服务分类
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_8;
        }): Promise<TResponseOfupdateUsingPUT_8>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/deleteUsingDELETE_8)
         *
         * @tag服务分类
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_8;
        }): Promise<TResponseOfdeleteUsingDELETE_8>;
    };
    (url: "/svcCatetory/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/updateAllUsingPUT_8)
         *
         * @tag服务分类
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_8;
        }): Promise<TResponseOfupdateAllUsingPUT_8>;
    };
    (url: "/svcCatetory/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/exportExcelUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_8;
        }): Promise<TResponseOfexportExcelUsingPOST_8>;
    };
    (url: "/svcCatetory/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/importExcelUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_8;
        }): Promise<TResponseOfimportExcelUsingPOST_8>;
    };
    (url: "/svcCatetory/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/pageUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            body: TBodyOfpageUsingPOST_8;
        }): Promise<TResponseOfpageUsingPOST_8>;
    };
    (url: "/svcCatetory/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/previewUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_8;
        }): Promise<TResponseOfpreviewUsingPOST_8>;
    };
    (url: "/svcCatetory/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/queryUsingPOST_8)
         *
         * @tag服务分类
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_8;
        }): Promise<TResponseOfqueryUsingPOST_8>;
    };
    (url: "/svcCatetory/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/服务模块/服务分类/getUsingGET_8)
         *
         * @tag服务分类
         */
        get(options: {
            path: TPathOfgetUsingGET_8;
        }): Promise<TResponseOfgetUsingGET_8>;
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

export { IApiFn, IPage_MerchantSvc_, IPage_StoreSvcCategory_, IPage_StoreSvc_, IPage_SvcCatetory_, MerchantSvc, MerchantSvcPageQuery, MerchantSvcSaveDTO, MerchantSvcUpdateDTO, PageParams_MerchantSvcPageQuery_, PageParams_StoreSvcCategoryPageQuery_, PageParams_StoreSvcPageQuery_, PageParams_SvcCatetoryPageQuery_, R_IPage_MerchantSvc__, R_IPage_StoreSvcCategory__, R_IPage_StoreSvc__, R_IPage_SvcCatetory__, R_List_MerchantSvc__, R_List_StoreSvcCategory__, R_List_StoreSvc__, R_List_SvcCatetory__, R_MerchantSvc_, R_StoreSvcCategory_, R_StoreSvc_, R_SvcCatetory_, R_boolean_, R_string_, RequestProvider, StoreSvc, StoreSvcCategory, StoreSvcCategoryPageQuery, StoreSvcCategorySaveDTO, StoreSvcCategoryUpdateDTO, StoreSvcPageQuery, StoreSvcSaveDTO, StoreSvcUpdateDTO, SvcCatetory, SvcCatetoryPageQuery, SvcCatetorySaveDTO, SvcCatetoryUpdateDTO, TBodyOfdeleteUsingDELETE_5, TBodyOfdeleteUsingDELETE_6, TBodyOfdeleteUsingDELETE_7, TBodyOfdeleteUsingDELETE_8, TBodyOfexportExcelUsingPOST_5, TBodyOfexportExcelUsingPOST_6, TBodyOfexportExcelUsingPOST_7, TBodyOfexportExcelUsingPOST_8, TBodyOfpageUsingPOST_5, TBodyOfpageUsingPOST_6, TBodyOfpageUsingPOST_7, TBodyOfpageUsingPOST_8, TBodyOfpreviewUsingPOST_5, TBodyOfpreviewUsingPOST_6, TBodyOfpreviewUsingPOST_7, TBodyOfpreviewUsingPOST_8, TBodyOfqueryUsingPOST_5, TBodyOfqueryUsingPOST_6, TBodyOfqueryUsingPOST_7, TBodyOfqueryUsingPOST_8, TBodyOfsaveUsingPOST_5, TBodyOfsaveUsingPOST_6, TBodyOfsaveUsingPOST_7, TBodyOfsaveUsingPOST_8, TBodyOfupdateAllUsingPUT_5, TBodyOfupdateAllUsingPUT_6, TBodyOfupdateAllUsingPUT_7, TBodyOfupdateAllUsingPUT_8, TBodyOfupdateUsingPUT_5, TBodyOfupdateUsingPUT_6, TBodyOfupdateUsingPUT_7, TBodyOfupdateUsingPUT_8, TFormDataOfimportExcelUsingPOST_5, TFormDataOfimportExcelUsingPOST_6, TFormDataOfimportExcelUsingPOST_7, TFormDataOfimportExcelUsingPOST_8, TPathOfgetUsingGET_5, TPathOfgetUsingGET_6, TPathOfgetUsingGET_7, TPathOfgetUsingGET_8, TResponseOfdeleteUsingDELETE_5, TResponseOfdeleteUsingDELETE_6, TResponseOfdeleteUsingDELETE_7, TResponseOfdeleteUsingDELETE_8, TResponseOfexportExcelUsingPOST_5, TResponseOfexportExcelUsingPOST_6, TResponseOfexportExcelUsingPOST_7, TResponseOfexportExcelUsingPOST_8, TResponseOfgetUsingGET_5, TResponseOfgetUsingGET_6, TResponseOfgetUsingGET_7, TResponseOfgetUsingGET_8, TResponseOfimportExcelUsingPOST_5, TResponseOfimportExcelUsingPOST_6, TResponseOfimportExcelUsingPOST_7, TResponseOfimportExcelUsingPOST_8, TResponseOfpageUsingPOST_5, TResponseOfpageUsingPOST_6, TResponseOfpageUsingPOST_7, TResponseOfpageUsingPOST_8, TResponseOfpreviewUsingPOST_5, TResponseOfpreviewUsingPOST_6, TResponseOfpreviewUsingPOST_7, TResponseOfpreviewUsingPOST_8, TResponseOfqueryUsingPOST_5, TResponseOfqueryUsingPOST_6, TResponseOfqueryUsingPOST_7, TResponseOfqueryUsingPOST_8, TResponseOfsaveUsingPOST_5, TResponseOfsaveUsingPOST_6, TResponseOfsaveUsingPOST_7, TResponseOfsaveUsingPOST_8, TResponseOfupdateAllUsingPUT_5, TResponseOfupdateAllUsingPUT_6, TResponseOfupdateAllUsingPUT_7, TResponseOfupdateAllUsingPUT_8, TResponseOfupdateUsingPUT_5, TResponseOfupdateUsingPUT_6, TResponseOfupdateUsingPUT_7, TResponseOfupdateUsingPUT_8, createRequest };
