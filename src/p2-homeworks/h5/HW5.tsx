import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}
            test deploy
            <HashRouter>
                <Header/>

                <Pages/>
            </HashRouter>
            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
