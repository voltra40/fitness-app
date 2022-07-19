import axios, {AxiosError} from "axios"
import React, {createContext, useContext, useState} from "react"
import {Constants} from "../constants"

interface MacroContextInterface {
	loading: boolean
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
	const [loading, setLoading] = useState<boolean>(true)

	// const deleteMacro = (macroId: number) => {
	// 	axios
	// 		.delete(Constants.API_ENDPOINT, {params: {id: macroId}})
	// 		.then(() => {
	// 			getMacros()
	// 		})
	// 		.catch((err: AxiosError) => {
	// 			console.log(err)
	// 		})
	// }

	return (
		<MacroContext.Provider value={{loading}}>{children}</MacroContext.Provider>
	)
}

export const useMacroContext = (): MacroContextInterface =>
	useContext(MacroContext)
