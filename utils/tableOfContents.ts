export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

/**
 * Generates table of contents from HTML content by extracting heading tags
 * @param htmlContent - The rendered HTML content of the blog
 * @returns Array of table of contents items with id, title, and level
 */
export const generateTableOfContents = (htmlContent: string): TableOfContentsItem[] => {
  if (!htmlContent) return []

  // Use regex to extract all heading tags (h1-h6)
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi
  const matches = htmlContent.match(headingRegex) || []
  
  const tableOfContents: TableOfContentsItem[] = []
  
  matches.forEach((match) => {
    const levelMatch = match.match(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/i)
    if (levelMatch) {
      const level = parseInt(levelMatch[1])
      const title = levelMatch[2]
        .replace(/<[^>]*>/g, '') // Remove any nested HTML tags
        .trim()
      
      // Generate an ID for the heading
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      
      if (title && id) {
        tableOfContents.push({
          id,
          title,
          level
        })
      }
    }
  })
  
  return tableOfContents
}

/**
 * Generates table of contents from markdown content by extracting heading patterns
 * @param markdownContent - The markdown content of the blog
 * @returns Array of table of contents items with id, title, and level
 */
export const generateTableOfContentsFromMarkdown = (markdownContent: string): TableOfContentsItem[] => {
  if (!markdownContent) return []

  // Extract all heading patterns (###, ##, #, etc.)
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const matches = markdownContent.match(headingRegex) || []
  
  const tableOfContents: TableOfContentsItem[] = []
  
  matches.forEach((match) => {
    const levelMatch = match.match(/^(#{1,6})\s+(.+)$/)
    if (levelMatch) {
      const level = levelMatch[1].length
      const title = levelMatch[2].trim()
      
      // Generate an ID for the heading
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      
      if (title && id) {
        tableOfContents.push({
          id,
          title,
          level
        })
      }
    }
  })
  
  return tableOfContents
}

/**
 * Generates table of contents specifically for H3 headings from HTML content
 * @param htmlContent - The rendered HTML content of the blog
 * @returns Array of table of contents items with id, title, and level
 */
export const generateH3TableOfContents = (htmlContent: string): TableOfContentsItem[] => {
  if (!htmlContent) return []

  // Extract elements with class "wp-block-heading" (handles various class attribute positions)
  const wpBlockHeadingRegex = /<[^>]*\bclass\s*=\s*["'][^"']*\bwp-block-heading\b[^"']*["'][^>]*>(.*?)<\/[^>]*>/gi
  const matches = htmlContent.match(wpBlockHeadingRegex) || []
  
  const tableOfContents: TableOfContentsItem[] = []
  
  matches.forEach((match) => {
    const titleMatch = match.match(/<[^>]*\bclass\s*=\s*["'][^"']*\bwp-block-heading\b[^"']*["'][^>]*>(.*?)<\/[^>]*>/i)
    if (titleMatch) {
      const title = titleMatch[1]
        .replace(/<[^>]*>/g, '') // Remove any nested HTML tags
        .trim()
      
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
      
      if (title && id) {
        tableOfContents.push({
          id,
          title,
          level: 3
        })
      }
    }
  })
  
  return tableOfContents
}

/**
 * Generates table of contents specifically for H3 headings from markdown content
 * @param markdownContent - The markdown content of the blog
 * @returns Array of table of contents items with id, title, and level
 */
export const generateH3TableOfContentsFromMarkdown = (markdownContent: string): TableOfContentsItem[] => {
  if (!markdownContent) return []

  // Extract only H3 headings (### pattern)
  const h3Regex = /^###\s+(.+)$/gm
  const matches = markdownContent.match(h3Regex) || []
  
  const tableOfContents: TableOfContentsItem[] = []
  
  matches.forEach((match) => {
    const titleMatch = match.match(/^###\s+(.+)$/)
    if (titleMatch) {
      const title = titleMatch[1].trim()
      
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
      
      if (title && id) {
        tableOfContents.push({
          id,
          title,
          level: 3
        })
      }
    }
  })
  
  return tableOfContents
}

/**
 * Generates table of contents titles as strings for H3 headings from HTML content
 * @param htmlContent - The rendered HTML content of the blog
 * @returns Array of heading titles as strings
 */
export const generateH3TableOfContentsTitles = (htmlContent: string): string[] => {
  if (!htmlContent) return []

  // Extract elements with class "wp-block-heading" (handles various class attribute positions)
  const wpBlockHeadingRegex = /<[^>]*\bclass\s*=\s*["'][^"']*\bwp-block-heading\b[^"']*["'][^>]*>(.*?)<\/[^>]*>/gi
  const matches = htmlContent.match(wpBlockHeadingRegex) || []
  
  const titles: string[] = []
  
  matches.forEach((match) => {
    const titleMatch = match.match(/<[^>]*\bclass\s*=\s*["'][^"']*\bwp-block-heading\b[^"']*["'][^>]*>(.*?)<\/[^>]*>/i)
    if (titleMatch) {
      const title = titleMatch[1]
        .replace(/<[^>]*>/g, '') // Remove any nested HTML tags
        .trim()
      
      if (title) {
        titles.push(title)
      }
    }
  })
  
  return titles
}

/**
 * Generates table of contents titles as strings for all headings from HTML content
 * @param htmlContent - The rendered HTML content of the blog
 * @returns Array of heading titles as strings
 */
export const generateTableOfContentsTitles = (htmlContent: string): string[] => {
  if (!htmlContent) return []

  // Use regex to extract all heading tags (h1-h6)
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi
  const matches = htmlContent.match(headingRegex) || []
  
  const titles: string[] = []
  
  matches.forEach((match) => {
    const levelMatch = match.match(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/i)
    if (levelMatch) {
      const title = levelMatch[2]
        .replace(/<[^>]*>/g, '') // Remove any nested HTML tags
        .trim()
      
      if (title) {
        titles.push(title)
      }
    }
  })
  
  return titles
} 