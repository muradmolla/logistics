import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

interface Section {
    id: String,
    label: String
}

export default function Navigation() {
    const data = useStaticQuery(graphql`
    query navigation {
        dataJson {
          sections {
            id
            label
          }
        }
      }
    `);
    const sections = data.dataJson.sections;
    
    const navRender = sections.map((section: Section) => {
        return (section.label)
    })
  return (
    <div className='font-bold'>{navRender}</div>
  )
}