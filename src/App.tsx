import {MacroContextProvider} from "./context/MacroContext"
import Macros from "./components/Macros"

function App() {
	return (
		<MacroContextProvider>
			<Macros />
		</MacroContextProvider>
	)
}

export default App
