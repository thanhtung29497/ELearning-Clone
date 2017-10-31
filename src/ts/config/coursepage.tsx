import { common } from "./common";
import { Logo } from "../view/components/logo/Logo";
import React = require("react");

export const configs = {
    sidebar: {
        expand: true,
        avatar: <Logo className="dark" />,
        width: 320,
        groups: common.navigations,
    },
    categories: common.categories
}