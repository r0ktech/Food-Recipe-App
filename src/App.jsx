import Search from "./Search";
import { useState } from "react";
import FoodList from "./FoodList";
import Nav from "./Nav";
import "./App.css";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import FoodDetails from "./FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
