// by Olivia Jack

osc(25, 0.03, 1.7)
  .kaleid()
  .mult(osc(10, 0.001, 0).rotate(1.58))
  .blend(o0, 0.94)
  .modulateScale(osc(10, 0),-0.03)
  .scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time)))
// .voronoi(100,3,5)
  .modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0)
  .mult(osc(50,-0.1,8).kaleid(9))
  .out(o0)
