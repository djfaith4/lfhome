const DARK_MODE_ENABLED = 'darkModeEnabled'

export function isDarkModeEnabled(): boolean {
  return !!JSON.parse(window.localStorage.getItem(DARK_MODE_ENABLED) ?? 'false')
}

export function setDarkModeEnabled(darkModeEnabled: boolean) {
  window.localStorage.setItem(
    DARK_MODE_ENABLED,
    JSON.stringify(darkModeEnabled)
  )
}
