import {MetadataRoute} from 'next'
import config from '~/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // domainName already includes protocol, strip trailing slash for clean URL
    sitemap: `${config.domainName.replace(/\/+$/, '')}/sitemap.xml`,
  }
}
