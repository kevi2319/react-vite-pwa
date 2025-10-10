import React from "react";
import { colorBands } from "../Data/ColorCodes"; // Importación actualizada

export default function ColorBandSelector({ bandIndex, selected, onChange }) {
  // El resto de la lógica no necesita cambios
  return (
    <div className="band-selector">
      {/* Se cambia el h3 por un label para mejor semántica */}
      <label className="band-label">Banda {bandIndex + 1}</label>
      <div className="colors">
        {colorBands.map((color, i) => {
          // Deshabilitar botones no aplicables para ciertas bandas
          const isBand1Disabled = bandIndex === 0 && (color.value === null || color.name === 'Negro');
          const isDigitBandDisabled = bandIndex < 2 && color.value === null;
          const isMultiplierDisabled = bandIndex === 2 && color.tolerance !== null && color.multiplier > 1;
          const isToleranceDisabled = bandIndex === 3 && color.tolerance === null;

          const isDisabled = isBand1Disabled || isDigitBandDisabled || isMultiplierDisabled || isToleranceDisabled;

          return (
            <button
              key={i}
              title={color.name} // Añadido para mejor usabilidad
              className={`color-btn ${selected === color.name ? "selected" : ""}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => onChange(color)}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    </div>
  );
}