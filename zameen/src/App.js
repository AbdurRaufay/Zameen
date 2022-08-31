import React from "react";
import Selection from "./Components/Selection";
import TopBar from "./Components/TopBar/TopBar";
import More from "./Components/moresec/More";
import data from "./Components/moresec/data.json"
import Discover from "./Components/Discover/Discover";
import Social from "./Components/Social/Social";

const App = ()=>{
    return (
        <>
            <TopBar/>
            <Selection/>
            <More data={data}/>
            <Discover/>
            <Social/>
        </>
    )
}

export default App