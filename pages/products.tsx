import axios from 'axios'
import React, { Component } from 'react'
import OverlayImage from '../components/OverlayImage'
import ProductDetailCarousel from '../components/ProductDetailCarousel'
import { IProductDetail } from '../interfaces/product'
import Layout from '../layouts/default'

export default class extends Component<any, any> {
  public static async getInitialProps(context: any) {
    const product = context.query
    const isServer = context.req !== undefined
    const formattedId = isServer
      ? context.req.params.formattedId
      : product.formattedId
    const defaultSku = isServer
      ? context.req.query.selectedItemSku
      : product.defaultSku

    const URL = isServer
      ? context.req.protocol + '://' + context.req.get('host')
      : ''
    const path = `/api/products/${formattedId}?selectedItemSku=${defaultSku}`
    const fetchUrl = isServer ? URL + path : path

    try {
      const { data } = await axios.get(fetchUrl)
      return { product: data.data, defaultSku }
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
    }
  }

  public state = {
    imageUrl: '',
    isViewImage: false
  }

  public handleClick = (imageUrl: string) => {
    this.setState({
      imageUrl,
      isViewImage: true
    })
  }

  public handleClose = () => {
    this.setState({
      isViewImage: false
    })
  }

  public render() {
    const product: IProductDetail = this.props.product
    return (
      <Layout title={product.name}>
        <ProductDetailCarousel
          images={product.images}
          onClick={this.handleClick}
        />

        <OverlayImage
          show={this.state.isViewImage}
          imageUrl={this.state.imageUrl}
          handleClose={this.handleClose}
        />

        <h2>{product.name}</h2>
        <div>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </Layout>
    )
  }
}
