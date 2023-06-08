type PercentageParser<A extends string> = 
A extends `+${ infer T }%`? ['+',`${T}`,'%'] :
    A extends `-${ infer T }%`? ['-',`${T}`,'%'] :
        A extends `${ infer T }%`? ['',`${T}`,'%'] :
            A extends `+${ infer T }`? ['+',`${T}`,''] :
                A extends `-${ infer T }`? ['-',`${T}`,''] :
                    A extends `${ infer T }`?
                        T extends "%" ? ['','','%'] :
                        T extends "+" ?  ['+','',''] :
                            T extends "-" ?  ['-','',''] :
                                ['',`${T}`,''] : A
//eeeeeeeeeez