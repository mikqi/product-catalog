import axios from 'axios'
import { Request, Response, Router } from 'express'
import querystring from 'querystring'
const router = Router()

const URL_SEARCH = 'https://www.blibli.com/backend/search/products?'
const URL_PRODUCT = (productId: string, query: string, type = '_summary') =>
  `https://www.blibli.com/backend/product/products/${productId}/${type}?${query}`

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
  async (req: Request, res: Response): Promise<void> => {
    const query = querystring.stringify(req.query)
    const formattedId = req.params.formattedId
    const { data } = await axios.get(URL_PRODUCT(formattedId, query))
    res.json(data)
  }
)

router.get(
  '/products/:formattedId/info',
  async (req: Request, res: Response): Promise<void> => {
    const query = querystring.stringify(req.query)
    const formattedId = req.params.formattedId
    const { data } = await axios.get(URL_PRODUCT(formattedId, query, '_info'))
    res.json(data)
  }
)

export default router
