const contains = function (obj, target) {
  const arr = Object.values(obj);
  if (arr.includes(target)) return true;
  
  const objects = arr.filter((obj) => typeof obj === "object" && obj !== null);
  return objects.some((nestedObj) => contains(nestedObj, target));
};

// Do not edit below this line
module.exports = contains;
