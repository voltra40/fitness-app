import {useEffect} from "react"
import MacroEntry from "./MacroEntry"
import useMacros from "../hooks/useMacros"
import AddMacroForm from "./AddMacroForm"
import "../scss/macro.scss"

const Macros = () => {
	const {macros, loading, error, addMeal, updateMeal, deleteMeal} = useMacros()

	useEffect(() => {
		console.log("macros", macros)
	}, [macros])

	if (loading) return <div> loading </div>
	if (error) return <div> ERROR </div>
	return (
		<div>
			<AddMacroForm addMeal={addMeal} />
			{/* <MacroPageLayout macros={macros} /> */}
			{/* sort by date */}
			{macros?.map((macro) => (
				<MacroEntry
					key={macro.id}
					macro={macro}
					updateMeal={updateMeal}
					deleteMeal={deleteMeal}
				/>
			))}
		</div>
	)
}

export default Macros
