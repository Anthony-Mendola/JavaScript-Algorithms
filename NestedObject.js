// Write a function called getNames that returns a string "Robin, Alberto, Quinn, Conner, Lila, Charlie"

const people = {
    name: "Robin",
    children: [
        {
            name: "Alberto",
            children: [
                {
                    name: "Quinn",
                    children: [
                        {
                            name: "Conner",
                            children: []
                        },
                        {
                            name: "Lila",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Charlie",
            children: []
        }
    ]
}


function getNames(obj) {
    let namesString = obj.name

    obj.children.forEach((child) => {
        namesString += `, ${getNames(child)}`
    })

    return namesString
}

console.log(getNames(people))

