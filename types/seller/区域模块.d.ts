/**
 * @description: 区域
 */
interface District {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    districtName?: string;
    echoMap?: any;
    id?: number;
    merchantId?: number;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 区域
 */
interface DistrictPageQuery {
    createdTime?: string;
    districtName?: string;
    merchantId?: number;
}
/**
 * @description: 区域
 */
interface DistrictSaveDTO {
    createdTime?: string;
    districtName?: string;
    merchantId?: number;
}
/**
 * @description: 区域
 */
interface DistrictUpdateDTO {
    createdTime?: string;
    districtName?: string;
    id?: number;
    merchantId?: number;
}
interface IPage_District_ {
    current?: number;
    pages?: number;
    records?: District[];
    size?: number;
    total?: number;
}
/**
 * @description: 分页参数
 */
interface PageParams_DistrictPageQuery_ {
    current?: number;
    extra?: any;
    model: DistrictPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_District_ {
    code?: number;
    data?: District;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_District__ {
    code?: number;
    data?: IPage_District_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_District__ {
    code?: number;
    data?: District[];
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
type TBodyOfsaveUsingPOST = DistrictSaveDTO;
type TResponseOfsaveUsingPOST = R_District_;
type TBodyOfupdateUsingPUT = DistrictUpdateDTO;
type TResponseOfupdateUsingPUT = R_District_;
type TBodyOfdeleteUsingDELETE = number[];
type TResponseOfdeleteUsingDELETE = R_boolean_;
type TBodyOfupdateAllUsingPUT = District;
type TResponseOfupdateAllUsingPUT = R_District_;
type TBodyOfexportExcelUsingPOST = PageParams_DistrictPageQuery_;
type TResponseOfexportExcelUsingPOST = any;
interface TFormDataOfimportExcelUsingPOST {
    file: string;
}
type TResponseOfimportExcelUsingPOST = R_boolean_;
type TBodyOfpageUsingPOST = PageParams_DistrictPageQuery_;
type TResponseOfpageUsingPOST = R_IPage_District__;
type TBodyOfpreviewUsingPOST = PageParams_DistrictPageQuery_;
type TResponseOfpreviewUsingPOST = R_string_;
type TBodyOfqueryUsingPOST = District;
type TResponseOfqueryUsingPOST = R_List_District__;
interface TPathOfgetUsingGET {
    id?: number;
}
type TResponseOfgetUsingGET = R_District_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/district"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/区域模块/区域/saveUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            body: TBodyOfsaveUsingPOST;
        }): Promise<TResponseOfsaveUsingPOST>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/区域模块/区域/updateUsingPUT)
         *
         * @tag区域
         */
        put(options: {
            body: TBodyOfupdateUsingPUT;
        }): Promise<TResponseOfupdateUsingPUT>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/区域模块/区域/deleteUsingDELETE)
         *
         * @tag区域
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE;
        }): Promise<TResponseOfdeleteUsingDELETE>;
    };
    (url: "/district/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/区域模块/区域/updateAllUsingPUT)
         *
         * @tag区域
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT;
        }): Promise<TResponseOfupdateAllUsingPUT>;
    };
    (url: "/district/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/exportExcelUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST;
        }): Promise<TResponseOfexportExcelUsingPOST>;
    };
    (url: "/district/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/importExcelUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST;
        }): Promise<TResponseOfimportExcelUsingPOST>;
    };
    (url: "/district/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/pageUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            body: TBodyOfpageUsingPOST;
        }): Promise<TResponseOfpageUsingPOST>;
    };
    (url: "/district/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/区域模块/区域/previewUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST;
        }): Promise<TResponseOfpreviewUsingPOST>;
    };
    (url: "/district/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/queryUsingPOST)
         *
         * @tag区域
         */
        post(options: {
            body: TBodyOfqueryUsingPOST;
        }): Promise<TResponseOfqueryUsingPOST>;
    };
    (url: "/district/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/区域模块/区域/getUsingGET)
         *
         * @tag区域
         */
        get(options: {
            path: TPathOfgetUsingGET;
        }): Promise<TResponseOfgetUsingGET>;
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

export { District, DistrictPageQuery, DistrictSaveDTO, DistrictUpdateDTO, IApiFn, IPage_District_, PageParams_DistrictPageQuery_, R_District_, R_IPage_District__, R_List_District__, R_boolean_, R_string_, RequestProvider, TBodyOfdeleteUsingDELETE, TBodyOfexportExcelUsingPOST, TBodyOfpageUsingPOST, TBodyOfpreviewUsingPOST, TBodyOfqueryUsingPOST, TBodyOfsaveUsingPOST, TBodyOfupdateAllUsingPUT, TBodyOfupdateUsingPUT, TFormDataOfimportExcelUsingPOST, TPathOfgetUsingGET, TResponseOfdeleteUsingDELETE, TResponseOfexportExcelUsingPOST, TResponseOfgetUsingGET, TResponseOfimportExcelUsingPOST, TResponseOfpageUsingPOST, TResponseOfpreviewUsingPOST, TResponseOfqueryUsingPOST, TResponseOfsaveUsingPOST, TResponseOfupdateAllUsingPUT, TResponseOfupdateUsingPUT, createRequest };
