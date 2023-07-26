import Link from "next/link";
import styles from "./navbar.module.css";
import Logo from "./Logo";

type Props = {};
const Navbar = (props: Props) => {
	return (
		<header className={styles.header}>
			<Link href="/">
				<Logo />
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
