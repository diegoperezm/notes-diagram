/**
 *
 *                      SETUP
 *
 *
 **/


   const { Machine,  interpret, assign } = XState;

   const display      = document.getElementById("display");
   const textContent  = document.getElementById("text-content");

   const left  = document.getElementById("left");
   const up    = document.getElementById("up");
   const down  = document.getElementById("down");
   const right = document.getElementById("right");


/**
 *                                  EVENTS
 *
 **/

 document.addEventListener("keydown", function (evt) {
	 switch(evt.key) {
		 case 'ArrowDown':
                       ndmMachineService.send('d')
			break;
		 case 'j':
                       ndmMachineService.send('d')
			break;
		 case 'ArrowUp':
                       ndmMachineService.send('u')
			break;
                 case 'k':
                       ndmMachineService.send('u')
			break;
		 case 'ArrowLeft':
                       ndmMachineService.send('l')
			break;
 		 case 'h':
                       ndmMachineService.send('l')
			break;
		 case 'ArrowRight':
                       ndmMachineService.send('r')
			break;
                 case 'l':
                       ndmMachineService.send('r')
			break;
	 }
 });



 left.addEventListener("click", () => ndmMachineService.send('l'))
 up.addEventListener("click", () => ndmMachineService.send('u'))
 down.addEventListener("click", () => ndmMachineService.send('d'))
 right.addEventListener("click", () => ndmMachineService.send('r'))

/**
 *
 *                                   FINITE STATE  MACHINE
 *
 *
 **/

  const options = {
    actions: {}, services: {}
	};





/**
 *
 *                                  GRAPH
 *
 *
 **/
let ndmGraphConf = createGraphConf('svgGraph', stateTransitionTable, "TB", 1, 0.5);
 const g = createGraph(ndmGraphConf);
 renderGraph(g.g, g.data); 


/**
 *
 *                                  FUNCTIONS
 *
 **/

function fmt(data) {
 textContent.textContent = '';

 data['content'].forEach( item => {
	   p = document.createElement('p');
     p.appendChild(document.createTextNode(item));
     textContent.appendChild(p);
	});

 data['image'].forEach( item => {
     if(item.length >= 1) { 
        img = document.createElement('img');
        img.src   = item;
        textContent.appendChild(img);
     }
    });
}




/**
 *
 *                                  MAIN
 *
 **/

   const ndmMachineConf      = createMachineConf(stateTransitionTable);

   const ndmMachine          = Machine(ndmMachineConf,options);

   const ndmMachineService   = interpret(ndmMachine)
        .onTransition(state => {
          fmt(STATE_DATA[state.value])
          showFn(state,g.g);
        }
    );


ndmMachineService.start();
