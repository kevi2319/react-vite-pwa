import { dateRangeBySign } from '../utils/zodiac.js'

export default function HoroscopeCard({ sign, message }) {
  const range = dateRangeBySign(sign)

  return (
    <section className="card result">
      <h2>{sign}</h2>
      <p className="range">{range}</p>
      <p className="message">{message}</p>
    </section>
  )
}
