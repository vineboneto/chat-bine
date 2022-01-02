import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/home'
import Chat from './pages/chat/chat'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
