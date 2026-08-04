export function Postmark({ code, nights }: { code: string; nights: number }) {
  return (
    <div
      className="relative flex h-16 w-16 shrink-0 rotate-[-6deg] items-center justify-center rounded-full border-2 border-dashed border-teal/70 text-teal"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center leading-none">
        <span className="font-mono text-[9px] tracking-wide">{code}</span>
        <span className="mt-1 font-mono text-[8px] tracking-wide text-road">
          {nights}N
        </span>
      </div>
    </div>
  );
}
