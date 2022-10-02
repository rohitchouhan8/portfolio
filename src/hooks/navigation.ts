import React from "react"

export enum Page {
	HOME = "home",
	PROJECTS = "projects",
	READING = "reading",
	WRITING = "writing",
}

export function useCurrentPathname() {
	const [pathname, setPathname] = React.useState<string | null>(null)

	React.useEffect(() => {
		const pathname = window.location.pathname
		setPathname(pathname)
	}, [window.location])

	return { pathname, page: parsePath(pathname) }
}

function parsePath(pathname: string | null): Page | undefined {
	if (!pathname) {
		return
	}
	const path = pathname.split("/").filter((s) => !!s)[0]

	if (path === "projects") {
		return Page.PROJECTS
	} else if (path === "reading") {
		return Page.READING
	} else if (path === "writing") {
		return Page.WRITING
	} else {
		return Page.HOME
	}
}
