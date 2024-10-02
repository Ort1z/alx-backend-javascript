export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // The promise doesn't do anything specific, it just needs to be a promise
	  setTimeout(() => {
      resolve('Data from fake API');
    }, 1000);
  });
}
