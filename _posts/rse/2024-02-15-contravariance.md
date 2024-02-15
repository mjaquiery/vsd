---
layout: post
title:  "Contravariance in TypeScript"
date:   2024-02-15 09:31:00 +0000
category: rse
tags: [research software engineering, typescript, contravariance, code]
image: 
    path: /assets/images/confused-muddled-illogical.jpg
    height: 192
---

It's been a while since I've written a blog post. 
I've finished my DPhil and I've worked as a Research Software Engineer[^1] for a couple of years now.
So if there are any posts in the future, they'll probably be about software engineering rather than research.

A problem I've just got my head around with TypeScript is contravariance.
What is contravariance?
Well, it's responsible for errors like this: 

>Type '(x: string) => string' is not assignable to type '(x: string|number) => void'.
>
>  Types of parameters 'x' and 'x' are incompatible.
> 
>    Type 'string|number' is not assignable to type 'string'.

I found it baffling that TypeScript would complain about `string|number` not being assignable to `string`.
In my head, I'm doing exactly the _opposite_: I'm assigning a more specific type to a more general type.
The reason? Contravariance.

## Technical explanation

Contravariance is a rule that enforces that a function's input type must be a supertype of the input type of the function it's being assigned to.
It's a result of the [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle), which is one of the [SOLID principles](https://en.wikipedia.org/wiki/SOLID).
The Liskov Substitution Principle states that an object should be replaceable with any of its subtypes without breaking the program.

Here, TypeScript is saying that a function that takes a `string|number` as an argument can't be replaced with a function that takes a `string` as an argument.
That's because if we replace the function that takes a `string|number` with a function that takes a `string`, we can't guarantee that the function will work with a `number` argument.
We often run into headaches because we're narrowing a function for a specific use-case, just as we would a variable, but TypeScript doesn't _know_ we'll only ever use it with a `string`.
And, for that matter, nor do we or our colleagues or our future selves.
That's why TypeScript has all these rules in the first place.

In short, whereas variables are covariant (a variable of type `A` can be assigned to a variable of type `A|B`, but not vice-versa),
functions are contravariant (a function of type `A|B` can be assigned to a function of type `A`, but not vice-versa).

## Example

```tsx
type Animal = {
  species: string;
};

const dog: Animal = {
  // You can assign a more specific value to the species property
  species: "Dog"
};

type Person = {
  introduction: (name: string) => void;
};

const alice: Person = {
  introduction: (name: "Alice") => `Hello. My name is ${name}`
  // Type '(name: "Alice") => string' is not assignable to type '(name: string) => void'.
  //  Types of parameters 'name' and 'name' are incompatible.
  //    Type 'string' is not assignable to type '"Alice"'.
};
```

[Playground Link](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggdgSwLYEMA2UC8UDeBYAKCigGdIBjBCEgLlOACcE4BzAbkIF8ODDyB7OCWBQAJvxZ14ydFlyFiAekVQAmvwCuUcijhQUJEghZ6UUJPwbQyESgDME5KADd0G6MH5RgAC2sUqEigwBn5IBlAFUgDqOgAiABEJOK4eQlBIKAAFCAYSQTl8IihmRn5RDXJgBEE6AAo4FCQIOmEmVgBKLAA+F34EUR5uQj5BYX00Rxbs3Py9bCLiUtCKqpq4esbm+JhJ8gg4rsxegAMACQg0NH4AOigAWRAoLegEIIASHBfOE9TCIA)


## Solution 1: Use generic types

```tsx
type Person<T extends string> = {
  introduction: (name: T) => void;
};

const alice: Person<"Alice"> = {
  introduction: (name) => `Hello. My name is ${name}`
};
```

[Playground Link](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggdgSwLYEMA2UC8UDeBYAKCigGdIBjBCEgLlOACcE4BzAbkIF8ODDyB7OCWBQAJvxZ14ydFlyFiAekVQAmvwCuUcijhQUJEghZ6UUJPwbQyESgDME5KADd0G6MH5RgAC2sUqEigwBn5IBlAFUgDqOgAiABEJOK4eQlBIKAAFCAYSQQAeABUoCAAPYAg4USDhJlYAPjl8IihmRn5RDXJgBEE6AAo4FCQIOiKASiwm534EUR5uQj5BYX00RzHs3Py4AriYDfIIOKbsFuJ20K6evrhB4dGpzCaAAwAJCDQ0fgA6KAAsiAoI9oAgggASHCgzivVKEIA)

In this solution, we use a generic type to specify the type of the `name` parameter in the `introduction` function.
This way, we can specify the type of `name` when we create the `Person` object.

## Solution 2: Use a looser type for the function

```tsx
type Person = {
  introduction: (name: never) => void;
};

const alice: Person = {
  introduction: (name: "Alice") => `Hello. My name is ${name}`
};
```
[Playground Link](https://www.typescriptlang.org/play?ssl=16&ssc=3&pln=9&pc=1#code/C4TwDgpgBAggdgSwLYEMA2UC8UDeBYAKCigGdIBjBCEgLlOACcE4BzAbkIF8ODDyB7OCWBQAJvxZ14ydFlyFiAekVQAmvwCuUcijhQUJEghZ6UUJPwbQyESgDME5KADd0G6MH5RgAC2sUqEigwBn5IBlAFUgDqOgAiABEJOK4eQlBIKAAFCAYSQTl8IihmRn5RDXJgBEE6AAo4FCQIOjgIZ1yASiwAPhd+BFEebkI+QWF9NEcW7Nz8vWwi4lLQiqqauHrG5viYKfIIOO7MPoADAAkINDR+ADooAFkQKG3oBCCAEhxXzlPUoA)

In this solution, we use the `never` type for the `name` parameter in the `introduction` function.
Because nothing is assignable to `never` with _covariance_, everything is assignable to `never` with _contravariance_.
This way, we are assigning a more general function to a type that describes a more specific function, which is allowed with contravariance.

## Conclusion

I've found a couple of ways to work around contravariance in TypeScript.
I've used both in my code, and I'm happy with the results.
There are probably other ways to work around contravariance, but these are the ones I've found so far.

If I run into more easily-write-up-able problems like this, I'll write more blog posts about them.

## Notes

[^1]: Research Software Engineering is probably the best job (for me). It's part research, part software engineering. Still hidden away in academia, but I get to spend my time writing code.
