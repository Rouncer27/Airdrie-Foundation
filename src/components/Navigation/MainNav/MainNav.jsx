import MainNavItem from "./MainNavItem.jsx";
import "./mainNav.scss";

const MainNav = (props) => {
  return (
    <div className="main-nav">
      <nav className="main-nav-top">
        <ul className="main-nav-top-list">
          {props.menuItems.map((item, index) => {
            if (!item.parentId) {
              const currentPage = props.pathname === item.uri;
              return (
                <MainNavItem
                  currentPage={currentPage}
                  pathname={props.pathname}
                  item={item}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
          <li className="main-nav-top-list-item main-nav-top-list-item-cta-one">
            <a href="/donate/donate-now/">Donate Now</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
