import { Input } from './index'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Input />', () => {
  const props = {
    placeholder: 'Ingresa tú correo',
    type: 'email',
    require: true
  }

  let component
  const mockHandle = jest.fn()

  beforeEach(() => {
    component = render(
      <Input
        type={props.type}
        placeholder={props.placeholder}
        require={props.require}
        handleChange={mockHandle}
      />
    )
  })

  test('its rendering and has correctly propertys', () => {
    const input = component.getByPlaceholderText(props.placeholder)

    expect(input).toHaveAttribute('type')
    expect(input).toHaveAttribute('required')
  })

  test('its executing onchange function', () => {
    const input = component.getByPlaceholderText(props.placeholder)

    fireEvent.change(input, { target: { value: 'juan' } })
    fireEvent.change(input, { target: { value: 'pedro' } })
    fireEvent.change(input, { target: { value: 'alex' } })
    
    expect(mockHandle.mock.calls).toHaveLength(3)
    expect(input).toHaveValue('alex')
  })
})
