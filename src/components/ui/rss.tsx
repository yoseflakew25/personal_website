import {Rss} from 'lucide-react'
import React from 'react'

const RssFeed = () => {
  return (
    <a
      href="/feed.xml"
      aria-label="Rss feed"
      className="font-mono text-xs flex items-center gap-2 el-focus-styles"
      target="_blank"
    >
      <div className="bg-[#ff9100] rounded-sm text-black p-1">
        <Rss className="size-4" />
      </div>
      RSS Feed
    </a>
  )
}

export default RssFeed
