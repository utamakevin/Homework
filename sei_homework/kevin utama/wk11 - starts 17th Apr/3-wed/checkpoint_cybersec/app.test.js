const { exportAllDeclaration } = require('@babel/types');
const result = require('./app.js');

describe('Main', () => {
  test.skip('Alicia Brereton has one type of contraband', () => {
    exportAllDeclaration(result['Alicia Brereton']).toBe([
        {
          product: 'Marijuana',
          unitPrice: '9.18',
          units: '50',
          totalPrice: '459.00'
        }
      ])
  })
})