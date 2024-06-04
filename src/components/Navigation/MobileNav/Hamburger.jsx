import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hamburger.scss";
// Menu Components. //
import MenuItem from "./MenuItem";
// Animations. //
import { staggerReveal } from "./animations/animations";

const Hamburger = ({ state, mainMenu, mainLogo }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenuBackgroundTwo = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackgroundTwo, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([revealMenuBackground, revealMenuBackgroundTwo, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenuBackgroundTwo, revealMenu);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div
        ref={(el) => (revealMenuBackgroundTwo = el)}
        className="menu-secondary-background-color-two"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="wrapper">
          <div className="menu-logo">
            <img
              src={mainLogo.mainLogo.sourceUrl}
              alt={mainLogo.mainLogo.altTex}
            />
          </div>
          <div className="menu-links">
            <nav>
              <ul>
                {mainMenu.menuItems.nodes.map((item, index) => {
                  if (item.parentId) {
                    return null;
                  }
                  return (
                    <MenuItem
                      key={index}
                      href={item.uri}
                      title={item.label}
                      subMenu={item.childItems.nodes}
                    />
                  );
                })}
                <div className="menu-links-item">
                  <li className="menu-links-item-list">
                    <a className="menu-links-item-link" href="#">
                      Donate Now
                    </a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
