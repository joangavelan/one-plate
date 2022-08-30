import { baseURL } from '@/config'
import axios from 'axios'

export const getPossibleUnits = async (id: number): Promise<string[]> => {
  const { data } = await axios.get(`${baseURL}/api/units/${id}`)
  return data
}
