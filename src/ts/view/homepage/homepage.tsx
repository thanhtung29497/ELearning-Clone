import React = require("react");
import { Categories, Category } from "./Category";
import { Introduction, CoverPanel } from "./CoverPanel";
import { HeaderPanel } from "./HeaderPanel";
import { WhySelectItem, WhySelectPanel } from "./WhySelectPanel";
import { FeedbackPanel } from "./FeedbackPanel";
import { config } from "../../config/homepage";
import { NavigationBar, NavigationItem, NavigationRightSection } from "../components/navigation";
import { Logo } from "../components/logo/Logo";
import { SearchBar } from "../components/search/SearchBar";
import { MenuButton } from "../components/button/MenuButton";
import { MenuItem } from "../components/menu/Menu";

export default class HomePage extends React.Component<{}, {}> {

    render() {
        return <div>
            <HeaderPanel scrollTopToChange={0}>
                <Logo />
                <MenuButton >
                    <MenuItem title={config.menu.home} />
                    <MenuItem title={config.menu.courses} />
                    <MenuItem title={config.menu.purchase} />
                    <MenuItem title={config.menu.feedback} />
                </MenuButton>
                <NavigationRightSection>
                    <SearchBar />
                    <NavigationBar>
                        <NavigationItem title={config.menu.home} />
                        <NavigationItem title={config.menu.courses} path="/courses" />
                        <NavigationItem title={config.menu.purchase} />
                        <NavigationItem title={config.menu.feedback} />
                    </NavigationBar>
                </NavigationRightSection>
            </HeaderPanel>
            <div className="main">
                <CoverPanel >
                    <Introduction text={config.introduction.large} smallText={config.introduction.small}>
                        <Categories>
                            {config.categories.map(category => <Category key={category} name={category} />)}
                        </Categories>
                    </Introduction>
                </CoverPanel>
                <WhySelectPanel>
                    {config.features.map(feature => {
                        return <WhySelectItem {...feature} key={feature.title} />
                    })}
                </WhySelectPanel>
                <FeedbackPanel {...config.testimonials} />
            </div>

        </div >

    }
}