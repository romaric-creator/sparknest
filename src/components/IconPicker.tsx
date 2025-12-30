import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import Icon from './Icon'; // Our wrapper Icon component

interface IconPickerProps {
  onSelectIcon: (iconName: string) => void;
  selectedIcon?: string;
}

const IconPicker: React.FC<IconPickerProps> = ({ onSelectIcon, selectedIcon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Get all icon names from lucide-react
  const allIconNames = useMemo(() => {
    // Filter out non-icon exports (like createLucideIcon, icons, etc.)
    return Object.keys(LucideIcons).filter(name => name[0] === name[0].toUpperCase() && name !== 'createLucideIcon' && name !== 'icons');
  }, []);

  const filteredIconNames = useMemo(() => {
    return allIconNames.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allIconNames]);

  const handleIconClick = (iconName: string) => {
    onSelectIcon(iconName);
  };

  return (
    <div className="icon-picker-container p-4 border rounded-lg shadow-inner bg-gray-50">
      <input
        type="text"
        placeholder="Search icons..."
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="icon-grid grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-60 overflow-y-auto border p-2 rounded-md bg-white">
        {filteredIconNames.map((iconName) => {
          const isSelected = selectedIcon === iconName;

          return (
            <div
              key={iconName}
              className={`icon-item flex flex-col items-center justify-center p-2 rounded-md cursor-pointer transition-all duration-200
                          ${isSelected ? 'bg-blue-200 ring-2 ring-blue-500' : 'hover:bg-gray-100'}`}
              onClick={() => handleIconClick(iconName)}
              title={iconName}
            >
              <Icon name={iconName as any} size={24} className={isSelected ? 'text-blue-700' : 'text-gray-600'} />
              <span className="text-xs text-gray-600 mt-1 truncate w-full text-center">{iconName}</span>
            </div>
          );
        })}
      </div>
      {filteredIconNames.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No icons found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default IconPicker;
