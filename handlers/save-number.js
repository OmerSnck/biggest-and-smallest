function saveNumberHandler() {
  debugger;
  // read new number from user input
  
  // read from state the data you will need for the next step
  // find the new biggest and smallest values
  
  // update state: new biggest, new smallest, new current & save the last current
 
  // re-render the user interface with values stored in state
  
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
