// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
   return cats.push(name)
}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    return cats.splice(cats.length-1)
}
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1)
}
function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name)
    return newArray
    // const newArray = cats.slice()
    // newArray.push(name)
    // return newArray
}
function prependCat(name) {
    const newArray = [...cats]
    newArray.unshift(name)
    return newArray
}
function removeLastCat() {
    const newArray = [...cats]
    newArray.splice(cats.length-1)
    return newArray
}
function removeFirstCat() {
    const newArray = [...cats]
    newArray.splice(0,1)
    return newArray
}