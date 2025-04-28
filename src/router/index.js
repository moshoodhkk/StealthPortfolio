import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ProjectSection from '../components/ProjectSection.vue'
import MyExperience from '../components/MyExperience.vue'
import ReviewPage from '../components/ReviewPage.vue'
import FooterSection from '../components/FooterSection.vue'
import ContactUs from '../components/ContactUs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/AboutPage',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/ProjectSection',
        name: 'ProjectSection',
        component: ProjectSection
    },
    {
        path: '/MyExperience',
        name: 'MyExperience',
        component: MyExperience
    },
    {
        path: '/ReviewPage',
        name: 'ReviewPage',
        component: ReviewPage
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/FooterSection',
        name: 'FooterSection',
        component: FooterSection
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to) {
    //     if (to.hash) {
    //         return {
    //             el: to.hash,
    //             behavior: 'smooth'
    //         }
    //     }
    //     return { top: 0, behavior: 'smooth' }
    // }
})

export default router 