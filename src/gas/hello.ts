const greeter = (person: string) => {
  return `Hello. ${person}!`;
}

function testGreeter() {
  const user = 'Alice';
  Logger.log(greeter(user));
}