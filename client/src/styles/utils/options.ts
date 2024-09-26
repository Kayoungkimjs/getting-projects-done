export const formattedOptions = <T>(optionData: T[] | undefined, label: keyof T, value: keyof T): Array<{ value: string; label: string }> => {
    if (!optionData) return [];

    return optionData.slice(1).map((item) => ({
        label: String(item[label]),
        value: String(item[value]),
    }));
};
