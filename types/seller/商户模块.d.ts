interface IPage_Merchant_ {
    current?: number;
    pages?: number;
    records?: Merchant[];
    size?: number;
    total?: number;
}
/**
 * @description: 商户
 */
interface Merchant {
    account?: string;
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    contact?: string;
    countyCode?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    id?: number;
    merchantName?: string;
    merchantType?: string;
    mobile?: string;
    password?: string;
    provCode?: string;
    state?: string;
    tenantCode?: string;
    unifiedCreditCode?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 商户审核
 */
interface MerchantApproveDTO {
    merchantId?: number;
    state?: string;
    userId?: number;
}
/**
 * @description: 商户
 */
interface MerchantPageQuery {
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    contact?: string;
    countyCode?: string;
    merchantName?: string;
    merchantType?: string;
    mobile?: string;
    provCode?: string;
    state?: string;
    unifiedCreditCode?: string;
}
/**
 * @description: 商户注册
 */
interface MerchantRegisterDTO {
    account?: string;
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    confirmPassword?: string;
    contact?: string;
    countyCode?: string;
    merchantName?: string;
    merchantType?: string;
    mobile?: string;
    password?: string;
    provCode?: string;
    unifiedCreditCode?: string;
    verifyCode?: string;
    verifyKey?: string;
}
/**
 * @description: 商户
 */
interface MerchantSaveDTO {
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    contact?: string;
    countyCode?: string;
    merchantName?: string;
    merchantType?: string;
    mobile?: string;
    provCode?: string;
    state?: string;
    unifiedCreditCode?: string;
}
/**
 * @description: 商户
 */
interface MerchantUpdateDTO {
    address?: string;
    busLicenseFile?: string;
    busLicenseName?: string;
    cityCode?: string;
    contact?: string;
    countyCode?: string;
    id?: number;
    merchantName?: string;
    merchantType?: string;
    mobile?: string;
    provCode?: string;
    state?: string;
    unifiedCreditCode?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_MerchantPageQuery_ {
    current?: number;
    extra?: any;
    model: MerchantPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_Merchant__ {
    code?: number;
    data?: IPage_Merchant_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Merchant__ {
    code?: number;
    data?: Merchant[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Merchant_ {
    code?: number;
    data?: Merchant;
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
type TBodyOfsaveUsingPOST_2 = MerchantSaveDTO;
type TResponseOfsaveUsingPOST_2 = R_Merchant_;
type TBodyOfupdateUsingPUT_2 = MerchantUpdateDTO;
type TResponseOfupdateUsingPUT_2 = R_Merchant_;
type TBodyOfdeleteUsingDELETE_2 = number[];
type TResponseOfdeleteUsingDELETE_2 = R_boolean_;
type TBodyOfupdateAllUsingPUT_2 = Merchant;
type TResponseOfupdateAllUsingPUT_2 = R_Merchant_;
type TBodyOfapproveUsingPOST = MerchantApproveDTO;
type TResponseOfapproveUsingPOST = R_boolean_;
type TBodyOfexportExcelUsingPOST_2 = PageParams_MerchantPageQuery_;
type TResponseOfexportExcelUsingPOST_2 = any;
interface TFormDataOfimportExcelUsingPOST_2 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_2 = R_boolean_;
type TBodyOfpageUsingPOST_2 = PageParams_MerchantPageQuery_;
type TResponseOfpageUsingPOST_2 = R_IPage_Merchant__;
type TBodyOfpreviewUsingPOST_2 = PageParams_MerchantPageQuery_;
type TResponseOfpreviewUsingPOST_2 = R_string_;
type TBodyOfqueryUsingPOST_2 = Merchant;
type TResponseOfqueryUsingPOST_2 = R_List_Merchant__;
type TBodyOfregisterUsingPUT = MerchantRegisterDTO;
type TResponseOfregisterUsingPUT = R_Merchant_;
interface TPathOfgetUsingGET_2 {
    id?: number;
}
type TResponseOfgetUsingGET_2 = R_Merchant_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/merchant"): {
        /**
         * @description 新增 saveUsingPOST_2
         * 商户
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_2;
        }): Promise<TResponseOfsaveUsingPOST_2>;
        /**
         * @description 修改 updateUsingPUT_2
         * 商户
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_2;
        }): Promise<TResponseOfupdateUsingPUT_2>;
        /**
         * @description 删除 deleteUsingDELETE_2
         * 商户
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_2;
        }): Promise<TResponseOfdeleteUsingDELETE_2>;
    };
    (url: "/merchant/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_2
         * 商户
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_2;
        }): Promise<TResponseOfupdateAllUsingPUT_2>;
    };
    (url: "/merchant/approve"): {
        /**
         * @description 商户审核后 approveUsingPOST
         * 商户
         */
        post(options: {
            body: TBodyOfapproveUsingPOST;
        }): Promise<TResponseOfapproveUsingPOST>;
    };
    (url: "/merchant/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_2
         * 商户
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_2;
        }): Promise<TResponseOfexportExcelUsingPOST_2>;
    };
    (url: "/merchant/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_2
         * 商户
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_2;
        }): Promise<TResponseOfimportExcelUsingPOST_2>;
    };
    (url: "/merchant/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_2
         * 商户
         */
        post(options: {
            body: TBodyOfpageUsingPOST_2;
        }): Promise<TResponseOfpageUsingPOST_2>;
    };
    (url: "/merchant/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_2
         * 商户
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_2;
        }): Promise<TResponseOfpreviewUsingPOST_2>;
    };
    (url: "/merchant/query"): {
        /**
         * @description 批量查询 queryUsingPOST_2
         * 商户
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_2;
        }): Promise<TResponseOfqueryUsingPOST_2>;
    };
    (url: "/merchant/register"): {
        /**
         * @description 商户注册 registerUsingPUT
         * 商户
         */
        put(options: {
            body: TBodyOfregisterUsingPUT;
        }): Promise<TResponseOfregisterUsingPUT>;
    };
    (url: "/merchant/{id}"): {
        /**
         * @description 单体查询 getUsingGET_2
         * 商户
         */
        get(options: {
            path: TPathOfgetUsingGET_2;
        }): Promise<TResponseOfgetUsingGET_2>;
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

export { IApiFn, IPage_Merchant_, Merchant, MerchantApproveDTO, MerchantPageQuery, MerchantRegisterDTO, MerchantSaveDTO, MerchantUpdateDTO, PageParams_MerchantPageQuery_, R_IPage_Merchant__, R_List_Merchant__, R_Merchant_, R_boolean_, R_string_, RequestProvider, TBodyOfapproveUsingPOST, TBodyOfdeleteUsingDELETE_2, TBodyOfexportExcelUsingPOST_2, TBodyOfpageUsingPOST_2, TBodyOfpreviewUsingPOST_2, TBodyOfqueryUsingPOST_2, TBodyOfregisterUsingPUT, TBodyOfsaveUsingPOST_2, TBodyOfupdateAllUsingPUT_2, TBodyOfupdateUsingPUT_2, TFormDataOfimportExcelUsingPOST_2, TPathOfgetUsingGET_2, TResponseOfapproveUsingPOST, TResponseOfdeleteUsingDELETE_2, TResponseOfexportExcelUsingPOST_2, TResponseOfgetUsingGET_2, TResponseOfimportExcelUsingPOST_2, TResponseOfpageUsingPOST_2, TResponseOfpreviewUsingPOST_2, TResponseOfqueryUsingPOST_2, TResponseOfregisterUsingPUT, TResponseOfsaveUsingPOST_2, TResponseOfupdateAllUsingPUT_2, TResponseOfupdateUsingPUT_2, createRequest };
