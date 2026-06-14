// ============================================================================
// COMPONENT LIBRARY FOR ARCHITECTURE PLATFORM
// ============================================================================

// 1. COURSE CARD COMPONENT
// components/CourseCard.tsx
import Link from 'next/link'
import { Clock, Users, BookOpen } from 'lucide-react'

export interface CourseCardProps {
  id: string
  title: string
  description: string
  category: 'System Design' | 'Architecture' | 'Microservices' | 'DevOps'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: number // in hours
  lessonCount: number
  students?: number
  image?: string
}

export default function CourseCard({
  id,
  title,
  description,
  category,
  level,
  duration,
  lessonCount,
  students,
  image,
}: CourseCardProps) {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  }

  const categoryColors = {
    'System Design': 'text-blue-600',
    'Architecture': 'text-purple-600',
    'Microservices': 'text-green-600',
    'DevOps': 'text-orange-600',
  }

  return (
    <Link href={`/courses/${id}`}>
      <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-xl/20 transition-all duration-300 bg-white dark:bg-zinc-900">
        {/* Image placeholder */}
        <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-700 transition-all flex items-center justify-center">
          <BookOpen size={40} className="text-white opacity-50" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Level */}
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-semibold ${categoryColors[category]}`}>
              {category}
            </span>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${levelColors[level]}`}>
              {level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{lessonCount} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{duration}h</span>
            </div>
            {students && (
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{students.toLocaleString()} students</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

// ============================================================================

// 2. LESSON PLAYER COMPONENT
// components/LessonPlayer.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Check, Share2, Bookmark } from 'lucide-react'

export interface Lesson {
  id: string
  courseId: string
  title: string
  order: number
  content: string
  videoUrl?: string
  diagrams: Array<{
    id: string
    title: string
    type: 'drawio' | 'mermaid'
    url: string
    description: string
  }>
  resources: Array<{
    id: string
    title: string
    url: string
    type: 'pdf' | 'github' | 'link'
  }>
}

export interface LessonPlayerProps {
  lesson: Lesson
  courseName: string
  allLessons: Lesson[]
  currentIndex: number
  onMarkComplete?: (lessonId: string) => void
}

export default function LessonPlayer({
  lesson,
  courseName,
  allLessons,
  currentIndex,
  onMarkComplete,
}: LessonPlayerProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  const nextLesson = allLessons[currentIndex + 1]
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted)
    onMarkComplete?.(lesson.id)
  }

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <Link href={`/courses/${lesson.courseId}`} className="text-blue-400 hover:text-blue-300">
              ← Back to {courseName}
            </Link>
            <h1 className="text-4xl font-bold mt-4 mb-2">{lesson.title}</h1>
            <p className="text-zinc-400">Lesson {lesson.order + 1} of {allLessons.length}</p>
          </div>

          {/* Video Player */}
          {lesson.videoUrl && (
            <div className="mb-8 rounded-lg overflow-hidden bg-black">
              <video
                controls
                className="w-full"
                style={{ maxHeight: '600px' }}
              >
                <source src={lesson.videoUrl} type="video/mp4" />
              </video>
            </div>
          )}

          {/* Lesson Content */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          </div>

          {/* Diagrams */}
          {lesson.diagrams.length > 0 && (
            <div className="mb-12 space-y-8">
              <h2 className="text-2xl font-bold">Diagrams & Visualizations</h2>
              {lesson.diagrams.map((diagram) => (
                <DiagramViewer key={diagram.id} diagram={diagram} />
              ))}
            </div>
          )}

          {/* Resources */}
          {lesson.resources.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Resources</h2>
              <div className="space-y-2">
                {lesson.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-zinc-700 rounded-lg hover:border-blue-500 transition"
                  >
                    <span className="text-lg">
                      {resource.type === 'pdf' && '📄'}
                      {resource.type === 'github' && '🐙'}
                      {resource.type === 'link' && '🔗'}
                    </span>
                    <span>{resource.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-4 mt-16">
            {prevLesson ? (
              <Link href={`/courses/${lesson.courseId}/lessons/${prevLesson.id}`}>
                <button className="w-full px-6 py-3 border border-zinc-700 rounded-lg hover:border-blue-500 transition text-left">
                  ← Previous: {prevLesson.title}
                </button>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link href={`/courses/${lesson.courseId}/lessons/${nextLesson.id}`}>
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-right">
                  Next: {nextLesson.title} →
                </button>
              </Link>
            ) : (
              <button
                onClick={handleMarkComplete}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Check size={20} />
                Mark Complete & Finish
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="w-72 bg-zinc-900 border-l border-zinc-800 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Course Contents</h3>
              <button
                onClick={() => setShowSidebar(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span className="text-zinc-400">{currentIndex + 1}/{allLessons.length}</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / allLessons.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Lessons */}
            <div className="space-y-2">
              {allLessons.map((l, i) => (
                <Link
                  key={l.id}
                  href={`/courses/${lesson.courseId}/lessons/${l.id}`}
                  className={`block p-3 rounded-lg transition ${
                    l.id === lesson.id
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-zinc-800 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCompleted && i <= currentIndex && <Check size={16} className="text-green-400" />}
                    <span className="text-sm font-medium">{i + 1}. {l.title}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Engagement Buttons */}
            <div className="mt-8 pt-8 border-t border-zinc-800 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition">
                <Bookmark size={18} />
                Save Lesson
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Toggle (when closed) */}
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(true)}
          className="fixed right-4 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-l-lg"
        >
          <ChevronDown size={20} className="rotate-90" />
        </button>
      )}
    </div>
  )
}

// ============================================================================

// 3. DIAGRAM VIEWER COMPONENT
// components/DiagramViewer.tsx
'use client'

import { useState } from 'react'

export interface Diagram {
  id: string
  title: string
  type: 'drawio' | 'mermaid'
  url: string
  description: string
}

export function DiagramViewer({ diagram }: { diagram: Diagram }) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="my-8 border border-zinc-700 rounded-lg overflow-hidden bg-zinc-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-zinc-800 border-b border-zinc-700">
        <div>
          <h3 className="font-bold text-white">{diagram.title}</h3>
          <p className="text-sm text-zinc-400 mt-1">{diagram.description}</p>
        </div>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded transition"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>

      {/* Diagram */}
      <div className={isFullscreen ? 'fixed inset-0 bg-black z-50 flex items-center justify-center' : ''}>
        {diagram.type === 'drawio' && (
          <iframe
            src={`https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=${diagram.title}#R${diagram.url}`}
            style={{
              width: isFullscreen ? '100vw' : '100%',
              height: isFullscreen ? '100vh' : '600px',
              border: 'none',
            }}
            allow="fullscreen"
          />
        )}

        {diagram.type === 'mermaid' && (
          <div className="w-full p-8 bg-zinc-900" style={{ height: isFullscreen ? '100vh' : '600px' }}>
            {/* Use mermaid.js for rendering */}
            <pre className="mermaid">{diagram.url}</pre>
          </div>
        )}
      </div>

      {/* Edit Link */}
      <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
        <a
          href={`https://app.diagrams.net/#R${diagram.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          Edit this diagram in draw.io ↗
        </a>
      </div>
    </div>
  )
}

// ============================================================================

// 4. DISCUSSION THREAD COMPONENT
// components/DiscussionThread.tsx
'use client'

import { useState } from 'react'
import { ThumbsUp, MessageCircle, Flag } from 'lucide-react'

export interface Reply {
  id: string
  author: {
    name: string
    avatar: string
    role?: 'instructor' | 'student'
  }
  content: string
  createdAt: Date
  likes: number
  isAnswered?: boolean
}

export interface DiscussionThreadProps {
  id: string
  title: string
  author: {
    name: string
    avatar: string
  }
  createdAt: Date
  content: string
  replies: Reply[]
  solved: boolean
  views: number
}

export function DiscussionThread({
  id,
  title,
  author,
  createdAt,
  content,
  replies,
  solved,
  views,
}: DiscussionThreadProps) {
  const [userReply, setUserReply] = useState('')
  const [isPosting, setIsPosting] = useState(false)

  const handlePostReply = async () => {
    setIsPosting(true)
    // API call here
    setUserReply('')
    setIsPosting(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Original Post */}
      <div className="border border-zinc-700 rounded-lg p-8 mb-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-white">{author.name}</h3>
              <p className="text-sm text-zinc-400">
                {createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>

          {solved && (
            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-xs font-semibold rounded-full">
              ✓ Answered
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="prose dark:prose-invert max-w-none mb-6">
          {content}
        </div>

        {/* Metadata */}
        <div className="flex gap-6 text-sm text-zinc-400 pt-4 border-t border-zinc-700">
          <span className="flex items-center gap-1">
            <MessageCircle size={16} /> {replies.length} replies
          </span>
          <span>{views} views</span>
        </div>
      </div>

      {/* Replies */}
      <div className="space-y-4 mb-8">
        {replies.map((reply) => (
          <div
            key={reply.id}
            className={`border rounded-lg p-6 ${
              reply.isAnswered
                ? 'border-green-600/30 bg-green-600/5'
                : 'border-zinc-700'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <img
                  src={reply.author.avatar}
                  alt={reply.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">{reply.author.name}</h4>
                    {reply.author.role === 'instructor' && (
                      <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">
                        Instructor
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">
                    {reply.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>

              {reply.isAnswered && (
                <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded">
                  ✓ Selected Answer
                </span>
              )}
            </div>

            <div className="prose dark:prose-invert max-w-none mb-4">
              {reply.content}
            </div>

            {/* Actions */}
            <div className="flex gap-4 text-sm text-zinc-400 pt-3 border-t border-zinc-700">
              <button className="flex items-center gap-1 hover:text-white transition">
                <ThumbsUp size={16} />
                {reply.likes}
              </button>
              <button className="hover:text-white transition">Reply</button>
              <button className="ml-auto hover:text-white transition">
                <Flag size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Form */}
      <div className="border border-zinc-700 rounded-lg p-6">
        <h3 className="font-bold text-white mb-4">Post Your Reply</h3>
        <textarea
          value={userReply}
          onChange={(e) => setUserReply(e.target.value)}
          placeholder="Share your thoughts or answer..."
          className="w-full h-32 p-4 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none resize-none"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 text-zinc-400 hover:text-white transition">
            Cancel
          </button>
          <button
            onClick={handlePostReply}
            disabled={!userReply.trim() || isPosting}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition"
          >
            {isPosting ? 'Posting...' : 'Post Reply'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================

// 5. COURSE SIDEBAR COMPONENT
// components/CourseSidebar.tsx
import Link from 'next/link'
import { CheckCircle2, Circle } from 'lucide-react'

export interface Section {
  id: string
  title: string
  lessons: Array<{
    id: string
    title: string
    order: number
    completed: boolean
  }>
}

export function CourseSidebar({ sections, currentLessonId }: { sections: Section[]; currentLessonId?: string }) {
  return (
    <div className="w-72 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-6">Course Contents</h3>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase">
              {section.title}
            </h4>

            {/* Lessons */}
            <div className="space-y-2">
              {section.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition ${
                    lesson.id === currentLessonId
                      ? 'bg-blue-600/20 border border-blue-500'
                      : 'hover:bg-zinc-800'
                  }`}
                >
                  {lesson.completed ? (
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle size={18} className="text-zinc-600 flex-shrink-0" />
                  )}
                  <span className="text-sm text-zinc-300 line-clamp-2">
                    {lesson.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
