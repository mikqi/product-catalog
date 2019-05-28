export interface IReview {
  count: number
  rating: number
}

export interface IAttribute {
  optionListingType: string
  values: [string]
}

export interface IPrice {
  discount: number
  minPrice: number
  priceDisplay: string
  strikeThroughPriceDisplay: string
}

export interface IProduct {
  attributes: [IAttribute]
  id: string
  brand: string
  defaultSku: string
  images: [string]
  itemCount: number
  itemSku: string
  name: string
  price: IPrice
  review: IReview
  status: string
  tags: [string]
}
