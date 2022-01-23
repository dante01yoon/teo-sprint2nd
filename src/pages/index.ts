import StackPage from "./company/StackPage";

export type DataGithubItem = {
  id: number;
  name: string;
  star: number;
  github: string;
  tags: string[];
};

export { default } from "./Statistics";

export { StackPage };
