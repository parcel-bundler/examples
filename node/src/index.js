function resolveInTime() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveInTime();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
