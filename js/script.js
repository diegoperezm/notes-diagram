/**
 *
 *                      SETUP
 *
 *
 **/


   const { Machine,  interpret, assign } = XState;

   const tableState       = document.getElementById("table__state");
   const tableData        = document.getElementById("table__data");
   const display          = document.getElementById("display");
   const textDescription  = document.getElementById("text-description");

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
 textDescription.textContent = '';

 data['content'].forEach( item => {
	   p = document.createElement('p');
     p.appendChild(document.createTextNode(item));
     textDescription.appendChild(p);
	});

 data['image'].forEach( item => {
     if(item.length >= 1) { 
        img = document.createElement('img');
        img.src   = item;
        textDescription.appendChild(img);
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
