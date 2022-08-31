import * as React from 'react'
import useIngredients from '@/stores/useIngredients'
import { Footer } from './Footer'
import Ingredient from './Ingredient'
import { NoIngredients } from './NoIngredients'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'
import NonSSRWrapper from '@/components/Utils/NonSSRWrapper'

export const IngredientList = () => {
  const ingredients = useIngredients((state) => state.ingredients)
  const reorderIngredients = useIngredients((state) => state.reorderIngredients)

  const onDragEndHandler = React.useCallback(
    (result: DropResult) => {
      const { source, destination } = result
      if (!destination) return
      if (source.index === destination.index) return
      reorderIngredients(source.index, destination.index)
    },
    [reorderIngredients]
  )

  return (
    <NonSSRWrapper>
      <DragDropContext onDragEnd={onDragEndHandler}>
        {/* list */}
        <div className='my-2.5 flex flex-1 flex-col justify-between gap-4 overflow-hidden'>
          {ingredients.length > 0 ? (
            <Droppable droppableId='ingredients'>
              {(provided) => (
                <ul
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='flex flex-1 flex-col overflow-y-auto'
                >
                  {ingredients.map((ingredient, index) => (
                    <Draggable
                      key={ingredient.id}
                      draggableId={ingredient.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <Ingredient
                          provided={provided}
                          ingredient={ingredient}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          ) : (
            // no ingredients fallback
            <NoIngredients />
          )}
          {/* footer */}
          <Footer ingredientsLength={ingredients.length} />
        </div>
      </DragDropContext>
    </NonSSRWrapper>
  )
}
