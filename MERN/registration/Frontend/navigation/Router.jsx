import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Registration from '../pages/registeration/Registration'
import TableData from '../pages/table-data/TableData'

function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Registration/> }/>
            <Route path='/tableData' element={ <TableData/> }/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router