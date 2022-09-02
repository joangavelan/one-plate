export const formatMinutes = (totalMinutes: number): string => {
  if (totalMinutes < 60) return totalMinutes + ' min'

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours} ${hours > 1 ? 'hours' : 'hour'} 
  ${minutes ? `${minutes} min` : ''}`
}
