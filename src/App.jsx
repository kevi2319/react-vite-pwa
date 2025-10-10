import React, { useState } from "react";
import ColorBandSelector from "./components/ColorBandSelector";
import InfoModal from "./components/InfoModal"; // 1. Importar el modal
import "./App.css";

export default function App() {
  const [bands, setBands] = useState([null, null, null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. Estado para el modal

  const handleChange = (index, color) => {
    const newBands = [...bands];
    newBands[index] = color;
    setBands(newBands);
  };

  const formatValue = (value) => {
    if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toLocaleString()} GΩ`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toLocaleString()} MΩ`;
    if (value >= 1_000) return `${(value / 1_000).toLocaleString()} kΩ`;
    return `${value.toLocaleString()} Ω`;
  };

  const calculateResistance = () => {
    if (!bands[0] || !bands[1] || !bands[2] || !bands[3]) return null;
    const value = (bands[0].value * 10 + bands[1].value) * bands[2].multiplier;
    const tolerance = bands[3].tolerance;
    return { value, tolerance };
  };

  const result = calculateResistance();

  return (
    <> {/* Usar un Fragment para el modal */}
      <div className="app-container">
        <div className="header-container">
            <h1>Calculadora de Resistencias</h1>
            {/* 3. Botón para abrir el modal */}
            <button className="info-btn" onClick={() => setIsModalOpen(true)}>
                ⓘ
            </button>
        </div>

        {bands.map((b, i) => (
          <ColorBandSelector
            key={i}
            bandIndex={i}
            selected={b?.name}
            onChange={(color) => handleChange(i, color)}
          />
        ))}

        <div className="result">
          {result ? (
            <>
              <h2>Resultado</h2>
              <p>
                <strong>Valor:</strong> {formatValue(result.value)}
                <br />
                <strong>Tolerancia:</strong> ±{result.tolerance}%
              </p>
            </>
          ) : (
            <p>Selecciona los colores de las 4 bandas para ver el valor</p>
          )}
        </div>
      </div>

      {/* 4. Renderizar el modal */}
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}