// Code your solution here

const drivers = [
//These are the objects matching names and hometown
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//My arrow functions reffering to the above array

const findMatching = (drivers, property) =>  {
    return drivers.filter(function (driver) { return driver.toLowerCase() === property.toLowerCase() })
  }
  
  const fuzzyMatch = (drivers, property) => {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, property.length) === property.toLowerCase() })
  }
  
  const matchName = (drivers, myMatchName) => {
    return drivers.filter(function (driver) { return driver.name === myMatchName })
  }