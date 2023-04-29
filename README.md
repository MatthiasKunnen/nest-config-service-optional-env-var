# Problems: Nestjs config service with optional environment variables


## Return value from `ConfigService.get` is string `undefined`
When the validate function returns an object where a key, e.g. `OPT`, is `undefined`, [`assignVariablesToProcess`](https://github.com/nestjs/config/blob/d368ed12dee2be35e9df84c078df316aa9a54b4a/lib/config.module.ts#L194-L203) will assign `undefined` to `process.env.OPT` which will stringify it (see <https://nodejs.org/api/process.html#processenv>). This results in `ConfigService.get` returning `process.env.OPT` which now has the value `'undefined'`.

### Reproduce
`yarn run start` and observe the log.

## Return type from `ConfigService<EnvironmentVariables, true>.get` excludes undefined
The second generic parameter (`WasValidated`) changes the return value of `ConfigService.get`. If `true`, it removes `undefined` from the return type. If `false`, it adds `undefined`. The problem here is that a value could be both validated and `undefined`. Observe the TypeScript return type of `optValue` in `main.ts`. 
