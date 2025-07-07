import React, { useState } from 'react';

const Yaguar: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedLoreal, setSelectedLoreal] = useState('');

  const options = [
    'Loreal',
    'Llorente',
    'Branca',
    'Rindedos',
    'Hileret'
  ];

  const lorealOptions = [
    'Elvive',
    'Nutrisse',
    'Cor',
    'Excellence'
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setSelectedLoreal(''); // Reset loreal select if main changes
  };

  const handleLorealChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLoreal(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="text-center mb-8 p-5 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl text-white">
        <h1 className="text-3xl font-bold mb-2">Yaguar</h1>
        <p className="text-lg opacity-90 m-0">Generador de datos para Yaguar</p>
      </div>
      
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Selecciona una opción</h2>
          <div className="flex flex-col gap-3">
            <label htmlFor="yaguar-select" className="font-semibold text-gray-700 text-sm">
              Empresa:
            </label>
            <select
              id="yaguar-select"
              value={selectedOption}
              onChange={handleSelectChange}
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
            >
              <option value="">Selecciona una empresa...</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* Segundo desplegable solo si es Loreal */}
            {selectedOption === 'Loreal' && (
              <div className="flex flex-col gap-3 mt-4">
                <label htmlFor="loreal-select" className="font-semibold text-gray-700 text-sm">
                  Producto Loreal:
                </label>
                <select
                  id="loreal-select"
                  value={selectedLoreal}
                  onChange={handleLorealChange}
                  className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
                >
                  <option value="">Selecciona un producto...</option>
                  {lorealOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedOption && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold">
                  Seleccionaste: <span className="text-green-600">{selectedOption}</span>
                  {selectedOption === 'Loreal' && selectedLoreal && (
                    <span> &rarr; <span className="text-blue-600">{selectedLoreal}</span></span>
                  )}
                </p>
                <p className="text-green-700 text-sm mt-2">
                  Funcionalidades próximas para {selectedOption}
                  {selectedOption === 'Loreal' && selectedLoreal ? ` (${selectedLoreal})` : ''}...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yaguar; 