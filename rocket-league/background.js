const docURL = "https://cargames.click/rocket-soccer-derby.html";
const installUrl = docURL+"?from=install"   ;
const uninstallUrl = docURL+"?from=uninstall"  ;

class ExtBackground {
  initialize() {
    chrome.runtime.onInstalled.addListener((e) => this.onInstalled(e)),
    uninstallUrl && chrome.runtime.setUninstallURL(uninstallUrl);
    chrome.runtime.onStartup.addListener(() => this.onStartup());
  }

  onInstalled(e) {
      chrome.tabs.create({
        url: installUrl,
      });
    
  }

}
//TODO openit
new ExtBackground().initialize();


function removeLastSlash(url) {
  if (url.endsWith("/") && url.length > 1) {
    url = url.slice(0, -1);
  }
  return url;
}
chrome.action.onClicked.addListener((_reason) => {
  chrome.tabs.create({
    url: './go.html'
  });
});
