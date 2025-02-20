interface IngredientsListProps {
  ingredients: string[]
}

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <ul className="pl-5">
      {ingredients.map(ingredient => (
        <li
          key={ingredient}
          className="text-sm text-muted-foreground list-disc"
        >
          {ingredient}
        </li>
      ))}
    </ul>
  )
}

export { IngredientsList }
