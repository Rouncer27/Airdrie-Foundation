import { useState } from "react";

const MainNavItem = ({ item, currentPage, pathname }) => {
  const [isSubActive, setIsSubActive] = useState(false);

  const handleIsActiveOn = () => {
    setIsSubActive(true);
  };

  const handleIsActiveOff = () => {
    setIsSubActive(false);
  };

  return (
    <li
      className={`main-nav-top-list-item`}
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
      onFocus={handleIsActiveOn}
    >
      <a className={`${currentPage ? "main-nav-current" : ""}`} href={item.uri}>
        {item.label}
      </a>
      {item.childItems.nodes.length > 0 ? (
        <ul
          className={`main-nav-sub-menu${isSubActive ? " main-nav-sub-menu-active" : ""}`}
        >
          {item.childItems.nodes.map((subItem, subIndex) => {
            const currentSubPage = pathname === subItem.uri;
            return (
              <li key={subIndex}>
                <a
                  className={`${currentSubPage ? " main-nav-sub-current" : ""}`}
                  href={subItem.uri}
                >
                  {subItem.label}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default MainNavItem;
