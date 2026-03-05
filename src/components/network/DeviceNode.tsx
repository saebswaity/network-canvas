import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { Monitor, Server, Shield, Cloud, Router, Network } from 'lucide-react';

export type DeviceType = 'router' | 'switch' | 'server' | 'firewall' | 'cloud' | 'pc';

export interface DeviceNodeData {
  label: string;
  deviceType: DeviceType;
  ip?: string;
}

const deviceConfig: Record<DeviceType, { icon: typeof Router; colorVar: string; label: string }> = {
  router: { icon: Router, colorVar: 'var(--device-router)', label: 'Router' },
  switch: { icon: Network, colorVar: 'var(--device-switch)', label: 'Switch' },
  server: { icon: Server, colorVar: 'var(--device-server)', label: 'Server' },
  firewall: { icon: Shield, colorVar: 'var(--device-firewall)', label: 'Firewall' },
  cloud: { icon: Cloud, colorVar: 'var(--device-cloud)', label: 'Cloud' },
  pc: { icon: Monitor, colorVar: 'var(--device-pc)', label: 'PC' },
};

const DeviceNode = ({ data, selected }: NodeProps) => {
  const nodeData = data as unknown as DeviceNodeData;
  const config = deviceConfig[nodeData.deviceType] || deviceConfig.pc;
  const Icon = config.icon;
  const color = `hsl(${config.colorVar})`;

  return (
    <div
      className="relative group"
      style={{ minWidth: 120 }}
    >
      <Handle type="target" position={Position.Top} className="!w-3 !h-3 !border-2 !border-card" style={{ background: color }} />
      <Handle type="target" position={Position.Left} className="!w-3 !h-3 !border-2 !border-card" style={{ background: color }} />

      <div
        className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border-2 bg-card shadow-lg transition-all duration-200 ${
          selected ? 'shadow-xl scale-105' : 'hover:shadow-xl hover:scale-[1.02]'
        }`}
        style={{
          borderColor: selected ? color : 'hsl(var(--border))',
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <span className="text-xs font-semibold text-foreground font-mono truncate max-w-[100px]">
          {nodeData.label}
        </span>
        {nodeData.ip && (
          <span className="text-[10px] text-muted-foreground font-mono">
            {nodeData.ip}
          </span>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} className="!w-3 !h-3 !border-2 !border-card" style={{ background: color }} />
      <Handle type="source" position={Position.Right} className="!w-3 !h-3 !border-2 !border-card" style={{ background: color }} />
    </div>
  );
};

export default memo(DeviceNode);
