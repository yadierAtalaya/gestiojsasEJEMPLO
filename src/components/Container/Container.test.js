import React from 'react'
import { Container } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('render component', () => {
	const Component = render(<Container />)
	Component.getByTestId('Container')
})

test('render Container component', () => {
	const props = {
		children: 'texto de prueba',
		styled: 'estilo de prueba',
		color: 'white'
	}

	const Component = render(
		<Container
			children={props.children}
			styled={props.styled}
			color={props.color}
		/>
	)

	const component = Component.getByTestId('Container')

	Component.getByText(props.children)
	expect(component).toHaveStyle(`background: ${props.color}`)
	expect(component).toHaveClass(props.styled)
})
