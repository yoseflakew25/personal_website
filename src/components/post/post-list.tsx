import {Post} from '#site/content'
import React from 'react'
import ContentNotFound from '../ui/content-not-found'
import PostItem from './post-item'

type PostListProps = {
  posts: Post[]
  showRss?: boolean
  maxPosts?: number
  layout?: 'list' | 'grid'
}

const PostList: React.FC<PostListProps> = ({posts, showRss, maxPosts, layout = 'list'}) => {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts

  return (
    <section aria-label="articles" className="space-y-6">
      {showRss && (
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-sm tracking-wider uppercase text-foreground">
            {maxPosts ? `Latest posts (${Math.min(maxPosts, posts.length)})` : 'All posts'}
          </h2>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" aria-hidden="true" />
          <span className="font-mono text-[10px] text-muted-foreground shrink-0">{posts.length} total</span>
        </div>
      )}
      <ol
        role="list"
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
            : 'space-y-4'
        }
      >
        {displayPosts.length > 0 ? (
          displayPosts.map((post, i) => (
            <PostItem key={post.slug} {...post} index={i} />
          ))
        ) : (
          <ContentNotFound text="No Articles Found" />
        )}
      </ol>
    </section>
  )
}
export default PostList
