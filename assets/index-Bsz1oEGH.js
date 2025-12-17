(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app3`).innerHTML=`
  <div id="embeddedGameSquares">
    <embed type="text/html" src="/JacobsMarchingSquaresBuildx/index.html" width="100%" height="720px">
  </div>
  <div id = "projectBlurb"> 
    <h1>Marching Squares Project</h1>
    <p> 
    A simple implementation of the marching squares algorithm in Unity from 2023. Marching squares can be used to automatically pick from tilesets to draw complex shapes. Combining the algorithm with different noise patterns allows for procedural generation of 2D terrain. This project uses marching squares to draw borders around different noise patterns. The Midpoint button toggles whether or not the lines are interpolated or drawn exactly halfway. Try it out. Edited for interactability outside the editor.
    </p>
  </div>
`;