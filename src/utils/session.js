const readSession = ({ apiKey ***REMOVED***) => {
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${apiKey***REMOVED***:[DEFAULT]`
  )
  return user
***REMOVED***

const clearSession = ({ apiKey ***REMOVED***) => {
  window.sessionStorage.removeItem(
    `firebase:authUser:${apiKey***REMOVED***:[DEFAULT]`
  )
***REMOVED***

export { readSession, clearSession ***REMOVED***