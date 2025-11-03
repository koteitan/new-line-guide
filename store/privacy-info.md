# Privacy Policy for New Line Guide

Last updated: [Date]

## Overview

New Line Guide ("the Extension") is committed to protecting your privacy. This privacy policy explains what data the Extension collects, how it is used, and your rights regarding that data.

## Data Collection

**The Extension does NOT collect, store, or transmit any personal information or browsing data.**

### What Data is Stored Locally

The Extension only stores the following user preferences locally on your device using Chrome's sync storage API:

1. **Extension Enabled/Disabled** (boolean)
   - Purpose: To enable or disable the extension functionality
   - Storage: Chrome sync storage (synced across your Chrome browsers if signed in)

2. **Debug Print Enabled/Disabled** (boolean)
   - Purpose: To enable or disable console logging for debugging
   - Storage: Chrome sync storage (synced across your Chrome browsers if signed in)

### No Third-Party Services

The Extension does NOT use:
- Analytics services
- Tracking scripts
- Third-party APIs
- External servers
- Cookies

## How Data is Used

The locally stored preferences are used solely to:
- Control whether the extension displays the "new line = shift + enter" guide
- Control whether debug messages are printed to the browser console

## Data Sharing

**The Extension does NOT share any data with third parties.** All data stays on your device or is synced through Chrome's built-in sync mechanism if you're signed into Chrome.

## Permissions Explanation

### "storage" Permission
- **Why needed**: To save user preferences (enabled/disabled, debug logging)
- **What it accesses**: Chrome's sync storage API for storing preferences
- **Data stored**: Only the two boolean settings mentioned above

### Host Permissions
The Extension only runs on these specific websites:
- `https://chatgpt.com/*`
- `https://claude.ai/*`

**Why needed**: To detect text input areas and display the guide on these websites.

## Data Security

Since the Extension does not collect or transmit any data, there is no data security risk beyond the standard Chrome sync storage mechanism provided by Google Chrome.

## Changes to Extension Behavior

The Extension:
- Only modifies the visual appearance by adding a small text guide above input fields
- Does not intercept, modify, or access the content you type
- Does not monitor your browsing activity
- Does not access any other websites beyond the two specified domains

## Your Rights

You can:
- Disable the extension at any time from Chrome's extensions page
- Remove the extension completely to delete all stored preferences
- View and modify your preferences from the extension's options page

## Updates to This Privacy Policy

Any changes to this privacy policy will be reflected in the Extension's repository and in the Chrome Web Store listing.

## Contact

If you have questions about this privacy policy or the Extension's behavior, please:
- Open an issue on GitHub: https://github.com/koteitan/new-line-guide
- Contact: [Your email address]

## Compliance

This Extension complies with:
- Chrome Web Store Developer Program Policies
- Limited Use requirements for Chrome extensions
- User Data Privacy requirements

## Open Source

The Extension is open source. You can review the source code at:
https://github.com/koteitan/new-line-guide
