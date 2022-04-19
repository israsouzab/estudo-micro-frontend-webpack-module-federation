import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import Footer from 'home/Footer'
const Header = lazy(() => import('home/Header'))

import "./index.scss"

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <div className='my-10'>Product Page Content</div>
    <Footer />
  </div>
)
ReactDOM.render(<App />, document.getElementById("app"))
