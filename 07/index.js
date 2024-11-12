// Think that you have an unlimited number of carrots, but a limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold. [Python or Javascript]
// Example:
// carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
// capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)

function getMaxValue(carrotTypes, capacity) {
  // maxBagHoldArray: Index => bag capacity (weight); Value => max value bag can hold (price) for Index weight
  const maxBagHoldArray = new Array(capacity + 1).fill(0)

  for (let carrotIndex = 0; carrotIndex < carrotTypes.length; carrotIndex++) {
    const { kg: carrotWeight, price: carrotPrice } = carrotTypes[carrotIndex]

    // Check every possible capacities from carrot weight to bag full capacity
    for (let currentCapacity = carrotWeight; currentCapacity <= capacity; currentCapacity++) {
      // Set the best price between the price of current bag capacity and the sum of carrotPrice + price of remaining capacity
      maxBagHoldArray[currentCapacity] = Math.max(
        maxBagHoldArray[currentCapacity],
        carrotPrice + maxBagHoldArray[currentCapacity - carrotWeight]
      )
    }
  }

  return maxBagHoldArray[capacity]
}


const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 }
]
const capacity = 36

const maxValue = getMaxValue(carrotTypes, capacity)
console.log(maxValue)