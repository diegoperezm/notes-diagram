/**
 *
 *                      SETUP
 *
 *
 **/


   const { Machine,  interpret, assign } = XState;

   const display      = document.getElementById("display");
   const textContent  = document.getElementById("text-content");
   const selectTopic  = document.getElementById("select-topic");


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
                       machineService.send('d')
			break;
		 case 'j':
                       machineService.send('d')
			break;
		 case 'ArrowUp':
                       machineService.send('u')
			break;
                 case 'k':
                       machineService.send('u')
			break;
		 case 'ArrowLeft':
                       machineService.send('l')
			break;
 		 case 'h':
                       machineService.send('l')
			break;
		 case 'ArrowRight':
                       machineService.send('r')
			break;
                 case 'l':
                       machineService.send('r')
			break;
	 }
 });



 left.addEventListener("click", () => machineService.send('l'))
 up.addEventListener("click", () => machineService.send('u'))
 down.addEventListener("click", () => machineService.send('d'))
 right.addEventListener("click", () => machineService.send('r'))

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
 let graphConf = createGraphConf('svgGraph', stateTransitionTable, "TB", 1, 0.5);
 const g = createGraph(graphConf);
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

   const machineConf      = createMachineConf(stateTransitionTable);

   const machine          = Machine(machineConf,options);

   const machineService   = interpret(machine)
        .onTransition(state => {
          fmt(STATE_DATA[selectTopic.value][state.value])
          showFn(state,g.g);
        }
    );


machineService.start();
