/* Premium product-style car cards */
"use client";

import * as React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Droplets,
  Settings,
  Users,
} from "lucide-react";

type Vehicle = {
  id: string;
  status: "Available";
  typeLabel: string; // EXECUTIVE / COMFORT / ECONOMY
  name: string;
  year: number;
  color: string; // WHITE / GREY / BLACK...
  transmission: string; // Automatic / Manual
  fuel: string; // Diesel / Petrol
  seats: number;
  bags: number;
  pricePerDay: number;
  imageSrc: string;
};

type RRONFleetProps = {
  onBookNow?: (vehicleId: string) => void;
  onViewDetails?: (vehicleId: string) => void;
};

const VEHICLES: Vehicle[] = [
  {
    id: "audi-a6-2021",
    status: "Available",
    typeLabel: "EXECUTIVE",
    name: "Audi A6",
    year: 2021,
    color: "WHITE",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 4,
    pricePerDay: 99,
    imageSrc: "/ferizaj.jpg",
  },
  {
    id: "audi-a5-2021",
    status: "Available",
    typeLabel: "COMFORT",
    name: "Audi A5",
    year: 2021,
    color: "BLACK",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 4,
    pricePerDay: 95,
    imageSrc: "/ferizaj.jpg",
  },
  {
    id: "audi-a3-2018",
    status: "Available",
    typeLabel: "ECONOMY",
    name: "Audi A3",
    year: 2018,
    color: "GREY",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 3,
    pricePerDay: 79,
    imageSrc: "/ferizaj.jpg",
  },
  {
    id: "vw-golf-8-2021",
    status: "Available",
    typeLabel: "COMFORT",
    name: "VW Golf 8",
    year: 2021,
    color: "BLACK",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 3,
    pricePerDay: 69,
    imageSrc: "/ferizaj.jpg",
  },
  {
    id: "vw-golf-7-2017",
    status: "Available",
    typeLabel: "ECONOMY",
    name: "VW Golf 7",
    year: 2017,
    color: "GREY",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 3,
    pricePerDay: 59,
    imageSrc: "/ferizaj.jpg",
  },
  {
    id: "peugeot-308-2019",
    status: "Available",
    typeLabel: "COMFORT",
    name: "Peugeot 308",
    year: 2019,
    color: "GREY",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 4,
    pricePerDay: 64,
    imageSrc: "/ferizaj.jpg",
  },
];

function Spec({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-slate-500/80" />
      <span className="text-xs font-medium text-slate-600">{text}</span>
    </div>
  );
}

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
    <article
      className="group relative rounded-3xl border border-slate-200/70 bg-white/70 p-0 shadow-[0_20px_70px_rgba(2,6,23,.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-900/10 hover:shadow-[0_30px_110px_rgba(2,6,23,.14)]"
      aria-label={`${v.name} ${v.year}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-16 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-slate-950/5" />
      </div>

      <div className="p-6">
        {/* Image / visual top area */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/65 to-slate-50/55">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(2,6,23,.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,110,245,.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center opacity-100">
            <div className="select-none text-[clamp(72px,9vw,128px)] font-black tracking-tight text-slate-900/5 blur-[1px] transition duration-300 group-hover:blur-[0.7px]">
              RRON
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto flex h-[210px] items-end justify-center">
              <div className="absolute bottom-3 left-1/2 h-7 w-[78%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl opacity-80 transition duration-300 group-hover:opacity-100" />
              <img
                src={v.imageSrc}
                alt={`${v.name} ${v.year}`}
                loading="lazy"
                className="relative z-10 mb-2 h-[150px] w-auto object-contain transition duration-300 group-hover:scale-[1.04] drop-shadow-[0_18px_40px_rgba(2,6,23,.18)]"
              />
            </div>

            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-700 shadow-sm">
                {v.status}
              </span>
            </div>
          </div>
        </div>

        {/* Clean content block */}
        <div className="mt-6">
          <div className="text-xs font-semibold tracking-[0.18em] text-slate-500/90 uppercase">
            {v.typeLabel} • {v.year} • {v.color}
          </div>

          <h3 className="mt-2 text-xl font-black tracking-tight text-slate-900">
            {v.name}
          </h3>

          {/* Specs row */}
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            <Spec icon={Settings} text={v.transmission} />
            <Spec icon={Droplets} text={v.fuel} />
            <Spec icon={Users} text={`${v.seats} seats`} />
            <Spec icon={BriefcaseBusiness} text={`${v.bags} bags`} />
          </div>

          {/* Price anchor + CTA */}
          <div className="mt-6 flex items-end justify-between gap-4">
            <div className="leading-none">
              <div className="text-xs font-semibold text-slate-500">from</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tight text-slate-900">
                  €{v.pricePerDay}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  /day
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onBookNow?.(v.id)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(2,6,23,.25)] transition duration-300 hover:-translate-y-[1px] hover:bg-slate-900 hover:shadow-[0_26px_85px_rgba(2,6,23,.33)] focus:outline-none focus:ring-2 focus:ring-slate-950/20"
          >
            Book Now <span aria-hidden="true">→</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {onViewDetails ? (
            <button
              type="button"
              onClick={() => onViewDetails(v.id)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200/70 bg-white/40 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-900/10 hover:bg-white/60 hover:text-slate-900"
            >
              View Details
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function RRONFleet({
  onBookNow,
  onViewDetails,
}: RRONFleetProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-slate-950/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            RRON Fleet
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Premium vehicles, curated like a product.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Executive comfort for modern travel across Kosovo, Albania, and the
            Balkans.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((v) => (
            <VehicleCard
              key={v.id}
              v={v}
              onBookNow={onBookNow}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

