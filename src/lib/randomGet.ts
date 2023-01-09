// ランダムで1件だけ取得する
export const randomGet = function randChoice<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)];
  };