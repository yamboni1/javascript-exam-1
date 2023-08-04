import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  // Please add test cases here
  test('returns first value greater than or equal to 18',()=>{
    const ages = [1,4,17,20,18];
    const result = firstGrownUp(ages);
    const expectedVal = 20;
    expect(result).toStrictEqual(expectedVal);

  })

});
describe("array find test", () => {
  test('returns first orange it encounters',()=>{
    const fruits = ['kiwi','apple','strawberry','orange','banana'];
    const result = firstOrange(fruits);
    const expectedVal = 'orange';
    expect(result).toStrictEqual(expectedVal);

  })

});
describe("array find test", () => {
  test('returns first name it encounters with length greater than 5',()=>{
    const names = ['Col','Joy','Taylor','John','Dianne'];
    const result = firstLengthOver5Name(names);
    const expectedVal = 'Taylor';
    expect(result).toStrictEqual(expectedVal);

  })

});