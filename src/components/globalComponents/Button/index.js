import './styles.css'
import React from 'react'

export const Button = ({ NameButton, link }) => {
	return (
		<a data-testid='button' href={`#${link}`} className='home_btn'>
			{NameButton}
		</a>
	)
}
