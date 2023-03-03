import "./App.css";
import Routes from "./Routes";
import { UserProvider } from "./context/UserContext";

// TODO: Dari reository react berikut, jelaskan alur program mulai dari root function App hingga selesai
function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
