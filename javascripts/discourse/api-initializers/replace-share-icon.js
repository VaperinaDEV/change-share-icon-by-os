import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "replace-share-icon",
  
  initialize(container) {
    withPluginApi("0.8.7", (api) => {
      this.capabilities = container.lookup("capabilities:main");
      const isAndroid = this.capabilities.isAndroid;

      if (isAndroid) {
        api.replaceIcon("d-post-share", "share-nodes");
        api.replaceIcon("d-topic-share", "share-nodes");
      } else {
        api.replaceIcon("d-post-share", "arrow-up-from-bracket");
        api.replaceIcon("d-topic-share", "arrow-up-from-bracket");
      }
    });
  },
};
