import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GoPanda from './pages/GoPanda'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/gopanda" element={<GoPanda />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
