from selenium import webdriver
import tkinter
import time
from tkinter import Button, messagebox
from functools import partial

def order(driver,myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV):
    #VARIABLES
    addToCart = '//*[@id="add-on-atc-container"]/div[1]/section/div[1]/div[3]/button/span/span'
    checkOut = '//*[@id="cart-root-container-content-skip"]/div[1]/div/div[2]/div/div/div/div/div[3]/div/div/div[2]/div/div[2]/div/button[1]'
    continueWithoutAccount = '/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[1]/div/div/div/div/div[3]/div/div[1]/div/section/section/div/button/span'
    firstContinue = '/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div[3]/div/div/div[2]/button/span'
    firstName ='//*[@id="firstName"]'
    lastName = '//*[@id="lastName"]'
    email = '//*[@id="email"]'
    address = '//*[@id="addressLineOne"]'
    phone = '//*[@id="phone"]'
    confirmInfo = '/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[3]/div[1]/div[2]/div/div/div/div[3]/div/div/div/div/div/form/div[2]/div[2]/button/span'
    creditCardNum = '//*[@id="creditCard"]'
    creditExpireMonth = '//*[@id="month-chooser"]'
    creditExpireYear = '//*[@id="year-chooser"]'
    creditCVV = '//*[@id="cvv"]'
    reviewOrder = '/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[4]/div[1]/div[2]/div/div/div/div[3]/div[2]/div/div/div/div[2]/div/div/div/form/div[3]/div/button/span/span/span'
    confirmOrder = '/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div/form/div/button'
    
    #ADDS PS5 TO CART AND GOES TO CHECKOUT
    clickButton(addToCart, driver)
    time.sleep(1)
    clickButton(checkOut, driver)
    time.sleep(1)
    clickButton(continueWithoutAccount, driver)
    time.sleep(1)

    #FILLS OUT SHIPPING INFO
    clickButton(firstContinue, driver)
    enterData(firstName, myFirstName.get(), driver)
    enterData(lastName, myLastName.get(), driver)
    enterData(phone, myPhone.get(), driver)
    enterData(email, myEmail.get(), driver)
    enterData(address, myAddress.get(), driver)
    clickButton(confirmInfo, driver)

    #FILLS OUT PAYMENT
    enterData(creditCardNum, myCreditCardNum.get(), driver)
    enterData(creditExpireMonth, myCreditExpireMonth.get(), driver)
    enterData(creditExpireYear, myCreditExpireYear.get(), driver)
    enterData(creditCVV, myCVV.get(), driver)

    #ORDER
    clickButton(reviewOrder)
    clickButton(confirmOrder)

def clickButton(xpath ,driver):
    try:
        driver.find_element_by_xpath(xpath).click()
        pass
    except Exception:
        time.sleep(1)
        clickButton(xpath, driver)

def enterData(field,data ,driver):
    try:
        driver.find_element_by_xpath(field).send_keys(data)
        pass
    except Exception:
        time.sleep(1)
        enterData(field,data, driver)

def PlayStationDigital(myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV):
    messagebox.showinfo('Message', 'Bot has been turned on. Press "Okay" to continue and the Playstation bot window will close and run in the background...')
    root.destroy()
    driver = webdriver.Chrome("C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe")
    driver.get('https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815')
    order(driver,myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV)

def PlayStationPhysical(myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV):
    messagebox.showinfo('Message', 'Bot has been turned on. Press "Okay" to continue and the Playstation bot window will close and run in the background...')
    root.destroy()
    driver = webdriver.Chrome("C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe")
    driver.get('https://www.walmart.com/ip/PlayStation-5-Console/363472942')
    order(driver,myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV)

if __name__ == "__main__":   
    root = tkinter.Tk()
    root.title("Kocab's PlayStation Bot")
    root.geometry("500x500")
    greeting = tkinter.Label(root, text="Welcome to Kocab's PlayStation 5 Walmart Bot")
    greeting.grid(column = 25, row = 0,padx=10, pady=10)

    #FORM
    lableName = tkinter.Label(root, text="First Name: ")
    lableName.grid(column = 25, row = 10,padx=10, pady=10)
    myFirstName = tkinter.StringVar()
    nameEntered = tkinter.Entry(root, width=25, textvariable = myFirstName)
    nameEntered.grid(column = 26, row = 10,padx=10, pady=10)

    lableLast = tkinter.Label(root, text="Last Name: ")
    lableLast.grid(column = 25, row = 15,padx=10, pady=10)
    myLastName = tkinter.StringVar()
    lastEntered = tkinter.Entry(root, width=25, textvariable = myLastName)
    lastEntered.grid(column = 26, row = 15,padx=10, pady=10)

    lableMail = tkinter.Label(root, text="Email Address: ")
    lableMail.grid(column = 25, row = 20,padx=10, pady=10)
    myEmail = tkinter.StringVar()
    mailEntered = tkinter.Entry(root, width=25, textvariable = myEmail)
    mailEntered.grid(column = 26, row = 20,padx=10, pady=10)

    lableAddress = tkinter.Label(root, text="Address (ex: 123 Cherry Lane): ")
    lableAddress.grid(column = 25, row = 25,padx=10, pady=10)
    myAddress = tkinter.StringVar()
    addressEntered = tkinter.Entry(root, width=25, textvariable = myAddress)
    addressEntered.grid(column = 26, row = 25,padx=10, pady=10)

    lablePhone = tkinter.Label(root, text="Phone Number: ")
    lablePhone.grid(column = 25, row = 30,padx=10, pady=10)
    myPhone = tkinter.StringVar()
    PhoneEntered = tkinter.Entry(root, width=25, textvariable = myPhone)
    PhoneEntered.grid(column = 26, row = 30,padx=10, pady=10)

    lableCardNum = tkinter.Label(root, text="Credit/Debit card number: ")
    lableCardNum.grid(column = 25, row = 35,padx=10, pady=10)
    myCreditCardNum = tkinter.StringVar()
    CardNumEntered = tkinter.Entry(root, width=25, textvariable = myCreditCardNum)
    CardNumEntered.grid(column = 26, row = 35,padx=10, pady=10)

    lableCreditExpireMonth = tkinter.Label(root, text="Experation Month (00): ")
    lableCreditExpireMonth.grid(column = 25, row = 40,padx=10, pady=10)
    myCreditExpireMonth = tkinter.StringVar()
    CreditExpireMonthEntered = tkinter.Entry(root, width=5, textvariable = myCreditExpireMonth)
    CreditExpireMonthEntered.grid(column = 26, row = 40,padx=10, pady=10)

    lableCreditExpireYear = tkinter.Label(root, text="Experation Year (00): ")
    lableCreditExpireYear.grid(column = 25, row = 45,padx=10, pady=10)
    myCreditExpireYear = tkinter.StringVar()
    CreditExpireYearEntered = tkinter.Entry(root, width=5, textvariable = myCreditExpireYear)
    CreditExpireYearEntered.grid(column = 26, row = 45,padx=10, pady=10)

    lableCVV = tkinter.Label(root, text="CVV: ")
    lableCVV.grid(column = 25, row = 50,padx=10, pady=10)
    myCVV = tkinter.StringVar()
    CVVEntered = tkinter.Entry(root, width=5, textvariable = myCVV)
    CVVEntered.grid(column = 26, row = 50,padx=10, pady=10)

    ps5P = Button(root, text="Playstation Physical", command= partial(PlayStationPhysical ,myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV))
    ps5D = Button(root, text="Playstation Digital", command= partial(PlayStationDigital ,myFirstName,myLastName,myEmail,myAddress,myPhone,myCreditCardNum,myCreditExpireMonth,myCreditExpireYear,myCVV))
    ps5P.grid(column = 25, row = 55)
    ps5D.grid(column = 26, row = 55)
    root.mainloop()
