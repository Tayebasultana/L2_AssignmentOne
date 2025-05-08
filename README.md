# Difference between  `any`, `unknown`, and `never` Types in TypeScript:

## 🧩 Introduction

TypeScript is a popular programming language that builds on JavaScript. It adds **type safety**, which means it can help catch errors before your code runs.

In this guide, we’ll explore three special types in TypeScript:  
**`any`**, **`unknown`**, and **`never`**. These types help developers write safer and cleaner code. Let’s take a look at them one by one with simple examples!

## 🛑 `any` — No Type Safety

When you use the `any` type, **TypeScript allows you to do anything** with the variable. But the problem is — it won't check if your code is correct, which can cause **runtime errors** (errors while your program is running).

### 📝 Example:
You can assign anything to an `any` type variable — a string, a number, or even a function.  
But TypeScript will not warn you if you make a mistake — so it's risky!

📌 **Keyword**: Use `any` only if you have no other choice. It removes the benefits of TypeScript.

## ✅ `unknown` — Safe and Flexible

`unknown` is similar to `any` because it can store anything.  
However, **the big difference** is that you **must check the type** before using it, which makes it a safer option.

### 📝 Example:
If you get some data from an API, and you're not sure what type it is, use `unknown`.  
Then check its type (e.g., string, number, object) before you use it.

📌 **Keyword**: `unknown` is a **safer alternative** to `any`.

## 🔥 `never` — No Return Value

The `never` type is used to represent values that **never occur**. This happens when a function **throws an error** or runs **forever** (e.g., infinite loops).

### 📝 Example:
A function that always throws an error should return `never`.

📌 **Keyword**: `never` is used for **unreachable code** or **error functions**.

## 🛠️ Summary Table

| Type      | What it Means                        | Safe to Use? | When to Use                              |
| --------- | ------------------------------------ | ------------ | ---------------------------------------- |
| `any`     | Any type, no type checking           | ❌ No         | Last option, avoid if possible           |
| `unknown` | Any type, but type check is required | ✅ Yes        | When the type is not known at first      |
| `never`   | No value will ever be returned       | ✅ Yes        | For functions that throw or loop forever |

## 📌 Final Thoughts

TypeScript provides us with powerful tools to write better code. By choosing the right types, you can:

* Prevent bugs 🐞  
* Make your code easier to understand ✨  
* Work better with your team 🤝

✅ Use `unknown` when you’re not sure about the type.  
⚠️ Avoid `any` unless absolutely necessary.  
🔥 Use `never` when a function will never return.

---

