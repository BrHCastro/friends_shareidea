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
          <GitHubBar />
          <Home />
        </>
      ) : (
        <LoginBox />
      )}

      <Toaster
        position="top-center"
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
