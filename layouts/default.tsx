import { Icon, NavBar, WingBlank } from 'antd-mobile'
import { withRouter } from 'next/router'

import Head from '../components/head'

import { IProps } from '../interfaces/react'

const Layout = withRouter(
  ({ router = {}, children, title = 'This is the default title' }: IProps) => (
    <div style={{ fontFamily: 'Halvetica, Segoe UI, Roboto, Arial' }}>
      <Head title={title} />
      <NavBar
        style={{
          padding: '0 30%'
        }}
        mode='light'
        icon={<Icon type='left' />}
        onLeftClick={() => router.back()}
      >
        {title}
      </NavBar>
      <WingBlank style={{ padding: '0 30%' }}>{children}</WingBlank>
    </div>
  )
)

Layout.displayName = 'Layout'

export default Layout
