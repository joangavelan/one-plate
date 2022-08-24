type BaseProps = {
  name: string
  amount: number
  unit: string
}

type Nutrient = BaseProps

export type Ingredient = {
  id: number
  image: string
  nutrients: Nutrient[]
  calories: {
    amount: number
    unit: string
  }
} & BaseProps

export type IngredientMeta = {
  id: number
  name: string
  possibleUnits: string[]
}
