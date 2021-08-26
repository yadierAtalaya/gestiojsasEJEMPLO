import React, { createContext, useState } from 'react'

export const ContextGlobal = createContext()

const themeOptions = {
	dark: {
		name: 'dark',
		bg: '#000',
		color: '#fff'
	},
	light: {
		name: 'light',
		bg: '#fff',
		color: '#000'
	}
}

const Context = ({ children }) => {
	const [themeColor, setThemeColor] = useState(themeOptions.light)

	const handleThemeColor = (newTheme) => {
		setThemeColor(themeOptions[newTheme])
	}

	return (
		<ContextGlobal.Provider value={{ themeColor, handleThemeColor }}>
			{children}
		</ContextGlobal.Provider>
	)
}

export default Context
