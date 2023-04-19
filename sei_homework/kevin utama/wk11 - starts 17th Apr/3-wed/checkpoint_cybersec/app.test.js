const { exportAllDeclaration } = require('@babel/types');
const result = require('./app.js');

describe('Main', () => {
  test('Alicia Brereton has one type of contraband', () => {
    exportAllDeclaration(JSON.stringify(result)).toBe('Marijuana')
  })
})