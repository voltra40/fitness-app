import React from "react"
import {MacroContextProvider} from "./context/MacroContext"
import AddMacroForm from "./components/AddMacroForm"
import Macros from "./components/Macros"

function App() {
	return (
		<MacroContextProvider>
			<AddMacroForm />
			<Macros />
		</MacroContextProvider>
	)
}

export default App
