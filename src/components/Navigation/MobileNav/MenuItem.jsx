import { useState, useEffect, useRef } from "react";
import "./menuItem.scss";
import "./mobileSubMenu.scss";
import MobileSubMenuItem from "./MobileSubMenuItem";
import gsap from "gsap";

const MenuItem = ({ href, title, subMenu, pathname }) => {
  const subMenuWrap = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (subMenuWrap.current) {
      const thisHeight = subMenuWrap.current.scrollHeight + 40;

      if (isOpen) {
        gsap.to(subMenuWrap.current, {
          duration: 1,
          opacity: 1,
          height: thisHeight,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(subMenuWrap.current, {
          duration: 0.5,
          opacity: 0,
          height: "0",
          ease: "power3.inOut",
        });
      }
    }
  }, [isOpen]);

  const handleSubMenu = () => {
    disableMenu();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const currentPage = pathname === href;

  return (
    <div className="menu-links-item">
      <li className="menu-links-item-list">
        <a
          className={`menu-links-item-link${currentPage ? " menu-links-item-link-current" : ""}`}
          href={href}
        >
          {title}
        </a>
        {subMenu.length > 0 ? (
          <>
            <button
              type="button"
              onClick={handleSubMenu}
              className="sub-menu-open-btn"
              disabled={disabled}
            >
              &#43;
            </button>
            <ul ref={subMenuWrap} className={`mobile-sub-menu`}>
              <MobileSubMenuItem items={subMenu} pathname={pathname} />
            </ul>
          </>
        ) : null}
      </li>
    </div>
  );
};

export default MenuItem;
