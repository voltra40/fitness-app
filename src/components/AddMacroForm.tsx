import React, {useState} from "react"
import {MacroNoId} from "../types"
import "../scss/macro.scss"
import {useMacroContext} from "../context/MacroContext"

interface AddMacroFormProps {
	addMeal: (macroNoId: MacroNoId) => void
}

const emptyMeal: MacroNoId = {
	meal: "",
	calories: 0,
	fat: 0,
	carbs: 0,
	protein: 0,
	date: undefined,
}

const AddMacroForm = () => {
	const {addMeal} = useMacroContext()
	const [meal, setMeal] = useState<MacroNoId>(emptyMeal)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addMeal(meal)
	}

	const handleDateOnChange = (date: string) => {
		if (date === "") {
			setMeal(Object.assign(meal, {date: undefined}))
		} else {
			setMeal(Object.assign(meal, {date: date}))
		}
	}

	return (
		<div>
			<form id="macro_input_form" onSubmit={(e) => handleSubmit(e)}>
				<label className="macro-input-container">
					Meal
					<input
						name="meal"
						type="text"
						onChange={(e) =>
							setMeal(Object.assign(meal, {meal: e.target.value}))
						}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Calories
					<input
						name="calories"
						type="number"
						step="any"
						min="0"
						onChange={(e) =>
							setMeal(Object.assign(meal, {calories: e.target.valueAsNumber}))
						}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Fat
					<input
						name="fat"
						type="number"
						step="any"
						min="0"
						onChange={(e) =>
							setMeal(Object.assign(meal, {fat: e.target.valueAsNumber}))
						}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Carbs
					<input
						name="carbs"
						type="number"
						step="any"
						min="0"
						onChange={(e) =>
							setMeal(Object.assign(meal, {carbs: e.target.valueAsNumber}))
						}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Protein
					<input
						name="protein"
						type="number"
						step="any"
						min="0"
						onChange={(e) =>
							setMeal(Object.assign(meal, {protein: e.target.valueAsNumber}))
						}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Date
					<input
						name="date"
						type="text"
						onChange={(e) => handleDateOnChange(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<button type="submit">Add meal</button>
			</form>
		</div>
	)
}

export default AddMacroForm
