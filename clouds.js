
//clouds of passage
//by Nesso
//www.nesso.xyz

// adds multiple shapes with 4,5,6 sides 
shape([4,5,6].fast(1.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
// add a green color
.color(0.2,0.4,0.3)
// scrolls the shapes across the screen horizontally
.scrollX(()=>Math.sin(time*0.27))
// add a pink shape that scrolls across the screen
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color(0.6,0.2,0.5)
  .scrollY(0.35)
  .scrollX(()=>Math.sin(time*0.33)))
// adds a blue shape across the screen
// .add(
//   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
//   .color(0.2,0.4,0.6)
//   .scrollY(-0.35)
//   .scrollX(()=>Math.sin(time*0.41)*-1))
// multiplies the shapes going across the screen and adds a rainbox commet effect to them
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
// adds the cloud effect
.modulate(voronoi(10,2,2))
.out()
