# Notes Diagram 
>  

The diagram is a representation of the `state machine` that controls the logic, a `state transition table` is used to describe the finite state machine.

The `state transition table`  is a string that is passed as input to two scripts (that I'm currently writing). The scripts  outputs are  an   [`edge list`](https://en.wikipedia.org/wiki/Edge_list) (for Dagre-d3) and  a [machine config object](https://xstate.js.org/docs/guides/machines.html#configuration) (for [Xstate](https://xstate.js.org/docs) ). 


## Diagram

You can: 
* Move the diagram (click-and-drag to pan (translate): click (the diagram, keep pressing) plus  mouse  movements
* Zoom in (spin the wheel to zoom (scale), or use touch): double click (the diagram)
* Zoom out (spin the wheel to zoom (scale): shift plus double click (the diagram)

![Finite state machine graph, notes ](img/notes.gif)


## Comments about the code

  

``` javascript
const stateTransitionTable =
`
`
```

- The state transition table describe:
   - The current state 
   - The input that produce a transition (to the next valid state) 
   - The next state 
   - Side effects (actions/function calls) that will take place


``` javascript
const stateTransitionTable =

`
... 
`
```



## Demo

[Notes Diagram](https://diegoperezm.github.io/notes-diagram/index.html)

## Licensing

"The code in this project is licensed under MIT license."
