interface IPage_Kpi_ {
    current?: number;
    pages?: number;
    records?: Kpi[];
    size?: number;
    total?: number;
}
/**
 * @description: 绩效目标
 */
interface Kpi {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    employeeId?: number;
    id?: number;
    merchantId?: string;
    month?: string;
    storeId?: string;
    targetSale?: number;
    targetVipNum?: number;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 绩效目标
 */
interface KpiPageQuery {
    createdTime?: string;
    employeeId?: number;
    merchantId?: string;
    month?: string;
    storeId?: string;
    targetSale?: number;
    targetVipNum?: number;
}
/**
 * @description: 绩效目标
 */
interface KpiSaveDTO {
    createdTime?: string;
    employeeId?: number;
    merchantId?: string;
    month?: string;
    storeId?: string;
    targetSale?: number;
    targetVipNum?: number;
}
/**
 * @description: 绩效目标
 */
interface KpiUpdateDTO {
    createdTime?: string;
    employeeId?: number;
    id?: number;
    merchantId?: string;
    month?: string;
    storeId?: string;
    targetSale?: number;
    targetVipNum?: number;
}
/**
 * @description: 分页参数
 */
interface PageParams_KpiPageQuery_ {
    current?: number;
    extra?: any;
    model: KpiPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_Kpi__ {
    code?: number;
    data?: IPage_Kpi_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Kpi_ {
    code?: number;
    data?: Kpi;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Kpi__ {
    code?: number;
    data?: Kpi[];
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
type TBodyOfsaveUsingPOST_15 = KpiSaveDTO;
type TResponseOfsaveUsingPOST_15 = R_Kpi_;
type TBodyOfupdateUsingPUT_15 = KpiUpdateDTO;
type TResponseOfupdateUsingPUT_15 = R_Kpi_;
type TBodyOfdeleteUsingDELETE_16 = number[];
type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
type TBodyOfupdateAllUsingPUT_15 = Kpi;
type TResponseOfupdateAllUsingPUT_15 = R_Kpi_;
type TBodyOfexportExcelUsingPOST_15 = PageParams_KpiPageQuery_;
type TResponseOfexportExcelUsingPOST_15 = any;
interface TFormDataOfimportExcelUsingPOST_15 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_15 = R_boolean_;
type TBodyOfpageUsingPOST_16 = PageParams_KpiPageQuery_;
type TResponseOfpageUsingPOST_16 = R_IPage_Kpi__;
type TBodyOfpreviewUsingPOST_15 = PageParams_KpiPageQuery_;
type TResponseOfpreviewUsingPOST_15 = R_string_;
type TBodyOfqueryUsingPOST_15 = Kpi;
type TResponseOfqueryUsingPOST_15 = R_List_Kpi__;
interface TPathOfgetUsingGET_15 {
    id?: number;
}
type TResponseOfgetUsingGET_15 = R_Kpi_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/kpi"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/saveUsingPOST_15)
         *
         * @tag绩效目标
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_15;
        }): Promise<TResponseOfsaveUsingPOST_15>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/updateUsingPUT_15)
         *
         * @tag绩效目标
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_15;
        }): Promise<TResponseOfupdateUsingPUT_15>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/deleteUsingDELETE_16)
         *
         * @tag绩效目标
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_16;
        }): Promise<TResponseOfdeleteUsingDELETE_16>;
    };
    (url: "/kpi/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/updateAllUsingPUT_15)
         *
         * @tag绩效目标
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_15;
        }): Promise<TResponseOfupdateAllUsingPUT_15>;
    };
    (url: "/kpi/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/exportExcelUsingPOST_15)
         *
         * @tag绩效目标
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_15;
        }): Promise<TResponseOfexportExcelUsingPOST_15>;
    };
    (url: "/kpi/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/importExcelUsingPOST_15)
         *
         * @tag绩效目标
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_15;
        }): Promise<TResponseOfimportExcelUsingPOST_15>;
    };
    (url: "/kpi/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/pageUsingPOST_16)
         *
         * @tag绩效目标
         */
        post(options: {
            body: TBodyOfpageUsingPOST_16;
        }): Promise<TResponseOfpageUsingPOST_16>;
    };
    (url: "/kpi/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/previewUsingPOST_15)
         *
         * @tag绩效目标
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_15;
        }): Promise<TResponseOfpreviewUsingPOST_15>;
    };
    (url: "/kpi/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/queryUsingPOST_15)
         *
         * @tag绩效目标
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_15;
        }): Promise<TResponseOfqueryUsingPOST_15>;
    };
    (url: "/kpi/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/绩效目标模块/绩效目标/getUsingGET_15)
         *
         * @tag绩效目标
         */
        get(options: {
            path: TPathOfgetUsingGET_15;
        }): Promise<TResponseOfgetUsingGET_15>;
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

export { IApiFn, IPage_Kpi_, Kpi, KpiPageQuery, KpiSaveDTO, KpiUpdateDTO, PageParams_KpiPageQuery_, R_IPage_Kpi__, R_Kpi_, R_List_Kpi__, R_boolean_, R_string_, RequestProvider, TBodyOfdeleteUsingDELETE_16, TBodyOfexportExcelUsingPOST_15, TBodyOfpageUsingPOST_16, TBodyOfpreviewUsingPOST_15, TBodyOfqueryUsingPOST_15, TBodyOfsaveUsingPOST_15, TBodyOfupdateAllUsingPUT_15, TBodyOfupdateUsingPUT_15, TFormDataOfimportExcelUsingPOST_15, TPathOfgetUsingGET_15, TResponseOfdeleteUsingDELETE_16, TResponseOfexportExcelUsingPOST_15, TResponseOfgetUsingGET_15, TResponseOfimportExcelUsingPOST_15, TResponseOfpageUsingPOST_16, TResponseOfpreviewUsingPOST_15, TResponseOfqueryUsingPOST_15, TResponseOfsaveUsingPOST_15, TResponseOfupdateAllUsingPUT_15, TResponseOfupdateUsingPUT_15, createRequest };
