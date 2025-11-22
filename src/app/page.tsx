'use client';

import { useState } from 'react';
import Navigation from '@/components/custom/navigation';
import TrailCard from '@/components/custom/trail-card';
import ProfileStats from '@/components/custom/profile-stats';
import CommunityFeed from '@/components/custom/community-feed';
import EventCard from '@/components/custom/event-card';
import { mockTrails, mockUserStats, mockBadges, mockCommunityPosts, mockEvents } from '@/lib/mock-data';
import { Search, Filter, MapPin, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#0D0D0D] pb-20 lg:pb-0 lg:pl-20">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#0D0D0D] to-[#0D0D0D] p-8">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00FF00]/5 blur-3xl" />
              <div className="relative">
                <h1 className="mb-2 text-4xl font-bold text-white">
                  Bem-vindo ao <span className="text-[#00FF00]">Full Trail Pro</span>
                </h1>
                <p className="text-lg text-gray-400">
                  Explore trilhas incríveis e conecte-se com a comunidade
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6 transition-all hover:scale-105">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#00FF00]/10 blur-2xl" />
                <div className="relative">
                  <MapPin className="mb-3 h-8 w-8 text-[#00FF00]" />
                  <p className="text-3xl font-bold text-white">{mockTrails.length}</p>
                  <p className="text-sm text-gray-400">Trilhas Disponíveis</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6 transition-all hover:scale-105">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#00FF00]/10 blur-2xl" />
                <div className="relative">
                  <TrendingUp className="mb-3 h-8 w-8 text-[#00FF00]" />
                  <p className="text-3xl font-bold text-white">{mockUserStats.totalTrails}</p>
                  <p className="text-sm text-gray-400">Trilhas Completadas</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6 transition-all hover:scale-105">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#00FF00]/10 blur-2xl" />
                <div className="relative">
                  <Zap className="mb-3 h-8 w-8 text-orange-500" />
                  <p className="text-3xl font-bold text-white">{mockUserStats.streak}</p>
                  <p className="text-sm text-gray-400">Dias de Sequência</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6 transition-all hover:scale-105">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#00FF00]/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00FF00] text-lg font-bold text-black">
                    {mockUserStats.level}
                  </div>
                  <p className="text-3xl font-bold text-white">Nível</p>
                  <p className="text-sm text-gray-400">Explorador</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="overflow-hidden rounded-3xl bg-[#1a1a1a]">
              <div className="border-b border-[#2a2a2a] p-6">
                <h2 className="text-2xl font-bold text-white">Mapa de Trilhas</h2>
                <p className="text-gray-400">Explore trilhas próximas a você</p>
              </div>
              <div className="relative h-96 w-full bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-16 w-16 text-[#00FF00]" />
                    <p className="text-xl font-semibold text-white">Mapa Interativo</p>
                    <p className="text-gray-400">Visualização de trilhas em desenvolvimento</p>
                  </div>
                </div>
                {/* Map Markers Mock */}
                {mockTrails.map((trail, index) => (
                  <div
                    key={trail.id}
                    className="absolute animate-pulse"
                    style={{
                      left: `${20 + index * 20}%`,
                      top: `${30 + (index % 2) * 30}%`,
                    }}
                  >
                    <div className="group relative">
                      <div className="h-4 w-4 rounded-full bg-[#00FF00] shadow-lg shadow-[#00FF00]/50" />
                      <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/90 px-3 py-2 text-xs text-white group-hover:block">
                        {trail.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Trails */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Trilhas em Destaque</h2>
                <button className="text-sm font-semibold text-[#00FF00] transition-colors hover:text-[#00CC00]">
                  Ver Todas
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockTrails.slice(0, 3).map((trail) => (
                  <TrailCard key={trail.id} trail={trail} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Trails Tab */}
        {activeTab === 'trails' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="rounded-2xl bg-[#1a1a1a] p-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar trilhas..."
                    className="w-full rounded-xl bg-[#0D0D0D] py-3 pl-12 pr-4 text-white placeholder-gray-500 outline-none ring-2 ring-transparent transition-all focus:ring-[#00FF00]"
                  />
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-[#00FF00] px-6 py-3 font-semibold text-black transition-all hover:bg-[#00CC00]">
                  <Filter className="h-5 w-5" />
                  Filtros
                </button>
              </div>
            </div>

            {/* All Trails */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockTrails.map((trail) => (
                <TrailCard key={trail.id} trail={trail} />
              ))}
            </div>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <CommunityFeed posts={mockCommunityPosts} />
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] p-6">
              <h2 className="mb-2 text-2xl font-bold text-white">Eventos e Competições</h2>
              <p className="text-gray-400">Participe de encontros e desafios com outros trilheiros</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <ProfileStats stats={mockUserStats} badges={mockBadges} />
        )}
      </main>
    </div>
  );
}
