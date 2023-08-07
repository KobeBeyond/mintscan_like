import {matchRoutes} from 'react-router-config'

// https://github.com/jamiebuilds/react-loadable/blob/a64a415d1bff33ca5ef35f2abf616f47085a93a2/src/index.js#L92
// eslint-disable-next-line no-underscore-dangle
const resolve = (obj) => (obj && obj.__esModule ? obj.default : obj)

const fetchDataBeforeRender = async ({
  routes,
  store,
  url,
  query,
  onProgress,
}) => {
  const branch = matchRoutes(routes, url)
  if (onProgress) {
    onProgress({progress: 0})
  }
  const promises = branch.map(async ({route, match}) => {
    let Comp = route.component
    // loadable wrapped
    if (Comp.load) {
      Comp = resolve(await Comp.load())
    }

    return Comp.fetchData
      ? Comp.fetchData(store, match, query)
      : Promise.resolve(null)
  })

  const responses = await Promise.all(promises)
  if (onProgress) {
    onProgress({progress: 100})
  }
  return responses
}

const _ = ''

export default _
export {fetchDataBeforeRender}
