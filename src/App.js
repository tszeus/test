import Container from "./components/container/Container";
import Sidebar from "./components/sidebar/SideBar";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
