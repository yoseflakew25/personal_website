import { MetadataRoute } from 'next'
import { BasePath } from '~/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: BasePath(''),
      lastModified: new Date(),
    },
    {
      url: BasePath('/projects'),
      lastModified: new Date(),
    },
    {
      url: BasePath('/designs'),
      lastModified: new Date(),
    },
    {
      url: BasePath('/about'),
      lastModified: new Date(),
    },
  ]
}
