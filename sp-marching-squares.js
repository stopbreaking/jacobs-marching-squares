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
setTimeout(() => {
    CDP(async (client) => {
        const {Network, Page, Runtime} = client;

        const requests = new Set(); // <---------- HERE

        Network.requestWillBeSent(({requestId, request}) => {
            if(request.url.indexOf("ct2/results/rpc") != -1){
                console.log(`REQ [${requestId}] ${request.method} ${request.url} \n`);

                requests.add(requestId); // <---------- HERE

            }
        });
        Network.loadingFinished(async ({requestId}) => {

            if (requests.has(requestId)) { // <---------- HERE

                const {body, base64Encoded} = await Network.getResponseBody({requestId});
                console.log(`RES [${requestId}] body: ${body} \n`);
            }
        });
        try {
            await Promise.all([Network.enable(), Page.enable()]);
            await Page.navigate({url: 'https://clinicaltrials.gov/ct2/results?cond=Parents&term=&cntry1=&state1=&Search=Search&recrs=a#wrapper'});
            await Page.loadEventFired();
            await Runtime.evaluate({
                expression: `document.querySelector('.paginate_button.next').click()`
            });
        } catch (err) {
            console.error(err);
        }
    }).on('error', (err) => {
        console.error(err);
    });
}, 1000);