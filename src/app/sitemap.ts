import { MetadataRoute } from 'next'
import quizData from '@/data/quiz.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brainrottest.com'
  const resultTypes = Object.keys(quizData.results)
  
  const routes = [
    '',
    '/quiz',
    '/about',
  ]
  
  // Root English pages (no /en prefix)
  const englishPages = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }))
  
  // Chinese pages (with /zh prefix)
  const chinesePages = routes.map(route => ({
    url: `${baseUrl}/zh${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Result pages
  const englishResultPages = resultTypes.map(type => ({
    url: `${baseUrl}/result/${type}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  const chineseResultPages = resultTypes.map(type => ({
    url: `${baseUrl}/zh/result/${type}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    ...englishPages,
    ...chinesePages,
    ...englishResultPages,
    ...chineseResultPages,
  ]
}