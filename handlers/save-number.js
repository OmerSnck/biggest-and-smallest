function saveNumberHandler() {
  debugger;
  // read new number from user input
  let lastnumber= Number(document.getElementById('input').value);
  numbers.all.push(numbers.current);
  // read from state the data you will need for the next step
  // find the new biggest and smallest values
  if ( lastnumber > numbers.biggest) {
    numbers.biggest=lastnumber;
  }
  if (lastnumber < numbers.smallest) {
    numbers.smallest=lastnumber;
  } 
  // update state: new biggest, new smallest, new current & save the last current
 
  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
