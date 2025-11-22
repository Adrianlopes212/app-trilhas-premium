'use client';

import { TrendingUp, Mountain, Clock, Flame, Award, Zap } from 'lucide-react';
import type { UserStats, Badge } from '@/lib/mock-data';

interface ProfileStatsProps {
  stats: UserStats;
  badges: Badge[];
}

export default function ProfileStats({ stats, badges }: ProfileStatsProps) {
  const xpPercentage = (stats.xp / stats.nextLevelXp) * 100;

  return (
    <div className="space-y-6">
      {/* Header com Avatar */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-8">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00FF00]/5 blur-3xl" />
        <div className="relative flex flex-col items-center gap-4 sm:flex-row">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#00FF00] to-[#00CC00] p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0D0D0D]">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                alt="Avatar"
                className="h-20 w-20 rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">João Trilheiro</h2>
            <p className="text-gray-400">Explorador Nível {stats.level}</p>
            
            {/* XP Bar */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Experiência</span>
                <span className="font-semibold text-[#00FF00]">
                  {stats.xp} / {stats.nextLevelXp} XP
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#2a2a2a]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00FF00] to-[#00CC00] transition-all duration-500"
                  style={{ width: `${xpPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl bg-[#1a1a1a] p-5 transition-all hover:bg-[#222222]">
          <div className="mb-2 flex items-center gap-2">
            <Mountain className="h-5 w-5 text-[#00FF00]" />
            <span className="text-sm text-gray-400">Trilhas</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalTrails}</p>
        </div>

        <div className="rounded-2xl bg-[#1a1a1a] p-5 transition-all hover:bg-[#222222]">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#00FF00]" />
            <span className="text-sm text-gray-400">Distância</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalDistance}km</p>
        </div>

        <div className="rounded-2xl bg-[#1a1a1a] p-5 transition-all hover:bg-[#222222]">
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#00FF00]" />
            <span className="text-sm text-gray-400">Tempo</span>
          </div>
          <p className="text-xl font-bold text-white">{stats.totalTime}</p>
        </div>

        <div className="rounded-2xl bg-[#1a1a1a] p-5 transition-all hover:bg-[#222222]">
          <div className="mb-2 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-400">Sequência</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.streak} dias</p>
        </div>
      </div>

      {/* Badges */}
      <div className="rounded-2xl bg-[#1a1a1a] p-6">
        <div className="mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-[#00FF00]" />
          <h3 className="text-lg font-bold text-white">Conquistas</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`group relative flex flex-col items-center gap-2 rounded-xl p-4 transition-all ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-[#00FF00]/10 to-transparent hover:from-[#00FF00]/20'
                  : 'bg-[#0D0D0D] opacity-40'
              }`}
            >
              <div className={`text-4xl ${badge.unlocked ? 'scale-100' : 'grayscale'}`}>
                {badge.icon}
              </div>
              <p className="text-center text-xs font-semibold text-white">{badge.name}</p>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden w-48 rounded-lg bg-black/90 p-2 text-xs text-white group-hover:block">
                {badge.description}
                {badge.unlocked && badge.unlockedAt && (
                  <p className="mt-1 text-[#00FF00]">Desbloqueado em {badge.unlockedAt}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl bg-[#1a1a1a] p-6">
        <div className="mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-[#00FF00]" />
          <h3 className="text-lg font-bold text-white">Atividade Recente</h3>
        </div>
        <div className="space-y-3">
          {[
            { action: 'Completou', trail: 'Trilha da Cachoeira do Tabuleiro', time: '2 dias atrás' },
            { action: 'Desbloqueou', trail: 'Badge "Explorador"', time: '5 dias atrás' },
            { action: 'Participou', trail: 'Evento Trail Running - Serra', time: '1 semana atrás' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-3 rounded-lg bg-[#0D0D0D] p-3">
              <div className="h-2 w-2 rounded-full bg-[#00FF00]" />
              <div className="flex-1">
                <p className="text-sm text-white">
                  <span className="text-gray-400">{activity.action}</span> {activity.trail}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
