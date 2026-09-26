import React, { useState } from 'react';
import { Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import { SIX_WIVES_FATES } from '../data';

export const WivesGrid: React.FC = () => {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [mobileViewAll, setMobileViewAll] = useState(false);

  const handlePrevMobile = () => {
    setMobileActiveIndex((prev) => (prev > 0 ? prev - 1 : SIX_WIVES_FATES.length - 1));
  };

  const handleNextMobile = () => {
    setMobileActiveIndex((prev) => (prev < SIX_WIVES_FATES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="wives-summary-grid-container" className="my-6 sm:my-8">
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3
          id="wives-grid-title"
          className="text-lg sm:text-xl font-bold text-[#4a154b] flex items-center gap-2"
        >
          <Crown className="w-5 h-5 text-[#4a154b]" />
          <span>The Six Queens</span>
        </h3>

        {/* Mobile View Toggle */}
        <div className="sm:hidden flex items-center justify-between pt-1">
          <span className="text-xs text-[#6b216d] font-medium">
            {mobileViewAll ? 'Showing all 6' : `Queen ${mobileActiveIndex + 1} of 6`}
          </span>
          <button
            type="button"
            onClick={() => setMobileViewAll(!mobileViewAll)}
            className="text-xs font-semibold text-[#4a154b] underline underline-offset-2"
          >
            {mobileViewAll ? 'Show Carousel' : 'View All List'}
          </button>
        </div>
      </div>

      {/* MOBILE SPECIFIC LAYOUT (< sm breakpoint) */}
      <div className="block sm:hidden">
        {!mobileViewAll ? (
          /* Mobile Single Card Carousel with Touch Controls */
          <div className="space-y-3">
            {/* Quick Queen Numbers Switcher */}
            <div className="flex items-center justify-center gap-1.5 pb-1">
              {SIX_WIVES_FATES.map((wife, idx) => (
                <button
                  key={wife.order}
                  type="button"
                  onClick={() => setMobileActiveIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    mobileActiveIndex === idx
                      ? 'bg-[#4a154b] text-white shadow-xs scale-105'
                      : 'bg-[#fbf3fb] text-[#6b216d] border border-[#eedcee]'
                  }`}
                  aria-label={`View ${wife.name}`}
                >
                  #{wife.order}
                </button>
              ))}
            </div>

            {/* Active Card */}
            {(() => {
              const currentWife = SIX_WIVES_FATES[mobileActiveIndex];
              return (
                <div
                  id={`mobile-wife-card-${currentWife.order}`}
                  className="bg-white border-2 border-[#eedcee] p-5 rounded-2xl shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#6b216d] uppercase tracking-wider">
                      Wife #{currentWife.order}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#4a154b]">
                    {currentWife.name}
                  </h4>
                  <p className="text-sm text-[#5e1c60] mt-2 leading-relaxed">
                    {currentWife.detail}
                  </p>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#f4e6f4]">
                    <button
                      type="button"
                      onClick={handlePrevMobile}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4a154b] py-1.5 px-3 rounded-lg bg-[#fbf3fb] border border-[#d6bcd6]"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" /> Previous
                    </button>
                    <span className="text-xs text-[#6b216d] font-semibold">
                      {mobileActiveIndex + 1} / 6
                    </span>
                    <button
                      type="button"
                      onClick={handleNextMobile}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4a154b] py-1.5 px-3 rounded-lg bg-[#fbf3fb] border border-[#d6bcd6]"
                    >
                      Next <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        ) : (
          /* Mobile Stacked List */
          <div className="space-y-3">
            {SIX_WIVES_FATES.map((wife) => (
              <div
                key={wife.order}
                id={`wife-mobile-list-${wife.order}`}
                className="bg-white border-2 border-[#eedcee] p-4 rounded-xl shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#6b216d] uppercase tracking-wider">
                    Wife #{wife.order}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#4a154b]">{wife.name}</h4>
                <p className="text-sm text-[#5e1c60] mt-1 leading-relaxed">{wife.detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TABLET (2 cols) & DESKTOP (3 cols) LAYOUT (>= sm breakpoint) */}
      <div
        id="wives-cards-grid"
        className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SIX_WIVES_FATES.map((wife) => (
          <div
            key={wife.order}
            id={`wife-card-${wife.order}`}
            className="bg-white border-2 border-[#eedcee] hover:border-[#4a154b] transition-all p-5 rounded-xl shadow-2xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  id={`wife-order-${wife.order}`}
                  className="text-xs font-bold text-[#6b216d] uppercase tracking-wider"
                >
                  Wife #{wife.order}
                </span>
              </div>
              <h4
                id={`wife-name-${wife.order}`}
                className="text-lg font-bold text-[#4a154b]"
              >
                {wife.name}
              </h4>
              <p
                id={`wife-desc-${wife.order}`}
                className="text-sm text-[#5e1c60] mt-2 leading-relaxed"
              >
                {wife.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
