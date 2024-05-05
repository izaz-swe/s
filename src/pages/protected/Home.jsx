import React from 'react'
import routes from '../../routes/buyerRoute'
import ErrorPage from '../ErrorPage'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Routes>
          {
            routes.map((route, key) => {
              return (
                <Route key={key}
                  exact={true}
                  path={`${route.path}`}
                  element={<route.component/>}
                />
              )
            })
          }
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default Home