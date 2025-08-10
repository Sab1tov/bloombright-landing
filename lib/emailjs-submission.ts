// Альтернативный вариант с EmailJS
// Установите: npm install @emailjs/browser

import emailjs from '@emailjs/browser'

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

export async function submitFormViaEmailJS(
	data: FormData
): Promise<FormResponse> {
	try {
		// Замените на ваши данные от EmailJS
		const serviceId = 'YOUR_SERVICE_ID'
		const templateId = 'YOUR_TEMPLATE_ID'
		const publicKey = 'YOUR_PUBLIC_KEY'

		const templateParams = {
			from_name: `${data.firstName} ${data.lastName}`,
			from_email: data.email,
			from_phone: data.mobile,
			role: data.role,
			message: data.comment || '',
			agreement: data.agreement ? 'Yes' : 'No',
		}

		const result = await emailjs.send(
			serviceId,
			templateId,
			templateParams,
			publicKey
		)

		if (result.status === 200) {
			return {
				success: true,
				message: 'Thank you! Your message has been sent successfully.',
			}
		} else {
			throw new Error('Failed to send email')
		}
	} catch (error) {
		console.error('Error submitting form:', error)
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
		}
	}
}
