import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { ControllerPage } from '../../pages'

export function Router() {
    return (
        <Routes>
            <Route path='/remote-controller' element={<ControllerPage/>}/>
        </Routes>
    )
}