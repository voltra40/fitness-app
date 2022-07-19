export interface Macro {
	id: number
	meal: string
	calories: number
	fat: number
	carbs: number
	protein: number
	date: any
}

export interface MacroNoId {
	meal: string
	calories: number
	fat: number
	carbs: number
	protein: number
	date: string | null
}
