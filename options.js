// Default settings
const DEFAULT_SETTINGS = {
  enabled: true,
  debugPrint: false
};

// Load settings from storage
function loadSettings() {
  chrome.storage.sync.get(DEFAULT_SETTINGS, (settings) => {
    document.getElementById('enabled').checked = settings.enabled;
    document.getElementById('debugPrint').checked = settings.debugPrint;
  });
}

// Save settings to storage
function saveSettings() {
  const settings = {
    enabled: document.getElementById('enabled').checked,
    debugPrint: document.getElementById('debugPrint').checked
  };

  chrome.storage.sync.set(settings, () => {
    // Show status message
    const status = document.getElementById('status');
    status.style.display = 'inline';
    setTimeout(() => {
      status.style.display = 'none';
    }, 2000);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  document.getElementById('save').addEventListener('click', saveSettings);
});
