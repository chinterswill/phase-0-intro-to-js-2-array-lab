// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}



function appendCat(name) {
const allCats = [...cats, "Broom"]
return allCats
}

function prependCat(name) {
const allCats = ["Arnold", ...cats]
return allCats
}

function removeLastCat() {
    const lastCat = cats.slice(0, 2)
    return lastCat
}

function removeFirstCat() {
    const firstCat = cats.slice(1)
    return firstCat
}


console.log(1 + 2 + "puppies" + 4 + 5)




