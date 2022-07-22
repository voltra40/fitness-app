import MacroEntry from "./MacroEntry"
import {useMacroContext} from "../context/MacroContext"
import {today, yesterday} from "../utils/helpers"
import "../scss/macro.scss"
import {useEffect, useState} from "react"
import {Macro} from "../types"

const Macros = () => {
	const {macros, loading, error} = useMacroContext()
	const [todayMacros, setTodayMacros] = useState<Macro[]>([])
	const [yesterdayMacros, setYesterdayMacros] = useState<Macro[]>([])
	const [restMacros, setRestMacros] = useState<Macro[]>([])

	useEffect(() => {
		organizeData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [macros])

	const organizeData = () => {
		setTodayMacros(macros.filter((macro) => macro.date === today))
		setYesterdayMacros(macros.filter((macro) => macro.date === yesterday))
		setRestMacros(
			macros.filter((macro) => macro.date !== today && macro.date !== yesterday)
		)
	}

	if (loading) return <div> loading </div>
	if (error) return <div> ERROR </div>
	return (
		<div>
			<div className="macro-page-layout">
				<h1>Macros</h1>

				<div className="highlight-container">
					<div className="today-yesterday-container">
						<h1>Today</h1>
						{todayMacros.map((macro) => (
							<MacroEntry key={macro.id} macro={macro} />
						))}
					</div>
					<div className="today-yesterday-container">
						<h1>Yeterday</h1>
						{yesterdayMacros.map((macro) => (
							<MacroEntry key={macro.id} macro={macro} />
						))}
					</div>
				</div>

				<div className="more-container">
					{restMacros.map((macro) => (
						<MacroEntry key={macro.id} macro={macro} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Macros
