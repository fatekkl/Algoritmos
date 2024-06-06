var minChanges = function (s) {
    let n = s.length
    let count = 0
    for (let i = 1; i < n; i += 2) {
      if (s[i - 1] !== s[i]) {
        count++
      }
    }
    return count
  };