import Head from "next/head"

export default function Layout({ children, title, description }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <nav>
                navbar
            </nav>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}
