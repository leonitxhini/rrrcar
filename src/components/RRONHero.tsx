import * as React from "react";
import {
  Calendar,
  Clock,
  Car,
  CreditCard,
  Globe,
  MapPin,
  Plane,
  Search,
  Zap,
} from "lucide-react";

type RRONHeroProps = {
  pickupPlaceholder?: string;
  dropoffPlaceholder?: string;
  carBackgroundSrc?: string;
  announcementText?: string;
};

export default function RRONHero({
  pickupPlaceholder = "Pickup location",
  dropoffPlaceholder = "Drop-off location",
  carBackgroundSrc,
  announcementText = "🚗 Unlimited KM • 🌍 Balkan Travel • 💸 0€ Extra Fees",
}: RRONHeroProps) {
  return (
    <section className="relative min-h-[100svh] bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        {carBackgroundSrc ? (
          <img
            src={carBackgroundSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-10"
            loading="eager"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200/40 via-slate-200/10 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[-6%] flex justify-center">
        <div className="select-none text-[clamp(72px,12vw,170px)] font-black tracking-tight text-slate-900/10 blur-3xl">
          RRON
        </div>
      </div>

      <div className="sticky top-0 z-50 h-[50px] bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-6">
          <p className="text-center text-[13px] font-medium leading-none text-slate-700">
            {announcementText}
          </p>
        </div>
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-6 pb-10 pt-[110px] md:pb-0">
        <div className="flex flex-1 flex-col justify-end pb-8 md:pb-16">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-[clamp(38px,6vw,64px)] font-black leading-[1.02] tracking-tight text-slate-900">
              Premium car rental
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:text-[16px]">
              Premium Fahrzeuge, faire Preise und stressfreies Buchen für deine Balkan-Reise.
            </p>
          </div>

          <div className="relative -mt-14 md:-mt-20">
            <div className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-5 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">
                      {pickupPlaceholder}
                    </label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                    type="text"
                    placeholder={pickupPlaceholder}
                    name="pickup"
                    autoComplete="off"
                  />
                </div>

                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">
                      {dropoffPlaceholder}
                    </label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                    type="text"
                    placeholder={dropoffPlaceholder}
                    name="dropoff"
                    autoComplete="off"
                  />
                </div>

                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">Pick-up date</label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    type="date"
                    name="pickupDate"
                  />
                </div>

                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">Pick-up time</label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    type="time"
                    name="pickupTime"
                    defaultValue="10:00"
                  />
                </div>

                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">Drop-off date</label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    type="date"
                    name="dropoffDate"
                  />
                </div>

                <div className="rounded-xl bg-slate-50/70 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-600/70" />
                    <label className="text-xs font-semibold text-slate-700">Drop-off time</label>
                  </div>
                  <input
                    className="mt-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    type="time"
                    name="dropoffTime"
                    defaultValue="10:00"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(59,110,245,.35)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_16px_40px_rgba(59,110,245,.48)] md:py-4"
                >
                  <Search className="h-4 w-4" />
                  Search Vehicles <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 md:gap-10">
              <div className="flex items-center gap-3 rounded-full bg-white/60 px-5 py-3 backdrop-blur-sm shadow-sm">
                <Car className="h-5 w-5 text-slate-700/80" />
                <p className="text-[13px] font-semibold text-slate-700">
                  🚗 Unlimited Kilometers
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/60 px-5 py-3 backdrop-blur-sm shadow-sm">
                <Globe className="h-5 w-5 text-slate-700/80" />
                <p className="text-[13px] font-semibold text-slate-700">
                  🌍 Cross-Border Driving
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/60 px-5 py-3 backdrop-blur-sm shadow-sm">
                <CreditCard className="h-5 w-5 text-slate-700/80" />
                <p className="text-[13px] font-semibold text-slate-700">
                  💳 No Hidden Fees
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/60 px-5 py-3 backdrop-blur-sm shadow-sm">
                <Zap className="h-5 w-5 text-slate-700/80" />
                <p className="text-[13px] font-semibold text-slate-700">
                  ⚡ Instant Booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

