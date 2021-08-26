import React from 'react'
import { Home } from './index'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

test('render component', () => {
	const Component = render(<Home />)
	Component.getByText('Contactanos')
	Component.getByText('¡Somos el aliado estrategico que su empresa necesita!')
})

test('handle click', () => {
	const mockHandle = jest.fn()
	const Component = render(<Home />)

	const button = Component.getByText('Contactanos')

	button.onclick = mockHandle
	fireEvent.click(button)

	expect(mockHandle.mock.calls).toHaveLength(1)
})
