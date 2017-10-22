export interface INavigationBase {
    avatar?: Element;
    title: string;
    link?: string;
    icon?: string;
}

export interface INavigation {
    onSwitch?: () => void;
    expand?: boolean;
    width?: number;
    avatar?: JSX.Element;
    groups: INavigationGroup[];
}

export interface INavigationGroup extends INavigationBase {
    items?: INavigationItem[];
}

export interface INavigationItem extends INavigationBase {
    sections?: INavigationSection[];
}

export interface INavigationSection extends INavigationBase {
    badget?: string;
}