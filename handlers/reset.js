function resetHandler() {
  debugger;
  // reset state to initial values

  // re-render UI with values saved in state
  
  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(numbers))
  })

}
