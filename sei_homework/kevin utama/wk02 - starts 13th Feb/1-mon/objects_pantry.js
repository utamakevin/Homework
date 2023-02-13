let home = {
    kitchen: {
      pantry: [
        {
          label: 'hemp seeds',
          cost: 12
        },
        {
          label: 'flour',
          cost: 4
        },
        {
          label: 'nutella',
          cost: 5
        },
        {
          label: 'honey',
          cost: 8
        }
      ],
  
      bench: [
        {
          brand: 'vitamix',
          color: 'red'
        },
        {
          brand: 'kitchenaid',
          color: 'white'
        },
        {
          brand: 'breville',
          color: 'black'
        },
      ],
  
      fridge: [
        {
          name: 'no frills pudding from wollies',
          comment: 'taste like vomit, total rip off',
          ingredients: ['sugar', 'preservatives', 'vomit']
        }
      ]
    }
  }
  
  
  // write code to update the cost of hemp seeds to $120 (inflation)
    home.kitchen.pantry[0].cost = 120
    // console.log(home.kitchen.pantry[0])

  // there is also a cupboard in the kitchen, and it is empty. write code to add a key value pair representing an empty cupboard to the kitchen object. 
    home.kitchen.cupboard = []
    // console.log(home.kitchen)


  // write code to calculate the total cost of all items in the pantry using a while loop (smarty pants if you can write a while loop with your eyes closed, feel free to use other looping syntax)
    let i = 0
    let totalCost = null
    while(i < home.kitchen.pantry.length) {
        
        totalCost = totalCost + home.kitchen.pantry[i].cost
        i++
    }
    // console.log(totalCost)