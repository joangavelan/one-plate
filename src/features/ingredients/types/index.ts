import { BaseEntity } from '@/types'

type Nutrient = BaseEntity

export type Ingredient = {
  id: number
  image: string
  nutrients: Nutrient[]
  calories: {
    amount: number
    unit: string
  }
} & BaseEntity

export type IngredientMeta = {
  id: number
  name: string
  possibleUnits: string[]
}
