export const preventNonNumericInput = (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  if (['e', '+', '-'].includes(e.key)) {
    e.preventDefault()
  }
}
