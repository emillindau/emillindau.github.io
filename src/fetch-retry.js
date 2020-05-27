const RETRY_MS = 1000;

const fetch = () =>
  new Promise((resolve, reject) => {
    reject("hej");
  });

const delay = t =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, t);
  });

async function* fetchRetryGen(url, options, n, isInitial) {
  yield fetch(url, options);
  await delay(RETRY_MS);
  yield fetch(url, options);
  await delay(RETRY_MS);
  yield fetch(url, options);
  return;
}

const runFetch = () => {
  const asyncIterator = fetchRetryGen();

  (async () => {
    try {
      for await (const val of asyncIterator) {
        console.log(val);
      }
    } catch (e) {
      console.log("error", e);
    }
    console.log("done ->");
  })();
};

export default runFetch;
