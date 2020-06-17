// by Zach Krall
// http://zachkrall.online/

osc( 215, 0.1, 2 )
.modulate(
  osc( 2, -0.3, 100 )
  .rotate(15)
)
// provides the red 'northern light' effect within the discs
.mult(
  osc( 215, -0.1, 2)
  .pixelate( 50, 50 )
)
// even out the 'nothern light' effect
.color( 0.9, 0.0, 0.9 )
.modulate(
  osc( 6, -0.1 )
  .rotate( 9 )
)
// commenting out this function provides a cool directional effect to the northern lights
.add(
  osc( 10, -0.9, 900 )
  .color(1,0,1)
)
// adds the floating 'discs'
.mult(
  shape(90, 0.2, 1)
  .luma()
  .repeatX(2)
  .repeatY(2)
  .colorama(10)
)
// wave
.modulate(
  osc( 12, -0.3, 900 )
  .rotate( 6 )
)
// adds a gradient background shift
.add(
  osc(4, 1, 90)
  .color(0.2,0,1)
)
.out()
