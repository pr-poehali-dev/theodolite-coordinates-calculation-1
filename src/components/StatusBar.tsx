import Icon from "@/components/ui/icon";

interface StatusBarProps {
  coords: { lat: number; lon: number; alt: number };
  time: string;
  sessions: number;
}

export default function StatusBar({ coords, time, sessions }: StatusBarProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-1.5 bg-sidebar border-b border-border text-[10px] text-muted-foreground tracking-wider font-mono overflow-x-auto">
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="pulse-dot" />
        <span className="text-geo-green">SYS:ACTIVE</span>
      </div>
      <span className="text-border">|</span>
      <div className="flex items-center gap-1 shrink-0">
        <Icon name="MapPin" size={10} className="text-geo-cyan" />
        <span>
          LAT:{coords.lat.toFixed(6)}° LON:{coords.lon.toFixed(6)}° ALT:{coords.alt.toFixed(1)}m
        </span>
      </div>
      <span className="text-border">|</span>
      <div className="flex items-center gap-1 shrink-0">
        <Icon name="Wifi" size={10} className="text-geo-green" />
        <span>GNSS:FIXED · 14 спутников</span>
      </div>
      <span className="text-border">|</span>
      <div className="flex items-center gap-1 shrink-0">
        <Icon name="Database" size={10} className="text-geo-amber" />
        <span>СЕССИЙ:{sessions} · WEB+MOB</span>
      </div>
      <div className="ml-auto shrink-0 text-foreground">{time}</div>
    </div>
  );
}
