import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Backdrop from "./components/backdrop/Backdrop";

function App({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {
        showSidebar && (
          <>
            <Backdrop onClick={() => setShowSidebar(true)} />
            <Sidebar setShowSidebar={setShowSidebar} />
          </>
        )
      }
      <main className="content">
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </>
  );
}

export default App;
