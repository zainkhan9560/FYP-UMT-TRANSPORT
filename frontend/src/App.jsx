import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

<<<<<<< HEAD
import Landing from './pages/Landing.jsx'
=======
<<<<<<< HEAD
=======
import Landing from './pages/Landing.jsx'
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
=======
>>>>>>> origin/dev/zain
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
<<<<<<< HEAD
=======
>>>>>>> 489011d (landing page added to the project)
>>>>>>> origin/dev/zain
      </Routes>
    </BrowserRouter>
  )
}
