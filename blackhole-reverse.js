// by Olivia Jack
// this version spins in one direction then shifts to the other 

osc(25, 0.03, 3.7)
  .kaleid()
  .mult(osc(10, 0.001, 0).rotate(1.58))
  .blend(o0, 0.94)
  .modulateScale(osc(10, 0),-0.03)
  .scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time)))
  .modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0)
  .mult(osc(50,-0.1,8).kaleid(9))
  .out(o0)
