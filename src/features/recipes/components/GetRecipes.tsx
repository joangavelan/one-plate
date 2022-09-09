type GetRecipesProps = {
  fetchRecipes: () => void
  ingredientsLength: number
}

export const GetRecipes = ({
  fetchRecipes,
  ingredientsLength
}: GetRecipesProps) => {
  return (
    <div className='grid h-full min-h-[10rem] place-items-center'>
      <button
        onClick={fetchRecipes}
        disabled={!ingredientsLength}
        className='button btnGray'
      >
        Get Recipes
      </button>
    </div>
  )
}
