import React from "react";
import "./InfoModal.css"; // Crearemos este archivo para los estilos del modal

export default function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Guía del Código de Colores (4 Bandas)</h2>
        <p>
          Las resistencias usan bandas de colores para indicar su valor en Ohms (Ω). Se leen de izquierda a derecha:
        </p>
        <ul>
          <li><strong>Banda 1:</strong> Primer dígito significativo.</li>
          <li><strong>Banda 2:</strong> Segundo dígito significativo.</li>
          <li><strong>Banda 3:</strong> Factor multiplicador.</li>
          <li><strong>Banda 4:</strong> Tolerancia o margen de error.</li>
        </ul>

        <div className="table-container">
          <table className="info-table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Valor (Bandas 1 y 2)</th>
                <th>Multiplicador (Banda 3)</th>
                <th>Tolerancia (Banda 4)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Negro</td><td>0</td><td>×1</td><td>-</td></tr>
              <tr><td>Café</td><td>1</td><td>×10</td><td>±1%</td></tr>
              <tr><td>Rojo</td><td>2</td><td>×100</td><td>±2%</td></tr>
              <tr><td>Naranja</td><td>3</td><td>×1,000</td><td>-</td></tr>
              <tr><td>Amarillo</td><td>4</td><td>×10,000</td><td>-</td></tr>
              <tr><td>Verde</td><td>5</td><td>×100,000</td><td>±0.5%</td></tr>
              <tr><td>Azul</td><td>6</td><td>×1,000,000</td><td>±0.25%</td></tr>
              <tr><td>Violeta</td><td>7</td><td>×10,000,000</td><td>±0.1%</td></tr>
              <tr><td>Gris</td><td>8</td><td>×100,000,000</td><td>±0.05%</td></tr>
              <tr><td>Blanco</td><td>9</td><td>×1,000,000,000</td><td>-</td></tr>
              <tr><td>Dorado</td><td>-</td><td>×0.1</td><td>±5%</td></tr>
              <tr><td>Plateado</td><td>-</td><td>×0.01</td><td>±10%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}