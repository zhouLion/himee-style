export interface IPage_StoreUser_ {
    current?: number;
    pages?: number;
    records?: StoreUser[];
    size?: number;
    total?: number;
}

export interface IPage_Store_ {
    current?: number;
    pages?: number;
    records?: Store[];
    size?: number;
    total?: number;
}

/**
 * @description: 分页参数
 */
export interface PageParams_StorePageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StorePageQuery;
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
export interface PageParams_StoreUserPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StoreUserPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_IPage_StoreUser__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_StoreUser_;
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

export interface R_IPage_Store__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Store_;
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

export interface R_List_StoreUser__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: StoreUser[];
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

export interface R_List_Store__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Store[];
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

export interface R_StoreUser_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: StoreUser;
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

export interface R_Store_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Store;
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
 * @description: 店铺
 */
export interface Store {
    // 详细地址
    address?: string;
    // 所属市编码
    cityCode?: string;
    // 所属区县编码
    countyCode?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 所属区域;
    districtId?: number;
    echoMap?: any;
    // 主键
    id?: number;
    // 是否总店;
    isHeadOffice?: string;
    // 门店纬度
    lat?: string;
    // 门店经度
    lon?: string;
    // 门店管理类型;
    memberManageType?: string;
    // 商户id
    merchantId?: number;
    // 是否独立支付
    payIndependent?: string;
    // 门店负责人
    principalPerson?: string;
    // 负责人电话
    principalPhone?: string;
    // 所属省编码
    provCode?: string;
    // 门店状态;
    state?: string;
    // 门店名称
    storeName?: string;
    // 门店面积
    storeSq?: number;
    // 门店类型;
    storeType?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 店铺
 */
export interface StorePageQuery {
    // 详细地址
    address?: string;
    // 所属市编码
    cityCode?: string;
    // 所属区县编码
    countyCode?: string;
    // 所属区域;
    districtId?: number;
    // 是否总店;
    isHeadOffice?: string;
    // 门店纬度
    lat?: string;
    // 门店经度
    lon?: string;
    // 门店管理类型;
    memberManageType?: string;
    // 商户id
    merchantId?: number;
    // 是否独立支付
    payIndependent?: string;
    // 门店负责人
    principalPerson?: string;
    // 负责人电话
    principalPhone?: string;
    // 所属省编码
    provCode?: string;
    // 门店状态;
    state?: string;
    // 门店名称
    storeName?: string;
    // 门店面积
    storeSq?: number;
    // 门店类型;
    storeType?: string;
}

/**
 * @description: 店铺
 */
export interface StoreSaveDTO {
    // 详细地址
    address?: string;
    // 所属市编码
    cityCode?: string;
    // 所属区县编码
    countyCode?: string;
    // 所属区域;
    districtId?: number;
    // 是否总店;
    isHeadOffice?: string;
    // 门店纬度
    lat?: string;
    // 门店经度
    lon?: string;
    // 门店管理类型;
    memberManageType?: string;
    // 商户id
    merchantId?: number;
    // 是否独立支付
    payIndependent?: string;
    // 门店负责人
    principalPerson?: string;
    // 负责人电话
    principalPhone?: string;
    // 所属省编码
    provCode?: string;
    // 门店状态;
    state?: string;
    // 门店名称
    storeName?: string;
    // 门店面积
    storeSq?: number;
    // 门店类型;
    storeType?: string;
}

/**
 * @description: 店铺
 */
export interface StoreUpdateDTO {
    // 详细地址
    address?: string;
    // 所属市编码
    cityCode?: string;
    // 所属区县编码
    countyCode?: string;
    // 所属区域;
    districtId?: number;
    // 主键
    id?: number;
    // 是否总店;
    isHeadOffice?: string;
    // 门店纬度
    lat?: string;
    // 门店经度
    lon?: string;
    // 门店管理类型;
    memberManageType?: string;
    // 商户id
    merchantId?: number;
    // 是否独立支付
    payIndependent?: string;
    // 门店负责人
    principalPerson?: string;
    // 负责人电话
    principalPhone?: string;
    // 所属省编码
    provCode?: string;
    // 门店状态;
    state?: string;
    // 门店名称
    storeName?: string;
    // 门店面积
    storeSq?: number;
    // 门店类型;
    storeType?: string;
}

/**
 * @description: 店铺用户
 */
export interface StoreUser {
    // 登录账号
    account?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户id
    merchantId?: number;
    // 店铺id
    storeId?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 用户id
    userId?: number;
}

/**
 * @description: 店铺用户
 */
export interface StoreUserPageQuery {
    // 登录账号
    account?: string;
    // 商户id
    merchantId?: number;
    // 店铺id
    storeId?: number;
    // 用户id
    userId?: number;
}

/**
 * @description: 店铺用户
 */
export interface StoreUserSaveDTO {
    // 登录账号
    account?: string;
    // 商户id
    merchantId?: number;
    // 店铺id
    storeId?: number;
    // 用户id
    userId?: number;
}

/**
 * @description: 店铺用户
 */
export interface StoreUserUpdateDTO {
    // 登录账号
    account?: string;
    // 主键
    id?: number;
    // 商户id
    merchantId?: number;
    // 店铺id
    storeId?: number;
    // 用户id
    userId?: number;
}

export type TBodyOfsaveUsingPOST_3 = StoreSaveDTO;
export type TResponseOfsaveUsingPOST_3 = R_Store_;
export type TBodyOfupdateUsingPUT_3 = StoreUpdateDTO;
export type TResponseOfupdateUsingPUT_3 = R_Store_;
export type TBodyOfdeleteUsingDELETE_3 = number[];
export type TResponseOfdeleteUsingDELETE_3 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_3 = Store;
export type TResponseOfupdateAllUsingPUT_3 = R_Store_;
export type TBodyOfexportExcelUsingPOST_3 = PageParams_StorePageQuery_;
export type TResponseOfexportExcelUsingPOST_3 = any;
export interface TFormDataOfimportExcelUsingPOST_3 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_3 = R_boolean_;
export type TBodyOfpageUsingPOST_3 = PageParams_StorePageQuery_;
export type TResponseOfpageUsingPOST_3 = R_IPage_Store__;
export type TBodyOfpreviewUsingPOST_3 = PageParams_StorePageQuery_;
export type TResponseOfpreviewUsingPOST_3 = R_string_;
export type TBodyOfqueryUsingPOST_3 = Store;
export type TResponseOfqueryUsingPOST_3 = R_List_Store__;
export interface TPathOfgetUsingGET_3 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_3 = R_Store_;
export type TBodyOfsaveUsingPOST_4 = StoreUserSaveDTO;
export type TResponseOfsaveUsingPOST_4 = R_StoreUser_;
export type TBodyOfupdateUsingPUT_4 = StoreUserUpdateDTO;
export type TResponseOfupdateUsingPUT_4 = R_StoreUser_;
export type TBodyOfdeleteUsingDELETE_4 = number[];
export type TResponseOfdeleteUsingDELETE_4 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_4 = StoreUser;
export type TResponseOfupdateAllUsingPUT_4 = R_StoreUser_;
export type TBodyOfexportExcelUsingPOST_4 = PageParams_StoreUserPageQuery_;
export type TResponseOfexportExcelUsingPOST_4 = any;
export interface TFormDataOfimportExcelUsingPOST_4 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_4 = R_boolean_;
export type TBodyOfpageUsingPOST_4 = PageParams_StoreUserPageQuery_;
export type TResponseOfpageUsingPOST_4 = R_IPage_StoreUser__;
export type TBodyOfpreviewUsingPOST_4 = PageParams_StoreUserPageQuery_;
export type TResponseOfpreviewUsingPOST_4 = R_string_;
export type TBodyOfqueryUsingPOST_4 = StoreUser;
export type TResponseOfqueryUsingPOST_4 = R_List_StoreUser__;
export interface TPathOfgetUsingGET_4 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_4 = R_StoreUser_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/store"): {
    /**
     * @description 新增 saveUsingPOST_3
     * 店铺
     */
    post(options: { body: TBodyOfsaveUsingPOST_3 }): Promise<TResponseOfsaveUsingPOST_3>;

    /**
     * @description 修改 updateUsingPUT_3
     * 店铺
     */
    put(options: { body: TBodyOfupdateUsingPUT_3 }): Promise<TResponseOfupdateUsingPUT_3>;

    /**
     * @description 删除 deleteUsingDELETE_3
     * 店铺
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_3 }): Promise<TResponseOfdeleteUsingDELETE_3>;
  };
  (url: "/store/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_3
     * 店铺
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_3 }): Promise<TResponseOfupdateAllUsingPUT_3>;
  };
  (url: "/store/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_3
     * 店铺
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_3;
    }): Promise<TResponseOfexportExcelUsingPOST_3>;
  };
  (url: "/store/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_3
     * 店铺
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_3;
    }): Promise<TResponseOfimportExcelUsingPOST_3>;
  };
  (url: "/store/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_3
     * 店铺
     */
    post(options: { body: TBodyOfpageUsingPOST_3 }): Promise<TResponseOfpageUsingPOST_3>;
  };
  (url: "/store/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_3
     * 店铺
     */
    post(options: { body: TBodyOfpreviewUsingPOST_3 }): Promise<TResponseOfpreviewUsingPOST_3>;
  };
  (url: "/store/query"): {
    /**
     * @description 批量查询 queryUsingPOST_3
     * 店铺
     */
    post(options: { body: TBodyOfqueryUsingPOST_3 }): Promise<TResponseOfqueryUsingPOST_3>;
  };
  (url: "/store/{id}"): {
    /**
     * @description 单体查询 getUsingGET_3
     * 店铺
     */
    get(options: { path: TPathOfgetUsingGET_3 }): Promise<TResponseOfgetUsingGET_3>;
  };
  (url: "/storeUser"): {
    /**
     * @description 新增 saveUsingPOST_4
     * 店铺用户
     */
    post(options: { body: TBodyOfsaveUsingPOST_4 }): Promise<TResponseOfsaveUsingPOST_4>;

    /**
     * @description 修改 updateUsingPUT_4
     * 店铺用户
     */
    put(options: { body: TBodyOfupdateUsingPUT_4 }): Promise<TResponseOfupdateUsingPUT_4>;

    /**
     * @description 删除 deleteUsingDELETE_4
     * 店铺用户
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_4 }): Promise<TResponseOfdeleteUsingDELETE_4>;
  };
  (url: "/storeUser/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_4
     * 店铺用户
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_4 }): Promise<TResponseOfupdateAllUsingPUT_4>;
  };
  (url: "/storeUser/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_4
     * 店铺用户
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_4;
    }): Promise<TResponseOfexportExcelUsingPOST_4>;
  };
  (url: "/storeUser/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_4
     * 店铺用户
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_4;
    }): Promise<TResponseOfimportExcelUsingPOST_4>;
  };
  (url: "/storeUser/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_4
     * 店铺用户
     */
    post(options: { body: TBodyOfpageUsingPOST_4 }): Promise<TResponseOfpageUsingPOST_4>;
  };
  (url: "/storeUser/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_4
     * 店铺用户
     */
    post(options: { body: TBodyOfpreviewUsingPOST_4 }): Promise<TResponseOfpreviewUsingPOST_4>;
  };
  (url: "/storeUser/query"): {
    /**
     * @description 批量查询 queryUsingPOST_4
     * 店铺用户
     */
    post(options: { body: TBodyOfqueryUsingPOST_4 }): Promise<TResponseOfqueryUsingPOST_4>;
  };
  (url: "/storeUser/{id}"): {
    /**
     * @description 单体查询 getUsingGET_4
     * 店铺用户
     */
    get(options: { path: TPathOfgetUsingGET_4 }): Promise<TResponseOfgetUsingGET_4>;
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
