import {MacroContextProvider} from "./context/MacroContext"
import MacroPageLayout from "./layout/MacroPageLayout"

function App() {
	return (
		<MacroContextProvider>
			<MacroPageLayout />
		</MacroContextProvider>
	)
}

export default App
