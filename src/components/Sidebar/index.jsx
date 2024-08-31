import { Left, Right, SidebarContainer } from "./style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Left>
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
        <div className="c4"></div>
        <div className="c5"></div>
        <div className="c6"></div>
      </Left>
      <Right>
        <div className="c6"></div>
        <div className="c5"></div>
        <div className="c4"></div>
        <div className="c3"></div>
        <div className="c2"></div>
        <div className="c1"></div>
      </Right>
    </SidebarContainer>
  );
};

export default Sidebar;
