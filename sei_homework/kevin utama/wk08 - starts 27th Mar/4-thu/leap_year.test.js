const Year = require('./leap_year.js')

test("2004 is a leap year", () => {
    let year = new Year(2004)
    expect(year.isLeap).toBe(true)
  })
  
  test("2008 is a leap year", () => {
    expect(new Year(2008).isLeap).toBe(true)
    expect(new Year(2012).isLeap).toBe(true)
  })
  
  test("2100, 2200, 2300 is not", () => {
    expect(new Year(2100).isLeap).toBe(false)
    expect(new Year(2200).isLeap).toBe(false)
    expect(new Year(2300).isLeap).toBe(false)
  })
  
  test("2400 is a leap year", () => {
    expect(new Year(2400).isLeap).toBe(true)
    expect(new Year(2800).isLeap).toBe(true)
    expect(new Year(3200).isLeap).toBe(true)
  })
  
  test("2001, 2002 is not", () => {
    expect(new Year(2001).isLeap).toBe(false)
    expect(new Year(2002).isLeap).toBe(false)
  })