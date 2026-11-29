#1
Name: Riya
Age: 19
Name: Aman
Age: 20

#2
Answer: 20
12

#3
Function completed

#4
25
35

#5
15
20
35

#6
Bill 1: 150
Bill 2: 80
Total: 230

#7
16

#8
Area: 24
Perimeter: 20

#9
Discount: 50.0
Final price: 450.0
Double discount: 100.0

#10
12
First result: None
Second result: 12

#11
Welcome Rohan
Good Morning Meera

#12
50
80
25

#13
20500
22500
22000

#14
300
600

#15
Asha is learning Python at ABC College
Kabir is learning Java at ABC College
Neha is learning C++ at XYZ Institute

#16
Arjun
18
B.Tech

#17
14
20

#18
Payable amount: 550

#19
100
300
1000

#20
Rahul is 19 years old and lives in Ahmedabad

#21
def calculate_sum(a, b):
    return a + b

num_1 = int(input("Enter first number: "))
num_2 = int(input("Enter second number: "))

result = calculate_sum(num_1, num_2)
print("Sum:", result)

#22
def calculate_total(price, quantity):
    return price * quantity

total = calculate_total(50, 4)
print("Total:", total)

#23
def calculate_square(number):
    return number * number

result = calculate_square(6)
print("Square:", result)

#24
def calculate_price(price, quantity=1):
    return price * quantity

print(calculate_price(100))
print(calculate_price(100, 3))

#25
def calculate_total(price, quantity):
    return price * quantity

result = calculate_total(price=80, quantity=5)
print("Total:", result)

#26
def display_student(name, age, course):
    print("Name:", name)
    print("Age:", age)
    print("Course:", course)

display_student("Riya", 19, course="B.Tech")

#27
def calculate_bill(amount, tax=5):
    tax_amount = amount * tax / 100
    return amount + tax_amount

print("Bill:", calculate_bill(1000))

#28
def calculate_final_price(price, discount):
    discount_amount = price * discount / 100
    return price - discount_amount

price = 1000
discount = 10

result = calculate_final_price(price, discount)
print("Final price:", result)

#29
def calculate_delivery(amount, delivery_charge=40):
    return amount + delivery_charge

total = calculate_delivery(amount=500, delivery_charge=60)
print("Final amount:", total)

#30
def calculate_marks(mark_1, mark_2, mark_3):
    total = mark_1 + mark_2 + mark_3
    average = total / 3
    return total, average

total, average = calculate_marks(70, 80, 90)

print("Total:", total)
print("Average:", average)

#31
def calculate_bill(price, quantity):
    return price * quantity

bill = calculate_bill(50, 3)
print("Total Bill:", bill)

bill = calculate_bill(120, 2)
print("Total Bill:", bill)

bill = calculate_bill(75, 4)
print("Total Bill:", bill)

#32
def convert_time(total_minutes):
    hours = total_minutes // 60
    minutes = total_minutes % 60
    return hours, minutes

hours, minutes = convert_time(135)
print("Hours:", hours)
print("Minutes:", minutes)

hours, minutes = convert_time(60)
print("Hours:", hours)
print("Minutes:", minutes)

hours, minutes = convert_time(245)
print("Hours:", hours)
print("Minutes:", minutes)

hours, minutes = convert_time(48)
print("Hours:", hours)
print("Minutes:", minutes)

#33
def calculate_marks(mark_1, mark_2, mark_3):
    total = mark_1 + mark_2 + mark_3
    average = total / 3
    return total, average

total, average = calculate_marks(70, 80, 90)
print("Total:", total)
print("Average:", average)

total, average = calculate_marks(45, 55, 65)
print("Total:", total)
print("Average:", average)

total, average = calculate_marks(100, 90, 80)
print("Total:", total)
print("Average:", average)

#34
def calculate_final_price(price, discount):
    discount_amount = price * discount / 100
    final_price = price - discount_amount
    return discount_amount, final_price

discount, final = calculate_final_price(1000, 10)
print("Discount:", discount)
print("Final Price:", final)

discount, final = calculate_final_price(2500, 20)
print("Discount:", discount)
print("Final Price:", final)

discount, final = calculate_final_price(800, 5)
print("Discount:", discount)
print("Final Price:", final)

#35
def calculate_ticket_price(number_of_tickets, price_per_ticket=200):
    return number_of_tickets * price_per_ticket

print("Total:", calculate_ticket_price(2))
print("Total:", calculate_ticket_price(4))
print("Total:", calculate_ticket_price(3, 250))
print("Total:", calculate_ticket_price(5, 150))

#36
def calculate_salary(basic_salary, bonus=1500, deduction=500):
    return basic_salary + bonus - deduction

print("Salary:", calculate_salary(20000))
print("Salary:", calculate_salary(25000, 3000))
print("Salary:", calculate_salary(30000, 4000, 1000))

#37
def display_profile(name, age, city, course):
    print("--------- STUDENT PROFILE ---------")
    print("Name   :", name)
    print("Age    :", age)
    print("City   :", city)
    print("Course :", course)
    print("-----------------------------------")

display_profile(name="Riya", age=18, city="Ahmedabad", course="B.Tech")

display_profile(course="BCA", city="Surat", age=20, name="Aman")

display_profile(name="Neha", age=19, city="Vadodara", course="B.Sc")

#38
def recharge_details(customer_name, amount, validity=28, data_per_day=1.5):
    print("Customer:", customer_name)
    print("Amount:", amount)
    print("Validity:", validity)
    print("Data per day:", data_per_day)
    print()

recharge_details("Rohan", 299)

recharge_details("Priya", 399, validity=56)

recharge_details("Aman", 199, data_per_day=2.0)

recharge_details(data_per_day=3.0, validity=84, amount=599, customer_name="Neha")

#39
def create_order(item_name, quantity, price_per_item=100, delivery_charge=40):
    item_cost = quantity * price_per_item
    final_amount = item_cost + delivery_charge
    return item_cost, final_amount

cost, total = create_order("Pen", 5)
print("Item Cost:", cost)
print("Final Amount:", total)

cost, total = create_order("Book", 2, price_per_item=150)
print("Item Cost:", cost)
print("Final Amount:", total)

cost, total = create_order("Bag", 1, 800, delivery_charge=60)
print("Item Cost:", cost)
print("Final Amount:", total)

cost, total = create_order(item_name="Bottle", quantity=3, price_per_item=120, delivery_charge=30)
print("Item Cost:", cost)
print("Final Amount:", total)

#40
def calculate_course_fee(course_name, base_fee, discount=10, registration_charge=500):
    discount_amount = base_fee * discount / 100
    fee_after_discount = base_fee - discount_amount
    final_fee = fee_after_discount + registration_charge
    return discount_amount, final_fee

discount, fee = calculate_course_fee("Python", 10000)
print("Course:", "Python")
print("Discount:", discount)
print("Final Fee:", fee)

discount, fee = calculate_course_fee("Java", 15000, discount=20)
print("Course:", "Java")
print("Discount:", discount)
print("Final Fee:", fee)

discount, fee = calculate_course_fee("Web Development", 20000, discount=15, registration_charge=1000)
print("Course:", "Web Development")
print("Discount:", discount)
print("Final Fee:", fee)

discount, fee = calculate_course_fee("Data Science", 25000, discount=25, registration_charge=1500)
print("Course:", "Data Science")
print("Discount:", discount)
print("Final Fee:", fee)