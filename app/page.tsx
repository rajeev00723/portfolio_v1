import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, BookOpen, Zap, Sparkles, Code2, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  // Tech stack
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'from-black to-zinc-700 dark:from-white dark:to-zinc-300' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', icon: '🟩', color: 'from-green-600 to-green-800' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-900' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
    { name: 'GraphQL', icon: '◆', color: 'from-pink-500 to-purple-600' },
  ]

  // External platform links
  const platforms = [
    { name: 'GitHub', url: 'https://github.com/rajeev00723', icon: '🐙', color: 'hover:text-gray-700 dark:hover:text-gray-400' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rajeevranjansinha/', icon: '💼', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Substack', url: 'https://rajeevranjansinha.substack.com/', icon: '📮', color: 'hover:text-orange-600 dark:hover:text-orange-400' },
    { name: 'Medium', url: 'https://medium.com/@raj.ranjan.sinha', icon: '✍️', color: 'hover:text-slate-700 dark:hover:text-slate-400' },
  ]

  // Featured projects
  const projects = [
    {
      id: 1,
      title: 'Scalable E-Commerce Platform',
      description: 'Built a high-performance e-commerce platform handling 10k+ concurrent users with real-time inventory management.',
      image: '🛍️',
      tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
      link: '#',
      github: 'https://github.com/rajeev00723',
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'Full-stack solution with WebSocket integration for real-time data processing and visualization.',
      image: '📊',
      tags: ['Node.js', 'GraphQL', 'WebSocket', 'D3.js', 'AWS'],
      link: '#',
      github: 'https://github.com/rajeev00723',
    },
    {
      id: 3,
      title: 'AI-Powered Content Generator',
      description: 'Integrated OpenAI API with custom fine-tuning for domain-specific content generation.',
      image: '🤖',
      tags: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'PostgreSQL'],
      link: '#',
      github: 'https://github.com/rajeev00723',
    },
    {
      id: 4,
      title: 'FIFA Hobby Project',
      description: 'A unique football analytics and strategy dashboard with an API-first backend, PostgreSQL storage, and Docker-powered local orchestration for immersive match insights.',
      image: '⚽',
      tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
      link: 'https://fifa.rajeevbuilds.dev/,
      github: 'https://github.com/rajeev00723/fifa',
    },
  ]

  // Detailed articles
  const detailedArticles = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with Next.js and TypeScript',
      excerpt: 'Learn how to architect modern web applications that can scale to millions of users. We\'ll explore code splitting, server-side rendering, API optimization, and database scaling strategies.',
      date: 'May 22, 2026',
      readTime: '15 min read',
      slug: 'building-scalable-nextjs',
      category: 'Backend',
      tags: ['Next.js', 'TypeScript', 'Architecture', 'Performance'],
      type: 'detailed',
    },
    {
      id: 2,
      title: 'The Future of Frontend Development: AI-Assisted Coding',
      excerpt: 'Exploring how AI tools are transforming frontend development. From code generation to automated testing, discover what\'s next in the web development landscape.',
      date: 'May 15, 2026',
      readTime: '12 min read',
      slug: 'future-frontend-ai',
      category: 'Frontend',
      tags: ['AI', 'Frontend', 'Tools', 'Trends'],
      type: 'detailed',
    },
    {
      id: 3,
      title: 'React Performance Optimization: From Concept to Production',
      excerpt: 'Master advanced performance optimization techniques. Learn about React.memo, useMemo, useCallback, code splitting, lazy loading, and measuring real-world performance metrics.',
      date: 'May 8, 2026',
      readTime: '18 min read',
      slug: 'react-performance-guide',
      category: 'React',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
      type: 'detailed',
    },
  ]

  // Quick tips
  const tipsAndTricks = [
    {
      id: 1,
      title: 'CSS Grid Auto-Fit: Responsive Layouts Without Media Queries',
      excerpt: 'Create responsive grid layouts automatically with CSS Grid\'s auto-fit property. No breakpoints needed!',
      date: 'May 20, 2026',
      slug: 'css-grid-autofit',
      category: 'CSS',
      tags: ['CSS', 'Web Design', 'Tips'],
      type: 'tip',
    },
    {
      id: 2,
      title: 'React Hooks: useCallback vs useMemo Explained',
      excerpt: 'The difference between useCallback and useMemo can be confusing. Here\'s a quick guide with real examples.',
      date: 'May 18, 2026',
      slug: 'react-hooks-comparison',
      category: 'React',
      tags: ['React', 'Hooks', 'Performance'],
      type: 'tip',
    },
    {
      id: 3,
      title: 'Git Trick: Undo Your Last Commit Without Losing Changes',
      excerpt: 'Made a mistake in your last commit? Use git reset --soft HEAD~1 to undo it while keeping your changes.',
      date: 'May 16, 2026',
      slug: 'git-reset-trick',
      category: 'Git',
      tags: ['Git', 'CLI', 'Workflow'],
      type: 'tip',
    },
    {
      id: 4,
      title: 'Terminal Productivity: Create Aliases for Frequent Commands',
      excerpt: 'Save hours of typing by creating shell aliases for long commands. Simple but incredibly effective.',
      date: 'May 12, 2026',
      slug: 'terminal-aliases',
      category: 'Terminal',
      tags: ['Terminal', 'Productivity', 'CLI'],
      type: 'tip',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Paste logo SVG code here */}
            </svg>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
              About
            </Link>
            <Link href="#projects" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="#articles" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
              Articles
            </Link>
            <Link href="/blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
              Blog
            </Link>
          </div>
          <div className="hidden sm:flex gap-3">
            <a href="https://github.com/rajeev00723" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
              <Github size={20} className="text-zinc-600 dark:text-zinc-400" />
            </a>
            <a href="https://www.linkedin.com/in/rajeevranjansinha/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition">
              <Linkedin size={20} className="text-zinc-600 dark:text-zinc-400" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logos/logo.svg"
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              Full Stack Engineer & Technical Writer
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 dark:text-white leading-tight">
                Rajeev Ranjan Sinha
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                Building scalable web applications and sharing knowledge through technical writing.
              </p>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I specialize in modern JavaScript/TypeScript, cloud architecture, and system design. Passionate about creating elegant solutions to complex problems and helping developers grow.
            </p>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 4).map((tech) => (
                  <span key={tech.name} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium">
                    {tech.icon} {tech.name}
                  </span>
                ))}
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium">
                  +4 more
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:gap-3 transition-all font-medium"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:raj.ranjan.sinha@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
              >
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Profile Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Rajeev Sinha"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-900 rounded-full p-4 shadow-lg border border-zinc-200 dark:border-zinc-800">
                <div className="text-center">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">20+</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Years Exp.</p>
                </div>
              </div>

              {/* Social proof */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-lg px-3 py-2 inline-flex items-center gap-2 shadow-lg">
                  <span className="text-xl"></span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Expertise Section */}
      <section id="about" className="bg-zinc-50 dark:bg-zinc-900 py-20 sm:py-32 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Expertise */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-600 dark:text-blue-400" size={28} />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Development</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Full-stack development with React, Node.js, and modern JavaScript. Specializing in performance optimization and scalable architectures.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  Frontend & Backend Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  API Design & Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">→</span>
                  Database Design & Optimization
                </li>
              </ul>
            </div>

            {/* Writing */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-purple-600 dark:text-purple-400" size={28} />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Technical Writing</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                In-depth articles on web development, system design, and best practices. Published on Substack and Medium with a growing audience.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">→</span>
                  Architecture & Design Patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">→</span>
                  Performance & Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">→</span>
                  Quick Tips & Tricks
                </li>
              </ul>
            </div>

            {/* Speaking/Mentoring */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-green-600 dark:text-green-400" size={28} />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Community</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Mentoring developers, speaking at tech events, and contributing to open source projects.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">→</span>
                  1-on-1 Mentoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">→</span>
                  Open Source Contributions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">→</span>
                  Technical Blogging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-zinc-900 dark:text-white">Featured Projects</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A selection of projects showcasing my expertise in full-stack development and system design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-xl/10 transition"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-medium"
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles & Tips Section */}
      <section id="articles" className="bg-white dark:bg-zinc-900 py-20 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-zinc-900 dark:text-white">Latest Content</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              In-depth articles and quick tips on web development, architecture, and best practices.
            </p>
          </div>

          {/* Detailed Articles */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={28} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Detailed Articles</h3>
            </div>

            <div className="grid gap-6 mb-8">
              {detailedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group block p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {article.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 transition mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-700">
                    <time>{article.date}</time>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-medium">
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
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Quick Tips & Tricks</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {tipsAndTricks.map((tip) => (
                <Link
                  key={tip.id}
                  href={`/blog/${tip.slug}`}
                  className="group p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition flex flex-col"
                >
                  <h4 className="font-bold text-sm mb-2 text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition line-clamp-2">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 flex-1">
                    {tip.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-700">
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">{tip.date}</span>
                    <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded text-xs font-medium">
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

      {/* Social Links */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-12 border-t border-zinc-200 dark:border-zinc-800">
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
                className={`group px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-800 transition ${platform.color}`}
              >
                <span className="mr-2">{platform.icon}</span>
                <span className="font-medium text-sm text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 dark:bg-black text-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-yellow-400" size={40} />
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects, collaborations, and opportunities to share knowledge.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:raj.ranjan.sinha@gmail.com"
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
                <Link href="/" className="hover:text-white transition">Home</Link>
                <Link href="#projects" className="block hover:text-white transition">Projects</Link>
                <Link href="/blog" className="block hover:text-white transition">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://github.com/rajeev00723" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">GitHub</a>
                <a href="https://www.linkedin.com/in/rajeevranjansinha/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">LinkedIn</a>
                <a href="mailto:raj.ranjan.sinha@gmail.com" className="block hover:text-white transition">Email</a>
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
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logos/logo.svg"
                alt="RRS Logo"
                width={30}
                height={30}
              />
              <span className="text-sm">© 2026 RRS</span>
            </Link>
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