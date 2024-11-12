// A building has 100 floors. One of the floors is the highest floor an egg can be dropped
// from without breaking. If an egg is dropped from above that floor, it will break. If it is
// dropped from that floor or below, it will be completely undamaged and you can drop the
// egg again. Given two eggs, find the highest floor an egg can be dropped from without
// breaking, with as few drops as possible in the worst-case scenario.

function findInitialFloor(totalFloors) {
  // initialFloor(initialFloor + 1) / 2 = totalFloors => initialFloor^2 + initialFloor - (2 * totalFloors) = 0
  const a = 1
  const b = 1
  const c = - (2 * totalFloors)

  const discriminant = Math.pow(b, 2) - 4 * a * c

  if (discriminant < 0) {
    return "No real solutions"
  }

  const x1 = Math.ceil((-b + Math.sqrt(discriminant)) / (2 * a))
  const x2 = Math.ceil((-b - Math.sqrt(discriminant)) / (2 * a))

  return Math.max(x1, x2)
}

function calculateStepsToHighestFloor(highestFloor, totalFloors = 100) {
  let step = 0
  let lowestFloor = 1
  const initialFloor = findInitialFloor(totalFloors)
  let currentFloor = initialFloor

  if (highestFloor > totalFloors) return "Highest floor can't be greater than total number of floors"

  function checkFirstEggBreaks(eggs) {
    step++
    if (currentFloor >= totalFloors) return

    if (currentFloor > highestFloor) { // Egg breaks
      eggs--

      function checkSecondEggBreaks(eggs) {
        if (lowestFloor === currentFloor) return // When lowestFloor === currentFloor we got the response
        
        step++
        if (lowestFloor > highestFloor) { // Egg breaks
          eggs--
          return
        } else { // Egg doesn't break
          lowestFloor++
          checkSecondEggBreaks(eggs)
        }
      }

      checkSecondEggBreaks(eggs)
      return
    } else { // Egg doesn't break
      lowestFloor = currentFloor + 1

      if (currentFloor + initialFloor - step > totalFloors) { // currentFloor can't be higher than total number of floors (egg can't be dropped from non-existent floor)
        currentFloor++
      } else {
        currentFloor += initialFloor - step
      }

      checkFirstEggBreaks(currentFloor, highestFloor, eggs, lowestFloor, initialFloor)
    }
  }

  checkFirstEggBreaks(2)

  return `In a building with ${totalFloors} floors, the amount of steps necessary to find the highest floor (${highestFloor}) an egg can be dropped from without breaking is: ${step}`
}


const steps = calculateStepsToHighestFloor(12)
console.log(steps)


/*
  Explanation

  Starting from floor: 10 => x = 10
  Increasing drop floor by 10 at a time
  Highest floor an egg can be dropped: n

  Drops:

  1) x = 10 => If break: n between floors 1-9 => Worst case: 1 (egg broken) + 9 (attempts) = 10
               If no break: add 10 to x => x = 20

  2) x = 20 => If break: n between floors 11-19 => Worst case: 2 (egg broken) + 9 (attempts) = 11
               If no break: add 10 to x => x = 30
            
  ...

  10) x = 100 => If break: n between floors 91-99 => Worst case: 10 (egg broken) + 9 (attempts) = 19
                 If no break: Worst case: 9 (egg broken) + 1 (attempt) = 10


  The worst case for the solution above is 19. This solution can be improved if we find a constant
  number in the worst case when the egg broke.
  For example: the solution above got worse as the egg broke on the higher floors, because we always
  were testing 9 floors without considering the attempts that the egg didn't breake. So in the worst
  case we tested 9 floors (91-99) and add 9 attempts (egg not broke) + 1 attempt (egg broke) = 19
  So each time we do a floor jump we have to remove an attempt (egg not broken).

  This means: x + (x - 1) + (x - 2) + ... + 1 = 100
              x(x + 1) / 2 = 100
              x = - 14,7 (no) or x = 13,7 (yes)
              x = 14

  So, initial floor is the 14th and we'll do floor jumps of (x - 1), (x - 2) and so on
  
  Drops:

  1) x = 14 => If break: n between floors 1-13 => Worst case: 1 (egg broken) + 13 (attempts) = 14
               If no break: add (x - 1) => (14 - 1) to x => x = 14 + 13 = 27

  2) x = 27 => If break: n between floors 15-26 => Worst case: 1 (egg not broke) + 1 (egg broke) + 12 (attempts) = 14
               If no break: add (x - 2) => (14 - 2) to x => x = 27 + 12 = 39
            
  3) x = 39 => If break: n between floors 28-38 => Worst case: 2 (egg not broke) + 1 (egg broke) + 11 (attempts) = 14
               If no break: add (x - 3) => (14 - 3) to x => x = 39 + 11 = 50

  ...

  10) x = 99 => If break: n between floors 96-98 => Worst case: 10 (egg not broke) + 1 (egg broken) + 3 (attempts) = 14
                If no break: Worst case: 11 (egg not broke) + 1 (attempt - 100) = 12

*/