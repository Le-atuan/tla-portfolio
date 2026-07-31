import Image from "next/image";

interface AvatarProps {
  name: string;
  avatarUrl: string | null;
  size?: number;
  priority?: boolean;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ name, avatarUrl, size = 112, priority = false }: AvatarProps) {
  return (
    <div
      className="glass relative shrink-0 overflow-hidden rounded-full border-2"
      style={{
        width: size,
        height: size,
        borderColor: "var(--primary)",
        boxShadow: "0 0 32px -8px var(--primary)",
      }}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={name}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-xl font-semibold"
          style={{
            background: "linear-gradient(135deg, var(--primary), var(--primary-glow))",
            color: "var(--primary-foreground)",
          }}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}
