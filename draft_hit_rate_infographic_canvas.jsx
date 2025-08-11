import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  LineChart,
  Line,
  Legend,
} from "recharts";

// -------------------- DATA (exact values from user) --------------------
const overall = [
  { rd: "1", hit: 78.4 },
  { rd: "2", hit: 47.7 },
  { rd: "3", hit: 38.5 },
  { rd: "4", hit: 18.0 },
  { rd: "5", hit: 15.0 },
  { rd: "6", hit: 14.1 },
  { rd: "7", hit: 9.4 },
];

const positional = [
  { rd: "1", QB: 78, RB: 83, TE: 78, WR: 76 },
  { rd: "2", QB: 42, RB: 50, TE: 40, WR: 51 },
  { rd: "3", QB: 31, RB: 62, TE: 36, WR: 30 },
  { rd: "4", QB: 20, RB: 27, TE: 23, WR: 9 },
  { rd: "5", QB: 7, RB: 27, TE: 9, WR: 13 },
  { rd: "6", QB: 11, RB: 18, TE: 8, WR: 15 },
  { rd: "7", QB: 13, RB: 9, TE: 4, WR: 11 },
];

// -------------------- Theme --------------------
const colors = {
  neonCyan: "#46E7FF",
  neonMagenta: "#FF41E1",
  neonPurple: "#9E5AF7",
  neonGreen: "#20F7A7",
  grid: "rgba(148, 163, 184, .14)", // slate-400 @ 14%
  text: "#E2E8F0", // slate-200
};

const card = "rounded-2xl shadow-xl shadow-cyan-500/10 ring-1 ring-white/5 bg-slate-900/60 backdrop-blur";

const axisTickFormatter = (v) => `${v}%`;
const barLabel = (v) => `${Number(v).toFixed(1)}%`;

// Custom tooltip with %
const Tip = ({ active, payload, label, unit = "%" }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2 text-xs text-slate-100 shadow-lg">
        <div className="font-medium text-slate-200">RD {label}</div>
        {payload.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: p.color }} />
            <span className="opacity-80">{p.name}</span>
            <span className="ml-auto tabular-nums">{p.value}{unit}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function DraftHitRateInfographic() {
  return (
    <div className="min-h-screen w-full bg-[#0A0F1E] text-slate-100">
      {/* Subtle neon grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(200px 200px at 0% 0%, rgba(0,255,255,.25), transparent 60%)," +
            "radial-gradient(300px 180px at 100% 0%, rgba(255,0,200,.2), transparent 70%)," +
            "radial-gradient(220px 220px at 0% 100%, rgba(0,200,255,.18), transparent 60%)," +
            "radial-gradient(240px 160px at 100% 100%, rgba(160,100,255,.18), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <motion.header
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/50 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-300">
            AI Draft Analysis
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Hit Rate by Round
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
            Probabilistic view of <span className="font-semibold">overall</span> and <span className="font-semibold">positional</span> hit rates.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* LEFT: Overall Hit Probability */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className={`${card} p-4 md:p-6`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold md:text-xl">Overall Hit Probability</h2>
              <div className="text-xs text-slate-400">All Positions × Round</div>
            </div>
            <div className="h-[320px] w-full">
              <ResponsiveContainer>
                <BarChart data={overall} margin={{ top: 12, right: 10, left: 0, bottom: 4 }}>
                  <defs>
                    <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={colors.neonCyan} />
                      <stop offset="100%" stopColor={colors.neonMagenta} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={colors.grid} vertical={false} />
                  <XAxis dataKey="rd" tickLine={false} axisLine={false} tick={{ fill: colors.text }} />
                  <YAxis
                    width={40}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 100]}
                    tick={{ fill: colors.text }}
                    tickFormatter={axisTickFormatter}
                  />
                  <Tooltip content={<Tip unit="%" />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="hit" name="Hit%" fill="url(#barFill)" radius={[12, 12, 8, 8]}>
                    <LabelList
                      dataKey="hit"
                      formatter={barLabel}
                      position="top"
                      className="fill-slate-200 text-[12px] drop-shadow-[0_0_8px_rgba(134,239,172,0.5)]"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300 md:grid-cols-4">
              {overall.map((d) => (
                <div key={d.rd} className="flex items-center gap-2 rounded-lg bg-slate-800/40 p-2 ring-1 ring-white/5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-slate-900/60 text-[11px] font-semibold ring-1 ring-white/10">
                    {d.rd}
                  </span>
                  <div className="tabular-nums font-medium">{d.hit.toFixed(1)}%</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* RIGHT: Positional Trends */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className={`${card} p-4 md:p-6`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold md:text-xl">Positional Hit Rate Trends by Round</h2>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: colors.neonMagenta }}></span> QB</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: colors.neonGreen }}></span> RB</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: colors.neonPurple }}></span> TE</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: colors.neonCyan }}></span> WR</span>
              </div>
            </div>
            <div className="h-[320px] w-full">
              <ResponsiveContainer>
                <LineChart data={positional} margin={{ top: 6, right: 10, left: 0, bottom: 6 }}>
                  <CartesianGrid stroke={colors.grid} />
                  <XAxis dataKey="rd" tickLine={false} axisLine={false} tick={{ fill: colors.text }} />
                  <YAxis
                    width={40}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 100]}
                    tick={{ fill: colors.text }}
                    tickFormatter={axisTickFormatter}
                  />
                  <Tooltip content={<Tip unit="%" />} cursor={{ stroke: "rgba(255,255,255,0.15)" }} />
                  <Legend wrapperStyle={{ color: colors.text }} iconType="circle" />
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <Line type="monotone" name="QB" dataKey="QB" stroke={colors.neonMagenta} strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" name="RB" dataKey="RB" stroke={colors.neonGreen} strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" name="TE" dataKey="TE" stroke={colors.neonPurple} strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" name="WR" dataKey="WR" stroke={colors.neonCyan} strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              *Values are exact percentages provided. Lines show trend across rounds.
            </p>
          </motion.section>
        </div>

        {/* Footer tag inspired by neon capsule */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-purple-400/20 px-4 py-2 text-xs font-semibold tracking-widest text-slate-200 ring-1 ring-white/10">
            HIT RATE · All Positions & By Position
          </div>
        </div>
      </div>
    </div>
  );
}
