import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InfoServiceImage } from './index'

describe('Que tengan las classes a indicar', () => {
	let component

	beforeEach(() => {
		component = render(<InfoServiceImage />)
	})

	test('See if the image has the alt', () => {
		const img = component.container.querySelector('img')
		expect(img).toHaveAttribute('alt')
	})
})
