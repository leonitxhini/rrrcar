/* Mobile Swipe: Fleet-Karten als Apple-Style Carousel */
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Vehicle = {
  id: string;
  category: "Premium" | "Comfort" | "Economy";
  name: string;
  year: number;
  imageSrc: string;
  specs: {
    label: string;
    value: string;
  }[];
  pricePerDay: number;
};

type RRONFleetProps = {
  onBookNow?: (vehicleId: string) => void;
  onViewDetails?: (vehicleId: string) => void;
};

const VEHICLES: Vehicle[] = [
  {
    id: "audi-a6-2021",
    category: "Premium",
    name: "Audi A6",
    year: 2021,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 99,
  },
  {
    id: "audi-a5-2021",
    category: "Comfort",
    name: "Audi A5",
    year: 2021,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 95,
  },
  {
    id: "audi-a3-2018",
    category: "Economy",
    name: "Audi A3",
    year: 2018,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Petrol" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 79,
  },
  {
    id: "vw-golf-8",
    category: "Comfort",
    name: "VW Golf 8",
    year: 2021,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Petrol" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 69,
  },
  {
    id: "vw-golf-7",
    category: "Economy",
    name: "VW Golf 7",
    year: 2017,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 59,
  },
  {
    id: "peugeot-308",
    category: "Comfort",
    name: "Peugeot 308",
    year: 2019,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 64,
  },
  {
    id: "citroen-c4",
    category: "Economy",
    name: "Citroën C4",
    year: 2015,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Automatic" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 52,
  },
  {
    id: "ford-fiesta",
    category: "Economy",
    name: "Ford Fiesta",
    year: 2017,
    imageSrc: "/ferizaj.jpg",
    specs: [
      { label: "Transmission", value: "Manual" },
      { label: "Fuel", value: "Petrol" },
      { label: "Seats", value: "5 Seats" },
    ],
    pricePerDay: 49,
  },
];

/** Homepage preview — same three highlights as static site (`dist/index.html`). */
const FLEET_PREVIEW_ORDER = ["audi-a6-2021", "audi-a5-2021", "vw-golf-8"] as const;
const FLEET_PREVIEW = FLEET_PREVIEW_ORDER.map((id) =>
  VEHICLES.find((v) => v.id === id),
).filter((v): v is Vehicle => Boolean(v));

function VehicleCard({
  v,
  onBookNow,
  onViewDetails,
}: {
  v: Vehicle;
  onBookNow?: (vehicleId: string) => void;
  onViewDetails?: (vehicleId: string) => void;
}) {
  return (
    <article className="group rounded-3xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
      <div className="p-6">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-slate-50">
          <img
            src={v.imageSrc}
            alt={`${v.name} ${v.year}`}
            loading="lazy"
            className="h-[74%] w-[88%] object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {v.category}
          </div>

          <h3 className="mt-2 text-lg font-black tracking-tight text-slate-900">
            {v.name} <span className="text-slate-500">{v.year}</span>
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
            {v.specs.map((s, idx) => (
              <React.Fragment key={`${v.id}-${s.label}`}>
                <span className="font-medium text-slate-700">{s.value}</span>
                {idx < v.specs.length - 1 ? (
                  <span className="text-slate-300" aria-hidden="true">
                    •
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-sm font-semibold text-slate-500">from</div>
              <div className="text-2xl font-black tracking-tight text-slate-900">
                €{v.pricePerDay}
              </div>
              <div className="text-sm font-semibold text-slate-500">/day</div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => onBookNow?.(v.id)}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(2,6,23,.18)] transition duration-200 hover:bg-slate-800"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewDetails?.(v.id)}
              className="mx-auto min-h-[44px] rounded-2xl px-2 py-1 text-sm font-semibold text-slate-600 transition duration-200 hover:text-slate-900 hover:underline hover:underline-offset-4"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RRONFleet({ onBookNow, onViewDetails }: RRONFleetProps) {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  function scrollCarousel(direction: -1 | 1) {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(260, el.clientWidth * 0.86);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Our Fleet
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              A quick preview — see every vehicle and price on the fleet page.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <Link
              href="/fleet/"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
            >
              View full fleet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Swipe (Apple Cards) */}
        <div className="mt-10 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              aria-label="Previous vehicles"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:bg-white"
              onClick={() => scrollCarousel(-1)}
            >
              <ArrowLeft className="h-5 w-5 text-slate-700" />
            </button>

            <button
              type="button"
              aria-label="Next vehicles"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:bg-white"
              onClick={() => scrollCarousel(1)}
            >
              <ArrowRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          >
            {FLEET_PREVIEW.map((v) => (
              <div key={v.id} className="snap-start w-[86%] max-w-[340px] flex-none">
                <VehicleCard
                  v={v}
                  onBookNow={onBookNow}
                  onViewDetails={onViewDetails}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="mt-12 hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {FLEET_PREVIEW.map((v) => (
            <VehicleCard
              key={v.id}
              v={v}
              onBookNow={onBookNow}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/fleet/"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            View all vehicles &amp; prices
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

