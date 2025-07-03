/**
 * Formats an ISO date string to display as "day month name year"
 * @param dateString - ISO date string (e.g., "2025-07-03T10:11:31")
 * @returns Formatted date string (e.g., "7 July 2025")
 */
export function formatDateToMonthName(dateString: string): string {
  const date = new Date(dateString)
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string provided')
  }
  
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()
  
  return `${day} ${month} ${year}`
}

/**
 * Formats current date to display as "day month name year"
 * @returns Formatted current date string (e.g., "7 July 2025")
 */
export function formatCurrentDateToMonthName(): string {
  return formatDateToMonthName(new Date().toISOString())
}
