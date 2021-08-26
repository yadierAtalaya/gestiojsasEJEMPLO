import React from 'react'

export const InfoServiceText = ({ title, description }) => {
	return (
		<div className='infoCard-card'>
			<h2>{title}</h2>
			<p className='justify'>{description}</p>
		</div>
	)
}
