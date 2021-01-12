import React from 'react';
import ReactDOM from 'react-dom';
import {unregister} from './utils';
import {HelmetProvider} from 'react-helmet-async';
// import {ControlsProvider} from 'react-three-gui';
// import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './styles.css'

const App = (
    <HelmetProvider>

    </HelmetProvider>
)
ReactDOM.render( App , document.getElementById('root'));
unregister();

// const App = (
//     <HelmetProvider>
//         <ControlsProvider>
//             <BrowserRouter>
//                 <Switch>
//                     <Route    path="/"     component={Home} exact/>
//                     <Route    path='/none' component={None}/>
//                     <Redirect to={window.location.host.match("localhost")?'/none':'/home'}/>
//                 </Switch>
//             </BrowserRouter>
//         </ControlsProvider>
//     </HelmetProvider>
// )
