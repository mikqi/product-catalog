import { Button, Flex, WhiteSpace } from 'antd-mobile'
import React from 'react'
import Layout from '../layouts/default'

const Home = () => (
  <Layout title='Title'>
    <WhiteSpace size='lg' />
    <Flex>
      <Flex.Item>
        <Button type='ghost'>Hello</Button>
      </Flex.Item>
      <Flex.Item>
        <Button type='primary'>Button</Button>
      </Flex.Item>
    </Flex>
  </Layout>
)

export default Home
