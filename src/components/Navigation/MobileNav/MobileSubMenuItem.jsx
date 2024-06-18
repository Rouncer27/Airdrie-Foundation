import "./mobileSubMenuItem.scss";

const MobileSubMenuItem = ({ items, pathname }) => {
  return (
    <>
      {items.map((item, index) => {
        const currentItem = pathname === item.uri;
        return (
          <li key={index}>
            <a
              className={`${currentItem ? "sub-menu-item-current" : ""}`}
              href={item.uri}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default MobileSubMenuItem;
