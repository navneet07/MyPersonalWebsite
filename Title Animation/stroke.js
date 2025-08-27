gsap.registerPlugin(MotionPathPlugin);

// setup
gsap.set(".boop", {drawSVG:"0% 1.5%", autoAlpha: 1, immediateRender: true})
gsap.set(".boop2", {drawSVG:"98.2% 100%", autoAlpha: 1, immediateRender: true})
gsap.set(".stroke", {drawSVG:"0%"})

gsap.set(".ball", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50%, 50%"
})

function restart() {
   timeline.play(0);
}

const startBall = 0.023;
const endBall = 0.978;

var timeline = gsap.timeline()
timeline.to(".boop", {
  duration: 0.5,
  ease: Power4.easeOut,
  drawSVG:"0% 0.2%"
})
.to(".boop", {
  duration: 0.3,
  ease: Back.easeOut.config(8),
  drawSVG:"0% 1.5%"
},"+=0.1")
.to(".ball", {
  duration: 10,
  ease: "power1.inOut",
	immediateRender: true,
  ease: Elastic.easeOut.config(1,1.2),
  motionPath:{
    path: ".loop",
    align: ".loop",
    start: startBall,
    end: endBall,
  }
}, 0.65)
.to(".boop2", {
  duration: 0.5,
  ease: Power4.easeOut,
  drawSVG:"99.5% 100%"
}, 4.4)
.to(".boop2", {
  duration: 0.3,
  ease: Back.easeOut.config(8),
  drawSVG:"98.2% 100%",
  delay: 0.1,
}, 4.9)
.to(".ball", {
  duration: 10,
  ease: Elastic.easeOut.config(1,1.2),
  motionPath:{
    path: ".loop",
    align: ".loop",
    start: endBall,
    end: startBall
  },
}, 5.1)
.add(restart, 8.2)
