# Demo issue with splitChunks

Demonstrates issue where using `splitChunks` causes library objects for entry items to be undefined.

To start:
* Check out branch locally with git clone.
* Run `npm i`
* Run `npm start`
* Load http://localhost:8080/ in browser

When you load this you'll see nothing on the screen and some messaging in the console. You can also look at the value of `components` (library name) in the console and see something like `{tester: undefined, app: undefined}`.

If you check out the branch named "working" you can see an example where `splitChunks` has been removed and things work as expected.
