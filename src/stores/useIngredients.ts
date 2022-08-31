import { Ingredient } from '@/features/ingredients/types'
import { reorderArray } from '@/utils/reorderArray'
import create from 'zustand'

type State = {
  ingredients: Ingredient[]
  addIngredient: (ingredient: Ingredient) => void
  removeIngredient: (id: number) => void
  removeAllIngredients: () => void
  reorderIngredients: (startindex: number, endIndex: number) => void
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
    })),
  reorderIngredients: (startIndex, endIndex) =>
    set((state) => ({
      ingredients: reorderArray(state.ingredients, startIndex, endIndex)
    }))
}))

export default useIngredients
