import { RouterProps } from 'next/router'
import { ReactNode } from 'react'

export interface IProps {
  title: string
  children?: ReactNode
  description?: string
  url?: string
  ogImage?: string
  router?: RouterProps | any
}
