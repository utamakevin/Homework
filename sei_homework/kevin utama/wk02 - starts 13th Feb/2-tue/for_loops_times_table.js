for(numberPrimary = 1; numberPrimary <= 10; numberPrimary++) {
    console.log(`=== ${numberPrimary} times table ===`)
    for(let i = 1; i <= 10; i++) {
        let numberSecondary = i
        console.log(`${numberPrimary} x ${numberSecondary} = ${numberPrimary * numberSecondary}`)
    }
}