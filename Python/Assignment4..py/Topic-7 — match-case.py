#Topic-7 — match-case
##50
num=int(input("Enter number:"))
if num==1:
    print("Add")
elif num==2:
    print("View")
elif num==3:
    print("Update")
elif num==4:
    print("Delete")
else:
    print("Invalid Choice")
    
    
##51
day = int(input("Enter day number: "))
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")
    case _:
        print("Invalid Day")
        
##52
num1=float(input("Enter first number:"))
num2=float(input("Enter second number:"))
operator=input("Enter operator:")
match operator:
    case"+":
        print(num1+num2)
    case "-":
        print(num1 - num2)

    case "*":
        print(num1 * num2)

    case "/":
        print(num1 / num2)

    case _:
        print("Invalid Operator")
        
##53
color=input("Enter Signal Color:")
match color:
    case "red":
        print("Stop")
    case "yellow":
        print("Wait")
    case "Green":
        print("Go")
    case _:
        print("Invalid Signal")
        
##54
grade=input("Enter grade:")
match grade:
    case "A":
        print("Excellent Performance")
    case "B":
        print("Very Good Performance")
    case "C":
        print("Good Performance")
    case "D":
        print("Needs Improvement")
    case _:
        print("Failed")
        
##55
service=int(input("Take a service code"))
match service:
    case 1:
        print("Check Balance")
    case 2:
        print("Recharge")
    case 3:
        print("Data Usage")
    case 4:
        print("Customer Support")
    case _:
        print("Invalid Service")
        
##56
month=int(input("Enter month number:"))
match month:
    case 1:
        print("January")
    case 2:
        print("February")
    case 3:
        print("March")
    case 4:
        print("April")
    case 5:
        print("May")
    case 6:
        print("June")
    case 7:
        print("July")
    case 8:
        print("August")
    case 9:
        print("September")
    case 10:
        print("October")
    case 11:
        print("November")
    case 12:
        print("December")
    case _:
        print("Invalid Month")
        
##57
file=input("enter file extension:")
match file:
    case "py":
        print("Python File")
    case "txt":
        print("Text File")
    case "pdf":
        print("PDF File")
    case "jpg":
        print("image file")
    case _:
        print("Unknown File Type")
        
##58
student_id = input("Enter Student ID: ")

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll_number = parts[3]

if branch == "CSE":
    print("CSE Student")
else:
    print("Non-CSE Student")


##59
email=input("Enter Email address:")
parts = email.split("@")
user= parts[0]
mail=parts[1]
if mail=="gmail.com":
    print("Gmail user")
else:
    print("Other email provider")
    
##60
full_name = input("Enter full name: ")
name = full_name.split()
username = name[0] + "." + name[2]
if "." in username:
    print("Valid Username Format")
else:
    print("Invalid Username Format")
    
##61
number = int(input("Enter a positive integer: "))

if number < 10:
    print("One Digit")
elif number < 100:
    print("Two Digits")
elif number < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")
    
##62
price = float(input("Enter price: "))
quantity = int(input("Enter quantity: "))

subtotal = price * quantity

if subtotal >= 5000:
    discount_percent = 20
elif subtotal >= 2000:
    discount_percent = 10
else:
    discount_percent = 0

discount = subtotal * discount_percent / 100
final_amount = subtotal - discount

print(f"Subtotal: {subtotal:.0f}")
print(f"Discount: {discount_percent}%")
print(f"Final: {final_amount:.2f}")

##63
units = int(input("Enter units consumed: "))

if units <= 100:
    rate = 5
elif units <= 300:
    rate = 7
else:
    rate = 10

bill = units * rate

print(f"Units: {units}")
print(f"Rate: ₹{rate}")
print(f"Bill: ₹{bill}")

##64
balance = 10000

print("1. Check Balance")
print("2. Deposit")
print("3. Withdraw")
print("4. Exit")

choice = int(input("Enter your choice: "))

match choice:
    case 1:
        print(f"Balance: {balance}")

    case 2:
        amount = int(input("Enter deposit amount: "))
        balance = balance + amount
        print(f"Deposit Successful, Balance: {balance}")

    case 3:
        amount = int(input("Enter withdrawal amount: "))

        if amount <= balance:
            balance = balance - amount
            print(f"Withdrawal Successful, Balance: {balance}")
        else:
            print("Insufficient Balance")

    case 4:
        print("Exit")

    case _:
        print("Invalid Choice")
        
##65
choice = int(input("Enter your choice: "))
quantity = int(input("Enter quantity: "))

match choice:
    case 1:
        price = 250
        item = "Pizza"

    case 2:
        price = 150
        item = "Burger"

    case 3:
        price = 200
        item = "Pasta"

    case 4:
        price = 120
        item = "Sandwich"

    case _:
        print("Invalid Choice")
        price = 0
        item = "Invalid"

total = price * quantity

if total >= 500:
    discount = total * 10 / 100
else:
    discount = 0

final_amount = total - discount

if choice >= 1 and choice <= 4:
    print(f"Item: {item}")
    print(f"Total: {total}")
    print(f"Discount: {discount:.2f}")
    print(f"Final: {final_amount:.2f}")
    
##66
marks1 = float(input("Enter marks of subject 1: "))
marks2 = float(input("Enter marks of subject 2: "))
marks3 = float(input("Enter marks of subject 3: "))
attendance = float(input("Enter attendance: "))

total = marks1 + marks2 + marks3
average = total / 3

if attendance >= 75:

    if average >= 90:
        print("Outstanding")

    elif average >= 75:
        print("Very Good")

    elif average >= 60:
        print("Good")

    elif average >= 40:
        print("Pass")

    else:
        print("Fail")

else:
    print("Not Eligible")
    
##67
distance = float(input("Enter distance in km: "))
ride_type = input("Enter ride type: ")

match ride_type:
    case "normal":
        rate = 15

    case "premium":
        rate = 25

    case _:
        print("Invalid Ride Type")
        rate = 0

fare = distance * rate

if distance > 20:
    surcharge = fare * 10 / 100
else:
    surcharge = 0

final_fare = fare + surcharge

if rate != 0:
    print(f"Fare: {final_fare:.2f}")
    
##68
score = int(input("Enter entrance score: "))
percentage = float(input("Enter 12th percentage: "))
category = input("Enter category: ")

match category:

    case "general":
        if score >= 80:
            if percentage >= 75:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case "obc":
        if score >= 70:
            if percentage >= 70:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case "sc":
        if score >= 60:
            if percentage >= 60:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")

    case _:
        print("Invalid Category")



           
        
        
