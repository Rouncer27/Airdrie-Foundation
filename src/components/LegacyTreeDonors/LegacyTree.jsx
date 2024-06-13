import { useState, useEffect } from "react";
import gsap from "gsap";
import "./legacyTree.scss";

const LegacyTree = ({ data }) => {
  const [activeMember, setActiveMember] = useState(null);
  const [activeMembeEle, setActiveMembeEle] = useState(null);

  const handleActivateMember = (mem) => {
    setActiveMember(mem);
    const activeMemberSelected = document.querySelector(
      `.legacy-tree-donors-content-${mem}`,
    );
    setActiveMembeEle(activeMemberSelected);
    activeMemberSelected.classList.add("active");
  };

  const handleCloseMember = (mem) => {
    setActiveMember(null);
    activeMembeEle.classList.remove("active");
  };

  useEffect(() => {
    console.log("RUN EFFECT!!");
    if (activeMembeEle !== null) {
      if (activeMembeEle.classList.contains("active")) {
        openActiveWindow(activeMembeEle);
      } else {
        closeActiveWindow(activeMembeEle);
      }
    }
  }, [activeMember, activeMembeEle]);

  const closeActiveWindow = (mem) => {
    console.log("Close the window!");
    const tl = gsap.timeline();
    const memTitle = mem.querySelector(
      ".legacy-tree-donors-content-member-title",
    );
    const memList = mem.querySelector(
      ".legacy-tree-donors-content-member-list",
    );

    tl.to(mem, { width: "325px", zIndex: 100 }).to(memList, {
      display: "none",
      maxHeight: "0px",
      autoAlpha: 0,
    });
  };

  const openActiveWindow = (mem) => {
    const tl = gsap.timeline();

    const memTitle = mem.querySelector(
      ".legacy-tree-donors-content-member-title",
    );
    const memList = mem.querySelector(
      ".legacy-tree-donors-content-member-list",
    );

    tl.to(mem, { width: "650px", zIndex: 9999999 }).to(memList, {
      display: "block",
      maxHeight: "1500px",
      autoAlpha: 1,
    });
  };

  console.log("activeMember", activeMember);
  console.log("activeMembeEle", activeMembeEle);

  return (
    <div className="legacy-tree-donors">
      <div className="legacy-tree-donors-wrapper">
        <div className="legacy-tree-donors-content">
          <div className="legacy-tree-donors-content-tree">
            <img src={data.treeImage.sourceUrl} alt={data.treeImage.altText} />
          </div>
          <div className="legacy-tree-donors-content-member legacy-tree-donors-content-leaf">
            <div className="legacy-tree-donors-content-member-title">
              <p>Leaf Members</p>
              <p>{data.leafMemberLevel}</p>
              <button
                onClick={() => {
                  if (activeMember === "leaf") {
                    handleCloseMember("leaf");
                  } else {
                    handleActivateMember("leaf");
                  }
                }}
              >
                {activeMember === "leaf" ? "-" : <>&#43;</>}
              </button>
            </div>
            <div className="legacy-tree-donors-content-member-list">
              <ul>
                {data.leafMembers.map((mem, index) => {
                  return <li key={index}>{mem.member}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="legacy-tree-donors-content-member legacy-tree-donors-content-branch">
            <div className="legacy-tree-donors-content-member-title">
              <p>Branch Members</p>
              <p>{data.branchMemberLevel}</p>
              <button
                onClick={() => {
                  if (activeMember === "branch") {
                    handleCloseMember("branch");
                  } else {
                    handleActivateMember("branch");
                  }
                }}
              >
                {activeMember === "branch" ? "-" : <>&#43;</>}
              </button>
            </div>
            <div className="legacy-tree-donors-content-member-list">
              <ul>
                {data.branchMembers.map((mem, index) => {
                  return <li key={index}>{mem.member}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="legacy-tree-donors-content-member legacy-tree-donors-content-root">
            <div className="legacy-tree-donors-content-member-title">
              <p>Root Members</p>
              <p>{data.rootMemberLevel}</p>
              <button
                onClick={() => {
                  if (activeMember === "root") {
                    handleCloseMember("root");
                  } else {
                    handleActivateMember("root");
                  }
                }}
              >
                {activeMember === "root" ? "-" : <>&#43;</>}
              </button>
            </div>
            <div className="legacy-tree-donors-content-member-list">
              <ul>
                {data.rootMembers.map((mem, index) => {
                  return <li key={index}>{mem.member}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="legacy-tree-donors-content-member legacy-tree-donors-content-trunk">
            <div className="legacy-tree-donors-content-member-title">
              <p>Trunk Members</p>
              <p>{data.trunkMemberLevel}</p>
              <button
                onClick={() => {
                  if (activeMember === "trunk") {
                    handleCloseMember("trunk");
                  } else {
                    handleActivateMember("trunk");
                  }
                }}
              >
                {activeMember === "trunk" ? "-" : <>&#43;</>}
              </button>
            </div>
            <div className="legacy-tree-donors-content-member-list">
              <ul>
                {data.trunkMembers.map((mem, index) => {
                  return <li key={index}>{mem.member}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="legacy-tree-donors-asterisk">
          <p>
            * An asterisk denotes Founding Members, being early Donors to the
            Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegacyTree;
