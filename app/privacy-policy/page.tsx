import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://bloombrightnursery.ae/privacy-policy',
	},
}

export default function PrivacyPolicy() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50'>
			<Navigation />
			<main className='max-w-3xl mx-auto px-4 py-12 text-gray-800'>
				<button
					onClick={() => (window.location.href = '/')}
					className='mb-8 flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-white hover:bg-gray-100 text-gray-600 rounded-lg shadow-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#d44c34] focus:ring-offset-2 w-fit'
				>
					<svg
						width='20'
						height='20'
						fill='none'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.5 5L2.5 10L7.5 15'
							stroke='#d44c34'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M2.5 10H17.5'
							stroke='#d44c34'
							strokeWidth='2'
							strokeLinecap='round'
						/>
					</svg>
					<span>Back</span>
				</button>
				<h1 className='text-4xl font-bold mb-8'>Privacy & Cookies Policy</h1>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>1. Introduction</h2>
					<p>
						Welcome to Bloom Bright Nursery (BBN). This Privacy and Cookies
						Policy sets out the privacy and cookies policy of Bloom Bright
						Nursery, whose registered address is at P.O. Box 37885, Dubai,
						United Arab Emirates.
					</p>
					<p>
						By providing your personal information to BBN, you consent to the
						collection and use of it and any other information provided to BBN
						in accordance with this Privacy Policy.
					</p>
					<p>
						At BBN, we are committed to the privacy and security of our
						clients&apos; data, particularly the sensitive information
						concerning children and their families. This Privacy Policy provides
						detailed information on how your data is collected, used, and
						protected.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>2. Data Controller</h2>
					<p>
						The data controller for your personal information is Bloom Bright
						Nursery, P.O. Box 37885, Dubai, United Arab Emirates.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						3. Personal Data Processing Purposes
					</h2>
					<ul className='list-disc ml-6 mb-2'>
						<li>To manage administrative operations.</li>
						<li>To facilitate effective communication.</li>
						<li>
							To provide accurate, current and complete information about
							yourself as prompted by the relevant registration form and child
							portal.
						</li>
						<li>
							To maintain and promptly update the child portal to keep it fully
							up to date.
						</li>
						<li>To conduct marketing activities.</li>
						<li>To provide high-quality childcare.</li>
						<li>To record calls for training and quality control purposes.</li>
						<li>To monitor and ensure health and safety.</li>
						<li>To support educational activities and development.</li>
						<li>To deliver our services effectively.</li>
						<li>To manage billing and invoicing processes.</li>
						<li>To carry out targeted marketing efforts.</li>
						<li>To engage in business development activities.</li>
						<li>To ensure website functionality and performance.</li>
						<li>To enhance user experience and satisfaction.</li>
						<li>To support marketing initiatives.</li>
						<li>To manage recruitment processes.</li>
						<li>To process job applications and assess suitability.</li>
						<li>To comply with applicable law and regulation.</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						4. Personal Data We Process
					</h2>
					<p>
						Within the context of your use of our services and your navigation
						of our website, BBN processes several categories of data. This data
						originates from:
					</p>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Information you provide when registering your child, updating
							contact information, or interacting with our team.
						</li>
						<li>
							Information resulting from your use of our services, including
							interactions with staff and site navigation.
						</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.1 Parents’ Personal Data
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Names, contact information, nationality, addresses, email
							addresses, phone numbers, ID (passport, driver’s license, emirates
							ID, other ID badge), visa
						</li>
						<li>Employment details, employer names</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.2 Children’s Personal Data
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Names, dates of birth, gender, nationality, address, birth
							certificate, Emirates ID, passport, visa, photo, class
						</li>
						<li>
							Medical data (allergies, pathologies, doctors, treatments,
							reports, prescriptions, vaccination booklet, insurance), diet type
						</li>
						<li>Emergency contacts</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.3 Clients’ Personal Data (B2B)
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>Names, contact information, company details, job titles</li>
						<li>Business details, interactions, communication records</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.4 Prospects’ Personal Data
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>Names, contact information, company details, job titles</li>
						<li>Business details, interactions, communication records</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.5 Website Visitors’ Personal Data
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Browsing data (cookies, IP addresses, browser type, pages visited,
							time/date)
						</li>
						<li>Information from contact forms or newsletter sign-ups</li>
					</ul>
					<h3 className='text-lg font-semibold mt-6 mb-2'>
						4.6 Applicants’ Personal Data
					</h3>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Names, contact information, addresses, email addresses, phone
							numbers
						</li>
						<li>
							CVs, cover letters, employment history, education, references
						</li>
						<li>Application data (position, dates, interview notes)</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>5. Cookies</h2>
					<p>
						We use authentication, security, location, functionality, analytics,
						and advertising cookies. You can manage your cookie preferences via
						our consent management platform. Blocking cookies may affect your
						experience. For more information, visit{' '}
						<a
							href='https://www.allaboutcookies.org'
							className='text-blue-600 underline'
							target='_blank'
							rel='noopener noreferrer'
						>
							allaboutcookies.org
						</a>
						.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>6. Promotion Rules</h2>
					<p>
						Promotions are subject to specific rules. Entrants must be at least
						21 years old. Only one entry per person/household. TBN reserves the
						right to cancel or substitute prizes. Winners are chosen at random
						and notified in writing. Prizes are non-transferable and
						non-negotiable. By entering, you agree to participate in promotional
						activity and consent to publication of your name and photo. TBN
						excludes liability except for death or personal injury due to
						negligence.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						7. Legal Basis and Aims
					</h2>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Service contract: Processing is necessary to fulfill our
							educational and caregiving services.
						</li>
						<li>
							Legitimate interest: Improving services, protecting children,
							efficient management.
						</li>
						<li>Consent: For marketing, cookies, and job applications.</li>
						<li>
							Legal obligations: Adhering to UAE law regarding childcare and
							education.
						</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>8. Recipients of Data</h2>
					<p>
						Data may be shared with service providers (IT, educational software)
						bound by data protection obligations. Subcontractors include HubSpot
						Inc., LittleLives Inc., Microsoft Corporation, Acronis, Google LLC,
						Zapier Inc, and cookies partners.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						9. Data Retention and Deletion
					</h2>
					<p>
						Data is retained for the duration of enrollment plus one year, or as
						required by law. Data for other users is retained as needed. Longer
						retention may apply if required by law or for legal defense.
						Deletion follows regulations and data is backed up for integrity.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						10. Data Subject Rights
					</h2>
					<ul className='list-disc ml-6 mb-2'>
						<li>Access, correct, delete, limit, or object to processing</li>
						<li>Data portability</li>
						<li>Withdraw consent</li>
						<li>Right to complain to the Data Office under UAE PDPL</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>11. Data Security</h2>
					<ul className='list-disc ml-6 mb-2'>
						<li>SSL encryption</li>
						<li>Secure storage</li>
						<li>Restricted access to authorized personnel</li>
						<li>Internal audits and reviews</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>12. Data Localization</h2>
					<p>
						All servers are in the UAE. Data may be transferred abroad with
						safeguards in place, such as contractual clauses under UAE PDPL.
					</p>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						13. Contact Information
					</h2>
					<p>
						To change your information or exercise your rights, update your info
						on the Child Portal or contact us:
					</p>
					<ul className='list-disc ml-6 mb-2'>
						<li>Email: privacy@bloombrightnursery.ae</li>
						<li>
							Post: DPO, Bloom Bright Nursery, P.O. Box 37885, Dubai, United
							Arab Emirates
						</li>
					</ul>
				</section>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>
						14. Updates to this Policy
					</h2>
					<p>
						This Privacy Policy may be updated periodically. The latest version
						will always be posted on our website. Last updated: 7 August 2025.
					</p>
				</section>
			</main>
			<Footer />
		</div>
	)
}
