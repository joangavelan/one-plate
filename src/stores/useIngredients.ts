import { Ingredient } from '@/features/ingredients/types'
import create from 'zustand'

type State = {
  ingredients: Ingredient[]
  addIngredient: (ingredient: Ingredient) => void
  removeIngredient: (id: number) => void
  removeAllIngredients: () => void
}

const useIngredients = create<State>((set) => ({
  ingredients: [],
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: [ingredient, ...state.ingredients]
    })),
  removeIngredient: (id) =>
    set((state) => ({
      ingredients: state.ingredients.filter(
        (ingredient) => ingredient.id !== id
      )
    })),
  removeAllIngredients: () =>
    set(() => ({
      ingredients: []
    }))
}))

export default useIngredients
