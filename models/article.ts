export interface Article {
  id: number
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  banner: string
  thumbnail: string
  tags: string
  created_at: string
  updated_at: string
  slug: string
}
