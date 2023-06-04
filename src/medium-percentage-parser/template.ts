type PercentageParser<A extends string> = 
A extends '' ? ['','',''] :
A extends `${infer J}${infer K}` ?
  J extends '+' ? ['+',...PercentageParser<K>] : J extends '-' ? ['-',...PercentageParser<K>] :
  J extends '%' ? ['%'] :
  K extends "%" ? [J,...PercentageParser<K>]  :  [`${J}${ PercentageParser<K> }`] : []
// A extends `${infer J}${infer K}` ?
// J extends "%" ? boolean :   K extends "%"? true :PercentageParser<K> : false
// type D = ''
// type Bs<T> = T extends `${infer J}${infer K}` ? true : false
// type C  = Bs<D>