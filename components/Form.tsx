import styles from "./Form.module.css";
type Props = {};
const Form = (props: Props) => {
	return (
		<section className={styles.contact}>
			<h1>How can i help you</h1>
			<form className={styles.form}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							required
						/>
					</div>
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Message</label>
					<textarea
						name="Message"
						id="Message"
						placeholder="Message"
						required
						rows={5}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
};
export default Form;
