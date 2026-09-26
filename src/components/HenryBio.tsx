import React from 'react';
import {
  Crown,
  Anchor,
  Flame,
  Music,
  Activity,
  Sparkles,
} from 'lucide-react';
import { HENRY_KEY_INFO } from '../data';

const getFactIcon = (id: string) => {
  switch (id) {
    case 'youth':
      return Music;
    case 'reformation':
      return Flame;
    case 'navy':
      return Anchor;
    case 'health':
      return Activity;
    default:
      return Sparkles;
  }
};

export const HenryBio: React.FC = () => {
  return (
    <section
      id="henry-key-info-section"
      aria-labelledby="henry-info-heading"
      className="bg-[#fdf8fd] border-2 border-[#eedcee] hover:border-[#d6bcd6] transition-colors rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs space-y-5"
    >
      {/* Header with Title and Reign Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#eedcee] pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#f6e8f6] border border-[#d6bcd6] text-[#4a154b] text-xs font-bold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Key Facts</span>
          </div>
          <h2
            id="henry-info-heading"
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4a154b] tracking-tight"
          >
            About Henry VIII
          </h2>
        </div>

        <div className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-white border border-[#eedcee] text-xs sm:text-sm font-semibold text-[#4a154b] shadow-2xs">
          Reign: 1509 – 1547 (38 years)
        </div>
      </div>

      {/* Quick Facts Metadata Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <div className="bg-white rounded-xl p-3 border border-[#eedcee] shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b356d] block mb-0.5">
            Lived
          </span>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {HENRY_KEY_INFO.lifespan}
          </p>
        </div>

        <div className="bg-white rounded-xl p-3 border border-[#eedcee] shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b356d] block mb-0.5">
            Family
          </span>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {HENRY_KEY_INFO.dynasty}
          </p>
        </div>

        <div className="bg-white rounded-xl p-3 border border-[#eedcee] shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b356d] block mb-0.5">
            Crowned King
          </span>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {HENRY_KEY_INFO.accession}
          </p>
        </div>

        <div className="bg-white rounded-xl p-3 border border-[#eedcee] shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b356d] block mb-0.5">
            Successful Child
          </span>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {HENRY_KEY_INFO.successor}
          </p>
        </div>
      </div>

      {/* Biographical Summary */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#eedcee] shadow-2xs">
        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          {HENRY_KEY_INFO.summary}
        </p>
      </div>

      {/* 4 Simple Key Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {HENRY_KEY_INFO.keyFacts.map((fact) => {
          const Icon = getFactIcon(fact.id);
          return (
            <div
              key={fact.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-[#eedcee] hover:border-[#d6bcd6] transition-colors shadow-2xs flex gap-3.5 items-start"
            >
              <div className="p-2.5 rounded-lg bg-[#fbf2fb] border border-[#eedcee] text-[#4a154b] shrink-0 mt-0.5">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#4a154b]">
                  {fact.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {fact.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
