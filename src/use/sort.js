
export const useSort = (newSortKey, data, sortKey) => {
 let result = null;
  if (sortKey.value === newSortKey) {
   result = data.value.reverse();
  } else {
   result = data.value.sort((a, b) => {
    const x = a[newSortKey];
    const y = b[newSortKey];
    return x > y ? 1 : x < y ? -1 : 0;
   });
  }
 sortKey.value = newSortKey;

  return result
 }