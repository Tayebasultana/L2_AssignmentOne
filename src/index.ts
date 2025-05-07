// Problem one
function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}

console.log(formatString("Hello"));       