import type { HexagonCardModel } from "../models/generalModels";

export const splitHexagonCardsArray = (arr: HexagonCardModel[]) => {
  const result = [];
  let i = 0;
  let groupSize = 4;

  while (i < arr.length) {
    result.push(arr.slice(i, i + groupSize));
    i += groupSize;
    groupSize = groupSize === 3 ? 4 : 3;
  }
  return result;
};
