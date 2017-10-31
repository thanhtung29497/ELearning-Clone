export const common = {
    categories: [{
        path: "/111111",
        title: "Foreign Language",
        icon: "language"
    }, {
        path: "/111222",
        title: "Informations Technology",
        icon: "laptop",
    }, {
        path: "/222222",
        title: "Electronics & Telecomunications",
        icon: "microchip",
    }],
    navigations: [{
        title: "Home",
        icon: "home",
        path: "/",
        items: [],
    }, {
        title: "Courses",
        icon: "list",
        path: "/courses",
        items: [],
    }, {
        title: "Purchases",
        icon: "shopping-cart",
        path: "/",
        items: [],
    }, {
        title: "Feedback",
        path: "/",
        icon: "comment-o",
        items: [],
    }]
}

common.navigations[1].items = common.categories as never[];