export default {
  mapValue(val, low1 = 0, high1 = 0, low2 = 0, high2 = 0) {
    if (isNaN(val)) {
      console.error('Cannot map a value that isNaN', val);
      return NaN;
    }
    return low2 + (high2 - low2) * (val - low1) / (high1 - low1);
  }
};