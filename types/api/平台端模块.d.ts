export interface IPage_Order_ {
    current?: number;
    pages?: number;
    records?: Order[];
    size?: number;
    total?: number;
}
/**
 * @description: 订单
 */
export interface Order {
    code?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    education?: string;
    id?: number;
    name?: string;
    nation?: string;
    orgId?: number;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 订单
 */
export interface OrderPageQuery {
    code?: string;
    education?: string;
    name?: string;
    nation?: string;
    orgId?: number;
}
/**
 * @description: 订单
 */
export interface OrderSaveDTO {
    code?: string;
    education?: string;
    name?: string;
    nation?: string;
    orgId?: number;
}
/**
 * @description: 订单
 */
export interface OrderUpdateDTO {
    code?: string;
    education?: string;
    id?: number;
    name?: string;
    nation?: string;
    orgId?: number;
}
/**
 * @description: 分页参数
 */
export interface PageParams_OrderPageQuery_ {
    current?: number;
    extra?: any;
    model: OrderPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
export interface R_IPage_Order__ {
    code?: number;
    data?: IPage_Order_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_Order__ {
    code?: number;
    data?: Order[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Order_ {
    code?: number;
    data?: Order;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_boolean_ {
    code?: number;
    data?: boolean;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_string_ {
    code?: number;
    data?: string;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export type TBodyOfsaveUsingPOST_4 = OrderSaveDTO;
export type TResponseOfsaveUsingPOST_4 = R_Order_;
export type TBodyOfupdateUsingPUT_4 = OrderUpdateDTO;
export type TResponseOfupdateUsingPUT_4 = R_Order_;
export type TBodyOfdeleteUsingDELETE_5 = number[];
export type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_4 = Order;
export type TResponseOfupdateAllUsingPUT_4 = R_Order_;
export type TBodyOfexportExcelUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfexportExcelUsingPOST_5 = any;
export interface TFormDataOfimportExcelUsingPOST_5 {
    file: string;
}
export type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
export type TBodyOfpageUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfpageUsingPOST_5 = R_IPage_Order__;
export type TBodyOfpreviewUsingPOST_5 = PageParams_OrderPageQuery_;
export type TResponseOfpreviewUsingPOST_5 = R_string_;
export type TResponseOfqueryUsingGET = R_string_;
export type TBodyOfqueryUsingPOST_4 = Order;
export type TResponseOfqueryUsingPOST_4 = R_List_Order__;
export interface TPathOfgetUsingGET_5 {
    id?: number;
}
export type TResponseOfgetUsingGET_5 = R_Order_;
export interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/order"): {
        /**
         * @description 新增 saveUsingPOST_4
         * 订单
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_4;
        }): Promise<TResponseOfsaveUsingPOST_4>;
        /**
         * @description 修改 updateUsingPUT_4
         * 订单
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_4;
        }): Promise<TResponseOfupdateUsingPUT_4>;
        /**
         * @description 删除 deleteUsingDELETE_5
         * 订单
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_5;
        }): Promise<TResponseOfdeleteUsingDELETE_5>;
    };
    (url: "/order/all"): {
        /**
         * @description 修改所有字段 updateAllUsingPUT_4
         * 订单
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_4;
        }): Promise<TResponseOfupdateAllUsingPUT_4>;
    };
    (url: "/order/export"): {
        /**
         * @description 导出Excel exportExcelUsingPOST_5
         * 订单
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_5;
        }): Promise<TResponseOfexportExcelUsingPOST_5>;
    };
    (url: "/order/import"): {
        /**
         * @description 导入Excel importExcelUsingPOST_5
         * 订单
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_5;
        }): Promise<TResponseOfimportExcelUsingPOST_5>;
    };
    (url: "/order/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_5
         * 订单
         */
        post(options: {
            body: TBodyOfpageUsingPOST_5;
        }): Promise<TResponseOfpageUsingPOST_5>;
    };
    (url: "/order/preview"): {
        /**
         * @description 预览Excel previewUsingPOST_5
         * 订单
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_5;
        }): Promise<TResponseOfpreviewUsingPOST_5>;
    };
    (url: "/order/query"): {
        /**
         * @description query queryUsingGET
         * 订单
         */
        get(options: {}): Promise<TResponseOfqueryUsingGET>;
        /**
         * @description 批量查询 queryUsingPOST_4
         * 订单
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_4;
        }): Promise<TResponseOfqueryUsingPOST_4>;
    };
    (url: "/order/{id}"): {
        /**
         * @description 单体查询 getUsingGET_5
         * 订单
         */
        get(options: {
            path: TPathOfgetUsingGET_5;
        }): Promise<TResponseOfgetUsingGET_5>;
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
export declare function createRequest(provider: RequestProvider): IApiFn;
