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
    console.log(found.slice(0, param2))
}

function cb(char1){
    const result1 = char1
    return result1
}

searchName("an", 3, cb)