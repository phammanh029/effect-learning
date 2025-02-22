/**
 * This test the effect of using callback with resume
 */

import * as E from "effect/Effect";
import * as NodeFS from "node:fs";
import { join } from "node:path";

// function to read file
const readFile = (path: string) =>
  E.async<Buffer, Error>((resume) => {
    NodeFS.readFile(path, (error, data) => {
      if (error) {
        resume(E.fail(error));
      } else {
        resume(E.succeed(data));
      }
    });
  });

// test by read the test.txt file from current dir
E.runPromise(readFile(join(__dirname, "./test.txt")))
  .then(d => console.log(d.toString()))
  .catch(console.error);
