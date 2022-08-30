import { BaseEntity } from '@/types'

type Nutrient = BaseEntity

export type Ingredient = {
  id: number
  image: string
  nutrients: Nutrient[]
} & BaseEntity

export type IngredientMeta = {
  id: number
  amount: number
  unit: string
}
