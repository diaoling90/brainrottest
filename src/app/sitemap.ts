import { MetadataRoute } from 'next'
import quizData from '@/data/quiz.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brainrot-test.com'
  const locales = ['en', 'zh']
  const resultTypes = Object.keys(quizData.results)
  
  const routes = [
    '',
    '/quiz',
    '/about',
  ]
  
  // Generate sitemap entries for main pages
  const mainPages = locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
  
  // Generate sitemap entries for result pages
  const resultPages = locales.flatMap(locale =>
    resultTypes.map(type => ({
      url: `${baseUrl}/${locale}/result/${type}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...mainPages,
    ...resultPages,
  ]
}