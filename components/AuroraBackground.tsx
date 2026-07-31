export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="aurora-blob absolute -top-40 -left-40 h-144 w-xl rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div
        className="aurora-blob absolute top-1/3 -right-40 h-120 w-120 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--primary-glow), transparent 70%)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/4 h-112 w-md rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--primary), transparent 70%)",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
