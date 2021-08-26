import './styles.css'
import { CardInfo } from './CardInfo'
import { TitleService } from './TitleService'
import { scrollReveal } from 'lib/scrollReveal'
import React, { useEffect, useRef } from 'react'

export const ServicesCards = () => {
	const servicesCardsRef = useRef(null)

	useEffect(() => {
		scrollReveal({ component: servicesCardsRef.current, direction: 'top' })
	}, [])

	return (
		<div id='service' ref={servicesCardsRef} className=' bg-container'>
			<TitleService nameTitle={'Servicios'} />
			<div className='cardsContainer justify-content-xl-between justify-content-center aligt-items-center'>
				<CardInfo
					link='manage'
					urlImg='/icons/hands.svg'
					title={'Asesoria Y administracion'}
					description={'te vamos a hacer una afiliacion'}
				/>
				<CardInfo
					link='Outsourcing'
					urlImg='/icons/statistic.svg'
					title={'Outsourcing gestion humana '}
					description={'te vamos a hacer una afiliacion'}
				/>
				<CardInfo
					link='manage-admine'
					urlImg='/icons/search.svg'
					title={'Administracion contable y tributaria'}
					description={'te vamos a hacer una afiliación'}
				/>
			</div>
		</div>
	)
}
