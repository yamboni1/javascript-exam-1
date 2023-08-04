import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here
    test('returns even values',()=>{
        const numbers = [2,5,4,7,8,10,13];
        const result = filterEvenNumbers(numbers);
        const expectedVal = [2,4,8,10];
        expect(result).toStrictEqual(expectedVal);
    
      })
});
describe('array filter test', () => {
    test('returns 4 letter words',()=>{
        const words = ['walk','performance','exam','days','game','listening'];
        const result = filterLengthWith4(words);
        const expectedVal = ['walk','exam','days','game'];
        expect(result).toStrictEqual(expectedVal);
    
      })
});
describe('array filter test', () => {
    test('returns words starting with A',()=>{
        const words = ['adequate','attractive','intelligent','amazing','game','listening'];
        const result = filterStartWithA(words);
        const expectedVal = ['adequate','attractive','amazing'];
        expect(result).toStrictEqual(expectedVal);
    
      })
});