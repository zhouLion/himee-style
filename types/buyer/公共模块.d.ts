/**
 * @description: 地区表
 */
interface Area {
    code?: string;
    createTime?: string;
    createdBy?: number;
    echoMap?: any;
    fullName?: string;
    id?: number;
    label?: string;
    latitude?: string;
    level?: string;
    longitude?: string;
    parentId?: number;
    sortValue?: number;
    source?: string;
    state?: boolean;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 地区表
 */
interface AreaPageQuery {
    code?: string;
    fullName?: string;
    label?: string;
    latitude?: string;
    level?: string;
    longitude?: string;
    parentId?: number;
    sortValue?: number;
    source?: string;
    state?: boolean;
}
/**
 * @description: 地区表
 */
interface AreaSaveDTO {
    code?: string;
    fullName?: string;
    label?: string;
    latitude?: string;
    level?: string;
    longitude?: string;
    parentId?: number;
    sortValue?: number;
    source?: string;
    state?: boolean;
}
/**
 * @description: 地区表
 */
interface AreaUpdateDTO {
    code?: string;
    fullName?: string;
    id?: number;
    label?: string;
    latitude?: string;
    level?: string;
    longitude?: string;
    parentId?: number;
    sortValue?: number;
    source?: string;
    state?: boolean;
}
/**
 * @description: 字典项
 */
interface Dictionary {
    code?: string;
    createTime?: string;
    createdBy?: number;
    cssClass?: string;
    cssStyle?: string;
    describe?: string;
    icon?: string;
    id?: number;
    label?: string;
    name?: string;
    readonly?: boolean;
    sortValue?: number;
    state?: boolean;
    type?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 字典项
 */
interface DictionaryPageQuery {
    code?: string;
    cssClass?: string;
    cssStyle?: string;
    describe?: string;
    icon?: string;
    label?: string;
    name?: string;
    readonly?: boolean;
    sortValue?: number;
    state?: boolean;
    type?: string;
}
/**
 * @description: 字典项
 */
interface DictionarySaveDTO {
    code?: string;
    cssClass?: string;
    cssStyle?: string;
    describe?: string;
    icon?: string;
    label?: string;
    name?: string;
    readonly?: boolean;
    sortValue?: number;
    state?: boolean;
    type?: string;
}
/**
 * @description: 字典类型
 */
interface DictionaryTypeSaveDTO {
    label?: string;
    state?: boolean;
    type?: string;
}
/**
 * @description: 字典项
 */
interface DictionaryUpdateDTO {
    code?: string;
    cssClass?: string;
    cssStyle?: string;
    describe?: string;
    icon?: string;
    id?: number;
    label?: string;
    name?: string;
    readonly?: boolean;
    sortValue?: number;
    state?: boolean;
    type?: string;
}
interface IPage_Area_ {
    current?: number;
    pages?: number;
    records?: Area[];
    size?: number;
    total?: number;
}
interface IPage_Dictionary_ {
    current?: number;
    pages?: number;
    records?: Dictionary[];
    size?: number;
    total?: number;
}
interface IPage_LoginLog_ {
    current?: number;
    pages?: number;
    records?: LoginLog[];
    size?: number;
    total?: number;
}
interface IPage_OptLog_ {
    current?: number;
    pages?: number;
    records?: OptLog[];
    size?: number;
    total?: number;
}
interface IPage_Parameter_ {
    current?: number;
    pages?: number;
    records?: Parameter[];
    size?: number;
    total?: number;
}
/**
 * @description: 登录日志
 */
interface LoginLog {
    account?: string;
    browser?: string;
    browserVersion?: string;
    createTime?: string;
    createdBy?: number;
    description?: string;
    id?: number;
    location?: string;
    loginDate?: string;
    operatingSystem?: string;
    requestIp?: string;
    ua?: string;
    userId?: number;
    userName?: string;
}
/**
 * @description: 登录日志
 */
interface LoginLogUpdateDTO {
    account?: string;
    browser?: string;
    browserVersion?: string;
    description?: string;
    id?: number;
    location?: string;
    loginDate?: string;
    operatingSystem?: string;
    requestIp?: string;
    ua?: string;
    userId?: number;
    userName?: string;
}
/**
 * @description: 系统日志
 */
interface OptLog {
    actionMethod?: string;
    classPath?: string;
    consumingTime?: number;
    createTime?: string;
    createdBy?: number;
    description?: string;
    finishTime?: string;
    httpMethod?: string;
    id?: number;
    requestIp?: string;
    requestUri?: string;
    startTime?: string;
    type?: string;
    ua?: string;
    userName?: string;
}
/**
 * @description: 系统日志扩展
 */
interface OptLogResult {
    actionMethod?: string;
    classPath?: string;
    consumingTime?: number;
    createTime?: string;
    createdBy?: number;
    description?: string;
    exDetail?: string;
    finishTime?: string;
    httpMethod?: string;
    id?: number;
    params?: string;
    requestIp?: string;
    requestUri?: string;
    result?: string;
    startTime?: string;
    type?: string;
    ua?: string;
    userName?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_AreaPageQuery_ {
    current?: number;
    extra?: any;
    model: AreaPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_DictionaryPageQuery_ {
    current?: number;
    extra?: any;
    model: DictionaryPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_LoginLog_ {
    current?: number;
    extra?: any;
    model: LoginLog;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_OptLog_ {
    current?: number;
    extra?: any;
    model: OptLog;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_ParameterPageQuery_ {
    current?: number;
    extra?: any;
    model: ParameterPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 参数配置
 */
interface Parameter {
    createTime?: string;
    createdBy?: number;
    describe?: string;
    id?: number;
    key?: string;
    name?: string;
    readonly?: boolean;
    state?: boolean;
    updateTime?: string;
    updatedBy?: number;
    value?: string;
}
/**
 * @description: 参数配置
 */
interface ParameterPageQuery {
    describe?: string;
    key?: string;
    name?: string;
    readonly?: boolean;
    state?: boolean;
    value?: string;
}
/**
 * @description: 参数配置
 */
interface ParameterSaveDTO {
    describe?: string;
    key?: string;
    name?: string;
    readonly?: boolean;
    state?: boolean;
    value?: string;
}
/**
 * @description: 参数配置
 */
interface ParameterUpdateDTO {
    describe?: string;
    id?: number;
    key?: string;
    name?: string;
    readonly?: boolean;
    state?: boolean;
    value?: string;
}
interface R_Area_ {
    code?: number;
    data?: Area;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Dictionary_ {
    code?: number;
    data?: Dictionary;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Area__ {
    code?: number;
    data?: IPage_Area_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Dictionary__ {
    code?: number;
    data?: IPage_Dictionary_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_LoginLog__ {
    code?: number;
    data?: IPage_LoginLog_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_OptLog__ {
    code?: number;
    data?: IPage_OptLog_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_Parameter__ {
    code?: number;
    data?: IPage_Parameter_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Area__ {
    code?: number;
    data?: Area[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Dictionary__ {
    code?: number;
    data?: Dictionary[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_LoginLog__ {
    code?: number;
    data?: LoginLog[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_Parameter__ {
    code?: number;
    data?: Parameter[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_LoginLog_ {
    code?: number;
    data?: LoginLog;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Map_string_object__ {
    code?: number;
    data?: any;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_OptLogResult_ {
    code?: number;
    data?: OptLogResult;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Parameter_ {
    code?: number;
    data?: Parameter;
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
interface R_object_ {
    code?: number;
    data?: any;
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
type TBodyOfsaveUsingPOST = AreaSaveDTO;
type TResponseOfsaveUsingPOST = R_Area_;
type TBodyOfupdateUsingPUT = AreaUpdateDTO;
type TResponseOfupdateUsingPUT = R_Area_;
type TBodyOfdeleteUsingDELETE = number[];
type TResponseOfdeleteUsingDELETE = R_boolean_;
type TBodyOfupdateAllUsingPUT = Area;
type TResponseOfupdateAllUsingPUT = R_Area_;
interface TPathOfcheckUsingGET {
    code: string;
}
interface TQueryOfcheckUsingGET {
    id?: number;
}
type TResponseOfcheckUsingGET = R_boolean_;
type TResponseOfclearCacheUsingPOST = R_boolean_;
type TBodyOfexportExcelUsingPOST = PageParams_AreaPageQuery_;
type TResponseOfexportExcelUsingPOST = any;
interface TFormDataOfimportExcelUsingPOST {
    file: string;
}
type TResponseOfimportExcelUsingPOST = R_boolean_;
interface TQueryOflinkageQueryUsingGET {
    parentId?: number;
}
type TResponseOflinkageQueryUsingGET = R_List_Area__;
type TBodyOfpageUsingPOST = PageParams_AreaPageQuery_;
type TResponseOfpageUsingPOST = R_IPage_Area__;
type TBodyOfpreviewUsingPOST = PageParams_AreaPageQuery_;
type TResponseOfpreviewUsingPOST = R_string_;
type TBodyOfqueryUsingPOST = Area;
type TResponseOfqueryUsingPOST = R_List_Area__;
type TResponseOfrefreshCacheUsingPOST = R_boolean_;
interface TPathOfgetUsingGET {
    id?: number;
}
type TResponseOfgetUsingGET = R_Area_;
type TResponseOfgenerateUsingGET = R_object_;
type TResponseOfchartUsingGET = R_Map_string_object__;
type TResponseOfitemUsingGET = R_Map_string_object__;
type TResponseOfpvIncrUsingPOST = R_boolean_;
type TBodyOfsaveUsingPOST_1 = DictionarySaveDTO;
type TResponseOfsaveUsingPOST_1 = R_Dictionary_;
type TBodyOfupdateUsingPUT_1 = DictionaryUpdateDTO;
type TResponseOfupdateUsingPUT_1 = R_Dictionary_;
type TBodyOfdeleteUsingDELETE_1 = number[];
type TResponseOfdeleteUsingDELETE_1 = R_boolean_;
type TBodyOfupdateAllUsingPUT_1 = Dictionary;
type TResponseOfupdateAllUsingPUT_1 = R_Dictionary_;
type TBodyOfexportExcelUsingPOST_1 = PageParams_DictionaryPageQuery_;
type TResponseOfexportExcelUsingPOST_1 = any;
interface TFormDataOfimportExcelUsingPOST_1 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_1 = R_boolean_;
type TBodyOfpageUsingPOST_1 = PageParams_DictionaryPageQuery_;
type TResponseOfpageUsingPOST_1 = R_IPage_Dictionary__;
type TBodyOfpageTypeUsingPOST = PageParams_DictionaryPageQuery_;
type TResponseOfpageTypeUsingPOST = R_IPage_Dictionary__;
type TBodyOfpreviewUsingPOST_1 = PageParams_DictionaryPageQuery_;
type TResponseOfpreviewUsingPOST_1 = R_string_;
type TBodyOfqueryUsingPOST_1 = Dictionary;
type TResponseOfqueryUsingPOST_1 = R_List_Dictionary__;
type TBodyOfsaveTypeUsingPOST = DictionaryTypeSaveDTO;
type TResponseOfsaveTypeUsingPOST = R_Dictionary_;
type TBodyOfupdateTypeUsingPUT = DictionaryTypeSaveDTO;
type TResponseOfupdateTypeUsingPUT = R_boolean_;
type TBodyOfdeleteTypeUsingDELETE = string[];
type TResponseOfdeleteTypeUsingDELETE = R_boolean_;
interface TPathOfgetUsingGET_1 {
    id?: number;
}
type TResponseOfgetUsingGET_1 = R_Dictionary_;
type TBodyOfsaveUsingPOST_2 = LoginLog;
type TResponseOfsaveUsingPOST_2 = R_LoginLog_;
type TBodyOfupdateUsingPUT_2 = LoginLogUpdateDTO;
type TResponseOfupdateUsingPUT_2 = R_LoginLog_;
type TBodyOfdeleteUsingDELETE_2 = number[];
type TResponseOfdeleteUsingDELETE_2 = R_boolean_;
type TBodyOfupdateAllUsingPUT_2 = LoginLog;
type TResponseOfupdateAllUsingPUT_2 = R_LoginLog_;
interface TQueryOfclearUsingDELETE {
    type?: number;
}
type TResponseOfclearUsingDELETE = R_boolean_;
type TBodyOfexportExcelUsingPOST_2 = PageParams_LoginLog_;
type TResponseOfexportExcelUsingPOST_2 = any;
interface TFormDataOfimportExcelUsingPOST_2 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_2 = R_boolean_;
type TBodyOfpageUsingPOST_2 = PageParams_LoginLog_;
type TResponseOfpageUsingPOST_2 = R_IPage_LoginLog__;
type TBodyOfpreviewUsingPOST_2 = PageParams_LoginLog_;
type TResponseOfpreviewUsingPOST_2 = R_string_;
type TBodyOfqueryUsingPOST_2 = LoginLog;
type TResponseOfqueryUsingPOST_2 = R_List_LoginLog__;
interface TPathOfgetUsingGET_2 {
    id?: number;
}
type TResponseOfgetUsingGET_2 = R_LoginLog_;
type TBodyOfdeleteUsingDELETE_3 = number[];
type TResponseOfdeleteUsingDELETE_3 = R_boolean_;
interface TQueryOfclearUsingDELETE_1 {
    type?: number;
}
type TResponseOfclearUsingDELETE_1 = R_boolean_;
type TBodyOfexportExcelUsingPOST_3 = PageParams_OptLog_;
type TResponseOfexportExcelUsingPOST_3 = any;
interface TQueryOfgetUsingGET_3 {
    id?: number;
}
type TResponseOfgetUsingGET_3 = R_OptLogResult_;
interface TFormDataOfimportExcelUsingPOST_3 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_3 = R_boolean_;
type TBodyOfpageUsingPOST_3 = PageParams_OptLog_;
type TResponseOfpageUsingPOST_3 = R_IPage_OptLog__;
type TBodyOfpreviewUsingPOST_3 = PageParams_OptLog_;
type TResponseOfpreviewUsingPOST_3 = R_string_;
type TBodyOfsaveUsingPOST_3 = ParameterSaveDTO;
type TResponseOfsaveUsingPOST_3 = R_Parameter_;
type TBodyOfupdateUsingPUT_3 = ParameterUpdateDTO;
type TResponseOfupdateUsingPUT_3 = R_Parameter_;
type TBodyOfdeleteUsingDELETE_4 = number[];
type TResponseOfdeleteUsingDELETE_4 = R_boolean_;
type TBodyOfupdateAllUsingPUT_3 = Parameter;
type TResponseOfupdateAllUsingPUT_3 = R_Parameter_;
type TBodyOfexportExcelUsingPOST_4 = PageParams_ParameterPageQuery_;
type TResponseOfexportExcelUsingPOST_4 = any;
interface TFormDataOfimportExcelUsingPOST_4 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_4 = R_boolean_;
type TBodyOfpageUsingPOST_4 = PageParams_ParameterPageQuery_;
type TResponseOfpageUsingPOST_4 = R_IPage_Parameter__;
type TBodyOfpreviewUsingPOST_4 = PageParams_ParameterPageQuery_;
type TResponseOfpreviewUsingPOST_4 = R_string_;
type TBodyOfqueryUsingPOST_3 = Parameter;
type TResponseOfqueryUsingPOST_3 = R_List_Parameter__;
interface TPathOfgetUsingGET_4 {
    id?: number;
}
type TResponseOfgetUsingGET_4 = R_Parameter_;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/area"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/公共模块/地区表/saveUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST;
        }): Promise<TResponseOfsaveUsingPOST>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/公共模块/地区表/updateUsingPUT)
         *
         * @tag地区表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT;
        }): Promise<TResponseOfupdateUsingPUT>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/公共模块/地区表/deleteUsingDELETE)
         *
         * @tag地区表
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE;
        }): Promise<TResponseOfdeleteUsingDELETE>;
    };
    (url: "/area/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/公共模块/地区表/updateAllUsingPUT)
         *
         * @tag地区表
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT;
        }): Promise<TResponseOfupdateAllUsingPUT>;
    };
    (url: "/area/check/{code}"): {
        /**
         * @description 检测地区编码是否重复
         * @see [Swagger doc: 检测地区编码是否重复](http://120.79.250.86:8762/doc.html#/公共模块/地区表/checkUsingGET)
         *
         * @tag地区表
         */
        get(options: {
            path: TPathOfcheckUsingGET;
            query: TQueryOfcheckUsingGET;
        }): Promise<TResponseOfcheckUsingGET>;
    };
    (url: "/area/clearCache"): {
        /**
         * @description 清理缓存
         * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/公共模块/地区表/clearCacheUsingPOST)
         *
         * @tag地区表
         */
        post(options: {}): Promise<TResponseOfclearCacheUsingPOST>;
    };
    (url: "/area/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/公共模块/地区表/exportExcelUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST;
        }): Promise<TResponseOfexportExcelUsingPOST>;
    };
    (url: "/area/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/公共模块/地区表/importExcelUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST;
        }): Promise<TResponseOfimportExcelUsingPOST>;
    };
    (url: "/area/linkage"): {
        /**
         * @description 级联查询缓存中的地区
         * @see [Swagger doc: 级联查询缓存中的地区](http://120.79.250.86:8762/doc.html#/公共模块/地区表/linkageQueryUsingGET)
         *
         * @tag地区表
         */
        get(options: {
            query: TQueryOflinkageQueryUsingGET;
        }): Promise<TResponseOflinkageQueryUsingGET>;
    };
    (url: "/area/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/公共模块/地区表/pageUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            body: TBodyOfpageUsingPOST;
        }): Promise<TResponseOfpageUsingPOST>;
    };
    (url: "/area/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/公共模块/地区表/previewUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST;
        }): Promise<TResponseOfpreviewUsingPOST>;
    };
    (url: "/area/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/公共模块/地区表/queryUsingPOST)
         *
         * @tag地区表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST;
        }): Promise<TResponseOfqueryUsingPOST>;
    };
    (url: "/area/refreshCache"): {
        /**
         * @description 刷新缓存
         * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/公共模块/地区表/refreshCacheUsingPOST)
         *
         * @tag地区表
         */
        post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST>;
    };
    (url: "/area/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/公共模块/地区表/getUsingGET)
         *
         * @tag地区表
         */
        get(options: {
            path: TPathOfgetUsingGET;
        }): Promise<TResponseOfgetUsingGET>;
    };
    (url: "/common/generateId"): {
        /**
         * @description generate
         * @see [Swagger doc: generate](http://120.79.250.86:8762/doc.html#/公共模块/首页/generateUsingGET)
         *
         * @tag首页
         */
        get(options: {}): Promise<TResponseOfgenerateUsingGET>;
    };
    (url: "/dashboard/chart"): {
        /**
         * @description chart
         * @see [Swagger doc: chart](http://120.79.250.86:8762/doc.html#/公共模块/首页/chartUsingGET)
         *
         * @tag首页
         */
        get(options: {}): Promise<TResponseOfchartUsingGET>;
    };
    (url: "/dashboard/item"): {
        /**
         * @description item
         * @see [Swagger doc: item](http://120.79.250.86:8762/doc.html#/公共模块/首页/itemUsingGET)
         *
         * @tag首页
         */
        get(options: {}): Promise<TResponseOfitemUsingGET>;
    };
    (url: "/dashboard/pvIncr"): {
        /**
         * @description pvIncr
         * @see [Swagger doc: pvIncr](http://120.79.250.86:8762/doc.html#/公共模块/首页/pvIncrUsingPOST)
         *
         * @tag首页
         */
        post(options: {}): Promise<TResponseOfpvIncrUsingPOST>;
    };
    (url: "/dictionary"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/saveUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_1;
        }): Promise<TResponseOfsaveUsingPOST_1>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/updateUsingPUT_1)
         *
         * @tag字典类型
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_1;
        }): Promise<TResponseOfupdateUsingPUT_1>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/deleteUsingDELETE_1)
         *
         * @tag字典类型
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_1;
        }): Promise<TResponseOfdeleteUsingDELETE_1>;
    };
    (url: "/dictionary/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/updateAllUsingPUT_1)
         *
         * @tag字典类型
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_1;
        }): Promise<TResponseOfupdateAllUsingPUT_1>;
    };
    (url: "/dictionary/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/exportExcelUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_1;
        }): Promise<TResponseOfexportExcelUsingPOST_1>;
    };
    (url: "/dictionary/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/importExcelUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_1;
        }): Promise<TResponseOfimportExcelUsingPOST_1>;
    };
    (url: "/dictionary/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/pageUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfpageUsingPOST_1;
        }): Promise<TResponseOfpageUsingPOST_1>;
    };
    (url: "/dictionary/pageType"): {
        /**
         * @description 分页列表查询-字典类型
         * @see [Swagger doc: 分页列表查询-字典类型](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/pageTypeUsingPOST)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfpageTypeUsingPOST;
        }): Promise<TResponseOfpageTypeUsingPOST>;
    };
    (url: "/dictionary/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/previewUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_1;
        }): Promise<TResponseOfpreviewUsingPOST_1>;
    };
    (url: "/dictionary/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/queryUsingPOST_1)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_1;
        }): Promise<TResponseOfqueryUsingPOST_1>;
    };
    (url: "/dictionary/type"): {
        /**
         * @description 保存-字典类型
         * @see [Swagger doc: 保存-字典类型](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/saveTypeUsingPOST)
         *
         * @tag字典类型
         */
        post(options: {
            body: TBodyOfsaveTypeUsingPOST;
        }): Promise<TResponseOfsaveTypeUsingPOST>;
        /**
         * @description 修改-字典类型
         * @see [Swagger doc: 修改-字典类型](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/updateTypeUsingPUT)
         *
         * @tag字典类型
         */
        put(options: {
            body: TBodyOfupdateTypeUsingPUT;
        }): Promise<TResponseOfupdateTypeUsingPUT>;
        /**
         * @description 删除-字典类型
         * @see [Swagger doc: 删除-字典类型](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/deleteTypeUsingDELETE)
         *
         * @tag字典类型
         */
        delete(options: {
            body: TBodyOfdeleteTypeUsingDELETE;
        }): Promise<TResponseOfdeleteTypeUsingDELETE>;
    };
    (url: "/dictionary/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/公共模块/字典类型/getUsingGET_1)
         *
         * @tag字典类型
         */
        get(options: {
            path: TPathOfgetUsingGET_1;
        }): Promise<TResponseOfgetUsingGET_1>;
    };
    (url: "/loginLog"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/saveUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_2;
        }): Promise<TResponseOfsaveUsingPOST_2>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/updateUsingPUT_2)
         *
         * @tag登录日志
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_2;
        }): Promise<TResponseOfupdateUsingPUT_2>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/deleteUsingDELETE_2)
         *
         * @tag登录日志
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_2;
        }): Promise<TResponseOfdeleteUsingDELETE_2>;
    };
    (url: "/loginLog/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/updateAllUsingPUT_2)
         *
         * @tag登录日志
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_2;
        }): Promise<TResponseOfupdateAllUsingPUT_2>;
    };
    (url: "/loginLog/clear"): {
        /**
         * @description 清空日志
         * @see [Swagger doc: 清空日志](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/clearUsingDELETE)
         *
         * @tag登录日志
         */
        delete(options: {
            query: TQueryOfclearUsingDELETE;
        }): Promise<TResponseOfclearUsingDELETE>;
    };
    (url: "/loginLog/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/exportExcelUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_2;
        }): Promise<TResponseOfexportExcelUsingPOST_2>;
    };
    (url: "/loginLog/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/importExcelUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_2;
        }): Promise<TResponseOfimportExcelUsingPOST_2>;
    };
    (url: "/loginLog/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/pageUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            body: TBodyOfpageUsingPOST_2;
        }): Promise<TResponseOfpageUsingPOST_2>;
    };
    (url: "/loginLog/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/previewUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_2;
        }): Promise<TResponseOfpreviewUsingPOST_2>;
    };
    (url: "/loginLog/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/queryUsingPOST_2)
         *
         * @tag登录日志
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_2;
        }): Promise<TResponseOfqueryUsingPOST_2>;
    };
    (url: "/loginLog/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/公共模块/登录日志/getUsingGET_2)
         *
         * @tag登录日志
         */
        get(options: {
            path: TPathOfgetUsingGET_2;
        }): Promise<TResponseOfgetUsingGET_2>;
    };
    (url: "/optLog"): {
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/deleteUsingDELETE_3)
         *
         * @tag系统日志
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_3;
        }): Promise<TResponseOfdeleteUsingDELETE_3>;
    };
    (url: "/optLog/clear"): {
        /**
         * @description 清空日志
         * @see [Swagger doc: 清空日志](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/clearUsingDELETE_1)
         *
         * @tag系统日志
         */
        delete(options: {
            query: TQueryOfclearUsingDELETE_1;
        }): Promise<TResponseOfclearUsingDELETE_1>;
    };
    (url: "/optLog/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/exportExcelUsingPOST_3)
         *
         * @tag系统日志
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_3;
        }): Promise<TResponseOfexportExcelUsingPOST_3>;
    };
    (url: "/optLog/get"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/getUsingGET_3)
         *
         * @tag系统日志
         */
        get(options: {
            query: TQueryOfgetUsingGET_3;
        }): Promise<TResponseOfgetUsingGET_3>;
    };
    (url: "/optLog/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/importExcelUsingPOST_3)
         *
         * @tag系统日志
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_3;
        }): Promise<TResponseOfimportExcelUsingPOST_3>;
    };
    (url: "/optLog/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/pageUsingPOST_3)
         *
         * @tag系统日志
         */
        post(options: {
            body: TBodyOfpageUsingPOST_3;
        }): Promise<TResponseOfpageUsingPOST_3>;
    };
    (url: "/optLog/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/公共模块/系统日志/previewUsingPOST_3)
         *
         * @tag系统日志
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_3;
        }): Promise<TResponseOfpreviewUsingPOST_3>;
    };
    (url: "/parameter"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/saveUsingPOST_3)
         *
         * @tag参数配置
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_3;
        }): Promise<TResponseOfsaveUsingPOST_3>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/updateUsingPUT_3)
         *
         * @tag参数配置
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_3;
        }): Promise<TResponseOfupdateUsingPUT_3>;
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/deleteUsingDELETE_4)
         *
         * @tag参数配置
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_4;
        }): Promise<TResponseOfdeleteUsingDELETE_4>;
    };
    (url: "/parameter/all"): {
        /**
         * @description 修改所有字段
         * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/updateAllUsingPUT_3)
         *
         * @tag参数配置
         */
        put(options: {
            body: TBodyOfupdateAllUsingPUT_3;
        }): Promise<TResponseOfupdateAllUsingPUT_3>;
    };
    (url: "/parameter/export"): {
        /**
         * @description 导出Excel
         * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/exportExcelUsingPOST_4)
         *
         * @tag参数配置
         */
        post(options: {
            body: TBodyOfexportExcelUsingPOST_4;
        }): Promise<TResponseOfexportExcelUsingPOST_4>;
    };
    (url: "/parameter/import"): {
        /**
         * @description 导入Excel
         * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/importExcelUsingPOST_4)
         *
         * @tag参数配置
         */
        post(options: {
            formData: TFormDataOfimportExcelUsingPOST_4;
        }): Promise<TResponseOfimportExcelUsingPOST_4>;
    };
    (url: "/parameter/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/pageUsingPOST_4)
         *
         * @tag参数配置
         */
        post(options: {
            body: TBodyOfpageUsingPOST_4;
        }): Promise<TResponseOfpageUsingPOST_4>;
    };
    (url: "/parameter/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/previewUsingPOST_4)
         *
         * @tag参数配置
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_4;
        }): Promise<TResponseOfpreviewUsingPOST_4>;
    };
    (url: "/parameter/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/queryUsingPOST_3)
         *
         * @tag参数配置
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_3;
        }): Promise<TResponseOfqueryUsingPOST_3>;
    };
    (url: "/parameter/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/公共模块/参数配置/getUsingGET_4)
         *
         * @tag参数配置
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

export { Area, AreaPageQuery, AreaSaveDTO, AreaUpdateDTO, Dictionary, DictionaryPageQuery, DictionarySaveDTO, DictionaryTypeSaveDTO, DictionaryUpdateDTO, IApiFn, IPage_Area_, IPage_Dictionary_, IPage_LoginLog_, IPage_OptLog_, IPage_Parameter_, LoginLog, LoginLogUpdateDTO, OptLog, OptLogResult, PageParams_AreaPageQuery_, PageParams_DictionaryPageQuery_, PageParams_LoginLog_, PageParams_OptLog_, PageParams_ParameterPageQuery_, Parameter, ParameterPageQuery, ParameterSaveDTO, ParameterUpdateDTO, R_Area_, R_Dictionary_, R_IPage_Area__, R_IPage_Dictionary__, R_IPage_LoginLog__, R_IPage_OptLog__, R_IPage_Parameter__, R_List_Area__, R_List_Dictionary__, R_List_LoginLog__, R_List_Parameter__, R_LoginLog_, R_Map_string_object__, R_OptLogResult_, R_Parameter_, R_boolean_, R_object_, R_string_, RequestProvider, TBodyOfdeleteTypeUsingDELETE, TBodyOfdeleteUsingDELETE, TBodyOfdeleteUsingDELETE_1, TBodyOfdeleteUsingDELETE_2, TBodyOfdeleteUsingDELETE_3, TBodyOfdeleteUsingDELETE_4, TBodyOfexportExcelUsingPOST, TBodyOfexportExcelUsingPOST_1, TBodyOfexportExcelUsingPOST_2, TBodyOfexportExcelUsingPOST_3, TBodyOfexportExcelUsingPOST_4, TBodyOfpageTypeUsingPOST, TBodyOfpageUsingPOST, TBodyOfpageUsingPOST_1, TBodyOfpageUsingPOST_2, TBodyOfpageUsingPOST_3, TBodyOfpageUsingPOST_4, TBodyOfpreviewUsingPOST, TBodyOfpreviewUsingPOST_1, TBodyOfpreviewUsingPOST_2, TBodyOfpreviewUsingPOST_3, TBodyOfpreviewUsingPOST_4, TBodyOfqueryUsingPOST, TBodyOfqueryUsingPOST_1, TBodyOfqueryUsingPOST_2, TBodyOfqueryUsingPOST_3, TBodyOfsaveTypeUsingPOST, TBodyOfsaveUsingPOST, TBodyOfsaveUsingPOST_1, TBodyOfsaveUsingPOST_2, TBodyOfsaveUsingPOST_3, TBodyOfupdateAllUsingPUT, TBodyOfupdateAllUsingPUT_1, TBodyOfupdateAllUsingPUT_2, TBodyOfupdateAllUsingPUT_3, TBodyOfupdateTypeUsingPUT, TBodyOfupdateUsingPUT, TBodyOfupdateUsingPUT_1, TBodyOfupdateUsingPUT_2, TBodyOfupdateUsingPUT_3, TFormDataOfimportExcelUsingPOST, TFormDataOfimportExcelUsingPOST_1, TFormDataOfimportExcelUsingPOST_2, TFormDataOfimportExcelUsingPOST_3, TFormDataOfimportExcelUsingPOST_4, TPathOfcheckUsingGET, TPathOfgetUsingGET, TPathOfgetUsingGET_1, TPathOfgetUsingGET_2, TPathOfgetUsingGET_4, TQueryOfcheckUsingGET, TQueryOfclearUsingDELETE, TQueryOfclearUsingDELETE_1, TQueryOfgetUsingGET_3, TQueryOflinkageQueryUsingGET, TResponseOfchartUsingGET, TResponseOfcheckUsingGET, TResponseOfclearCacheUsingPOST, TResponseOfclearUsingDELETE, TResponseOfclearUsingDELETE_1, TResponseOfdeleteTypeUsingDELETE, TResponseOfdeleteUsingDELETE, TResponseOfdeleteUsingDELETE_1, TResponseOfdeleteUsingDELETE_2, TResponseOfdeleteUsingDELETE_3, TResponseOfdeleteUsingDELETE_4, TResponseOfexportExcelUsingPOST, TResponseOfexportExcelUsingPOST_1, TResponseOfexportExcelUsingPOST_2, TResponseOfexportExcelUsingPOST_3, TResponseOfexportExcelUsingPOST_4, TResponseOfgenerateUsingGET, TResponseOfgetUsingGET, TResponseOfgetUsingGET_1, TResponseOfgetUsingGET_2, TResponseOfgetUsingGET_3, TResponseOfgetUsingGET_4, TResponseOfimportExcelUsingPOST, TResponseOfimportExcelUsingPOST_1, TResponseOfimportExcelUsingPOST_2, TResponseOfimportExcelUsingPOST_3, TResponseOfimportExcelUsingPOST_4, TResponseOfitemUsingGET, TResponseOflinkageQueryUsingGET, TResponseOfpageTypeUsingPOST, TResponseOfpageUsingPOST, TResponseOfpageUsingPOST_1, TResponseOfpageUsingPOST_2, TResponseOfpageUsingPOST_3, TResponseOfpageUsingPOST_4, TResponseOfpreviewUsingPOST, TResponseOfpreviewUsingPOST_1, TResponseOfpreviewUsingPOST_2, TResponseOfpreviewUsingPOST_3, TResponseOfpreviewUsingPOST_4, TResponseOfpvIncrUsingPOST, TResponseOfqueryUsingPOST, TResponseOfqueryUsingPOST_1, TResponseOfqueryUsingPOST_2, TResponseOfqueryUsingPOST_3, TResponseOfrefreshCacheUsingPOST, TResponseOfsaveTypeUsingPOST, TResponseOfsaveUsingPOST, TResponseOfsaveUsingPOST_1, TResponseOfsaveUsingPOST_2, TResponseOfsaveUsingPOST_3, TResponseOfupdateAllUsingPUT, TResponseOfupdateAllUsingPUT_1, TResponseOfupdateAllUsingPUT_2, TResponseOfupdateAllUsingPUT_3, TResponseOfupdateTypeUsingPUT, TResponseOfupdateUsingPUT, TResponseOfupdateUsingPUT_1, TResponseOfupdateUsingPUT_2, TResponseOfupdateUsingPUT_3, createRequest };
