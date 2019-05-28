import axios from 'axios'
import { Request, Response, Router } from 'express'
import querystring from 'querystring'
const router = Router()

const URL = 'https://www.blibli.com/backend/search/products?'

router.get(
  '/products',
  (req: Request, res: Response): void => {
    const query = querystring.stringify(req.query)
    axios.get(URL + query).then(response => {
      const { data } = response
      res.json(data)
    })
  }
)

export default router
