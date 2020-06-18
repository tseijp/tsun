<h1 align="center">react-three-book</h1>
<p  align="center">3d <b>book</b> Model</p>
<p align="center">
  <a href="https://github.com/tseijp/react-three-book"><img src="https://img.shields.io/badge/build-passing-green.svg"/></a>
  <a href="https://github.com/tseijp/react-three-book"><img src="https://img.shields.io/badge/license-MIT-green.svg"/></a>
  <a href="https://www.npmjs.com/package/@tsei/react-three-book"><img src="https://img.shields.io/badge/npm_package-1.0.0-green.svg"/></a>
</p>
<p align="center"><a href="https://tsei.jp/react-three-book/basic" target="_blank"><img width="700" src="" alt="page"></a>
<hr>

# Table of Contents
- [Demo](#Demo)  
- [Version](#version)  
- [react-three-book Usage](#react-three-book-usage)
- [Quick Started](#quick-started)  
- [Install via npm](#install-via-npm)  

# Demo
- [react-three-book Demo](https://tsei.jp/react-three-book)

# Version
- React 16.12.0
- MDB React 4.26.0
- React Markdown ^4.3.1

# react-three-book Usage
```js
import {Book, BookRoot, useBook} from 'react-three-book';
const App =()=> {
    const src = useBook('https://...')
    return (
        <BookRoot src={src}>
          <Canvas>
            <Book src={src}/>
          </Canvas>
        </BookRoot>
    )
}
```

# Quick Started
- `git clone https://github.com/tseijp/react-three-book`
- `npm i -D`
- `npm start`
- open browser and visit [http://localhost:3000](http://localhost:3000)
- Now you can go to our [demo](https://tsei.jp/book), and try its usage.

# Install via npm
- create your project - `create-react-app myproject`
- `cd myproject`
- `npm install react-three-book --save`
