// This generic method is used to map items to their correct type/interface.
// Due to DRY this is a good way to avoid repeat myself and it shortens the code.

export const mapList = <T>(items: T[]): T[] => {
     return new Array<T>(...items);
};
