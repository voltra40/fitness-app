import {useEffect} from "react"
import MacroEntry from "./MacroEntry"
import AddMacroForm from "./AddMacroForm"
import "../scss/macro.scss"
import {useMacroContext} from "../context/MacroContext"

const Macros = () => {
	const {macros, loading, error} = useMacroContext()

	useEffect(() => {
		console.log("macros reloaded", macros)
	}, [macros])

	if (loading) return <div> loading </div>
	if (error) return <div> ERROR </div>
	return (
		<div>
			<AddMacroForm />
			{/* <MacroPageLayout macros={macros} /> */}
			{/* sort by date */}
			{macros.map((macro) => (
				<MacroEntry key={macro.id} macro={macro} />
			))}
		</div>
	)
}

export default Macros
