'use server'

import { z } from 'zod'

// Схема валидации формы
const formSchema = z.object({
	firstName: z.string().min(2, 'First name is required'),
	lastName: z.string().min(2, 'Last name is required'),
	mobile: z.string().min(9, 'Mobile number is required'),
	email: z.string().email('Invalid email address'),
	role: z.enum([
		'A parent',
		'A supplier',
		'A candidate',
		'Press and B2B partner',
	]),
	comment: z.string().optional(),
	agreement: z.boolean().refine(val => val === true, {
		message: 'You must accept the data protection policy',
	}),
})

export type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
	try {
		// Валидируем данные
		const validatedData = formSchema.parse(formData)

		// URL вашего Google Apps Script
		const scriptUrl =
			'https://script.google.com/macros/s/AKfycbyppEncB0lIQfix96WkQqF0seD-sg1XXWSrDKJohAtdX5_oSPI8LJEDWWz9RprsHcZpkA/exec'

		// Отправляем данные в Google Apps Script
		const response = await fetch(scriptUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(validatedData),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		// Проверяем, что ответ действительно JSON
		const contentType = response.headers.get('content-type')
		if (!contentType || !contentType.includes('application/json')) {
			const text = await response.text()
			console.error('Non-JSON response:', text)
			throw new Error('Server returned non-JSON response')
		}

		const result = await response.json()

		if (result.success) {
			return {
				success: true,
				message: 'Thank you! Your message has been sent successfully.',
			}
		} else {
			return {
				success: false,
				error: result.error || 'Something went wrong. Please try again.',
			}
		}
	} catch (error) {
		console.error('Error submitting form:', error)

		if (error instanceof z.ZodError) {
			return {
				success: false,
				error: 'Invalid form data. Please check your inputs.',
			}
		}

		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
		}
	}
}
