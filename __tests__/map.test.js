import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  // Please add test cases here
  test('Returns half of the value of a number',()=>{
    const numbers = [10,20,30,40,50];
    const result = halfNumbers(numbers);
    expect(result).toStrictEqual([5,10,15,20,25]);
  }) 
});
describe("array map test",()=>{
  test('Returns Hello add before each name in an array',()=>{
    const names = ['Niko','Col','Mimi'];
    const result = spliceNames(names);
    const expectedVal = ['Hello Niko','Hello Col','Hello Mimi'];
    expect(result).toStrictEqual(expectedVal);

  })
});
describe("array map test",()=>{
  test('Return values with serial number',()=>{
    const fruits = ['Kiwi','Strawberry','Orange'];
    const result = addSerialNumber(fruits);
    const expectedVal = ['1. Kiwi','2. Strawberry','3. Orange'];
    expect(result).toStrictEqual(expectedVal);
  })
})
