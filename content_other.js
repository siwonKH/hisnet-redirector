if (!window.self.opener) {
    chrome.runtime.sendMessage({ action: "saveLastUrlTmp", url: window.location.href });
}
