export interface Alert {
  id: string | number,
  type: 'info' | 'warn' | 'error',
  title: string,
  description: string,
  time: Date | string,
}
