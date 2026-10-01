#Topic-3 — if-elif-else
##19
marks=int(input("Enter your marks:"))
if 90<=marks<=100:
    print("A")
elif 80<=marks<=89:
    print("B")
elif 70<=marks<=79:
    print("C")
elif 60<=marks<=69:
    print("D")
else:
    print("F")
    
##20
temp=int(input("Enter the temperature:"))
if temp>=40:
    print("Very hot")
elif 30<=temp<=39:
    print(" Hot")
elif 20<=temp<=29:
    print("Warm")
else:
    print("Cold")
    
##21
rule=input("Enter the rule:")
if rule=="red":
    print("stop")
elif rule=="yellow":
    print("wait")
elif rule=="green":
    print("go")
else:
    print("Invalid signal")
    
##22
units=int(input("Enter the units consumed:"))
if 0<=units<=100:
    print(" Low Usage")
elif 101<=units<=300:
    print(" Medium Usage")
elif 301<=units<=500:
    print(" High Usage")
else:
    print("Very high usage")
    
##23
age=int(input("Enter your age:"))
if age<5:
    print("Free Ticket")
elif 5<=age<=12:
    print("Child Ticket")
elif 13<=age<=59:
    print("Regular Ticket")
else:
    print("Senior Ticket")
    
##24
BMI=int(input("Enter your BMI:"))
if BMI<18.5:
    print("Underweight")
elif 18.5<=BMI<=24.9:
    print("Normal weight")
elif 25<=BMI<=29.9:
    print("Overweight")
else:
    print("Obese")
    
##25
num=int(input("Enter a number:"))
if num in [1, 3, 5, 7, 8, 10, 12]:
    print("31 days")
elif num in [4,6,9,11]:
    print("30 days")
elif num==2:
    print("28 or 29 days")
else:
    print("Invalid Month")
    
##26
a=int(input("Enter number1:"))
b=int(input("Enter number2:"))
operator=input("Enter operator (+, -, *, /): ")
if operator=="+":
    print(a+b)
elif operator=="-":
    print(a-b)
elif operator=="*":
    print(a*b)
elif operator=="/":
    print(a/b)
else:
    print("Invalid Operator")
    
##27
num=int(input("Enter a number:"))
if num==1:
    print("Monday")
elif num==2:
    print("Tuesday")
elif num==3:
    print("Wednesday")
elif num==4:
    print("Thursday")
elif num==5:
    print("Friday")
elif num==6:
    print("sadurday")
elif num==7:
    print("Sunday")
else:
    print("Invalid day")
    
##28
score=int(input("Enter Score:"))
if score>=90:
    print("Excellent")
elif 75<=score<=89:
    print("Very Good")
elif 60<=score<=74:
    print("Good")
elif 40<=score<=59:
    print("Average")
else:
    print("Needs improvement")
    
