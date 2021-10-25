const countSubstring = (s) =>
  s.split("").reduce((count, value, i) => {
    if (value === "A") {
      const chunk = s.slice(i);
      const length = [...chunk.matchAll("X")].length;
      count += length;
    }
    return count;
  }, 0);

countSubstring("AXAXAXAXAX");
