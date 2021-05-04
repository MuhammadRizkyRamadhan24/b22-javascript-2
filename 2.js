function searchName(param1, param2, callback){
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    const nameLower = name.map(name => name.toLowerCase())
    const found = nameLower.filter(element => element.includes(callback(param1)))
    found.length = Math.min(found.length, callback(param2))
    console.log(found)
}

function cb(char1, char2){
    const result1 = char1
    const result2 = char2
    return result1
    return result2
}

searchName("an", 3, cb)