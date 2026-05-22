import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | Rajeev Ranjan Sinha',
  description: 'Articles about web development, technology, and software engineering.',
}

export default function BlogPage() {
  const allPosts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications',
      excerpt: 'Exploring best practices for architecting modern web applications that can grow with your business...',
      date: 'May 15, 2026',
      readTime: '8 min read',
      slug: 'scalable-web-apps',
      category: 'Backend',
    },
    {
      id: 2,
      title: 'The Future of Frontend Development',
      excerpt: 'A deep dive into emerging trends and technologies shaping the web development landscape...',
      date: 'May 8, 2026',
      readTime: '12 min read',
      slug: 'future-frontend',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Practical techniques and best practices to boost your React application performance...',
      date: 'April 30, 2026',
      readTime: '10 min read',
      slug: 'react-performance',
      category: 'React',
    },
    {
      id: 4,
      title: 'Understanding Web Security Fundamentals',
      excerpt: 'Essential security concepts every web developer should know to protect user data...',
      date: 'April 18, 2026',
      readTime: '11 min read',
      slug: 'web-security',
      category: 'Security',
    },
    {
      id: 5,
      title: 'Getting Started with TypeScript',
      excerpt: 'A comprehensive guide to adopting TypeScript in your JavaScript projects...',
      date: 'April 5, 2026',
      readTime: '9 min read',
      slug: 'typescript-guide',
      category: 'TypeScript',
    },
    {
      id: 6,
      title: 'Database Design Patterns',
      excerpt: 'Common patterns and anti-patterns in database design for modern applications...',
      date: 'March 28, 2026',
      readTime: '13 min read',
      slug: 'db-patterns',
      category: 'Database',
    },
  ]

  const categories = ['All', ...new Set(allPosts.map(p => p.category))]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-serif">
            RS
          </Link>
          <div className="flex gap-8">
            <Link href="/#projects" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              Projects
            </Link>
            <Link href="/blog" className="text-sm font-semibold">
              Blog
            </Link>
            <Link href="#contact" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft size={18} /> Back Home
        </Link>
        
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-serif font-bold">
            Articles & Insights
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Thoughts on web development, architecture, and the evolving landscape of modern technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <div className="grid gap-8">
          {allPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-xl/10 hover:bg-white dark:hover:bg-zinc-900/50 transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowRight size={24} className="text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 mt-1 transition" />
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 pt-2">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-zinc-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400 text-sm">
          <p>© 2026 Rajeev Ranjan Sinha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
