export const specKeysof = <T>(target: T) => Object.keys(target) as (keyof T)[];