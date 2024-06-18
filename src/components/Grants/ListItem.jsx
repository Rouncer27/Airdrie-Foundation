import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ListItem = ({ grant }) => {
  const [active, setActive] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const header = useRef(null);
  const accordionBody = useRef(null);
  useEffect(() => {
    const t = gsap
      .to(accordionBody.current, {
        height: "auto",
        ease: "power1.inOut",
      })
      .reverse();

    header.current.addEventListener("click", () => {
      t.reversed(!t.reversed());
    });
  }, []);

  useEffect(() => {
    setDisableBtn(true);
    setTimeout(() => {
      setDisableBtn(false);
    }, 1000);
  }, [active]);

  return (
    <div
      className={`grants-list-item${active ? " grants-list-item-active" : ""}`}
    >
      <div className="grants-list-item-year">
        <div className="grants-list-item-year-title">
          <button
            disabled={disableBtn}
            ref={header}
            onClick={() => {
              setActive(!active);
            }}
          >
            <span>{grant.year}</span>
            <span>{active ? <>&mdash;</> : <>&#43;</>}</span>
          </button>
        </div>
        <div ref={accordionBody} className="grants-list-item-year-content">
          <div className="grants-list-item-year-content-inner">
            <div dangerouslySetInnerHTML={{ __html: grant.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
