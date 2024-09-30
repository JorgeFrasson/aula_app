export const ROOT_PATHS = {
    AUTH: "/auth",
    DASHBOARD: "/dashboard",
    ROOT: "/"
};


export const PATHS = {
    auth: {
        root: `${ROOT_PATHS.AUTH}`,
        login: `${ROOT_PATHS.AUTH}/login`,
        register: `${ROOT_PATHS.AUTH}/register`,
    },
    dashboard: {
        root: ROOT_PATHS.DASHBOARD,
        users: {
            root: `${ROOT_PATHS.DASHBOARD}/users`,
            list: `${ROOT_PATHS.DASHBOARD}/users/list`,
            create: `${ROOT_PATHS.DASHBOARD}/users/create`,
            update: `${ROOT_PATHS.DASHBOARD}/users/update`,
            edit: `${ROOT_PATHS.DASHBOARD}/users/edit/:id`,
        },
        sales: {
            root: `${ROOT_PATHS.DASHBOARD}/sales`
        }
    }
};