export interface INavigationBase {
    avatar?: Element;
    title: string;
    path?: string;
    icon?: string;
    active?: boolean;
}

export interface INavigation {
    onSwitch?: () => void;
    expand?: boolean;
    width?: number;
    avatar?: JSX.Element;
    groups: INavigationGroup[];
    path?: INavigationLink;
}

export interface INavigationGroup extends INavigationBase {
    items?: INavigationItem[];
}

export interface INavigationItem extends INavigationBase {
    onClick?: (path: INavigationLink) => void;
    sections?: INavigationSection[];
}

export interface INavigationSection extends INavigationBase {
    badges?: string;
}

export interface INavigationLink {
    group: string;
    item?: string;
    section?: string;
}