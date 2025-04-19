# The Angular CLI

* == CL interface tool /
  * allows you, about Angular applications, to
    * scaffold,
    * develop,
    * test,
    * deploy,
    * maintain
  * | npm registry, published -- as -- `@angular/cli` package
  * includes `ng`
    * == binary
    * if you use `ng` == use Angular CLI

## CLI command-language syntax

* -- roughly follows -- Unix/POSIX conventions

### Boolean options

* forms
  * `--this-option` & `--no-this-option`
  * `--this-option=false` & `--this-option=true`

### Array options

* forms
  * `--option value1 value2`
  * `--option value1 --option value2`

### Key/value options

* 's forms == array's forms
  * `--define 'KEY_1="value1"' KEY_2=true`
  * `--define 'KEY_1="value1"' --define KEY_2=true`

### Relative paths

* use cases
  * specify files
