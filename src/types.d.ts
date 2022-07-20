export interface Macro {
	id: number
	meal: string
	calories: number
	fat: number
	carbs: number
	protein: number
	date: string
}

export interface MacroNoId {
	meal: string
	calories: number
	fat: number
	carbs: number
	protein: number
	date?: string
}
