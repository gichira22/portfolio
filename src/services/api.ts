const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technology: string
  github_url: string
  live_url: string
  created_at: string
}

export interface Post {
  id: number
  title: string
  slug: string
  content: string
  image: string
  published: boolean
  created_at: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_URL}/projects/`)
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_URL}/posts/`)
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Contact form submission
export const submitContactForm = async (data: ContactFormData): Promise<ContactFormResponse> => {
  const response = await fetch(`${API_URL}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit form')
  }

  return result
}
