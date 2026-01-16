function debounce(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function apiCall(query) {
  console.log("API called with:", query);
}

const debouncedApi = debounce(apiCall, 500);

debouncedApi("a");
debouncedApi("ab");
debouncedApi("abc");
