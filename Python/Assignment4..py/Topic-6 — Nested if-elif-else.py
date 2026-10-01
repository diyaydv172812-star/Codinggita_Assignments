#Topic-6 — Nested if-elif-else
##44
a=int(input("Enter A"))
b=int(input("Enter B"))
c=int(input("Enter C"))
if a==b==c:
    print("All are Equal")
elif a==b:
    if a>c:
        print("A and B are Equal and Greater")
    else:
        print("C is Greater")
elif a==c:
    if a>b:
        print("A and C are Equal and Greatest")
    else:
        print("B is greatest")
        
        
##45
marks=int(input("Enter marks"))
attendence=int(input("Enter attendence"))
if attendence>=75:
    if marks>=90:
        print("A")
    elif 75<=marks<=89:
        print("B")
    elif 60<=marks<=74:
        print("C")
    elif 40<=marks<=59:
            print("D")
    else:
        print("F")
else:
    print("Not Eligible")
    
##46
salary=int(input("Enter Salary:"))
rating=int(input("Enter performance rating:"))
if salary>=30000:
    if rating==5:
        print("20%")
    elif rating==4:
        print("15%")
    elif rating==3:
        print("10%")
    else:
        print("5%")
else:
    print("Not Eligible for Bonus")
    
##47
age=int(input("Enter age:"))
distance=int(input("Enter Distance:"))
if age<5:
    print("Free")
elif 5<=age<=59:
    print("Regular")
    if distance<=10:
        print("Short Distance")
    else:
        print("Long Distance")
else:
    print("Senior")
    
##48
stock=input("Take product stock:")
payment=input("Enter payment status:")
if stock>0:
    if payment=="paid":
        print("Order Confirmed")
    elif payment=="Payment Pending":
        print("Payment Pending")
    else:
        print(" Invalid Payment Status")
else:
    print("Out of stock")
    
##49
age=int(input("Enter age:"))
ticket=input("Enter ticket type:")
if age<5:
    print("Free Travel")
elif 5<=age<=59:
    print("Regular Passenger")
    if ticket=="AC":
        print("AC Ticket")
    elif ticket=="Sleeper":
        print("Sleeper Ticket")
    else:
        print("Invalid Ticket Type")    
else:
    print("Senior Passenger")
    

