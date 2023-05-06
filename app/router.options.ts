import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'index',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('~/pages/about.vue').then(r => r.default || r)
        },
        {
            name: 'contact',
            path: '/contact',
            component: () => import('~/pages/contact.vue').then(r => r.default || r)
        },
        {
            name: 'projects',
            path: '/projects',
            component: () => import('~/pages/projects/index.vue').then(r => r.default || r)
        },
        {
            name: 'projects-id',
            path: '/projects/:id',
            component: () => import('~/pages/projects/[id].vue').then(r => r.default || r)
        }
    ],
}