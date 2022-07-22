const javaTimeLocalDateFormat = (date: Date) => {
	return (
		date.getFullYear() +
		"-" +
		String(date.getMonth() + 1).padStart(2, "0") +
		"-" +
		date.getDate().toString().padStart(2, "0")
	)
}

export const today = javaTimeLocalDateFormat(new Date())
const _yesterday = new Date()
_yesterday.setDate(_yesterday.getDate() - 1)

export const yesterday = javaTimeLocalDateFormat(_yesterday)
