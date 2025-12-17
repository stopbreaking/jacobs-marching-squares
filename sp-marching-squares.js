document.querySelector('#app3').innerHTML = `
  <div id="embeddedGameSquares">
    <embed type="text/html" src="/JacobsMarchingSquaresWrapped/JacobsMarchingSquaresBuild/index.html" width="100%" height="720px">
  </div>
  <div id = "projectBlurb"> 
    <h1>Marching Squares Project</h1>
    <p> 
    A simple implementation of the marching squares algorithm in Unity from 2023. Marching squares can be used to automatically pick from tilesets to draw complex shapes. Combining the algorithm with different noise patterns allows for procedural generation of 2D terrain. This project uses marching squares to draw borders around different noise patterns. The Midpoint button toggles whether or not the lines are interpolated or drawn exactly halfway. Try it out. Edited for interactability outside the editor.
    </p>
  </div>
`