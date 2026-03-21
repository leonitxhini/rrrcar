import * as React from "react";
import {
  Calendar,
  Clock,
  Infinity,
  MapPin,
  MessageCircle,
  Plane,
  Search,
} from "lucide-react";

type RRONHeroProps = {
  pickupPlaceholder?: string;
  dropoffPlaceholder?: string;
  /** Full-bleed hero background (e.g. /hero.png) */
  carBackgroundSrc?: string;
};

const fieldShell =
  "rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 backdrop-blur-sm transition-colors focus-within:border-white/25 focus-within:bg-white/[0.1]";

export default function RRONHero({
  pickupPlaceholder = "Pick-up location",
  dropoffPlaceholder = "Drop-off location",
  carBackgroundSrc = "/hero.png?v=10",
}: RRONHeroProps) {
  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-[#06080f]">
      {/* Vollständiges Motiv (contain) — Logo im Bild bleibt sichtbar */}
      <div className="absolute inset-0">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={carBackgroundSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-center"
            loading="eager"
            decoding="async"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-[#04060c]/95 via-[#050816]/78 to-[#050816]/35 md:from-[#04060c]/78 md:via-[#050816]/62 md:to-[#050816]/32"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-t from-[#04060c]/90 via-transparent to-[#04060c]/25 md:from-[#04060c]/72 md:via-transparent md:to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col px-5 pb-10 pt-[max(7.5rem,calc(env(safe-area-inset-top,0px)+5.5rem))] sm:px-6 sm:pb-12 sm:pt-28 lg:pb-14 lg:pt-32">
        <div className="grid gap-10">
          {/* Copy + trust + booking (single column — no right image card) */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-black leading-[1.05] tracking-tight text-white">
              Premium car rental
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-[16px] md:text-[17px]">
              Premium cars. Easy booking. Reliable service across the Balkans.
            </p>

            {/* Trust / USP — subtle, between subheadline and bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-l-2 border-white/20 pl-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-[13px]">
              <span className="inline-flex items-center gap-2">
                <Infinity className="h-4 w-4 shrink-0 text-white/50" aria-hidden />
                Unlimited KM
              </span>
              <span className="inline-flex h-3 w-px bg-white/15" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <Plane className="h-4 w-4 shrink-0 text-white/50" aria-hidden />
                Airport pickup
              </span>
              <span className="inline-flex h-3 w-px bg-white/15" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-white/50" aria-hidden />
                Fast WhatsApp booking
              </span>
            </div>

            {/* Booking bar — floating glass, max width, integrated */}
            <div className="mt-10 w-full max-w-[960px]">
              <div
                className="rounded-[28px] border border-white/18 bg-white/[0.08] p-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-2xl sm:p-5"
                role="search"
                aria-label="Book a vehicle"
              >
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        {pickupPlaceholder}
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white placeholder:text-white/35 outline-none placeholder:font-normal"
                      type="text"
                      placeholder={pickupPlaceholder}
                      name="pickup"
                      autoComplete="off"
                    />
                  </div>

                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        {dropoffPlaceholder}
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white placeholder:text-white/35 outline-none placeholder:font-normal"
                      type="text"
                      placeholder={dropoffPlaceholder}
                      name="dropoff"
                      autoComplete="off"
                    />
                  </div>

                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        Pick-up date
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white outline-none [color-scheme:dark]"
                      type="date"
                      name="pickupDate"
                    />
                  </div>

                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        Pick-up time
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white outline-none [color-scheme:dark]"
                      type="time"
                      name="pickupTime"
                      defaultValue="10:00"
                    />
                  </div>

                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        Drop-off date
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white outline-none [color-scheme:dark]"
                      type="date"
                      name="dropoffDate"
                    />
                  </div>

                  <div className={fieldShell}>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-sky-300/90" aria-hidden />
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/55">
                        Drop-off time
                      </label>
                    </div>
                    <input
                      className="mt-2.5 w-full border-0 bg-transparent text-[15px] font-medium text-white outline-none [color-scheme:dark]"
                      type="time"
                      name="dropoffTime"
                      defaultValue="10:00"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#3b6cff] via-[#4f7cff] to-[#6366f1] px-6 py-4 text-[15px] font-bold tracking-wide text-white shadow-[0_12px_40px_-8px_rgba(59,108,255,0.55),0_4px_14px_-4px_rgba(0,0,0,0.4)] transition duration-200 hover:brightness-110 active:translate-y-px sm:py-[1.125rem] sm:text-[16px]"
                  >
                    <Search className="h-5 w-5 opacity-95" aria-hidden />
                    Search vehicles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
