import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'

export default function AdminRoute({ component: Component, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo && userInfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Navigate to='/signin' />
        )
      }
    ></Route>
  )
}
