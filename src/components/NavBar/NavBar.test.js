import React from 'react'
import { NavBar } from './index'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Navbar test', () => {
	let Component

	beforeEach(() => {
		Component = render(
			<Router>
				<NavBar />
			</Router>
		)
	})

	test('render component', () => {
		Component.getByText('Logo')
	})

	test('handle click', () => {
		const handleMock = jest.fn()
		const li = Component.getByText('Logo')

		li.onclick = handleMock
		fireEvent.click(li)

		expect(handleMock.mock.calls).toHaveLength(1)
	})
})
