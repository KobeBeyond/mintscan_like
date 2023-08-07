import loadable from '@loadable/component'
const routes = [
    {
        path: '/',
        exact: true,
        component: loadable(() => import('../pages/Home'))
    },
    {
        path: '/home',
        exact: true,
        component: loadable(() => import('../pages/Home'))
    },
    // {
    //     path: '/explorer',
    //     exact: true,
    //     component: loadable(() => import('../pages/Explore/Cosmos')),
    //     // routes: [
            
    //     // ]
    // },
    {
        path: '/explorer/cosmos',
        exact: false,
        component: loadable(() => import(/* webpackChunkName: 'cosmos' */ '../pages/Explore/Cosmos'))
    },
    {
        path: '/explorer/osmosis',
        exact: false,
        component: loadable(() => import(/* webpackChunkName: 'osmosis' */ '../pages/Explore/Osmosis'))
    },
    // {
    //     path: '/chains',
    //     exact: false,
    //     component: loadable(() => import('../pages/Chains/Overview')),
    //     // routes: [
            
    //     // ]
    // },
    {
        path: '/chains/overview',
        exact: false,
        component: loadable(() => import(/* webpackChunkName: 'overview' */ '../pages/Chains/Overview'))
    },
    {
        path: '/chains/ibc-network',
        exact: false,
        component: loadable(() => import(/* webpackChunkName: 'ibc-network' */ '../pages/Chains/IBCNetwork'))
    },
    {
        path: '/chains/dominance',
        exact: false,
        component: loadable(() => import(/* webpackChunkName: 'dominance' */ '../pages/Chains/Dominance'))
    },
    {
        path: 'not-found',
        component: loadable(() => import(/* webpackChunkName: 'not-found' */ '../pages/NotFound'))
    },
    {
        path: '',
        component: loadable(() => import(/* webpackChunkName: 'not-found' */ '../pages/NotFound'))
    },
]
const getRoutes = () => routes
export default getRoutes