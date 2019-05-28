import axios from 'axios'
import React, { Component } from 'react'
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

  public render() {
    const product: IProductDetail = this.props.product
    return (
      <Layout title={product.name}>
        <div>
          {product.images.map((image, i) => {
            return <img key={i} src={image.full} style={{ width: '100%' }} />
          })}
        </div>
        <h2>{product.name}</h2>
        <div>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </Layout>
    )
  }
}
