import './styles.css'
import React from 'react'

export const Container = ({ children, color, styled = '' }) => {
	return (
		<div
			data-testid='Container'
			className={styled}
			style={{ background: color }}
		>
			<div className='Container'>{children}</div>
		</div>
	)
}
