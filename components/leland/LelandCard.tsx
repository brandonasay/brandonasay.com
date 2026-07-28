function darken(hex: string, amount: number) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}

export default function LelandCard({
  color,
  children,
  className = "",
}: {
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 ${className}`}
      style={{
        backgroundColor: color,
        border: `1px solid ${darken(color, 30)}`,
      }}
    >
      {children}
    </div>
  );
}
