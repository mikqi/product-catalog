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
    by: string
    limit: number
    match_id: number
    newest: number
    order: string
    page: number
    page_type: string
    searchTerm: string
    start: number
  }
  products: []
}

class Home extends React.Component<{}, IProductState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      payload: {
        by: 'pop',
        limit: 20,
        match_id: 32,
        newest: 0,
        order: 'desc',
        page: 1,
        page_type: 'search',
        searchTerm: 'kaos',
        start: 0
      },
      products: []
    }
  }

  public componentDidMount() {
    axios
      .get(URL + queryString.stringify(this.state.payload))
      .then(response => {
        this.setState({
          products: response.data.data.products
        })
      })
  }

  public render() {
    const { products } = this.state
    return (
      <Layout title='Title'>
        <WhiteSpace size='lg' />
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
      </Layout>
    )
  }
}

export default Home
