const result = require('./app.js');

describe('Main', () => {
  test('Alicia Brereton has one type of contraband', () => {
    expect(result['Alica Brereton']).toEqual([
        {
          product: 'Marijuana',
          unitPrice: '9.18',
          units: '50',
          totalPrice: '459.00'
        }
      ])
  })

  test('David Ernest is a master druglord and thus have plenty of drugs on his possession', () => {
    expect(result['David Ernest']).toEqual([
        {
          product: 'Methamphetamine',
          unitPrice: '108.78',
          units: '5',
          totalPrice: '543.90'
        },
        {
          product: 'cocaine',
          unitPrice: '80',
          units: '2',
          totalPrice: '160.00'
        },
        {
          product: 'ecstasy',
          unitPrice: '20.50',
          units: '23',
          totalPrice: '471.50'
        }
      ])
  })
})