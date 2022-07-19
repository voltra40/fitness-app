import React, {useEffect, useState} from "react"
import axios, {AxiosError} from "axios"
import "../scss/macro.scss"
import {Macro, MacroNoId} from "../types"
import {Constants} from "../constants"
import MacroEntry from "./MacroEntry"

const Macros = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [macros, setMacros] = useState<Macro[] | null>(null)

	useEffect(() => {
		getMacros()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		setLoading(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [macros])

	const getMacros = () => {
		axios.get(Constants.API_ENDPOINT).then((res) => {
			setMacros(res.data)
			console.log("macros:", macros)
		})
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

	const updateMacro = (macroId: number, newValues: MacroNoId) => {
		// check if values are the same
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

	if (loading) return <div> loading </div>
	return (
		<div>
			{macros?.map((macro) => (
				<MacroEntry
					key={macro.id}
					macro={macro}
					updateMacro={updateMacro}
					deleteMeal={deleteMeal}
				/>
			))}
		</div>
	)
}

export default Macros
