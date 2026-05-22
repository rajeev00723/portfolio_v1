export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'css-grid-autofill',
    title: 'CSS Grid Auto-Fit: Responsive Layouts Without Media Queries',
    excerpt: 'Create responsive grid layouts automatically with CSS Grid\'s auto-fit property. No breakpoints needed!',
    date: 'May 20, 2026',
    readTime: '5 min read',
    category: 'CSS',
    tags: ['CSS', 'Web Design', 'Responsive'],
    content: `## The Problem with Traditional Responsive Design

For years, we've relied on media queries to create responsive layouts. While media queries work perfectly, they can become complex and unmaintainable as your designs scale.

## Enter CSS Grid Auto-Fit

CSS Grid's auto-fit property allows you to create responsive grids without a single media query. It's elegant, flexible, and works beautifully across all modern browsers.

## How It Works

The auto-fit property automatically fits as many grid items as possible into the available space. Here's a basic example:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

This creates a grid where each item is at least 300px wide, and items automatically wrap to the next row based on available space.

## Breakdown of the Properties

- **repeat():** Repeats the pattern
- **auto-fit:** Automatically fits items into available space
- **minmax(300px, 1fr):** Minimum 300px, maximum 1 fraction of available space

## Real World Examples

Perfect use cases for auto-fit:
- Product grids in e-commerce stores
- Portfolio galleries
- Image showcases
- Card-based layouts
- Team member displays

## Browser Support

CSS Grid is supported in all modern browsers. Check caniuse.com for specific version requirements. As of 2026, it's safe to use without fallbacks.

## Comparison: Auto-Fit vs Auto-Fill

Two similar properties exist:
- **auto-fit:** Collapses empty tracks
- **auto-fill:** Keeps empty tracks

For most use cases, auto-fit is the better choice.

## Conclusion

Using CSS Grid's auto-fit property is a powerful way to create responsive layouts without bloating your CSS with media queries. It's a modern, elegant solution to responsive design that scales beautifully.`,
  },
  {
    id: '2',
    slug: 'react-hooks-comparison',
    title: 'React Hooks: useCallback vs useMemo',
    excerpt: 'The key difference: useCallback memoizes functions, useMemo memoizes values. Use wisely!',
    date: 'May 18, 2026',
    readTime: '4 min read',
    category: 'React',
    tags: ['React', 'Hooks', 'Performance'],
    content: `## Understanding React Hooks for Performance

React provides powerful hooks for optimizing component performance. Among the most misunderstood are useCallback and useMemo. Let's break down the differences.

## useCallback: Memoizing Functions

useCallback returns a memoized callback function. Use it when you need to pass a stable function reference to child components.

\`\`\`javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

When to use:
- Passing callbacks to optimized child components
- Avoiding unnecessary re-renders in child components
- Using with React.memo for performance optimization

## useMemo: Memoizing Values

useMemo returns a memoized value. Use it to avoid expensive computations on every render.

\`\`\`javascript
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b],
);
\`\`\`

When to use:
- Avoiding expensive calculations
- Creating object references that need to be stable
- Optimizing complex renders

## Key Differences

| Aspect | useCallback | useMemo |
|--------|------------|---------|
| Memoizes | Functions | Values |
| Returns | Function | Any value |
| Use case | Callbacks | Computations |
| Performance | Prevents re-renders | Avoids recalculation |

## Real World Example

\`\`\`javascript
function Parent() {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);

  // Memoized value
  const expensiveList = useMemo(() => {
    return items.filter(item => item.active);
  }, [items]);

  return <Child onClick={handleClick} list={expensiveList} />;
}
\`\`\`

## Common Mistakes

1. Using them without profiling
2. Adding everything to dependencies
3. Using when not needed
4. Not understanding closure

## When NOT to Use

These hooks have a performance cost. Only use when:
- You've profiled and found performance issues
- Passing to child components with React.memo
- Computing expensive values

## Conclusion

useCallback and useMemo are powerful optimization tools, but they're not silver bullets. Use them wisely, profile your code, and optimize where it matters.`,
  },
  {
    id: '3',
    slug: 'git-reset-trick',
    title: 'Git Trick: Undo Your Last Commit Without Losing Changes',
    excerpt: 'Made a mistake in your last commit? Use git reset --soft HEAD~1 to undo it while keeping your changes.',
    date: 'May 16, 2026',
    readTime: '3 min read',
    category: 'Git',
    tags: ['Git', 'CLI', 'Workflow'],
    content: `## The Scenario

You've just committed code but realized:
- You forgot to add a file
- You made a typo in the commit message
- You committed to the wrong branch
- You included unwanted changes

Don't panic! Git provides the perfect solution.

## The Magic Command

\`\`\`bash
git reset --soft HEAD~1
\`\`\`

This command:
- Undoes the last commit
- Keeps all your changes staged
- Preserves your work
- Lets you fix and recommit

## Breaking It Down

- **git reset:** Resets the repository
- **--soft:** Keeps changes in staging area
- **HEAD~1:** Refers to the commit before HEAD

## Step-by-Step Example

\`\`\`bash
# You've just committed
$ git log -1
commit abc123 "Fix typo"

# Realize you need to change something
$ git reset --soft HEAD~1

# Your files are now unstaged but unchanged
$ git status
Changes not staged for commit:
  modified: file.js

# Fix whatever you need
# Then recommit
$ git add .
$ git commit -m "Fix typo - correct message"
\`\`\`

## Other Useful Reset Options

- **git reset --soft:** Keep changes, undo commit
- **git reset --mixed:** Default, unstage changes
- **git reset --hard:** Lose everything (careful!)

## If You've Already Pushed

If you pushed before realizing the mistake:

\`\`\`bash
# Reset locally
git reset --soft HEAD~1

# Fix and recommit
git add .
git commit -m "Better message"

# Force push (use carefully!)
git push --force-with-lease
\`\`\`

## Pro Tips

1. **Use --force-with-lease** instead of --force
   - Safer for collaborative work
   - Won't overwrite teammates' changes

2. **You can undo multiple commits**
   - git reset --soft HEAD~3 (last 3 commits)

3. **Check git reflog if things go wrong**
   - Shows all recent changes
   - Can recover "lost" commits

## Conclusion

The git reset --soft command is your friend. It lets you fix commits without losing work. Master this and you'll be unstoppable!`,
  },
  {
    id: '4',
    slug: 'terminal-aliases',
    title: 'Terminal Productivity: Create Aliases for Frequent Commands',
    excerpt: 'Save hours of typing by creating shell aliases for long commands. Simple but incredibly effective.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    category: 'Terminal',
    tags: ['Terminal', 'Productivity', 'CLI'],
    content: `## Stop Typing Long Commands

We all have that one command we type dozens of times a day. Terminal aliases are the solution.

## What Are Aliases?

Aliases are shortcuts for longer commands. Instead of typing a long command, you type a short alias.

## Creating Aliases

### Temporary Alias (Current Session Only)

\`\`\`bash
alias ll='ls -lah'
\`\`\`

Now type 'll' instead of 'ls -lah'.

### Permanent Alias (All Sessions)

Edit your shell configuration file:

**For Bash:**
\`\`\`bash
# Edit ~/.bashrc
alias ll='ls -lah'
alias gs='git status'
alias gc='git commit'
alias ga='git add'
alias gp='git push'
\`\`\`

**For Zsh:**
\`\`\`bash
# Edit ~/.zshrc
alias ll='ls -lah'
alias gs='git status'
\`\`\`

**For Fish:**
\`\`\`bash
# Edit ~/.config/fish/config.fish
alias ll 'ls -lah'
alias gs 'git status'
\`\`\`

## Real World Examples

### Git Aliases

\`\`\`bash
alias gs='git status'
alias gc='git commit -m'
alias ga='git add .'
alias gp='git push'
alias gpl='git pull'
alias gl='git log --oneline -10'
alias gb='git branch'
alias gd='git diff'
\`\`\`

### Development Aliases

\`\`\`bash
alias dev='npm run dev'
alias build='npm run build'
alias test='npm test'
alias start='npm start'
alias ll='ls -lah'
alias cd..='cd ..'
alias ..='cd ..'
\`\`\`

### Project Shortcuts

\`\`\`bash
alias myproject='cd ~/projects/myproject && code .'
alias blog='cd ~/projects/portfolio && npm run dev'
\`\`\`

## Advanced: Functions as Aliases

For more complex shortcuts, use functions:

\`\`\`bash
# Create a new Next.js project
newapp() {
  npx create-next-app@latest "$1" --typescript
}

# Usage:
# newapp my-project
\`\`\`

## Checking Your Aliases

\`\`\`bash
# List all aliases
alias

# Check specific alias
alias gs

# Remove an alias
unalias gs
\`\`\`

## Pro Tips

1. **Keep common aliases short**
   - 'll' instead of 'lah'
   - 'gs' instead of 'git status'

2. **Be consistent across projects**
   - Use same aliases everywhere
   - Build muscle memory

3. **Document your aliases**
   - Add comments to your config file
   - Share with team for consistency

4. **Don't alias dangerous commands**
   - Don't alias 'rm' to something shorter
   - Safety first!

## Reload Aliases After Changes

\`\`\`bash
# Bash
source ~/.bashrc

# Zsh
source ~/.zshrc

# Fish
source ~/.config/fish/config.fish
\`\`\`

## Productivity Impact

With 10 aliases used 5 times daily:
- Time saved: 10 min/day
- Per month: 200 min
- Per year: 2400 min (40 hours!)

That's a week of productivity!

## Conclusion

Terminal aliases are deceptively powerful. They reduce typing, improve speed, and make you more efficient. Start with a few common ones and build from there.`,
  },
  {
    id: '5',
    slug: 'building-scalable-nextjs',
    title: 'Building Scalable Web Applications with Next.js and TypeScript',
    excerpt: 'Learn how to architect modern web applications that can scale to millions of users. Explore code splitting, SSR, API optimization, and database scaling.',
    date: 'May 22, 2026',
    readTime: '15 min read',
    category: 'Backend',
    tags: ['Next.js', 'TypeScript', 'Architecture', 'Performance'],
    content: `## Why Scalability Matters

Building web applications is one thing. Building web applications that can handle exponential growth is another. Scalability isn't just about technical prowess—it's about understanding your users, anticipating growth, and making architectural decisions that allow your application to breathe as it expands.

When you launch your application, you might have 100 users. Six months later, you could have 100,000. The question isn't whether your infrastructure can handle it—it's whether your architecture can.

## Understanding the Layers of Scalability

Scalability happens across multiple layers of your application:

- **Frontend Scalability:** Serving assets quickly to users across the globe
- **API Scalability:** Handling thousands of concurrent requests
- **Database Scalability:** Managing massive datasets efficiently
- **Infrastructure Scalability:** Automatically provisioning resources based on demand

## Frontend Optimization with Next.js

Next.js provides excellent tools for frontend optimization out of the box.

### Code Splitting

Next.js automatically code-splits at the page level. Each page only loads the JavaScript it needs:

\`\`\`typescript
// pages/products.tsx
// This component only loads when users navigate to /products
export default function Products() {
  // Component code
}
\`\`\`

### Image Optimization

Use the Next.js Image component for automatic optimization:

\`\`\`typescript
import Image from 'next/image'

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
}
\`\`\`

## Backend Architecture Patterns

A scalable backend requires careful architecture.

### API Rate Limiting

Protect your API from overload:

\`\`\`typescript
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
}
\`\`\`

## Database Scaling

Your database is often the bottleneck:

- **Indexing:** Add indexes on frequently queried columns
- **Query Optimization:** Avoid N+1 queries, use batch operations
- **Read Replicas:** Distribute read traffic across multiple replicas
- **Sharding:** Horizontally partition data across multiple databases

## Caching Strategies

Caching is one of the most effective scalability tools.

### Redis Caching

\`\`\`typescript
import redis from 'redis'

const client = redis.createClient()

export async function GET(request: Request) {
  const cached = await client.get('users:all')
  
  if (cached) {
    return Response.json(JSON.parse(cached))
  }
  
  const users = await db.user.findMany()
  await client.setEx('users:all', 3600, JSON.stringify(users))
  
  return Response.json(users)
}
\`\`\`

## Monitoring and Observability

You can't optimize what you don't measure.

- **APM Tools:** New Relic, DataDog, Sentry
- **Real User Monitoring:** Track actual user experience
- **Database Monitoring:** Query performance, slow queries
- **Infrastructure Monitoring:** CPU, memory, network, disk I/O

## Real-World Scaling Journey

- **Phase 1 (0-10K users):** Single Next.js server, PostgreSQL
- **Phase 2 (10K-100K):** Separate API servers, database read replicas
- **Phase 3 (100K-1M):** Microservices, Redis caching, database sharding
- **Phase 4 (1M+):** Full CQRS pattern, event streaming, distributed system

## Conclusion

Building scalable applications doesn't require perfection from day one. It requires understanding your architecture, anticipating growth, and making intentional decisions about where to optimize.

Start simple, measure carefully, and scale when needed. That's the path to building applications that grow with your users.`,
  },
]
