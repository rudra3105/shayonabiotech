export default function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-4 h-40 rounded-xl bg-slate-200" />
          <div className="mb-2 h-4 w-1/3 rounded bg-slate-200" />
          <div className="mb-2 h-5 w-3/4 rounded bg-slate-200" />
          <div className="h-10 rounded-full bg-slate-200" />
        </div>
      ))}
    </div>
  );
}
