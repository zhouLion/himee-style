export interface IPage_MerchantSvc_ {
    current?: number;
    pages?: number;
    records?: MerchantSvc[];
    size?: number;
    total?: number;
}

export interface IPage_StoreSvcCategory_ {
    current?: number;
    pages?: number;
    records?: StoreSvcCategory[];
    size?: number;
    total?: number;
}

export interface IPage_StoreSvc_ {
    current?: number;
    pages?: number;
    records?: StoreSvc[];
    size?: number;
    total?: number;
}

export interface IPage_SvcCatetory_ {
    current?: number;
    pages?: number;
    records?: SvcCatetory[];
    size?: number;
    total?: number;
}

/**
 * @description: 商户服务
 */
export interface MerchantSvc {
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户id
    merchantId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 同步状态;;[1-已同步 2-未同步]
    syncState?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
}

/**
 * @description: 商户服务
 */
export interface MerchantSvcPageQuery {
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户id
    merchantId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 同步状态;;[1-已同步 2-未同步]
    syncState?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
}

/**
 * @description: 商户服务
 */
export interface MerchantSvcSaveDTO {
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户id
    merchantId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 同步状态;;[1-已同步 2-未同步]
    syncState?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
}

/**
 * @description: 商户服务
 */
export interface MerchantSvcUpdateDTO {
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 主键
    id?: number;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户id
    merchantId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 同步状态;;[1-已同步 2-未同步]
    syncState?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_MerchantSvcPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: MerchantSvcPageQuery;
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
export interface PageParams_StoreSvcCategoryPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StoreSvcCategoryPageQuery;
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
export interface PageParams_StoreSvcPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: StoreSvcPageQuery;
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
export interface PageParams_SvcCatetoryPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: SvcCatetoryPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

export interface R_IPage_MerchantSvc__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_MerchantSvc_;
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

export interface R_IPage_StoreSvcCategory__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_StoreSvcCategory_;
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

export interface R_IPage_StoreSvc__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_StoreSvc_;
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

export interface R_IPage_SvcCatetory__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_SvcCatetory_;
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

export interface R_List_MerchantSvc__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: MerchantSvc[];
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

export interface R_List_StoreSvcCategory__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: StoreSvcCategory[];
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

export interface R_List_StoreSvc__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: StoreSvc[];
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

export interface R_List_SvcCatetory__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: SvcCatetory[];
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

export interface R_MerchantSvc_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: MerchantSvc;
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

export interface R_StoreSvcCategory_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: StoreSvcCategory;
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

export interface R_StoreSvc_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: StoreSvc;
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

export interface R_SvcCatetory_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SvcCatetory;
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
 * @description: 门店服务
 */
export interface StoreSvc {
    // 是否积分;;[0-否 1-是]
    canPoint?: string;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户ID
    merchantId?: string;
    // 商户服务ID
    merchantServiceId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 上架状态;;[1-已上架 2-已下架]
    onState?: string;
    // 其他调价策略;;json字符串，格式为:{"price_type": "1", "price_way": "1", "price_value":0.8}; 调价类型字典[1-零售价]，调价方式字典[1-加价 2-减价 3-原价上浮 4-原价下浮]
    otherVipPriceStrategy?: string;
    // 付费会员调价策略;1.0不做
    payVipPriceStrategy?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 门店ID
    storeId?: string;
    // 门店调整后的最低售价
    storeMinSoldPrice?: number;
    // 门店调整后的售价
    storeSoldPrice?: number;
    // 门店调整后的会员价格;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    storeVipPrice?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
    // 会员调价策略;;json字符串，格式为:{"strategy_type": "1", "strategy_value": 8}; [1-打折 2-减价]
    vipPriceStrategy?: string;
}

/**
 * @description: 门店服务分类
 */
export interface StoreSvcCategory {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户ID
    merchantId?: number;
    // 门店id
    storeId?: number;
    // 服务分类id
    svcCatetoryId?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 是否显示;;[0-否 1-是]
    visible?: string;
}

/**
 * @description: 门店服务分类
 */
export interface StoreSvcCategoryPageQuery {
    // 创建时间
    createdTime?: string;
    // 商户ID
    merchantId?: number;
    // 门店id
    storeId?: number;
    // 服务分类id
    svcCatetoryId?: number;
    // 是否显示;;[0-否 1-是]
    visible?: string;
}

/**
 * @description: 门店服务分类
 */
export interface StoreSvcCategorySaveDTO {
    // 创建时间
    createdTime?: string;
    // 商户ID
    merchantId?: number;
    // 门店id
    storeId?: number;
    // 服务分类id
    svcCatetoryId?: number;
    // 是否显示;;[0-否 1-是]
    visible?: string;
}

/**
 * @description: 门店服务分类
 */
export interface StoreSvcCategoryUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 商户ID
    merchantId?: number;
    // 门店id
    storeId?: number;
    // 服务分类id
    svcCatetoryId?: number;
    // 是否显示;;[0-否 1-是]
    visible?: string;
}

/**
 * @description: 门店服务
 */
export interface StoreSvcPageQuery {
    // 是否积分;;[0-否 1-是]
    canPoint?: string;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户ID
    merchantId?: string;
    // 商户服务ID
    merchantServiceId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 上架状态;;[1-已上架 2-已下架]
    onState?: string;
    // 其他调价策略;;json字符串，格式为:{"price_type": "1", "price_way": "1", "price_value":0.8}; 调价类型字典[1-零售价]，调价方式字典[1-加价 2-减价 3-原价上浮 4-原价下浮]
    otherVipPriceStrategy?: string;
    // 付费会员调价策略;1.0不做
    payVipPriceStrategy?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 门店ID
    storeId?: string;
    // 门店调整后的最低售价
    storeMinSoldPrice?: number;
    // 门店调整后的售价
    storeSoldPrice?: number;
    // 门店调整后的会员价格;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    storeVipPrice?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
    // 会员调价策略;;json字符串，格式为:{"strategy_type": "1", "strategy_value": 8}; [1-打折 2-减价]
    vipPriceStrategy?: string;
}

/**
 * @description: 门店服务
 */
export interface StoreSvcSaveDTO {
    // 是否积分;;[0-否 1-是]
    canPoint?: string;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户ID
    merchantId?: string;
    // 商户服务ID
    merchantServiceId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 上架状态;;[1-已上架 2-已下架]
    onState?: string;
    // 其他调价策略;;json字符串，格式为:{"price_type": "1", "price_way": "1", "price_value":0.8}; 调价类型字典[1-零售价]，调价方式字典[1-加价 2-减价 3-原价上浮 4-原价下浮]
    otherVipPriceStrategy?: string;
    // 付费会员调价策略;1.0不做
    payVipPriceStrategy?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 门店ID
    storeId?: string;
    // 门店调整后的最低售价
    storeMinSoldPrice?: number;
    // 门店调整后的售价
    storeSoldPrice?: number;
    // 门店调整后的会员价格;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    storeVipPrice?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
    // 会员调价策略;;json字符串，格式为:{"strategy_type": "1", "strategy_value": 8}; [1-打折 2-减价]
    vipPriceStrategy?: string;
}

/**
 * @description: 门店服务
 */
export interface StoreSvcUpdateDTO {
    // 是否积分;;[0-否 1-是]
    canPoint?: string;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 备注信息
    describe?: string;
    // 主键
    id?: number;
    // 最后同步时间
    lastSyncTime?: string;
    // 商户ID
    merchantId?: string;
    // 商户服务ID
    merchantServiceId?: number;
    // 最低售价
    minSoldPrice?: number;
    // 助记码
    mnemocode?: string;
    // 上架状态;;[1-已上架 2-已下架]
    onState?: string;
    // 其他调价策略;;json字符串，格式为:{"price_type": "1", "price_way": "1", "price_value":0.8}; 调价类型字典[1-零售价]，调价方式字典[1-加价 2-减价 3-原价上浮 4-原价下浮]
    otherVipPriceStrategy?: string;
    // 付费会员调价策略;1.0不做
    payVipPriceStrategy?: string;
    // 售价;;单位RMB
    soldPrice?: number;
    // 服务状态;;[1-正常 2-停售]
    state?: string;
    // 门店ID
    storeId?: string;
    // 门店调整后的最低售价
    storeMinSoldPrice?: number;
    // 门店调整后的售价
    storeSoldPrice?: number;
    // 门店调整后的会员价格;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    storeVipPrice?: string;
    // 服务分类
    svcCatetoryId?: number;
    // 商品图片;;文件服务地址
    svcImgFile?: string;
    // 服务名称;;服务名称
    svcName?: string;
    // 服务时长
    svcTimeNum?: number;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    svcTimeUnit?: string;
    // 服务类型;;[1-到店服务 2-上门服务]
    svcType?: string;
    // 会员价;;会员价json字符串，格式为:[{"vip_level": 1, "price": 100.00},...]
    vipPrice?: string;
    // 会员调价策略;;json字符串，格式为:{"strategy_type": "1", "strategy_value": 8}; [1-打折 2-减价]
    vipPriceStrategy?: string;
}

/**
 * @description: 服务分类
 */
export interface SvcCatetory {
    // 分类名称
    categoryName?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 商户ID
    merchantId?: number;
    // 上级分类ID;;0表示没有上级分类
    parentId?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 服务分类
 */
export interface SvcCatetoryPageQuery {
    // 分类名称
    categoryName?: string;
    // 创建时间
    createdTime?: string;
    // 商户ID
    merchantId?: number;
    // 上级分类ID;;0表示没有上级分类
    parentId?: number;
}

/**
 * @description: 服务分类
 */
export interface SvcCatetorySaveDTO {
    // 分类名称
    categoryName?: string;
    // 创建时间
    createdTime?: string;
    // 商户ID
    merchantId?: number;
    // 上级分类ID;;0表示没有上级分类
    parentId?: number;
}

/**
 * @description: 服务分类
 */
export interface SvcCatetoryUpdateDTO {
    // 分类名称
    categoryName?: string;
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 商户ID
    merchantId?: number;
    // 上级分类ID;;0表示没有上级分类
    parentId?: number;
}

export type TBodyOfsaveUsingPOST_5 = MerchantSvcSaveDTO;
export type TResponseOfsaveUsingPOST_5 = R_MerchantSvc_;
export type TBodyOfupdateUsingPUT_5 = MerchantSvcUpdateDTO;
export type TResponseOfupdateUsingPUT_5 = R_MerchantSvc_;
export type TBodyOfdeleteUsingDELETE_5 = number[];
export type TResponseOfdeleteUsingDELETE_5 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_5 = MerchantSvc;
export type TResponseOfupdateAllUsingPUT_5 = R_MerchantSvc_;
export type TBodyOfexportExcelUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
export type TResponseOfexportExcelUsingPOST_5 = any;
export interface TFormDataOfimportExcelUsingPOST_5 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_5 = R_boolean_;
export type TBodyOfpageUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
export type TResponseOfpageUsingPOST_5 = R_IPage_MerchantSvc__;
export type TBodyOfpreviewUsingPOST_5 = PageParams_MerchantSvcPageQuery_;
export type TResponseOfpreviewUsingPOST_5 = R_string_;
export type TBodyOfqueryUsingPOST_5 = MerchantSvc;
export type TResponseOfqueryUsingPOST_5 = R_List_MerchantSvc__;
export interface TPathOfgetUsingGET_5 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_5 = R_MerchantSvc_;
export type TBodyOfsaveUsingPOST_7 = StoreSvcSaveDTO;
export type TResponseOfsaveUsingPOST_7 = R_StoreSvc_;
export type TBodyOfupdateUsingPUT_7 = StoreSvcUpdateDTO;
export type TResponseOfupdateUsingPUT_7 = R_StoreSvc_;
export type TBodyOfdeleteUsingDELETE_7 = number[];
export type TResponseOfdeleteUsingDELETE_7 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_7 = StoreSvc;
export type TResponseOfupdateAllUsingPUT_7 = R_StoreSvc_;
export type TBodyOfexportExcelUsingPOST_7 = PageParams_StoreSvcPageQuery_;
export type TResponseOfexportExcelUsingPOST_7 = any;
export interface TFormDataOfimportExcelUsingPOST_7 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_7 = R_boolean_;
export type TBodyOfpageUsingPOST_7 = PageParams_StoreSvcPageQuery_;
export type TResponseOfpageUsingPOST_7 = R_IPage_StoreSvc__;
export type TBodyOfpreviewUsingPOST_7 = PageParams_StoreSvcPageQuery_;
export type TResponseOfpreviewUsingPOST_7 = R_string_;
export type TBodyOfqueryUsingPOST_7 = StoreSvc;
export type TResponseOfqueryUsingPOST_7 = R_List_StoreSvc__;
export interface TPathOfgetUsingGET_7 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_7 = R_StoreSvc_;
export type TBodyOfsaveUsingPOST_6 = StoreSvcCategorySaveDTO;
export type TResponseOfsaveUsingPOST_6 = R_StoreSvcCategory_;
export type TBodyOfupdateUsingPUT_6 = StoreSvcCategoryUpdateDTO;
export type TResponseOfupdateUsingPUT_6 = R_StoreSvcCategory_;
export type TBodyOfdeleteUsingDELETE_6 = number[];
export type TResponseOfdeleteUsingDELETE_6 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_6 = StoreSvcCategory;
export type TResponseOfupdateAllUsingPUT_6 = R_StoreSvcCategory_;
export type TBodyOfexportExcelUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
export type TResponseOfexportExcelUsingPOST_6 = any;
export interface TFormDataOfimportExcelUsingPOST_6 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_6 = R_boolean_;
export type TBodyOfpageUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
export type TResponseOfpageUsingPOST_6 = R_IPage_StoreSvcCategory__;
export type TBodyOfpreviewUsingPOST_6 = PageParams_StoreSvcCategoryPageQuery_;
export type TResponseOfpreviewUsingPOST_6 = R_string_;
export type TBodyOfqueryUsingPOST_6 = StoreSvcCategory;
export type TResponseOfqueryUsingPOST_6 = R_List_StoreSvcCategory__;
export interface TPathOfgetUsingGET_6 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_6 = R_StoreSvcCategory_;
export type TBodyOfsaveUsingPOST_8 = SvcCatetorySaveDTO;
export type TResponseOfsaveUsingPOST_8 = R_SvcCatetory_;
export type TBodyOfupdateUsingPUT_8 = SvcCatetoryUpdateDTO;
export type TResponseOfupdateUsingPUT_8 = R_SvcCatetory_;
export type TBodyOfdeleteUsingDELETE_8 = number[];
export type TResponseOfdeleteUsingDELETE_8 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_8 = SvcCatetory;
export type TResponseOfupdateAllUsingPUT_8 = R_SvcCatetory_;
export type TBodyOfexportExcelUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
export type TResponseOfexportExcelUsingPOST_8 = any;
export interface TFormDataOfimportExcelUsingPOST_8 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_8 = R_boolean_;
export type TBodyOfpageUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
export type TResponseOfpageUsingPOST_8 = R_IPage_SvcCatetory__;
export type TBodyOfpreviewUsingPOST_8 = PageParams_SvcCatetoryPageQuery_;
export type TResponseOfpreviewUsingPOST_8 = R_string_;
export type TBodyOfqueryUsingPOST_8 = SvcCatetory;
export type TResponseOfqueryUsingPOST_8 = R_List_SvcCatetory__;
export interface TPathOfgetUsingGET_8 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_8 = R_SvcCatetory_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/merchantSvc"): {
    /**
     * @description 新增 saveUsingPOST_5
     * 商户服务
     */
    post(options: { body: TBodyOfsaveUsingPOST_5 }): Promise<TResponseOfsaveUsingPOST_5>;

    /**
     * @description 修改 updateUsingPUT_5
     * 商户服务
     */
    put(options: { body: TBodyOfupdateUsingPUT_5 }): Promise<TResponseOfupdateUsingPUT_5>;

    /**
     * @description 删除 deleteUsingDELETE_5
     * 商户服务
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_5 }): Promise<TResponseOfdeleteUsingDELETE_5>;
  };
  (url: "/merchantSvc/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_5
     * 商户服务
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_5 }): Promise<TResponseOfupdateAllUsingPUT_5>;
  };
  (url: "/merchantSvc/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_5
     * 商户服务
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_5;
    }): Promise<TResponseOfexportExcelUsingPOST_5>;
  };
  (url: "/merchantSvc/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_5
     * 商户服务
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_5;
    }): Promise<TResponseOfimportExcelUsingPOST_5>;
  };
  (url: "/merchantSvc/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_5
     * 商户服务
     */
    post(options: { body: TBodyOfpageUsingPOST_5 }): Promise<TResponseOfpageUsingPOST_5>;
  };
  (url: "/merchantSvc/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_5
     * 商户服务
     */
    post(options: { body: TBodyOfpreviewUsingPOST_5 }): Promise<TResponseOfpreviewUsingPOST_5>;
  };
  (url: "/merchantSvc/query"): {
    /**
     * @description 批量查询 queryUsingPOST_5
     * 商户服务
     */
    post(options: { body: TBodyOfqueryUsingPOST_5 }): Promise<TResponseOfqueryUsingPOST_5>;
  };
  (url: "/merchantSvc/{id}"): {
    /**
     * @description 单体查询 getUsingGET_5
     * 商户服务
     */
    get(options: { path: TPathOfgetUsingGET_5 }): Promise<TResponseOfgetUsingGET_5>;
  };
  (url: "/storeSvc"): {
    /**
     * @description 新增 saveUsingPOST_7
     * 门店服务
     */
    post(options: { body: TBodyOfsaveUsingPOST_7 }): Promise<TResponseOfsaveUsingPOST_7>;

    /**
     * @description 修改 updateUsingPUT_7
     * 门店服务
     */
    put(options: { body: TBodyOfupdateUsingPUT_7 }): Promise<TResponseOfupdateUsingPUT_7>;

    /**
     * @description 删除 deleteUsingDELETE_7
     * 门店服务
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_7 }): Promise<TResponseOfdeleteUsingDELETE_7>;
  };
  (url: "/storeSvc/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_7
     * 门店服务
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_7 }): Promise<TResponseOfupdateAllUsingPUT_7>;
  };
  (url: "/storeSvc/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_7
     * 门店服务
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_7;
    }): Promise<TResponseOfexportExcelUsingPOST_7>;
  };
  (url: "/storeSvc/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_7
     * 门店服务
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_7;
    }): Promise<TResponseOfimportExcelUsingPOST_7>;
  };
  (url: "/storeSvc/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_7
     * 门店服务
     */
    post(options: { body: TBodyOfpageUsingPOST_7 }): Promise<TResponseOfpageUsingPOST_7>;
  };
  (url: "/storeSvc/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_7
     * 门店服务
     */
    post(options: { body: TBodyOfpreviewUsingPOST_7 }): Promise<TResponseOfpreviewUsingPOST_7>;
  };
  (url: "/storeSvc/query"): {
    /**
     * @description 批量查询 queryUsingPOST_7
     * 门店服务
     */
    post(options: { body: TBodyOfqueryUsingPOST_7 }): Promise<TResponseOfqueryUsingPOST_7>;
  };
  (url: "/storeSvc/{id}"): {
    /**
     * @description 单体查询 getUsingGET_7
     * 门店服务
     */
    get(options: { path: TPathOfgetUsingGET_7 }): Promise<TResponseOfgetUsingGET_7>;
  };
  (url: "/storeSvcCategory"): {
    /**
     * @description 新增 saveUsingPOST_6
     * 门店服务分类
     */
    post(options: { body: TBodyOfsaveUsingPOST_6 }): Promise<TResponseOfsaveUsingPOST_6>;

    /**
     * @description 修改 updateUsingPUT_6
     * 门店服务分类
     */
    put(options: { body: TBodyOfupdateUsingPUT_6 }): Promise<TResponseOfupdateUsingPUT_6>;

    /**
     * @description 删除 deleteUsingDELETE_6
     * 门店服务分类
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_6 }): Promise<TResponseOfdeleteUsingDELETE_6>;
  };
  (url: "/storeSvcCategory/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_6
     * 门店服务分类
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_6 }): Promise<TResponseOfupdateAllUsingPUT_6>;
  };
  (url: "/storeSvcCategory/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_6
     * 门店服务分类
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_6;
    }): Promise<TResponseOfexportExcelUsingPOST_6>;
  };
  (url: "/storeSvcCategory/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_6
     * 门店服务分类
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_6;
    }): Promise<TResponseOfimportExcelUsingPOST_6>;
  };
  (url: "/storeSvcCategory/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_6
     * 门店服务分类
     */
    post(options: { body: TBodyOfpageUsingPOST_6 }): Promise<TResponseOfpageUsingPOST_6>;
  };
  (url: "/storeSvcCategory/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_6
     * 门店服务分类
     */
    post(options: { body: TBodyOfpreviewUsingPOST_6 }): Promise<TResponseOfpreviewUsingPOST_6>;
  };
  (url: "/storeSvcCategory/query"): {
    /**
     * @description 批量查询 queryUsingPOST_6
     * 门店服务分类
     */
    post(options: { body: TBodyOfqueryUsingPOST_6 }): Promise<TResponseOfqueryUsingPOST_6>;
  };
  (url: "/storeSvcCategory/{id}"): {
    /**
     * @description 单体查询 getUsingGET_6
     * 门店服务分类
     */
    get(options: { path: TPathOfgetUsingGET_6 }): Promise<TResponseOfgetUsingGET_6>;
  };
  (url: "/svcCatetory"): {
    /**
     * @description 新增 saveUsingPOST_8
     * 服务分类
     */
    post(options: { body: TBodyOfsaveUsingPOST_8 }): Promise<TResponseOfsaveUsingPOST_8>;

    /**
     * @description 修改 updateUsingPUT_8
     * 服务分类
     */
    put(options: { body: TBodyOfupdateUsingPUT_8 }): Promise<TResponseOfupdateUsingPUT_8>;

    /**
     * @description 删除 deleteUsingDELETE_8
     * 服务分类
     */
    delete(options: { body: TBodyOfdeleteUsingDELETE_8 }): Promise<TResponseOfdeleteUsingDELETE_8>;
  };
  (url: "/svcCatetory/all"): {
    /**
     * @description 修改所有字段 updateAllUsingPUT_8
     * 服务分类
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_8 }): Promise<TResponseOfupdateAllUsingPUT_8>;
  };
  (url: "/svcCatetory/export"): {
    /**
     * @description 导出Excel exportExcelUsingPOST_8
     * 服务分类
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_8;
    }): Promise<TResponseOfexportExcelUsingPOST_8>;
  };
  (url: "/svcCatetory/import"): {
    /**
     * @description 导入Excel importExcelUsingPOST_8
     * 服务分类
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_8;
    }): Promise<TResponseOfimportExcelUsingPOST_8>;
  };
  (url: "/svcCatetory/page"): {
    /**
     * @description 分页列表查询 pageUsingPOST_8
     * 服务分类
     */
    post(options: { body: TBodyOfpageUsingPOST_8 }): Promise<TResponseOfpageUsingPOST_8>;
  };
  (url: "/svcCatetory/preview"): {
    /**
     * @description 预览Excel previewUsingPOST_8
     * 服务分类
     */
    post(options: { body: TBodyOfpreviewUsingPOST_8 }): Promise<TResponseOfpreviewUsingPOST_8>;
  };
  (url: "/svcCatetory/query"): {
    /**
     * @description 批量查询 queryUsingPOST_8
     * 服务分类
     */
    post(options: { body: TBodyOfqueryUsingPOST_8 }): Promise<TResponseOfqueryUsingPOST_8>;
  };
  (url: "/svcCatetory/{id}"): {
    /**
     * @description 单体查询 getUsingGET_8
     * 服务分类
     */
    get(options: { path: TPathOfgetUsingGET_8 }): Promise<TResponseOfgetUsingGET_8>;
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
