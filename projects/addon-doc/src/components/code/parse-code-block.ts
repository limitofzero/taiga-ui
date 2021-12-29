import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

import {TuiCodeBlock} from './code-block';

export function tryParseMarkdownCodeBlock(text: string): TuiCodeBlock[] {
    const result: TuiCodeBlock[] = [];
    const tokens: Token[] = new MarkdownIt().parse(text, {});

    for (const token of tokens) {
        if (token.tag === 'code') {
            result.push({content: token.content, lang: token.info});
        }
    }

    if (result.length === 0) {
        result.push({lang: null, content: text});
    }

    return result;
}
