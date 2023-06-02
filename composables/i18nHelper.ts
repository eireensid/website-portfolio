export const defineObjFields = (obj: any, arr: any) => {
  const { locale } = useI18n()
  
  if (locale.value === 'en') {
    return obj[arr[1]]
  } else if (locale.value === 'fr') {
    return obj[arr[2]]
  } else {
    return obj[arr[0]]
  }
}