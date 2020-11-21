from selenium import webdriver
import time

def order():
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

    #KEYS
    #add your information here
    myFirstName = 'Alex'
    myLastName = 'Kocab'
    myEmail = 'dkkocab@gmail.com'
    myAddress = '5260 Old Hickory Dr'
    myPhone = '2627947823'
    myCreditCardNum = '123456789'
    myCreditExpireMonth = '00'
    myCreditExpireYear = '25'
    myCVV = '123'

    #ADDS PS5 TO CART AND GOES TO CHECKOUT
    clickButton(addToCart)
    clickButton(checkOut)
    clickButton(continueWithoutAccount)

    #FILLS OUT SHIPPING INFO
    clickButton(firstContinue)
    enterData(firstName, myFirstName)
    enterData(lastName, myLastName)
    enterData(phone, myPhone)
    enterData(email, myEmail)
    enterData(address, myAddress)
    clickButton(confirmInfo)

    #FILLS OUT PAYMENT
    enterData(creditCardNum, myCreditCardNum)
    enterData(creditExpireMonth, myCreditExpireMonth)
    enterData(creditExpireYear, myCreditExpireYear)
    enterData(creditCVV, myCVV)


    #ORDER
    clickButton(reviewOrder)
    #clickButton(confirmOrder)

def clickButton(xpath):
    try:
        driver.find_element_by_xpath(xpath).click()
        pass
    except Exception:
        time.sleep(1)
        clickButton(xpath)

def enterData(field,data):
    try:
        driver.find_element_by_xpath(field).send_keys(data)
        pass
    except Exception:
        time.sleep(1)
        enterData(field,data)

if __name__ == "__main__":
    driver = webdriver.Chrome("C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe")
    driver.get('https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815')
    time.sleep(3)
    order()
