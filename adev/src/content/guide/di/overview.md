* "DI"
  * == design pattern + mechanism
    * mechanism / allows, about app's parts,
      * create them
      * deliver them -- to -- OTHER app's parts/ require them
  * see [Essentials](../../introduction/essentials/dependency-injection)
  * _Example:_ HTTP service / make backend calls -- can be -- used | OTHER part 
  * benefits
    * increase flexibility & modularity
  * use cases
    * | 
      * services
        * 👀MOST typical one 👀
      * values (_Example:_ strings or functions)
  * injector 
    * 👀created AUTOMATICALLY | bootstrap 👀
    * instantiates -- via a configured provider of the service or value -- dependencies | needed
