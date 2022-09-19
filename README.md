# Starter kit Next

Next part of the Strapi + Next starter kit.

___


## Install

See the complete documentation of the [Strapi + Next starter kit](https://github.com/Magle-corp/starter-kit-strapi-next).

## Information

<details>
<summary>Environment file system</summary>

In order to extend the environment file system provided by Next we use the dotenv library to benefit from an environment file specific to each desired environment.

All the environment files are present in the _environments_ folder and respect the following nomenclature: `.env.<environment name>`.

They are called specifically when the `ENVIRONMENT` variable is set when building or running the application, example :

```bash
ENVIRONMENT=staging yarn build # Use the .env.staging
ENVIRONMENT=production yarn dev # Use the .env.production
```

Use the _.env_ file if no environment is specified, such as in the development environment.

**List of files using environment variables** :

- _next.config.js_
</details>

<details>
<summary>Application packages list</summary>

| Package                        | dev | Version  | Latest update | Usage                            |
|--------------------------------|-----|----------|---------------|----------------------------------|
| react                          |     | 18.2.0   | 19/09/2022    | React                            |
| react-dom                      |     | 18.2.0   | 19/09/2022    | React dom                        |
| next                           |     | 12.3.0   | 19/09/2022    | Next                             |
| dotenv                         |     | ^16.0.1  | 19/09/2022    | Environment system               |
| graphql-request                |     | ^5.0.0   | 19/09/2022    | Graphql utility                  |
| sharp                          |     | ^0.31.0  | 19/09/2022    | Image optimisation in production |
| styled-components              |     | ^5.3.3   | 19/09/2022    | Style library                    |
| babel-loader                   | X   | ^8.2.3   | 19/09/2022    | Babel                            |
| babel-plugin-styled-components | X   | ^2.0.7   | 19/09/2022    | Babel                            |
| @babel/core                    | X   | ^7.15.8  | 19/09/2022    | Babel                            |
| @babel/preset-env              | X   | ^18.7.13 | 19/09/2022    | Babel                            |
| @types/node                    | X   | ^7.16.8  | 19/09/2022    | Typescript                       |
| @types/react                   | X   | ^18.0.0  | 19/09/2022    | Typescript                       |
| @types/styled-components       | X   | ^5.1.15  | 19/09/2022    | Typescript                       |
| ts-node                        | X   | ^10.4.0  | 19/09/2022    | Typescript                       |
| typescript                     | X   | 4.8.3    | 19/09/2022    | Typescript                       |
| eslint                         | X   | 8.23.1   | 19/09/2022    | ESLint                           |
| eslint-config-next             | X   | 12.3.0   | 19/09/2022    | ESLint                           |
| eslint-config-prettier         | X   | ^8.3.0   | 19/09/2022    | ESLint                           |
| graphql                        | X   | ^16.5.0  | 19/09/2022    | Graphql                          |
| husky                          | X   | ^8.0.1   | 19/09/2022    | Pre-commit sniffer               |
| prettier                       | X   | ^2.4.1   | 19/09/2022    | Code style                       |
</details>