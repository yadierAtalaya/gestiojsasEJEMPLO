import { FooterContact } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('render component', () => {
	const Component = render(<FooterContact />)

	expect(Component.container.firstChild).toHaveClass('footerContact')
})
