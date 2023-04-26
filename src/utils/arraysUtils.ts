export const checkArraysEqual = (array1: string[], array2: string[]) => {
    array1 = array1.filter((elem) => elem.length);
    array2 = array2.filter((elem) => elem.length);

    array1.sort((a, b) => a.localeCompare(b));
    array2.sort((a, b) => a.localeCompare(b));

    let arraysAreEqual = true;
    if (array1.length !== array2.length) {
        arraysAreEqual = false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                arraysAreEqual = false;
                break;
            }
        }
    }
    return arraysAreEqual;
};
