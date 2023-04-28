/**
 * @description: 业务附件
 */
export interface AppendixResultVO {
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
export interface File {
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
export interface FileFileParamVO {
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
export interface FileFileResultVO {
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
export interface IPage_File_ {
    current?: number;
    pages?: number;
    records?: File[];
    size?: number;
    total?: number;
}
export interface Map_long_string_ {
    [index: string]: string;
}
export interface Map_string_string_ {
    [index: string]: string;
}
/**
 * @description: 分页参数
 */
export interface PageParams_FileFileParamVO_ {
    current?: number;
    extra?: any;
    model: FileFileParamVO;
    order?: string;
    size?: number;
    sort?: string;
}
export interface R_FileFileResultVO_ {
    code?: number;
    data?: FileFileResultVO;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_File_ {
    code?: number;
    data?: File;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_IPage_File__ {
    code?: number;
    data?: IPage_File_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_AppendixResultVO__ {
    code?: number;
    data?: AppendixResultVO[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_List_File__ {
    code?: number;
    data?: File[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
export interface R_Map_long_string__ {
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
export interface R_Map_string_string__ {
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
export interface TQueryOflistByBizIdUsingPOST {
    bizId: number;
    bizType?: string;
}
export type TResponseOflistByBizIdUsingPOST = R_List_AppendixResultVO__;
export type TBodyOfdeleteUsingDELETE_6 = number[];
export type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
export type TBodyOffindUrlByIdUsingPOST = number[];
export type TResponseOffindUrlByIdUsingPOST = R_Map_long_string__;
export type TBodyOffindUrlByPathUsingPOST = string[];
export type TResponseOffindUrlByPathUsingPOST = R_Map_string_string__;
export interface TFormDataOfuploadUsingPOST {
    file: MultipartFile[];
}
export interface TQueryOfuploadUsingPOST {
    bizType?: string;
    bucket?: string;
    storageType?: string;
}
export type TResponseOfuploadUsingPOST = R_FileFileResultVO_;
export type TBodyOfdownloadUsingPOST = number[];
export type TResponseOfdownloadUsingPOST = any;
export type TBodyOfpageUsingPOST_6 = PageParams_FileFileParamVO_;
export type TResponseOfpageUsingPOST_6 = R_IPage_File__;
export type TBodyOfqueryUsingPOST_5 = File;
export type TResponseOfqueryUsingPOST_5 = R_List_File__;
export interface TPathOfgetUsingGET_6 {
    id?: number;
}
export type TResponseOfgetUsingGET_6 = R_File_;
type MultipartFile = File;
export interface IApiFn {
    (url: string): {
        [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
    };
    (url: "/anyone/appendix/listByBizId"): {
        /**
         * @description 根据业务id 和 业务类型查询附件信息 listByBizIdUsingPOST
         * 业务附件
         */
        post(options: {
            query: TQueryOflistByBizIdUsingPOST;
        }): Promise<TResponseOflistByBizIdUsingPOST>;
    };
    (url: "/file"): {
        /**
         * @description 删除 deleteUsingDELETE_6
         * 文件实时上传
         */
        delete(options: {
            body: TBodyOfdeleteUsingDELETE_6;
        }): Promise<TResponseOfdeleteUsingDELETE_6>;
    };
    (url: "/file/anyone/findUrlById"): {
        /**
         * @description 根据文件id，获取文件临时的访问路径 findUrlByIdUsingPOST
         * 文件实时上传
         */
        post(options: {
            body: TBodyOffindUrlByIdUsingPOST;
        }): Promise<TResponseOffindUrlByIdUsingPOST>;
    };
    (url: "/file/anyone/findUrlByPath"): {
        /**
         * @description 批量根据文件相对路径，获取文件临时的访问路径 findUrlByPathUsingPOST
         * 文件实时上传
         */
        post(options: {
            body: TBodyOffindUrlByPathUsingPOST;
        }): Promise<TResponseOffindUrlByPathUsingPOST>;
    };
    (url: "/file/anyone/upload"): {
        /**
         * @description 附件上传 uploadUsingPOST
         * 文件实时上传
         */
        post(options: {
            formData: TFormDataOfuploadUsingPOST;
            query: TQueryOfuploadUsingPOST;
        }): Promise<TResponseOfuploadUsingPOST>;
    };
    (url: "/file/download"): {
        /**
         * @description 根据文件id打包下载 downloadUsingPOST
         * 文件实时上传
         */
        post(options: {
            body: TBodyOfdownloadUsingPOST;
        }): Promise<TResponseOfdownloadUsingPOST>;
    };
    (url: "/file/page"): {
        /**
         * @description 分页列表查询 pageUsingPOST_6
         * 文件实时上传
         */
        post(options: {
            body: TBodyOfpageUsingPOST_6;
        }): Promise<TResponseOfpageUsingPOST_6>;
    };
    (url: "/file/query"): {
        /**
         * @description 批量查询 queryUsingPOST_5
         * 文件实时上传
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_5;
        }): Promise<TResponseOfqueryUsingPOST_5>;
    };
    (url: "/file/{id}"): {
        /**
         * @description 单体查询 getUsingGET_6
         * 文件实时上传
         */
        get(options: {
            path: TPathOfgetUsingGET_6;
        }): Promise<TResponseOfgetUsingGET_6>;
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
export {};
