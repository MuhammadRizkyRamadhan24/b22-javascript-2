function searchName(param1, param2, callback){
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    const nameLower = name.map(name => name.toLowerCase())
    const found = nameLower.filter(element => element.includes(param1))
    callback(found, param2)
}

function cb(char, limit){
    const result = char.slice(0, limit)
    console.log(result)
}

searchName("an", 3, cb)