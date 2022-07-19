import React, {useState, useEffect, useRef} from "react"
import "../scss/macro.scss"
import {Macro, MacroNoId} from "../types"

interface MacroProps {
	macro: Macro
	updateMacro: (macroId: number, newValues: MacroNoId) => void
	deleteMeal: (macroId: number) => void
}

const newValues: MacroNoId = {
	meal: "testing",
	calories: 999,
	fat: 100,
	carbs: 123,
	protein: 55,
	date: null,
}

type SelectedMacro = {
	id: number
	macro: string
}

const defaultValue: SelectedMacro = {id: 0, macro: ""}

const MacroEntry: React.FC<MacroProps> = ({macro, updateMacro, deleteMeal}) => {
	const box = useRef(null)
	useOutsideAlerter(box)
	const [selected, setSelected] = useState<SelectedMacro>(defaultValue)

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			// Function for click event
			function handleOutsideClick(event: {target: any}) {
				if (
					ref.current &&
					!ref.current.contains(event.target) &&
					selected !== defaultValue
				) {
					console.log("you just clicked outside of box!")
					setSelected(defaultValue)
					console.log("selected:", selected)
				}
			}

			// Adding click event listener
			document.addEventListener("click", handleOutsideClick)
			return () => document.removeEventListener("click", handleOutsideClick)
		}, [ref])
	}

	return (
		<div className="macro-row" ref={box} key={macro.id}>
			<div ref={box}>
				{selected.id === macro.id && selected.macro === "meal" ? (
					<input name="meal" type="text" className="macro-option"></input>
				) : (
					<div
						className="macro-option"
						onClick={() => setSelected({id: macro.id, macro: "meal"})}
					>
						{macro.meal}
					</div>
				)}
			</div>

			<div className="macro-option">{macro.calories}</div>
			<div className="macro-option">{macro.fat}</div>
			<div className="macro-option">{macro.carbs}</div>
			<div className="macro-option">{macro.protein}</div>
			<div className="macro-option">{macro.date}</div>
			<button
				className="macro-button"
				type="button"
				onClick={() => deleteMeal(macro.id)}
			>
				delete
			</button>
			<button
				className="macro-button"
				type="button"
				// onClick={() => updateMacro(macro.id, newValues)}
				onClick={() => setSelected(defaultValue)}
			>
				update
			</button>
		</div>
	)
}

export default MacroEntry
