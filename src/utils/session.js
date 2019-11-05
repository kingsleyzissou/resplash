const readSession = ({ apiKey }) => {
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${apiKey}:[DEFAULT]`
  )
  return user
}

const clearSession = ({ apiKey }) => {
  window.sessionStorage.removeItem(
    `firebase:authUser:${apiKey}:[DEFAULT]`
  )
}

export { readSession, clearSession }