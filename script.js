// Sử dụng SplitType để chia chữ thành các ký tự riêng lẻ
const textSplit = new SplitType(".text", { types: "chars" });
const h2Width = document.querySelector(".title h2").offsetWidth;
const svgWidth = document.querySelector(".icon").offsetWidth;
console.log(svgWidth);
gsap.set(".icon svg", { x: -svgWidth });
gsap.set(".char", { opacity: 0 });

gsap
  .timeline({
    onUpdate: function () {
      const progress = gsap.getProperty(".icon svg", "x");

      document.querySelectorAll(".char").forEach((char, index) => {
        if (progress >= char.offsetLeft) {
          gsap.to(char, { opacity: 1, duration: 0.1 });
        }
      });
    },
  })
  .to(".icon svg", {
    x: h2Width + svgWidth / 2,
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
  });
