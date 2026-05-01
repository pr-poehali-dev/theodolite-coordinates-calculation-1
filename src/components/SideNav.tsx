import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard" },
  { id: "coordinates", label: "Координаты", icon: "MapPin" },
  { id: "traverse", label: "Теодолитный ход", icon: "Route" },
  { id: "leveling", label: "Нивелирование", icon: "Layers" },
  { id: "triangulation", label: "Триангуляция", icon: "Triangle" },
  { id: "sync", label: "Синхронизация", icon: "RefreshCw" },
  { id: "history", label: "История", icon: "Clock" },
  { id: "export", label: "Экспорт", icon: "Download" },
];

interface SideNavProps {
  active: string;
  onSelect: (id: string) => void;
  syncStatus: "online" | "offline" | "syncing";
}

export default function SideNav({ active, onSelect, syncStatus }: SideNavProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col bg-sidebar border-r border-border transition-all duration-300 ${
        collapsed ? "w-14" : "w-56"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 py-4 border-b border-border">
        <div className="relative shrink-0">
          <div className="w-7 h-7 border-2 border-geo-green flex items-center justify-center">
            <Icon name="Crosshair" size={14} className="text-geo-green" />
          </div>
          <div className="pulse-dot absolute -top-1 -right-1 w-2 h-2" />
        </div>
        {!collapsed && (
          <div>
            <div className="text-xs font-bold text-geo-green tracking-widest font-display">GEODESY</div>
            <div className="text-[10px] text-muted-foreground tracking-wider">HYBRID SYS v2.4</div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name={collapsed ? "ChevronRight" : "ChevronLeft"} size={14} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all text-xs group ${
              active === item.id
                ? "text-geo-green bg-geo-green/10 border-r-2 border-geo-green"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
            }`}
          >
            <Icon name={item.icon as any} size={15} className="shrink-0" />
            {!collapsed && <span className="tracking-wide">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Sync status */}
      <div className="px-3 py-3 border-t border-border">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full shrink-0 ${
              syncStatus === "online"
                ? "bg-geo-green"
                : syncStatus === "syncing"
                ? "bg-geo-amber animate-pulse"
                : "bg-geo-red"
            }`}
          />
          {!collapsed && (
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
              {syncStatus === "online" ? "Online" : syncStatus === "syncing" ? "Syncing..." : "Offline"}
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
