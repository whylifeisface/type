type Chainable<T={}> = {
    // option<K extends string,V>( key: K extends keyof T ? never : K, value: V):
    //     Chainable<Omit<T,K> & Record<K,V>>
    option(key:any):any
    get(): T
  } 

  // function isKey(key: string,obj: object){
  //   return key in obj
  // }
// type A = Omit<{},"name"> & Record<"name",{"1":1}>