/**
 * Example app that use promise from Effect to see that we can't catch the error if it throw an error
 */
import { error } from 'effect/Console';
import * as E from 'effect/Effect';
const parse = (input: string) => E.promise(() => JSON.parse(input));

// test (with catch all but it couldn't catch the error)
E.runPromise(parse('{"a": 1')).catch((error => console.log(`catch error`, error)));