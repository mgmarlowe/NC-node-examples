module.exports = (x, y, callback) => {
  // error callback pattern, very common convention
  if (x <= 0 || y <= 0) {
    // check for error condition, i.e. are the arguments recieved from the function parameters invalid somehow?
    callback(
      new Error(
        `Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`
      )
    ); // convention: error object as first argument
  } else {
    setTimeout(
      () =>
        // this inner function is a Closure, so it can access the variables from the outer function. For this callback, that means it can access x and y from the arguments passed to the function and they don't need to be declared in the perimeter and area methods.
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000 // time in milliseconds
    );
  }
};
