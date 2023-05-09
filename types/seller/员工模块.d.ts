/**
 * @description: 员工
 */
interface Employee {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    merchantId?: string;
    name?: string;
    state?: string;
    storeId?: string;
    updateTime?: string;
    updatedBy?: number;
    userId?: number;
    userName?: string;
}
/**
 * @description: 员工
 */
interface EmployeePageQuery {
    createdTime?: string;
    merchantId?: string;
    name?: string;
    state?: string;
    storeId?: string;
    userId?: number;
    userName?: string;
}
/**
 * @description: 员工
 */
interface EmployeeSaveDTO {
    createdTime?: string;
    merchantId?: string;
    name?: string;
    state?: string;
    storeId?: string;
    userId?: number;
    userName?: string;
}
/**
 * @description: 员工
 */
interface EmployeeUpdateDTO {
    createdTime?: string;
    id?: number;
    merchantId?: string;
    name?: string;
    state?: string;
    storeId?: string;
    userId?: number;
    userName?: string;
}
interface IPage_Employee_ {
    current?: number;
    pages?: number;
    records?: Employee[];
    size?: number;
    total?: number;
}
/**
 * @description: 分页参数
 */
interface PageParams_EmployeePageQuery_ {
    current?: number;
    extra?: any;
    model: EmployeePageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_Employee_ {
    code?: number;
    data?: Employee;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Employee__ {
    code?: number;
    data?: IPage_Employee_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Employee__ {
    code?: number;
    data?: Employee[];
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
type TBodyOfsaveUsingPOST_1 = EmployeeSaveDTO;
type TResponseOfsaveUsingPOST_1 = R_Employee_;
type TBodyOfupdateUsingPUT_1 = EmployeeUpdateDTO;
type TResponseOfupdateUsingPUT_1 = R_Employee_;
type TBodyOfdeleteUsingDELETE_1 = number[];
type TResponseOfdeleteUsingDELETE_1 = R_boolean_;
type TBodyOfupdateAllUsingPUT_1 = Employee;
type TResponseOfupdateAllUsingPUT_1 = R_Employee_;
type TBodyOfexportExcelUsingPOST_1 = PageParams_EmployeePageQuery_;
type TResponseOfexportExcelUsingPOST_1 = any;
interface TFormDataOfimportExcelUsingPOST_1 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_1 = R_boolean_;
type TBodyOfpageUsingPOST_1 = PageParams_EmployeePageQuery_;
type TResponseOfpageUsingPOST_1 = R_IPage_Employee__;
type TBodyOfpreviewUsingPOST_1 = PageParams_EmployeePageQuery_;
type TResponseOfpreviewUsingPOST_1 = R_string_;
type TBodyOfqueryUsingPOST_1 = Employee;
type TResponseOfqueryUsingPOST_1 = R_List_Employee__;
interface TPathOfgetUsingGET_1 {
    id?: number;
}
type TResponseOfgetUsingGET_1 = R_Employee_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/employee"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8761/doc.html#/员工模块/员工/saveUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_1;
        }): Promise<TResponseOfsaveUsingPOST_1>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8761/doc.html#/员工模块/员工/updateUsingPUT_1)
         *
         * @tag员工
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_1;
        }): Promise<TResponseOfupdateUsingPUT_1>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8761/doc.html#/员工模块/员工/deleteUsingDELETE_1)
         *
         * @tag员工
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_1;
        }): Promise<TResponseOfdeleteUsingDELETE_1>;
    };
    (url: "/employee/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8761/doc.html#/员工模块/员工/updateAllUsingPUT_1)
         *
         * @tag员工
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_1;
        }): Promise<TResponseOfupdateAllUsingPUT_1>;
    };
    (url: "/employee/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/exportExcelUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_1;
        }): Promise<TResponseOfexportExcelUsingPOST_1>;
    };
    (url: "/employee/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/importExcelUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_1;
        }): Promise<TResponseOfimportExcelUsingPOST_1>;
    };
    (url: "/employee/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/pageUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            body: TBodyOfpageUsingPOST_1;
        }): Promise<TResponseOfpageUsingPOST_1>;
    };
    (url: "/employee/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8761/doc.html#/员工模块/员工/previewUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_1;
        }): Promise<TResponseOfpreviewUsingPOST_1>;
    };
    (url: "/employee/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/queryUsingPOST_1)
         *
         * @tag员工
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_1;
        }): Promise<TResponseOfqueryUsingPOST_1>;
    };
    (url: "/employee/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8761/doc.html#/员工模块/员工/getUsingGET_1)
         *
         * @tag员工
         */
        get(options: {
            path: TPathOfgetUsingGET_1;
        }): Promise<TResponseOfgetUsingGET_1>;
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

export { Employee, EmployeePageQuery, EmployeeSaveDTO, EmployeeUpdateDTO, IApiFn, IPage_Employee_, PageParams_EmployeePageQuery_, R_Employee_, R_IPage_Employee__, R_List_Employee__, R_boolean_, R_string_, RequestProvider, TBodyOfdeleteUsingDELETE_1, TBodyOfexportExcelUsingPOST_1, TBodyOfpageUsingPOST_1, TBodyOfpreviewUsingPOST_1, TBodyOfqueryUsingPOST_1, TBodyOfsaveUsingPOST_1, TBodyOfupdateAllUsingPUT_1, TBodyOfupdateUsingPUT_1, TFormDataOfimportExcelUsingPOST_1, TPathOfgetUsingGET_1, TResponseOfdeleteUsingDELETE_1, TResponseOfexportExcelUsingPOST_1, TResponseOfgetUsingGET_1, TResponseOfimportExcelUsingPOST_1, TResponseOfpageUsingPOST_1, TResponseOfpreviewUsingPOST_1, TResponseOfqueryUsingPOST_1, TResponseOfsaveUsingPOST_1, TResponseOfupdateAllUsingPUT_1, TResponseOfupdateUsingPUT_1, createRequest };
