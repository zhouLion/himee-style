interface IPage_OrderPay_ {
    current?: number;
    pages?: number;
    records?: OrderPay[];
    size?: number;
    total?: number;
}
interface IPage_RechargeOrder_ {
    current?: number;
    pages?: number;
    records?: RechargeOrder[];
    size?: number;
    total?: number;
}
interface IPage_SellOrder_ {
    current?: number;
    pages?: number;
    records?: SellOrder[];
    size?: number;
    total?: number;
}
interface IPage_VipAppointment_ {
    current?: number;
    pages?: number;
    records?: VipAppointment[];
    size?: number;
    total?: number;
}
interface IPage_VipAssets_ {
    current?: number;
    pages?: number;
    records?: VipAssets[];
    size?: number;
    total?: number;
}
interface IPage_VipFocus_ {
    current?: number;
    pages?: number;
    records?: VipFocus[];
    size?: number;
    total?: number;
}
interface IPage_VipInfo_ {
    current?: number;
    pages?: number;
    records?: VipInfo[];
    size?: number;
    total?: number;
}
/**
 * @description: 订单支付信息表
 */
interface OrderPay {
    amountPaid?: number;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    orderId?: number;
    orderType?: number;
    payMethod?: number;
    payTime?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 订单支付信息表
 */
interface OrderPayPageQuery {
    amountPaid?: number;
    createdTime?: string;
    orderId?: number;
    orderType?: number;
    payMethod?: number;
    payTime?: string;
}
/**
 * @description: 订单支付信息表
 */
interface OrderPaySaveDTO {
    amountPaid?: number;
    createdTime?: string;
    orderId?: number;
    orderType?: number;
    payMethod?: number;
    payTime?: string;
}
/**
 * @description: 订单支付信息表
 */
interface OrderPayUpdateDTO {
    amountPaid?: number;
    createdTime?: string;
    id?: number;
    orderId?: number;
    orderType?: number;
    payMethod?: number;
    payTime?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_OrderPayPageQuery_ {
    current?: number;
    extra?: any;
    model: OrderPayPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_RechargeOrderPageQuery_ {
    current?: number;
    extra?: any;
    model: RechargeOrderPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_SellOrderPageQuery_ {
    current?: number;
    extra?: any;
    model: SellOrderPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_VipAppointmentPageQuery_ {
    current?: number;
    extra?: any;
    model: VipAppointmentPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_VipAssetsPageQuery_ {
    current?: number;
    extra?: any;
    model: VipAssetsPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_VipFocusPageQuery_ {
    current?: number;
    extra?: any;
    model: VipFocusPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 分页参数
 */
interface PageParams_VipInfoPageQuery_ {
    current?: number;
    extra?: any;
    model: VipInfoPageQuery;
    order?: string;
    size?: number;
    sort?: string;
}
/**
 * @description: 充值订单表
 */
interface RechargeOrder {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    extraAmount?: number;
    id?: number;
    rechargeAmount?: number;
    updateTime?: string;
    updatedBy?: number;
    vipId?: number;
}
/**
 * @description: 充值订单表
 */
interface RechargeOrderPageQuery {
    createdTime?: string;
    extraAmount?: number;
    rechargeAmount?: number;
    vipId?: number;
}
/**
 * @description: 充值订单表
 */
interface RechargeOrderSaveDTO {
    createdTime?: string;
    extraAmount?: number;
    rechargeAmount?: number;
    vipId?: number;
}
/**
 * @description: 充值订单表
 */
interface RechargeOrderUpdateDTO {
    createdTime?: string;
    extraAmount?: number;
    id?: number;
    rechargeAmount?: number;
    vipId?: number;
}
interface R_IPage_OrderPay__ {
    code?: number;
    data?: IPage_OrderPay_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_RechargeOrder__ {
    code?: number;
    data?: IPage_RechargeOrder_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_SellOrder__ {
    code?: number;
    data?: IPage_SellOrder_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_VipAppointment__ {
    code?: number;
    data?: IPage_VipAppointment_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_VipAssets__ {
    code?: number;
    data?: IPage_VipAssets_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_VipFocus__ {
    code?: number;
    data?: IPage_VipFocus_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_IPage_VipInfo__ {
    code?: number;
    data?: IPage_VipInfo_;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_OrderPay__ {
    code?: number;
    data?: OrderPay[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_RechargeOrder__ {
    code?: number;
    data?: RechargeOrder[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_SellOrder__ {
    code?: number;
    data?: SellOrder[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_VipAppointment__ {
    code?: number;
    data?: VipAppointment[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_VipAssets__ {
    code?: number;
    data?: VipAssets[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_VipFocus__ {
    code?: number;
    data?: VipFocus[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_List_VipInfo__ {
    code?: number;
    data?: VipInfo[];
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_OrderPay_ {
    code?: number;
    data?: OrderPay;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_RechargeOrder_ {
    code?: number;
    data?: RechargeOrder;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_SellOrder_ {
    code?: number;
    data?: SellOrder;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_VipAppointment_ {
    code?: number;
    data?: VipAppointment;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_VipAssets_ {
    code?: number;
    data?: VipAssets;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_VipFocus_ {
    code?: number;
    data?: VipFocus;
    errorMsg?: string;
    extra?: any;
    isSuccess?: boolean;
    msg?: string;
    path?: string;
    timestamp?: number;
}
interface R_VipInfo_ {
    code?: number;
    data?: VipInfo;
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
/**
 * @description: 销售订单表
 */
interface SellOrder {
    amountActual?: number;
    amountDiscount?: number;
    amountOriginal?: number;
    amountPaid?: number;
    commissionType?: string;
    commissionValue?: number;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    orderTime?: string;
    orderType?: number;
    payStatus?: number;
    remark?: string;
    serveAddress?: string;
    serveTechnicianId?: number;
    serveType?: number;
    status?: number;
    updateTime?: string;
    updatedBy?: number;
    vipId?: number;
}
/**
 * @description: 销售订单表
 */
interface SellOrderPageQuery {
    amountActual?: number;
    amountDiscount?: number;
    amountOriginal?: number;
    amountPaid?: number;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    orderTime?: string;
    orderType?: number;
    payStatus?: number;
    remark?: string;
    serveAddress?: string;
    serveTechnicianId?: number;
    serveType?: number;
    status?: number;
    vipId?: number;
}
/**
 * @description: 销售订单表
 */
interface SellOrderSaveDTO {
    amountActual?: number;
    amountDiscount?: number;
    amountOriginal?: number;
    amountPaid?: number;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    orderTime?: string;
    orderType?: number;
    payStatus?: number;
    remark?: string;
    serveAddress?: string;
    serveTechnicianId?: number;
    serveType?: number;
    status?: number;
    vipId?: number;
}
/**
 * @description: 销售订单表
 */
interface SellOrderUpdateDTO {
    amountActual?: number;
    amountDiscount?: number;
    amountOriginal?: number;
    amountPaid?: number;
    commissionType?: string;
    commissionValue?: number;
    createdTime?: string;
    id?: number;
    orderTime?: string;
    orderType?: number;
    payStatus?: number;
    remark?: string;
    serveAddress?: string;
    serveTechnicianId?: number;
    serveType?: number;
    status?: number;
    vipId?: number;
}
/**
 * @description: 会员预约表
 */
interface VipAppointment {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    orderId?: number;
    serveEchnicianId?: number;
    serveTimeBegin?: string;
    serveTimeEnd?: string;
    serveTimeNumExpected?: number;
    serveType?: string;
    serviceTimeUnit?: string;
    status?: number;
    updateTime?: string;
    updatedBy?: number;
    vipId?: number;
}
/**
 * @description: 会员预约表
 */
interface VipAppointmentPageQuery {
    createdTime?: string;
    orderId?: number;
    serveEchnicianId?: number;
    serveTimeBegin?: string;
    serveTimeEnd?: string;
    serveTimeNumExpected?: number;
    serveType?: string;
    serviceTimeUnit?: string;
    status?: number;
    vipId?: number;
}
/**
 * @description: 会员预约表
 */
interface VipAppointmentSaveDTO {
    createdTime?: string;
    orderId?: number;
    serveEchnicianId?: number;
    serveTimeBegin?: string;
    serveTimeEnd?: string;
    serveTimeNumExpected?: number;
    serveType?: string;
    serviceTimeUnit?: string;
    status?: number;
    vipId?: number;
}
/**
 * @description: 会员预约表
 */
interface VipAppointmentUpdateDTO {
    createdTime?: string;
    id?: number;
    orderId?: number;
    serveEchnicianId?: number;
    serveTimeBegin?: string;
    serveTimeEnd?: string;
    serveTimeNumExpected?: number;
    serveType?: string;
    serviceTimeUnit?: string;
    status?: number;
    vipId?: number;
}
/**
 * @description: 会员资产表
 */
interface VipAssets {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    pointsAccrued?: number;
    pointsBalance?: number;
    storedAccrued?: number;
    storedBalance?: string;
    updateTime?: string;
    updatedBy?: number;
}
/**
 * @description: 会员资产表
 */
interface VipAssetsPageQuery {
    createdTime?: string;
    pointsAccrued?: number;
    pointsBalance?: number;
    storedAccrued?: number;
    storedBalance?: string;
}
/**
 * @description: 会员资产表
 */
interface VipAssetsSaveDTO {
    createdTime?: string;
    pointsAccrued?: number;
    pointsBalance?: number;
    storedAccrued?: number;
    storedBalance?: string;
}
/**
 * @description: 会员资产表
 */
interface VipAssetsUpdateDTO {
    createdTime?: string;
    id?: number;
    pointsAccrued?: number;
    pointsBalance?: number;
    storedAccrued?: number;
    storedBalance?: string;
}
/**
 * @description: 用户关注表
 */
interface VipFocus {
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    focusObjectId?: number;
    focusType?: number;
    id?: number;
    updateTime?: string;
    updatedBy?: number;
    vipId?: number;
}
/**
 * @description: 用户关注表
 */
interface VipFocusPageQuery {
    createdTime?: string;
    focusObjectId?: number;
    focusType?: number;
    vipId?: number;
}
/**
 * @description: 用户关注表
 */
interface VipFocusSaveDTO {
    createdTime?: string;
    focusObjectId?: number;
    focusType?: number;
    vipId?: number;
}
/**
 * @description: 用户关注表
 */
interface VipFocusUpdateDTO {
    createdTime?: string;
    focusObjectId?: number;
    focusType?: number;
    id?: number;
    vipId?: number;
}
/**
 * @description: 会员信息表
 */
interface VipInfo {
    address?: string;
    birthday?: string;
    cardNo?: string;
    companyName?: string;
    createTime?: string;
    createdBy?: number;
    createdTime?: string;
    echoMap?: any;
    id?: number;
    idCard?: string;
    mobile?: string;
    registerMerchantId?: number;
    registerTime?: string;
    remark?: string;
    status?: number;
    updateTime?: string;
    updatedBy?: number;
    vipLevel?: number;
    vipName?: string;
}
/**
 * @description: 会员信息表
 */
interface VipInfoPageQuery {
    address?: string;
    birthday?: string;
    cardNo?: string;
    companyName?: string;
    createdTime?: string;
    idCard?: string;
    mobile?: string;
    registerMerchantId?: number;
    registerTime?: string;
    remark?: string;
    status?: number;
    vipLevel?: number;
    vipName?: string;
}
/**
 * @description: 会员信息表
 */
interface VipInfoSaveDTO {
    address?: string;
    birthday?: string;
    cardNo?: string;
    companyName?: string;
    createdTime?: string;
    idCard?: string;
    mobile?: string;
    registerMerchantId?: number;
    registerTime?: string;
    remark?: string;
    status?: number;
    vipLevel?: number;
    vipName?: string;
}
/**
 * @description: 会员信息表
 */
interface VipInfoUpdateDTO {
    address?: string;
    birthday?: string;
    cardNo?: string;
    companyName?: string;
    createdTime?: string;
    id?: number;
    idCard?: string;
    mobile?: string;
    registerMerchantId?: number;
    registerTime?: string;
    remark?: string;
    status?: number;
    vipLevel?: number;
    vipName?: string;
}
type TBodyOfsaveUsingPOST_13 = OrderPaySaveDTO;
type TResponseOfsaveUsingPOST_13 = R_OrderPay_;
type TBodyOfupdateUsingPUT_12 = OrderPayUpdateDTO;
type TResponseOfupdateUsingPUT_12 = R_OrderPay_;
type TBodyOfdeleteUsingDELETE_16 = number[];
type TResponseOfdeleteUsingDELETE_16 = R_boolean_;
type TBodyOfupdateAllUsingPUT_12 = OrderPay;
type TResponseOfupdateAllUsingPUT_12 = R_OrderPay_;
type TBodyOfexportExcelUsingPOST_14 = PageParams_OrderPayPageQuery_;
type TResponseOfexportExcelUsingPOST_14 = any;
interface TFormDataOfimportExcelUsingPOST_13 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_13 = R_boolean_;
type TBodyOfpageUsingPOST_18 = PageParams_OrderPayPageQuery_;
type TResponseOfpageUsingPOST_18 = R_IPage_OrderPay__;
type TBodyOfpreviewUsingPOST_14 = PageParams_OrderPayPageQuery_;
type TResponseOfpreviewUsingPOST_14 = R_string_;
type TBodyOfqueryUsingPOST_14 = OrderPay;
type TResponseOfqueryUsingPOST_14 = R_List_OrderPay__;
interface TPathOfgetUsingGET_16 {
    id?: number;
}
type TResponseOfgetUsingGET_16 = R_OrderPay_;
type TBodyOfsaveUsingPOST_14 = RechargeOrderSaveDTO;
type TResponseOfsaveUsingPOST_14 = R_RechargeOrder_;
type TBodyOfupdateUsingPUT_13 = RechargeOrderUpdateDTO;
type TResponseOfupdateUsingPUT_13 = R_RechargeOrder_;
type TBodyOfdeleteUsingDELETE_17 = number[];
type TResponseOfdeleteUsingDELETE_17 = R_boolean_;
type TBodyOfupdateAllUsingPUT_13 = RechargeOrder;
type TResponseOfupdateAllUsingPUT_13 = R_RechargeOrder_;
type TBodyOfexportExcelUsingPOST_15 = PageParams_RechargeOrderPageQuery_;
type TResponseOfexportExcelUsingPOST_15 = any;
interface TFormDataOfimportExcelUsingPOST_14 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_14 = R_boolean_;
type TBodyOfpageUsingPOST_19 = PageParams_RechargeOrderPageQuery_;
type TResponseOfpageUsingPOST_19 = R_IPage_RechargeOrder__;
type TBodyOfpreviewUsingPOST_15 = PageParams_RechargeOrderPageQuery_;
type TResponseOfpreviewUsingPOST_15 = R_string_;
type TBodyOfqueryUsingPOST_15 = RechargeOrder;
type TResponseOfqueryUsingPOST_15 = R_List_RechargeOrder__;
interface TPathOfgetUsingGET_17 {
    id?: number;
}
type TResponseOfgetUsingGET_17 = R_RechargeOrder_;
type TBodyOfsaveUsingPOST_15 = SellOrderSaveDTO;
type TResponseOfsaveUsingPOST_15 = R_SellOrder_;
type TBodyOfupdateUsingPUT_14 = SellOrderUpdateDTO;
type TResponseOfupdateUsingPUT_14 = R_SellOrder_;
type TBodyOfdeleteUsingDELETE_18 = number[];
type TResponseOfdeleteUsingDELETE_18 = R_boolean_;
type TBodyOfupdateAllUsingPUT_14 = SellOrder;
type TResponseOfupdateAllUsingPUT_14 = R_SellOrder_;
type TBodyOfexportExcelUsingPOST_16 = PageParams_SellOrderPageQuery_;
type TResponseOfexportExcelUsingPOST_16 = any;
interface TFormDataOfimportExcelUsingPOST_15 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_15 = R_boolean_;
type TBodyOfpageUsingPOST_20 = PageParams_SellOrderPageQuery_;
type TResponseOfpageUsingPOST_20 = R_IPage_SellOrder__;
type TBodyOfpreviewUsingPOST_16 = PageParams_SellOrderPageQuery_;
type TResponseOfpreviewUsingPOST_16 = R_string_;
type TBodyOfqueryUsingPOST_16 = SellOrder;
type TResponseOfqueryUsingPOST_16 = R_List_SellOrder__;
interface TPathOfgetUsingGET_18 {
    id?: number;
}
type TResponseOfgetUsingGET_18 = R_SellOrder_;
type TBodyOfsaveUsingPOST_16 = VipAppointmentSaveDTO;
type TResponseOfsaveUsingPOST_16 = R_VipAppointment_;
type TBodyOfupdateUsingPUT_15 = VipAppointmentUpdateDTO;
type TResponseOfupdateUsingPUT_15 = R_VipAppointment_;
type TBodyOfdeleteUsingDELETE_19 = number[];
type TResponseOfdeleteUsingDELETE_19 = R_boolean_;
type TBodyOfupdateAllUsingPUT_15 = VipAppointment;
type TResponseOfupdateAllUsingPUT_15 = R_VipAppointment_;
type TBodyOfexportExcelUsingPOST_17 = PageParams_VipAppointmentPageQuery_;
type TResponseOfexportExcelUsingPOST_17 = any;
interface TFormDataOfimportExcelUsingPOST_16 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_16 = R_boolean_;
type TBodyOfpageUsingPOST_21 = PageParams_VipAppointmentPageQuery_;
type TResponseOfpageUsingPOST_21 = R_IPage_VipAppointment__;
type TBodyOfpreviewUsingPOST_17 = PageParams_VipAppointmentPageQuery_;
type TResponseOfpreviewUsingPOST_17 = R_string_;
type TBodyOfqueryUsingPOST_17 = VipAppointment;
type TResponseOfqueryUsingPOST_17 = R_List_VipAppointment__;
interface TPathOfgetUsingGET_19 {
    id?: number;
}
type TResponseOfgetUsingGET_19 = R_VipAppointment_;
type TBodyOfsaveUsingPOST_17 = VipAssetsSaveDTO;
type TResponseOfsaveUsingPOST_17 = R_VipAssets_;
type TBodyOfupdateUsingPUT_16 = VipAssetsUpdateDTO;
type TResponseOfupdateUsingPUT_16 = R_VipAssets_;
type TBodyOfdeleteUsingDELETE_20 = number[];
type TResponseOfdeleteUsingDELETE_20 = R_boolean_;
type TBodyOfupdateAllUsingPUT_16 = VipAssets;
type TResponseOfupdateAllUsingPUT_16 = R_VipAssets_;
type TBodyOfexportExcelUsingPOST_18 = PageParams_VipAssetsPageQuery_;
type TResponseOfexportExcelUsingPOST_18 = any;
interface TFormDataOfimportExcelUsingPOST_17 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_17 = R_boolean_;
type TBodyOfpageUsingPOST_22 = PageParams_VipAssetsPageQuery_;
type TResponseOfpageUsingPOST_22 = R_IPage_VipAssets__;
type TBodyOfpreviewUsingPOST_18 = PageParams_VipAssetsPageQuery_;
type TResponseOfpreviewUsingPOST_18 = R_string_;
type TBodyOfqueryUsingPOST_18 = VipAssets;
type TResponseOfqueryUsingPOST_18 = R_List_VipAssets__;
interface TPathOfgetUsingGET_20 {
    id?: number;
}
type TResponseOfgetUsingGET_20 = R_VipAssets_;
type TBodyOfsaveUsingPOST_18 = VipFocusSaveDTO;
type TResponseOfsaveUsingPOST_18 = R_VipFocus_;
type TBodyOfupdateUsingPUT_17 = VipFocusUpdateDTO;
type TResponseOfupdateUsingPUT_17 = R_VipFocus_;
type TBodyOfdeleteUsingDELETE_21 = number[];
type TResponseOfdeleteUsingDELETE_21 = R_boolean_;
type TBodyOfupdateAllUsingPUT_17 = VipFocus;
type TResponseOfupdateAllUsingPUT_17 = R_VipFocus_;
type TBodyOfexportExcelUsingPOST_19 = PageParams_VipFocusPageQuery_;
type TResponseOfexportExcelUsingPOST_19 = any;
interface TFormDataOfimportExcelUsingPOST_18 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_18 = R_boolean_;
type TBodyOfpageUsingPOST_23 = PageParams_VipFocusPageQuery_;
type TResponseOfpageUsingPOST_23 = R_IPage_VipFocus__;
type TBodyOfpreviewUsingPOST_19 = PageParams_VipFocusPageQuery_;
type TResponseOfpreviewUsingPOST_19 = R_string_;
type TBodyOfqueryUsingPOST_19 = VipFocus;
type TResponseOfqueryUsingPOST_19 = R_List_VipFocus__;
interface TPathOfgetUsingGET_21 {
    id?: number;
}
type TResponseOfgetUsingGET_21 = R_VipFocus_;
type TBodyOfsaveUsingPOST_19 = VipInfoSaveDTO;
type TResponseOfsaveUsingPOST_19 = R_VipInfo_;
type TBodyOfupdateUsingPUT_18 = VipInfoUpdateDTO;
type TResponseOfupdateUsingPUT_18 = R_VipInfo_;
type TBodyOfdeleteUsingDELETE_22 = number[];
type TResponseOfdeleteUsingDELETE_22 = R_boolean_;
type TBodyOfupdateAllUsingPUT_18 = VipInfo;
type TResponseOfupdateAllUsingPUT_18 = R_VipInfo_;
type TBodyOfexportExcelUsingPOST_20 = PageParams_VipInfoPageQuery_;
type TResponseOfexportExcelUsingPOST_20 = any;
interface TFormDataOfimportExcelUsingPOST_19 {
    file: string;
}
type TResponseOfimportExcelUsingPOST_19 = R_boolean_;
type TBodyOfpageUsingPOST_24 = PageParams_VipInfoPageQuery_;
type TResponseOfpageUsingPOST_24 = R_IPage_VipInfo__;
type TBodyOfpreviewUsingPOST_20 = PageParams_VipInfoPageQuery_;
type TResponseOfpreviewUsingPOST_20 = R_string_;
type TBodyOfqueryUsingPOST_20 = VipInfo;
type TResponseOfqueryUsingPOST_20 = R_List_VipInfo__;
interface TPathOfgetUsingGET_22 {
    id?: number;
}
type TResponseOfgetUsingGET_22 = R_VipInfo_;
interface IApiFn {
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
        post(options: {
            body: TBodyOfsaveUsingPOST_13;
        }): Promise<TResponseOfsaveUsingPOST_13>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/updateUsingPUT_12)
         *
         * @tag订单支付信息表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_12;
        }): Promise<TResponseOfupdateUsingPUT_12>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_12;
        }): Promise<TResponseOfupdateAllUsingPUT_12>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_18;
        }): Promise<TResponseOfpageUsingPOST_18>;
    };
    (url: "/orderPay/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/previewUsingPOST_14)
         *
         * @tag订单支付信息表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_14;
        }): Promise<TResponseOfpreviewUsingPOST_14>;
    };
    (url: "/orderPay/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/queryUsingPOST_14)
         *
         * @tag订单支付信息表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_14;
        }): Promise<TResponseOfqueryUsingPOST_14>;
    };
    (url: "/orderPay/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/订单支付信息表/getUsingGET_16)
         *
         * @tag订单支付信息表
         */
        get(options: {
            path: TPathOfgetUsingGET_16;
        }): Promise<TResponseOfgetUsingGET_16>;
    };
    (url: "/rechargeOrder"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/saveUsingPOST_14)
         *
         * @tag充值订单表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_14;
        }): Promise<TResponseOfsaveUsingPOST_14>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/updateUsingPUT_13)
         *
         * @tag充值订单表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_13;
        }): Promise<TResponseOfupdateUsingPUT_13>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_13;
        }): Promise<TResponseOfupdateAllUsingPUT_13>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_19;
        }): Promise<TResponseOfpageUsingPOST_19>;
    };
    (url: "/rechargeOrder/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/previewUsingPOST_15)
         *
         * @tag充值订单表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_15;
        }): Promise<TResponseOfpreviewUsingPOST_15>;
    };
    (url: "/rechargeOrder/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/queryUsingPOST_15)
         *
         * @tag充值订单表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_15;
        }): Promise<TResponseOfqueryUsingPOST_15>;
    };
    (url: "/rechargeOrder/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/充值订单表/getUsingGET_17)
         *
         * @tag充值订单表
         */
        get(options: {
            path: TPathOfgetUsingGET_17;
        }): Promise<TResponseOfgetUsingGET_17>;
    };
    (url: "/sellOrder"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/saveUsingPOST_15)
         *
         * @tag销售订单表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_15;
        }): Promise<TResponseOfsaveUsingPOST_15>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/updateUsingPUT_14)
         *
         * @tag销售订单表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_14;
        }): Promise<TResponseOfupdateUsingPUT_14>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_14;
        }): Promise<TResponseOfupdateAllUsingPUT_14>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_20;
        }): Promise<TResponseOfpageUsingPOST_20>;
    };
    (url: "/sellOrder/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/previewUsingPOST_16)
         *
         * @tag销售订单表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_16;
        }): Promise<TResponseOfpreviewUsingPOST_16>;
    };
    (url: "/sellOrder/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/queryUsingPOST_16)
         *
         * @tag销售订单表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_16;
        }): Promise<TResponseOfqueryUsingPOST_16>;
    };
    (url: "/sellOrder/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/销售订单表/getUsingGET_18)
         *
         * @tag销售订单表
         */
        get(options: {
            path: TPathOfgetUsingGET_18;
        }): Promise<TResponseOfgetUsingGET_18>;
    };
    (url: "/vipAppointment"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/saveUsingPOST_16)
         *
         * @tag会员预约表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_16;
        }): Promise<TResponseOfsaveUsingPOST_16>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/updateUsingPUT_15)
         *
         * @tag会员预约表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_15;
        }): Promise<TResponseOfupdateUsingPUT_15>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_15;
        }): Promise<TResponseOfupdateAllUsingPUT_15>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_21;
        }): Promise<TResponseOfpageUsingPOST_21>;
    };
    (url: "/vipAppointment/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/previewUsingPOST_17)
         *
         * @tag会员预约表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_17;
        }): Promise<TResponseOfpreviewUsingPOST_17>;
    };
    (url: "/vipAppointment/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/queryUsingPOST_17)
         *
         * @tag会员预约表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_17;
        }): Promise<TResponseOfqueryUsingPOST_17>;
    };
    (url: "/vipAppointment/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员预约表/getUsingGET_19)
         *
         * @tag会员预约表
         */
        get(options: {
            path: TPathOfgetUsingGET_19;
        }): Promise<TResponseOfgetUsingGET_19>;
    };
    (url: "/vipAssets"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/saveUsingPOST_17)
         *
         * @tag会员资产表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_17;
        }): Promise<TResponseOfsaveUsingPOST_17>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/updateUsingPUT_16)
         *
         * @tag会员资产表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_16;
        }): Promise<TResponseOfupdateUsingPUT_16>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_16;
        }): Promise<TResponseOfupdateAllUsingPUT_16>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_22;
        }): Promise<TResponseOfpageUsingPOST_22>;
    };
    (url: "/vipAssets/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/previewUsingPOST_18)
         *
         * @tag会员资产表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_18;
        }): Promise<TResponseOfpreviewUsingPOST_18>;
    };
    (url: "/vipAssets/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/queryUsingPOST_18)
         *
         * @tag会员资产表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_18;
        }): Promise<TResponseOfqueryUsingPOST_18>;
    };
    (url: "/vipAssets/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员资产表/getUsingGET_20)
         *
         * @tag会员资产表
         */
        get(options: {
            path: TPathOfgetUsingGET_20;
        }): Promise<TResponseOfgetUsingGET_20>;
    };
    (url: "/vipFocus"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/saveUsingPOST_18)
         *
         * @tag用户关注表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_18;
        }): Promise<TResponseOfsaveUsingPOST_18>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/updateUsingPUT_17)
         *
         * @tag用户关注表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_17;
        }): Promise<TResponseOfupdateUsingPUT_17>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_17;
        }): Promise<TResponseOfupdateAllUsingPUT_17>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_23;
        }): Promise<TResponseOfpageUsingPOST_23>;
    };
    (url: "/vipFocus/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/previewUsingPOST_19)
         *
         * @tag用户关注表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_19;
        }): Promise<TResponseOfpreviewUsingPOST_19>;
    };
    (url: "/vipFocus/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/queryUsingPOST_19)
         *
         * @tag用户关注表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_19;
        }): Promise<TResponseOfqueryUsingPOST_19>;
    };
    (url: "/vipFocus/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/用户关注表/getUsingGET_21)
         *
         * @tag用户关注表
         */
        get(options: {
            path: TPathOfgetUsingGET_21;
        }): Promise<TResponseOfgetUsingGET_21>;
    };
    (url: "/vipInfo"): {
        /**
         * @description 新增
         * @see [Swagger doc: 新增](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/saveUsingPOST_19)
         *
         * @tag会员信息表
         */
        post(options: {
            body: TBodyOfsaveUsingPOST_19;
        }): Promise<TResponseOfsaveUsingPOST_19>;
        /**
         * @description 修改
         * @see [Swagger doc: 修改](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/updateUsingPUT_18)
         *
         * @tag会员信息表
         */
        put(options: {
            body: TBodyOfupdateUsingPUT_18;
        }): Promise<TResponseOfupdateUsingPUT_18>;
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
        put(options: {
            body: TBodyOfupdateAllUsingPUT_18;
        }): Promise<TResponseOfupdateAllUsingPUT_18>;
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
        post(options: {
            body: TBodyOfpageUsingPOST_24;
        }): Promise<TResponseOfpageUsingPOST_24>;
    };
    (url: "/vipInfo/preview"): {
        /**
         * @description 预览Excel
         * @see [Swagger doc: 预览Excel](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/previewUsingPOST_20)
         *
         * @tag会员信息表
         */
        post(options: {
            body: TBodyOfpreviewUsingPOST_20;
        }): Promise<TResponseOfpreviewUsingPOST_20>;
    };
    (url: "/vipInfo/query"): {
        /**
         * @description 批量查询
         * @see [Swagger doc: 批量查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/queryUsingPOST_20)
         *
         * @tag会员信息表
         */
        post(options: {
            body: TBodyOfqueryUsingPOST_20;
        }): Promise<TResponseOfqueryUsingPOST_20>;
    };
    (url: "/vipInfo/{id}"): {
        /**
         * @description 单体查询
         * @see [Swagger doc: 单体查询](http://120.79.250.86:8762/doc.html#/用户端会员模块/会员信息表/getUsingGET_22)
         *
         * @tag会员信息表
         */
        get(options: {
            path: TPathOfgetUsingGET_22;
        }): Promise<TResponseOfgetUsingGET_22>;
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

export { IApiFn, IPage_OrderPay_, IPage_RechargeOrder_, IPage_SellOrder_, IPage_VipAppointment_, IPage_VipAssets_, IPage_VipFocus_, IPage_VipInfo_, OrderPay, OrderPayPageQuery, OrderPaySaveDTO, OrderPayUpdateDTO, PageParams_OrderPayPageQuery_, PageParams_RechargeOrderPageQuery_, PageParams_SellOrderPageQuery_, PageParams_VipAppointmentPageQuery_, PageParams_VipAssetsPageQuery_, PageParams_VipFocusPageQuery_, PageParams_VipInfoPageQuery_, R_IPage_OrderPay__, R_IPage_RechargeOrder__, R_IPage_SellOrder__, R_IPage_VipAppointment__, R_IPage_VipAssets__, R_IPage_VipFocus__, R_IPage_VipInfo__, R_List_OrderPay__, R_List_RechargeOrder__, R_List_SellOrder__, R_List_VipAppointment__, R_List_VipAssets__, R_List_VipFocus__, R_List_VipInfo__, R_OrderPay_, R_RechargeOrder_, R_SellOrder_, R_VipAppointment_, R_VipAssets_, R_VipFocus_, R_VipInfo_, R_boolean_, R_string_, RechargeOrder, RechargeOrderPageQuery, RechargeOrderSaveDTO, RechargeOrderUpdateDTO, RequestProvider, SellOrder, SellOrderPageQuery, SellOrderSaveDTO, SellOrderUpdateDTO, TBodyOfdeleteUsingDELETE_16, TBodyOfdeleteUsingDELETE_17, TBodyOfdeleteUsingDELETE_18, TBodyOfdeleteUsingDELETE_19, TBodyOfdeleteUsingDELETE_20, TBodyOfdeleteUsingDELETE_21, TBodyOfdeleteUsingDELETE_22, TBodyOfexportExcelUsingPOST_14, TBodyOfexportExcelUsingPOST_15, TBodyOfexportExcelUsingPOST_16, TBodyOfexportExcelUsingPOST_17, TBodyOfexportExcelUsingPOST_18, TBodyOfexportExcelUsingPOST_19, TBodyOfexportExcelUsingPOST_20, TBodyOfpageUsingPOST_18, TBodyOfpageUsingPOST_19, TBodyOfpageUsingPOST_20, TBodyOfpageUsingPOST_21, TBodyOfpageUsingPOST_22, TBodyOfpageUsingPOST_23, TBodyOfpageUsingPOST_24, TBodyOfpreviewUsingPOST_14, TBodyOfpreviewUsingPOST_15, TBodyOfpreviewUsingPOST_16, TBodyOfpreviewUsingPOST_17, TBodyOfpreviewUsingPOST_18, TBodyOfpreviewUsingPOST_19, TBodyOfpreviewUsingPOST_20, TBodyOfqueryUsingPOST_14, TBodyOfqueryUsingPOST_15, TBodyOfqueryUsingPOST_16, TBodyOfqueryUsingPOST_17, TBodyOfqueryUsingPOST_18, TBodyOfqueryUsingPOST_19, TBodyOfqueryUsingPOST_20, TBodyOfsaveUsingPOST_13, TBodyOfsaveUsingPOST_14, TBodyOfsaveUsingPOST_15, TBodyOfsaveUsingPOST_16, TBodyOfsaveUsingPOST_17, TBodyOfsaveUsingPOST_18, TBodyOfsaveUsingPOST_19, TBodyOfupdateAllUsingPUT_12, TBodyOfupdateAllUsingPUT_13, TBodyOfupdateAllUsingPUT_14, TBodyOfupdateAllUsingPUT_15, TBodyOfupdateAllUsingPUT_16, TBodyOfupdateAllUsingPUT_17, TBodyOfupdateAllUsingPUT_18, TBodyOfupdateUsingPUT_12, TBodyOfupdateUsingPUT_13, TBodyOfupdateUsingPUT_14, TBodyOfupdateUsingPUT_15, TBodyOfupdateUsingPUT_16, TBodyOfupdateUsingPUT_17, TBodyOfupdateUsingPUT_18, TFormDataOfimportExcelUsingPOST_13, TFormDataOfimportExcelUsingPOST_14, TFormDataOfimportExcelUsingPOST_15, TFormDataOfimportExcelUsingPOST_16, TFormDataOfimportExcelUsingPOST_17, TFormDataOfimportExcelUsingPOST_18, TFormDataOfimportExcelUsingPOST_19, TPathOfgetUsingGET_16, TPathOfgetUsingGET_17, TPathOfgetUsingGET_18, TPathOfgetUsingGET_19, TPathOfgetUsingGET_20, TPathOfgetUsingGET_21, TPathOfgetUsingGET_22, TResponseOfdeleteUsingDELETE_16, TResponseOfdeleteUsingDELETE_17, TResponseOfdeleteUsingDELETE_18, TResponseOfdeleteUsingDELETE_19, TResponseOfdeleteUsingDELETE_20, TResponseOfdeleteUsingDELETE_21, TResponseOfdeleteUsingDELETE_22, TResponseOfexportExcelUsingPOST_14, TResponseOfexportExcelUsingPOST_15, TResponseOfexportExcelUsingPOST_16, TResponseOfexportExcelUsingPOST_17, TResponseOfexportExcelUsingPOST_18, TResponseOfexportExcelUsingPOST_19, TResponseOfexportExcelUsingPOST_20, TResponseOfgetUsingGET_16, TResponseOfgetUsingGET_17, TResponseOfgetUsingGET_18, TResponseOfgetUsingGET_19, TResponseOfgetUsingGET_20, TResponseOfgetUsingGET_21, TResponseOfgetUsingGET_22, TResponseOfimportExcelUsingPOST_13, TResponseOfimportExcelUsingPOST_14, TResponseOfimportExcelUsingPOST_15, TResponseOfimportExcelUsingPOST_16, TResponseOfimportExcelUsingPOST_17, TResponseOfimportExcelUsingPOST_18, TResponseOfimportExcelUsingPOST_19, TResponseOfpageUsingPOST_18, TResponseOfpageUsingPOST_19, TResponseOfpageUsingPOST_20, TResponseOfpageUsingPOST_21, TResponseOfpageUsingPOST_22, TResponseOfpageUsingPOST_23, TResponseOfpageUsingPOST_24, TResponseOfpreviewUsingPOST_14, TResponseOfpreviewUsingPOST_15, TResponseOfpreviewUsingPOST_16, TResponseOfpreviewUsingPOST_17, TResponseOfpreviewUsingPOST_18, TResponseOfpreviewUsingPOST_19, TResponseOfpreviewUsingPOST_20, TResponseOfqueryUsingPOST_14, TResponseOfqueryUsingPOST_15, TResponseOfqueryUsingPOST_16, TResponseOfqueryUsingPOST_17, TResponseOfqueryUsingPOST_18, TResponseOfqueryUsingPOST_19, TResponseOfqueryUsingPOST_20, TResponseOfsaveUsingPOST_13, TResponseOfsaveUsingPOST_14, TResponseOfsaveUsingPOST_15, TResponseOfsaveUsingPOST_16, TResponseOfsaveUsingPOST_17, TResponseOfsaveUsingPOST_18, TResponseOfsaveUsingPOST_19, TResponseOfupdateAllUsingPUT_12, TResponseOfupdateAllUsingPUT_13, TResponseOfupdateAllUsingPUT_14, TResponseOfupdateAllUsingPUT_15, TResponseOfupdateAllUsingPUT_16, TResponseOfupdateAllUsingPUT_17, TResponseOfupdateAllUsingPUT_18, TResponseOfupdateUsingPUT_12, TResponseOfupdateUsingPUT_13, TResponseOfupdateUsingPUT_14, TResponseOfupdateUsingPUT_15, TResponseOfupdateUsingPUT_16, TResponseOfupdateUsingPUT_17, TResponseOfupdateUsingPUT_18, VipAppointment, VipAppointmentPageQuery, VipAppointmentSaveDTO, VipAppointmentUpdateDTO, VipAssets, VipAssetsPageQuery, VipAssetsSaveDTO, VipAssetsUpdateDTO, VipFocus, VipFocusPageQuery, VipFocusSaveDTO, VipFocusUpdateDTO, VipInfo, VipInfoPageQuery, VipInfoSaveDTO, VipInfoUpdateDTO, createRequest };
