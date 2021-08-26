import './style.css'
import React from 'react'

export const InfoServiceImage = ({ urlImage }) => {
	return (
		<div className='image'>
			<img className='img-card' src={urlImage} alt={'aun no'} />
		</div>
	)
}
