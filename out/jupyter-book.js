'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
// This function is called when you run the command `Launch Book: sql-server-diagnostic-book` from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('launchBook.sql-server-diagnostic-book', () => {
        vscode.commands.executeCommand('bookTreeView.openBook', context.extensionPath, false);
    }));
}
exports.activate = activate;
//# sourceMappingURL=jupyter-book.js.map