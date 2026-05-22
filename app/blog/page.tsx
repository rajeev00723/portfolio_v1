import Link from 'next/link'
import { ArrowLeft, BookOpen, Zap, Search } from 'lucide-react'

export const metadata = {
  title: 'Blog | Rajeev Ranjan Sinha',
  description: 'In-depth articles and quick tips on web development, JavaScript, React, and software engineering.',
}

export default function BlogPage() {
  // Detailed articles
  const detailedArticles = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'A comprehensive guide to architecting modern web applications that can grow with your business. Learn about code splitting, dynamic imports, and optimization strategies.',
      date: 'May 15, 2026',
      readTime: '12 min read',
      slug: 'scalable-nextjs-apps',
      category: 'Backend',
      type: 'detailed',
    },
    {
      id: 2,
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring emerging trends and technologies shaping the web development landscape. From AI-assisted coding to new CSS features, see what\'s next.',
      date: 'May 8, 2026',
      readTime: '10 min read',
      slug: 'future-frontend-2026',
      category: 'Frontend',
      type: 'detailed',
    },
    {
      id: 3,
      title: 'React Performance Optimization Guide',
      excerpt: 'Master practical techniques to boost your React application performance. Includes profiling, memoization, code splitting, and real-world examples.',
      date: 'April 30, 2026',
      readTime: '15 min read',
      slug: 'react-performance-guide',
      category: 'React',
      type: 'detailed',
    },
    {
      id: 4,
      title: 'Understanding Web Security Fundamentals',
      excerpt: 'Essential security concepts every web developer should know to protect user data. XSS, CSRF, SQL injection, and mitigation strategies explained.',
      date: 'April 18, 2026',
      readTime: '11 min read',
      slug: 'web-security-fundamentals',
      category: 'Security',
      type: 'detailed',
    },
    {
      id: 5,
      title: 'TypeScript Best Practices',
      excerpt: 'A comprehensive guide to adopting TypeScript in your JavaScript projects. Covers types, interfaces, generics, and real-world patterns.',
      date: 'April 5, 2026',
      readTime: '9 min read',
      slug: 'typescript-best-practices',
      category: 'TypeScript',
      type: 'detailed',
    },
  ]

  // Tips and tricks
  const tipsAndTricks = [
    {
      id: 1,
      title: 'Use CSS Grid for Complex Layouts',
      excerpt: 'CSS Grid\'s auto-fit property creates responsive layouts without media queries. Quick implementation example included.',
      date: 'May 20, 2026',
      slug: 'css-grid-autofill',
      category: 'CSS',
      type: 'tip',
    },
    {
      id: 2,
      title: 'React Hook: useCallback vs useMemo',
      excerpt: 'The key difference: useCallback memoizes functions, useMemo memoizes values. Use wisely!',
      date: 'May 18, 2026',
      slug: 'react-hooks-memo',
      category: 'React',
      type: 'tip',
    },
    {
      id: 3,
      title: 'Git Trick: Undo Last Commit',
      excerpt: 'Made a mistake? Use `git reset --soft HEAD~1` to undo the last commit but keep your changes.',
      date: 'May 16, 2026',
      slug: 'git-reset-trick',
      category: 'Git',
      type: 'tip',
    },
    {
      id: 4,
      title: 'Terminal Speed Hack: Aliases',
      excerpt: 'Create shortcuts for long commands: alias ll="ls -lah" and save hours of typing.',
      date: 'May 12, 2026',
      slug: 'terminal-aliases',
      category: 'Terminal',
      type: 'tip',
    },
    {
      id: 5,
      title: 'VSCode Extension: Thunder Client',
      excerpt: 'Test APIs directly in VSCode without leaving your editor. Better than Postman for quick debugging.',
      date: 'May 10, 2026',
      slug: 'vscode-thunder-client',
      category: 'Tools',
      type: 'tip',
    },
    {
      id: 6,
      title: 'npm Trick: npx to Run Without Install',
      excerpt: 'Run npm packages without installing them globally: npx create-react-app my-app. Works for any package!',
      date: 'May 8, 2026',
      slug: 'npx-trick',
      category: 'npm',
      type: 'tip',
    },
    {
      id: 7,
      title: 'Chrome DevTools: Network Throttling',
      excerpt: 'Simulate slow networks to test your app performance. Go to DevTools → Network → Throttle selector.',
      date: 'May 5, 2026',
      slug: 'devtools-network-throttle',
      category: 'DevTools',
      type: 'tip',
    },
    {
      id: 8,
      title: 'JavaScript: Destructuring in Function Params',
      excerpt: 'Simplify function parameters with destructuring: function({name, age}) instead of function(user).',
      date: 'May 1, 2026',
      slug: 'js-destructuring-params',
      category: 'JavaScript',
      type: 'tip',
    },
  ]

  const allArticles = detailedArticles
  const allTips = tipsAndTricks
  const allContent = [...detailedArticles, ...tipsAndTricks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif">
            RS
          </Link>
          <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2">
            <ArrowLeft size={16} /> Back Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-serif font-bold">
            Blog & Resources
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Deep dives into web development, architecture, and the evolving landscape of modern technology. Also includes quick tips and tricks to level up your coding skills.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Search size={18} />
            <span>Explore {allContent.length} posts across multiple platforms</span>
          </div>
        </div>
      </section>

      {/* Content Type Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center gap-2"
          >
            <span>📚 All Content</span>
          </Link>
          <Link
            href="/blog?type=detailed"
            className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition flex items-center gap-2"
          >
            <BookOpen size={16} /> Detailed Articles
          </Link>
          <Link
            href="/blog?type=tips"
            className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition flex items-center gap-2"
          >
            <Zap size={16} /> Quick Tips
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Detailed Articles Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <BookOpen size={28} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold">In-Depth Articles</h2>
          </div>

          <div className="space-y-6">
            {allArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-xl/10 hover:bg-white dark:hover:bg-zinc-800/50 transition"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tips & Tricks Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <Zap size={28} className="text-amber-600 dark:text-amber-400" />
            <h2 className="text-3xl font-bold">Quick Tips & Tricks</h2>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 ml-auto">
              {allTips.length} quick reads
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTips.map((tip) => (
              <Link
                key={tip.id}
                href={`/blog/${tip.slug}`}
                className="group p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition flex flex-col"
              >
                <h4 className="font-bold text-base mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition line-clamp-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 flex-1">
                  {tip.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-700">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">{tip.date}</span>
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded text-xs font-medium">
                    {tip.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External Platforms CTA */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Read On Other Platforms</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            I publish articles on multiple platforms. Follow for more content and insights.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://rajeevranjansinha.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-orange-400 dark:hover:border-orange-600 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">📮</div>
              <h4 className="font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Substack
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                Weekly newsletters & articles
              </p>
            </a>

            <a
              href="https://medium.com/@raj.ranjan.sinha"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-slate-700 dark:hover:border-slate-500 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">✍️</div>
              <h4 className="font-bold group-hover:text-slate-700 dark:group-hover:text-slate-400 transition">
                Medium
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                Technical stories & guides
              </p>
            </a>

            <a
              href="https://github.com/rajeev00723"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-gray-700 dark:hover:border-gray-500 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">🐙</div>
              <h4 className="font-bold group-hover:text-gray-700 dark:group-hover:text-gray-400 transition">
                GitHub
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                Code examples & projects
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/rajeevranjansinha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                LinkedIn
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                Professional updates
              </p>
            </a>
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