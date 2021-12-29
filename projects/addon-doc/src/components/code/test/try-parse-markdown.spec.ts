import {tryParseMarkdownCodeBlock} from '../parse-code-block';

describe('tryParseMarkdown', () => {
    const codeSection = '```';

    it('should be correct parse markdown', () => {
        const tsCode = `
import {TuiAvatarModule} from '@taiga-ui/kit';

// ...

@NgModule({
    imports: [
        // ...
        TuiAvatarModule,
    ],
})
export class MyAvatarModule {
}`;

        const htmlCode = `<p>hello world</p>`;

        expect(
            tryParseMarkdownCodeBlock(
                `
${codeSection}ts\n${tsCode}\n${codeSection}

# H1 (will be ignored)

${codeSection}\nContent without type\n${codeSection}

${codeSection}html\n${htmlCode}\n${codeSection}
        `,
            ),
        ).toEqual([
            {
                content: `${tsCode}\n`,
                lang: 'ts',
            },
            {
                content: 'Content without type\n',
                lang: '',
            },
            {
                content: `${htmlCode}\n`,
                lang: 'html',
            },
        ]);
    });

    it('should correct parse plain text', () => {
        const txt = `
// ...

@NgModule({
    imports: [
        // ...
        TuiAvatarModule,
    ],
})
export class MyAvatarModule {
}
`;

        expect(tryParseMarkdownCodeBlock(txt)).toEqual([{lang: null, content: txt}]);
    });

    it('should be correct parse with deep markdown in variable', () => {
        const code = `
${codeSection}ts
const a = "${codeSection}\
#Title\
${codeSection}\
";
${codeSection}
        `;

        expect(tryParseMarkdownCodeBlock(code)).toEqual([
            {
                content: 'const a = "```#Title```";\n',
                lang: 'ts',
            },
        ]);
    });
});
