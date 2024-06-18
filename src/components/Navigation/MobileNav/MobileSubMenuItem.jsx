import "./mobileSubMenuItem.scss";

const MobileSubMenuItem = ({ items, pathname }) => {
  return (
    <>
      {items.map((item, index) => {
        console.log("SUB", pathname);
        console.log("item", item);
        const currentItem = pathname === item.uri;
        console.log("currentItem", currentItem);
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
