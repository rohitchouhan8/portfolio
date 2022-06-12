import React, {
	PropsWithChildren,
	createContext,
	useEffect,
	useReducer,
} from "react"

type Theme = "light" | "dark"
type ThemeActionType = "SET_LIGHT" | "SET_DARK" | "TOGGLE"

export const ThemeContext = createContext<{
	state: Theme
	dispatch: React.Dispatch<{
		type: ThemeActionType
	}>
}>({ state: "light", dispatch: () => {} })

const themeReducer = (state: Theme, action: { type: ThemeActionType }) => {
	switch (action.type) {
		case "SET_LIGHT":
			return "light"
		case "SET_DARK":
			return "dark"
		case "TOGGLE":
			return state === "light" ? "dark" : "light"
		default:
			return state
	}
}

export function ThemeProvider(props: PropsWithChildren<{}>) {
	const [state, dispatch] = useReducer(themeReducer, "light")
	useEffect(() => {
		if (state === "dark") {
			document.documentElement.classList.add("dark")
			document.documentElement.classList.remove("light")
		} else {
			document.documentElement.classList.add("light")
			document.documentElement.classList.remove("dark")
		}
	}, [state])

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	)
}
