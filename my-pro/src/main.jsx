import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/authContext.jsx'
import TaskContext from './context/taskContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <TaskContext>
    <App />
    </TaskContext>
    </AuthContext>
    
   
  </StrictMode>,
)
