import {createInterface} from 'readline';

export async function checkChangelogBeforePush(): Promise<void> {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.setPrompt(`Check\n./CHANGELOG.md\nand save all fixes. Then press enter`);
    readline.prompt();
    console.info('\n');

    return new Promise((resolve: (value?: string | PromiseLike<any>) => void) => {
        let response: string;

        readline.on('line', userInput => {
            response = userInput;
            readline.close();
        });

        readline.on('close', () => resolve(response));
    });
}
