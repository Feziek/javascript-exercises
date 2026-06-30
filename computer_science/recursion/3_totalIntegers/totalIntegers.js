const isObj = (obj) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null)
    return true;
  else return false;
};

const totalIntegers = function (arr) {
  let count = 0;
  let arrFromObj = arr;

  if (!Array.isArray(arr) && !isObj(arr)) return undefined;
  if (isObj(arr)) arrFromObj = Object.values(arr);

  if (arrFromObj.length === 0) return 0;

  for (const item in arrFromObj) {
    if (Number.isInteger(arrFromObj[item])) {
      count += 1;
    }

    if (Array.isArray(arrFromObj[item]) || isObj(arrFromObj[item])) {
      count += totalIntegers(arrFromObj[item]);
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
