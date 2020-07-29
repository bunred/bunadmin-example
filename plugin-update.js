const path = require("path");

const savePath = path.resolve(__dirname, "plugins-info.json");
const pluginsPath = path.resolve(
  __dirname,
  "./node_modules/@bunred/bunadmin/plugins"
);

const pluginsInfoArr = require("./plugins-info.json") || [];

const { syncPlugins } = require("@bunred/sync-plugins");

syncPlugins({ savePath, pluginsPath, pluginsInfoArr });
