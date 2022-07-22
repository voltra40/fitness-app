import React, {useState} from "react"
import {Macro} from "../types"
import "../scss/macro.scss"
import {useMacroContext} from "../context/MacroContext"

interface MacroProps {
	macro: Macro
}

type SelectedMacro = {
	id: number
	macro: string
}

const MacroEntry: React.FC<MacroProps> = ({macro}) => {
	const [selected, setSelected] = useState<SelectedMacro | null>(null)
	const [updateMacroPair, setUpdateMacroPair] = useState<{}>({})

	const {updateMeal, deleteMeal} = useMacroContext()

	return (
		<div className="macro-row" key={macro.id}>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "meal" ? (
					<div className="edit-input-container">
						<input
							name="meal"
							type="text"
							className="edit-input"
							placeholder={macro.meal}
							onChange={(e) => setUpdateMacroPair({meal: e.target.value})}
						></input>
					</div>
				) : (
					<div
						className="macro-meal"
						onClick={() => setSelected({id: macro.id, macro: "meal"})}
					>
						{macro.meal}
					</div>
				)}
			</div>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "calories" ? (
					<div className="edit-input-container">
						<input
							name="calories"
							type="number"
							className="edit-input"
							placeholder={macro.calories.toString()}
							onChange={(e) =>
								setUpdateMacroPair({
									meal: macro.meal,
									calories: e.target.valueAsNumber,
								})
							}
						></input>
					</div>
				) : (
					<div onClick={() => setSelected({id: macro.id, macro: "calories"})}>
						{macro.calories}
					</div>
				)}
			</div>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "fat" ? (
					<div className="edit-input-container">
						<input
							name="fat"
							type="number"
							className="edit-input"
							placeholder={macro.fat.toString()}
							onChange={(e) =>
								setUpdateMacroPair({
									meal: macro.meal,
									fat: e.target.valueAsNumber,
								})
							}
						></input>
					</div>
				) : (
					<div onClick={() => setSelected({id: macro.id, macro: "fat"})}>
						{macro.fat}
					</div>
				)}
			</div>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "carbs" ? (
					<div className="edit-input-container">
						<input
							name="carbs"
							type="number"
							className="edit-input"
							placeholder={macro.carbs.toString()}
							onChange={(e) =>
								setUpdateMacroPair({
									meal: macro.meal,
									carbs: e.target.valueAsNumber,
								})
							}
						></input>
					</div>
				) : (
					<div onClick={() => setSelected({id: macro.id, macro: "carbs"})}>
						{macro.carbs}
					</div>
				)}
			</div>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "protein" ? (
					<div className="edit-input-container">
						<input
							name="protein"
							type="number"
							className="edit-input"
							placeholder={macro.protein.toString()}
							onChange={(e) =>
								setUpdateMacroPair({
									meal: macro.meal,
									protein: e.target.valueAsNumber,
								})
							}
						></input>
					</div>
				) : (
					<div onClick={() => setSelected({id: macro.id, macro: "protein"})}>
						{macro.protein}
					</div>
				)}
			</div>
			<div className="macro-option">
				{selected?.id === macro.id && selected?.macro === "date" ? (
					<div className="edit-input-container">
						<input
							name="date"
							type="text"
							className="edit-input"
							placeholder={macro.date}
							onChange={(e) =>
								setUpdateMacroPair({
									meal: macro.meal,
									date: e.target.value,
								})
							}
						></input>
					</div>
				) : (
					<div onClick={() => setSelected({id: macro.id, macro: "date"})}>
						{macro.date}
					</div>
				)}
			</div>

			{selected == null ? (
				<button
					className="macro-button"
					type="button"
					onClick={() => deleteMeal(macro.id)}
				>
					delete
				</button>
			) : (
				<button
					className="macro-button"
					type="button"
					onClick={() => {
						updateMeal(macro.id, updateMacroPair)
						setSelected(null)
					}}
				>
					update
				</button>
			)}
		</div>
	)
}

export default MacroEntry
