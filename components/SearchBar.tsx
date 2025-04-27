'use client';

import { useRouter } from 'next/navigation';
import { useIncidents } from './Context';
import React from 'react';

export default function SearchBar() {
  const { searchTerm, setSearchTerm, filteredResults } = useIncidents();
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleIncidentClick = (id: number) => {
    router.push(`/incident/${id}`);
    setSearchTerm('');
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const getSeverityClass = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'low':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="w-full relative z-[1000]">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search incidents..."
          className="w-full p-2 pl-3 pr-10 border border-gray-700 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition"
          >
            Clear
          </button>
        )}
      </div>

      {searchTerm && (
        <div className="absolute top-full mt-1 w-full bg-gray-800 rounded shadow-lg max-h-48 md:max-h-64 overflow-y-auto z-[1000] border border-gray-700">
          {filteredResults.length === 0 ? (
            <p className="text-center text-gray-400 p-2 text-sm">No incidents found.</p>
          ) : (
            filteredResults.map((incident) => (
              <div
                key={incident.id}
                onClick={() => handleIncidentClick(incident.id)}
                className="border-b border-gray-700 py-2 px-3 cursor-pointer hover:bg-gray-700 transition"
              >
                <h3 className="text-sm md:text-md text-white font-semibold truncate">{incident.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 line-clamp-1">{incident.description}</p>
                <p className={`text-xs font-bold ${getSeverityClass(incident.severity)}`}>
                  {incident.severity}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
