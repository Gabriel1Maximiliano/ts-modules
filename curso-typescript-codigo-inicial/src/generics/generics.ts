

export const printObject = ( argument:any ):any => {
    console.log(argument);
}

export function genericFunction<T>( argument:any):T{
    return argument;
}
export const genericArrowFucntion = <T>( argument:any ):T=>{
    return argument
}