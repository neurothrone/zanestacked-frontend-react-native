import Skill from "./Skill";

interface Project {
  id: number;
  name: string;
  description: string;
  gitHubUrl: string;
  demoUrl?: string;
  featuredImage: string;
  createdDate: string;
  skills: Skill[];
}

export default Project;
