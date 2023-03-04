import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { HomePage, InquisitionPage, MardukPages, RecordPage, SearchPage } from "../pages"

export const RecordsRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="inquisition" element={<InquisitionPage/>}/>
            <Route path="marduk" element={<MardukPages/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="record/:recordId" element={<RecordPage/>}/>
            <Route path="homepage" element={<HomePage/>}/>
            <Route path="/" element={<Navigate to="/homepage"/>}/>
        </Routes>
      </div>
    </>
  )
}

