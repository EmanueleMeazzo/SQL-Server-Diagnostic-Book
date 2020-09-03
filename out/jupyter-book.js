'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const os = require("os");
// This function looks in the user's default extensions folder for Azure Data Studio
// to find this extension and its packaged files. If it encounters an error, a
// message will appear in an error window.
const processNotebooks = () => {
    const rootExtensionsFolder = path.normalize(path.join(os.homedir(), '.azuredatastudio', 'extensions'));
    let subExtensionFolder = getFolderContent(rootExtensionsFolder);
    try {
        subExtensionFolder.forEach(folderName => {
            findCorrectFolder(folderName, rootExtensionsFolder);
        });
    }
    catch (e) {
        vscode.window.showErrorMessage("Unable to access " + rootExtensionsFolder + ": " + e.message);
    }
};
// This function is called by processNotebooks to find the correct folder that contains
// this extension. If it is found, then it opens up the book in Azure Data Studio's
// native book viewlet.
const findCorrectFolder = (folderName, rootExtensionsFolder) => {
    let folderExt = path.basename(folderName).toLowerCase();
    if (folderExt.indexOf(('emanuelemeazzo.sql-server-diagnostic-book').toLowerCase()) > -1) {
        let fullFolderPath = path.join(rootExtensionsFolder, folderName);
        vscode.commands.executeCommand('bookTreeView.openBook', fullFolderPath, false);
    }
};
// This is a wrapper to read each subfolder in the extensions folder.
const getFolderContent = (folderPath) => {
    try {
        return fs.readdirSync(folderPath);
    }
    catch (e) {
        vscode.window.showErrorMessage("Unable to access " + folderPath + ": " + e.message);
        return [];
    }
};
// This function is called when you run the command `Launch Book: sql-server-diagnostic-book` from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('launchBook.sql-server-diagnostic-book', () => {
        processNotebooks();
    }));
}
exports.activate = activate;
//# sourceMappingURL=jupyter-book.js.map