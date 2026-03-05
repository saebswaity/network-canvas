import { Monitor, Server, Shield, Cloud, Router, Network } from 'lucide-react';
import type { DeviceType } from './DeviceNode';

const devices: { type: DeviceType; label: string; icon: typeof Router; colorVar: string }[] = [
  { type: 'router', label: 'Router', icon: Router, colorVar: 'var(--device-router)' },
  { type: 'switch', label: 'Switch', icon: Network, colorVar: 'var(--device-switch)' },
  { type: 'server', label: 'Server', icon: Server, colorVar: 'var(--device-server)' },
  { type: 'firewall', label: 'Firewall', icon: Shield, colorVar: 'var(--device-firewall)' },
  { type: 'cloud', label: 'Cloud', icon: Cloud, colorVar: 'var(--device-cloud)' },
  { type: 'pc', label: 'PC', icon: Monitor, colorVar: 'var(--device-pc)' },
];

const DevicePalette = () => {
  const onDragStart = (event: React.DragEvent, deviceType: DeviceType) => {
    event.dataTransfer.setData('application/reactflow', deviceType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-56 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-bold font-mono text-foreground tracking-wide uppercase">
          Devices
        </h2>
        <p className="text-[11px] text-muted-foreground mt-1">
          Drag to canvas
        </p>
      </div>
      <div className="p-3 flex flex-col gap-2 overflow-y-auto flex-1">
        {devices.map((device) => {
          const Icon = device.icon;
          const color = `hsl(${device.colorVar})`;
          return (
            <div
              key={device.type}
              draggable
              onDragStart={(e) => onDragStart(e, device.type)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border bg-card cursor-grab active:cursor-grabbing hover:border-primary/40 hover:bg-muted/50 transition-all duration-150 select-none"
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}18`, color }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <span className="text-xs font-medium font-mono text-foreground">{device.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevicePalette;
