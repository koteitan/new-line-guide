# Chrome Web Store Dashboard - Privacy Information

This file contains the information to input in the Privacy tab of Chrome Web Store Developer Dashboard.

---

## 1. Single Purpose (単一用途)

```
Shows a helpful guide "new line = shift + enter" above text input forms on ChatGPT and Claude websites
```

---

## 2. Permission Justification - storage (storage 権限が必要な理由)

```
Used to save user preferences (extension enabled/disabled, debug logging on/off) using chrome.storage.sync API. No personal data is collected or transmitted.
```

---

## 3. Host Permissions Justification (ホスト権限が必要な理由)

```
The extension only runs on https://chatgpt.com/* and https://claude.ai/* to detect text input areas and display the guide on these specific websites. No other websites are accessed.
```

---

## 4. Do you use remote code? (リモートコードを使用していますか？)

```
No
```

---

## 5. Data Usage (データ使用)

### What user data do you collect?

**All categories: NO (すべて「いいえ」)**

- ❌ Personally identifiable information (個人を特定できる情報)
- ❌ Health information (健康に関する情報)
- ❌ Financial and payment information (財務状況や支払いに関する情報)
- ❌ Authentication information (認証に関する情報)
- ❌ Personal communications (個人的コミュニケーション)
- ❌ Location (位置情報)
- ❌ Web history (ウェブ履歴)
- ❌ User activity (ユーザーのアクティビティ)
- ❌ Website content (ウェブサイトのコンテンツ)

### Explanation:

```
This extension does not collect any user data. It only stores user preferences (enabled/disabled, debug logging on/off) locally using Chrome's sync storage. No personal information, browsing data, or website content is collected, stored, or transmitted.
```

---

## Additional Privacy Information

- **No analytics or tracking**: This extension does not use any analytics, tracking, or third-party services
- **No data transmission**: All data stays on the user's device
- **Open source**: Source code is available at https://github.com/koteitan/new-line-guide
- **No advertisements**: This extension does not display any advertisements
