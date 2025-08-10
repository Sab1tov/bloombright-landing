export interface FormData {
	firstName: string
	lastName: string
	mobile: string
	email: string
	role: string
	comment?: string
	agreement: boolean
}

export interface FormResponse {
	success: boolean
	message?: string
	error?: string
}

export async function submitFormToGoogleSheets(
	data: FormData
): Promise<FormResponse> {
	try {
		// Используем Formspree для обработки формы
		// Замените YOUR_FORM_ID на ваш ID от Formspree
		const formspreeUrl = 'https://formspree.io/f/xpzgwqzg'

		// Отправляем данные в Formspree
		const response = await fetch(formspreeUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: data.firstName,
				lastName: data.lastName,
				mobile: data.mobile,
				email: data.email,
				role: data.role,
				comment: data.comment || '',
				agreement: data.agreement ? 'Yes' : 'No',
			}),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		// Formspree возвращает успешный ответ
		return {
			success: true,
			message: 'Thank you! Your message has been sent successfully.',
		}
	} catch (error) {
		console.error('Error submitting form:', error)
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
		}
	}
}
