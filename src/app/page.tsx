import styles from './page.module.css'
import { MapLeaflet } from '@/components/map-leaflet'

export default function Home() {
  return (
    <main className={styles.main}>
      <MapLeaflet />
    </main>
  )
}
