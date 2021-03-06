import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Registration from '@/components/Registration/Registration.vue';
import RegistrationSuccess from '@/components/Registration/Success.vue';
import ResetPassword from '@/components/profile/ProfileResetPassword.vue';
import Activate from '@/components/profile/ProfileActivate.vue';
import ActivateByPhone from '@/components/profile/ProfileActivateByPhone.vue';
import Profile from '@/components/Profile.vue';
import NotFound from '@/components/NotFound.vue';
import PaySuccess from '@/components/Pay/Success.vue';
import PayFail from '@/components/Pay/Fail.vue';
import OdrPlus from '@/components/OdrPlus.vue';
import Feedback from '@/components/Feedback.vue';
import Theory from '@/components/Theory.vue';
import NewsView from '@/components/News/View.vue';
import NewsShow from '@/components/News/Show.vue';
import LessonView from '@/components/Lesson/View.vue';
import LessonShow from '@/components/Lesson/Show.vue';

import AuthGuard from '@/router/guard';
import ChangeEmailGuard from '@/router/changeEmailGuard';
import store from '@/store/index';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'notFound',
            component: NotFound,
            template: null,
            meta: {
                access: {
                    guest: true,
                    auth: true
                },
                title: 'Not found title',
                description: 'Not found description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/theory',
            name: 'theory',
            component: Theory,
            meta: {
                title: 'Theory title',
                name: 'Theory',
                description: 'Theory description',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                icon: 'mdi-book-open',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/news',
            name: 'newsView',
            component: NewsView,
            meta: {
                title: 'News',
                name: 'News',
                description: 'News',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                icon: 'mdi-book-open',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/lessons',
            name: 'lessonView',
            component: LessonView,
            meta: {
                title: 'Lessons',
                name: 'Lessons',
                description: 'Lessons',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                icon: 'mdi-book-close',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/lessons/:lessonId',
            name: 'lessonShow',
            component: LessonShow,
            meta: {
                title: 'Lessons',
                name: 'Lessons',
                description: 'Lessons',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                icon: 'mdi-book-close',
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/odrplus',
            name: 'odrplus',
            component: OdrPlus,
            meta: {
                title: 'Odrplus title',
                name: 'Odrplus',
                description: 'Odrplus description',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                icon: 'mdi-auto-fix',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home title',
                name: 'Home',
                description: 'Home description',
                localized: true,
                access: {
                    guest: true,
                    auth: true
                },
                showIfAuth: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/login',
            name: 'login',
            component: Login,
            meta: {
                access: {
                    guest: true,
                    auth: false
                },
                title: 'Login title',
                name: 'Login',
                description: 'Login description',
                icon: 'mdi-login-variant',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/registration',
            name: 'registration',
            component: Registration,
            meta: {
                access: {
                    guest: true,
                    auth: false
                },
                title: 'Registration title',
                name: 'Registration',
                description: 'Registration description',
                icon: 'mdi-account-plus',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/registration/success',
            name: 'registrationSuccess',
            component: RegistrationSuccess,
            meta: {
                access: {
                    guest: true,
                    auth: false,
                    roles: [
                        ''
                    ]
                },
                name: 'Registration success pay',
                title: 'Registration success pay title',
                description: 'Registration success pay description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/profile',
            name: 'profile',
            component: Profile,
            beforeEnter: AuthGuard,
            meta: {
                access: {
                    guest: false,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Profile',
                title: 'Profile',
                icon: 'mdi-contacts',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/new/email/:token',
            name: 'changeEmail',
            component: null,
            beforeEnter: ChangeEmailGuard,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Change email',
                title: 'Change email title',
                description: 'Change email description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/activate/:token',
            name: 'emailActivation',
            component: Activate,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Email activation',
                title: 'Email activation title',
                description: 'Email activation description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/activate-by-phone-code',
            name: 'activationByPhone',
            component: ActivateByPhone,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Email activation',
                title: 'Email activation title',
                description: 'Email activation description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/new/password',
            name: 'resetPassword',
            component: ResetPassword,
            meta: {
                access: {
                    guest: true,
                    auth: false,
                    roles: [
                        ''
                    ]
                },
                name: 'Reset password',
                title: 'Reset password title',
                description: 'Reset password description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/pay/success',
            name: 'paySuccess',
            component: PaySuccess,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Success pay',
                title: 'Success pay title',
                description: 'Success pay description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/pay/fail',
            name: 'payFail',
            component: PayFail,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Filed pay',
                title: 'Filed pay title',
                description: 'Filed pay description',
                icon: null,
                available: false,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/feedback',
            name: 'feedback',
            component: Feedback,
            meta: {
                access: {
                    guest: true,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Feedback',
                title: 'Feedback title',
                description: 'Feedback description',
                icon: 'mdi-email-outline',
                available: true,
                externalUrl: null
            }
        },
        {
            path: '/:lang?/logout',
            name: 'logout',
            component: null,
            beforeEnter: function(to, from, next) {
                store.dispatch('User/logout').then(() => {
                    next('/' + store.getters.currentLanguage.urlPrefix);
                }).catch(() => {
                    store.dispatch('User/checkProfile')
                });
            },
            meta: {
                access: {
                    guest: false,
                    auth: true,
                    roles: [
                        ''
                    ]
                },
                name: 'Logout',
                title: 'Logout title',
                description: 'Logout description',
                icon: 'mdi-exit-to-app',
                available: true,
                externalUrl: null
            }
        }
    ]
})
