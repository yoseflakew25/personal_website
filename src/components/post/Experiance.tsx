import {Post} from '#site/content'
import React from 'react'
import ContentNotFound from '../ui/content-not-found'
import PostItem from './post-item'

type ExperianceProps = {
  posts: Post[]
  showRss?: boolean
}

const Experiance: React.FC<ExperianceProps> = ({posts, showRss}) => {
  return (
    <section aria-label="articles" className="space-y-6 mt-5">
      {showRss && <h2 className="font-mono text-sm tracking-wider uppercase text-foreground">Most recent posts</h2>}
      <ol className="space-y-3" role="list">
        {posts.length > 0 ? (
          posts.map(post => <PostItem key={post.slug} {...post} />)
        ) : (
          <ContentNotFound text="No Articles Found" />
        )}
      </ol>
    </section>
  )
}
export default Experiance
