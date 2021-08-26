import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InfoServiceCard } from './index'

describe('Que tengan las classes a indicar', () => {
	let component
	const props = {
		InfoIndextitle: 'Asesoria y administracion contable y tributaria',
		InfoIndexDescription: 'De acuerdo con la normativa',
		className: 'flex-reverse'
	}

	const { InfoIndextitle, InfoIndexDescription, className } = props

	beforeEach(() => {
		component = render(
			<InfoServiceCard
				InfoIndextitle={InfoIndextitle}
				InfoIndexDescription={InfoIndexDescription}
				className={className}
			>
				<div></div>
			</InfoServiceCard>
		)
	})

	test('render component InfoServiceCard', () => {
		component.getByText(props.InfoIndextitle)
	})
})
