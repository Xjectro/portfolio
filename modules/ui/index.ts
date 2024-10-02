import { defineNuxtModule, addComponentsDir } from "@nuxt/kit";
import fs from "fs";

export default defineNuxtModule({
  meta: {
    name: "ui",
    configKey: "ui",
  },
  setup(options, nuxt) {
    for (const dir of fs.readdirSync(__dirname + "/components")) {
      addComponentsDir({
        path: `${__dirname}/components/${dir}`,
        pathPrefix: true,
      });
    }

    nuxt.hook("ready", () => {
      console.info(`Using Ui Module from ~/modules/ui`);
    });
  },
});
