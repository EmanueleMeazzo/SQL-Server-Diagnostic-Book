'use strict';

import * as vscode from 'vscode';
import * as azdata from 'azdata';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

// This function is called when you run the command `Launch Book: sql-server-diagnostic-book` from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('launchBook.sql-server-diagnostic-book', () => {
        vscode.commands.executeCommand('bookTreeView.openBook', context.extensionPath, false);
    }));
}
