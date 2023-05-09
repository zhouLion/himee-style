/**
 * @description: 业务附件
 */
interface AppendixResultVO {
    bizId?: number;
    bizType?: string;
    bucket?: string;
    contentType?: string;
    createTime?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
}
interface File {
    bizType?: string;
    bucket?: string;
    contentType?: string;
    createTime?: string;
    createdBy?: number;
    fileMd5?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
    storageType?: string;
    suffix?: string;
    uniqueFileName?: string;
    updateTime?: string;
    updatedBy?: number;
    url?: string;
}
/**
 * @description: 增量文件上传日志
 */
interface FileFileParamVO {
    bizType?: string;
    bucket?: string;
    contentType?: string;
    fileMd5?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
    storageType?: string;
    suffix?: string;
    uniqueFileName?: string;
    url?: string;
}
/**
 * @description: 增量文件上传日志
 */
interface FileFileResultVO {
    bizType?: string;
    bucket?: string;
    contentType?: string;
    fileMd5?: string;
    fileType?: string;
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
    suffix?: string;
    uniqueFileName?: string;
    url?: string;
}
interface IPage_File_ {
    current?: number;
    pages?: number;
    records?: File[];
    size?: number;
    total?: number;
}
interface Map_long_string_ {
    [index: string]: string;
}
interface Map_string_string_ {
    [index: string]: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_FileFileParamVO_ {
    current?: number;
    extra?: any;
    model: FileFileParamVO;
    order?: string;
    size?: number;
    sort?: string;
}
interface R_FileFileResultVO_ {
    code?: number;
    data?: FileFileResultVO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_File_ {
    code?: number;
    data?: File;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_File__ {
    code?: number;
    data?: IPage_File_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_AppendixResultVO__ {
    code?: number;
    data?: AppendixResultVO[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_File__ {
    code?: number;
    data?: File[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Map_long_string__ {
    code?: number;
    data?: {
        [index: string]: string;
    };
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_Map_string_string__ {
    code?: number;
    data?: {
        [index: string]: string;
    };
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
interface TQueryOflistByBizIdUsingPOST {
    bizId: number;
    bizType?: string;
}
type TResponseOflistByBizIdUsingPOST = R_List_AppendixResultVO__;
type TBodyOfdeleteUsingDELETE_6 = number[];
type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
type TBodyOffindUrlByIdUsingPOST = number[];
type TResponseOffindUrlByIdUsingPOST = R_Map_long_string__;
type TBodyOffindUrlByPathUsingPOST = string[];
type TResponseOffindUrlByPathUsingPOST = R_Map_string_string__;
interface TFormDataOfuploadUsingPOST {
    file: MultipartFile[];
}
interface TQueryOfuploadUsingPOST {
    bizType?: string;
    bucket?: string;
    storageType?: string;
}
type TResponseOfuploadUsingPOST = R_FileFileResultVO_;
type TBodyOfdownloadUsingPOST = number[];
type TResponseOfdownloadUsingPOST = any;
type TBodyOfpageUsingPOST_6 = PageParams_FileFileParamVO_;
type TResponseOfpageUsingPOST_6 = R_IPage_File__;
type TBodyOfqueryUsingPOST_5 = File;
type TResponseOfqueryUsingPOST_5 = R_List_File__;
interface TPathOfgetUsingGET_6 {
    id?: number;
}
type TResponseOfgetUsingGET_6 = R_File_;
type MultipartFile = File;
interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/anyone/appendix/listByBizId"): {
        /**
         * @description 根据业务id 和 业务类型查询附件信息
         * @see [Swagger doc: 根据业务id 和 业务类型查询附件信息](http://120.79.250.86:8760/doc.html#/文件服务/业务附件/listByBizIdUsingPOST)
         *
         * @tag业务附件
         */
        post(options: {
            query: TQueryOflistByBizIdUsingPOST;
        }): Promise<TResponseOflistByBizIdUsingPOST>;
    };
    (url: "/file"): {
        /**
         * @description 删除
         * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/deleteUsingDELETE_6)
         *
         * @tag文件实时上传
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_6;
        }): Promise<TResponseOfdeleteUsingDELETE_6>;
    };
    (url: "/file/anyone/findUrlById"): {
        /**
         * @description 根据文件id，获取文件临时的访问路径
         * @see [Swagger doc: 根据文件id，获取文件临时的访问路径](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/findUrlByIdUsingPOST)
         *
         * @tag文件实时上传
         */
        post(options: {
            body: TBodyOffindUrlByIdUsingPOST;
        }): Promise<TResponseOffindUrlByIdUsingPOST>;
    };
    (url: "/file/anyone/findUrlByPath"): {
        /**
         * @description 批量根据文件相对路径，获取文件临时的访问路径
         * @see [Swagger doc: 批量根据文件相对路径，获取文件临时的访问路径](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/findUrlByPathUsingPOST)
         *
         * @tag文件实时上传
         */
        post(options: {
            body: TBodyOffindUrlByPathUsingPOST;
        }): Promise<TResponseOffindUrlByPathUsingPOST>;
    };
    (url: "/file/anyone/upload"): {
        /**
         * @description 附件上传
         * @see [Swagger doc: 附件上传](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/uploadUsingPOST)
         *
         * @tag文件实时上传
         */
        post(options: {
            formData: TFormDataOfuploadUsingPOST;
            query: TQueryOfuploadUsingPOST;
        }): Promise<TResponseOfuploadUsingPOST>;
    };
    (url: "/file/download"): {
        /**
         * @description 根据文件id打包下载
         * @see [Swagger doc: 根据文件id打包下载](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/downloadUsingPOST)
         *
         * @tag文件实时上传
         */
        post(options: {
            body: TBodyOfdownloadUsingPOST;
        }): Promise<TResponseOfdownloadUsingPOST>;
    };
    (url: "/file/page"): {
        /**
         * @description 分页列表查询
         * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/pageUsingPOST_6)
         *
         * @tag文件实时上传
         */
        post(options: {
            body: TBodyOfpageUsingPOST_6;
        }): Promise<TResponseOfpageUsingPOST_6>;
    };
    (url: "/file/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/queryUsingPOST_5)
         *
         * @tag文件实时上传
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_5;
        }): Promise<TResponseOfqueryUsingPOST_5>;
    };
    (url: "/file/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/文件服务/文件实时上传/getUsingGET_6)
         *
         * @tag文件实时上传
         */
        get(options: {
            path: TPathOfgetUsingGET_6;
        }): Promise<TResponseOfgetUsingGET_6>;
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

export { AppendixResultVO, File, FileFileParamVO, FileFileResultVO, IApiFn, IPage_File_, Map_long_string_, Map_string_string_, PageParams_FileFileParamVO_, R_FileFileResultVO_, R_File_, R_IPage_File__, R_List_AppendixResultVO__, R_List_File__, R_Map_long_string__, R_Map_string_string__, R_boolean_, RequestProvider, TBodyOfdeleteUsingDELETE_6, TBodyOfdownloadUsingPOST, TBodyOffindUrlByIdUsingPOST, TBodyOffindUrlByPathUsingPOST, TBodyOfpageUsingPOST_6, TBodyOfqueryUsingPOST_5, TFormDataOfuploadUsingPOST, TPathOfgetUsingGET_6, TQueryOflistByBizIdUsingPOST, TQueryOfuploadUsingPOST, TResponseOfdeleteUsingDELETE_6, TResponseOfdownloadUsingPOST, TResponseOffindUrlByIdUsingPOST, TResponseOffindUrlByPathUsingPOST, TResponseOfgetUsingGET_6, TResponseOflistByBizIdUsingPOST, TResponseOfpageUsingPOST_6, TResponseOfqueryUsingPOST_5, TResponseOfuploadUsingPOST, createRequest };
