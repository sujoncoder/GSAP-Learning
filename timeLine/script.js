var tl = gsap.timeline();

tl.from("h1", {
  y: -50,
  duration: 1,
  delay: 1,
});

tl.from("h2", {
  y: -50,
  duration: 0.5,
  stagger: 0.2,
});

tl.from("h3", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});
