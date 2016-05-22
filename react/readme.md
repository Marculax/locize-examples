# React TodoMVC Example

The react locize TodoMVC uses:

- [locize.js](https://github.com/locize/locize) as bundled i18next (backend and language detection)
- [react-i18next](https://github.com/i18next/react-i18next) to use i18next in react

The sample uses our project as default. You can change the settings [here](https://github.com/locize/locize-examples/blob/master/react/js/i18n.js) to bind your own project for testing.

## Run the example

install node modules

```sh
npm install
```

Serve the root directory of this repository, you can use [http-server](https://github.com/indexzero/http-server):

```sh
npm install http-server -g
http-server -s -p 9000
```

open [http://localhost:9000/](http://localhost:9000/) or [http://localhost:9000/?lng=de](http://localhost:9000/?lng=de)
