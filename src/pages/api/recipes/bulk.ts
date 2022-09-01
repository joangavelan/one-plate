import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiBaseUrl = process.env.API_URL_RECIPES_BULK
  const apiKey = process.env.API_KEY
  const { ids } = req.query

  try {
    const { data } = await axios.get(
      `${apiBaseUrl}?ids=${ids}&apiKey=${apiKey}`
    )
    res.status(200).json(data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = (error.response?.status as number) || 400
      const data = error.response?.data || 'Error 400: Bad Request'
      res.status(status).send(data)
    } else {
      res.status(400).send('Error 400: Bad Request')
    }
  }
}
