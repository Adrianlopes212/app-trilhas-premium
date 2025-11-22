'use client';

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { CommunityPost } from '@/lib/mock-data';

interface CommunityFeedProps {
  posts: CommunityPost[];
}

export default function CommunityFeed({ posts }: CommunityFeedProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6">
        <h2 className="mb-2 text-2xl font-bold text-white">Comunidade</h2>
        <p className="text-gray-400">Compartilhe suas aventuras e inspire outros trilheiros</p>
        
        {/* New Post Button */}
        <button className="mt-4 w-full rounded-xl bg-[#00FF00] px-6 py-3 font-semibold text-black transition-all hover:bg-[#00CC00] hover:shadow-lg hover:shadow-[#00FF00]/20">
          Compartilhar Aventura
        </button>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all hover:bg-[#222222]"
        >
          {/* Post Header */}
          <div className="flex items-center gap-3 p-5">
            <img
              src={post.avatar}
              alt={post.author}
              className="h-12 w-12 rounded-full border-2 border-[#00FF00]"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{post.author}</h3>
              <p className="text-sm text-gray-400">
                {post.trail} • {post.timestamp}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-5 pb-4">
            <p className="text-gray-300">{post.content}</p>
          </div>

          {/* Post Image */}
          <div className="relative h-80 w-full overflow-hidden">
            <img
              src={post.image}
              alt="Post"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between border-t border-[#2a2a2a] p-5">
            <button className="group flex items-center gap-2 transition-colors hover:text-[#00FF00]">
              <Heart className="h-5 w-5 text-gray-400 transition-colors group-hover:fill-[#00FF00] group-hover:text-[#00FF00]" />
              <span className="text-sm font-semibold text-gray-400 group-hover:text-[#00FF00]">
                {post.likes}
              </span>
            </button>

            <button className="group flex items-center gap-2 transition-colors hover:text-[#00FF00]">
              <MessageCircle className="h-5 w-5 text-gray-400 transition-colors group-hover:text-[#00FF00]" />
              <span className="text-sm font-semibold text-gray-400 group-hover:text-[#00FF00]">
                {post.comments}
              </span>
            </button>

            <button className="group flex items-center gap-2 transition-colors hover:text-[#00FF00]">
              <Share2 className="h-5 w-5 text-gray-400 transition-colors group-hover:text-[#00FF00]" />
              <span className="text-sm font-semibold text-gray-400 group-hover:text-[#00FF00]">
                Compartilhar
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
