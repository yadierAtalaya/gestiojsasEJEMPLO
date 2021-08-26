import './styles.css'
import React from 'react'
import { Button } from 'components/globalComponents/Button/index'

export const CardInfo = ({ title, description, link, urlImg }) => {
	return (
		<div className='mt-3'>
			<div className='card Card text-center'>
				<div className='IconContainer justify-content-center'>
					<div className='Icon circle-main'>
						<div className='circle-second'>
							<img src={urlImg} alt='' />
						</div>
					</div>
				</div>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{description} </p>
					<div className='d-flex justify-content-center'>
						<Button link={link} NameButton={'saber mas'} />
					</div>
				</div>
			</div>
		</div>
	)
}
