let users = {
    theresa: {
      party: "Conserative",
      favoriteNumbers: [12, 42, 75]
    },
    Lord_Buckethead: {
      party: "Gremloids",
      favoriteNumbers: [8, 12, 24, 9]
    },
    mr_fishfinger: {
      party: "Independent",
      favoriteNumbers: [5, 12, 14, 85, 99, 30, 1001]
    }
  }

  
  
  // How would you access theresa's party (i.e. the string "Conservative")?
  users.theresa.party

  // How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
  users.Lord_Buckethead.party

  // How would you change mr fishfinger's party to "birds eye"?
  users.mr_fishfinger.party

  // How would you add the number 42 to Lord Buckethead's favourite numbers?
  let addNumber = [42];
  users.Lord_Buckethead.favoriteNumbers = users.Lord_Buckethead.favoriteNumbers.concat(addNumber)

  // How would you access the length of of Lord Buckethead's favourite numbers?
  users.Lord_Buckethead.favoriteNumbers.length

  // How would you replace mr fishfingers's favourite number 1001 to 1002?
  users.mr_fishfinger.favoriteNumbers[6] = 1002
  
  // How would you print to the console all of mr fishfinger's favorite numbers?
  console.log(users.mr_fishfinger.favoriteNumbers)

  // How would you print to the console mr fishfinger's favorite numbers that are odd?
  let i = 0
  while (i < users.mr_fishfinger.favoriteNumbers.length) {
    if ((users.mr_fishfinger.favoriteNumbers[i] % 2)) {
        console.log(users.mr_fishfinger.favoriteNumbers[i])
    }
    i++
  }
