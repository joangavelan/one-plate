import { BaseEntity } from '@/types'

export type IngredientStatus = 'used' | 'unused' | 'missed'

export type RecipeIngredient = {
  id: number
  status: IngredientStatus
} & BaseEntity

export type InitialRecipe = {
  id: number
  title: string
  image: string
  ingredients: RecipeIngredient[]
}

export type RecipeBulkInfo = {
  readyInMinutes: number
  spoonacularSourceUrl: string
}

export type Recipe = InitialRecipe & RecipeBulkInfo
