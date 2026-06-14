'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Mock courses data for system design
const MOCK_COURSES = [
  {
    id: '1',
    title: 'Distributed Systems Fundamentals',
    description: 'Master the core concepts of building scalable distributed systems',
    level: 'Intermediate',
    duration: 16,
    published: true,
    topics: [
      'CAP Theorem & Consistency Models',
      'Replication & Sharding Strategies',
      'Consensus Algorithms (Raft, Paxos)',
      'Failure Detection & Recovery',
      'Load Balancing & Service Discovery',
      'Event-Driven Architectures'
    ]
  },
  {
    id: '2',
    title: 'Microservices Architecture Patterns',
    description: 'Design and implement production-grade microservices',
    level: 'Advanced',
    duration: 20,
    published: true,
    topics: [
      'Service Decomposition Strategies',
      'API Gateway Patterns',
      'Inter-service Communication',
      'Saga Pattern & Distributed Transactions',
      'Service Mesh (Istio, Linkerd)',
      'Circuit Breakers & Resilience',
      'Observability & Distributed Tracing'
    ]
  },
  {
    id: '3',
    title: 'Database Design at Scale',
    description: 'Choose and optimize databases for large-scale systems',
    level: 'Intermediate',
    duration: 18,
    published: true,
    topics: [
      'SQL vs NoSQL Trade-offs',
      'Horizontal & Vertical Scaling',
      'Partitioning & Sharding Algorithms',
      'ACID vs BASE Transactions',
      'Caching Strategies (Redis, Memcached)',
      'Database Replication & Failover',
      'Query Optimization & Indexing',
      'Time-series Databases'
    ]
  },
  {
    id: '4',
    title: 'High-Performance Systems',
    description: 'Build systems that handle billions of requests',
    level: 'Advanced',
    duration: 22,
    published: true,
    topics: [
      'Throughput vs Latency Optimization',
      'Async Processing & Message Queues',
      'Rate Limiting & Throttling',
      'Connection Pooling & Resource Management',
      'CDN & Edge Computing',
      'Zero-copy & Memory-mapped I/O',
      'CPU Cache Optimization',
      'Performance Monitoring & Profiling'
    ]
  },
  {
    id: '5',
    title: 'Security in Distributed Systems',
    description: 'Secure multi-service architectures and data pipelines',
    level: 'Advanced',
    duration: 16,
    published: true,
    topics: [
      'Authentication & Authorization',
      'End-to-end Encryption',
      'Service-to-Service Communication (mTLS)',
      'Data Privacy & Compliance (GDPR, HIPAA)',
      'Network Security & DDoS Protection',
      'Secrets Management & Key Rotation',
      'Audit Logging & Intrusion Detection'
    ]
  },
  {
    id: '6',
    title: 'Real-time Data Systems',
    description: 'Build streaming pipelines and real-time analytics',
    level: 'Intermediate',
    duration: 14,
    published: true,
    topics: [
      'Stream Processing Frameworks (Kafka, Flink)',
      'Event Sourcing & CQRS Patterns',
      'Real-time Analytics & Dashboards',
      'Exactly-once Semantics',
      'Windowing & Aggregations',
      'Backpressure & Flow Control',
      'Lambda & Kappa Architectures'
    ]
  }
]

function CourseDetails({ course }: { course: any }) {
  const [notes, setNotes] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState<string[]>([])

  const storageKey = `course-notes-${course.id}`
  const commentsKey = `course-comments-${course.id}`

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const n = localStorage.getItem(storageKey)
      if (n) setNotes(n)
      const c = localStorage.getItem(commentsKey)
      if (c) setComments(JSON.parse(c))
    } catch {
      // ignore
    }
  }, [storageKey, commentsKey])

  const saveNotes = () => {
    if (typeof window === 'undefined') return
    localStorage.setItem(storageKey, notes)
  }

  const addComment = () => {
    if (!commentText.trim()) return
    const next = [...comments, commentText.trim()]
    setComments(next)
    try {
      localStorage.setItem(commentsKey, JSON.stringify(next))
    } catch {
      // ignore
    }
    setCommentText('')
  }

  return (
    <div className="mt-6">
      <h4 className="text-md font-semibold mb-2 text-green-300">Notes</h4>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full min-h-[120px] p-3 bg-zinc-800 border border-zinc-700 rounded text-zinc-200"
        placeholder="Personal learning notes..."
      />
      <div className="flex gap-2 mt-2">
        <button
          onClick={saveNotes}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
        >
          Save Notes
        </button>
      </div>

      <h4 className="text-md font-semibold mb-2 text-yellow-300 mt-6">Comments</h4>
      <div className="flex gap-2">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 p-2 bg-zinc-800 border border-zinc-700 rounded text-zinc-200"
          placeholder="Add a comment (visible only locally)"
        />
        <button
          onClick={addComment}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {comments.length === 0 ? (
          <li className="text-zinc-400">No comments yet</li>
        ) : (
          comments.map((c, i) => (
            <li key={i} className="p-3 bg-zinc-800 border border-zinc-700 rounded">
              <div className="text-sm text-zinc-200">{c}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [useSupabase, setUseSupabase] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )

        const { data, error: err } = await supabase
          .from('courses')
          .select('*')
          .eq('published', true)

        if (err) {
          // Fall back to mock data
          setCourses(MOCK_COURSES)
          setUseSupabase(false)
        } else if (data && data.length > 0) {
          setCourses(data)
          setUseSupabase(true)
        } else {
          setCourses(MOCK_COURSES)
          setUseSupabase(false)
        }
        setError(null)
      } catch (e) {
        // Fall back to mock data on error
        setCourses(MOCK_COURSES)
        setUseSupabase(false)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">System Design Courses</h1>
          <p className="text-xl text-zinc-400">Learn to architect scalable, reliable systems from a Principal Architect</p>
          {!useSupabase && <p className="text-sm text-blue-400 mt-2">📦 Using sample courses</p>}
        </div>

        {loading && <p className="text-zinc-400 text-center py-12">Loading courses...</p>}

        {!loading && courses.length > 0 ? (
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border border-zinc-700 rounded-lg overflow-hidden hover:border-blue-500 transition cursor-pointer"
                onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
              >
                {/* Course Header */}
                <div className="p-6 bg-zinc-800/50 hover:bg-zinc-800 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                      <p className="text-zinc-300 mb-4">{course.description}</p>
                      <div className="flex gap-6 text-sm">
                        <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
                          📚 {course.level}
                        </span>
                        <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full">
                          ⏱️ {course.duration} hours
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 text-2xl">
                      {expandedCourse === course.id ? '▼' : '▶'}
                    </div>
                  </div>
                </div>

                {/* Course Topics - Expandable */}
                {expandedCourse === course.id && (
                  <div className="p-6 bg-zinc-900/50 border-t border-zinc-700">
                    <h3 className="text-lg font-semibold mb-4 text-blue-300">Topics Covered</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(course.topics || []).map((topic: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-3 text-blue-400">✓</span>
                          <span className="text-zinc-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <CourseDetails course={course} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : !loading && !error && (
          <p className="text-zinc-400 text-center py-12">No courses yet</p>
        )}
      </div>
    </div>
  )
}