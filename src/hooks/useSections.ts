import { graphql, useStaticQuery } from "gatsby";


export function useSections() {
    const data = useStaticQuery(graphql`
    query sections {
        dataJson {
          sections {
            id
            label
          }
        }
      }
    `);
    const sections = data.dataJson.sections.map((el: any, i: Number) => {
        return {...el, key: i};
    });

    return sections;
}

export type Section = {
        id: String,
        label: String,
        key: Number,
        content: Object
}