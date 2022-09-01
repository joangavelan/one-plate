import { BaseEntity } from '@/types'

export type Nutrient = {
  name: string
  amount: number
  unit: string
}

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
