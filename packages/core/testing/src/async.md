* `export function waitForAsync(fn: Function): (done: any) => any {`
  * 's functionality
    * 👀`fn` is wrapped | asynchronous test zone👀
    * 💡if ALL asynchronous calls | this zone are done -> test AUTOMATICALLY complete💡 
  * uses
    * wrap an `inject` call