export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  type: 'article' | 'tip'
  content: string
}

export const blogPosts: BlogPost[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // QUICK TIPS & TRICKS
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 'tip-1',
    slug: 'css-grid-autofill',
    title: 'CSS Grid Auto-Fit: Responsive Layouts Without Media Queries',
    excerpt:
      'One line of CSS replaces all your breakpoints. Here\'s how CSS Grid\'s auto-fit gives you fluid, responsive columns with zero @media rules.',
    date: 'May 20, 2026',
    readTime: '3 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Responsive Design'],
    type: 'tip',
    content: `## The Problem

You're writing CSS for a card grid. You add a breakpoint for 3 columns at 1200px, 2 columns at 768px, 1 column at 480px. Then the design changes. Now you're maintaining five media queries for one component.

There's a better way.

## The One-Liner

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

That's it. No media queries. No breakpoints. It just works.

## How It Works

- **\`repeat(auto-fit, ...)\`** — creates as many columns as fit in the container
- **\`minmax(280px, 1fr)\`** — each column is *at least* 280px wide, and expands to fill available space

When the viewport shrinks below ~560px, you automatically drop to one column. At 840px you get two. At 1120px, three. The browser does the math.

## auto-fit vs auto-fill

These are easy to confuse:

\`\`\`css
/* auto-fill: keeps empty ghost columns, doesn't stretch items */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

/* auto-fit: collapses empty columns, stretches items to fill the row */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
\`\`\`

For most card grids, **auto-fit** is what you want — items expand to fill the row naturally.

## Real-World Example

\`\`\`css
/* Before: 3 breakpoints, brittle */
.cards {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 600px) {
  .cards { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 900px) {
  .cards { grid-template-columns: 1fr 1fr 1fr; }
}

/* After: zero breakpoints, bulletproof */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

## When NOT to Use This

This pattern works great for cards, thumbnails, and content tiles. Avoid it when you need a *specific* number of columns regardless of container size — for example, a fixed 2-column comparison layout. Use explicit column counts there.

## Takeaway

\`repeat(auto-fit, minmax(min, 1fr))\` is one of the most powerful CSS Grid features. Learn this pattern once, and you'll reach for it constantly.`,
  },

  {
    id: 'tip-2',
    slug: 'react-hooks-memo',
    title: 'useCallback vs useMemo: When Each One Actually Helps',
    excerpt:
      'Both hooks memoize things — but memoizing the wrong thing is worse than not memoizing at all. Here\'s the mental model that makes it click.',
    date: 'May 18, 2026',
    readTime: '4 min read',
    category: 'React',
    tags: ['React', 'Hooks', 'Performance'],
    type: 'tip',
    content: `## The Confusion

Developers often sprinkle \`useCallback\` and \`useMemo\` everywhere "for performance" — and then wonder why their app is *slower*. Memoization has overhead. Used wrong, it costs more than it saves.

Here's the clear model.

## useCallback: Memoize a Function Reference

\`\`\`tsx
const handleSubmit = useCallback(() => {
  submitForm(formData)
}, [formData])
\`\`\`

\`useCallback\` returns the **same function object** across renders, as long as dependencies don't change.

**When it actually helps:** When you pass a callback to a child wrapped in \`React.memo\`. Without it, a new function is created on every render, and \`React.memo\`'s shallow comparison sees a "new" prop and re-renders anyway.

\`\`\`tsx
// Without useCallback — memo does nothing
const Parent = () => {
  const onClick = () => doSomething() // new reference every render
  return <MemoizedChild onClick={onClick} />
}

// With useCallback — memo works as intended
const Parent = () => {
  const onClick = useCallback(() => doSomething(), [])
  return <MemoizedChild onClick={onClick} />
}
\`\`\`

## useMemo: Memoize a Computed Value

\`\`\`tsx
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name))
}, [items])
\`\`\`

\`useMemo\` caches the **result of a computation** and only recomputes when dependencies change.

**When it actually helps:** Expensive calculations — filtering large datasets, complex transformations, or building derived state that would otherwise run on every keystroke.

## The Litmus Test

Ask yourself two questions:

1. **Is this computation genuinely expensive?** (sorting 10,000 items = yes; mapping 5 items = no)
2. **Does this value/function flow into a memoized child?**

If the answer to *both* is no — skip the hook. You're adding complexity and overhead for no gain.

## Common Mistake

\`\`\`tsx
// 🚫 Pointless — no memoized child, no expensive computation
const label = useMemo(() => \`Hello, \${name}\`, [name])

// ✅ Just write it
const label = \`Hello, \${name}\`
\`\`\`

## Quick Reference

| Hook | Memoizes | Use when |
|---|---|---|
| \`useCallback\` | Function reference | Passing to a \`React.memo\` child |
| \`useMemo\` | Computed value | Expensive calculation, or expensive object identity |

## Takeaway

Don't memoize by default. Profile first, optimize second. When you *do* reach for these hooks, the rule is simple: **useCallback for functions, useMemo for values** — and only when there's a measurable reason to.`,
  },

  {
    id: 'tip-3',
    slug: 'git-reset-trick',
    title: 'Git Reset: Undo Your Last Commit Without Losing a Single Line',
    excerpt:
      'Committed too early? Wrong branch? Wrong message? git reset --soft HEAD~1 is the command every developer should have in muscle memory.',
    date: 'May 16, 2026',
    readTime: '3 min read',
    category: 'Git',
    tags: ['Git', 'CLI', 'Workflow'],
    type: 'tip',
    content: `## The Scenario

You commit. Then immediately realize you forgot to add a file, used the wrong branch, or the commit message is embarrassing. Your work is good — you just committed too soon.

## The Command

\`\`\`bash
git reset --soft HEAD~1
\`\`\`

This undoes your last commit but leaves every changed file **staged and ready**. Nothing is lost.

## Breaking It Down

- **\`git reset\`** — moves the branch pointer back
- **\`--soft\`** — keeps your changes in the staging area
- **\`HEAD~1\`** — one commit before the current HEAD

## The Three Reset Modes

\`\`\`bash
git reset --soft HEAD~1   # undo commit, keep changes staged ✅ safest
git reset --mixed HEAD~1  # undo commit, unstage changes (default)
git reset --hard HEAD~1   # undo commit, DELETE changes ☠️ destructive
\`\`\`

In most "oops" situations, **\`--soft\`** is exactly what you want.

## Step-by-Step Recovery

\`\`\`bash
# Check what happened
git log --oneline -3

# Undo the commit, keep changes staged
git reset --soft HEAD~1

# Verify your files are still staged
git status

# Fix whatever you need to fix
# Then recommit with a better message
git commit -m "feat: add user authentication with proper error handling"
\`\`\`

## If You Already Pushed

Rewriting shared history is risky, but if you pushed to *your own* feature branch:

\`\`\`bash
git reset --soft HEAD~1
# fix and recommit
git push --force-with-lease
\`\`\`

Always use **\`--force-with-lease\`** over \`--force\`. It refuses to push if someone else has added commits to the remote branch — protecting you from overwriting a teammate's work.

## Undo Multiple Commits

\`\`\`bash
git reset --soft HEAD~3  # undo last 3 commits, keep all changes staged
\`\`\`

## Emergency Lifeline: git reflog

If something goes wrong, \`git reflog\` shows every action Git has recorded — including commits you thought were lost.

\`\`\`bash
git reflog
# Find the commit hash you need
git checkout <hash>
\`\`\`

## Takeaway

**\`git reset --soft HEAD~1\`** — commit it to memory (pun intended). It's the safest undo in Git's toolkit and the one you'll reach for most often.`,
  },

  {
    id: 'tip-4',
    slug: 'terminal-aliases',
    title: 'Terminal Aliases: The 10-Minute Setup That Saves Hours Every Week',
    excerpt:
      'The commands you type fifty times a day deserve better than fifty keystrokes. Here\'s how to set up aliases that actually stick.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    category: 'Terminal',
    tags: ['Terminal', 'Productivity', 'CLI', 'Shell'],
    type: 'tip',
    content: `## Why Aliases Matter at Scale

As a developer, the terminal is your second home. Aliases aren't just a convenience — they reduce context-switching, keep your hands on the keyboard, and eliminate the cognitive load of remembering long flag combinations.

## Setting Up Permanent Aliases

Add aliases to your shell config file so they persist across sessions.

**For bash** — add to \`~/.bashrc\`  
**For zsh** — add to \`~/.zshrc\`

\`\`\`bash
# Open your config file
code ~/.zshrc   # or vim ~/.zshrc
\`\`\`

Add your aliases, save, then reload:

\`\`\`bash
source ~/.zshrc
\`\`\`

## The Developer Starter Pack

\`\`\`bash
# ── Navigation ──────────────────────────────────────────
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# ── File listing ─────────────────────────────────────────
alias ll='ls -lah'          # long list with hidden files, human-readable sizes
alias lt='ls -lath'         # same but sorted by modification time (newest first)

# ── Git shortcuts ─────────────────────────────────────────
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'    # usage: gc "your message"
alias gp='git push'
alias gl='git log --oneline --graph --decorate -20'
alias gco='git checkout'
alias gb='git branch'

# ── Node / npm ────────────────────────────────────────────
alias ni='npm install'
alias nid='npm install --save-dev'
alias nr='npm run'
alias nrd='npm run dev'
alias nrb='npm run build'

# ── Quick edits ───────────────────────────────────────────
alias zshconfig='code ~/.zshrc'
alias reload='source ~/.zshrc'

# ── Utilities ─────────────────────────────────────────────
alias ip='curl -s ifconfig.me'       # your public IP
alias ports='lsof -i -P | grep LISTEN' # show open ports
alias diskusage='du -sh * | sort -h'  # disk usage sorted by size
\`\`\`

## Going Further: Shell Functions

When an alias needs arguments, use a function:

\`\`\`bash
# Create directory and immediately cd into it
mkcd() {
  mkdir -p "$1" && cd "$1"
}

# Fuzzy-find and open a file in VS Code
fcode() {
  code $(find . -name "*$1*" | head -1)
}

# Kill whatever is running on a given port
killport() {
  lsof -ti tcp:"$1" | xargs kill -9
}

# Usage:
# mkcd my-new-project
# killport 3000
\`\`\`

## Organizing for the Long Term

Once your alias file grows, split it out:

\`\`\`bash
# In ~/.zshrc
source ~/.aliases       # load aliases from a separate file
source ~/.functions     # load functions from a separate file
\`\`\`

This makes your aliases easy to version-control and share across machines.

## Takeaway

Spend 10 minutes setting up aliases now. You'll recoup that investment within the first hour of use — and every day after.`,
  },

  {
    id: 'tip-5',
    slug: 'vscode-thunder-client',
    title: 'Thunder Client: Test APIs Without Leaving VS Code',
    excerpt:
      'A lightweight REST client built right into your editor. No tab switching, no Postman license, no friction — just fast API testing where you\'re already working.',
    date: 'May 10, 2026',
    readTime: '3 min read',
    category: 'Tools',
    tags: ['VS Code', 'API', 'Tools', 'Productivity'],
    type: 'tip',
    content: `## The Context-Switch Tax

Every time you leave VS Code to test an API — opening Postman, waiting for it to load, digging through collections — you lose flow. Small interruptions compound fast over a workday.

Thunder Client brings API testing into the editor itself.

## Install in 30 Seconds

1. Open VS Code Extensions (⇧⌘X)
2. Search for **Thunder Client**
3. Click Install

A lightning bolt icon appears in your sidebar. You're done.

## Making Your First Request

Click the sidebar icon → **New Request**

\`\`\`
Method: GET
URL:    https://api.github.com/users/rajeev00723

Headers:
  Accept: application/vnd.github.v3+json
\`\`\`

Hit **Send**. The JSON response appears in the panel below, syntax-highlighted and collapsible.

## What It Does Well

**Collections** — organize requests by project or service, just like Postman. Share the collection JSON in your repo so the whole team has the same test suite.

**Environment variables** — define \`{{BASE_URL}}\`, \`{{AUTH_TOKEN}}\` etc. per environment (local, staging, prod) and switch with a dropdown.

\`\`\`
# .env.local equivalent in Thunder Client
BASE_URL = http://localhost:3000
AUTH_TOKEN = eyJhbGci...

# Used in requests as:
{{BASE_URL}}/api/users
Authorization: Bearer {{AUTH_TOKEN}}
\`\`\`

**Tests** — write assertions directly on responses:

\`\`\`javascript
// Thunder Client test tab
tc.test("Status is 200", () => {
  tc.expect(response.status).toBe(200)
})

tc.test("User has name", () => {
  tc.expect(response.json.name).toBeDefined()
})
\`\`\`

## Limitations to Know

Thunder Client is built for REST. If you're working heavily with GraphQL subscriptions or need advanced OAuth flows, Postman or Insomnia still have the edge. For everyday REST debugging — endpoints, headers, auth tokens, JSON payloads — Thunder Client handles it completely.

## Takeaway

If you're already in VS Code, there's no reason to open a separate API client for routine testing. Thunder Client removes the friction without removing the features that matter.`,
  },

  {
    id: 'tip-6',
    slug: 'npx-trick',
    title: 'npx: Run Any npm Package Without Installing It',
    excerpt:
      'npx lets you execute npm tools on demand — no global installs, no version conflicts, no cleanup. Most developers underuse it.',
    date: 'May 8, 2026',
    readTime: '3 min read',
    category: 'Node.js',
    tags: ['npm', 'npx', 'Node.js', 'CLI'],
    type: 'tip',
    content: `## The Old Way

Before npx, scaffolding a project meant:

\`\`\`bash
npm install -g create-react-app
create-react-app my-app
\`\`\`

Now you have a globally installed tool that drifts out of date, conflicts with other global installs, and requires manual cleanup. Multiply this by every CLI tool you ever use.

## The npx Way

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

npx downloads the package temporarily, runs it, then discards it. Always the latest version (unless you pin one). Zero global pollution.

## Practical Examples

\`\`\`bash
# Scaffold projects — always run with latest version
npx create-next-app@latest my-app
npx create-react-app my-app
npx create-vite@latest my-app

# Run a quick HTTP server in any directory
npx serve .

# Audit and fix npm packages interactively
npx npm-check-updates -u

# Generate a .gitignore for any stack
npx gitignore node

# Kill a process on a specific port (mac/linux)
npx kill-port 3000

# Check what's taking up disk space in node_modules
npx cost-of-modules
\`\`\`

## Pinning a Specific Version

\`\`\`bash
npx create-next-app@14.0.0 my-app   # pin exact version
npx create-next-app@^14 my-app      # pin major version
\`\`\`

Useful when you need to match a team's existing setup or reproduce a specific environment.

## Running a Local Binary

npx also runs binaries from your local \`node_modules/.bin\` — which means you can run project-specific tools without a global install or npm script:

\`\`\`bash
npx tsc --version     # runs TypeScript compiler from local node_modules
npx eslint src/       # runs ESLint from local node_modules
npx prisma migrate dev
\`\`\`

## Takeaway

Default to \`npx\` for any one-off CLI tool. Keep global installs reserved for tools you genuinely use across every project and need to be available at all times (like the AWS CLI or a custom internal tool). Everything else — npx.`,
  },

  {
    id: 'tip-7',
    slug: 'devtools-network-throttle',
    title: 'Chrome DevTools: Simulate Real-World Network Conditions in 10 Seconds',
    excerpt:
      'Your app feels instant on your gigabit office Wi-Fi. Your users on 4G think it\'s broken. Here\'s how to test what they actually experience.',
    date: 'May 5, 2026',
    readTime: '3 min read',
    category: 'DevTools',
    tags: ['Chrome', 'DevTools', 'Performance', 'Debugging'],
    type: 'tip',
    content: `## The Gap Between Dev and Production

Fast machines and fast connections hide a category of bugs entirely. Slow network responses, uncaught loading states, layout shifts — none of these show up locally. They show up for users.

Chrome DevTools' network throttling closes that gap in seconds.

## How to Enable It

1. Open DevTools (F12 or ⌘⌥I)
2. Click the **Network** tab
3. Find the throttling dropdown — it defaults to **"No throttling"**
4. Select a preset

\`\`\`
Presets:
  Fast 4G    — 4 Mbps down, 3 Mbps up, 20ms RTT
  Slow 4G    — 1.6 Mbps down, 750 Kbps up, 150ms RTT
  3G         — 750 Kbps down, 250 Kbps up, 300ms RTT
  Offline    — simulates no connection
\`\`\`

Reload the page. Watch it load the way your users do.

## What You'll Actually Find

**Missing loading states** — components that flash content instantly in dev but leave users staring at blank space for 2 seconds in production.

**Waterfall bottlenecks** — large JS bundles, unoptimized images, or third-party scripts blocking render. The Network tab visualizes each request as a horizontal bar. Long bars mean slow loads.

**Skeleton screens that don't match content** — your skeleton layout is 3 lines tall but the real content is 12 lines. Only visible under throttling.

**API errors that only appear on timeout** — some fetch calls have no timeout set. Under slow conditions they hang indefinitely.

## Custom Throttling Profiles

The presets don't always match real conditions. Add your own:

1. Open the throttling dropdown → **Add**
2. Name it (e.g., "South Asia 4G")
3. Set realistic values from network condition data for your target audience

## Combine with CPU Throttling

In the **Performance** tab, you can throttle both network and CPU simultaneously — useful for simulating mid-range Android devices, which are still the dominant mobile category globally.

## Disable Cache While Testing

Check **"Disable cache"** in the Network tab while DevTools is open. This forces every request to hit the server, giving you accurate first-load timings instead of cached results.

## Takeaway

Build fast. But test slow. Add a 10-minute throttled session to your QA routine before any release, and you'll catch an entire category of production issues before your users do.`,
  },

  {
    id: 'tip-8',
    slug: 'js-destructuring-params',
    title: 'JavaScript: Destructuring in Function Parameters',
    excerpt:
      'Stop accessing object properties inside function bodies. Destructure them at the signature — your code gets cleaner, your intent gets clearer.',
    date: 'May 2, 2026',
    readTime: '3 min read',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES6', 'Clean Code'],
    type: 'tip',
    content: `## The Pattern

Instead of passing an object and digging into it:

\`\`\`javascript
// Before — you have to read the body to know what's used
function createUser(user) {
  console.log(user.name)
  console.log(user.email)
  console.log(user.role)
}
\`\`\`

Destructure at the parameter level:

\`\`\`javascript
// After — the signature documents itself
function createUser({ name, email, role }) {
  console.log(name)
  console.log(email)
  console.log(role)
}
\`\`\`

The function body is cleaner. The signature tells you exactly what the function needs.

## Default Values in Destructuring

\`\`\`javascript
function createUser({ name, email, role = 'viewer', active = true }) {
  // role and active have fallbacks if not provided
}

createUser({ name: 'Rajeev', email: 'r@example.com' })
// role = 'viewer', active = true
\`\`\`

## Renaming While Destructuring

When the incoming property name would conflict or isn't descriptive enough:

\`\`\`javascript
function renderProfile({ name: displayName, image: avatarUrl }) {
  // use displayName and avatarUrl internally
  return \`<img src="\${avatarUrl}" alt="\${displayName}" />\`
}
\`\`\`

## Nested Destructuring

\`\`\`javascript
function processOrder({ id, customer: { name, address: { city } } }) {
  console.log(\`Order \${id} for \${name} in \${city}\`)
}
\`\`\`

Use nested destructuring sparingly — it gets hard to read past two levels. For deeply nested objects, destructure in the body instead.

## Works in Arrow Functions Too

\`\`\`javascript
const formatUser = ({ name, email }) => \`\${name} <\${email}>\`

// Great for array methods
const users = [{ name: 'Alice', email: 'a@co.com' }, { name: 'Bob', email: 'b@co.com' }]
users.map(({ name, email }) => \`\${name} <\${email}>\`)
\`\`\`

## In React Components

This is especially valuable in React, where every component receives a props object:

\`\`\`tsx
// Common but verbose
const UserCard = (props) => {
  return <div>{props.name} — {props.role}</div>
}

// Clean and self-documenting
const UserCard = ({ name, role, avatarUrl, isActive = true }) => {
  return (
    <div className={isActive ? 'active' : 'inactive'}>
      <img src={avatarUrl} alt={name} />
      <span>{name} — {role}</span>
    </div>
  )
}
\`\`\`

## Takeaway

Destructuring at the parameter level is a low-effort, high-readability win. It makes your functions self-documenting — you know exactly what they consume without reading the body. Adopt it as a default, not an exception.`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FULL ARTICLES (existing content kept + enriched)
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 'article-1',
    slug: 'building-scalable-nextjs',
    title: 'Building Scalable Next.js Applications: Architecture Patterns for Production',
    excerpt:
      'How to structure a Next.js application that stays maintainable at 100,000+ lines of code. Covering feature-based folders, server components, data-fetching layers, and deployment strategy.',
    date: 'May 22, 2026',
    readTime: '12 min read',
    category: 'Architecture',
    tags: ['Next.js', 'Architecture', 'TypeScript', 'Performance'],
    type: 'article',
    content: `## Why Architecture Matters in Next.js

Next.js is easy to start with and surprisingly easy to make a mess of. The framework gives you a lot of freedom — too much, for teams that don't establish conventions early. A project that starts clean can become painful to navigate by the time it hits 30 developers and 200 routes.

This guide covers the patterns I apply on production applications as a Principal Architect.

## 1. Feature-Based Folder Structure

The default Next.js structure organizes by file type: all components in \`/components\`, all hooks in \`/hooks\`, all utils in \`/utils\`. This works up to a point — then finding everything related to "checkout" means grepping across six directories.

Switch to feature-based:

\`\`\`
src/
├── app/                   # Next.js routing
│   ├── (auth)/
│   ├── (dashboard)/
│   └── api/
├── features/              # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types.ts
│   ├── checkout/
│   └── analytics/
├── shared/                # Truly shared across features
│   ├── components/
│   ├── lib/
│   └── types/
└── config/                # App configuration
\`\`\`

Everything related to a feature lives together. When you need to understand or delete a feature, you know exactly where to look.

## 2. Server Components First, Client Components by Exception

Next.js App Router defaults to Server Components. Many developers add \`'use client'\` reflexively — don't.

Server Components give you:
- Zero JavaScript sent to the browser for that component
- Direct database/filesystem access
- No hydration overhead

\`\`\`tsx
// This runs entirely on the server — no JS shipped to the client
// Good for: data display, static content, anything without interactivity
async function UserProfile({ userId }: { userId: string }) {
  const user = await db.user.findUnique({ where: { id: userId } })

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
\`\`\`

Add \`'use client'\` only when you need:
- useState / useEffect
- Browser APIs
- Event listeners
- Third-party client-side libraries

Keep the client boundary as deep in the tree as possible.

## 3. Centralized Data Access Layer

Don't call your database from components or even from route handlers directly. Build a data access layer:

\`\`\`typescript
// lib/data/users.ts
import { db } from '@/lib/db'
import { cache } from 'react'

export const getUser = cache(async (id: string) => {
  return db.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, role: true }
  })
})

export const getUserOrders = cache(async (userId: string) => {
  return db.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 20
  })
})
\`\`\`

The \`cache()\` wrapper from React deduplicates identical requests within a single render cycle — important for Server Components where the same data may be needed by multiple components in the tree.

## 4. Type-Safe API Routes

\`\`\`typescript
// app/api/users/route.ts
import { z } from 'zod'
import { NextResponse } from 'next/server'

const CreateUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  role: z.enum(['admin', 'editor', 'viewer']).default('viewer')
})

export async function POST(request: Request) {
  const body = await request.json()
  const result = CreateUserSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 })
  }

  const user = await createUser(result.data)
  return NextResponse.json(user, { status: 201 })
}
\`\`\`

Always validate input at the API boundary with Zod or a similar schema validator. Never trust the shape of incoming data.

## 5. Environment Configuration

\`\`\`typescript
// config/env.ts
import { z } from 'zod'

const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  AUTH_SECRET: z.string().min(32),
  NODE_ENV: z.enum(['development', 'test', 'production'])
})

export const env = EnvSchema.parse(process.env)
\`\`\`

Import \`env\` from this file instead of \`process.env\` directly. The application will fail at startup — not at runtime — if a required variable is missing or malformed. Catches configuration errors before they become production incidents.

## 6. Error Boundaries

\`\`\`tsx
// app/dashboard/error.tsx — Next.js error boundary
'use client'

export default function DashboardError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-zinc-500 text-sm">{error.digest}</p>
      <button onClick={reset} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Try again
      </button>
    </div>
  )
}
\`\`\`

Add \`error.tsx\` files at each segment level. Handle errors gracefully — don't let an API failure bring down an entire page.

## Final Architecture Checklist

- [ ] Feature-based folder structure
- [ ] Server Components as the default
- [ ] Centralized data access layer with \`cache()\`
- [ ] Zod validation on all API routes
- [ ] Environment variables validated at startup
- [ ] Error boundaries at route segment level
- [ ] TypeScript strict mode enabled

These aren't premature optimizations — they're the foundations that let teams move fast without accumulating debt.`,
  },

  {
    id: 'article-2',
    slug: 'system-design-fundamentals',
    title: 'System Design Fundamentals Every Developer Should Know',
    excerpt:
      'The core concepts behind scalable systems — load balancing, caching strategies, database partitioning, and message queues — explained from first principles.',
    date: 'May 14, 2026',
    readTime: '15 min read',
    category: 'Architecture',
    tags: ['System Design', 'Architecture', 'Scalability', 'Backend'],
    type: 'article',
    content: `## Why System Design Matters

Feature code is written once and maintained forever. System design decisions persist longer — sometimes for the entire lifespan of a product. A poorly designed data layer can make vertical scaling impossible. A missing cache layer can make a working product unusable at scale.

These are the fundamentals every developer should internalize before they're needed in production.

## 1. Horizontal vs Vertical Scaling

**Vertical scaling** — add more resources (CPU, RAM) to a single machine. Simple to implement, limited ceiling, single point of failure.

**Horizontal scaling** — add more machines and distribute load. More complex, effectively unlimited ceiling, resilient to individual failures.

Most modern systems start vertical and plan for horizontal. Plan for horizontal even if you don't need it yet — architectural decisions made at 1,000 users are expensive to undo at 1,000,000.

## 2. Load Balancers

A load balancer sits in front of your server fleet and distributes incoming requests.

\`\`\`
Client → Load Balancer → Server 1
                       → Server 2
                       → Server 3
\`\`\`

**Distribution strategies:**
- **Round-robin** — rotate through servers in order (simple, default)
- **Least connections** — route to the server with the fewest active connections
- **IP hash** — route the same client IP to the same server (useful for stateful sessions)

Health checks run continuously. When a server fails its check, the load balancer stops routing to it. Your users see no interruption.

## 3. Caching

Caching is the single highest-leverage optimization in most systems. Before optimizing your database queries, ask whether the data needs to hit the database at all.

**Cache layers:**

| Layer | Location | Scope | Latency |
|---|---|---|---|
| Browser cache | Client | Single user | ~0ms |
| CDN | Edge nodes | All users | ~5ms |
| Application cache (Redis) | Server | All users | ~1ms |
| Database query cache | DB engine | All users | ~5ms |

**Cache invalidation strategies:**

- **TTL (Time to Live)** — expire after N seconds. Simple. Tolerates stale data.
- **Write-through** — update cache when you update the database. Fresh. Write overhead.
- **Cache-aside (lazy loading)** — read from DB on cache miss, populate cache. Simple. First request is slow.

**The hard part:** knowing what to cache and for how long. Highly dynamic data (user sessions, live inventory) needs short TTLs. Rarely-changing data (product catalog, static content) can cache for hours or days.

## 4. Database Partitioning

When a single database becomes a bottleneck:

**Vertical partitioning** — split tables by column. Store frequently accessed columns (name, email) in a hot table; rarely accessed columns (profile bio, preferences) in a cold table.

**Horizontal partitioning (sharding)** — split rows across multiple databases. User IDs 1–1M on shard A, 1M–2M on shard B.

\`\`\`
# Shard key selection matters enormously
# Good: userId (evenly distributed)
# Bad: country (US has 10x more users than others — hot shard problem)
\`\`\`

Sharding introduces complexity: cross-shard queries, resharding when you outgrow your split, transactional guarantees across shards. Delay sharding as long as possible. It's not a first-year problem for most companies.

## 5. Message Queues

Queues decouple producers (services that generate work) from consumers (services that do the work).

\`\`\`
Order Service → [Order Queue] → Inventory Service
                             → Email Service
                             → Analytics Service
\`\`\`

Benefits:
- **Resilience** — if Email Service is down, orders don't fail; emails queue up and process when the service recovers
- **Load smoothing** — absorb traffic spikes without overwhelming downstream services
- **Retry handling** — failed messages retry automatically with configurable backoff

Common tools: RabbitMQ, Apache Kafka, AWS SQS.

## 6. CAP Theorem

Every distributed system makes a trade-off between:

- **Consistency** — every read receives the most recent write
- **Availability** — every request receives a response
- **Partition tolerance** — the system continues operating despite network partitions

Network partitions happen — you can't opt out of P. So the real choice is: when a partition occurs, do you want **consistency** or **availability**?

- Bank transaction: choose **Consistency** (stale balances are dangerous)
- Social media feed: choose **Availability** (seeing a post 500ms late is fine)

## 7. The Architecture Decision Record

Document every significant design decision:

\`\`\`markdown
# ADR-012: Use Redis for Session Storage

## Status: Accepted

## Context
User sessions are currently stored in database. At 50k concurrent users,
session queries account for 40% of DB load.

## Decision
Move sessions to Redis with a 24h TTL.

## Consequences
+ Reduces DB load significantly
+ Sub-millisecond session reads
- Adds Redis as an infrastructure dependency
- Sessions are lost on Redis failure (mitigated by clustering)
\`\`\`

Decisions without documentation get re-litigated constantly. ADRs give future team members (and future you) the context for why the system is the way it is.

## Where to Go Next

These fundamentals unlock every deeper discussion about system design: consistent hashing, two-phase commit, event sourcing, CQRS, service mesh, distributed tracing. Master these foundations first — everything else builds on them.`,
  },
]