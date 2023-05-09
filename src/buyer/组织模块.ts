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

export type TBodyOfsaveUsingPOST_22 = OrgSaveDTO;
export type TResponseOfsaveUsingPOST_22 = R_Org_;
export type TBodyOfupdateUsingPUT_21 = OrgUpdateDTO;
export type TResponseOfupdateUsingPUT_21 = R_Org_;
export type TBodyOfdeleteUsingDELETE_25 = number[];
export type TResponseOfdeleteUsingDELETE_25 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_21 = Org;
export type TResponseOfupdateAllUsingPUT_21 = R_Org_;
export interface TQueryOfcheckUsingGET_6 {
    // ID
    id?: number;
    // 名称
    name?: string;
}
export type TResponseOfcheckUsingGET_6 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_7 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_23 = PageParams_OrgPageQuery_;
export type TResponseOfexportExcelUsingPOST_23 = any;
export interface TFormDataOfimportExcelUsingPOST_22 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_22 = R_boolean_;
export type TBodyOfpageUsingPOST_27 = PageParams_OrgPageQuery_;
export type TResponseOfpageUsingPOST_27 = R_IPage_Org__;
export type TBodyOfpreviewUsingPOST_23 = PageParams_OrgPageQuery_;
export type TResponseOfpreviewUsingPOST_23 = R_string_;
export type TBodyOfqueryUsingPOST_23 = Org;
export type TResponseOfqueryUsingPOST_23 = R_List_Org__;
export type TResponseOfrefreshCacheUsingPOST_7 = R_boolean_;
export interface TQueryOftreeUsingGET {
    // name
    name?: string;
    // state
    state?: boolean;
}
export type TResponseOftreeUsingGET = R_List_Org__;
export interface TPathOfgetUsingGET_25 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_25 = R_Org_;
export type TBodyOfsaveUsingPOST_23 = StationSaveDTO;
export type TResponseOfsaveUsingPOST_23 = R_Station_;
export type TBodyOfupdateUsingPUT_22 = StationUpdateDTO;
export type TResponseOfupdateUsingPUT_22 = R_Station_;
export type TBodyOfdeleteUsingDELETE_26 = number[];
export type TResponseOfdeleteUsingDELETE_26 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_22 = Station;
export type TResponseOfupdateAllUsingPUT_22 = R_Station_;
export interface TQueryOfcheckUsingGET_7 {
    // ID
    id?: number;
    // 名称
    name?: string;
}
export type TResponseOfcheckUsingGET_7 = R_boolean_;
export type TResponseOfclearCacheUsingPOST_8 = R_boolean_;
export type TBodyOfexportExcelUsingPOST_24 = PageParams_StationPageQuery_;
export type TResponseOfexportExcelUsingPOST_24 = any;
export interface TFormDataOfimportExcelUsingPOST_23 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_23 = R_boolean_;
export type TBodyOfpageUsingPOST_28 = PageParams_StationPageQuery_;
export type TResponseOfpageUsingPOST_28 = R_IPage_Station__;
export type TBodyOfpreviewUsingPOST_24 = PageParams_StationPageQuery_;
export type TResponseOfpreviewUsingPOST_24 = R_string_;
export type TBodyOfqueryUsingPOST_24 = Station;
export type TResponseOfqueryUsingPOST_24 = R_List_Station__;
export type TResponseOfrefreshCacheUsingPOST_8 = R_boolean_;
export interface TPathOfgetUsingGET_26 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_26 = R_Station_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/org"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/组织模块/组织/saveUsingPOST_22)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfsaveUsingPOST_22 }): Promise<TResponseOfsaveUsingPOST_22>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/组织模块/组织/updateUsingPUT_21)
     *
     * @tag组织
     */
    put(options: { body: TBodyOfupdateUsingPUT_21 }): Promise<TResponseOfupdateUsingPUT_21>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/组织模块/组织/deleteUsingDELETE_25)
     *
     * @tag组织
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_25;
    }): Promise<TResponseOfdeleteUsingDELETE_25>;
  };
  (url: "/org/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/组织模块/组织/updateAllUsingPUT_21)
     *
     * @tag组织
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_21 }): Promise<TResponseOfupdateAllUsingPUT_21>;
  };
  (url: "/org/check"): {
    /**
     * @description 检测名称是否可用
     * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8762/doc.html#/组织模块/组织/checkUsingGET_6)
     *
     * @tag组织
     */
    get(options: { query: TQueryOfcheckUsingGET_6 }): Promise<TResponseOfcheckUsingGET_6>;
  };
  (url: "/org/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/组织模块/组织/clearCacheUsingPOST_7)
     *
     * @tag组织
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_7>;
  };
  (url: "/org/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/组织模块/组织/exportExcelUsingPOST_23)
     *
     * @tag组织
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_23;
    }): Promise<TResponseOfexportExcelUsingPOST_23>;
  };
  (url: "/org/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/组织模块/组织/importExcelUsingPOST_22)
     *
     * @tag组织
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_22;
    }): Promise<TResponseOfimportExcelUsingPOST_22>;
  };
  (url: "/org/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/组织模块/组织/pageUsingPOST_27)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfpageUsingPOST_27 }): Promise<TResponseOfpageUsingPOST_27>;
  };
  (url: "/org/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/组织模块/组织/previewUsingPOST_23)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfpreviewUsingPOST_23 }): Promise<TResponseOfpreviewUsingPOST_23>;
  };
  (url: "/org/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/组织模块/组织/queryUsingPOST_23)
     *
     * @tag组织
     */
    post(options: { body: TBodyOfqueryUsingPOST_23 }): Promise<TResponseOfqueryUsingPOST_23>;
  };
  (url: "/org/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/组织模块/组织/refreshCacheUsingPOST_7)
     *
     * @tag组织
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_7>;
  };
  (url: "/org/tree"): {
    /**
     * @description 查询系统所有的组织树
     * @see [Swagger doc: 查询系统所有的组织树](http://120.79.250.86:8762/doc.html#/组织模块/组织/treeUsingGET)
     *
     * @tag组织
     */
    get(options: { query: TQueryOftreeUsingGET }): Promise<TResponseOftreeUsingGET>;
  };
  (url: "/org/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/组织模块/组织/getUsingGET_25)
     *
     * @tag组织
     */
    get(options: { path: TPathOfgetUsingGET_25 }): Promise<TResponseOfgetUsingGET_25>;
  };
  (url: "/station"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/组织模块/岗位/saveUsingPOST_23)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfsaveUsingPOST_23 }): Promise<TResponseOfsaveUsingPOST_23>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/组织模块/岗位/updateUsingPUT_22)
     *
     * @tag岗位
     */
    put(options: { body: TBodyOfupdateUsingPUT_22 }): Promise<TResponseOfupdateUsingPUT_22>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/组织模块/岗位/deleteUsingDELETE_26)
     *
     * @tag岗位
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_26;
    }): Promise<TResponseOfdeleteUsingDELETE_26>;
  };
  (url: "/station/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/组织模块/岗位/updateAllUsingPUT_22)
     *
     * @tag岗位
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_22 }): Promise<TResponseOfupdateAllUsingPUT_22>;
  };
  (url: "/station/check"): {
    /**
     * @description 检测名称是否可用
     * @see [Swagger doc: 检测名称是否可用](http://120.79.250.86:8762/doc.html#/组织模块/岗位/checkUsingGET_7)
     *
     * @tag岗位
     */
    get(options: { query: TQueryOfcheckUsingGET_7 }): Promise<TResponseOfcheckUsingGET_7>;
  };
  (url: "/station/clearCache"): {
    /**
     * @description 清理缓存
     * @see [Swagger doc: 清理缓存](http://120.79.250.86:8762/doc.html#/组织模块/岗位/clearCacheUsingPOST_8)
     *
     * @tag岗位
     */
    post(options: {}): Promise<TResponseOfclearCacheUsingPOST_8>;
  };
  (url: "/station/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/组织模块/岗位/exportExcelUsingPOST_24)
     *
     * @tag岗位
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_24;
    }): Promise<TResponseOfexportExcelUsingPOST_24>;
  };
  (url: "/station/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/组织模块/岗位/importExcelUsingPOST_23)
     *
     * @tag岗位
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_23;
    }): Promise<TResponseOfimportExcelUsingPOST_23>;
  };
  (url: "/station/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/组织模块/岗位/pageUsingPOST_28)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfpageUsingPOST_28 }): Promise<TResponseOfpageUsingPOST_28>;
  };
  (url: "/station/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/组织模块/岗位/previewUsingPOST_24)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfpreviewUsingPOST_24 }): Promise<TResponseOfpreviewUsingPOST_24>;
  };
  (url: "/station/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/组织模块/岗位/queryUsingPOST_24)
     *
     * @tag岗位
     */
    post(options: { body: TBodyOfqueryUsingPOST_24 }): Promise<TResponseOfqueryUsingPOST_24>;
  };
  (url: "/station/refreshCache"): {
    /**
     * @description 刷新缓存
     * @see [Swagger doc: 刷新缓存](http://120.79.250.86:8762/doc.html#/组织模块/岗位/refreshCacheUsingPOST_8)
     *
     * @tag岗位
     */
    post(options: {}): Promise<TResponseOfrefreshCacheUsingPOST_8>;
  };
  (url: "/station/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/组织模块/岗位/getUsingGET_26)
     *
     * @tag岗位
     */
    get(options: { path: TPathOfgetUsingGET_26 }): Promise<TResponseOfgetUsingGET_26>;
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
