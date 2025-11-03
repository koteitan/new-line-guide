# Chrome Web Store Listing Information

This file contains the information needed to submit the extension to Chrome Web Store.

## Basic Information

### Name
```
New Line Guide
```

### Summary
(Maximum 132 characters)
```
Shows a helpful guide "new line = shift + enter" above text input areas on ChatGPT and Claude websites.
```

### Description
(Detailed description for the store page)
```
# New Line Guide

A simple Chrome extension that displays a helpful guide "new line = shift + enter" above text input areas on ChatGPT (chatgpt.com) and Claude (claude.ai) websites.

## Features

- **Automatic Detection**: Finds both `<textarea>` and `contenteditable` elements
- **Non-intrusive**: Positioned above the input field to avoid interfering with typing
- **Dynamic Detection**: Works with dynamically loaded elements
- **Configurable**: Enable/disable extension and debug logging from options page

## Supported Websites

- ChatGPT (https://chatgpt.com/)
- Claude (https://claude.ai/)

## How to Use

1. Install the extension
2. Visit ChatGPT or Claude website
3. The guide will automatically appear above the text input area
4. Configure settings from the extension's options page (right-click extension icon > Options)

## Privacy

This extension does not collect any personal information or browsing data. All settings are stored locally in your browser using Chrome's sync storage.
```

### Category
```
Productivity
```

### Language
```
English
```

## Visual Assets

### Icon
- **Size**: 128x128px (required), 48x48px, 16x16px
- **Location**: `icons/icon128.png`, `icons/icon48.png`, `icons/icon16.png`
- **Description**: Shift + Enter key design

### Screenshots
(Minimum 1, maximum 5 screenshots. Recommended size: 1280x800px or 640x400px)

1. **Main Screenshot**: `images/sample.png`
   - Shows the guide appearing above text input on Claude website

2. **Installation Screenshot**: `images/how-to-install.png`
   - Shows how to install the extension using Load unpacked button

3. **(Optional) Options Page Screenshot**
   - Shows the extension options page with enabled/debug print settings

### Promotional Images (Optional)

- **Small promotional tile**: 440x280px
- **Large promotional tile**: 920x680px
- **Marquee promotional tile**: 1400x560px

## Privacy Information

### Single Purpose
```
Shows a helpful guide "new line = shift + enter" above text input forms on ChatGPT and Claude websites
```

### Permission Justification

**storage**
```
Used to save user preferences (extension enabled/disabled, debug print on/off) using chrome.storage.sync API. No personal data is collected or transmitted.
```

### Privacy Policy
```
This extension does not collect, store, or transmit any personal information or browsing data.

The only data stored is:
- User preferences (extension enabled/disabled, debug logging on/off) stored locally using Chrome's sync storage

No analytics, tracking, or third-party services are used.
```

### Host Permissions
```
The extension only runs on:
- https://chatgpt.com/*
- https://claude.ai/*

These permissions are required to detect and modify the text input areas on these specific websites.
```

## Developer Information

### Website
```
https://github.com/koteitan/new-line-guide
```

### Support Email
```
[Your email address]
```

## Submission Checklist

- [ ] All required files are included in the zip
- [ ] manifest.json version is updated
- [ ] Icons are created (16x16, 48x48, 128x128)
- [ ] At least one screenshot is ready
- [ ] Privacy policy is complete
- [ ] Single purpose description is clear
- [ ] Permission justifications are provided
- [ ] Extension has been tested on target websites
- [ ] All options and features work correctly
