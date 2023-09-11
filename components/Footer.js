import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Copyrights &copy; Dj Events 2023</p>
        <p>
            <Link href='/about'>
                About This Project
            </Link>
        </p>
    </footer>
  )
}
