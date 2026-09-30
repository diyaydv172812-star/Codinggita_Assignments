#Topic-1 — Basic if Statements
##1
num=int(input("Enter a number: "))
if num>0:
    print("Positive number")
else:
    print("No output")
    
##2
age=int(input("Enter your age: "))
if age>=18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
    
##3
temp=int(input("Enter the temperature: "))
if temp>40:
    print("high temperature")
else:
    print("No output")
    
##4
num=int(input("Enter a number:"))
if num%5==0:
    print("Divisible by 5")
else:
    print("no output")
    
##5
amount=int(input("Enter the amount: "))
if amount>=1000:
    print("Free delivery")
else:
    print("No output")
    
##6
chr=input("Enter a character:")
if chr=="A":
    print("You entered A")
else:
    print("No output")

##7
password=input("Enter a password:")
if len(password)>=8:
    print("Strong length")
else:
    print("No output")

##8
digit=int(input("Enter an integer: "))
if 100<=digit<=999:
    print("Three digit number")
else:
    print("Not a three digit number")

