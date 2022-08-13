import { graphql, useStaticQuery } from "gatsby";
import { Key } from "react";

class SectionController {
  section: Section;
  contents: Array<SectionContent>;

  constructor(sectionId: string) {
    const sections = useSectionsQuery();

    this.section = sections.filter((i: any) => {
      return i.id === sectionId;
    })[0];

    if (this.section === undefined) {
      console.error(`No section named ${sectionId}`);
      this.contents = [];
      return;
    }
    this.contents = this.section.content;
  }

  contentFromPart(part: string): string {
    const parentContent = this.contents.filter((i) => {
      return i.part == part
    });

    if (!this.isPartExist(part)) {
      console.error(`No parts called ${part} in section.`);
      return '';
    }
    return parentContent[0].content;
  }

  isPartExist(part: string): boolean {
    const parentContent = this.contents.filter((i) => {
      return i.part == part
    });

    return parentContent.length !== 0;
  }
}


//ASK: Alternatives? Solutions?


//Shouldn't use useSection at the moment.
const useSection = (sectionId: string) => {
  const sections = useSectionsQuery();
  const section = sections.filter((i: any) => {
    return i.id === sectionId;
  })[0];
  const subSection = section.content;

  let content = {};
  subSection.forEach((i: SectionContent) => {
    content[i.part] = i.content;
  });
  return content;
}

export { SectionController, useSection };

export function useSectionsQuery() : Array<Section> {
    const data = useStaticQuery(graphql`
    query sections {
      allDataJson {
        edges {
          node {
            sections {
              id
              label
              content {
                content
                part
              }
            }
          }
        }
      }
    }
    `);
    const sections = data.allDataJson.edges[0].node.sections.map((el: any, i: Number) => {
        return {...el, key: i};
    });  

    return sections;
}

export type SectionContent = {
  part: string,
  content: string
}

export type Section = {
        id: String,
        label: String,
        key: Key,
        content: Array<SectionContent>
}