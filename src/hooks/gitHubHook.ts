import { useContext } from "react";

import { GitHubUserContext } from "../providers/GitHubProvider";

export const useGitHub = () => {
  const { gitHubState, getGitHubUser } = useContext<any>(GitHubUserContext);
  return { gitHubState, getGitHubUser };
};
