chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url.startsWith("https://hisnet.handong.edu/")) {
        chrome.storage.local.remove("last_url_tmp");
        chrome.storage.local.remove("last_url_tmp_tmp");
    } else if (tab.url.startsWith("https://hisnet.handong.edu/login")) {

    } else if (tab.url === "https://hisnet.handong.edu/") {
        chrome.storage.local.get(["last_url_tmp_tmp"], (result) => {
            if (result.last_url_tmp_tmp) {
                chrome.storage.local.set({ last_url_tmp: result.last_url_tmp_tmp });
            }
        });
    } else if (tab.url === "https://hisnet.handong.edu/main.php") {
        chrome.storage.local.get(["last_url_tmp"], (result) => {
            if (result.last_url_tmp) {
                chrome.storage.local.set({ last_url: result.last_url_tmp });
            }
        });
    } else if (tab.url === "https://hisnet.handong.edu/for_student/main.php") {
        chrome.storage.local.get(["last_url"], (result) => {
            if (result.last_url) {
                chrome.tabs.update(tabId, { url: result.last_url });
                chrome.storage.local.remove("last_url");
                chrome.storage.local.remove("last_url_tmp");
                chrome.storage.local.remove("last_url_tmp_tmp");
            }
        });
    } else {
        chrome.storage.local.set({ last_url_tmp_tmp: tab.url });
    }
});
