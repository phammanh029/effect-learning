/**
 * Try with custom error
 */
import * as E from 'effect/Effect';

const safeParse = (input: string) => E.try({
    try: () => JSON.parse(input),
    catch: (error) => new Error(`Failed to parse JSON: ${(error as Error).message}`)
})

// test failure case (missing closing bracket)
E.runPromise(safeParse('{"a": 1')).catch(console.error);
// Output: Error: Failed to parse JSON: Unexpected end of JSON input