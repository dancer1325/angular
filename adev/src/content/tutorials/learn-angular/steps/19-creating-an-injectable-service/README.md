# Creating an injectable service

* goal
  * create `injectable` resources

* Angular Dependency injection (DI)
  * one of the framework's most powerful features
  * allows
    * providing resources | runtime 
  * 👀dependency
    * could be 👀
      * service
      * OTHER resources

* service
  * uses
    * 👀-- interact with -- data and APIs 👀
  * recommendations
    * keep the logic | service

* steps to make a service -- available to be injected by the -- DI system
  * add `@Injectable` decorator | service
    * `providedIn`
      * == scope | resource is available 
      * if == `'root'` -> service is available | ENTIRE application

* see [dependency injection in the Angular docs](../../../../guide/di)