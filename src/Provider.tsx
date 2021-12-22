import { App } from "./App";
import { GitHubUserContextProvider } from "./providers/GitHubProvider";

export function Providers() {
  return (
    <>
      <GitHubUserContextProvider>
        <App />
      </GitHubUserContextProvider>
    </>
  );
}
