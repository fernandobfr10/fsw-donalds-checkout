interface IngredientsListProps {
  ingredients: string[]
}

export const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <ul className="list-disc px-5 text-sm text-muted-foreground">
      {ingredients.map(ingredient => (
        <li key={ingredient} className="">
          {ingredient}
        </li>
      ))}
    </ul>
  )
}
