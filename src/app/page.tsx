import styles from './page.module.css'
import { MapPa } from './components/map-leaflet'

export default function Home() {
  return (
    <main className={styles.main}>
      <MapPa />
    </main>
  )
}
