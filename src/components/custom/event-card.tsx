'use client';

import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import type { Event } from '@/lib/mock-data';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const participationPercentage = (event.participants / event.maxParticipants) * 100;
  const spotsLeft = event.maxParticipants - event.participants;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00FF00]/10">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute left-3 top-3 rounded-xl bg-black/60 px-3 py-2 backdrop-blur-sm">
          <p className="text-xs text-gray-400">Data</p>
          <p className="text-sm font-bold text-[#00FF00]">
            {new Date(event.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-3 text-lg font-bold text-white group-hover:text-[#00FF00] transition-colors">
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="h-4 w-4" />
            <span>{event.distance}km • {event.difficulty}</span>
          </div>
        </div>

        {/* Participants Progress */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#00FF00]" />
              <span className="text-gray-400">Participantes</span>
            </div>
            <span className="font-semibold text-white">
              {event.participants}/{event.maxParticipants}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#2a2a2a]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#00FF00] to-[#00CC00] transition-all duration-500"
              style={{ width: `${participationPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">
            {spotsLeft > 0 ? `${spotsLeft} vagas restantes` : 'Evento lotado'}
          </p>
        </div>

        {/* Action Button */}
        <button
          className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
            spotsLeft > 0
              ? 'bg-[#00FF00] text-black hover:bg-[#00CC00] hover:shadow-lg hover:shadow-[#00FF00]/20'
              : 'cursor-not-allowed bg-gray-700 text-gray-400'
          }`}
          disabled={spotsLeft === 0}
        >
          {spotsLeft > 0 ? 'Participar do Evento' : 'Evento Lotado'}
        </button>
      </div>
    </div>
  );
}
