import Link from "next/link"
import styles from ".//Navigation.module.css"

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Expenses',
    route: '/expenses'
}, {
    label: 'Transaction',
    route: '/transaction'
}]

export function Navigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                        <li className={styles.item} key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
    
}
