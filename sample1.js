// -- hexagon to pentagon 
//shape(() => Math.sin(time)+6)

// -- bounce three columns up and down
shape(() => Math.sin(time)+100)
.repeatX(6)
.repeatY(()=>Math.sin(time)*5)
 .out(o0)

render(o0)
