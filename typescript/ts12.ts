// 1. Simple Declaration & Optional Parameter
function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

// 2. Rest Parameters for Fines Tally
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

// 3. Default Parameter for Discount
function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

// 4. Anonymous Function & Callback
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);

// 5. Recursion: Factorial (for demonstration)
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 6. Function Overloads for Report Generation
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map(item => item.toString()).join("\n");
}

// 7. Function Type & Alias
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`Hello, ${n}!`);

//challenge
displayMember(1234,'Shrusti','shrusti123@gmail.com');
displayMember(1235,'Ronan');

const sum=calculateFines(5,10,2.5);
console.log(`Sum of the numbers is ${sum}`);

const defaultDiscount=membershipFee(100);
console.log(`Default discount is ${defaultDiscount}`);

const twentyDiscount=membershipFee(100,0.2);//20%=0.2
console.log(`20% discount is ${twentyDiscount}`);

greetVisitor("Alice", vipGreet);
greetVisitor("Alice", consoleGreet);
greetVisitor("Bob", vipGreet);
greetVisitor("Bob", consoleGreet);
const Fact5=factorial(5);
console.log(`Factorial of 5 : ${Fact5}`);

const sampleData = [{ title: "1984" }, { title: "The Hobbit" }];
//text report
const textReport = generateReport(sampleData); 
console.log("Text Report:\n", textReport);
//json report
const jsonReport = generateReport(sampleData, "json");
console.log("JSON Report:\n", jsonReport);