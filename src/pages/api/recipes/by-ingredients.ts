import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiBaseUrl = process.env.API_URL_RECIPES_BY_INGREDIENT
  const apiKey = process.env.API_KEY
  const { ingredients } = req.query
  const maxResults = 5
  const limitLicense = true
  const ignorePantry = true

  try {
    const { data } = await axios.get(
      `${apiBaseUrl}?ingredients=${ingredients}&apiKey=${apiKey}&number=${maxResults}&limitLicense=${limitLicense}&ignorePantry=${ignorePantry}`
    )
    res.status(200).json(data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error)
      const status = error.response?.status || 400
      const data = error.response?.data || 'Error'
      res.status(status).send(data)
    } else {
      res.status(400).send('Error 400: Bad Request')
    }
  }
}
