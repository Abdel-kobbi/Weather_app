import { Container } from "react-bootstrap";
import "./App.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Wallpaper from "./Components/Wallpaper/Wallpaper";
import Weather from "./Components/Weather/Weather";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {

  return (
    <Provider store={store}>
      <Container className="mt-4">
        <Wallpaper />
        <SearchBar />
        <Weather />
      </Container>
    </Provider>
  )
}

export default App
