import { dateRangeBySign, getPokemonBySign } from '../utils/zodiac.js'

export default function HoroscopeCard({ sign, message }) {
  const range = dateRangeBySign(sign)
  const pokemon = getPokemonBySign(sign)

  if (!pokemon) return null

  return (
    <section className="card result">
      {/* Header con Pokémon */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>
          {pokemon.sprite}
        </div>
        <h2>{sign} ✨ {pokemon.pokemon}</h2>
        <div style={{ 
          fontSize: '12px', 
          color: 'var(--muted)', 
          marginBottom: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>{pokemon.pokedexNum}</span>
          <span>•</span>
          <span>Tipo: {pokemon.type}</span>
        </div>
        <p className="range">{range}</p>
      </div>

      {/* Personalidad Pokémon */}
      <div style={{
        background: 'rgba(124,156,255,0.1)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '12px',
        marginBottom: '16px'
      }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '14px', 
          color: 'var(--primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          🎯 Personalidad Pokémon
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: '14px', 
          fontStyle: 'italic',
          color: 'var(--text)'
        }}>
          {pokemon.personality}
        </p>
      </div>

      {/* Estadísticas básicas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>PS</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary)' }}>
            {pokemon.stats.hp}
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>ATK</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-2)' }}>
            {pokemon.stats.attack}
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>DEF</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary)' }}>
            {pokemon.stats.defense}
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>SPD</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-2)' }}>
            {pokemon.stats.speed}
          </div>
        </div>
      </div>

      {/* Movimientos */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '14px', 
          color: 'var(--primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          ⚔️ Movimientos
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4px'
        }}>
          {pokemon.moves.map((move, i) => (
            <span 
              key={i}
              style={{
                background: 'linear-gradient(45deg, var(--primary), var(--primary-2))',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '11px',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              {move}
            </span>
          ))}
        </div>
      </div>

      {/* Predicción */}
      <div style={{
        background: 'rgba(142,242,255,0.1)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px'
      }}>
        <h3 style={{ 
          margin: '0 0 12px 0', 
          fontSize: '14px', 
          color: 'var(--primary-2)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          🔮 Predicción del Entrenador
        </h3>
        <p className="message">{message}</p>
      </div>
    </section>
  )
}