import React, {useEffect, useState} from "react"
import axios from "axios"

type Meal = {
	id: number
	meal: string
	calories: number
	fat: number
	carbs: number
	protein: number
	date: any
}

const Macros = () => {
	const [loading, setLoading] = useState(true)
	const [macros, setMacros] = useState<Meal[] | null>(null)
	const API_ENDPOINT = "http://localhost:8080/macro"

	useEffect(() => {
		getMacros(API_ENDPOINT)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getMacros = (url: string) => {
		axios.get(url).then((res) => {
			setMacros(res.data)
			setLoading(false)
			console.log("macros:", macros)
		})
	}

	if (loading) return <div> loading </div>
	return (
		<div>
			{macros?.map((macro, index) => (
				<div key={index}> {macro.meal} </div>
			))}
		</div>
	)
}

export default Macros
