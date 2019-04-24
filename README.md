# frontend

## Project setup

### Install JAVA

Install [JAVA JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)

For windows OS add variable to path.
  Edit **path**
  1. Press `win+r`.
  2. Enter `sysdm.cpl`.
  3. Go to `Advanced` tab.
  4. Open `Environment Variables`.
  5. Append string `C:\Program Files\Java\{current jdk version}\bin` to `path` variable.


### Install dependencies

```bath
yarn install
```

### Compiles and hot-reloads for development

```bath
yarn run serve
```

### Compiles and minifies for production

```bath
yarn run build
```

### Run all tests

```bath
yarn test
```

### Run e2e tests

```bath
yarn test:e2e
```

### Run unit tests and update coverage

```bath
yarn test:unit
```

### Update components snapshot

```bath
yarn test:jest-update
```

### Jest clear cache

```bath
yarn test:jest-clear
```

### Lints. Get issues

```bath
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
