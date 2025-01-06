import Form from "./components/Form"
import UsersDisplay from "./components/UsersDisplay";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/userdisplay" element={<UsersDisplay />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
