'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function TestSupabase() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient()
        
        // Test connection with a simple health check
        const { data, error: err } = await supabase.auth.getSession()

        if (err) {
          setError(err.message)
        } else {
          setData({
            status: 'Connected successfully',
            session: data?.session ? 'Session exists' : 'No session (expected for anon key)',
            timestamp: new Date().toISOString()
          })
        }
      } catch (e) {
        setError(String(e))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Supabase Connection Test</h1>

      {loading && <p className="text-lg">Testing connection...</p>}

      {error && (
        <div className="p-4 bg-red-100 border border-red-400 rounded-lg">
          <p className="text-red-700">❌ Error: {error}</p>
        </div>
      )}

      {data && (
        <div className="p-4 bg-green-100 border border-green-400 rounded-lg">
          <p className="text-green-700">✅ Connected to Supabase!</p>
          <pre className="mt-4 p-4 bg-white rounded border border-green-300">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
