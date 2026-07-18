import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "replace-share-icon",
  
  initialize(container) {
    withPluginApi("0.8.7", (api) => {
      this.capabilities = container.lookup("capabilities:main");
      const isAndroid = this.capabilities.isAndroid;
      const isMobileDevice = this.capabilities.isMobileDevice;
      const disableIconChangeOnDesktop = settings.disable_icon_change_on_desktop;

      if (isAndroid) {
        api.replaceIcon("d-post-share", "share-nodes");
        api.replaceIcon("d-topic-share", "share-nodes");
      } else if (!isMobileDevice && disableIconChangeOnDesktop) {
        api.replaceIcon("d-topic-share", "arrow-up-from-bracket");
      } else {
        api.replaceIcon("d-topic-share", "arrow-up-from-bracket");
        api.replaceIcon("d-post-share", "arrow-up-from-bracket");
      }
    });
  },
};
