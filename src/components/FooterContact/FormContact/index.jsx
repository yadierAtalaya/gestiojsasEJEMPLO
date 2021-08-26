import './styles.css'
import { Input } from './Input/'
import { useState } from 'react'

const handleInput = (target, setValue) => {
    setValue(target.value)
  }

const handleSubmit = (evt, value) => {
  evt.preventDefault()

  if (value !== null) {
    evt.target.reset()
    console.log('Datos enviados correctamente')
  } else {
    console.error('el correo ingresado no es correcto')
  }
}

export const FormContact = () => {
  const [value, setValue] = useState(null)

    return(
      <section className="form" onSubmit={(evt)=> handleSubmit(evt, value)}>
        <h2>Escribe tú correo, dejanos el resto a nosotros</h2>
        <p>te brindamos asesorías para una mejor elección</p>
      <form>
          <Input
            type='email'
            handleChange={(evt) => handleInput(evt.target, setValue)}
            placeholder='Ingresa tú correo'
            require={true}
          />
          <button>Enviar</button>
        </form>
      </section>
    )
}
