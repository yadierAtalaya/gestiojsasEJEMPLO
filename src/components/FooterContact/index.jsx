import './styles.css'
import { FormContact } from './FormContact'
import { IconsContact } from './IconsContact'

export const FooterContact = () => {
	return (
		<footer id='footer' className='footerContact mt-5'>
			<FormContact />
			<IconsContact />
		</footer>
	)
}
