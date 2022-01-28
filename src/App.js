import "./App.css";
import Header from "./components/header/Header";
import Repositories from "./components/repositories/Repositories";
import User from "./components/user/User";

function App() {
  return (
    <main className="app">
      <Header />
      <User />
      <Repositories />
    </main>
  );
}

export default App;
