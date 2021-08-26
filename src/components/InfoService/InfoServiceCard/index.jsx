import './style.css'
import { scrollReveal } from 'lib/scrollReveal'
import React, { useEffect, useRef } from 'react'
import { InfoServiceText } from '../InfoServiceText'
import { InfoServiceImage } from '../InfoServiceImage'

export const InfoServiceCard = ({
	urlImage,
	className,
	InfoIndextitle,
	animationSettings,
	InfoIndexDescription
}) => {
	const serviceRef = useRef(null)

	useEffect(() => {
		scrollReveal({ component: serviceRef.current, ...animationSettings })
	}, [animationSettings])

	return (
		<div
			ref={serviceRef}
			className={`mt-5 row col-10 col-sm-12 justify-content-center  ${className}`}
		>
			<div className='info-card col-10 col-md-6'>
				<InfoServiceText
					title={InfoIndextitle}
					description={InfoIndexDescription}
				/>
			</div>
			<div className='image-card col-10 col-md-6'>
				<InfoServiceImage urlImage={urlImage} />
			</div>
		</div>
	)
}
