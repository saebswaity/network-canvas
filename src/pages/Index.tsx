import DevicePalette from '@/components/network/DevicePalette';
import NetworkCanvas from '@/components/network/NetworkCanvas';

const Index = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <DevicePalette />
      <NetworkCanvas />
    </div>
  );
};

export default Index;
