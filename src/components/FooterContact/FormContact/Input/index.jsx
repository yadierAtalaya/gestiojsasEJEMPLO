import './styles.css'

export const Input = ({ type, placeholder, require, handleChange }) => {
  return (
    <input
      onChange={(evt) => handleChange(evt)}
      type={type}
      required={require}
      placeholder={placeholder}
    />
  )
}
