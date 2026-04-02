"use client";

import { useMemo, useState } from "react";

const BASE_FEE_USD = 500;

const COUNTRY_DISCOUNT = {
  none: 0,
  a: 80,
  b: 50,
};

function money(v) {
  return `$${v.toFixed(2)}`;
}

export function RegistrationFeeCalculator() {
  const [category, setCategory] = useState("none");
  const [ieeeMember, setIeeeMember] = useState(false);

  const result = useMemo(() => {
    const countryPct = COUNTRY_DISCOUNT[category] ?? 0;
    const ieeePct = ieeeMember ? 25 : 0;
    const appliedPct = Math.max(countryPct, ieeePct);
    const appliedDiscount = (BASE_FEE_USD * appliedPct) / 100;
    const payable = Math.max(0, BASE_FEE_USD - appliedDiscount);

    return {
      countryPct,
      ieeePct,
      appliedPct,
      appliedDiscount,
      payable,
      totalDiscount: BASE_FEE_USD - payable,
      effectivePct: ((BASE_FEE_USD - payable) / BASE_FEE_USD) * 100,
    };
  }, [category, ieeeMember]);

  return (
    <section className="not-prose mt-8">
      <div className="icami-card overflow-hidden border border-slate-200/90 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="icami-mono-eyebrow !text-slate-500">Interactive calculator</p>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Base fee: {money(BASE_FEE_USD)}
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Research4Life country category
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-sky-500/70"
            >
              <option value="none">Not Category A/B (0%)</option>
              <option value="a">Category A (80% waived)</option>
              <option value="b">Category B (50% waived)</option>
            </select>
          </label>

          <label className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50/70 px-3 py-2.5">
            <input
              type="checkbox"
              checked={ieeeMember}
              onChange={(e) => setIeeeMember(e.target.checked)}
              className="h-4 w-4"
            />
            <span className="text-sm text-slate-700">
              IEEE member (25% discount)
            </span>
          </label>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Country discount</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {result.countryPct}% ({money((BASE_FEE_USD * result.countryPct) / 100)})
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">IEEE discount</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {result.ieeePct}% ({money((BASE_FEE_USD * result.ieeePct) / 100)})
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Applied discount (max rule)</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {result.appliedPct}% ({money(result.appliedDiscount)})
            </p>
          </div>
          <div className="rounded-md border border-sky-200 bg-sky-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-600">Final payable</p>
            <p className="mt-2 text-2xl font-bold text-icami-blue">{money(result.payable)}</p>
          </div>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-slate-500">
          New rule: discounts are not stacked. If multiple discounts apply, only the highest single
          discount is used.
        </p>
      </div>
    </section>
  );
}
