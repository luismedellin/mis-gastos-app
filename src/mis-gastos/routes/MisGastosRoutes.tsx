import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage, SummaryPage } from '..'

export const MisGastosRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/resumen" element={ <SummaryPage /> } />
            <Route path="/dashboard" element={ <DashboardPage /> } />

            <Route path="/*" element={ <Navigate to="/mis-gastos/dashboard" /> } />
        </Routes>
    </>
  )
}
