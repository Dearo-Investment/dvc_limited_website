import React from 'react';

export default function Logo({
  showText = true,
  className = '',
}: {
  showText?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {/* 2x2 Grid Logo Mark */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <clipPath id="sq4-clip-comp">
              <rect x="108" y="108" width="84" height="84" rx="6" />
            </clipPath>
          </defs>

          {/* Top-Left Box: D */}
          <rect x="8" y="8" width="84" height="84" rx="6" fill="#2E1B54" />
          <text
            x="50"
            y="53"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="52"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
            dominantBaseline="central"
          >
            D
          </text>

          {/* Top-Right Box: V */}
          <rect x="108" y="8" width="84" height="84" rx="6" fill="#2E1B54" />
          <text
            x="150"
            y="53"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="52"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
            dominantBaseline="central"
          >
            V
          </text>

          {/* Bottom-Left Box: C */}
          <rect x="8" y="108" width="84" height="84" rx="6" fill="#2E1B54" />
          <text
            x="50"
            y="153"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="52"
            fontWeight="600"
            fill="#FFFFFF"
            textAnchor="middle"
            dominantBaseline="central"
          >
            C
          </text>

          {/* Bottom-Right Box: Diagonal Stripe & Purple */}
          <g clipPath="url(#sq4-clip-comp)">
            <rect x="108" y="108" width="84" height="84" fill="#2E1B54" />
            <polygon points="108,192 192,108 192,192" fill="#8B5CF6" />
            <polygon points="108,162 108,192 192,108 162,108" fill="#F3F4F6" />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-heading font-extrabold text-sm sm:text-[15px] tracking-[0.08em] text-white uppercase leading-tight">
            Development Venture
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.16em] text-accent-gold uppercase leading-tight mt-0.5 font-medium">
            Capital Corporation Limited
          </span>
        </div>
      )}
    </div>
  );
}
