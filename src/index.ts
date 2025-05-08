// Problem one
function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}
// console.log(formatString("Hello"));    

// Problem two
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
const topRatted = filterByRating(books);
// console.log(topRatted);

// Problem three
function concatenateArrays<T>(...arrays: T[][]): T[]{
    return [].concat(...arrays);
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem four
class Vehicle {
   private make: string;
   private year:number;

   constructor (make: string, year: number) {
         this.make = make;
         this.year = year;
   }
   public getInfo():string {
     return `Make: ${this.make}, Year: ${this.year}`;
   }
}

class Car extends Vehicle {
    private modal: string;

    constructor (make: string, year: number, modal: string){
        super(make, year);
        this.modal = modal;
    }
    public getModel(): string {
        return `Modal: ${this.modal}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());