import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiBaseUrl = process.env.API_URL_INGREDIENT_INFO
  const apiKey = process.env.API_KEY
  const { id, amount, unit } = req.query

  try {
    const { data } = await axios.get(
      `${apiBaseUrl}/${id}/information?apiKey=${apiKey}&amount=${amount}&unit=${unit}`
    )
    res.status(200).json(data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status as number
      const data = error.response?.data
      res.status(status).send(data)
    } else {
      res.status(400).send('Error 400: Bad Request')
    }
  }
}
