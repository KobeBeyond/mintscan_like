import NProgress from 'nprogress'
import qs from 'query-string'
import React, {useEffect, useState, useRef} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {fetchDataBeforeRender} from '../../../utils/fetchDataBeforeRender'
// import Content from '../Content'
import 'nprogress/nprogress.css'
import './index.css'
const PendingNavDataLoader = ({location, routes, store, children}) => {
  const [previousLocation, setPreviousLocation] = useState(null)
  const locationRef = useRef(location)
  useEffect(() => {
    const navigate = locationRef.current !== location
    if (navigate) {
      setPreviousLocation(locationRef.current)
      fetchDataBeforeRender({
        store,
        routes,
        query: qs.parse(location.search),
        url: location.pathname,
        onProgress: ({progress}) => {
          NProgress.set(progress)
        },
      }).then(() => {
        setPreviousLocation(null)
      })
    }
  }, [location, routes, store])
  return (
    <Route
      location={previousLocation || location}
      // location 发生变化时，强制 children 刷新
      render={children}
    />
  )
}

export default withRouter(PendingNavDataLoader)
