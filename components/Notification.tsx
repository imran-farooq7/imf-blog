import Styles from "./notification.module.css";
type Props = {
	title: string;
	message: string;
	status: string;
};

function Notification({ title, message, status }: Props) {
	let statusStyles = "";

	if (status === "success") {
		statusStyles = Styles.success;
	}

	if (status === "error") {
		statusStyles = Styles.error;
	}

	const cssStyles = `${Styles.notification} ${statusStyles}`;

	return (
		<div className={cssStyles}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default Notification;
