import axios, {AxiosError} from "axios"
import React, {useEffect, useState} from "react"
import "../scss/macro.scss"
import {Constants} from "../constants"

const AddMacroForm = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [meal, setMeal] = useState<string>("")
	const [calories, setCalories] = useState<string>("")
	const [fat, setFat] = useState<string>("")
	const [carbs, setCarbs] = useState<string>("")
	const [protein, setProtein] = useState<string>("")
	const [date, setDate] = useState<string>("")

	useEffect(() => {})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addMeal()
		console.log("submit")
	}

	const addMeal = () => {
		if (meal !== "") {
			axios
				.post(Constants.API_ENDPOINT, {
					meal: meal,
					calories: calories,
					fat: fat,
					carbs: carbs,
					protein: protein,
				})
				.then(() => {
					window.location.reload()
				})
				.catch((err: AxiosError) => {
					console.log(err)
				})
		}
	}

	return (
		<div>
			<form className="" onSubmit={(e) => handleSubmit(e)}>
				<label className="macro-input-container">
					Meal
					<input
						name="meal"
						type="text"
						onChange={(e) => setMeal(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Calories
					<input
						name="calories"
						type="text"
						onChange={(e) => setCalories(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Fat
					<input
						name="fat"
						type="text"
						onChange={(e) => setFat(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Carbs
					<input
						name="carbs"
						type="text"
						onChange={(e) => setCarbs(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Protein
					<input
						name="protein"
						type="text"
						onChange={(e) => setProtein(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<label className="macro-input-container">
					Date
					<input
						name="date"
						type="text"
						onChange={(e) => setDate(e.target.value)}
						className="macro-input"
					></input>
				</label>
				<button type="submit">Add meal</button>
			</form>
		</div>
	)
}

export default AddMacroForm
