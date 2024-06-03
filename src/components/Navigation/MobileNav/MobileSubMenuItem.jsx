const MobileSubMenuItem = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <a href={""}>{item.label}</a>
          </li>
        );
      })}
    </>
  );
};

export default MobileSubMenuItem;
