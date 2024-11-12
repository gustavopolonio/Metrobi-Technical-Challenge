// Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.
// Example: for ["a", "b", "c", "d"], "a" is printed 1 second after the code runs, "b" is printed 2 seconds after the code runs, "c" is printed 4 seconds after the code runs, etc.

async function printItemsWithDelay(array) {
  const promises = array.map((item, i) => 
    new Promise(resolve => {
      const delay = Math.pow(2, i) * 1000

      setTimeout(() => {
        console.log(item)
        resolve()
      }, delay)
    })
  )

  await Promise.all(promises)
}


printItemsWithDelay(["a", "b", "c", "d", 1, 2])