import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Secure/Login/Login'
import Goal from './Components/Route/Goal/Goal'
import Profile from './Components/Route/Profile/Profile'
import Activity from './Components/Route/Activity/Activity'
import SelectCoach from './Components/Route/SelectCoach/SelectCoach'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/selectCoach" element={<SelectCoach />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
