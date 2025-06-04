import { ScatterChart } from 'lucide-react';
import type React from 'react';

interface AppLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ className, iconSize = 24, textSize = "text-xl" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ScatterChart size={iconSize} className="text-primary" />
      <h1 className={`font-headline font-bold ${textSize} text-foreground`}>
        Lweemee
      </h1>
    </div>
  );
};

export default AppLogo;
