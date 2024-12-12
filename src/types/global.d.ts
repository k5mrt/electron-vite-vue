import type { ElectronAPI } from '../../electron/types/api'

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
