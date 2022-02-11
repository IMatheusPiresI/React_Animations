import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Background from "../layout/Background/Background";
import Experience from "../layout/Experience/Experience";
import Text from "../layout/Text/Text";
import Transform from "../layout/Transform/Transform";
import Home from "../layout/Home/Home";
import Moving from "../layout/Moving/Moving";
import TypeWriter from "../layout/Typewriter/Typewriter";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path ='/' element={ <Home /> } />
                <Route path ='/experience' element={<Experience />} />
                <Route path ='/background' element = {<Background />}/>
                <Route path ='/text' element = {<Text />}/>
                <Route path ='/transform' element = {<Transform />}/>
                <Route path ='/moving' element = {<Moving />} />
                <Route path ='/typewriter' element = {<TypeWriter />} />
            </Routes>
        </BrowserRouter>
            
        
    )
}

export default Router;