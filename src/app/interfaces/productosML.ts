export interface RESTMLResponse {
    site_id:           SiteID;
    query:             string;
    paging:            Paging;
    results:           Result[];
    secondary_results: any[];
    related_results:   any[];
    sort:              Sort;
    available_sorts:   Sort[];
    filters:           Filter[];
    available_filters: AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:             CategoryID;
    name:           string;
    path_from_root: Sort[];
}

export enum CategoryID {
    Mlm1073 = "MLM1073",
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                    string;
    site_id:               SiteID;
    title:                 string;
    seller:                Seller;
    price:                 number;
    prices:                Prices;
    sale_price:            null;
    currency_id:           CurrencyID;
    available_quantity:    number;
    sold_quantity:         number;
    buying_mode:           BuyingMode;
    listing_type_id:       ListingTypeID;
    stop_time:             Date;
    condition:             Condition;
    permalink:             string;
    thumbnail:             string;
    thumbnail_id:          string;
    accepts_mercadopago:   boolean;
    installments:          Installments | null;
    address:               Address;
    shipping:              Shipping;
    seller_address:        SellerAddress;
    attributes:            Attribute[];
    differential_pricing?: DifferentialPricing;
    original_price:        null;
    category_id:           CategoryID;
    official_store_id:     null;
    domain_id:             DomainID;
    catalog_product_id:    null | string;
    tags:                  Tag[];
    order_backend:         number;
    use_thumbnail_id:      boolean;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    string;
    city_name:  string;
}

export enum StateID {
    MXDIF = "MX-DIF",
    MXGua = "MX-GUA",
    MXJal = "MX-JAL",
    MXMex = "MX-MEX",
    MXNle = "MX-NLE",
    MXPue = "MX-PUE",
}

export enum StateName {
    DistritoFederal = "Distrito Federal",
    EstadoDeMéxico = "Estado De México",
    Guanajuato = "Guanajuato",
    Jalisco = "Jalisco",
    NuevoLeón = "Nuevo León",
    Puebla = "Puebla",
}

export interface Attribute {
    value_id:             null | string;
    value_struct:         Struct | null;
    attribute_group_id:   AttributeGroupID;
    id:                   ID;
    name:                 Name;
    attribute_group_name: AttributeGroupName;
    source:               number;
    value_name:           string;
    values:               AttributeValue[];
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    CoatLength = "COAT_LENGTH",
    ItemCondition = "ITEM_CONDITION",
    Model = "MODEL",
    Weight = "WEIGHT",
}

export enum Name {
    CondiciónDelÍtem = "Condición del ítem",
    LargoDelPelaje = "Largo del pelaje",
    Marca = "Marca",
    Modelo = "Modelo",
    Peso = "Peso",
}

export interface Struct {
    number: number;
    unit:   string;
}

export interface AttributeValue {
    struct: Struct | null;
    source: number;
    id:     null | string;
    name:   string;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum Condition {
    New = "new",
    NotSpecified = "not_specified",
    Used = "used",
}

export enum CurrencyID {
    Mxn = "MXN",
}

export interface DifferentialPricing {
    id: number;
}

export enum DomainID {
    MlmPurebredDogs = "MLM-PUREBRED_DOGS",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      ReferencePrice[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: CurrencyID;
}

export interface Price {
    id:                    string;
    type:                  Type;
    conditions:            Conditions;
    amount:                number;
    regular_amount:        null;
    currency_id:           CurrencyID;
    exchange_rate_context: ExchangeRateContext;
    metadata:              Metadata;
    last_updated:          Date;
}

export interface Conditions {
    context_restrictions: any[];
    start_time:           Date | null;
    end_time:             Date | null;
    eligible:             boolean;
}

export enum ExchangeRateContext {
    Default = "DEFAULT",
}

export interface Metadata {
}

export enum Type {
    Standard = "standard",
}

export interface ReferencePrice {
    id:                    string;
    type:                  string;
    conditions:            Conditions;
    amount:                number;
    currency_id:           CurrencyID;
    exchange_rate_context: ExchangeRateContext;
    tags:                  any[];
    last_updated:          Date;
}

export interface Seller {
    id:                 number;
    permalink:          null;
    registration_date:  null;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               null;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          LogisticType;
    tags:          any[];
    logistic_type: LogisticType;
    store_pick_up: boolean;
}

export enum LogisticType {
    Custom = "custom",
    NotSpecified = "not_specified",
}

export enum SiteID {
    Mlm = "MLM",
}

export enum Tag {
    BestSellerCandidate = "best_seller_candidate",
    BrandVerified = "brand_verified",
    DraggedBidsAndVisits = "dragged_bids_and_visits",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    LoyaltyDiscountEligible = "loyalty_discount_eligible",
    PoorQualityPicture = "poor_quality_picture",
}
