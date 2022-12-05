import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { H1, ImageMonoSubtitle } from '../components/Text'

type Assets = {
  allContentfulAsset: {
    nodes: [
      {
        id: string
        file: {
          url: string
          fileName: string
          contentType: string
        }
        url: string
        title: string
        size: number
      }
    ]
  }
}

export default function ProjectsPage() {
  const { allContentfulAsset } = useStaticQuery<Assets>(graphql`
    {
      allContentfulAsset(sort: { order: DESC, fields: updatedAt }) {
        nodes {
          id
          file {
            url
            fileName
            contentType
          }
          url
          size
          title
        }
      }
    }
  `)

  return (
    <PageContainer>
      <H1>Artsy.</H1>
      <div className='grid grid-rows-4 gap-4 w-full'>
        {allContentfulAsset.nodes.map((node) => {
          return (
            <div
              key={node.id}
              className='rounded-xl overflow-clip col-span-2 row-span-2 object-scale-down w-full relative group transition-all duration-200 ease-in-out'
            >
              <img src={node.url} alt={node.title} />
              <div
                className={`absolute opacity-0 group-hover:opacity-40 transition-all duration-200 ease-in-out h-20 left-0 bottom-0 w-full bg-gradient-to-t from-black to-transparent`}
              />
              <div className='absolute left-8 bottom-8 group-hover:opacity-100 opacity-0 transition-all duration-200'>
                <ImageMonoSubtitle>{node.title}</ImageMonoSubtitle>
              </div>
            </div>
          )
        })}
      </div>
    </PageContainer>
  )
}
