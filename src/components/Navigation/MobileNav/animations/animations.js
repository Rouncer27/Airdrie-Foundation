import gsap from "gsap";

export const staggerReveal = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};
