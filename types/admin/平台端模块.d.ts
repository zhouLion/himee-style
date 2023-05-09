interface IPage_Order_ {
    current?: number;
    pages?: number;
    records?: Order[];
    size?: number;
    total?: number;
}
/**
 * @description: 订单
 */
interface Order {
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
interface OrderPageQuery {
    code?: string;
    education?: string;
    name?: string;
    nation?: string;
    orgId?: number;
}
/**
 * @description: 订单
 */
interface OrderSaveDTO {
    code?: string;
    education?: string;
    name?: string;
    nation?: string;
    orgId?: number;
}
/**
 * @description: 订单
 */
interface OrderUpdateDTO {
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
interface PageParams_OrderPageQuery_ {
    current?: number;
    extra?: any;
    model: OrderPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_IPage_Order__ {
    code?: number;
    data?: IPage_Order_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Order__ {
    code?: number;
    data?: Order[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Order_ {
    code?: number;
    data?: Order;
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
type TBodyOfsaveUsingPOST_4 = OrderSaveDTO;
type TResponseOfsaveUsingPOST_4 = R_Order_;
type TBodyOfupdateUsingPUT_4 = OrderUpdateDTO;
type TResponseOfupdateUsingPUT_4 = R_Order_;
type TBodyOfdeleteUsingDELETE_5 = number[];
type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
type TBodyOfupdateAllUsingPUT_4 = Order;
type TResponseOfupdateAllUsingPUT_4 = R_Order_;
type TBodyOfexportExcelUsingPOST_5 = PageParams_OrderPageQuery_;
type TResponseOfexportExcelUsingPOST_5 = any;
interface TFormDataOfimportExcelUsingPOST_5 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
type TBodyOfpageUsingPOST_5 = PageParams_OrderPageQuery_;
type TResponseOfpageUsingPOST_5 = R_IPage_Order__;
type TBodyOfpreviewUsingPOST_5 = PageParams_OrderPageQuery_;
type TResponseOfpreviewUsingPOST_5 = R_string_;
type TResponseOfqueryUsingGET = R_string_;
type TBodyOfqueryUsingPOST_4 = Order;
type TResponseOfqueryUsingPOST_4 = R_List_Order__;
interface TPathOfgetUsingGET_5 {
    id?: number;
}
type TResponseOfgetUsingGET_5 = R_Order_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/order"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/平台端模块/订单/saveUsingPOST_4)
         *
         * @tag订单
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_4;
        }): Promise<TResponseOfsaveUsingPOST_4>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/平台端模块/订单/updateUsingPUT_4)
         *
         * @tag订单
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_4;
        }): Promise<TResponseOfupdateUsingPUT_4>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/平台端模块/订单/deleteUsingDELETE_5)
         *
         * @tag订单
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_5;
        }): Promise<TResponseOfdeleteUsingDELETE_5>;
    };
    (url: "/order/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/平台端模块/订单/updateAllUsingPUT_4)
         *
         * @tag订单
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_4;
        }): Promise<TResponseOfupdateAllUsingPUT_4>;
    };
    (url: "/order/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/exportExcelUsingPOST_5)
         *
         * @tag订单
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_5;
        }): Promise<TResponseOfexportExcelUsingPOST_5>;
    };
    (url: "/order/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/importExcelUsingPOST_5)
         *
         * @tag订单
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_5;
        }): Promise<TResponseOfimportExcelUsingPOST_5>;
    };
    (url: "/order/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/pageUsingPOST_5)
         *
         * @tag订单
         */
        post(options: {
            body: TBodyOfpageUsingPOST_5;
        }): Promise<TResponseOfpageUsingPOST_5>;
    };
    (url: "/order/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/平台端模块/订单/previewUsingPOST_5)
         *
         * @tag订单
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_5;
        }): Promise<TResponseOfpreviewUsingPOST_5>;
    };
    (url: "/order/query"): {
        /**
         * @description query
         * @see [Swagger doc: query](http://120.79.250.86:8760/doc.html#/平台端模块/订单/queryUsingGET)
         *
         * @tag订单
         */
        get(options: {}): Promise<TResponseOfqueryUsingGET>;
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/queryUsingPOST_4)
         *
         * @tag订单
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_4;
        }): Promise<TResponseOfqueryUsingPOST_4>;
    };
    (url: "/order/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/平台端模块/订单/getUsingGET_5)
         *
         * @tag订单
         */
        get(options: {
            path: TPathOfgetUsingGET_5;
        }): Promise<TResponseOfgetUsingGET_5>;
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

export { IApiFn, IPage_Order_, Order, OrderPageQuery, OrderSaveDTO, OrderUpdateDTO, PageParams_OrderPageQuery_, R_IPage_Order__, R_List_Order__, R_Order_, R_boolean_, R_string_, RequestProvider, TBodyOfdeleteUsingDELETE_5, TBodyOfexportExcelUsingPOST_5, TBodyOfpageUsingPOST_5, TBodyOfpreviewUsingPOST_5, TBodyOfqueryUsingPOST_4, TBodyOfsaveUsingPOST_4, TBodyOfupdateAllUsingPUT_4, TBodyOfupdateUsingPUT_4, TFormDataOfimportExcelUsingPOST_5, TPathOfgetUsingGET_5, TResponseOfdeleteUsingDELETE_5, TResponseOfexportExcelUsingPOST_5, TResponseOfgetUsingGET_5, TResponseOfimportExcelUsingPOST_5, TResponseOfpageUsingPOST_5, TResponseOfpreviewUsingPOST_5, TResponseOfqueryUsingGET, TResponseOfqueryUsingPOST_4, TResponseOfsaveUsingPOST_4, TResponseOfupdateAllUsingPUT_4, TResponseOfupdateUsingPUT_4, createRequest };
