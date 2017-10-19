export function toArray(object: any) {
    if (object instanceof Array) {
        return object;
    }
    return [object];
}