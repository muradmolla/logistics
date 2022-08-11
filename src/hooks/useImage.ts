import { graphql, useStaticQuery } from "gatsby"


export const useImageUrl = (relative: String) => {
        const images = useStaticQuery(graphql`
        query images {
            allFile(filter: {sourceInstanceName: {eq: "images"}}) {
              nodes {
                publicURL
                relativePath
              }
            }
          }
        `).allFile.nodes;

        return images.filter((i: any) => relative === i.relativePath)[0].publicURL;
}