import { GitHubBar } from "./components/GitHubBar";
import { Header } from "./components/Header";
import { LoginBox } from "./components/LoginBox";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Header />
      <GitHubBar />
      <Home />
    </>
  );
}
