async function start() {
  const prom = await new Promise((resolve, reject) => {
    resolve(console.log('async'));
  });
}
start();
