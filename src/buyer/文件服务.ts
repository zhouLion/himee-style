/**
 * @description: 业务附件
 */
export interface AppendixResultVO {
    // 业务id
    bizId?: number;
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 创建时间
    createTime?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
}

export interface File {
    bizType?: string;
    bucket?: string;
    contentType?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    fileMd5?: string;
    fileType?: string;
    // 主键
    id?: number;
    originalFileName?: string;
    path?: string;
    size?: number;
    storageType?: string;
    suffix?: string;
    uniqueFileName?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    url?: string;
}

/**
 * @description: 增量文件上传日志
 */
export interface FileFileParamVO {
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件md5
    fileMd5?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
    // 存储类型
    storageType?: string;
    // 后缀
    suffix?: string;
    // 唯一文件名
    uniqueFileName?: string;
    // 文件访问地址
    url?: string;
}

/**
 * @description: 增量文件上传日志
 */
export interface FileFileResultVO {
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 文件类型
    contentType?: string;
    // 文件md5
    fileMd5?: string;
    // 文件类型
    fileType?: string;
    // 主键
    id?: number;
    // 原始文件名
    originalFileName?: string;
    // 文件相对地址
    path?: string;
    // 大小
    size?: number;
    // 后缀
    suffix?: string;
    // 唯一文件名
    uniqueFileName?: string;
    // 文件访问地址
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
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: FileFileParamVO;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_FileFileResultVO_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: FileFileResultVO;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_File_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: File;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_IPage_File__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_File_;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_List_AppendixResultVO__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: AppendixResultVO[];
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_List_File__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: File[];
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_long_string__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: string;
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_Map_string_string__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: {
        [index: string]: string;
    };
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface R_boolean_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: boolean;
    // 异常消息
    errorMsg?: string;
    // 附加数据
    extra?: any;
    isSuccess?: boolean;
    // 提示消息
    msg?: string;
    // 请求路径
    path?: string;
    // 响应时间戳
    timestamp?: number;
}

export interface TQueryOflistByBizIdUsingPOST {
    // bizId
    bizId: number;
    // bizType
    bizType?: string;
}
export type TResponseOflistByBizIdUsingPOST = R_List_AppendixResultVO__;
export type TBodyOfdeleteUsingDELETE_5 = number[];
export type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
export type TBodyOffindUrlByIdUsingPOST = number[];
export type TResponseOffindUrlByIdUsingPOST = R_Map_long_string__;
export type TBodyOffindUrlByPathUsingPOST = string[];
export type TResponseOffindUrlByPathUsingPOST = R_Map_string_string__;
export interface TFormDataOfuploadUsingPOST {
    // 附件
    file: MultipartFile[];
}
export interface TQueryOfuploadUsingPOST {
    // 业务类型
    bizType?: string;
    // 桶
    bucket?: string;
    // 存储类型
    storageType?: string;
}
export type TResponseOfuploadUsingPOST = R_FileFileResultVO_;
export type TBodyOfdownloadUsingPOST = number[];
export type TResponseOfdownloadUsingPOST = any;
export type TBodyOfpageUsingPOST_5 = PageParams_FileFileParamVO_;
export type TResponseOfpageUsingPOST_5 = R_IPage_File__;
export type TBodyOfqueryUsingPOST_4 = File;
export type TResponseOfqueryUsingPOST_4 = R_List_File__;
export interface TPathOfgetUsingGET_5 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_5 = R_File_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/anyone/appendix/listByBizId"): {
    /**
     * @description 根据业务id 和 业务类型查询附件信息
     * @see [Swagger doc: 根据业务id 和 业务类型查询附件信息](http://120.79.250.86:8762/doc.html#/文件服务/业务附件/listByBizIdUsingPOST)
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
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/deleteUsingDELETE_5)
     *
     * @tag文件实时上传
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_5 }): Promise<TResponseOfdeleteUsingDELETE_5>;
  };
  (url: "/file/anyone/findUrlById"): {
    /**
     * @description 根据文件id，获取文件临时的访问路径
     * @see [Swagger doc: 根据文件id，获取文件临时的访问路径](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/findUrlByIdUsingPOST)
     *
     * @tag文件实时上传
     */
    post(options: { body: TBodyOffindUrlByIdUsingPOST }): Promise<TResponseOffindUrlByIdUsingPOST>;
  };
  (url: "/file/anyone/findUrlByPath"): {
    /**
     * @description 批量根据文件相对路径，获取文件临时的访问路径
     * @see [Swagger doc: 批量根据文件相对路径，获取文件临时的访问路径](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/findUrlByPathUsingPOST)
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
     * @see [Swagger doc: 附件上传](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/uploadUsingPOST)
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
     * @see [Swagger doc: 根据文件id打包下载](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/downloadUsingPOST)
     *
     * @tag文件实时上传
     */
    post(options: { body: TBodyOfdownloadUsingPOST }): Promise<TResponseOfdownloadUsingPOST>;
  };
  (url: "/file/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/pageUsingPOST_5)
     *
     * @tag文件实时上传
     */
    post(options: { body: TBodyOfpageUsingPOST_5 }): Promise<TResponseOfpageUsingPOST_5>;
  };
  (url: "/file/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/queryUsingPOST_4)
     *
     * @tag文件实时上传
     */
    post(options: { body: TBodyOfqueryUsingPOST_4 }): Promise<TResponseOfqueryUsingPOST_4>;
  };
  (url: "/file/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/文件服务/文件实时上传/getUsingGET_5)
     *
     * @tag文件实时上传
     */
    get(options: { path: TPathOfgetUsingGET_5 }): Promise<TResponseOfgetUsingGET_5>;
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
export function createRequest(provider: RequestProvider): IApiFn {
  return (url: string) => {
    return {
      get: (options: any) => provider.get(url, options),
      post: (options: any) => provider.post(url, options),
      put: (options: any) => provider.put(url, options),
      head: (options: any) => provider.head(url, options),
      delete: (options: any) => provider.delete(url, options),
      patch: (options: any) => provider.patch(url, options),
    };
  };
}
