import { ipcRenderer, ipcMain, IpcMainInvokeEvent } from 'electron'
import { IPCChannels } from './types'

// Renderer側: 型安全なinvoke関数
export function ipcInvoke<T extends keyof IPCChannels>(
  channel: T,
  request?: IPCChannels[T]['request']
): Promise<IPCChannels[T]['response']> {
  return ipcRenderer.invoke(channel, request)
}

// Main側: 型安全なhandle関数
export function ipcHandle<T extends keyof IPCChannels>(
  channel: T,
  handler: (
    event: IpcMainInvokeEvent,
    request: IPCChannels[T]['request']
  ) => Promise<IPCChannels[T]['response']> | IPCChannels[T]['response']
): void {
  ipcMain.handle(channel, handler)
}
