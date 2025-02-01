const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', (input: string) => {
  if (input === 'hello') {
    console.log('Hello World');
  }
}); 