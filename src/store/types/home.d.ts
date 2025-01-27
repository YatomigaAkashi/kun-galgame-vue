export interface HomeStore {
  keywords: string
  category: string
  page: number
  limit: number
  sortField: string
  sortOrder: string
  // Whether to continue loading after it's done
  isLoading: boolean

  // Other stores
  // Whether to activate the left interactive panel of the main page
  isActiveMainPageAside: boolean

  // Storage for search history
  searchHistory: string[]
}
