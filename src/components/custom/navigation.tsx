'use client';

import { useState } from 'react';
import { Map, User, Users, Mountain, Calendar } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Map },
    { id: 'trails', label: 'Trilhas', icon: Mountain },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-20 lg:flex-col lg:items-center lg:gap-8 lg:border-r lg:border-[#1a1a1a] lg:bg-[#0D0D0D] lg:py-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00FF00] to-[#00CC00] font-bold text-black">
          FT
        </div>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-[#00FF00] text-black shadow-lg shadow-[#00FF00]/20'
                  : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-[#00FF00]'
              }`}
              aria-label={tab.label}
            >
              <Icon className="h-5 w-5" />
              <span className="absolute left-full ml-4 hidden whitespace-nowrap rounded-lg bg-[#1a1a1a] px-3 py-2 text-sm text-white group-hover:block">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[#1a1a1a] bg-[#0D0D0D] px-4 py-3 lg:hidden">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-[#00FF00]' : 'text-gray-400'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
