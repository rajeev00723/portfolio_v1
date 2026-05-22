import Link from 'next/link'
import { ArrowLeft, BookOpen, Calendar, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react'

export const metadata = {
  title: 'Building Scalable Web Applications with Next.js and TypeScript | Rajeev Ranjan Sinha',
  description: 'Learn how to architect modern web applications that can scale to millions of users with Next.js and TypeScript.',
}

export default function ArticlePage() {
  const relatedArticles = [
    {
      title: 'The Future of Frontend Development: AI-Assisted Coding',
      slug: 'future-frontend-ai',
      readTime: '12 min',
    },
    {
      title: 'React Performance Optimization: From Concept to Production',
      slug: 'react-performance-guide',
      readTime: '18 min',
    },
  ]

  const tableOfContents = [
    'Why Scalability Matters',
    'Understanding the Layers of Scalability',
    'Frontend Optimization Strategies',
    'Backend Architecture Patterns',
    'Database Scaling Techniques',
    'Caching Strategies',
    'Monitoring and Observability',
    'Real-World Implementation',
  ]

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

      {/* Article Container */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-16 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Backend Architecture
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-zinc-900 dark:text-white">
              Building Scalable Web Applications with Next.js and TypeScript
            </h1>
          </div>

          <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Learn how to architect modern web applications that can scale to millions of users. We'll explore code splitting, server-side rendering, API optimization, and database scaling strategies.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Calendar size={16} />
              May 22, 2026
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Clock size={16} />
              15 min read
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
            {['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="py-12 bg-blue-50 dark:bg-blue-950/30 rounded-lg px-6">
          <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-4">Table of Contents</h3>
          <ol className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{index + 1}.</span>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none py-12">
          <h2 id="why-scalability-matters">Why Scalability Matters</h2>
          <p>
            Building web applications is one thing. Building web applications that can handle exponential growth is another. Scalability isn't just about technical prowess—it's about understanding your users, anticipating growth, and making architectural decisions that allow your application to breathe as it expands.
          </p>
          <p>
            When you launch your application, you might have 100 users. Six months later, you could have 100,000. The question isn't whether your infrastructure can handle it—it's whether your architecture can.
          </p>

          <h2 id="understanding-the-layers-of-scalability">Understanding the Layers of Scalability</h2>
          <p>
            Scalability happens across multiple layers of your application:
          </p>
          <ul>
            <li><strong>Frontend Scalability:</strong> Serving assets quickly to users across the globe</li>
            <li><strong>API Scalability:</strong> Handling thousands of concurrent requests</li>
            <li><strong>Database Scalability:</strong> Managing massive datasets efficiently</li>
            <li><strong>Infrastructure Scalability:</strong> Automatically provisioning resources based on demand</li>
          </ul>

          <h2 id="frontend-optimization-strategies">Frontend Optimization Strategies</h2>
          <p>
            Next.js provides excellent tools for frontend optimization out of the box. Let's explore key strategies:
          </p>

          <h3>Code Splitting</h3>
          <p>
            Next.js automatically code-splits at the page level. Each page only loads the JavaScript it needs:
          </p>
          <pre><code>{`// pages/products.tsx
// This component only loads when users navigate to /products
export default function Products() {
  // Component code
}`}</code></pre>

          <h3>Image Optimization</h3>
          <p>
            Use the Next.js Image component for automatic optimization:
          </p>
          <pre><code>{`import Image from 'next/image'

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
      quality={85}
    />
  )
}`}</code></pre>

          <h2 id="backend-architecture-patterns">Backend Architecture Patterns</h2>
          <p>
            A scalable backend requires careful architecture. Here are key patterns:
          </p>

          <h3>Microservices Architecture</h3>
          <p>
            Break your monolith into smaller, focused services. Each can scale independently based on demand.
          </p>

          <h3>API Rate Limiting</h3>
          <p>
            Protect your API from overload:
          </p>
          <pre><code>{`// API route with rate limiting
import { Ratelimit } from '@upstash/ratelimit'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, '1 h'),
})

export async function GET(request: Request) {
  const { success } = await ratelimit.limit('api-key')
  
  if (!success) {
    return new Response('Too many requests', { status: 429 })
  }
  
  // Process request
}`}</code></pre>

          <h2 id="database-scaling-techniques">Database Scaling Techniques</h2>
          <p>
            Your database is often the bottleneck. Here's how to scale it:
          </p>

          <ul>
            <li><strong>Indexing:</strong> Add indexes on frequently queried columns</li>
            <li><strong>Query Optimization:</strong> Avoid N+1 queries, use batch operations</li>
            <li><strong>Read Replicas:</strong> Distribute read traffic across multiple replicas</li>
            <li><strong>Sharding:</strong> Horizontally partition data across multiple databases</li>
          </ul>

          <h2 id="caching-strategies">Caching Strategies</h2>
          <p>
            Caching is one of the most effective scalability tools:
          </p>

          <h3>Client-Side Caching</h3>
          <pre><code>{`// Service Worker for offline support
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})`}</code></pre>

          <h3>Server-Side Caching with Redis</h3>
          <pre><code>{`import redis from 'redis'

const client = redis.createClient()

export async function GET(request: Request) {
  const cached = await client.get('users:all')
  
  if (cached) {
    return Response.json(JSON.parse(cached))
  }
  
  const users = await db.user.findMany()
  await client.setEx('users:all', 3600, JSON.stringify(users))
  
  return Response.json(users)
}`}</code></pre>

          <h2 id="monitoring-and-observability">Monitoring and Observability</h2>
          <p>
            You can't optimize what you don't measure. Implement comprehensive monitoring:
          </p>

          <ul>
            <li><strong>APM Tools:</strong> New Relic, DataDog, or Sentry for application performance</li>
            <li><strong>Real User Monitoring:</strong> Track actual user experience metrics</li>
            <li><strong>Database Monitoring:</strong> Query performance, slow queries, index usage</li>
            <li><strong>Infrastructure Monitoring:</strong> CPU, memory, network, disk I/O</li>
          </ul>

          <h2 id="real-world-implementation">Real-World Implementation</h2>
          <p>
            Let's look at a real-world example. Imagine you're building a SaaS platform that needs to handle growth from thousands to millions of users:
          </p>

          <ol>
            <li><strong>Phase 1 (0-10K users):</strong> Single Next.js server, PostgreSQL database</li>
            <li><strong>Phase 2 (10K-100K):</strong> Separate API servers, database read replicas</li>
            <li><strong>Phase 3 (100K-1M):</strong> Microservices, Redis caching, database sharding</li>
            <li><strong>Phase 4 (1M+):</strong> Full CQRS pattern, event streaming, distributed system</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Building scalable applications doesn't require perfection from day one. It requires understanding your architecture, anticipating growth, and making intentional decisions about where to optimize.
          </p>
          <p>
            Start simple, measure carefully, and scale when needed. That's the path to building applications that can grow with your users.
          </p>
        </div>

        {/* Engagement Section */}
        <div className="py-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition text-red-600 dark:text-red-400">
              <ThumbsUp size={20} />
              <span className="text-sm font-medium">5.2K</span>
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
              Rajeev Ranjan Sinha is a full-stack engineer with 10+ years of experience building scalable web applications. He specializes in JavaScript/TypeScript, cloud architecture, and system design. Follow him on <a href="https://twitter.com" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a> for more insights.
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
        <div className="py-12 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-6">Related Articles</h3>
          <div className="grid gap-6">
            {relatedArticles.map((article) => (
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
      </article>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Get more articles like this</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Subscribe to my newsletter for in-depth articles, quick tips, and insights on web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Subscribe
            </button>
          </div>
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