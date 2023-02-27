const lines = {
    alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],

    glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],

    sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
}


function findPath(origin, destination) {
    origin = process.argv[2]
    destination = process.argv[3]

    let originLine = findLine(origin)
    let destinationLine = findLine(destination)
    let direction
    console.log(`
origin: ${origin}
destination: ${destination}
    `)
    
    // one line journey
        // if origin and destination is in one array {
        // slice from origin to destination
        // push to resultArray
    if(originLine === destinationLine) {
        if(lines.alamein.includes(origin) && lines.alamein.includes(destination)) {
            let originIndex = lines.alamein.indexOf(origin)
            let destinationIndex = lines.alamein.indexOf(destination)
            direction = lines.alamein.slice(originIndex, destinationIndex)

        } else if(lines.glenWaverly.includes(origin) && lines.glenWaverly.includes(destination)) {
            let originIndex = lines.glenWaverly.indexOf(origin)
            let destinationIndex = lines.glenWaverly.indexOf(destination)
            direction = lines.glenWaverly.slice(originIndex, destinationIndex)

        } else if(lines.sandringham.includes(origin) && lines.sandringham.includes(destination)) {
            let originIndex = lines.sandringham.indexOf(origin)
            let destinationIndex = lines.sandringham.indexOf(destination)
            direction = lines.sandringham.slice(originIndex, destinationIndex)
        } 
        console.log(direction.join(" ------> "))
        console.log(`${direction.length} stops total`)
    } else {
        // multi line journey
            // slice to richmond in array1   
            // slice from richmond to destination in array2
            // concat

        let firstHalfJourney = originLine.slice(originLine.indexOf(origin), originLine.indexOf('Richmond') + 1)

        let secondHalfJourney = destinationLine.slice(destinationLine.indexOf('Richmond'))
        
        console.log(firstHalfJourney.join(" ------> "))
        console.log(secondHalfJourney.join(" ------> "))
        
        direction = firstHalfJourney.concat(secondHalfJourney)

        console.log(`${direction.length - 1} stops total`)
    }
}

function findLine(stopName) {
    if(lines.alamein.includes(stopName)) {
        return lines.alamein
    } else if(lines.glenWaverly.includes(stopName)) {
        return lines.glenWaverly
    } else if(lines.sandringham.includes(stopName)) {
        return lines.sandringham
    }
}

findPath()