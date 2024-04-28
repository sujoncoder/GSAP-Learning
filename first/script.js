gsap.from("h1", {
  color: "pink",
  duration: 2,
  delay: 1,
  opacity: 0,
  y: 200,
  x: 100,
  stagger: 1,
});

gsap.to("#pink", {
  x: 600,
  y: 300,
  rotate: 90,
  scale: 1,
  backgroundColor: "pink",
  duration: 2,
  delay: 3,
  borderRadius: "50%",
});
gsap.from("#teal", {
  x: 600,
  y: 300,
  rotate: 90,
  scale: 1,
  backgroundColor: "pink",
  duration: 2,
  delay: 2,
  borderRadius: "50%",
});
gsap.to("#lime", {
  x: 600,
  y: 200,
  rotate: 90,
  scale: 1,
  duration: 2,
  delay: 2,
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});
