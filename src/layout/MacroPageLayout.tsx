import AddMacroForm from "../components/AddMacroForm"
import Macros from "../components/Macros"
import "../scss/layout.scss"

const MacroPageLayout: React.FC = () => {
	return (
		<div>
			<AddMacroForm />
			<Macros />
		</div>
	)
}

export default MacroPageLayout
