/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
strEndsWith('abc', 'bc') -- returns true
strEndsWith('abc', 'd') -- returns false */

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}
