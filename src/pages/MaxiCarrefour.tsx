import React, { useState } from 'react';

const MaxiCarrefour: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'MP. Wines',
    'Branca'
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="text-center mb-8 p-5 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl text-white">
        <h1 className="text-3xl font-bold mb-2">Maxi-Carrefour</h1>
        <p className="text-lg opacity-90 m-0">Generador de datos para Maxi-Carrefour</p>
      </div>
      
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Selecciona una opción</h2>
          <div className="flex flex-col gap-3">
            <label htmlFor="maxi-select" className="font-semibold text-gray-700 text-sm">
              Empresa:
            </label>
            <select
              id="maxi-select"
              value={selectedOption}
              onChange={handleSelectChange}
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-yellow-500 focus:outline-none bg-gray-50"
            >
              <option value="">Selecciona una empresa...</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {selectedOption && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-yellow-800 font-semibold">
                  Seleccionaste: <span className="text-yellow-600">{selectedOption}</span>
                </p>
                <p className="text-yellow-700 text-sm mt-2">
                  Funcionalidades próximas para {selectedOption}...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxiCarrefour; 