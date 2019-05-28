import { WhiteSpace } from 'antd-mobile'
import axios from 'axios'
import queryString from 'querystring'
import React from 'react'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interfaces/product'
import Layout from '../layouts/default'

const URL = '/api/products?'

interface IProductState {
  payload: {
    by?: string
    category?: string
    limit?: number
    match_id?: number
    newest: number
    order: string
    page: number
    page_type?: string
    searchTerm?: string
    sort?: number
    start: number
  }
  products: any
}

const ITEM_PER_PAGE = 24

class Home extends React.Component<{}, IProductState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      payload: {
        by: 'pop',
        category: 'MU-1000007',
        limit: 20,
        match_id: 32,
        newest: 0,
        order: 'desc',
        page: 1,
        page_type: 'search',
        sort: 6,
        start: 0
      },
      products: []
    }
  }

  public componentDidMount() {
    this.fetchProducts()
  }

  public componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling)
  }

  public fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        URL + queryString.stringify(this.state.payload)
      )
      const newProducts = [...this.state.products, ...data.data.products]

      this.setState({
        products: newProducts
      })
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
    } finally {
      document.addEventListener('scroll', this.trackScrolling)
    }
  }

  public isBottom(el: HTMLElement | null): boolean {
    if (el instanceof HTMLElement) {
      return el.getBoundingClientRect().bottom <= window.innerHeight
    }

    return false
  }

  public trackScrolling = async () => {
    const wrappedElement = document.getElementById('product-container')
    if (this.isBottom(wrappedElement)) {
      document.removeEventListener('scroll', this.trackScrolling)
      this.setPayloadNextPage()
      await this.fetchProducts()
    }
  }

  public setPayloadNextPage = () => {
    const { payload } = this.state
    const newPayload = {
      ...payload,
      page: payload.page + 1,
      start: payload.start + ITEM_PER_PAGE
    }
    this.setState({
      payload: newPayload
    })
  }

  public render() {
    const { products } = this.state
    return (
      <Layout title='Title'>
        <WhiteSpace size='lg' />
        <div id='product-container'>
          {products
            ? products.map((product: IProduct) => {
                return (
                  <div key={product.id}>
                    <ProductCard {...product} />
                    <WhiteSpace size='lg' />
                  </div>
                )
              })
            : ''}
        </div>
      </Layout>
    )
  }
}

export default Home
