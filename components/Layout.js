import Head from "next/head"
import styles from "../styles/main.module.css"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta name="keywords" content={keywords}></meta>
            {console.log("children ")}
        </Head>
        <Header />
        <div className={styles.container}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: "DJ Events | Find the hottest parties",
    description: "Find the latest DJ and other musical events",
    keywords: "music, dj, edm, events",
}
