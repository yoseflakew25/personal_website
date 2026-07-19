'use client'
'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import Giscus from '@giscus/react'
import {env} from '~/constants/env'

const PostComments = () => {
  const { resolvedTheme } = useTheme()
  const giscusTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className="w-full mt-4 bg-card border border-[hsl(var(--border))] p-4">
      <Giscus
        id="comments"
        repo="BinarySenseiii/personal-website"
        repoId={env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category="General"
        categoryId={env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="og:title"
        term="Welcome to Faisal personal Portfolio"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={giscusTheme}
        lang="en"
      />
    </div>
  )
}

export default PostComments
