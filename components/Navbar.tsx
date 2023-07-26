import Link from "next/link";
import styles from "./navbar.module.css";

type Props = {};
const Navbar = (props: Props) => {
	return (
		<header className={styles.header}>
			<Link href="/">
				<h1>Logo</h1>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
