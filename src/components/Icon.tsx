import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons; // Ensure name is a valid Lucide icon name
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const LucideIconComponent = LucideIcons[name];

  if (!LucideIconComponent) {
    console.warn(`Icon "${name}" not found in LucideIcons.`);
    return null; // Or render a fallback icon
  }

  return <LucideIconComponent size={size} color={color} className={className} />;
};

export default Icon;
