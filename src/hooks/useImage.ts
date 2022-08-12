import { graphql, useStaticQuery } from "gatsby"


//ASK: What would be a better solution.
export function useImageUrl(relative: String) : string {
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
          const image = images.filter((i: any) => relative === i.relativePath)[0];
          if (!image) {
            console.error(`The image ${relative} cannot be found.`)
            return '';
          }
        return image.publicURL;
}
