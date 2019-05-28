import axios from 'axios'
import { Request, Response, Router } from 'express'
import querystring from 'querystring'
const router = Router()

const URL_SEARCH = 'https://www.blibli.com/backend/search/products?'
const URL_PRODUCT = (productId: string, query: string) =>
  `https://www.blibli.com/backend/product/products/${productId}/_summary?${query}`

router.get(
  '/products',
  (req: Request, res: Response): void => {
    const query = querystring.stringify(req.query)
    axios.get(URL_SEARCH + query).then(response => {
      const { data } = response
      res.json(data)
    })
  }
)

router.get(
  '/products/:formattedId',
  (req: Request, res: Response): void => {
    const query = querystring.stringify(req.query)
    const formattedId = req.params.formattedId

    axios.get(URL_PRODUCT(formattedId, query)).then(response => {
      const { data } = response
      res.json(data)
    })
  }
)

export default router
