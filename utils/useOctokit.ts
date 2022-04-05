import { Octokit, App } from "octokit";
import { useEffect, useRef } from "react";

export const useOctokit = () => {
  const octokitRef = useRef<Octokit>();
  useEffect(() => {
    const octokit = new Octokit({ auth: `personal-access-token123` });
    octokit.rest.users.getAuthenticated();
    octokitRef.current = octokit;
  }, []);
  return octokitRef.current;
};
