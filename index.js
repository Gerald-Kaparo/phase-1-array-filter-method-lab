// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

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
// This is an alternative function
//   function matchName(drivers, myMatchName){
//     const filteredrray = drivers.filter(function(list){   
//         return list.name === myMatchName;
//     })
//         return filteredrray;
// }
  
  const matchName = (drivers, myMatchName) => {
    return drivers.filter(function (driver) { return driver.name === myMatchName })
  }
  