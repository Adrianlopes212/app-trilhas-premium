'use client';

import { MapPin, TrendingUp, Clock, Star } from 'lucide-react';
import type { Trail } from '@/lib/mock-data';

interface TrailCardProps {
  trail: Trail;
}

export default function TrailCard({ trail }: TrailCardProps) {
  const difficultyColors = {
    Fácil: 'text-green-400',
    Moderada: 'text-yellow-400',
    Difícil: 'text-orange-400',
    Extrema: 'text-red-400',
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00FF00]/10">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={trail.image}
          alt={trail.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        
        {/* Difficulty Badge */}
        <div className={`absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur-sm ${difficultyColors[trail.difficulty]}`}>
          {trail.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#00FF00] transition-colors">
          {trail.name}
        </h3>
        
        <div className="mb-4 flex items-center gap-1 text-sm text-gray-400">
          <MapPin className="h-4 w-4" />
          <span>{trail.location}</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 border-t border-[#2a2a2a] pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Distância</span>
            <span className="text-sm font-semibold text-white">{trail.distance}km</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Duração</span>
            <span className="text-sm font-semibold text-white">{trail.duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Elevação</span>
            <span className="text-sm font-semibold text-white">{trail.elevation}m</span>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between border-t border-[#2a2a2a] pt-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#00FF00] text-[#00FF00]" />
            <span className="font-semibold text-white">{trail.rating}</span>
            <span className="text-sm text-gray-500">({trail.reviews})</span>
          </div>
          <button className="rounded-lg bg-[#00FF00] px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-[#00CC00] hover:shadow-lg hover:shadow-[#00FF00]/20">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
