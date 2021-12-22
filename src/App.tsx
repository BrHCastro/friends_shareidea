import { GitHubBar } from "./components/GitHubBar";
import { Header } from "./components/Header";
import { useGitHub } from "./hooks/gitHubHook";

import { Toaster } from "react-hot-toast";

import { LoginBox } from "./pages/LoginBox";
import { Home } from "./pages/Home";

export function App() {
  const { gitHubState } = useGitHub();

  return (
    <>
      {gitHubState.hasGitHubUser && gitHubState.wasFound ? (
        <>
          <Header />
          <GitHubBar data={gitHubState} />
          <Home />
        </>
      ) : (
        <LoginBox />
      )}

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "Lato",
          },
        }}
        containerStyle={{
          top: 70,
        }}
      />
    </>
  );
}
