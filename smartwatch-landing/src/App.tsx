import { Suspense, lazy } from "react";
import Home from "./pages/Home";

const Chatbot = lazy(() => import("./components/chatbot/Chatbot"));

function App() {
  return (
    <>
      <Home />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </>
  );
}

export default App;