export function rangeMap(n: number, fn: (arg0: number) => any) {
  const arr: number[] = [];
  while (n > arr.length) {
    arr.push(fn(arr.length));
  }
  return arr;
}
