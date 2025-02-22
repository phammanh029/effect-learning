import * as E from 'effect/Effect';

const safeParse = (input: string) => E.try(() => JSON.parse(input));

// test
E.runPromise(safeParse('{"a": 1}')).then(console.log);
// failure case (missing closing bracket)
E.runPromise(safeParse('{"a": 1')).catch(console.error);