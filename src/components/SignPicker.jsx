import { useMemo, useState } from 'react'
import { zodiacSigns, signFromDate } from '../utils/zodiac.js'

export default function SignPicker({ onChange }) {
  const [date, setDate] = useState('')

  // lista de signos en <select> (opcional)
  const options = useMemo(() => zodiacSigns.map(s => s.key), [])

  const handleDate = (e) => {
    const value = e.target.value
    setDate(value)
    if (!value) return onChange(null)
    const sign = signFromDate(new Date(value))
    onChange(sign)
  }

  const handleSelect = (e) => {
    const value = e.target.value
    onChange(value || null)
  }

  return (
    <section className="card">
      <h2>Elige tu signo o tu fecha</h2>

      <div className="row">
        <label>
          Por fecha de nacimiento:
          <input type="date" value={date} onChange={handleDate} />
        </label>

        <span className="or">o</span>

        <label>
          Por signo:
          <select defaultValue="" onChange={handleSelect}>
            <option value="" disabled>Selecciona…</option>
            {options.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}
