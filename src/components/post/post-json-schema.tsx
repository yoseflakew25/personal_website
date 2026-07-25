import {Post} from '#site/content'
import Script from 'next/script'
import React from 'react'
import config from '~/config'

const JsonSchemaLD = ({post}: {post: Post}) => {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${config.domainName}/blog/${post.slug.split('/')}`,
    },
    name: post.title,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Yosef Lakew',
    },
  }

  if (post.cover) {
    jsonLd.image = `https://${config.domainName}${post.cover}`
  }

  return (
    <Script
      type="application/ld+json"
      id={`json-ld-article-${post.slug.split('/')}`}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export default JsonSchemaLD
