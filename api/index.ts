export interface Item {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: string
}

interface FetchData {
  count: number
  next: string
  previous: string
  results: Item[]
}

async function getData(
  endpoint: string,
  limit: number,
  offset: number
): Promise<FetchData> {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/${endpoint}/?limit=${limit}&offset=${offset}`
  )
  if (!response.ok) throw new Error('Unable to fetch posts')
  return response.json()
}

async function getItem(endpoint: string, id: string): Promise<Item> {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/${endpoint}/${id}`
  )
  if (!response.ok) throw new Error('Unable to fetch posts')
  return response.json()
}
export { getData, getItem }
