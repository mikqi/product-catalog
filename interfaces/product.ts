export interface IReview {
  count: number
  rating: number
}

export interface IAttribute {
  optionListingType?: string
  values: [string]
}

export interface IPrice {
  discount: number
  minPrice: number
  priceDisplay: string
  strikeThroughPriceDisplay: string
}

export interface IImage {
  full: string
  thumbnail: string
}

export interface IBrand {
  logo: string
  name: string
  official: boolean
}

export interface ISpecifications {
  name: string
  value: string
}

export interface IProduct {
  attributes: [IAttribute]
  id: string
  brand: string
  defaultSku: string
  formattedId: string
  images: [string]
  itemCount: number
  itemSku: string
  name: string
  price: IPrice
  review: IReview
  status: string
  tags: [string]
}

export interface IProductDetail {
  attributes: IAttribute
  brand: IBrand
  condition: [string]
  description: string
  images: [IImage]
  itemCode: string
  itemSku: string
  itemSkus: [string]
  name: string
  productItemCode: string
  review: IReview
  specifications: ISpecifications
}
