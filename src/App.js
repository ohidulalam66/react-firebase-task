import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Secure/Login/Login";
import Goal from "./Components/Route/Goal/Goal";
import Profile from "./Components/Route/Profile/Profile";
import Activity from "./Components/Route/Activity/Activity";
import SelectCoach from "./Components/Route/SelectCoach/SelectCoach";
import PrivateRoute from "./Components/Secure/PrivateRoute/PrivateRoute";
import AuthProvider from "./Components/Shared/Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Goal />
                </PrivateRoute>
              }
            />
            <Route
              path="/goal"
              element={
                <PrivateRoute>
                  <Goal />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/activity"
              element={
                <PrivateRoute>
                  <Activity />
                </PrivateRoute>
              }
            />
            <Route
              path="/selectCoach"
              element={
                <PrivateRoute>
                  <SelectCoach />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
