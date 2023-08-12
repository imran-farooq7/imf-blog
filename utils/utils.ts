export const getMessage = async (
	email: string,
	name: string,
	message: string
) => {
	const res = await fetch("/api/user", {
		method: "POST",
		body: JSON.stringify({
			email,
			name,
			message,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res;
};
