export interface IPCChannels {
  'select-file': {
    request: void; // リクエストの型（なしの場合は`void`）
    response: string | undefined; // レスポンスの型
  }
}
