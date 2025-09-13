function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<Number>([1, 2, 3]); // 1
getFirstElement<String>(["a", "b", "c"]); // "a"
getFirstElement<Boolean>([true, false, true]); // true
