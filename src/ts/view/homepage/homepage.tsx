import React = require("react");
import { NavigationBar, NavigationItem, NavigationRightSection } from "../components/navigation";
import { Categories, Category } from "./Category";
import { Misson, CoverPanel } from "./CoverPanel";
import { Logo } from "../components/logo/Logo";
import { SearchBar } from "../components/search/SearchBar";
import { WhySelectItem, WhySelectPanel } from "./WhySelectPanel";
import { FeedbackPanel } from "./FeedbackPanel";

export default class HomePage extends React.Component<{}, {}> {
    render() {
        return <div>
            <NavigationBar className="header dark">
                <Logo />
                <NavigationRightSection>
                    <SearchBar />
                    <NavigationItem title="Home" active={true} />
                    <NavigationItem title="Courses" />
                    <NavigationItem title="Purchase" />
                    <NavigationItem title="Feedback" />
                </NavigationRightSection>
            </NavigationBar>
            <div className="main">
                <CoverPanel >
                    <Misson text="Change the way you learn." smallText="Easier. More effective. More Interactive." />
                    <Categories>
                        <Category name="Foreign Language" />
                        <Category name="Information & Technology" />
                        <Category name="Electronics & Telecommunications" />
                    </Categories>
                </CoverPanel>
                <NavigationBar className="center underlined">
                    <NavigationItem title="Hot courses" active={true} />
                    <NavigationItem title="New courses" />
                    <NavigationItem title="Free courses" />
                </NavigationBar>
                <WhySelectPanel title="Tại sao nên chọn chúng tôi">
                    <WhySelectItem image="resources/images/homepage/effectiveness.png"
                        title="Tính hiệu quả"
                        description="Cá nhân hóa nội dung và kết quả theo trình độ và kết quả người dùng" />
                    <WhySelectItem image="resources/images/homepage/quality.png"
                        title="Chất lượng"
                        description="Giảng viên là các chuyên gia giàu kinh nghiệm, vững vàng về chuyên môn" />
                    <WhySelectItem image="resources/images/homepage/convenience.png"
                        title="Tính tiện lợi"
                        description="Học mọi lúc mọi nơi trên Web và trên di động (Android, iOs)" />
                    <WhySelectItem image="resources/images/homepage/interactiveness.png"
                        title="Tính tương tác"
                        description="Trò chuyện, trao đổi trực tuyến giữa các học viên và với giảng viên" />
                </WhySelectPanel>
                <FeedbackPanel />
            </div>

        </div >

    }
}