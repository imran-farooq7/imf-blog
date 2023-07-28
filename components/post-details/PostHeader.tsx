import Image from "next/image";
import styles from "./postheader.module.css";

type Props = {
	title: string;
	image: string;
};
const PostHeader = ({ title, image }: Props) => {
	return (
		<div className={styles.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={150} />
		</div>
	);
};
export default PostHeader;
