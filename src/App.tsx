/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Crown,
  Users,
  HeartHandshake,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  Scroll,
} from 'lucide-react';
import { INFO_SECTIONS } from './data';
import { SectionCard } from './components/SectionCard';
import { WivesGrid } from './components/WivesGrid';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { HenryBio } from './components/HenryBio';

export default function App() {
  const [whoTheyWere, whatHappened, whyTheseFates, summary] = INFO_SECTIONS.sections;

  return (
    <div
      id="website-root"
      className="min-h-screen bg-white text-[#4a154b] selection:bg-[#f6e6f6] selection:text-[#370d38]"
    >
      {/* Top Banner / Header */}
      <header
        id="page-header"
        className="border-b border-[#eedcee] bg-white sticky top-0 z-30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Crown id="header-crown-icon" className="w-5 h-5 sm:w-6 sm:h-6 text-[#4a154b]" />
            <span
              id="header-subtext"
              className="text-sm sm:text-base font-bold text-[#4a154b] tracking-wide"
            >
              Tudor History & Royalty
            </span>
          </div>

          <a
            href="#interactive-quiz-section"
            id="jump-to-quiz-btn"
            className="text-xs sm:text-sm font-semibold text-[#4a154b] bg-[#fbf2fb] border border-[#d6bcd6] hover:bg-[#f3e3f3] px-3.5 py-1.5 sm:py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Take the Quiz</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main
        id="main-content"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10"
      >
        {/* Main Title Section */}
        <section id="hero-title-section" className="text-center space-y-3 pb-2 sm:pb-4">
          <div
            id="tudor-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf2fb] border border-[#d6bcd6] text-[#4a154b] text-xs font-bold uppercase tracking-widest"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>The Tudor Dynasty</span>
          </div>

          <h1
            id="main-title"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#4a154b] tracking-tight leading-tight"
          >
            {INFO_SECTIONS.title}
          </h1>
        </section>

        {/* King Henry VIII Key Information (Before Part 1) */}
        <HenryBio />

        {/* SECTIONS 1 & 2:
            - Mobile (< md): Stacked vertically for comfortable phone reading.
            - Tablet & Desktop (>= md): 2-Column paired layout. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Section 1: Who They Were & Why He Married Them */}
          <SectionCard
            id="section-who-they-were"
            numberTag="Part 1: The Six Wives"
            heading={whoTheyWere.heading}
            content={whoTheyWere.content}
            icon={Users}
            className="h-full"
          />

          {/* Section 2: What Happened to Them */}
          <SectionCard
            id="section-what-happened"
            numberTag="Part 2: What Happened"
            heading={whatHappened.heading}
            content={whatHappened.content}
            icon={HeartHandshake}
            className="h-full"
          />
        </div>

        {/* THE SIX WIVES SECTION (Multi-Device Responsive: Mobile Touch Carousel/List, Tablet 2-Col, Desktop 3-Col) */}
        <WivesGrid />

        {/* SECTIONS 3 & 4:
            - Mobile (< md): Stacked vertically.
            - Tablet & Desktop (>= md): 2-Column paired layout. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Section 3: Why These Fates Occurred */}
          <SectionCard
            id="section-why-these-fates"
            numberTag="Part 3: Why It Happened"
            heading={whyTheseFates.heading}
            content={whyTheseFates.content}
            icon={ShieldAlert}
            className="h-full"
          />

          {/* Section 4: Summary */}
          <SectionCard
            id="section-summary"
            numberTag="Part 4: Summary"
            heading={summary.heading}
            content={summary.content}
            icon={Sparkles}
            className="h-full"
          />
        </div>

        {/* Section 5: Interactive Quiz */}
        <InteractiveQuiz />

        {/* RIGHT BOTTOM SECTION: At a Glance with Children, Deaths & Miscarriages all in one */}
        <div className="pt-6 sm:pt-8 flex justify-end">
          <aside
            id="at-a-glance-section"
            className="w-full md:max-w-xl lg:max-w-2xl bg-[#fdf8fd] border-2 border-[#eedcee] hover:border-[#d6bcd6] transition-colors rounded-2xl p-5 sm:p-7 shadow-xs space-y-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#eedcee] pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#fbf2fb] border border-[#eedcee] text-[#4a154b]">
                  <Scroll className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#4a154b]">
                    At a Glance
                  </h3>
                  <p className="text-xs text-[#6b216d]">
                    Tudor reign statistics, marriages & royal lineage
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6b216d] bg-[#f8eef8] px-2.5 py-1 rounded-md">
                1509 – 1547
              </span>
            </div>

            {/* Top Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#eedcee]">
                <span className="block text-2xl sm:text-3xl font-black text-[#4a154b]">6</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#6b216d]">Queens Married</span>
              </div>
              <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#eedcee]">
                <span className="block text-2xl sm:text-3xl font-black text-[#4a154b]">2</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#6b216d]">Beheaded for Treason</span>
              </div>
              <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#eedcee]">
                <span className="block text-2xl sm:text-3xl font-black text-[#4a154b]">38</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#6b216d]">Years Reigning</span>
              </div>
            </div>

            {/* Children, Deaths & Miscarriages */}
            <div className="bg-white rounded-xl border border-[#eedcee] p-4 sm:p-5 space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#f4e6f4] pb-2.5">
                <h4 className="text-sm sm:text-base font-bold text-[#4a154b]">
                  Children, Pregnancies & Losses
                </h4>
                <span className="text-xs font-extrabold text-[#4a154b] bg-[#fbf2fb] px-2.5 py-0.5 rounded-md border border-[#eedcee]">
                  11+ Total Recorded Pregnancies
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm text-[#4a154b]">
                {/* 3 Surviving Monarchs */}
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#fbf2fb] border border-[#d6bcd6] flex-shrink-0 flex items-center justify-center font-bold text-xs text-[#4a154b] mt-0.5">
                    3
                  </span>
                  <div>
                    <span className="font-bold text-[#4a154b]">Surviving Legitimate Monarchs:</span>{' '}
                    <span className="text-[#5e1c60]">
                      Mary I (by Catherine of Aragon), Elizabeth I (by Anne Boleyn), and Edward VI (by Jane Seymour; died age 15).
                    </span>
                  </div>
                </div>

                {/* 8+ Miscarriages, Stillbirths & Infant Deaths */}
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#fbf2fb] border border-[#d6bcd6] flex-shrink-0 flex items-center justify-center font-bold text-xs text-[#4a154b] mt-0.5">
                    8+
                  </span>
                  <div>
                    <span className="font-bold text-[#4a154b]">Miscarriages, Stillbirths & Infant Deaths:</span>{' '}
                    <span className="text-[#5e1c60]">
                      At least 5 tragic losses with Catherine of Aragon (including Prince Henry, Duke of Cornwall, who died at 52 days, plus multiple stillbirths); and at least 3 miscarriages/stillbirths with Anne Boleyn (including a male fetus in 1536).
                    </span>
                  </div>
                </div>

                {/* Illegitimate child & childless wives */}
                <div className="flex items-start gap-2.5 pt-1 border-t border-[#f8eef8]">
                  <span className="w-5 h-5 rounded-full bg-[#fbf2fb] border border-[#d6bcd6] flex-shrink-0 flex items-center justify-center font-bold text-xs text-[#4a154b] mt-0.5">
                    +
                  </span>
                  <div className="text-xs text-[#6b216d]">
                    <span className="font-semibold text-[#4a154b]">Additional Record:</span> 1 acknowledged illegitimate son (Henry FitzRoy, Duke of Richmond, lived to age 17). Anne of Cleves, Catherine Howard, and Catherine Parr bore no children to King Henry VIII.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
