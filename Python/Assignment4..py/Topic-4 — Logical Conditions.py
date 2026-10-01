##29
marks=int(input("Enter marks:"))
attendence=int(input("Enter attendence:"))
if marks>=60:
    if attendence>=75:
        print("Eligible")
else:
    print("Not Eligible")
    
##30
marks=int(input("Enter marks:"))
income=int(input("Enter income"))
if marks>=85:
   if income<300000:
       print("Scolarship Available")
else:
    print("no scolarship")
    
##31
day=input("Enter day:")
if day=="Saturday" and day=="Saturday":
    print("Weekend")
else:
    print("Weekday")
    
##32
username=input("enter username:")
password=input("enter password:")
if username=="student" and password=="python123":
        print("Access Granted")
else:
    print("Access Denied")
    
##33
city=input("Enter city:")
if city=="Ahmedabad" and city=="Gandhinagar":
    print("Delivery Available")
else:
    print("Delivery Unavilable")
    
##34
num=int(input("Enter number:"))
if 10<=num<=50:
    print("Inside Range")
else:
    print("Outside Range")
    
##35
amount=int(input("Enter amount"))
otp=int(input("Enter otp"))
if amount<=50000 and otp=="1234":
    print("Transaction Approved")
else:
    print("Transaction Declined")
