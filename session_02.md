## Base 2, 8, and 16
----

Today's computers work and function just like yesterday's computers in that they all function based on a 2 state system.  The states are **on** and **off**.  These two states make up what we call Base 2 mathematics.  

Most mathmatics classes that are taught in school use the **Natural** Base 10.  In the natural base 10 we have "10" characters to represent different types of numbers.  These are also known as "symbols". 

The symbols we have to represent a Base 10 numbering system are...
|Symbol|Representation|
|-|:-:|
|0|zero|
|1|one|
|2|two|
|3|three|
|4|four|
|5|five|
|6|six|
|7|seven|
|8|eight|
|9|nine|

```Note that every base always starts at zero.  This is called a 'zero index' numbering system.``` 

**Zero Index**: Means that when we go to number something instead of starting with "1" with start with "0" and count from there.  So for example if we wanted to count to 10 in an zero index system we would go, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.  We do not say get to "10" because we already have 10 symbols present.  This is a very important distinction because some programming languages use index zero and some do not. 

In mathematics, this way of counting is called **Zero based numbering**.  Zero based index is a computer science terminology and an important distinction when implementing and interacting with certain data structures.  This will be explained later in this document. 

Note how we do not have a symbol for ten (10).  It is a **combination** of 1 and 0 symbol. Another example 19 is represented by two symbols 1 and 9.   

The **pattern** to recognize here is that we have **10** symbols to represent all the numbers in a **Base10** system.  As you can see, Base 10 gets its name from the 10 symbols it has to represent all its numbers.  

Another common base system is **Base2**.  It has only two symbols to represent all the numbers in its system.  

|Symbol|Representation|
|-|:-:|
|0|zero|
|1|one|

Any base system regardless of how many symbols it has can represent and can contain any number from any other base. For example, a number in Base2 which might be **10011** can be represented in Base<sub>10</sub> as **19**

The pattern to recognize here is the position of the symbol from left to right. For example, the number 312 in **base10** can be represented in parts
|3 x 10<sup>2</sup>|2 x 10<sup>1</sup>|1 x 10<sup>0</sup>|
|-|:-:|:-:|
|3|2|1|

so that calculation comes out to be

|3 x 100|2 x 10|1 x 1|
|-|:-:|:-:|
|300|20|1|
which equals **321** or our original number!

Notice the pattern is [number] x [base]<sup>[exponent]</sup>.  This pattern is for **every** base system you can image up to infinity.  

A Base 2 example of the concept using Base<sub>10</sub> **19** as an example...

```Note that we usually group binary in groups of 4 numbers: 0000 0000 0000 0000 and so on. Further in this document will include an explaination as to why we group this way.```

|1 x 2<sup>4</sup>||0 x 2<sup>3</sup>|0 x 2<sup>2</sup>|1 x 2<sup>1</sup>|1 x 2<sup>0</sup>|
|-|:-:|:-:|:-:|:-:|:-:|
|1| |0|0|1|1|
|16| |0|0|2|1|

if we add the bottom row together (16 + 0 + 0 + 2 + 1) we get **19** which was the number we wanted to represent in Base<sub>2</sub>.  Note how many more symbols are required to represent the number 19.  The smaller the base, the more symbols are required to represent the number of a higher base.  So for example, a Base<sub>2</sub> system requires 5 symbols to represent the number **19** in Base<sub>10</sub>.

Base 16 has **16 Symbols** to represent its numbers.  Those are 0-9 and A-F or 10-15.  You can apply the same exponential system to Base<sub>16</sub> like we did in previous examples.  Lets take a Base<sub>16</sub> number and convert it to Base<sub>10</sub>. 

The number we will be using is 2A.  Generally, Base16 numbers are expressed as such 0x2A in certain programming languages such as C/C++.  We will represent our Base16 numbers in the mathematical convention for this example which is **2A**.  The Base<sub>10</sub> number we will use is **42**. 

|2|A|
|-|:-:|
|2 x 16<sup>1</sup>|A x 16<sup>0<sup>|
|32|10|

```Remeber, **A** represents the number 10 in a Base```<sub>```10```</sub> ```system.```

Adding 32 + 10 equals 42.  


## Computer Memory
----

There are two primary types of memory that a computer uses: RAM and HDD/SSD.  Memory to a computer is represented in a Base<sub>2</sub> system which is also called **binary**.  Binary or "Bi" meaning two or composed of two things.  This system is perfect for a computer because it represents 2 different states.  **On** state and **Off** state or 1 and 0.  A computer can only be in 1 of these 2 states at any given time.  Its these combinations of on and off that makes computers perform tasks, compute numbers, and "remember" things.  

Everything you do and see on a computer is always translated into "0"s and "1"s.   

RAM: **R**andom **A**ccess **M**emory, is considered volatile, non-longterm memory storage.  It is volatile because if the computer / device looses electricity, the values stored in RAM are immediately reset to "0" or the **off** position.  

HDD/SSD:  Although this comes in many shapes and sizes, this type of storage is considered long term non-volatile storage.  If a computer looses electricity, data stored (0s and 1s) in this medium is saved and can be re-read once the computer has electricity again.  

Both RAM and HDD/SSD store their data in large, sequenced blocks of 1s and 0s.  By combining these 1s and 0s we can represent almost anything such as images, music, 3D objects, text on the screen, colors, etc. 

#### Example of Memory

Lets say that you have a mobile device that has several apps installed onto the device. Your phone has 2GB of RAM and 16GB of SSD/HDD storage.  The apps are stored inside the HDD/SSD or long term storage.  You know this is true because you can turn off your mobile phone and turn it back on again and all your apps are still there.  

``` Note that GB and MB stand for GigaByte and MegaByte.  These are forms of measurments in computer science.```

#### Computer Units of Storage
|Unit|Equivalent Bytes|
|-|:-:|
|1 kilobyte (KB)|1,024 bytes|
|1 megabyte (MB)|1,048,576 bytes|
|1 gigabyte (GB)|1,073,741,824 bytes|
|1 terabyte (TB)|1,099,511,627,776 bytes|

Note the pattern here, all bytes are Powers of 2.  1, 2, 4, 8, 16, 32 and so on. This is a consequence of the computer being in a Base<sub>2</sub> numbering system.

**Bit**: short for binary digit.  A single binary number being either 0 or 1. A bit is the smallest unit of measurement.

**Byte**: is a group of 4 **Bits**. Such as 0000 or 0011 or 1010 or 1011.  Any group of 4 bits = 1 byte. 

1 byte can represent any Base<sub>10</sub> number between 0 - 15. So for example 15 is equal to 1111 in binary. Larger numbers require more bytes to represent them. 

There are potentially billions of 1s and 0s on your phone right now and the computer is able to quickly parse through and interpret these numbers!  Its quite amazing. 

## Basic / Primitive Types in Javascript and other languages
----

### Primitives in Javascript

4 Primary Primitive types
|type|example|
|-|:-:|
|string|"hello world"|
|number|1 or 32.234|
|boolean|true or false|
|undefined|nothing or no real value|

There are 2 complex types in Javascript
|type|example|
|-|:-:|
|object|[1, 2, 3, 4]|
|function|myFunc()|

In javascript, everything except primitive types are considered "first class citizens".  This means that they are objects.  

In other languages however, there are more primitive types

### Primitives in C / C++
There are only 4 simple arithmetic type specifiers in C which are *char*, *int*, *float*, and *double*

**char**: represents a string or sequence of characters such as "thisIsAnExample". 

**int**: any whole number such as 11, 42, or 29348238423.

**float**: any decimal number such as 11.2345, 2.12, or 1.290009991.  This is also referred to as "single-precision" floating-point type. 

**double**: any decimal number such as 11.2345, 2.12, or 1.290009991. This is also referred to as a "double-precision" floating-point type. It is capable of representing very small numbers compared to a float.  It is also considered more accurate than a float when performing arithmetic operations. 

Most all programming languages support a common set of primitives.  Almost every languages support at least an integer and a float as these are considered the most basic data types. 

### Other data types and structures

**array**: an ordered sequence of some data type. Example: [ 0, 1, 5, 14 ] is an array of **integers** or ints. 

## Functions
----
## Classes
### Methods / Functions
### Function Parameters
----
## Conditional Logic
----
### The If Statement

