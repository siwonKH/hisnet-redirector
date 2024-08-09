chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setLastUrl") {
        chrome.storage.local.get(["last_url_tmp"], (result) => {
            if (result.last_url_tmp) {
                chrome.storage.local.set({ last_url: result.last_url_tmp });
            }
        });
    } else if (message.action === "updateTab") {
        chrome.storage.local.get(['last_time', 'last_url'], (result) => {
            const timeDifference = (new Date().getTime() - result.last_time) / 1000;

            if (timeDifference <= 3600 && result.last_url) {
                chrome.tabs.update(sender.tab.id, { url: result.last_url });
            }
        });
        chrome.storage.local.remove(["last_url", "last_url_tmp"]);
    } else if (message.action === "saveLastUrlTmp") {
        chrome.storage.local.set({
            last_url_tmp: message.url,
            last_time: new Date().getTime()
        });
    }
});
