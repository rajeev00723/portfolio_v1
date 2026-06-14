// ============================================================================
// API ROUTES & DATABASE SETUP
// ============================================================================

// 1. DATABASE SETUP (Supabase/PostgreSQL)
// lib/db.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database schemas (run these in Supabase SQL editor)
const CREATE_TABLES_SQL = `
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'student', -- 'student', 'instructor', 'admin'
  bio TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL, -- 'Beginner', 'Intermediate', 'Advanced'
  duration INTEGER, -- in hours
  instructor_id UUID REFERENCES users(id),
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- Lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  order_num INTEGER NOT NULL,
  content TEXT,
  video_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Diagrams table
CREATE TABLE IF NOT EXISTS diagrams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- 'drawio', 'mermaid'
  url TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- User Progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  UNIQUE(user_id, lesson_id)
);

-- Discussions table
CREATE TABLE IF NOT EXISTS discussions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  author_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  solved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Replies table
CREATE TABLE IF NOT EXISTS replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  discussion_id UUID REFERENCES discussions(id) ON DELETE CASCADE,
  author_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  is_answer BOOLEAN DEFAULT false,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL, -- 'pdf', 'github', 'link'
  created_at TIMESTAMP DEFAULT now()
);

-- Enroll table
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, course_id)
);
`

// ============================================================================

// 2. COURSES API
// app/api/courses/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('courses')
      .insert([body])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 3. LESSONS API
// app/api/lessons/[lessonId]/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { lessonId: string } }
) {
  try {
    // Get lesson with related data
    const { data: lesson, error: lessonError } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', params.lessonId)
      .single()

    if (lessonError) throw lessonError

    // Get diagrams
    const { data: diagrams } = await supabase
      .from('diagrams')
      .select('*')
      .eq('lesson_id', params.lessonId)

    // Get resources
    const { data: resources } = await supabase
      .from('resources')
      .select('*')
      .eq('lesson_id', params.lessonId)

    return NextResponse.json({
      ...lesson,
      diagrams,
      resources,
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 4. DISCUSSIONS API
// app/api/discussions/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const lessonId = searchParams.get('lessonId')

    let query = supabase.from('discussions').select(`
      *,
      author:users(name, avatar_url),
      replies(count)
    `)

    if (lessonId) {
      query = query.eq('lesson_id', lessonId)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('discussions')
      .insert([body])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 5. REPLIES API
// app/api/discussions/[discussionId]/replies/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { discussionId: string } }
) {
  try {
    const { data, error } = await supabase
      .from('replies')
      .select(`
        *,
        author:users(name, avatar_url, role)
      `)
      .eq('discussion_id', params.discussionId)
      .order('created_at', { ascending: true })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { discussionId: string } }
) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('replies')
      .insert([{ ...body, discussion_id: params.discussionId }])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 6. PROGRESS API
// app/api/progress/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')
    const courseId = searchParams.get('courseId')

    let query = supabase
      .from('user_progress')
      .select(`
        *,
        lesson:lessons(title, order_num, course_id)
      `)

    if (userId) query = query.eq('user_id', userId)
    if (courseId) {
      query = query
        .select(`
          *,
          lesson:lessons(title, order_num)
        `)
        .in('lesson_id', 
          supabase.from('lessons')
            .select('id')
            .eq('course_id', courseId)
        )
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('user_progress')
      .upsert([
        {
          ...body,
          completed_at: body.completed ? new Date() : null,
        },
      ])
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 7. DIAGRAMS API
// app/api/diagrams/route.ts
import { supabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Upload diagram data
    const { data, error } = await supabase
      .from('diagrams')
      .insert([body])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

// ============================================================================

// 8. HELPER FUNCTIONS
// lib/course-service.ts
import { supabase } from '@/lib/db'

export async function getCourseWithLessons(courseId: string) {
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select(`
      *,
      lessons(*)
    `)
    .eq('id', courseId)
    .single()

  if (courseError) throw courseError

  return course
}

export async function getLessonWithDiagrams(lessonId: string) {
  const { data: lesson, error: lessonError } = await supabase
    .from('lessons')
    .select(`
      *,
      diagrams(*),
      resources(*)
    `)
    .eq('id', lessonId)
    .single()

  if (lessonError) throw lessonError

  return lesson
}

export async function getUserCourseProgress(userId: string, courseId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .in('lesson_id',
      supabase.from('lessons')
        .select('id')
        .eq('course_id', courseId)
    )

  if (error) throw error

  return data
}

export async function markLessonComplete(userId: string, lessonId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .upsert([
      {
        user_id: userId,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date(),
      },
    ])

  if (error) throw error

  return data
}

export async function searchDiscussions(query: string, lessonId?: string) {
  let search = supabase
    .from('discussions')
    .select('*')
    .textSearch('title', query)

  if (lessonId) {
    search = search.eq('lesson_id', lessonId)
  }

  const { data, error } = await search

  if (error) throw error

  return data
}
