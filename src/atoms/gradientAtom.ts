import { useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import React from 'react'

type GradientTheme = {
  id: string
  name: string
  tailwindCSS: string
}

export const GRADIENTS: GradientTheme[] = [
  {
    id: 'orange',
    name: 'Sunset Red',
    tailwindCSS: `saturate-125 from-pink-400 via-amber-500 to-red-400`,
  },
  {
    id: 'green',
    name: 'Tropical',
    tailwindCSS: `saturate-125 from-teal-500 via-amber-400 to-emerald-500`,
  },
  {
    id: 'purple',
    name: 'Sublime',
    tailwindCSS: `saturate-125 from-indigo-500 via-purple-500 to-violet-500`,
  },
  {
    id: 'blue',
    name: 'Ocean',
    tailwindCSS: `saturate-110 from-blue-400 via-cyan-400 to-sky-500`,
  },
]

export const gradientAtom = atomWithStorage<GradientTheme>(
  'gradient',
  GRADIENTS[0]
)

export function useGradientCSS() {
  const gradient = useAtomValue(gradientAtom)
  return `${gradient.tailwindCSS}`
}
