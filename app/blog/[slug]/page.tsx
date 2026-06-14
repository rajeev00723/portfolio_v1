import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: `${post.title} | Rajeev Ranjan Sinha`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif text-zinc-900 dark:text-white">
            RRS
          </Link>
          <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-16 space-y-6">
          <div className="space-y-3">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-zinc-900 dark:text-white">
              {post.title}
            </h1>
          </div>

          <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Clock size={16} />
              {post.readTime}
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
                <Bookmark size={18} className="text-zinc-600 dark:text-zinc-400" />
              </button>
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
                <Share2 size={18} className="text-zinc-600 dark:text-zinc-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Tech Tags */}
        <div className="py-8 border-y border-zinc-200 dark:border-zinc-800">
          <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">Technologies Discussed</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none py-12">
          {post.content.split('\n\n').map((paragraph, i) => {
            // Handle headers
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={i} className="mt-8 mb-4">
                  {paragraph.replace(/^##\s/, '')}
                </h2>
              )
            }

            // Handle code blocks
            if (paragraph.includes('```')) {
              const parts = paragraph.split('```')
              return (
                <div key={i}>
                  {parts.map((part, j) => {
                    if (j % 2 === 0) {
                      return part ? <p key={j} className="mb-4">{part}</p> : null
                    } else {
                      return (
                        <pre key={j} className="mb-4 p-4 bg-zinc-900 dark:bg-zinc-950 text-zinc-100 rounded-lg overflow-x-auto">
                          <code>{part}</code>
                        </pre>
                      )
                    }
                  })}
                </div>
              )
            }

            // Handle lists
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n')
              return (
                <ul key={i} className="mb-4 space-y-2">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              )
            }

            // Regular paragraphs
            return (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Engagement Section */}
        <div className="py-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition text-red-600 dark:text-red-400">
              <ThumbsUp size={20} />
              <span className="text-sm font-medium">Helpful</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
              <Bookmark size={20} className="text-zinc-600 dark:text-zinc-400" />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Save</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
              <Share2 size={20} className="text-zinc-600 dark:text-zinc-400" />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Share</span>
            </button>
          </div>
        </div>

        {/* Author Info */}
        <div className="py-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">About the Author</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Rajeev Ranjan Sinha is a full-stack engineer with 10+ years of experience building scalable web applications. He specializes in JavaScript/TypeScript, cloud architecture, and system design.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/rajeev00723" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rajeevranjansinha/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                LinkedIn
              </a>
              <a href="https://rajeevranjansinha.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Substack
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="py-12 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-6">Related Articles</h3>
            <div className="grid gap-6">
              {relatedPosts.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition"
                >
                  <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{article.readTime} read</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-16 border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Get more articles like this</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Subscribe to my newsletter for in-depth articles, quick tips, and insights on web development.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Rajeev Ranjan Sinha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
