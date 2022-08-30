import { adaptApiIngredient } from '@/adapters/adaptApiIngredient'
import { baseURL } from '@/config'
import axios from 'axios'
import type { Ingredient, IngredientMeta } from '../types'

export const getFullIngredient = async (
  meta: IngredientMeta
): Promise<Ingredient> => {
  const { id, amount, unit } = meta
  const { data } = await axios.get(
    `${baseURL}/api/ingredient?id=${id}&amount=${amount}&unit=${unit}`
  )
  const ingredient = adaptApiIngredient(data)
  return ingredient
}
