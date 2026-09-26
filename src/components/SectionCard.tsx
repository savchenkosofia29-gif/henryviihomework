import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  id: string;
  numberTag: string;
  heading: string;
  content: string;
  icon: LucideIcon;
  highlightText?: string;
  className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  id,
  numberTag,
  heading,
  content,
  icon: Icon,
  className = '',
}) => {
  return (
    <article
      id={id}
      className={`bg-white border-2 border-[#eedcee] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs hover:border-[#d6bcd6] transition-colors flex flex-col justify-between ${className}`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          id={`${id}-icon-box`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#fbf3fb] border border-[#d6bcd6] flex-shrink-0 flex items-center justify-center text-[#4a154b]"
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="flex-1 space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-2">
            <span
              id={`${id}-tag`}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6b216d] bg-[#f8eef8] px-2.5 py-0.5 rounded-md"
            >
              {numberTag}
            </span>
          </div>

          <h2
            id={`${id}-heading`}
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#4a154b] tracking-tight leading-snug"
          >
            {heading}
          </h2>

          <p
            id={`${id}-content`}
            className="text-sm sm:text-base md:text-lg text-[#4a154b] leading-relaxed font-normal pt-1"
          >
            {content}
          </p>
        </div>
      </div>
    </article>
  );
};
