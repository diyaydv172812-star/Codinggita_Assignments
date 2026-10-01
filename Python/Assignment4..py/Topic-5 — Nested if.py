##36
username=input("Enter user name:")
password=input("Enter user password:")
if username=="admin":
   if password=="admin123":
      print("Login Successful")
   else:
       print("Wrong Password")
else:
    print("Invalid Username")
    
##37
age=int(input("Enter age:"))
status=input("Enter status:")
if age>=18:
    if status=="pass":
        print("License Approved")
    else:
        print("Test Not Passed")
else:
    print("Test Not Passed")
        
##38
balance=int(input("Enter Balance:"))
withdrawal=int(input("Enter Withdrawal amount:"))
if withdrawal<=balance:
    if withdrawal%100==0:
        print("Withdrawal Successful")
    else:
        print("Enter Amount in Multiples of 100")
else:
    print("Insufficient Balance")
    
##39
marks=int(input("Enter marks:"))
attendence=int(input("Enter attendence:"))
if attendence>=75:
    if marks>=40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")
    
##40
account=input("Ener account type:")
balance=int(input("Enter amount:"))
if account=="saving":
    if balance>=1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")
    
##41
order=int(input("Enter order amount:"))
payment=input("Enter payment method:")
if order>=500:
    if payment=="card":
        print(" Card Payment Accepted")
    elif payment=="upi":
        print(" UPI Payment Accepted")
    else:
        print(" Unsupported Payment Method")
else:
    print("Minimum Order Amount Not Reached")
    
##42
year=int(input("Enter year:"))
attendence=int(input("Enter attendence"))
if year in [2,3,4]:
    if attendence>=75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")
    
##43
plan=input("Enter current plan:")
usage=input("Enter monthly usage:")
if plan=="basic":
    if usage>=100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")
else:
    print("Already on Higher Plan")
    

