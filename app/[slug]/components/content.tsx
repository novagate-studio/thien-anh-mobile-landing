'use client'

import parser from '@/lib/parser'
import { Article } from '@/models/article'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import '@/styles/index.css'
export default function Content() {
  const params = useParams()
  const slug = params?.slug as string
  const [data, setData] = useState<Article | null>(null)
  const parsed = data?.content ? parser.parse(data?.content) : null
  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        try {
          const response = await fetch(`https://api.novagate.vn/api/v2/articles/${slug}`).then((res) => res.json().then(data => data.data))
          if (response) {
            setData(response)
          }
        } catch (error) {
          console.error('Error fetching article by slug:', error)
        }
      }
    }
    fetchData()
  }, [slug])
  if (parsed === null) {
    return <div>Loading...</div>
  }
  return <div dangerouslySetInnerHTML={{ __html: parsed! }}></div>
}
