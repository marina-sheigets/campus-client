const useYearsRange = (startYear = 1950) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        new Array(currentYear - startYear),
        (val, index) => startYear + index
    );
    return years;
};
export default useYearsRange;
