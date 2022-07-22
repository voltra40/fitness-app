import {useEffect, useState} from "react"
import axios, {AxiosError} from "axios"
import {Constants} from "../constants"
import {Macro, MacroNoId} from "../types"

const useMacros = () => {
	const [macros, setMacros] = useState<Macro[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)

	useEffect(() => {
		getMacros()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getMacros = () => {
		axios
			.get(Constants.API_ENDPOINT)
			.then((res) => {
				setMacros(res.data)
				setLoading(false)
			})
			.catch((err: AxiosError) => {
				console.log(err)
				setError(true)
			})
	}

	const addMeal = (macro: MacroNoId) => {
		if (macro.meal !== "") {
			axios
				.post(Constants.API_ENDPOINT, macro)
				.then(() => {
					getMacros()
				})
				.catch((err: AxiosError) => {
					console.log(err)
				})
		}
	}

	const deleteMeal = (macroId: number) => {
		axios
			.delete(Constants.API_ENDPOINT, {params: {id: macroId}})
			.then(() => {
				getMacros()
			})
			.catch((err: AxiosError) => {
				console.log(err)
			})
	}

	const updateMeal = (macroId: number, newValues: Record<string, unknown>) => {
		// check if values are the same
		if (Object.keys(newValues).length !== 0) {
			axios
				.put(Constants.API_ENDPOINT + "?id=" + macroId, newValues, {
					headers: {"Content-Type": "application/json"},
				})
				.then(() => {
					getMacros()
				})
				.catch((err: AxiosError) => {
					console.log(err)
				})
		}
	}

	return {
		macros,
		loading,
		setLoading,
		error,
		setError,
		addMeal,
		deleteMeal,
		updateMeal,
	}
}

export default useMacros
