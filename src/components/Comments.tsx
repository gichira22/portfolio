'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface Comment {
  id: number
  content: string
  author: {
    username: string
  }
  created_at: string
  replies: Comment[]
}

interface CommentsProps {
  postId: string
  initialComments: Comment[]
}

export default function Comments({ postId, initialComments }: CommentsProps) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const { data: session } = useSession()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session) {
      toast.error('Please sign in to comment')
      return
    }

    if (!newComment.trim()) {
      toast.error('Comment cannot be empty')
      return
    }

    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      })

      if (!response.ok) {
        throw new Error('Failed to post comment')
      }

      const data = await response.json()
      setComments([data, ...comments])
      setNewComment('')
      toast.success('Comment posted successfully')
    } catch (error) {
      toast.error('Failed to post comment')
    }
  }

  const handleReply = (parentId: number) => {
    // TODO: Implement reply functionality
    console.log('Replying to comment:', parentId)
  }

  const renderComment = (comment: Comment, depth = 0) => (
    <motion.div
      key={comment.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: depth * 0.1 }}
      className={`mb-4 pl-${depth * 4}`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-sm font-medium">{comment.author.username[0]}</span>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-sm">
            <span className="font-medium text-gray-900 dark:text-white">{comment.author.username}</span>
            <span className="mx-1">•</span>
            <span className="text-gray-500 dark:text-gray-400">
              {new Date(comment.created_at).toLocaleDateString()}
            </span>
          </div>
          <div className="mt-1 text-gray-700 dark:text-gray-300">
            {comment.content}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <button
              onClick={() => handleReply(comment.id)}
              className="hover:text-primary-600 dark:hover:text-primary-400"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      {comment.replies.map((reply) => renderComment(reply, depth + 1))}
    </motion.div>
  )

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            rows={3}
          />
          <button
            type="submit"
            disabled={!session}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {session ? 'Post Comment' : 'Sign in to comment'}
          </button>
        </form>
      </div>
      <div className="space-y-6">
        {comments.map((comment) => renderComment(comment))}
      </div>
    </div>
  )
}
