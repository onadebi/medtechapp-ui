const appRoutes = () => {
    return {
        home:{
            home:'/',
            notFound: "/home/not-found",
            register: '/register',
            login: '/login'
        },
        dashboard:{
            dashboard: '/dashboard',
            profile:'/dashboard/profile',
            usergroup:{
                usergroups: '/dashboard/usergroups',
            }
            ,country:{
                country: '/dashboard/country'
            }
        }
    }
}

export default appRoutes;