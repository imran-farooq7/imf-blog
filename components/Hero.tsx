import Image from "next/image";
import styles from "./hero.module.css";
type Props = {};
const Hero = (props: Props) => {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
				<Image src="/imran.jpg" alt="imran" width={300} height={300} />
			</div>
			<h1>Hi I'm Imran</h1>
			<p>I blog about React and Next js</p>
		</section>
	);
};
export default Hero;
