function range(...args) {
  const [start, end, step, isRight] = args;
  let result;

  if (start !== undefined && end === undefined && step === undefined) {
    result = Array.from({ length: Math.abs(start) }).map((_, i) =>
      start > 0 ? i : -i
    );
  } else if (start !== undefined && end !== undefined && step === undefined) {
    result = Array.from({ length: Math.abs(end - start) }).map((_, i) =>
      end - start > 0 ? start + i : start - i
    );
  } else if (start !== undefined && end !== undefined && step !== undefined) {
    result =
      step === 0
        ? Array.from({ length: end - start }).map((_) => start)
        : Array.from({ length: (end - start) / step }).map(
            (_, i) => start + step * i
          );
  }
  return isRight ? result.reverse() : result;
}

function rangeRight(...args) {
  const [start, end, step] = args;
  return range(start, end, step, true);
}
