import './styles.css'
import { useEffect, useRef } from 'react'
import textJson from '../../i18n/Home.json'
import { scrollReveal } from 'lib/scrollReveal'
import { Button } from 'components/globalComponents/Button'

export const Home = () => {
	const homeRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: homeRef.current,
			direction: 'top',
			time: 900
		})
	}, [])

	return (
		<section ref={homeRef} id='home' className='section__home '>
			<div className='home__content'>
				<div className='home__text'>
					<h3>{textJson.home_title}</h3>
					<p>{textJson.home_text}</p>
					<Button
						NameButton={textJson.home_button_text}
						link={'footer'}
					/>
				</div>
				<div className='home__img'>
					<img src='/images/home/svg1.png' alt='Home' />
				</div>
			</div>
		</section>
	)
}
