import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},

    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
		{
			path: '/',
			component: () => import('@/layouts/Default.vue'),
			children: [

                {
					path: '/',
					name: 'home',
					component: () => import('@/views/HomeView.vue'),
                    meta: { isAuth: false }
				},

                {
					path: 'signup',
					name: 'signup',
					component: () => import('@/views/auth/Signup.vue'),
                    meta: { isAuth: false }
				},

                {
					path: 'login',
					name: 'login',
					component: () => import('@/views/auth/Login.vue'),
                    meta: { isAuth: false }
				},

            ]
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    next()
})

export default router
