import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A modern web application built with React and Next.js',
      image: '🎨',
      tags: ['Next.js', 'React', 'TypeScript'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Full-stack solution with real-time data processing',
      image: '⚡',
      tags: ['Node.js', 'PostgreSQL', 'WebSocket'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Mobile-first design system and component library',
      image: '🎭',
      tags: ['Design System', 'Storybook', 'CSS'],
      link: '#',
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications',
      excerpt: 'Exploring best practices for architecting modern web applications...',
      date: 'May 15, 2026',
      readTime: '8 min read',
      slug: 'scalable-web-apps',
    },
    {
      id: 2,
      title: 'The Future of Frontend Development',
      excerpt: 'A deep dive into emerging trends and technologies shaping the web...',
      date: 'May 8, 2026',
      readTime: '12 min read',
      slug: 'future-frontend',
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Practical techniques to boost your React application performance...',
      date: 'April 30, 2026',
      readTime: '10 min read',
      slug: 'react-performance',
    },
  ]

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
            <Link href="/blog" className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400 transition">
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
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
            Welcome to my digital space
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-serif font-bold leading-tight">
            Crafting digital experiences with code and creativity
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm a full-stack developer passionate about building elegant solutions to complex problems. 
            Here you'll find my projects, thoughts on development, and insights on web technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:gap-3 transition-all font-medium"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-zinc-900 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              A selection of recent projects showcasing my expertise in modern web development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-xl/10 transition"
              >
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2">
              View all <ArrowRight size={18} />
            </Link>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Thoughts on web development, technology trends, and lessons learned.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {post.title}
                </h3>
                <ExternalLink size={18} className="text-zinc-400 flex-shrink-0" />
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-900 dark:bg-zinc-950 text-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-zinc-900 rounded-lg hover:bg-zinc-100 transition font-medium"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-zinc-400 text-sm">
            <p>© 2026 Rajeev Ranjan Sinha. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
