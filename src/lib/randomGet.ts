// ランダムで1件だけ取得する（空配列の場合は undefined を返す）
export const randomGet = function randChoice<T>(arr: Array<T>): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
};