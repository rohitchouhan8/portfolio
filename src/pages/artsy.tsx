import { H1, H2, ImageMonoSubtitle } from "../components/Text"
import { graphql, useStaticQuery } from "gatsby"

import { FiExternalLink } from "react-icons/fi"
import PageContainer from "../components/PageContainer"
import React from "react"

type Piece = {
	url: string
	title: string
	id: string
	image: {
		url: string
		width: number
		height: number
	}
}
type Assets = {
	allContentfulArtsyCollection: {
		nodes: [
			{
				id: string
				isAiGenerated: boolean
				priority: number
				title: string
				pieces: Piece[]
			}
		]
	}
}

export default function ProjectsPage() {
	const { allContentfulArtsyCollection } = useStaticQuery<Assets>(graphql`
		{
			allContentfulArtsyCollection(
				sort: { fields: priority, order: ASC }
			) {
				nodes {
					id
					isAiGenerated
					priority
					title
					pieces {
						url
						title
						id
						image {
							url
							width
							height
						}
					}
				}
			}
		}
	`)

	return (
		<PageContainer>
			<H1>Artsy.</H1>
			<div className='flex flex-col gap-16'>
				{allContentfulArtsyCollection.nodes.map((node) => {
					return (
						<div key={node.id} className='flex flex-col gap-2'>
							<div className='flex flex-row gap-2 items-center'>
								<H2>{node.title}</H2>
								<span className='text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded-sm'>
									{node.isAiGenerated
										? "Generated with AI"
										: "Human made"}
								</span>
							</div>
							<div className='grid grid-cols-4 gap-4'>
								{node.pieces.map((piece) => {
									return <PieceCard piece={piece} />
								})}
							</div>
						</div>
					)
				})}
			</div>
		</PageContainer>
	)
}

function PieceCard({ piece }: { piece: Piece }) {
	const containerClassName =
		"rounded-xl overflow-clip col-span-2 row-span-2 object-scale-down w-full relative group transition-all duration-200 ease-in-out"
	const content = (
		<>
			<img className='' src={piece.image.url} alt={piece.title} />
			<div
				className={`absolute opacity-0 group-hover:opacity-40 transition-all duration-200 ease-in-out h-20 left-0 bottom-0 w-full bg-gradient-to-t from-black to-transparent`}
			/>
			<div className='absolute left-8 bottom-8 group-hover:opacity-100 opacity-0 transition-all duration-200'>
				<ImageMonoSubtitle>{piece.title}</ImageMonoSubtitle>
			</div>
		</>
	)
	if (!piece.url) {
		return (
			<div key={piece.id} className={containerClassName}>
				{content}
			</div>
		)
	}
	return (
		<a
			key={piece.id}
			className={containerClassName}
			href={piece.url}
			target='_blank'
			rel='noreferrer'
		>
			<div className='absolute right-4 top-4 group-hover:opacity-100 opacity-0 transition-all duration-200'>
				<FiExternalLink className='stroke-gray-50' />
			</div>
			{content}
		</a>
	)
}
