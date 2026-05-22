/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, BookOpen, Volume2, VolumeX, SkipForward, Sparkles, ChevronLeft, ChevronRight, X, Sun, Moon } from "lucide-react";
import { DEFAULT_REGIONS } from "./data";

/**
 * Traditional Korean Frame Corner Brace ("귀장식" / "아자문")
 * Draws a highly polished decorative palace bracket at each of the 4 corners.
 */
function TraditionalCorner({ position, isDarkMode = true }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right"; isDarkMode?: boolean }) {
  const rotation = {
    "top-left": "rotate-0 top-3.5 left-3.5",
    "top-right": "rotate-90 top-3.5 right-3.5",
    "bottom-left": "-rotate-90 bottom-3.5 left-3.5",
    "bottom-right": "rotate-180 bottom-3.5 right-3.5"
  }[position];

  return (
    <svg 
      className={`absolute w-9 h-9 pointer-events-none ${rotation} ${isDarkMode ? "text-amber-500/70" : "text-amber-800/75"}`} 
      viewBox="0 0 40 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8"
    >
      {/* Outer bold traditional bracket corner hook */}
      <path d="M 2,2 L 30,2 M 2,2 L 2,30" strokeLinecap="round" strokeWidth="2.5" />
      {/* Inner geometric traditional lattice grid segment */}
      <path d="M 7,7 L 20,7 M 7,7 L 7,20" strokeLinecap="round" />
      <path d="M 12,12 L 12,16 L 16,16" strokeLinecap="round" />
      <line x1="2" y1="2" x2="6" y2="6" strokeWidth="1.2" />
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Traditional Auspicious Cloud ("구름문" / Korean Cloud Pattern)
 * Draws highly detailed linear loop cloud lines like the ones found in the gold iconsets (Image 4).
 */
function TraditionalCloud({ className }: { className?: string }) {
  return (
    <svg 
      className={`pointer-events-none select-none ${className}`} 
      viewBox="0 0 120 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Semi-transparent cloud body filling */}
      <path 
        d="M20 42 C 15 36, 25 32, 32 38 C 38 28, 52 26, 60 35 C 68 22, 88 22, 94 35 C 102 30, 112 35, 114 43 C 116 51, 106 58, 92 55 C 80 58, 66 58, 60 51 C 48 58, 28 58, 18 49 C 7 47, 8 40, 20 42 Z" 
        fill="url(#goldGradient)" 
        className="opacity-10"
      />
      {/* Main outer outlines */}
      <path 
        d="M20 42 C 15 36, 25 32, 32 38 C 38 28, 52 26, 60 35 C 68 22, 88 22, 94 35 C 102 30, 112 35, 114 43" 
        stroke="url(#goldGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      {/* Inner swirl curves mimicking traditional woodblock carvings */}
      <path d="M32 40 C 35 34, 46 34, 48 40 C 50 46, 38 50, 36 44" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M62 38 C 65 30, 78 30, 81 38 C 84 46, 70 51, 66 44" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 38 C 93 33, 102 33, 104 38 C 106 43, 98 47, 96 42" stroke="url(#goldGradient)" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Flying dynamic thin cloud trails (꼬리구름 자락) */}
      <path d="M6 46 L 22 46" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
      <path d="M98 46 L 118 46" stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
      <path d="M40 52 C 45 52, 55 54, 58 56" stroke="url(#goldGradient)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/**
 * Traditional Separator Line
 * Displays a gold line with an ancient Korean medallion symbol in the center.
 */
function TraditionalSeparator() {
  return (
    <div className="flex items-center justify-center gap-4 my-3 w-full select-none">
      <div className="h-[1.5px] flex-grow bg-gradient-to-r from-transparent via-amber-600/30 to-amber-500/80" />
      {/* Imperial Medallion Symbol */}
      <svg className="w-5 h-5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="6" width="12" height="12" className="rotate-45" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        <path d="M 12,2 L 12,22 M 2,12 L 22,12" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
      </svg>
      <div className="h-[1.5px] flex-grow bg-gradient-to-l from-transparent via-amber-600/30 to-amber-500/80" />
    </div>
  );
}

/**
 * Traditional Concentric Waves Ornament ("청해파" / Blue Ocean Wave Pattern)
 * Rendered at the base of the card as shown in Image 4 for extreme palatial elegance.
 */
function TraditionalWaveFeet() {
  return (
    <svg className="w-full h-6 text-amber-500/25 opacity-40 shrink-0 select-none pointer-events-none mt-4" viewBox="0 0 240 24" preserveAspectRatio="none">
      <defs>
        <pattern id="wavePattern" width="24" height="16" patternUnits="userSpaceOnUse">
          {/* Overlapping nested arches pattern */}
          <path d="M0 16 C 6 11, 18 11, 24 16" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M3 16 C 8 12, 16 12, 21 16" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          <path d="M6 16 C 10 13, 14 13, 18 16" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          
          <path d="M-12 8 C -6 3, 6 3, 12 8" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 8 C 18 3, 30 3, 36 8" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wavePattern)" />
    </svg>
  );
}

/**
 * Traditional background elements deleted at user request.
 */

/**
 * Reusable layout content for Domestic Performances (국내 공연)
 */
function DomesticPerformancesContent({ isDarkMode = true }: { isDarkMode?: boolean }) {
  return (
    <div className="relative z-10 w-full select-none text-left">
      <div className={`text-center pb-3.5 border-b ${isDarkMode ? "border-amber-500/15" : "border-amber-800/15"}`}>
        <span className={`inline-block text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded border mb-1 ${
          isDarkMode ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-amber-800 bg-amber-700/10 border-amber-700/20"
        }`}>
          HISTORY
        </span>
        <h2 className={`text-base font-extrabold tracking-widest flex items-center justify-center gap-1 ${isDarkMode ? "text-white" : "text-stone-900"}`}>
          <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-xs`}>◈</span>
          <span>국내 공연</span>
          <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-xs`}>◈</span>
        </h2>
      </div>

      <div className="space-y-4 pt-4 text-xs pr-1">
        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>초연 (1995년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            예술의 전당 오페라 극장
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(명성황후 시해 100주년)</span>
          </div>
        </div>

        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2005년 (10주년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            예술의 전당 오페라 극장
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(2005.2.4 - 2005.2.22)</span>
          </div>
        </div>

        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2010년 (15주년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            성남아트센터 오페라하우스
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(2010.9.1 - 2010.9.19)</span>
          </div>
        </div>

        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2015년 (20주년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            예술의 전당 오페라 극장
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(2015.7.28 - 2015.9.10)</span>
          </div>
        </div>

        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2021년 (25주년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            예술의 전당 오페라 극장
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(2021.1.19 - 2021.3.7)</span>
          </div>
        </div>

        <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
          <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2025년 (30주년)</div>
          <div className={`${isDarkMode ? "text-gray-300" : "text-stone-700"} mt-0.5 leading-snug`}>
            세종문화회관 대극장
            <span className={`block text-[10px] ${isDarkMode ? "text-gray-400" : "text-stone-500"} font-medium`}>(2025.1.21 - 2025.3.30)</span>
          </div>
        </div>
      </div>

      <div className={`h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? "via-amber-600/20" : "via-amber-800/20"} to-transparent my-4`} />

      <div className={`text-[10px] leading-relaxed text-left font-medium select-none p-3 rounded border ${
        isDarkMode ? "text-gray-400 bg-amber-500/5 border-amber-500/10" : "text-amber-950 bg-amber-500/5 border-amber-500/10"
      }`}>
        해당 기록은 5년, 10년 단위로 기록 되었습니다. 자세한 공연 기록은{" "}
        <a
          href="http://www.acommusical.com/default/product/product02.php?com_board_basic=read_form&com_board_idx=15&sub=01&&com_board_search_code=&com_board_search_value1=&com_board_search_value2=&com_board_page=&&com_board_id=11&&com_board_id=11"
          target="_blank"
          rel="noopener noreferrer"
          className={`${isDarkMode ? "text-amber-400 hover:text-amber-300" : "text-amber-800 hover:text-amber-900"} underline font-bold transition-all cursor-pointer inline-block`}
        >
          공식 홈페이지
        </a>
        를 참고해주시길 바랍니다.
      </div>
    </div>
  );
}

/**
 * Reusable layout content for Awards and Overseas Tours (수상 내역 및 해외 진출)
 */
function AwardsOverseasContent({ isDarkMode = true }: { isDarkMode?: boolean }) {
  return (
    <div className="relative z-10 w-full flex flex-col gap-5 select-none text-left">
      {/* Panel 1: 수상 내역 */}
      <div>
        <div className={`text-center pb-2.5 border-b ${isDarkMode ? "border-amber-500/15" : "border-amber-800/15"}`}>
          <h2 className={`text-sm font-extrabold tracking-widest flex items-center justify-center gap-1 ${isDarkMode ? "text-white" : "text-stone-900"}`}>
            <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-[10px]`}>◈</span>
            <span>수상 내역</span>
            <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-[10px]`}>◈</span>
          </h2>
        </div>

        <div className="space-y-3 pt-3 text-[11px] leading-relaxed pr-1 max-h-[220px] overflow-y-auto custom-scrollbar">
          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>제2회 한국뮤지컬대상 6관왕</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>최우수작품상, 연출상, 남우조연상, 무대미술상, 기술상, 인기스타상</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>제4회 한국뮤지컬대상 3관왕</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>여우주연상, 남우주연상, 특별상</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>제10회 LA Ovation Awards</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>3개 부문 노미네이트 (여우주연상, 음향상, 조명상)</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2003년 대한민국 국회대상</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>뮤지컬 부문 대상 수상</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2004년 한국뮤지컬대상</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>GM대우 아름다운 뮤지컬상 수상</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2010년 국가브랜드대상</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>대한민국 국가브랜드대상 수상</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>2016년 제5회 예그린뮤지컬어워드</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>여우주연상 수상</div>
          </div>
        </div>
      </div>

      {/* Decorative thin separator */}
      <div className={`h-[1px] bg-gradient-to-r from-transparent ${isDarkMode ? "via-amber-600/25" : "via-amber-800/25"} to-transparent`} />

      {/* Panel 2: 해외 진출 */}
      <div>
        <div className={`text-center pb-2.5 border-b ${isDarkMode ? "border-amber-500/15" : "border-amber-800/15"}`}>
          <h2 className={`text-sm font-extrabold tracking-widest flex items-center justify-center gap-1 ${isDarkMode ? "text-white" : "text-stone-900"}`}>
            <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-[10px]`}>◈</span>
            <span>해외 진출</span>
            <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"} text-[10px]`}>◈</span>
          </h2>
        </div>

        <div className="space-y-3 pt-3 text-[11px] leading-relaxed pr-1">
          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>미국 뉴욕 브로드웨이</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>1997년 8월 15일 (1988년)</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>미국 로스앤젤레스</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>1988년 9월 진출</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>영국 런던 웨스트엔드</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>2002년 오리지널 공연</div>
          </div>

          <div className={`relative pl-3 border-l-2 ${isDarkMode ? "border-amber-500/40" : "border-amber-700/40"}`}>
            <div className={`font-bold ${isDarkMode ? "text-amber-300" : "text-amber-800"}`}>글로벌 투어</div>
            <div className={isDarkMode ? "text-gray-300" : "text-stone-700"}>캐나다 토론토 및 일본 투어 성황리 개최</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Custom Interactive Cursor component
 * Optimized with requestAnimationFrame & linear interpolation (lerp) for buttery smooth performance.
 * Bypasses React state updates for position tracking to eliminate lag.
 * Matches exact design specs: default, hover, click, mix-blend-mode: difference
 */
function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  
  // High performance positions storage to completely avoid React state updates on mousemove
  const positionsRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect mouse/pointer support
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      positionsRef.current.targetX = e.clientX;
      positionsRef.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      // Select clickable elements including interactive regions (like circles or polygons on the poster)
      const isInteractive = !!target.closest(
        "a, button, [role='button'], .clickable, .cursor-pointer, [class*='cursor-pointer'], circle, polygon, rect, path"
      );
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnterWindow, { passive: true });

    // Performance frame update loop (using lerp for elegant delay trailing)
    const updateCursor = () => {
      const pos = positionsRef.current;
      
      // Interpolation logic: current = current + (target - current) * lerpFactor
      const lerpFactor = 0.16;
      pos.currentX += (pos.targetX - pos.currentX) * lerpFactor;
      pos.currentY += (pos.targetY - pos.currentY) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.currentX}px, ${pos.currentY}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isFinePointer, isVisible]);

  if (!isFinePointer || !isVisible) return null;

  const baseScale = isHovered ? 1.2 : 1.0;
  const clickScale = isClicked ? 0.85 : 1.0;
  const finalScale = baseScale * clickScale;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, [role="button"], input, select, textarea, .clickable, svg, img, video, circle, polygon, rect, path {
            cursor: none !important;
          }
        }
      `}</style>

      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      >
        <div
          className="relative rounded-full flex items-center justify-center transition-all duration-200 ease-out"
          style={{
            width: "20px",
            height: "20px",
            border: isHovered 
              ? "2px solid #FFD400" 
              : "1.5px solid rgba(255, 255, 255, 0.95)",
            backgroundColor: isHovered 
              ? "#FFD400" 
              : "rgba(255, 255, 255, 0)",
            transform: `scale(${finalScale})`,
            boxShadow: isHovered 
              ? "0 0 10px rgba(255, 212, 0, 0.45)" 
              : "none",
          }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-150"
            style={{
              opacity: isHovered ? 0 : 1,
            }}
          />
        </div>
      </div>
    </>
  );
}


const getSmoothPath = (pointsStr: string): string => {
  const pts = pointsStr.trim().split(/\s+/).map(p => {
    const [x, y] = p.split(",").map(Number);
    return { x: isNaN(x) ? 0 : x, y: isNaN(y) ? 0 : y };
  });
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
  if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;

  let d = `M ${pts[0].x} ${pts[0].y}`;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];

    // Perfect Cardinal spline interpolation for organic fluid hand-drawn lines
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  d += " Z";
  return d;
};


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme !== "light";
    } catch {
      return true;
    }
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newVal = !prev;
      try {
        localStorage.setItem("theme", newVal ? "dark" : "light");
      } catch (err) {
        console.error(err);
      }
      return newVal;
    });
  };

  const [introFinished, setIntroFinished] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem("musical_intro_finished") === "true";
    } catch {
      return false;
    }
  });
  const [isSkipped, setIsSkipped] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visitedRegions, setVisitedRegions] = useState<string[]>([]);
  const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);

  const handleRegionClick = (id: string) => {
    setSelectedId(id);
    setVisitedRegions(prev => prev.includes(id) ? prev : [...prev, id]);
    setActivePage(0);
  };

  useEffect(() => {
    setActivePage(0);
  }, [selectedId]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgMusicRef = useRef<HTMLAudioElement>(null);
  const [bgMusicMuted, setBgMusicMuted] = useState<boolean>(false);
  const [bgMusicVolume, setBgMusicVolume] = useState<number>(0.4);

  // Background music control: fade-out when ending
  const handleBgMusicTimeUpdate = () => {
    const audio = bgMusicRef.current;
    if (audio && !audio.muted && audio.duration) {
      const timeLeft = audio.duration - audio.currentTime;
      // Fade out smoothly in the last 4.5 seconds
      if (timeLeft > 0 && timeLeft <= 4.5) {
        audio.volume = Math.max(0, (timeLeft / 4.5) * bgMusicVolume); // Fade out relative to current set volume
      } else if (timeLeft > 4.5 && audio.volume < bgMusicVolume) {
        // Fade in back smoothly back to current set volume if it was lower
        audio.volume = Math.min(bgMusicVolume, audio.volume + 0.015);
      }
    }
  };

  const handleBgMusicEnded = () => {
    const audio = bgMusicRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0; // Prepare for smooth fade in
      audio.play().catch(err => console.log("Background loop play blocked:", err));
    }
  };

  const toggleBgMusic = () => {
    setBgMusicMuted(prev => {
      const nextVal = !prev;
      const audio = bgMusicRef.current;
      if (audio) {
        audio.muted = nextVal;
        if (!nextVal) {
          audio.volume = bgMusicVolume;
          audio.play().catch(err => console.log("Unmute play blocked:", err));
        } else {
          audio.volume = 0;
        }
      }
      return nextVal;
    });
  };

  // Synchronize background music when intro ends or muted state/volume changes
  useEffect(() => {
    if (introFinished && bgMusicRef.current) {
      const audio = bgMusicRef.current;
      audio.muted = bgMusicMuted;
      audio.volume = bgMusicMuted ? 0 : bgMusicVolume;
      audio.play().catch(err => {
        console.log("Background autoplay blocked or delayed:", err);
      });
    } else if (!introFinished && bgMusicRef.current) {
      // Pause background music if user goes back to Intro
      bgMusicRef.current.pause();
    }
  }, [introFinished, bgMusicMuted, bgMusicVolume]);

  // Robust interaction listener to bypass aggressive browser autoplay blocks
  useEffect(() => {
    const startAudioOnInteraction = () => {
      if (introFinished && !bgMusicMuted && bgMusicRef.current) {
        if (bgMusicRef.current.paused) {
          bgMusicRef.current.play().catch(err => console.log("Interaction play failed:", err));
        }
      }
    };

    window.addEventListener("click", startAudioOnInteraction);
    window.addEventListener("touchstart", startAudioOnInteraction);

    return () => {
      window.removeEventListener("click", startAudioOnInteraction);
      window.removeEventListener("touchstart", startAudioOnInteraction);
    };
  }, [introFinished, bgMusicMuted]);

  // Auto-play the intro video safely with audio by default
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false; // Start with audio enabled
      video.volume = 1.0;
      video.play()
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          console.log("Autoplay unmuted was blocked by browser. Retrying muted...");
          video.muted = true;
          setIsMuted(true);
          video.play().catch((err) => {
            console.error("Muted play failed too:", err);
          });
        });
    }

    // Force background music element to preload, load, play (muted) and pause immediately
    // to bypass browser media buffering and play startup delay.
    if (bgMusicRef.current) {
      const audio = bgMusicRef.current;
      audio.preload = "auto";
      audio.load();
      audio.muted = true;
      audio.volume = 0;
      
      const handleCanPlayThrough = () => {
        audio.play()
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
            // Restore actual configured states
            audio.muted = bgMusicMuted;
            audio.volume = bgMusicMuted ? 0 : bgMusicVolume;
          })
          .catch((err) => {
            console.log("Silent pre-warming play blocked/deferred:", err);
          });
      };
      
      audio.addEventListener("canplaythrough", handleCanPlayThrough, { once: true });
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    // Fade out original audio in the last 1.6 seconds of the video length
    if (video && !video.muted) {
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft > 0 && timeLeft <= 1.6) {
        // Linearly decrease volume to 0 over the final 1.6 seconds
        video.volume = Math.max(0, timeLeft / 1.6);
      }
    }
  };

  const handleSkipIntro = (e?: React.MouseEvent | React.TouchEvent | React.SyntheticEvent, manual = false) => {
    if (e) {
      e.stopPropagation();
      if ("preventDefault" in e && e.cancelable) {
        e.preventDefault();
      }
    }
    
    // Always use a premium visual fade-out transition rather than immediate cut
    setIsSkipped(false);

    const video = videoRef.current;
    if (video) {
      if (!video.muted && video.volume > 0) {
        // Fade out original audio smoothly over 1000ms
        const initialVolume = video.volume;
        const duration = 1000;
        const intervalTime = 25;
        const steps = duration / intervalTime;
        const volumeStep = initialVolume / steps;
        
        let currentStep = 0;
        const fadeInterval = setInterval(() => {
          currentStep++;
          if (video) {
            const newVolume = Math.max(0, initialVolume - volumeStep * currentStep);
            video.volume = newVolume;
          }
          if (currentStep >= steps) {
            clearInterval(fadeInterval);
            try {
              video.pause();
            } catch (err) {
              console.error("Error pausing video after fade:", err);
            }
          }
        }, intervalTime);
      } else {
        try {
          video.pause();
        } catch (err) {
          console.error("Error pausing video:", err);
        }
      }
    }
    
    try {
      sessionStorage.setItem("musical_intro_finished", "true");
    } catch (err) {
      console.warn("sessionStorage is not available:", err);
    }
    setIntroFinished(true);
    if (bgMusicRef.current) {
      const audio = bgMusicRef.current;
      audio.currentTime = 0;
      audio.muted = bgMusicMuted;
      audio.volume = bgMusicMuted ? 0 : bgMusicVolume;
      audio.play()
        .then(() => {
          console.log("Synchronous bg music play succeeded immediately on skip click.");
        })
        .catch(err => {
          console.log("Synchronous bg music play failed or deferred:", err);
        });
    }
  };

  const toggleMute = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    const video = videoRef.current;
    if (video) {
      const targetMuted = !video.muted;
      video.muted = targetMuted;
      if (!targetMuted) {
        video.volume = 1.0; // Ensure full volume when unmuting
      }
      setIsMuted(targetMuted);
    }
  };

  // Currently active region
  const activeRegion = selectedId 
    ? DEFAULT_REGIONS.find(r => r.id === selectedId) 
    : null;

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#05070c] text-gray-100 selection:bg-amber-500 selection:text-black" : "bg-[#FAF7F2] text-stone-800 selection:bg-amber-100 selection:text-amber-950"} flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 font-sans transition-colors duration-500 relative overflow-hidden`}>
      
      {/* Premium custom mouse cursor component */}
      <CustomCursor />

      {/* Standard Shared Royal Gold Gradients definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#AA8439" />
            <stop offset="30%" stopColor="#FFDF00" />
            <stop offset="70%" stopColor="#F9D066" />
            <stop offset="100%" stopColor="#96722B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background radial visual glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b ${isDarkMode ? "from-amber-600/5" : "from-amber-800/8"} to-transparent blur-3xl pointer-events-none transition-all duration-500`} />

      {/* Immersive styled Theme Toggle moved to the top right of the page */}
      {introFinished && (
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-8 md:right-8 z-40 flex flex-col items-end gap-1 min-w-[120px] sm:min-w-[140px]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Background Music & Volume control container */}
            <div className={`flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full border shadow-md transition-all duration-500 ${
              isDarkMode 
                ? "bg-black/60 border-amber-500/20" 
                : "bg-white/75 border-amber-800/15"
            }`}>
              {/* Music mute/unmute icon-only button */}
              <button
                onClick={toggleBgMusic}
                className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer select-none ${
                  isDarkMode 
                    ? "bg-amber-500/10 active:bg-amber-500/25 text-amber-200 hover:text-amber-100"
                    : "bg-amber-800/10 active:bg-amber-800/25 text-stone-800 hover:text-stone-950"
                }`}
                title={bgMusicMuted ? "배경 음악 켜기" : "배경 음악 끄기"}
              >
                {bgMusicMuted ? (
                  <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 animate-pulse" />
                )}
              </button>

              {/* Volume Slider - styled elegantly */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bgMusicMuted ? 0 : Math.round(bgMusicVolume * 100)}
                  onChange={(e) => {
                    const nextVal = parseFloat(e.target.value) / 100;
                    setBgMusicVolume(nextVal);
                    if (nextVal > 0) {
                      setBgMusicMuted(false);
                      if (bgMusicRef.current) {
                        bgMusicRef.current.muted = false;
                        bgMusicRef.current.volume = nextVal;
                        bgMusicRef.current.play().catch(err => console.log(err));
                      }
                    } else {
                      setBgMusicMuted(true);
                      if (bgMusicRef.current) {
                        bgMusicRef.current.muted = true;
                        bgMusicRef.current.volume = 0;
                      }
                    }
                  }}
                  className="w-12 sm:w-16 h-1 rounded bg-amber-500/30 accent-amber-500 appearance-none cursor-pointer outline-none"
                  title="배경 음악 볼륨 조절"
                />
                <span className={`text-[9px] sm:text-[10px] font-mono min-w-[20px] sm:min-w-[24px] text-right font-bold ${
                  isDarkMode ? "text-amber-200/80" : "text-amber-900/80"
                }`}>
                  {bgMusicMuted ? 0 : Math.round(bgMusicVolume * 100)}%
                </span>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1 px-2 sm:px-3 rounded-full border text-[10px] sm:text-[11px] font-extrabold tracking-wider shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer select-none h-8 sm:h-9 ${
                isDarkMode 
                  ? "bg-amber-500/10 active:bg-amber-500/20 text-amber-200 border-amber-500/30 hover:border-amber-400"
                  : "bg-amber-800/10 active:bg-amber-800/20 text-stone-900 border-amber-800/20 hover:border-amber-700"
              }`}
              title={isDarkMode ? "낮 모드로 변경" : "밤 모드로 변경"}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 rotate-animation" />
                  <span className="hidden xs:inline">낮 모드</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-700" />
                  <span className="hidden xs:inline">밤 모드</span>
                </>
              )}
            </button>
          </div>

          {/* Label under the icon/volume container */}
          <span className={`text-[9px] sm:text-[10px] font-extrabold tracking-wide text-right select-none opacity-85 pr-1 ${
            isDarkMode ? "text-amber-300/70" : "text-amber-800/70"
          }`}>
            No. 50 백성이여 일어나라
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!introFinished ? (
          /* Cinematic Intro screen with dynamic video background */
          <motion.div
            key="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2 } }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          >
            <video
              ref={videoRef}
              src="/한.mp4"
              className="absolute inset-0 w-full h-full object-cover opacity-75 md:opacity-90"
              autoPlay
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={(e) => handleSkipIntro(e, false)}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

            {/* Absolute Controls */}
            <div className="absolute top-5 right-5 flex items-center gap-3 z-[60]">
              <button
                onClick={toggleMute}
                className="p-3 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/10 backdrop-blur transition-all flex items-center justify-center cursor-pointer active:scale-95"
                title={isMuted ? "음소거 해제" : "음소거"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-gray-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                )}
              </button>

              <button
                onClick={(e) => handleSkipIntro(e, true)}
                className="flex items-center gap-2 px-4 py-2 bg-amber-500/95 hover:bg-amber-500 active:bg-amber-400 text-black font-extrabold rounded-full text-xs shadow-lg shadow-amber-500/30 backdrop-blur transition-all cursor-pointer active:scale-95"
                title="인트로 비디오 건너뛰기"
              >
                <span>건너뛰기</span>
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="absolute bottom-12 text-center z-10 px-4 pointer-events-none select-none">
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                뮤지컬 &lt;명성황후&gt;
              </h2>
              <p className="text-xs text-gray-300 tracking-wider mt-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                오리지널 가이드 튜토리얼 비디오가 재생 중입니다.
              </p>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Docent Poster Page */
          <motion.div
            key="main-app"
            initial={isSkipped ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isSkipped ? { duration: 0 } : { duration: 1.0, ease: "easeOut" }}
            className="w-full max-w-6xl flex flex-col gap-5 relative z-10 items-center"
          >
            {/* Traditional Elegant Header */}
            <header className="text-center w-full max-w-2xl flex flex-col items-center">
              <h1 className={`text-xl md:text-2xl font-extrabold tracking-wider ${isDarkMode ? "text-white" : "text-stone-900"}`}>
                뮤지컬 &lt;명성황후&gt;
              </h1>
              
              {/* Traditional Elegant Banner Box */}
              <div className={`relative w-full overflow-hidden mt-3 p-4 px-6 md:px-8 border rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 ${
                isDarkMode 
                  ? "bg-[#0c0a09] border-amber-600/30 text-amber-200/90" 
                  : "bg-[#FAF7F2] border-amber-800/20 text-stone-800"
              }`}>
                {/* Traditional Nested pinstripe border */}
                <div className={`absolute inset-1 border rounded pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/15"}`} />
                {/* Visual Traditional Corners */}
                <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                <p className="text-xs md:text-sm font-medium leading-relaxed text-center relative z-10 tracking-wide font-sans">
                  포스터 내의 각 구역을 클릭하시면 해당 설명 팝업이 나타납니다!
                  <br />
                  <span className={`inline-block mt-1 font-bold ${isDarkMode ? "text-amber-400" : "text-amber-800"}`}>
                    총 7개의 설명을 찾아 읽어보세요!
                  </span>
                </p>
              </div>
              
              <div className="mt-4 flex items-center gap-3">
                <span className={`text-xs font-black font-mono px-3 py-1 rounded shadow-sm relative z-10 ${isDarkMode ? "bg-amber-500/25 text-amber-300 border border-amber-500/30" : "bg-amber-800/10 text-amber-900 border border-amber-800/15"}`}>
                  {visitedRegions.length} / 7
                </span>
                {visitedRegions.length === 7 && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-xs md:text-sm font-bold tracking-wide ${isDarkMode ? "text-amber-400" : "text-amber-800"}`}
                  >
                    모든 구역을 다 찾았습니다!
                  </motion.span>
                )}
              </div>
            </header>

            {/* Mobile Arrow indicators at both upper sides of the interactive layout */}
            <div className="lg:hidden flex w-full max-w-[330px] sm:max-w-[400px] md:max-w-[440px] justify-between items-center px-1 mb-1 shrink-0 relative z-30">
              <button
                onClick={() => setLeftDrawerOpen(true)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all active:scale-95 shadow-md select-none duration-150 cursor-pointer ${
                  isDarkMode 
                    ? "bg-amber-500/10 active:bg-amber-500/20 text-amber-200/90 border-amber-500/30" 
                    : "bg-amber-800/10 active:bg-amber-800/20 text-amber-900 border-amber-800/20"
                }`}
                title="국내 공연 기록 보기"
              >
                <ChevronLeft className={`w-3.5 h-3.5 stroke-[3.5] ${isDarkMode ? "text-amber-400" : "text-amber-850"}`} />
                <span>국내 기록 ◀</span>
              </button>
              
              <button
                onClick={() => setRightDrawerOpen(true)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all active:scale-95 shadow-md select-none duration-150 cursor-pointer ${
                  isDarkMode 
                    ? "bg-amber-500/10 active:bg-amber-500/20 text-amber-200/90 border-amber-500/30" 
                    : "bg-amber-800/10 active:bg-amber-800/20 text-amber-900 border-amber-800/20"
                }`}
                title="수상 내역 및 해외 진출 기록 보기"
              >
                <span>▶ 수상 & 해외</span>
                <ChevronRight className={`w-3.5 h-3.5 stroke-[3.5] ${isDarkMode ? "text-amber-400" : "text-amber-850"}`} />
              </button>
            </div>

            {/* Mobile Left Slide Drawer (Domestic Performances) */}
            <AnimatePresence>
              {leftDrawerOpen && (
                <>
                  {/* Dark Backdrop */}
                  <motion.div
                    key="left-drawer-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setLeftDrawerOpen(false)}
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[110] lg:hidden"
                  />
                  {/* Sliding Container Drawer */}
                  <motion.div
                    key="left-drawer-container"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className={`fixed inset-y-0 left-0 w-[310px] max-w-[85vw] border-r z-[120] p-6 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col justify-between lg:hidden ${
                      isDarkMode ? "bg-[#06070c] border-amber-600/40" : "bg-[#FAF7F2] border-amber-800/15 text-stone-900"
                    }`}
                  >
                    {/* Traditional Gold border outline & corners inside */}
                    <div className={`absolute inset-1.5 border rounded pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/20"}`} />
                    <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                    <div className="flex flex-col gap-4 relative z-10">
                      {/* Close button line */}
                      <div className="flex justify-end mb-2">
                        <button 
                          onClick={() => setLeftDrawerOpen(false)}
                          className={`p-1 px-2.5 rounded border text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                            isDarkMode 
                              ? "bg-amber-500/10 active:bg-amber-500/20 text-amber-300 border-amber-500/30" 
                              : "bg-amber-800/10 active:bg-amber-800/20 text-amber-850 border-amber-800/25"
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>닫기</span>
                        </button>
                      </div>
                      <DomesticPerformancesContent isDarkMode={isDarkMode} />
                    </div>

                    <div className="opacity-15 mt-6 relative z-10">
                      <TraditionalWaveFeet />
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Mobile Right Slide Drawer (Awards & Overseas) */}
            <AnimatePresence>
              {rightDrawerOpen && (
                <>
                  {/* Dark Backdrop */}
                  <motion.div
                    key="right-drawer-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setRightDrawerOpen(false)}
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[110] lg:hidden"
                  />
                  {/* Sliding Container Drawer */}
                  <motion.div
                    key="right-drawer-container"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className={`fixed inset-y-0 right-0 w-[310px] max-w-[85vw] border-l z-[120] p-6 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col justify-between lg:hidden ${
                      isDarkMode ? "bg-[#06070c] border-amber-600/40" : "bg-[#FAF7F2] border-amber-800/15 text-stone-900"
                    }`}
                  >
                    {/* Traditional Gold border outline & corners inside */}
                    <div className={`absolute inset-1.5 border rounded pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/20"}`} />
                    <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                    <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                    <div className="flex flex-col gap-4 relative z-10">
                      {/* Close button line */}
                      <div className="flex justify-start mb-2">
                        <button 
                          onClick={() => setRightDrawerOpen(false)}
                          className={`p-1 px-2.5 rounded border text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                            isDarkMode 
                              ? "bg-amber-500/10 active:bg-amber-500/20 text-amber-300 border-amber-500/30" 
                              : "bg-amber-800/10 active:bg-amber-800/20 text-amber-850 border-amber-800/25"
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>닫기</span>
                        </button>
                      </div>
                      <AwardsOverseasContent isDarkMode={isDarkMode} />
                    </div>

                    <div className="opacity-15 mt-6 relative z-10">
                      <TraditionalWaveFeet />
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Dynamic Symmetrical Column Grid for Desktop Placement */}
            <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-center justify-center mt-2">
              
              {/* Left Column: Domestic Performances Card (국내 공연) - Hidden on Mobile */}
              <div className={`hidden lg:flex lg:w-80 shrink-0 relative border-2 rounded-xl p-5 overflow-hidden shadow-2xl flex-col transition-all duration-500 ${
                isDarkMode ? "border-amber-600/40 bg-[#06070c]/90" : "border-amber-800/15 bg-[#FAF7F2]/90 text-stone-900"
              }`}>
                {/* Traditional nested gold pinstripe framing lines on the inside */}
                <div className={`absolute inset-1.5 border rounded pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/20"}`} />
                
                {/* 4 Traditional golden corners */}
                <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                {/* Ambient auspicious clouds background */}
                <TraditionalCloud className="absolute top-16 -right-6 w-28 h-16 opacity-15 rotate-12" />
                <TraditionalCloud className="absolute bottom-16 -left-6 w-28 h-16 opacity-15 -rotate-12 scale-x-[-1]" />

                <DomesticPerformancesContent isDarkMode={isDarkMode} />

                {/* Little decorative wave pattern at the base */}
                <div className="opacity-10 mt-2">
                  <TraditionalWaveFeet />
                </div>
              </div>

              {/* Center Column: Height-proportioned Poster Container with 100% aspect lock to avoid ANY cropping */}
              <div className="flex flex-col gap-4 items-center shrink-0 w-full max-w-full lg:w-auto">
                <div className={`relative w-full max-w-[280px] xs:max-w-[325px] sm:max-w-[380px] md:max-w-[425px] lg:max-w-none h-auto lg:h-[75vh] xl:h-[82vh] aspect-[1000/1440] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  isDarkMode ? "bg-[#020202] border-2 border-amber-600/30" : "bg-stone-100 border-2 border-amber-800/25"
                }`}>
                  
                  {/* Clean Static Background Poster Layer */}
                  <img
                    src="/대사 수정.png"
                    alt="명성황후 메인 포스터"
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                    onError={(e) => {
                      e.currentTarget.src = "https://ticketimage.interpark.com/Play/image/large/20/20010091_p.gif";
                    }}
                  />

                  {/* Invisible touch hotspots mapping back to the data with glowing visual guide outlines */}
                  <svg 
                    viewBox="0 0 1000 1440" 
                    className="absolute inset-0 w-full h-full z-25"
                  >
                    {/* Visual Guideline Layer (Renders faint, elegant curves that light up on proximity or hover) */}
                    {DEFAULT_REGIONS.map((region) => {
                      const isCurrentHovered = hoveredId === region.id;
                      const isCurrentSelected = selectedId === region.id;
                      const isActive = isCurrentHovered || isCurrentSelected;

                      // Hide guidelines by default (opacity 0), glowing elegantly when hovered or selected
                      const opacity = isActive ? 0.95 : 0;
                      
                      // Unified brand Gold color for line outlines (금색으로 색상 통일)
                      const strokeColor = isDarkMode ? "#FBBF24" : "#D97706";

                      return (
                        <g 
                          key={`visual-${region.id}`}
                          style={{ 
                            opacity, 
                            transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease-out",
                            filter: isActive ? `drop-shadow(0 0 10px ${strokeColor}dd)` : "none"
                          }}
                          className="pointer-events-none"
                        >
                          {/* 1) Circular curved outline for White Emblem */}
                          {region.id === "white" && (
                            <circle
                              cx="505"
                              cy="745"
                              r="110"
                              stroke={strokeColor}
                              strokeWidth={isActive ? "3.5" : "1.5"}
                              strokeDasharray={isActive ? "none" : "6, 6"}
                              fill={isActive ? `${strokeColor}15` : "transparent"}
                              style={{ transition: "stroke-width 0.3s, fill 0.4s" }}
                            />
                          )}

                          {/* 2) Story Region double boundary curves (Rendered smoothly as curves to match request) */}
                          {region.id === "story" && region.secondaryPoints && (
                            <>
                              <path
                                d={getSmoothPath(region.points)}
                                stroke={strokeColor}
                                strokeWidth={isActive ? "3" : "1.5"}
                                strokeDasharray={isActive ? "none" : "8, 5"}
                                fill={isActive ? `${strokeColor}12` : "transparent"}
                                style={{ transition: "stroke-width 0.3s, fill 0.4s" }}
                              />
                              <path
                                d={getSmoothPath(region.secondaryPoints)}
                                stroke={strokeColor}
                                strokeWidth={isActive ? "3" : "1.5"}
                                strokeDasharray={isActive ? "none" : "8, 5"}
                                fill={isActive ? `${strokeColor}12` : "transparent"}
                                style={{ transition: "stroke-width 0.3s, fill 0.4s" }}
                              />
                            </>
                          )}

                          {/* 3) Standard curvy bounds rendered dynamically as bezier splines */}
                          {region.id !== "white" && region.id !== "story" && (
                            <path
                              d={getSmoothPath(region.points)}
                              stroke={strokeColor}
                              strokeWidth={isActive ? "3" : "1.5"}
                              strokeDasharray={isActive ? "none" : "8, 5"}
                              fill={isActive ? `${strokeColor}08` : "transparent"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ transition: "stroke-width 0.3s, fill 0.4s" }}
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Interactive Proximity Trigger Layer (Transparent pointer zones) */}
                    {DEFAULT_REGIONS.map((region) => {
                      const triggerProps = {
                        className: "cursor-pointer pointer-events-auto transition-all",
                        onMouseEnter: () => setHoveredId(region.id),
                        onMouseLeave: () => setHoveredId(null),
                        onTouchStart: () => setHoveredId(region.id),
                        onTouchEnd: () => setHoveredId(null),
                        onClick: () => handleRegionClick(region.id),
                      };

                      // 1) Circular click target for White Emblem
                      if (region.id === "white") {
                        return (
                          <circle
                            key={`trigger-${region.id}`}
                            cx="505"
                            cy="745"
                            r="110"
                            fill="transparent"
                            {...triggerProps}
                          />
                        );
                      }

                      // 2) Combined polygons for Story Region
                      if (region.id === "story" && region.secondaryPoints) {
                        return (
                          <g key={`trigger-${region.id}`} className="cursor-pointer pointer-events-auto">
                            <polygon
                              points={region.points}
                              fill="transparent"
                              {...triggerProps}
                            />
                            <polygon
                              points={region.secondaryPoints}
                              fill="transparent"
                              {...triggerProps}
                            />
                          </g>
                        );
                      }

                      // 3) Standard polygon regions
                      return (
                        <polygon
                          key={`trigger-${region.id}`}
                          points={region.points}
                          fill="transparent"
                          {...triggerProps}
                        />
                      );
                    })}
                  </svg>

                  {/* Magnificent Traditional Palace Plaque Dialogue Popup Window */}
                  <AnimatePresence>
                    {activeRegion && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
                      >
                        {/* Traditional Scroll Outer Framing Container */}
                        <div 
                          onClick={(e) => e.stopPropagation()}
                          className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] max-h-[680px] flex flex-col"
                        >
                          {/* Main Scroll Body with Traditional Horizontal Reveal Animation */}
                          <motion.div
                            initial={{ opacity: 0, clipPath: "inset(0 50% 0 50%)" }}
                            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0%)" }}
                            exit={{ opacity: 0, clipPath: "inset(0 50% 0 50%)" }}
                            transition={{ ease: "easeOut", duration: 0.55 }}
                            className={`absolute inset-0 flex flex-col border-2 rounded-2xl p-3 sm:p-5 overflow-hidden shadow-2xl transition-colors duration-500 ${
                              isDarkMode ? "border-amber-600/40 bg-[#06070c]/98 text-white" : "border-amber-800/20 bg-[#FAF7F2]/98 text-stone-900"
                            }`}
                          >
                            {/* Flat Elegant Scroll Accents on Left and Right Edges */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 border-r ${
                              isDarkMode ? "bg-amber-500/10 border-amber-500/20" : "bg-amber-800/10 border-amber-800/25"
                            }`} />
                            <div className={`absolute right-0 top-0 bottom-0 w-1.5 border-l ${
                              isDarkMode ? "bg-amber-500/10 border-amber-500/20" : "bg-amber-800/10 border-amber-800/25"
                            }`} />

                            {/* Traditional nested gold pinstripe framing lines on the inside */}
                            <div className={`absolute inset-1.5 border rounded-xl pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/20"}`} />

                            {/* 4 Traditional golden corners */}
                            <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                            <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                            <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                            <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                            {/* Background Ambient auspicious clouds as faint watermarks */}
                            <TraditionalCloud className="absolute top-12 right-2 w-32 h-20 opacity-30 rotate-12" />
                            <TraditionalCloud className="absolute bottom-16 left-2 w-36 h-22 opacity-30 -rotate-6 scale-x-[-1]" />

                            {/* Top Header Controls row */}
                            <div className={`relative z-10 flex items-center justify-between gap-4 pb-1.5 border-b shrink-0 ${isDarkMode ? "border-amber-500/15" : "border-amber-800/15"}`}>
                              <button
                                onClick={() => setSelectedId(null)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold border transition-all duration-200 active:scale-95 shadow-md cursor-pointer ${
                                  isDarkMode 
                                    ? "bg-[#0e1220] hover:bg-amber-950/45 text-amber-200/90 hover:text-white border-amber-500/30" 
                                    : "bg-amber-800/10 hover:bg-amber-850/20 text-amber-900 hover:text-black border-amber-800/20"
                                }`}
                                title="뒤로 가기"
                              >
                                <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
                                <span>뒤로 가기</span>
                              </button>
                            </div>

                            {/* Scroll Contents Container */}
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.15, duration: 0.3 }}
                              className="relative z-10 flex-1 flex flex-col justify-between pt-2.5 overflow-hidden"
                            >
                            
                            <div className="space-y-2.5 flex-1 flex flex-col min-h-0 overflow-hidden">
                              {/* Traditional category display */}
                              <div className="text-center space-y-1 shrink-0">
                                <span className={`inline-block text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded border ${
                                  isDarkMode ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-amber-850 bg-amber-800/10 border-amber-800/20"
                                }`}>
                                  {activeRegion.category}
                                </span>
                                
                                <h2 className={`text-base sm:text-lg font-extrabold leading-tight flex items-center justify-center gap-2 ${isDarkMode ? "text-white" : "text-stone-900"}`}>
                                  <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"}`}>◈</span>
                                  <span>{activeRegion.name}</span>
                                  <span className={`${isDarkMode ? "text-amber-500/60" : "text-amber-700/60"}`}>◈</span>
                                </h2>
                              </div>

                              {/* Decorative Separator Line with Medallion Core */}
                              <div className="shrink-0">
                                <TraditionalSeparator />
                              </div>

                              {/* Dynamic detailed subtitle */}
                              <p className={`text-center text-xs sm:text-sm font-semibold leading-relaxed px-2 shrink-0 ${isDarkMode ? "text-amber-100/90" : "text-amber-950/90"}`}>
                                {activeRegion.title}
                              </p>

                              {/* Beautifully expanded text body with elegant custom scrollbars */}
                              {(() => {
                                const descPages = activeRegion.desc.split("/").map(p => p.trim());
                                const currentPageText = descPages[activePage] || descPages[0] || "";

                                return (
                                  <>
                                    <div className={`p-3 sm:p-4 rounded border relative overflow-y-auto custom-scrollbar flex-1 min-h-0 pr-2 flex flex-col ${
                                      isDarkMode ? "bg-[#0b0e1a]/85 border-amber-500/10" : "bg-amber-800/5 border-amber-800/10"
                                    }`}>
                                      {/* Watermark detail */}
                                      <div className={`absolute top-2 right-2 text-[8px] font-mono pointer-events-none select-none ${isDarkMode ? "text-amber-500/15" : "text-amber-800/15"}`}>
                                        GUIDE ID: {activeRegion.id.toUpperCase()}
                                      </div>

                                      {/* Page number display inside popup */}
                                      {descPages.length > 1 && (
                                        <div className={`absolute top-2 left-3 text-[9px] font-mono font-bold tracking-widest ${isDarkMode ? "text-amber-400/80" : "text-amber-800/80"}`}>
                                          PAGE {activePage + 1} / {descPages.length}
                                        </div>
                                      )}
                                      
                                      <div className="pt-1 flex-1 min-h-0 flex flex-col justify-center">
                                        <div className={`flex flex-col gap-4 h-full ${activeRegion.imageUrl ? "md:grid md:grid-cols-12 md:gap-5 md:items-center" : "flex items-center justify-center text-center"}`}>
                                          {/* Performance Archival Image Layer */}
                                          {activeRegion.imageUrl && (
                                            <div className={`relative overflow-hidden rounded-xl border shadow-md bg-stone-950/10 mx-auto w-full md:col-span-5 flex items-center justify-center p-1.5 shrink-0 min-h-0 ${
                                              isDarkMode ? "border-amber-600/20" : "border-amber-800/10"
                                            }`}>
                                              <img 
                                                src={activeRegion.imageUrl} 
                                                alt={activeRegion.name}
                                                referrerPolicy="no-referrer"
                                                className="w-auto h-auto max-h-[140px] sm:max-h-[180px] md:max-h-[220px] max-w-full object-contain rounded-lg transition-transform duration-500 hover:scale-[1.03]"
                                              />
                                            </div>
                                          )}

                                          <div className={`flex flex-col select-text justify-center ${activeRegion.imageUrl ? "md:col-span-7" : "max-w-2xl mx-auto"}`}>
                                            <p className={`text-xs sm:text-sm lg:text-base leading-relaxed whitespace-pre-line text-left relative z-10 font-medium ${
                                              isDarkMode ? "text-gray-200" : "text-stone-850"
                                              }`}>
                                              {currentPageText}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Pagination Controls bar */}
                                    {descPages.length > 1 && (
                                      <div className={`mt-3 py-1 flex items-center justify-between border-t ${isDarkMode ? "border-amber-500/10" : "border-amber-800/10"}`}>
                                        <button
                                          disabled={activePage === 0}
                                          onClick={() => setActivePage(prev => Math.max(0, prev - 1))}
                                          className={`px-3 py-1.5 rounded-md text-xs font-bold border flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                                            activePage === 0
                                              ? "opacity-30 cursor-not-allowed border-transparent text-gray-500"
                                              : isDarkMode 
                                                ? "bg-[#0c0a09]/50 border-amber-500/25 text-amber-200 hover:bg-amber-500/10" 
                                                 : "bg-white border-amber-800/15 text-amber-900 hover:bg-amber-800/5"
                                           }`}
                                         >
                                           <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                                           <span>이전</span>
                                         </button>

                                         <div className="flex items-center gap-1.5">
                                           {descPages.map((_, idx) => (
                                             <button
                                               key={idx}
                                               onClick={() => setActivePage(idx)}
                                               className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                 idx === activePage 
                                                   ? "w-5 bg-amber-500" 
                                                   : "bg-amber-500/20 hover:bg-amber-500/50"
                                               }`}
                                               title={`PAGE ${idx + 1}`}
                                             />
                                           ))}
                                         </div>

                                        <button
                                          disabled={activePage === descPages.length - 1}
                                          onClick={() => setActivePage(prev => Math.min(descPages.length - 1, prev + 1))}
                                          className={`px-3 py-1.5 rounded-md text-xs font-bold border flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                                            activePage === descPages.length - 1
                                              ? "opacity-30 cursor-not-allowed border-transparent text-gray-500"
                                              : isDarkMode 
                                                ? "bg-[#0c0a09]/50 border-amber-500/25 text-amber-200 hover:bg-amber-500/10" 
                                                : "bg-white border-amber-800/15 text-amber-900 hover:bg-amber-800/5"
                                          }`}
                                        >
                                          <span>다음</span>
                                          <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                                        </button>
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </div>



                            {/* Footer & Wave graphics element */}
                            <div className="flex flex-col items-center mt-3 shrink-0">
                              {/* Wave graphics representing stability and loyalty */}
                              <TraditionalWaveFeet />

                              <div className={`pt-2 flex items-center gap-1.5 text-[9px] select-none ${isDarkMode ? "text-gray-500" : "text-stone-500"}`}>
                                <BookOpen className={`w-3 h-3 ${isDarkMode ? "text-amber-500/60" : "text-amber-800/60"}`} />
                                <span>문화콘텐츠기초 - 기억해조</span>
                              </div>
                            </div>

                          </motion.div>

                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                </div>

                {/* Quick replay intro button beneath the main UI */}
                <div className="text-center select-none w-full">
                  <button
                    onClick={() => {
                      if (bgMusicRef.current) {
                        try {
                          bgMusicRef.current.pause();
                        } catch (err) {
                          console.log("Error pausing bg audio on replay:", err);
                        }
                      }
                      try {
                        sessionStorage.removeItem("musical_intro_finished");
                      } catch (err) {
                        console.warn(err);
                      }
                      setIsSkipped(false);
                      setIntroFinished(false);
                      setIsMuted(false);
                    }}
                    className={`text-[11px] px-3.5 py-1.5 rounded-full text-xs font-bold border transition duration-200 cursor-pointer ${
                      isDarkMode 
                        ? "text-gray-500 hover:text-amber-400 border-gray-850 hover:border-amber-500/30 bg-gray-950/40 shadow-sm" 
                        : "text-stone-600 hover:text-amber-800 border-stone-300 hover:border-amber-800/30 bg-stone-100 shadow-sm"
                    }`}
                  >
                    🎥 인트로 비디오 다시 보기
                  </button>
                </div>
              </div>

              {/* Right Column: Awards and Overseas Tours - Hidden on Mobile */}
              <div className={`hidden lg:flex lg:w-80 shrink-0 relative border-2 rounded-xl p-5 overflow-hidden shadow-2xl flex-col gap-6 transition-all duration-500 ${
                isDarkMode ? "border-amber-600/40 bg-[#06070c]/90" : "border-amber-800/15 bg-[#FAF7F2]/90 text-stone-900"
              }`}>
                {/* Traditional nested gold pinstripe framing lines on the inside */}
                <div className={`absolute inset-1.5 border rounded pointer-events-none ${isDarkMode ? "border-amber-500/20" : "border-amber-800/20"}`} />
                
                {/* 4 Traditional golden corners */}
                <TraditionalCorner position="top-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="top-right" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-left" isDarkMode={isDarkMode} />
                <TraditionalCorner position="bottom-right" isDarkMode={isDarkMode} />

                {/* Ambient auspicious clouds background */}
                <TraditionalCloud className="absolute top-24 -left-6 w-28 h-16 opacity-15 rotate-12 scale-x-[-1]" />
                <TraditionalCloud className="absolute bottom-24 -right-6 w-28 h-16 opacity-15 -rotate-12" />

                <AwardsOverseasContent isDarkMode={isDarkMode} />

                {/* Little decorative wave pattern at the base */}
                <div className="opacity-10 mt-auto pt-2">
                  <TraditionalWaveFeet />
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric surrounding glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-t ${isDarkMode ? "from-red-950/10" : "from-red-800/5"} to-transparent blur-3xl pointer-events-none transition-all duration-500`} />

      {/* Background loop audio specifically for the main interactive poster screen */}
      <audio
        ref={bgMusicRef}
        src="/bg_music.mp3"
        preload="auto"
        onTimeUpdate={handleBgMusicTimeUpdate}
        onEnded={handleBgMusicEnded}
      />

    </div>
  );
}
