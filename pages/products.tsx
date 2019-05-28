import React, { Component } from 'react'
import Layout from '../layouts/default'

export default class extends Component<any, any> {
  public static getInitialProps({ query: { id, name } }) {
    return { postId: id, productName: name }
  }

  public render() {
    return (
      <Layout title={this.props.productName}>
        <div>
          <h1>My blog post #{this.props.postId}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Layout>
    )
  }
}
