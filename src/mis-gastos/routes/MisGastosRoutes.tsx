import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'

export const MisGastosRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="mis-gastos" element={ <Dashboard /> } />

            <Route path="/*" element={ <Navigate to="/mis-gastos" /> } />
        </Routes>
    </>
  )
}
