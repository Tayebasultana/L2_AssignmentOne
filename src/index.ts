


function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}
// console.log(formatString("Hello"));    




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




function concatenateArrays<T>(...arrays: T[][]): T[]{
    return [].concat(...arrays);
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));




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
// console.log(myCar.getInfo());
// console.log(myCar.getModel());




function processValue(value: string | number): number {
    if (typeof value === "string"){
        return value.length;
    } else {
        return value * 2;
    }
}
// console.log(processValue("Hello typescript"));




interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

  let maxProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    }
  }

  return maxProduct;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
//   console.log(getMostExpensiveProduct(products));  




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
  }
//   console.log(getDayType(Day.Wednesday));




async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error ("Negative number not allowed");
    }
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve( n * n );
        }, 1000);
    });
}
// squareAsync(4)
// .then(console.log)
// .catch(console.error);