export function notificationPermissionRequest() {
  if (!isNotificationSupported()) return

  if (Notification.permission === 'default') {
    Notification.requestPermission()
  }
}

export function notify(description) {
  if (!isNotificationSupported()) return

  if (Notification.permission === 'granted') {
    showNotification(description)
  }
}

function isNotificationSupported() {
  return 'Notification' in window
}

function showNotification(description) {
  new Notification('Pomodoro', { body: description })
}
