import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.cyan(`
░█▀█░█░░░█▀█░█▀█░█▀█░█░█░█▀▄
░█▀█░█░░░█▀█░█░█░█░█░▄▀▄░█░█
░▀░▀░▀▀▀░▀░▀░▀░▀░▀░▀░▀░▀░▀▀░
`));
console.log(chalk.magentaBright.bold("\n✨ Modified Baileys ✨\n"));
console.log(chalk.whiteBright("Hi, thank you for using my modified Baileys ^-^"));
console.log(chalk.cyan("Telegram: ") + chalk.greenBright("@x_dora_id_error_0"));
console.log(chalk.gray("------------------------------\n"));

fetch('https://raw.githubusercontent.com/alannzxd/xclient/refs/heads/main/information.json')
  .then(response => response.json())
  .then(data => {
    const message = data[0];
    console.log(chalk.yellowBright("🆕 Latest update: ") + chalk.whiteBright("16 - 7 - 2026"));
    console.log(chalk.yellow("📁 Information: ") + chalk.white(message));
    console.log("");
  });

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
