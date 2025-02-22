/**
 * Handle error wit custom error, using tryPromise
 */
import * as E from "effect/Effect";

const safeParse = (input: string) => E.tryPromise(() => JSON.parse(input));

// test should throw an error of unknown exception
E.runPromise(safeParse('{"a": 1')).catch(console.error);

// run with custom error
const parseWithCustomError = (input: string) =>
  E.tryPromise({
    try: () => JSON.parse(input),
    catch: (error) =>
      new Error(`Failed to parse JSON: ${(error as Error).message}`),
  });

// test failure case (missing closing bracket), should throw an error with custom error
E.runPromise(parseWithCustomError('{"a": 1')).catch(console.error);
