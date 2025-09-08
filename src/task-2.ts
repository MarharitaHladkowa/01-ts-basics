// Створюємо інтерфейс Product
interface Product {
  readonly id: number; // поле тільки для читання
  title: string;
  description?: string; // необов'язкове поле
}

// Типізуємо змінну product за допомогою інтерфейсу
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
