'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface LikeButtonProps {
  postId: string
  initialLikes: number
  initialIsLiked: boolean
}

export default function LikeButton({ postId, initialLikes, initialIsLiked }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(initialIsLiked)
  const { data: session } = useSession()

  const handleLike = async () => {
    if (!session) {
      toast.error('Please sign in to like posts')
      return
    }

    try {
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to update like status')
      }

      const data = await response.json()
      setIsLiked(data.liked)
      setLikes(data.liked ? likes + 1 : likes - 1)
      toast.success(data.liked ? 'Post liked!' : 'Like removed')
    } catch (error) {
      toast.error('Failed to update like status')
    }
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex items-center gap-2 cursor-pointer"
      onClick={handleLike}
    >
      <svg
        className={`w-5 h-5 ${isLiked ? 'text-primary-600' : 'text-gray-500'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span className="text-gray-700 dark:text-gray-300">{likes}</span>
    </motion.div>
  )
}
