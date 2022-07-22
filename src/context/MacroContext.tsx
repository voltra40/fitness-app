import React, {createContext, useContext} from "react"
import useMacros from "../hooks/useMacros"
import {Macro, MacroNoId} from "../types"

interface MacroContextInterface {
	macros: Macro[]
	loading: boolean
	error: boolean
	addMeal: (macro: MacroNoId) => void
	deleteMeal: (macro: number) => void
	updateMeal: (macroId: number, newValues: Record<string, unknown>) => void
}
const MacroContext = createContext<MacroContextInterface>(
	{} as MacroContextInterface
)

interface MacroContextProviderProps {
	children: React.ReactNode
}

export const MacroContextProvider: React.FC<MacroContextProviderProps> = ({
	children,
}) => {
	const {macros, loading, error, addMeal, updateMeal, deleteMeal} = useMacros()

	return (
		<MacroContext.Provider
			value={{macros, loading, error, addMeal, deleteMeal, updateMeal}}
		>
			{children}
		</MacroContext.Provider>
	)
}

export const useMacroContext = (): MacroContextInterface =>
	useContext(MacroContext)
