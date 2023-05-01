export interface IPage_Merchant_ {
    current?: number;
    pages?: number;
    records?: Merchant[];
    size?: number;
    total?: number;
}

/**
 * @description: 商户
 */
export interface Merchant {
    // 登录用户名称
    account?: string;
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户名称
    merchantName?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 登录密码
    password?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 商户状态;
    state?: string;
    tenantCode?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 商户审核
 */
export interface MerchantApproveDTO {
    // 商户id
    merchantId?: number;
    // 商户状态;
    state?: string;
    // 用户id
    userId?: number;
}

/**
 * @description: 商户
 */
export interface MerchantPageQuery {
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 商户名称
    merchantName?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 商户状态;
    state?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
}

/**
 * @description: 商户注册
 */
export interface MerchantRegisterDTO {
    // 登录用户名称
    account?: string;
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 确认登录密码
    confirmPassword?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 商户名称
    merchantName?: string;
    // 商户类型
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 登录密码
    password?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
    // 验证码
    verifyCode?: string;
    // 验证码KEY
    verifyKey?: string;
}

/**
 * @description: 商户
 */
export interface MerchantSaveDTO {
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 商户名称
    merchantName?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 商户状态;
    state?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
}

/**
 * @description: 商户
 */
export interface MerchantUpdateDTO {
    // 详细地址
    address?: string;
    // 营业执照文件地址;文件服务地址
    busLicenseFile?: string;
    // 营业执照名称;单店和连锁类型必填
    busLicenseName?: string;
    // 所在地市编码;6位行政区划编码
    cityCode?: string;
    // 联系人
    contact?: string;
    // 所在地区县编码;6位行政区划编码
    countyCode?: string;
    // 主键
    id?: number;
    // 商户名称
    merchantName?: string;
    // 商户类型;
    merchantType?: string;
    // 联系人手机号
    mobile?: string;
    // 所在地省编码;6位行政区划编码
    provCode?: string;
    // 商户状态;
    state?: string;
    // 统一信用代码;单店和连锁类型必填
    unifiedCreditCode?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_MerchantPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: MerchantPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_IPage_Merchant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_Merchant_;
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

export interface R_List_Merchant__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: Merchant[];
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

export interface R_Merchant_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: Merchant;
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

export type TBodyOfsaveUsingPOST_2 = MerchantSaveDTO;
export type TResponseOfsaveUsingPOST_2 = R_Merchant_;
export type TBodyOfupdateUsingPUT_2 = MerchantUpdateDTO;
export type TResponseOfupdateUsingPUT_2 = R_Merchant_;
export type TBodyOfdeleteUsingDELETE_2 = number[];
export type TResponseOfdeleteUsingDELETE_2 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_2 = Merchant;
export type TResponseOfupdateAllUsingPUT_2 = R_Merchant_;
export type TBodyOfapproveUsingPOST = MerchantApproveDTO;
export type TResponseOfapproveUsingPOST = R_boolean_;
export type TBodyOfexportExcelUsingPOST_2 = PageParams_MerchantPageQuery_;
export type TResponseOfexportExcelUsingPOST_2 = any;
export interface TFormDataOfimportExcelUsingPOST_2 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_2 = R_boolean_;
export type TBodyOfpageUsingPOST_2 = PageParams_MerchantPageQuery_;
export type TResponseOfpageUsingPOST_2 = R_IPage_Merchant__;
export type TBodyOfpreviewUsingPOST_2 = PageParams_MerchantPageQuery_;
export type TResponseOfpreviewUsingPOST_2 = R_string_;
export type TBodyOfqueryUsingPOST_2 = Merchant;
export type TResponseOfqueryUsingPOST_2 = R_List_Merchant__;
export type TBodyOfregisterUsingPUT = MerchantRegisterDTO;
export type TResponseOfregisterUsingPUT = R_Merchant_;
export interface TPathOfgetUsingGET_2 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_2 = R_Merchant_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/merchant"): {
    /**
     * @description 新增 saveUsingPOST_2
     * 商户
     */
    post(options: { body: TBodyOfsaveUsingPOST_2 }): Promise<TResponseOfsaveUsingPOST_2>;

    /**
     * @description 修改 updateUsingPUT_2
     * 商户
     */
    put(options: { body: TBodyOfupdateUsingPUT_2 }): Promise<TResponseOfupdateUsingPUT_2>;

    /**
     * @description 删除 deleteUsingDELETE_2
     * 商户
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_2 }): Promise<TResponseOfdeleteUsingDELETE_2>;
  };
  (url: "/merchant/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_2
     * 商户
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_2 }): Promise<TResponseOfupdateAllUsingPUT_2>;
  };
  (url: "/merchant/approve"): {
    /**
     * @description 商户审核后 approveUsingPOST
     * 商户
     */
    post(options: { body: TBodyOfapproveUsingPOST }): Promise<TResponseOfapproveUsingPOST>;
  };
  (url: "/merchant/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_2
     * 商户
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_2;
    }): Promise<TResponseOfexportExcelUsingPOST_2>;
  };
  (url: "/merchant/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_2
     * 商户
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_2;
    }): Promise<TResponseOfimportExcelUsingPOST_2>;
  };
  (url: "/merchant/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_2
     * 商户
     */
    post(options: { body: TBodyOfpageUsingPOST_2 }): Promise<TResponseOfpageUsingPOST_2>;
  };
  (url: "/merchant/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_2
     * 商户
     */
    post(options: { body: TBodyOfpreviewUsingPOST_2 }): Promise<TResponseOfpreviewUsingPOST_2>;
  };
  (url: "/merchant/query"): {
    /**
     * @description 批量查询 queryUsingPOST_2
     * 商户
     */
    post(options: { body: TBodyOfqueryUsingPOST_2 }): Promise<TResponseOfqueryUsingPOST_2>;
  };
  (url: "/merchant/register"): {
    /**
     * @description 商户注册 registerUsingPUT
     * 商户
     */
    put(options: { body: TBodyOfregisterUsingPUT }): Promise<TResponseOfregisterUsingPUT>;
  };
  (url: "/merchant/{id}"): {
    /**
     * @description 单体查询 getUsingGET_2
     * 商户
     */
    get(options: { path: TPathOfgetUsingGET_2 }): Promise<TResponseOfgetUsingGET_2>;
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
