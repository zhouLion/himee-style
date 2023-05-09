export interface IPage_Org_ {
    current?: number;
    pages?: number;
    records?: Org[];
    size?: number;
    total?: number;
}

export interface IPage_Station_ {
    current?: number;
    pages?: number;
    records?: Station[];
    size?: number;
    total?: number;
}

/**
 * @description: 组织
 */
export interface Org {
    // 简称
    abbreviation?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 描述
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 树结构
    treePath?: string;
    // 类型
    type?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 组织
 */
export interface OrgPageQuery {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 树结构
    treePath?: string;
    // 类型
    type?: string;
}

/**
 * @description: 组织
 */
export interface OrgSaveDTO {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}

/**
 * @description: 组织
 */
export interface OrgUpdateDTO {
    // 简称
    abbreviation?: string;
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 名称
    label?: string;
    // 父ID
    parentId?: number;
    // 排序号
    sortValue?: number;
    // 状态
    state?: boolean;
    // 类型
    type?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_OrgPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: OrgPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_StationPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StationPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_IPage_Org__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Org_;
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

export interface R_IPage_Station__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Station_;
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

export interface R_List_Org__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Org[];
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

export interface R_List_Station__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Station[];
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

export interface R_Org_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Org;
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

export interface R_Station_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Station;
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

export interface R_string_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: string;
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

/**
 * @description: 岗位
 */
export interface Station {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建者所属机构
    createdOrgId?: number;
    // 描述
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 岗位
 */
export interface StationPageQuery {
    createdOrgId?: number;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}

/**
 * @description: 岗位
 */
export interface StationSaveDTO {
    createdOrgId?: number;
    // 描述
    describe?: string;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}

/**
 * @description: 岗位
 */
export interface StationUpdateDTO {
    // 描述
    describe?: string;
    // 主键
    id?: number;
    // 名称
    name?: string;
    // 组织
    orgId?: number;
    // 状态
    state?: boolean;
}

export type TBodyOfsaveUsingPOST_16 = OrgSaveDTO;
export type TResponseOfsaveUsingPOST_16 = R_Org_;
export type TBodyOfupdateUsingPUT_15 = OrgUpdateDTO;
export type TResponseOfupdateUsingPUT_15 = R_Org_;
export type TBodyOfdeleteUsingDELETE_19 = number[];
export type TResponseOfdeleteUsingDELETE_19 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_15 = Org;
export type TResponseOfupdateAllUsingPUT_15 = R_Org_;
export interface TQueryOfcheckUsingGET_6 {
    // ID
    id?: number;
    // 名称
    name?: string;
}
export type TResponseOfcheckUsingGET_6 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_7 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_17 = PageParams_OrgPageQuery_;
export type TResponseOfexportExcelUsingPOST_17 = any;
export interface TFormDataOfimportExcelUsingPOST_16 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_16 = R_boolean_;
export type TBodyOfpageUsingPOST_21 = PageParams_OrgPageQuery_;
export type TResponseOfpageUsingPOST_21 = R_IPage_Org__;
export type TBodyOfpreviewUsingPOST_17 = PageParams_OrgPageQuery_;
export type TResponseOfpreviewUsingPOST_17 = R_string_;
export type TBodyOfqueryUsingPOST_17 = Org;
export type TResponseOfqueryUsingPOST_17 = R_List_Org__;
export type TResponseOfrefreshCacheUsingPOST_7 = R_boolean_;
export interface TQueryOftreeUsingGET {
    // name
    name?: string;
    // state
    state?: boolean;
}
export type TResponseOftreeUsingGET = R_List_Org__;
export interface TPathOfgetUsingGET_19 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_19 = R_Org_;
export type TBodyOfsaveUsingPOST_17 = StationSaveDTO;
export type TResponseOfsaveUsingPOST_17 = R_Station_;
export type TBodyOfupdateUsingPUT_16 = StationUpdateDTO;
export type TResponseOfupdateUsingPUT_16 = R_Station_;
export type TBodyOfdeleteUsingDELETE_20 = number[];
export type TResponseOfdeleteUsingDELETE_20 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_16 = Station;
export type TResponseOfupdateAllUsingPUT_16 = R_Station_;
export interface TQueryOfcheckUsingGET_7 {
    // ID
    id?: number;
    // 名称
    name?: string;
}
export type TResponseOfcheckUsingGET_7 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_8 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_18 = PageParams_StationPageQuery_;
export type TResponseOfexportExcelUsingPOST_18 = any;
export interface TFormDataOfimportExcelUsingPOST_17 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_17 = R_boolean_;
export type TBodyOfpageUsingPOST_22 = PageParams_StationPageQuery_;
export type TResponseOfpageUsingPOST_22 = R_IPage_Station__;
export type TBodyOfpreviewUsingPOST_18 = PageParams_StationPageQuery_;
export type TResponseOfpreviewUsingPOST_18 = R_string_;
export type TBodyOfqueryUsingPOST_18 = Station;
export type TResponseOfqueryUsingPOST_18 = R_List_Station__;
export type TResponseOfrefreshCacheUsingPOST_8 = R_boolean_;
export interface TPathOfgetUsingGET_20 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_20 = R_Station_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/org"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/组织模块/组织/saveUsingPOST_16)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfsaveUsingPOST_16 }): Promise<TResponseOfsaveUsingPOST_16>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/组织模块/组织/updateUsingPUT_15)
     *
     * @tag组织
     */
    put(options: { body: TBodyOfupdateUsingPUT_15 }): Promise<TResponseOfupdateUsingPUT_15>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/组织模块/组织/deleteUsingDELETE_19)
     *
     * @tag组织
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_19;
    }): Promise<TResponseOfdeleteUsingDELETE_19>;
  };
  (url: "/org/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/组织模块/组织/updateAllUsingPUT_15)
     *
     * @tag组织
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_15 }): Promise<TResponseOfupdateAllUsingPUT_15>;
  };
  (url: "/org/check"): {
    /**
     * @description 检测名称是否可用
     * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8760/doc.html#/组织模块/组织/checkUsingGET_6)
     *
     * @tag组织
     */
    get(options: { query: TQueryOfcheckUsingGET_6 }): Promise<TResponseOfcheckUsingGET_6>;
  };
  (url: "/org/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8760/doc.html#/组织模块/组织/clearCacheUsingPOST_7)
     *
     * @tag组织
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_7>;
  };
  (url: "/org/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/组织模块/组织/exportExcelUsingPOST_17)
     *
     * @tag组织
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_17;
    }): Promise<TResponseOfexportExcelUsingPOST_17>;
  };
  (url: "/org/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/组织模块/组织/importExcelUsingPOST_16)
     *
     * @tag组织
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_16;
    }): Promise<TResponseOfimportExcelUsingPOST_16>;
  };
  (url: "/org/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/组织模块/组织/pageUsingPOST_21)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfpageUsingPOST_21 }): Promise<TResponseOfpageUsingPOST_21>;
  };
  (url: "/org/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/组织模块/组织/previewUsingPOST_17)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfpreviewUsingPOST_17 }): Promise<TResponseOfpreviewUsingPOST_17>;
  };
  (url: "/org/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/组织模块/组织/queryUsingPOST_17)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfqueryUsingPOST_17 }): Promise<TResponseOfqueryUsingPOST_17>;
  };
  (url: "/org/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8760/doc.html#/组织模块/组织/refreshCacheUsingPOST_7)
     *
     * @tag组织
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_7>;
  };
  (url: "/org/tree"): {
    /**
     * @description 查询系统所有的组织树
     * @see [Swagger doc: 查询系统所有的组织树](http://120.79.250.86:8760/doc.html#/组织模块/组织/treeUsingGET)
     *
     * @tag组织
     */
    get(options: { query: TQueryOftreeUsingGET }): Promise<TResponseOftreeUsingGET>;
  };
  (url: "/org/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/组织模块/组织/getUsingGET_19)
     *
     * @tag组织
     */
    get(options: { path: TPathOfgetUsingGET_19 }): Promise<TResponseOfgetUsingGET_19>;
  };
  (url: "/station"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8760/doc.html#/组织模块/岗位/saveUsingPOST_17)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfsaveUsingPOST_17 }): Promise<TResponseOfsaveUsingPOST_17>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8760/doc.html#/组织模块/岗位/updateUsingPUT_16)
     *
     * @tag岗位
     */
    put(options: { body: TBodyOfupdateUsingPUT_16 }): Promise<TResponseOfupdateUsingPUT_16>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8760/doc.html#/组织模块/岗位/deleteUsingDELETE_20)
     *
     * @tag岗位
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_20;
    }): Promise<TResponseOfdeleteUsingDELETE_20>;
  };
  (url: "/station/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8760/doc.html#/组织模块/岗位/updateAllUsingPUT_16)
     *
     * @tag岗位
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_16 }): Promise<TResponseOfupdateAllUsingPUT_16>;
  };
  (url: "/station/check"): {
    /**
     * @description 检测名称是否可用
     * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8760/doc.html#/组织模块/岗位/checkUsingGET_7)
     *
     * @tag岗位
     */
    get(options: { query: TQueryOfcheckUsingGET_7 }): Promise<TResponseOfcheckUsingGET_7>;
  };
  (url: "/station/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8760/doc.html#/组织模块/岗位/clearCacheUsingPOST_8)
     *
     * @tag岗位
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_8>;
  };
  (url: "/station/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8760/doc.html#/组织模块/岗位/exportExcelUsingPOST_18)
     *
     * @tag岗位
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_18;
    }): Promise<TResponseOfexportExcelUsingPOST_18>;
  };
  (url: "/station/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8760/doc.html#/组织模块/岗位/importExcelUsingPOST_17)
     *
     * @tag岗位
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_17;
    }): Promise<TResponseOfimportExcelUsingPOST_17>;
  };
  (url: "/station/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8760/doc.html#/组织模块/岗位/pageUsingPOST_22)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfpageUsingPOST_22 }): Promise<TResponseOfpageUsingPOST_22>;
  };
  (url: "/station/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8760/doc.html#/组织模块/岗位/previewUsingPOST_18)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfpreviewUsingPOST_18 }): Promise<TResponseOfpreviewUsingPOST_18>;
  };
  (url: "/station/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8760/doc.html#/组织模块/岗位/queryUsingPOST_18)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfqueryUsingPOST_18 }): Promise<TResponseOfqueryUsingPOST_18>;
  };
  (url: "/station/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8760/doc.html#/组织模块/岗位/refreshCacheUsingPOST_8)
     *
     * @tag岗位
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_8>;
  };
  (url: "/station/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8760/doc.html#/组织模块/岗位/getUsingGET_20)
     *
     * @tag岗位
     */
    get(options: { path: TPathOfgetUsingGET_20 }): Promise<TResponseOfgetUsingGET_20>;
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
