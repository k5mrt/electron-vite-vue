// APIの型定義
export interface ElectronAPI {
  selectFile: () => Promise<string | undefined>;
}
