import { BaseEntity } from '@/types'

type Nutrient = BaseEntity

export type Ingredient = {
  id: string
  image: string
  nutrients: Nutrient[]
  calories: {
    amount: number
    unit: string
  }
} & BaseEntity

export type IngredientMeta = {
  id: number
  amount: number
  unit: string
}
