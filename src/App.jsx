import { Container } from "react-bootstrap";
import "./App.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Wallpaper from "./Components/Wallpaper/Wallpaper";
import Weather from "./Components/Weather/Weather";

function App() {

  return (
    <Container className="mt-5">
      <Wallpaper />
      <SearchBar />
      <Weather />
    </Container>
  )
}

export default App
