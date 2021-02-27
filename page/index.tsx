import React from 'react';
import ReactDOM from 'react-dom';
import {Canvas} from 'react-three-fiber'
import './styles.css'
import {unregister} from './utils';
import {Container} from './containers'
import {App} from './App'

ReactDOM.render(
    <Container>
        <Canvas>
            <ambientLight intensity={.3} />
            <pointLight position={[ 100, 100, 100]} intensity={2.5} />
            <pointLight position={[-100,-100, 100]} intensity={5} />
            <React.Suspense fallback={null}>
                <App />
            </React.Suspense>
        </Canvas>
    </Container>,
    document.getElementById('root')
);
unregister();
