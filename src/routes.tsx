import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from '@/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/chat" element={<Pages.Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
