export const projectAttributesMapping = {
  id: 'Project ID',
  date: 'Project Date',
  name: 'Project Name',
    description: 'Project Description',
    link: "Project Link",
    cover: 'Project Cover',
  };
  
  export interface Project {
    id: string,
    date: string,
    name: string,
    description: string,
    link: string,
    cover: string,
  }
  