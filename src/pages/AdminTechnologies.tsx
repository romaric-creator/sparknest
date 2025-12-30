import React, { useState } from 'react';
import IconPicker from '../components/IconPicker';
import Icon from '../components/Icon'; // Our wrapper Icon component

const AdminTechnologies: React.FC = () => {
  const [technologyName, setTechnologyName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Technology:', { technologyName, selectedIcon });
    // Here you would typically send this data to your backend API
    alert(`Technology: ${technologyName}, Icon: ${selectedIcon} submitted!`);
    setTechnologyName('');
    setSelectedIcon('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Technologies</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="technologyName" className="block text-gray-700 text-sm font-bold mb-2">
            Technology Name:
          </label>
          <input
            type="text"
            id="technologyName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={technologyName}
            onChange={(e) => setTechnologyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedIcon" className="block text-gray-700 text-sm font-bold mb-2">
            Selected Icon:
          </label>
          <input
            type="text"
            id="selectedIcon"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedIcon}
            readOnly // Make it read-only as it will be set by the IconPicker
            placeholder="Select an icon using the picker below"
            required
          />
          {selectedIcon && (
            <div className="mt-2 flex items-center space-x-2">
              <p>Preview:</p>
              <Icon name={selectedIcon as any} size={24} />
              <span className="text-gray-700">{selectedIcon}</span>
            </div>
          )}
        </div>
        <IconPicker onSelectIcon={setSelectedIcon} selectedIcon={selectedIcon} />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Technology
        </button>
      </form>
    </div>
  );
};

export default AdminTechnologies;
