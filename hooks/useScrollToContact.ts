'use client'

export const useScrollToContact = () => {
	const scrollToContact = () => {
		const contactSection = document.getElementById('contact')
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return scrollToContact
}
