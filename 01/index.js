// Write a javascript function that finds the duplicate items in any given array.

function findArrayDuplicateItems(array) {
  const seenItems = new Set()
  const duplicateItems = new Set()
  
  array.forEach(item => {
    if (seenItems.has(item)) {
      duplicateItems.add(item)
    } else {
      seenItems.add(item)
    }
  })

  return Array.from(duplicateItems)
}


const duplicateItems = findArrayDuplicateItems([1, 'a', 2, 3, 2, 2, 'a', 2, 1])
console.log(duplicateItems)