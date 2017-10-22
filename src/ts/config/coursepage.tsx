// import { INavigation } from "../view/components/navigation";
import { Logo } from "../view/components/logo/Logo";
import React = require("react");

export const configs = {
    sidebar: {
        expand: true,
        avatar: <Logo className="dark" />,
        width: 320,
        groups: [{
            icon: "home",
            title: "Home",
            link: "/",
        }, {
            title: "Courses",
            icon: "list",
            link: "./courses",
            items: [{
                title: "Foreign Language",
                icon: "language",
                sections: [{
                    title: "French",
                    icon: "book",
                }, {
                    title: "English",
                    icon: "etsy",
                }]
            }, {
                title: "Information & Technology",
                icon: "laptop",
            }, {
                title: "Electronics & Telecomunications",
                icon: "microchip",
            }]
        }, {
            title: "Purchase",
            icon: "shopping-cart",
        }],
    },
    categories: [{
        title: "Foreign Language",
        icon: "language",
    }, {
        title: "Information & Technology",
        icon: "laptop",
    }, {
        title: "Electronics & Telecomunications",
        icon: "microchip",
    }]
}