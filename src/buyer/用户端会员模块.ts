export interface IPage_OrderPay_ {
    current?: number;
    pages?: number;
    records?: OrderPay[];
    size?: number;
    total?: number;
}

export interface IPage_RechargeOrder_ {
    current?: number;
    pages?: number;
    records?: RechargeOrder[];
    size?: number;
    total?: number;
}

export interface IPage_SellOrder_ {
    current?: number;
    pages?: number;
    records?: SellOrder[];
    size?: number;
    total?: number;
}

export interface IPage_VipAppointment_ {
    current?: number;
    pages?: number;
    records?: VipAppointment[];
    size?: number;
    total?: number;
}

export interface IPage_VipAssets_ {
    current?: number;
    pages?: number;
    records?: VipAssets[];
    size?: number;
    total?: number;
}

export interface IPage_VipFocus_ {
    current?: number;
    pages?: number;
    records?: VipFocus[];
    size?: number;
    total?: number;
}

export interface IPage_VipInfo_ {
    current?: number;
    pages?: number;
    records?: VipInfo[];
    size?: number;
    total?: number;
}

/**
 * @description: 订单支付信息表
 */
export interface OrderPay {
    // 支付金额
    amountPaid?: number;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 订单id
    orderId?: number;
    // 订单类型;1:销售订单;2:充值订单
    orderType?: number;
    // 支付方式;0:线下支付;1:支付宝;2:微信
    payMethod?: number;
    // 支付时间
    payTime?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 订单支付信息表
 */
export interface OrderPayPageQuery {
    // 支付金额
    amountPaid?: number;
    // 创建时间
    createdTime?: string;
    // 订单id
    orderId?: number;
    // 订单类型;1:销售订单;2:充值订单
    orderType?: number;
    // 支付方式;0:线下支付;1:支付宝;2:微信
    payMethod?: number;
    // 支付时间
    payTime?: string;
}

/**
 * @description: 订单支付信息表
 */
export interface OrderPaySaveDTO {
    // 支付金额
    amountPaid?: number;
    // 创建时间
    createdTime?: string;
    // 订单id
    orderId?: number;
    // 订单类型;1:销售订单;2:充值订单
    orderType?: number;
    // 支付方式;0:线下支付;1:支付宝;2:微信
    payMethod?: number;
    // 支付时间
    payTime?: string;
}

/**
 * @description: 订单支付信息表
 */
export interface OrderPayUpdateDTO {
    // 支付金额
    amountPaid?: number;
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 订单id
    orderId?: number;
    // 订单类型;1:销售订单;2:充值订单
    orderType?: number;
    // 支付方式;0:线下支付;1:支付宝;2:微信
    payMethod?: number;
    // 支付时间
    payTime?: string;
}

/**
 * @description: 分页参数
 */
export interface PageParams_OrderPayPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: OrderPayPageQuery;
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
export interface PageParams_RechargeOrderPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: RechargeOrderPageQuery;
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
export interface PageParams_SellOrderPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: SellOrderPageQuery;
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
export interface PageParams_VipAppointmentPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: VipAppointmentPageQuery;
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
export interface PageParams_VipAssetsPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: VipAssetsPageQuery;
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
export interface PageParams_VipFocusPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: VipFocusPageQuery;
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
export interface PageParams_VipInfoPageQuery_ {
    // 当前页
    current?: number;
    // 扩展参数
    extra?: any;
    model: VipInfoPageQuery;
    // 排序规则, 默认descending
    order?: string;
    // 页面大小
    size?: number;
    // 排序,默认createTime
    sort?: string;
}

/**
 * @description: 充值订单表
 */
export interface RechargeOrder {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 赠送金额
    extraAmount?: number;
    // 主键
    id?: number;
    // 充值金额
    rechargeAmount?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 充值订单表
 */
export interface RechargeOrderPageQuery {
    // 创建时间
    createdTime?: string;
    // 赠送金额
    extraAmount?: number;
    // 充值金额
    rechargeAmount?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 充值订单表
 */
export interface RechargeOrderSaveDTO {
    // 创建时间
    createdTime?: string;
    // 赠送金额
    extraAmount?: number;
    // 充值金额
    rechargeAmount?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 充值订单表
 */
export interface RechargeOrderUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 赠送金额
    extraAmount?: number;
    // 主键
    id?: number;
    // 充值金额
    rechargeAmount?: number;
    // 会员id
    vipId?: number;
}

export interface R_IPage_OrderPay__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_OrderPay_;
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

export interface R_IPage_RechargeOrder__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_RechargeOrder_;
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

export interface R_IPage_SellOrder__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_SellOrder_;
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

export interface R_IPage_VipAppointment__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_VipAppointment_;
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

export interface R_IPage_VipAssets__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_VipAssets_;
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

export interface R_IPage_VipFocus__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_VipFocus_;
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

export interface R_IPage_VipInfo__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: IPage_VipInfo_;
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

export interface R_List_OrderPay__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: OrderPay[];
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

export interface R_List_RechargeOrder__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: RechargeOrder[];
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

export interface R_List_SellOrder__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: SellOrder[];
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

export interface R_List_VipAppointment__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: VipAppointment[];
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

export interface R_List_VipAssets__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: VipAssets[];
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

export interface R_List_VipFocus__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: VipFocus[];
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

export interface R_List_VipInfo__ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    // 响应数据
    data?: VipInfo[];
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

export interface R_OrderPay_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: OrderPay;
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

export interface R_RechargeOrder_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: RechargeOrder;
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

export interface R_SellOrder_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: SellOrder;
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

export interface R_VipAppointment_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: VipAppointment;
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

export interface R_VipAssets_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: VipAssets;
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

export interface R_VipFocus_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: VipFocus;
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

export interface R_VipInfo_ {
    // 响应编码:0/200-请求处理成功
    code?: number;
    data?: VipInfo;
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
 * @description: 销售订单表
 */
export interface SellOrder {
    // 订单实际金额
    amountActual?: number;
    // 订单优惠金额
    amountDiscount?: number;
    // 订单总金额
    amountOriginal?: number;
    // 订单实际金额
    amountPaid?: number;
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
    echoMap?: any;
    // 主键
    id?: number;
    // 下单时间
    orderTime?: string;
    // 订单类型;1:线上;2:线下
    orderType?: number;
    // 订单支付状态;0:未支付;1:已支付;2:已退款
    payStatus?: number;
    // 备注
    remark?: string;
    // 服务地址
    serveAddress?: string;
    // 服务技师
    serveTechnicianId?: number;
    // 服务类型
    serveType?: number;
    // 订单状态
    status?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 销售订单表
 */
export interface SellOrderPageQuery {
    // 订单实际金额
    amountActual?: number;
    // 订单优惠金额
    amountDiscount?: number;
    // 订单总金额
    amountOriginal?: number;
    // 订单实际金额
    amountPaid?: number;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 下单时间
    orderTime?: string;
    // 订单类型;1:线上;2:线下
    orderType?: number;
    // 订单支付状态;0:未支付;1:已支付;2:已退款
    payStatus?: number;
    // 备注
    remark?: string;
    // 服务地址
    serveAddress?: string;
    // 服务技师
    serveTechnicianId?: number;
    // 服务类型
    serveType?: number;
    // 订单状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 销售订单表
 */
export interface SellOrderSaveDTO {
    // 订单实际金额
    amountActual?: number;
    // 订单优惠金额
    amountDiscount?: number;
    // 订单总金额
    amountOriginal?: number;
    // 订单实际金额
    amountPaid?: number;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 下单时间
    orderTime?: string;
    // 订单类型;1:线上;2:线下
    orderType?: number;
    // 订单支付状态;0:未支付;1:已支付;2:已退款
    payStatus?: number;
    // 备注
    remark?: string;
    // 服务地址
    serveAddress?: string;
    // 服务技师
    serveTechnicianId?: number;
    // 服务类型
    serveType?: number;
    // 订单状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 销售订单表
 */
export interface SellOrderUpdateDTO {
    // 订单实际金额
    amountActual?: number;
    // 订单优惠金额
    amountDiscount?: number;
    // 订单总金额
    amountOriginal?: number;
    // 订单实际金额
    amountPaid?: number;
    // 导购提成类型;;[1-不提成 2-按比例 3-按金额]
    commissionType?: string;
    // 导购提成额;;commission_type=2是填写百分比，commission_type=3填写固定金额
    commissionValue?: number;
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 下单时间
    orderTime?: string;
    // 订单类型;1:线上;2:线下
    orderType?: number;
    // 订单支付状态;0:未支付;1:已支付;2:已退款
    payStatus?: number;
    // 备注
    remark?: string;
    // 服务地址
    serveAddress?: string;
    // 服务技师
    serveTechnicianId?: number;
    // 服务类型
    serveType?: number;
    // 订单状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员预约表
 */
export interface VipAppointment {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 订单id
    orderId?: number;
    // 服务技师
    serveEchnicianId?: number;
    // 预约-开始时间
    serveTimeBegin?: string;
    // 预约-结束时间
    serveTimeEnd?: string;
    // 预计时长
    serveTimeNumExpected?: number;
    // 服务类型;;[1-到店服务 2-上门服务]
    serveType?: string;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    serviceTimeUnit?: string;
    // 状态
    status?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员预约表
 */
export interface VipAppointmentPageQuery {
    // 创建时间
    createdTime?: string;
    // 订单id
    orderId?: number;
    // 服务技师
    serveEchnicianId?: number;
    // 预约-开始时间
    serveTimeBegin?: string;
    // 预约-结束时间
    serveTimeEnd?: string;
    // 预计时长
    serveTimeNumExpected?: number;
    // 服务类型;;[1-到店服务 2-上门服务]
    serveType?: string;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    serviceTimeUnit?: string;
    // 状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员预约表
 */
export interface VipAppointmentSaveDTO {
    // 创建时间
    createdTime?: string;
    // 订单id
    orderId?: number;
    // 服务技师
    serveEchnicianId?: number;
    // 预约-开始时间
    serveTimeBegin?: string;
    // 预约-结束时间
    serveTimeEnd?: string;
    // 预计时长
    serveTimeNumExpected?: number;
    // 服务类型;;[1-到店服务 2-上门服务]
    serveType?: string;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    serviceTimeUnit?: string;
    // 状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员预约表
 */
export interface VipAppointmentUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 订单id
    orderId?: number;
    // 服务技师
    serveEchnicianId?: number;
    // 预约-开始时间
    serveTimeBegin?: string;
    // 预约-结束时间
    serveTimeEnd?: string;
    // 预计时长
    serveTimeNumExpected?: number;
    // 服务类型;;[1-到店服务 2-上门服务]
    serveType?: string;
    // 服务时长单位;;[1-分钟 2-小时 3-天]
    serviceTimeUnit?: string;
    // 状态
    status?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员资产表
 */
export interface VipAssets {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 累计获得积分
    pointsAccrued?: number;
    // 积分余额
    pointsBalance?: number;
    // 累计充值金额
    storedAccrued?: number;
    // 储值余额
    storedBalance?: string;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
}

/**
 * @description: 会员资产表
 */
export interface VipAssetsPageQuery {
    // 创建时间
    createdTime?: string;
    // 累计获得积分
    pointsAccrued?: number;
    // 积分余额
    pointsBalance?: number;
    // 累计充值金额
    storedAccrued?: number;
    // 储值余额
    storedBalance?: string;
}

/**
 * @description: 会员资产表
 */
export interface VipAssetsSaveDTO {
    // 创建时间
    createdTime?: string;
    // 累计获得积分
    pointsAccrued?: number;
    // 积分余额
    pointsBalance?: number;
    // 累计充值金额
    storedAccrued?: number;
    // 储值余额
    storedBalance?: string;
}

/**
 * @description: 会员资产表
 */
export interface VipAssetsUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 累计获得积分
    pointsAccrued?: number;
    // 积分余额
    pointsBalance?: number;
    // 累计充值金额
    storedAccrued?: number;
    // 储值余额
    storedBalance?: string;
}

/**
 * @description: 用户关注表
 */
export interface VipFocus {
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 关注对象id
    focusObjectId?: number;
    // 关注类型;1:门店
    focusType?: number;
    // 主键
    id?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 用户关注表
 */
export interface VipFocusPageQuery {
    // 创建时间
    createdTime?: string;
    // 关注对象id
    focusObjectId?: number;
    // 关注类型;1:门店
    focusType?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 用户关注表
 */
export interface VipFocusSaveDTO {
    // 创建时间
    createdTime?: string;
    // 关注对象id
    focusObjectId?: number;
    // 关注类型;1:门店
    focusType?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 用户关注表
 */
export interface VipFocusUpdateDTO {
    // 创建时间
    createdTime?: string;
    // 关注对象id
    focusObjectId?: number;
    // 关注类型;1:门店
    focusType?: number;
    // 主键
    id?: number;
    // 会员id
    vipId?: number;
}

/**
 * @description: 会员信息表
 */
export interface VipInfo {
    // 地址
    address?: string;
    // 生日
    birthday?: string;
    // 会员卡号
    cardNo?: string;
    // 单位名称
    companyName?: string;
    // 创建时间
    createTime?: string;
    // 创建人ID
    createdBy?: number;
    // 创建时间
    createdTime?: string;
    echoMap?: any;
    // 主键
    id?: number;
    // 身份证号码
    idCard?: string;
    // 手机号
    mobile?: string;
    // 注册商户
    registerMerchantId?: number;
    // 注册时间
    registerTime?: string;
    // 备注
    remark?: string;
    // 状态;1:正常
    status?: number;
    // 最后修改时间
    updateTime?: string;
    // 最后修改人ID
    updatedBy?: number;
    // 会员等级
    vipLevel?: number;
    // 会员名称
    vipName?: string;
}

/**
 * @description: 会员信息表
 */
export interface VipInfoPageQuery {
    // 地址
    address?: string;
    // 生日
    birthday?: string;
    // 会员卡号
    cardNo?: string;
    // 单位名称
    companyName?: string;
    // 创建时间
    createdTime?: string;
    // 身份证号码
    idCard?: string;
    // 手机号
    mobile?: string;
    // 注册商户
    registerMerchantId?: number;
    // 注册时间
    registerTime?: string;
    // 备注
    remark?: string;
    // 状态;1:正常
    status?: number;
    // 会员等级
    vipLevel?: number;
    // 会员名称
    vipName?: string;
}

/**
 * @description: 会员信息表
 */
export interface VipInfoSaveDTO {
    // 地址
    address?: string;
    // 生日
    birthday?: string;
    // 会员卡号
    cardNo?: string;
    // 单位名称
    companyName?: string;
    // 创建时间
    createdTime?: string;
    // 身份证号码
    idCard?: string;
    // 手机号
    mobile?: string;
    // 注册商户
    registerMerchantId?: number;
    // 注册时间
    registerTime?: string;
    // 备注
    remark?: string;
    // 状态;1:正常
    status?: number;
    // 会员等级
    vipLevel?: number;
    // 会员名称
    vipName?: string;
}

/**
 * @description: 会员信息表
 */
export interface VipInfoUpdateDTO {
    // 地址
    address?: string;
    // 生日
    birthday?: string;
    // 会员卡号
    cardNo?: string;
    // 单位名称
    companyName?: string;
    // 创建时间
    createdTime?: string;
    // 主键
    id?: number;
    // 身份证号码
    idCard?: string;
    // 手机号
    mobile?: string;
    // 注册商户
    registerMerchantId?: number;
    // 注册时间
    registerTime?: string;
    // 备注
    remark?: string;
    // 状态;1:正常
    status?: number;
    // 会员等级
    vipLevel?: number;
    // 会员名称
    vipName?: string;
}

export type TBodyOfsaveUsingPOST_13 = OrderPaySaveDTO;
export type TResponseOfsaveUsingPOST_13 = R_OrderPay_;
export type TBodyOfupdateUsingPUT_12 = OrderPayUpdateDTO;
export type TResponseOfupdateUsingPUT_12 = R_OrderPay_;
export type TBodyOfdeleteUsingDELETE_16 = number[];
export type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_12 = OrderPay;
export type TResponseOfupdateAllUsingPUT_12 = R_OrderPay_;
export type TBodyOfexportExcelUsingPOST_14 = PageParams_OrderPayPageQuery_;
export type TResponseOfexportExcelUsingPOST_14 = any;
export interface TFormDataOfimportExcelUsingPOST_13 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_13 = R_boolean_;
export type TBodyOfpageUsingPOST_18 = PageParams_OrderPayPageQuery_;
export type TResponseOfpageUsingPOST_18 = R_IPage_OrderPay__;
export type TBodyOfpreviewUsingPOST_14 = PageParams_OrderPayPageQuery_;
export type TResponseOfpreviewUsingPOST_14 = R_string_;
export type TBodyOfqueryUsingPOST_14 = OrderPay;
export type TResponseOfqueryUsingPOST_14 = R_List_OrderPay__;
export interface TPathOfgetUsingGET_16 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_16 = R_OrderPay_;
export type TBodyOfsaveUsingPOST_14 = RechargeOrderSaveDTO;
export type TResponseOfsaveUsingPOST_14 = R_RechargeOrder_;
export type TBodyOfupdateUsingPUT_13 = RechargeOrderUpdateDTO;
export type TResponseOfupdateUsingPUT_13 = R_RechargeOrder_;
export type TBodyOfdeleteUsingDELETE_17 = number[];
export type TResponseOfdeleteUsingDELETE_17 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_13 = RechargeOrder;
export type TResponseOfupdateAllUsingPUT_13 = R_RechargeOrder_;
export type TBodyOfexportExcelUsingPOST_15 = PageParams_RechargeOrderPageQuery_;
export type TResponseOfexportExcelUsingPOST_15 = any;
export interface TFormDataOfimportExcelUsingPOST_14 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_14 = R_boolean_;
export type TBodyOfpageUsingPOST_19 = PageParams_RechargeOrderPageQuery_;
export type TResponseOfpageUsingPOST_19 = R_IPage_RechargeOrder__;
export type TBodyOfpreviewUsingPOST_15 = PageParams_RechargeOrderPageQuery_;
export type TResponseOfpreviewUsingPOST_15 = R_string_;
export type TBodyOfqueryUsingPOST_15 = RechargeOrder;
export type TResponseOfqueryUsingPOST_15 = R_List_RechargeOrder__;
export interface TPathOfgetUsingGET_17 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_17 = R_RechargeOrder_;
export type TBodyOfsaveUsingPOST_15 = SellOrderSaveDTO;
export type TResponseOfsaveUsingPOST_15 = R_SellOrder_;
export type TBodyOfupdateUsingPUT_14 = SellOrderUpdateDTO;
export type TResponseOfupdateUsingPUT_14 = R_SellOrder_;
export type TBodyOfdeleteUsingDELETE_18 = number[];
export type TResponseOfdeleteUsingDELETE_18 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_14 = SellOrder;
export type TResponseOfupdateAllUsingPUT_14 = R_SellOrder_;
export type TBodyOfexportExcelUsingPOST_16 = PageParams_SellOrderPageQuery_;
export type TResponseOfexportExcelUsingPOST_16 = any;
export interface TFormDataOfimportExcelUsingPOST_15 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_15 = R_boolean_;
export type TBodyOfpageUsingPOST_20 = PageParams_SellOrderPageQuery_;
export type TResponseOfpageUsingPOST_20 = R_IPage_SellOrder__;
export type TBodyOfpreviewUsingPOST_16 = PageParams_SellOrderPageQuery_;
export type TResponseOfpreviewUsingPOST_16 = R_string_;
export type TBodyOfqueryUsingPOST_16 = SellOrder;
export type TResponseOfqueryUsingPOST_16 = R_List_SellOrder__;
export interface TPathOfgetUsingGET_18 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_18 = R_SellOrder_;
export type TBodyOfsaveUsingPOST_16 = VipAppointmentSaveDTO;
export type TResponseOfsaveUsingPOST_16 = R_VipAppointment_;
export type TBodyOfupdateUsingPUT_15 = VipAppointmentUpdateDTO;
export type TResponseOfupdateUsingPUT_15 = R_VipAppointment_;
export type TBodyOfdeleteUsingDELETE_19 = number[];
export type TResponseOfdeleteUsingDELETE_19 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_15 = VipAppointment;
export type TResponseOfupdateAllUsingPUT_15 = R_VipAppointment_;
export type TBodyOfexportExcelUsingPOST_17 = PageParams_VipAppointmentPageQuery_;
export type TResponseOfexportExcelUsingPOST_17 = any;
export interface TFormDataOfimportExcelUsingPOST_16 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_16 = R_boolean_;
export type TBodyOfpageUsingPOST_21 = PageParams_VipAppointmentPageQuery_;
export type TResponseOfpageUsingPOST_21 = R_IPage_VipAppointment__;
export type TBodyOfpreviewUsingPOST_17 = PageParams_VipAppointmentPageQuery_;
export type TResponseOfpreviewUsingPOST_17 = R_string_;
export type TBodyOfqueryUsingPOST_17 = VipAppointment;
export type TResponseOfqueryUsingPOST_17 = R_List_VipAppointment__;
export interface TPathOfgetUsingGET_19 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_19 = R_VipAppointment_;
export type TBodyOfsaveUsingPOST_17 = VipAssetsSaveDTO;
export type TResponseOfsaveUsingPOST_17 = R_VipAssets_;
export type TBodyOfupdateUsingPUT_16 = VipAssetsUpdateDTO;
export type TResponseOfupdateUsingPUT_16 = R_VipAssets_;
export type TBodyOfdeleteUsingDELETE_20 = number[];
export type TResponseOfdeleteUsingDELETE_20 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_16 = VipAssets;
export type TResponseOfupdateAllUsingPUT_16 = R_VipAssets_;
export type TBodyOfexportExcelUsingPOST_18 = PageParams_VipAssetsPageQuery_;
export type TResponseOfexportExcelUsingPOST_18 = any;
export interface TFormDataOfimportExcelUsingPOST_17 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_17 = R_boolean_;
export type TBodyOfpageUsingPOST_22 = PageParams_VipAssetsPageQuery_;
export type TResponseOfpageUsingPOST_22 = R_IPage_VipAssets__;
export type TBodyOfpreviewUsingPOST_18 = PageParams_VipAssetsPageQuery_;
export type TResponseOfpreviewUsingPOST_18 = R_string_;
export type TBodyOfqueryUsingPOST_18 = VipAssets;
export type TResponseOfqueryUsingPOST_18 = R_List_VipAssets__;
export interface TPathOfgetUsingGET_20 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_20 = R_VipAssets_;
export type TBodyOfsaveUsingPOST_18 = VipFocusSaveDTO;
export type TResponseOfsaveUsingPOST_18 = R_VipFocus_;
export type TBodyOfupdateUsingPUT_17 = VipFocusUpdateDTO;
export type TResponseOfupdateUsingPUT_17 = R_VipFocus_;
export type TBodyOfdeleteUsingDELETE_21 = number[];
export type TResponseOfdeleteUsingDELETE_21 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_17 = VipFocus;
export type TResponseOfupdateAllUsingPUT_17 = R_VipFocus_;
export type TBodyOfexportExcelUsingPOST_19 = PageParams_VipFocusPageQuery_;
export type TResponseOfexportExcelUsingPOST_19 = any;
export interface TFormDataOfimportExcelUsingPOST_18 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_18 = R_boolean_;
export type TBodyOfpageUsingPOST_23 = PageParams_VipFocusPageQuery_;
export type TResponseOfpageUsingPOST_23 = R_IPage_VipFocus__;
export type TBodyOfpreviewUsingPOST_19 = PageParams_VipFocusPageQuery_;
export type TResponseOfpreviewUsingPOST_19 = R_string_;
export type TBodyOfqueryUsingPOST_19 = VipFocus;
export type TResponseOfqueryUsingPOST_19 = R_List_VipFocus__;
export interface TPathOfgetUsingGET_21 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_21 = R_VipFocus_;
export type TBodyOfsaveUsingPOST_19 = VipInfoSaveDTO;
export type TResponseOfsaveUsingPOST_19 = R_VipInfo_;
export type TBodyOfupdateUsingPUT_18 = VipInfoUpdateDTO;
export type TResponseOfupdateUsingPUT_18 = R_VipInfo_;
export type TBodyOfdeleteUsingDELETE_22 = number[];
export type TResponseOfdeleteUsingDELETE_22 = R_boolean_;
export type TBodyOfupdateAllUsingPUT_18 = VipInfo;
export type TResponseOfupdateAllUsingPUT_18 = R_VipInfo_;
export type TBodyOfexportExcelUsingPOST_20 = PageParams_VipInfoPageQuery_;
export type TResponseOfexportExcelUsingPOST_20 = any;
export interface TFormDataOfimportExcelUsingPOST_19 {
    // file
    file: string;
}
export type TResponseOfimportExcelUsingPOST_19 = R_boolean_;
export type TBodyOfpageUsingPOST_24 = PageParams_VipInfoPageQuery_;
export type TResponseOfpageUsingPOST_24 = R_IPage_VipInfo__;
export type TBodyOfpreviewUsingPOST_20 = PageParams_VipInfoPageQuery_;
export type TResponseOfpreviewUsingPOST_20 = R_string_;
export type TBodyOfqueryUsingPOST_20 = VipInfo;
export type TResponseOfqueryUsingPOST_20 = R_List_VipInfo__;
export interface TPathOfgetUsingGET_22 {
    // 主键
    id?: number;
}
export type TResponseOfgetUsingGET_22 = R_VipInfo_;
type MultipartFile = File;

export interface IApiFn {
  (url: string): {
    [m in "get" | "post" | "put" | "patch" | "delete" | "head"]: (options: any) => Promise<any>;
  };

  (url: "/orderPay"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/saveUsingPOST_13)
     *
     * @tag订单支付信息表
     */
    post(options: { body: TBodyOfsaveUsingPOST_13 }): Promise<TResponseOfsaveUsingPOST_13>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/updateUsingPUT_12)
     *
     * @tag订单支付信息表
     */
    put(options: { body: TBodyOfupdateUsingPUT_12 }): Promise<TResponseOfupdateUsingPUT_12>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/deleteUsingDELETE_16)
     *
     * @tag订单支付信息表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_16;
    }): Promise<TResponseOfdeleteUsingDELETE_16>;
  };
  (url: "/orderPay/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/updateAllUsingPUT_12)
     *
     * @tag订单支付信息表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_12 }): Promise<TResponseOfupdateAllUsingPUT_12>;
  };
  (url: "/orderPay/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/exportExcelUsingPOST_14)
     *
     * @tag订单支付信息表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_14;
    }): Promise<TResponseOfexportExcelUsingPOST_14>;
  };
  (url: "/orderPay/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/importExcelUsingPOST_13)
     *
     * @tag订单支付信息表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_13;
    }): Promise<TResponseOfimportExcelUsingPOST_13>;
  };
  (url: "/orderPay/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/pageUsingPOST_18)
     *
     * @tag订单支付信息表
     */
    post(options: { body: TBodyOfpageUsingPOST_18 }): Promise<TResponseOfpageUsingPOST_18>;
  };
  (url: "/orderPay/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/previewUsingPOST_14)
     *
     * @tag订单支付信息表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_14 }): Promise<TResponseOfpreviewUsingPOST_14>;
  };
  (url: "/orderPay/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/queryUsingPOST_14)
     *
     * @tag订单支付信息表
     */
    post(options: { body: TBodyOfqueryUsingPOST_14 }): Promise<TResponseOfqueryUsingPOST_14>;
  };
  (url: "/orderPay/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/getUsingGET_16)
     *
     * @tag订单支付信息表
     */
    get(options: { path: TPathOfgetUsingGET_16 }): Promise<TResponseOfgetUsingGET_16>;
  };
  (url: "/rechargeOrder"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/saveUsingPOST_14)
     *
     * @tag充值订单表
     */
    post(options: { body: TBodyOfsaveUsingPOST_14 }): Promise<TResponseOfsaveUsingPOST_14>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/updateUsingPUT_13)
     *
     * @tag充值订单表
     */
    put(options: { body: TBodyOfupdateUsingPUT_13 }): Promise<TResponseOfupdateUsingPUT_13>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/deleteUsingDELETE_17)
     *
     * @tag充值订单表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_17;
    }): Promise<TResponseOfdeleteUsingDELETE_17>;
  };
  (url: "/rechargeOrder/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/updateAllUsingPUT_13)
     *
     * @tag充值订单表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_13 }): Promise<TResponseOfupdateAllUsingPUT_13>;
  };
  (url: "/rechargeOrder/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/exportExcelUsingPOST_15)
     *
     * @tag充值订单表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_15;
    }): Promise<TResponseOfexportExcelUsingPOST_15>;
  };
  (url: "/rechargeOrder/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/importExcelUsingPOST_14)
     *
     * @tag充值订单表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_14;
    }): Promise<TResponseOfimportExcelUsingPOST_14>;
  };
  (url: "/rechargeOrder/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/pageUsingPOST_19)
     *
     * @tag充值订单表
     */
    post(options: { body: TBodyOfpageUsingPOST_19 }): Promise<TResponseOfpageUsingPOST_19>;
  };
  (url: "/rechargeOrder/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/previewUsingPOST_15)
     *
     * @tag充值订单表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_15 }): Promise<TResponseOfpreviewUsingPOST_15>;
  };
  (url: "/rechargeOrder/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/queryUsingPOST_15)
     *
     * @tag充值订单表
     */
    post(options: { body: TBodyOfqueryUsingPOST_15 }): Promise<TResponseOfqueryUsingPOST_15>;
  };
  (url: "/rechargeOrder/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/getUsingGET_17)
     *
     * @tag充值订单表
     */
    get(options: { path: TPathOfgetUsingGET_17 }): Promise<TResponseOfgetUsingGET_17>;
  };
  (url: "/sellOrder"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/saveUsingPOST_15)
     *
     * @tag销售订单表
     */
    post(options: { body: TBodyOfsaveUsingPOST_15 }): Promise<TResponseOfsaveUsingPOST_15>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/updateUsingPUT_14)
     *
     * @tag销售订单表
     */
    put(options: { body: TBodyOfupdateUsingPUT_14 }): Promise<TResponseOfupdateUsingPUT_14>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/deleteUsingDELETE_18)
     *
     * @tag销售订单表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_18;
    }): Promise<TResponseOfdeleteUsingDELETE_18>;
  };
  (url: "/sellOrder/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/updateAllUsingPUT_14)
     *
     * @tag销售订单表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_14 }): Promise<TResponseOfupdateAllUsingPUT_14>;
  };
  (url: "/sellOrder/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/exportExcelUsingPOST_16)
     *
     * @tag销售订单表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_16;
    }): Promise<TResponseOfexportExcelUsingPOST_16>;
  };
  (url: "/sellOrder/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/importExcelUsingPOST_15)
     *
     * @tag销售订单表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_15;
    }): Promise<TResponseOfimportExcelUsingPOST_15>;
  };
  (url: "/sellOrder/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/pageUsingPOST_20)
     *
     * @tag销售订单表
     */
    post(options: { body: TBodyOfpageUsingPOST_20 }): Promise<TResponseOfpageUsingPOST_20>;
  };
  (url: "/sellOrder/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/previewUsingPOST_16)
     *
     * @tag销售订单表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_16 }): Promise<TResponseOfpreviewUsingPOST_16>;
  };
  (url: "/sellOrder/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/queryUsingPOST_16)
     *
     * @tag销售订单表
     */
    post(options: { body: TBodyOfqueryUsingPOST_16 }): Promise<TResponseOfqueryUsingPOST_16>;
  };
  (url: "/sellOrder/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/getUsingGET_18)
     *
     * @tag销售订单表
     */
    get(options: { path: TPathOfgetUsingGET_18 }): Promise<TResponseOfgetUsingGET_18>;
  };
  (url: "/vipAppointment"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/saveUsingPOST_16)
     *
     * @tag会员预约表
     */
    post(options: { body: TBodyOfsaveUsingPOST_16 }): Promise<TResponseOfsaveUsingPOST_16>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/updateUsingPUT_15)
     *
     * @tag会员预约表
     */
    put(options: { body: TBodyOfupdateUsingPUT_15 }): Promise<TResponseOfupdateUsingPUT_15>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/deleteUsingDELETE_19)
     *
     * @tag会员预约表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_19;
    }): Promise<TResponseOfdeleteUsingDELETE_19>;
  };
  (url: "/vipAppointment/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/updateAllUsingPUT_15)
     *
     * @tag会员预约表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_15 }): Promise<TResponseOfupdateAllUsingPUT_15>;
  };
  (url: "/vipAppointment/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/exportExcelUsingPOST_17)
     *
     * @tag会员预约表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_17;
    }): Promise<TResponseOfexportExcelUsingPOST_17>;
  };
  (url: "/vipAppointment/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/importExcelUsingPOST_16)
     *
     * @tag会员预约表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_16;
    }): Promise<TResponseOfimportExcelUsingPOST_16>;
  };
  (url: "/vipAppointment/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/pageUsingPOST_21)
     *
     * @tag会员预约表
     */
    post(options: { body: TBodyOfpageUsingPOST_21 }): Promise<TResponseOfpageUsingPOST_21>;
  };
  (url: "/vipAppointment/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/previewUsingPOST_17)
     *
     * @tag会员预约表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_17 }): Promise<TResponseOfpreviewUsingPOST_17>;
  };
  (url: "/vipAppointment/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/queryUsingPOST_17)
     *
     * @tag会员预约表
     */
    post(options: { body: TBodyOfqueryUsingPOST_17 }): Promise<TResponseOfqueryUsingPOST_17>;
  };
  (url: "/vipAppointment/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/getUsingGET_19)
     *
     * @tag会员预约表
     */
    get(options: { path: TPathOfgetUsingGET_19 }): Promise<TResponseOfgetUsingGET_19>;
  };
  (url: "/vipAssets"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/saveUsingPOST_17)
     *
     * @tag会员资产表
     */
    post(options: { body: TBodyOfsaveUsingPOST_17 }): Promise<TResponseOfsaveUsingPOST_17>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/updateUsingPUT_16)
     *
     * @tag会员资产表
     */
    put(options: { body: TBodyOfupdateUsingPUT_16 }): Promise<TResponseOfupdateUsingPUT_16>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/deleteUsingDELETE_20)
     *
     * @tag会员资产表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_20;
    }): Promise<TResponseOfdeleteUsingDELETE_20>;
  };
  (url: "/vipAssets/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/updateAllUsingPUT_16)
     *
     * @tag会员资产表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_16 }): Promise<TResponseOfupdateAllUsingPUT_16>;
  };
  (url: "/vipAssets/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/exportExcelUsingPOST_18)
     *
     * @tag会员资产表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_18;
    }): Promise<TResponseOfexportExcelUsingPOST_18>;
  };
  (url: "/vipAssets/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/importExcelUsingPOST_17)
     *
     * @tag会员资产表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_17;
    }): Promise<TResponseOfimportExcelUsingPOST_17>;
  };
  (url: "/vipAssets/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/pageUsingPOST_22)
     *
     * @tag会员资产表
     */
    post(options: { body: TBodyOfpageUsingPOST_22 }): Promise<TResponseOfpageUsingPOST_22>;
  };
  (url: "/vipAssets/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/previewUsingPOST_18)
     *
     * @tag会员资产表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_18 }): Promise<TResponseOfpreviewUsingPOST_18>;
  };
  (url: "/vipAssets/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/queryUsingPOST_18)
     *
     * @tag会员资产表
     */
    post(options: { body: TBodyOfqueryUsingPOST_18 }): Promise<TResponseOfqueryUsingPOST_18>;
  };
  (url: "/vipAssets/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/getUsingGET_20)
     *
     * @tag会员资产表
     */
    get(options: { path: TPathOfgetUsingGET_20 }): Promise<TResponseOfgetUsingGET_20>;
  };
  (url: "/vipFocus"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/saveUsingPOST_18)
     *
     * @tag用户关注表
     */
    post(options: { body: TBodyOfsaveUsingPOST_18 }): Promise<TResponseOfsaveUsingPOST_18>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/updateUsingPUT_17)
     *
     * @tag用户关注表
     */
    put(options: { body: TBodyOfupdateUsingPUT_17 }): Promise<TResponseOfupdateUsingPUT_17>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/deleteUsingDELETE_21)
     *
     * @tag用户关注表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_21;
    }): Promise<TResponseOfdeleteUsingDELETE_21>;
  };
  (url: "/vipFocus/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/updateAllUsingPUT_17)
     *
     * @tag用户关注表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_17 }): Promise<TResponseOfupdateAllUsingPUT_17>;
  };
  (url: "/vipFocus/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/exportExcelUsingPOST_19)
     *
     * @tag用户关注表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_19;
    }): Promise<TResponseOfexportExcelUsingPOST_19>;
  };
  (url: "/vipFocus/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/importExcelUsingPOST_18)
     *
     * @tag用户关注表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_18;
    }): Promise<TResponseOfimportExcelUsingPOST_18>;
  };
  (url: "/vipFocus/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/pageUsingPOST_23)
     *
     * @tag用户关注表
     */
    post(options: { body: TBodyOfpageUsingPOST_23 }): Promise<TResponseOfpageUsingPOST_23>;
  };
  (url: "/vipFocus/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/previewUsingPOST_19)
     *
     * @tag用户关注表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_19 }): Promise<TResponseOfpreviewUsingPOST_19>;
  };
  (url: "/vipFocus/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/queryUsingPOST_19)
     *
     * @tag用户关注表
     */
    post(options: { body: TBodyOfqueryUsingPOST_19 }): Promise<TResponseOfqueryUsingPOST_19>;
  };
  (url: "/vipFocus/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/getUsingGET_21)
     *
     * @tag用户关注表
     */
    get(options: { path: TPathOfgetUsingGET_21 }): Promise<TResponseOfgetUsingGET_21>;
  };
  (url: "/vipInfo"): {
    /**
     * @description 新增
     * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/saveUsingPOST_19)
     *
     * @tag会员信息表
     */
    post(options: { body: TBodyOfsaveUsingPOST_19 }): Promise<TResponseOfsaveUsingPOST_19>;

    /**
     * @description 修改
     * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/updateUsingPUT_18)
     *
     * @tag会员信息表
     */
    put(options: { body: TBodyOfupdateUsingPUT_18 }): Promise<TResponseOfupdateUsingPUT_18>;

    /**
     * @description 删除
     * @see [Swagger doc: 删除](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/deleteUsingDELETE_22)
     *
     * @tag会员信息表
     */
    delete(options: {
      body: TBodyOfdeleteUsingDELETE_22;
    }): Promise<TResponseOfdeleteUsingDELETE_22>;
  };
  (url: "/vipInfo/all"): {
    /**
     * @description 修改所有字段
     * @see [Swagger doc: 修改所有字段](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/updateAllUsingPUT_18)
     *
     * @tag会员信息表
     */
    put(options: { body: TBodyOfupdateAllUsingPUT_18 }): Promise<TResponseOfupdateAllUsingPUT_18>;
  };
  (url: "/vipInfo/export"): {
    /**
     * @description 导出Excel
     * @see [Swagger doc: 导出Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/exportExcelUsingPOST_20)
     *
     * @tag会员信息表
     */
    post(options: {
      body: TBodyOfexportExcelUsingPOST_20;
    }): Promise<TResponseOfexportExcelUsingPOST_20>;
  };
  (url: "/vipInfo/import"): {
    /**
     * @description 导入Excel
     * @see [Swagger doc: 导入Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/importExcelUsingPOST_19)
     *
     * @tag会员信息表
     */
    post(options: {
      formData: TFormDataOfimportExcelUsingPOST_19;
    }): Promise<TResponseOfimportExcelUsingPOST_19>;
  };
  (url: "/vipInfo/page"): {
    /**
     * @description 分页列表查询
     * @see [Swagger doc: 分页列表查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/pageUsingPOST_24)
     *
     * @tag会员信息表
     */
    post(options: { body: TBodyOfpageUsingPOST_24 }): Promise<TResponseOfpageUsingPOST_24>;
  };
  (url: "/vipInfo/preview"): {
    /**
     * @description 预览Excel
     * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/previewUsingPOST_20)
     *
     * @tag会员信息表
     */
    post(options: { body: TBodyOfpreviewUsingPOST_20 }): Promise<TResponseOfpreviewUsingPOST_20>;
  };
  (url: "/vipInfo/query"): {
    /**
     * @description 批量查询
     * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/queryUsingPOST_20)
     *
     * @tag会员信息表
     */
    post(options: { body: TBodyOfqueryUsingPOST_20 }): Promise<TResponseOfqueryUsingPOST_20>;
  };
  (url: "/vipInfo/{id}"): {
    /**
     * @description 单体查询
     * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/getUsingGET_22)
     *
     * @tag会员信息表
     */
    get(options: { path: TPathOfgetUsingGET_22 }): Promise<TResponseOfgetUsingGET_22>;
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
