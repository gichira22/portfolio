'use client'

import { motion } from 'framer-motion'
import { ShareButtons, ShareCounts, loadShare } from 'react-share'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedInShareButton,
  WhatsAppShareButton,
  TelegramShareButton,
  RedditShareButton,
  PinterestShareButton,
} from 'react-share'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
  TelegramIcon,
  RedditIcon,
  PinterestIcon,
} from 'react-share'

interface EnhancedSocialShareProps {
  title: string
  url: string
  description?: string
  image?: string
}

export default function EnhancedSocialShare({
  title,
  url,
  description = 'Check out this interesting article on my blog',
  image,
}: EnhancedSocialShareProps) {
  const shareOptions = {
    title,
    url,
    description,
    image,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      <FacebookShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <LinkedInShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <LinkedInIcon size={32} round={true} />
      </LinkedInShareButton>

      <WhatsAppShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <WhatsAppIcon size={32} round={true} />
      </WhatsAppShareButton>

      <TelegramShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>

      <RedditShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <RedditIcon size={32} round={true} />
      </RedditShareButton>

      <PinterestShareButton
        {...shareOptions}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
    </motion.div>
  )
}
