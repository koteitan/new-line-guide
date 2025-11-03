# New Line Guide

![Sample screenshot](images/sample.png)

A Chrome extension that displays a helpful guide "new line = shift + enter" above text input areas on ChatGPT and Claude websites.

## 1. How to Install

### Install as an unpacked extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle switch in the top right corner)
3. Click **Load unpacked** button
4. Select the directory containing this extension:
   - If using WSL: `\\wsl$\Ubuntu\home\YOUR_USERNAME\code\new-line-guide`
   - If copied to Windows: `C:\extensions\new-line-guide` (or your chosen location)
5. The extension will be loaded and activated

### Using the Makefile (for WSL users)

If you're using WSL, you can use the provided Makefile to copy files to Windows:

```bash
make install
```

This will copy the extension files to `C:\extensions\new-line-guide`.

## 2. Specification

### What it does

- **Detects input areas**: Automatically finds both `<textarea>` and `contenteditable` elements
- **Displays guide**: Shows "new line = shift + enter" above the input area
- **Non-intrusive**: Positioned above the input field to avoid interfering with typing
- **Dynamic detection**: Works with dynamically loaded elements using IntersectionObserver and MutationObserver
- **Smart positioning**: Avoids overflow containers to ensure visibility
- **Dark mode support**: Automatically adapts to light/dark color schemes

### Supported websites

- ChatGPT (https://chatgpt.com/)
- Claude (https://claude.ai/)

### Technical details

- **Version**: 1.0.1
- **Positioning**: Absolute positioning at `top: -32px` relative to parent container
- **Font size**: 12px
- **Detection**: Searches up to 8 parent levels to find suitable container without overflow
- **Visibility check**: Only adds guide to visible elements (width > 100px, height > 30px)

### Files

- `manifest.json` - Chrome extension configuration
- `content.js` - Main content script for detecting and adding guides
- `styles.css` - Styling for the guide element
- `Makefile` - Installation helper for WSL users

## License

MIT License
