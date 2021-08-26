import './styles.css'
import { ReactComponent as EmailSVG } from 'icons/footerContact/email.svg'
import { ReactComponent as PhoneSVG } from 'icons/footerContact/phone.svg'
import { ReactComponent as WhatsappSVG } from 'icons/footerContact/whatsapp.svg'

export const IconsContact = () => {
	return (
		<section className='iconsContact'>
			<a
				href='http://www.google.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<EmailSVG />
			</a>
			<a
				href='http://www.google.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<PhoneSVG />
			</a>
			<a
				href='http://www.google.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<WhatsappSVG />
			</a>
		</section>
	)
}
