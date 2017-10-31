import React = require("react");
import { Categories, Category } from "./Category";
import { Introduction, CoverPanel } from "./CoverPanel";
import { HeaderPanel } from "../components/header/HeaderPanel";
import { WhySelectItem, WhySelectPanel } from "./WhySelectPanel";
import { FeedbackPanel } from "./FeedbackPanel";
import { config } from "../../config/homepage";
import { NavigationBar, NavigationItem, NavigationRightSection } from "../components/navigation";
import { Logo } from "../components/logo/Logo";
import { SearchBar } from "../components/search/SearchBar";
import { MenuButton } from "../components/button/MenuButton";
import { MenuItem } from "../components/menu/Menu";
import { CoursePanel } from "./CoursePanel";
import { courses } from "../../data/course";

export default class HomePage extends React.Component<{}, {}> {

    render() {
        return <div className="home-page">
            <HeaderPanel height={100} scrollTopToChange={0}>
                <Logo />
                <MenuButton >
                    {config.menu.map(item => <MenuItem key={item.title} {...item} />)}
                </MenuButton>
                <NavigationRightSection>
                    <SearchBar />
                    <NavigationBar>
                        {config.menu.map(item => <NavigationItem key={item.title} {...item} />)}
                    </NavigationBar>
                </NavigationRightSection>
            </HeaderPanel>
            <div className="main">
                <CoverPanel >
                    <Introduction text={config.introduction.large} smallText={config.introduction.small}>
                        <Categories>
                            {config.categories.map(category => <Category key={category.path} {...category} />)}
                        </Categories>
                    </Introduction>
                </CoverPanel>
                <WhySelectPanel>
                    {config.features.map(feature => {
                        return <WhySelectItem {...feature} key={feature.title} />
                    })}
                </WhySelectPanel>
                <CoursePanel courses={courses} title="Popular courses" />
                <CoursePanel courses={courses} title="New courses" />
                <CoursePanel courses={courses} title="Free courses" />
                <FeedbackPanel {...config.testimonials} />
            </div>

        </div >

    }
}