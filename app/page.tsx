import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, BookOpen, Zap, Plus } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  // External platform links
  const platforms = [
    { name: 'GitHub', url: 'https://github.com/rajeev00723', icon: '🐙', color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rajeevranjansinha/', icon: '💼', color: 'from-blue-600 to-blue-800' },
    { name: 'Substack', url: 'https://rajeevranjansinha.substack.com/', icon: '📮', color: 'from-orange-600 to-orange-800' },
    { name: 'Medium', url: 'https://medium.com/@raj.ranjan.sinha', icon: '✍️', color: 'from-slate-700 to-slate-900' },
  ]

  // Detailed articles (long-form)
  const detailedArticles = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'A comprehensive guide to architecting modern web applications that can grow with your business. Learn about code splitting, dynamic imports, and optimization strategies.',
      date: 'May 15, 2026',
      readTime: '12 min read',
      slug: 'scalable-nextjs-apps',
      category: 'Backend',
      platform: 'blog', // your blog
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
      platform: 'blog',
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
      platform: 'blog',
      type: 'detailed',
    },
  ]

  // Tips & tricks (short-form)
  const tipsAndTricks = [
    {
      id: 1,
      title: 'Use CSS Grid for Complex Layouts',
      excerpt: 'A quick tip: CSS Grid\'s auto-fit property creates responsive layouts without media queries.',
      date: 'May 20, 2026',
      slug: 'css-grid-autofill',
      category: 'CSS',
      platform: 'blog',
      type: 'tip',
    },
    {
      id: 2,
      title: 'React Hook: useCallback vs useMemo',
      excerpt: 'The key difference: useCallback memoizes functions, useMemo memoizes values. Use wisely!',
      date: 'May 18, 2026',
      slug: 'react-hooks-memo',
      category: 'React',
      platform: 'blog',
      type: 'tip',
    },
    {
      id: 3,
      title: 'Git Trick: Undo Last Commit',
      excerpt: 'Made a mistake? Use `git reset --soft HEAD~1` to undo the last commit but keep your changes.',
      date: 'May 16, 2026',
      slug: 'git-reset-trick',
      category: 'Git',
      platform: 'blog',
      type: 'tip',
    },
    {
      id: 4,
      title: 'Terminal Speed Hack: Aliases',
      excerpt: 'Create shortcuts for long commands: alias ll="ls -lah" and save hours of typing.',
      date: 'May 12, 2026',
      slug: 'terminal-aliases',
      category: 'Terminal',
      platform: 'blog',
      type: 'tip',
    },
  ]

  // Featured projects
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern Next.js portfolio with integrated blog and social feeds.',
      image: '🎨',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      link: 'https://rajeevranjansinha.com',
      github: 'https://github.com/rajeev00723/portfolio',
    },
    {
      id: 2,
      title: 'Open Source Project',
      description: 'Contributing to making development tools better.',
      image: '⚡',
      tags: ['Node.js', 'Open Source', 'CLI'],
      link: '#',
      github: 'https://github.com/rajeev00723',
    },
    {
      id: 3,
      title: 'React Component Library',
      description: 'Reusable, accessible UI components for modern web apps.',
      image: '🎭',
      tags: ['React', 'Storybook', 'TypeScript'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif">
            RS
          </Link>
          <div className="hidden sm:flex gap-8">
            <Link href="#about" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              Projects
            </Link>
            <Link href="#articles" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              Articles
            </Link>
            <Link href="/blog" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
              Blog
            </Link>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="https://github.com/rajeev00723" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rajeevranjansinha/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              Full Stack Developer & Technical Writer
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif font-bold leading-tight">
              Rajeev Ranjan Sinha
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I build elegant web applications and share knowledge through technical writing. Passionate about clean code, scalable architecture, and helping developers grow.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:gap-3 transition-all font-medium"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Placeholder for profile picture - replace with your image */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-7xl mb-4">👤</div>
                  <p className="text-white text-sm font-medium">Your Profile Picture</p>
                  <p className="text-white/80 text-xs mt-2">Replace with your image</p>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-zinc-100 dark:bg-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-6">
            Follow & Connect
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-800 transition"
              >
                <span className="mr-2">{platform.icon}</span>
                <span className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A selection of projects showcasing my expertise in modern web development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-xl/10 transition"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles & Tips Section */}
      <section id="articles" className="bg-white dark:bg-zinc-900 py-20 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Latest Content</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              In-depth articles and quick tips on web development, architecture, and best practices.
            </p>
          </div>

          {/* Detailed Articles */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={28} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold">Detailed Articles</h3>
            </div>

            <div className="grid gap-6 mb-8">
              {detailedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {article.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-700">
                    <time>{article.date}</time>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog?type=detailed"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all articles <ArrowRight size={18} />
            </Link>
          </div>

          {/* Tips & Tricks */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <Zap size={28} className="text-amber-600 dark:text-amber-400" />
              <h3 className="text-2xl font-bold">Quick Tips & Tricks</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {tipsAndTricks.map((tip) => (
                <Link
                  key={tip.id}
                  href={`/blog/${tip.slug}`}
                  className="group p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition"
                >
                  <h4 className="font-bold text-sm mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition line-clamp-2">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                    {tip.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-700">
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">{tip.date}</span>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded text-xs">
                      {tip.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/blog?type=tips"
              className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:underline font-medium"
            >
              View all tips <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* External Platforms Integration Info */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8">Published On</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-800 transition text-center"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {platform.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                  Articles & Updates
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 dark:bg-black text-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, collaborations, and opportunities to share knowledge.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-lg hover:bg-zinc-100 transition font-medium text-lg"
            >
              <Mail size={20} /> Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/rajeevranjansinha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white rounded-lg hover:bg-white/10 transition font-medium text-lg"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Navigation</h4>
              <div className="space-y-2 text-sm">
                <Link href="#about" className="hover:text-white transition">About</Link>
                <Link href="#projects" className="block hover:text-white transition">Projects</Link>
                <Link href="/blog" className="block hover:text-white transition">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://github.com/rajeev00723" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">GitHub</a>
                <a href="https://www.linkedin.com/in/rajeevranjansinha/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">LinkedIn</a>
                <a href="mailto:your@email.com" className="block hover:text-white transition">Email</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Platforms</h4>
              <div className="space-y-2 text-sm">
                <a href="https://rajeevranjansinha.substack.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Substack</a>
                <a href="https://medium.com/@raj.ranjan.sinha" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">Medium</a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">© 2026 Rajeev Ranjan Sinha. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}