type AboutTabType = 'about' | 'experience' | 'projects' | 'education'
export type AboutTabOrder = 1 | 2 | 3 | 4

export type AboutTab = {
  code: AboutTabType,
  name: string,
  text: string,
  order: AboutTabOrder
}