import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiBaseUrl = process.env.API_URL_INGREDIENT_INFO
  const apiKey = process.env.API_KEY
  const { ingredientId } = req.query

  try {
    const { data } = await axios.get(
      `${apiBaseUrl}/${ingredientId}/information?apiKey=${apiKey}`
    )
    const possibleUnits = data.possibleUnits
    res.status(200).json(possibleUnits)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status as number
      const data = error.response?.data
      res.status(status).send(data)
      res.send('error')
    } else {
      res.status(400).send('Error 400: Bad Request')
    }
  }
}
