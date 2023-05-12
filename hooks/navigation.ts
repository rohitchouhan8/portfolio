import React from "react"
import { useRouter, usePathname } from "next/navigation"

export enum Page {
  HOME = "home",
  PROJECTS = "projects",
  READING = "reading",
  WRITING = "writing",
  ARTSY = "artsy",
}

export function useCurrentPathname() {
  const pathname = usePathname()

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
