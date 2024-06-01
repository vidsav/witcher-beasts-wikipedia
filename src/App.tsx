import './App.css'
import BeastList from "./components/BeastList.tsx";
import BeastDetails from "./components/BeastDetails.tsx";
import {useState} from "react";
import beastData from "./beast-data.ts";
import SearchInput from "./components/SearchInput.tsx";

function App() {
  const [list, setList] = useState(beastData)

  return (
    <>
      <SearchInput />
      <BeastList list={list} />
      <BeastDetails />
    </>
  )
}

export default App
