* `export function takeUntilDestroyed<T>(destroyRef?: DestroyRef): MonoTypeOperatorFunction<T> {}`
  * 💡if the calling context (component, directive, service, ...) is destroyed -> completes the Observable💡
  * 's input
    * `destroyRef?: DestroyRef`
      * | injection context,
        * 👀NOT required to pass it👀
          * Reason:🧠by default, CURRENT context🧠
      * ⚠️| OUTSIDE injection context,
        * you MUST pass it⚠️
