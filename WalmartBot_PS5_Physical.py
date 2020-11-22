from selenium import webdriver
import time

class PS5Bot:
    
    def __init__(self, first_name, last_name, email, address, phone, credit_number,
                credit_month, credit_year, credit_ccv, chrome_path):
        self.first_name = first_name 
        self.last_name = last_name 
        self.email = email 
        self.address = address 
        self.phone = phone 
        self.credit_number = credit_number
        self.credit_month = credit_month 
        self.credit_year = credit_year 
        self.credit_ccv = credit_ccv 
        self.driver = webdriver.Chrome(chrome_path)
        self.driver.get('https://www.walmart.com/ip/PlayStation-5-Console/363472942')

    def add_ps5_to_cart_and_checkout(self):
        addToCart = '//*[@id="add-on-atc-container"]/div[1]/section/div[1]/div[3]/button/span/span'
        checkOut = ('//*[@id="cart-root-container-content-skip"]/div[1]/div/div[2]/div/div/div/div/'
        'div[3]/div/div/div[2]/div/div[2]/div/button[1]')
        continueWithoutAccount = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[1]'
        '/div/div/div/div/div[3]/div/div[1]/div/section/section/div/button/span')
        self.clickButton(addToCart)
        self.clickButton(checkOut)
        self.clickButton(continueWithoutAccount)

    def filling_shipping_info(self):
        firstContinue = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[2]/div/div[2]/'
        'div/div/div/div[3]/div/div/div[2]/button/span')
        firstName ='//*[@id="firstName"]'
        lastName = '//*[@id="lastName"]'
        email = '//*[@id="email"]'
        address = '//*[@id="addressLineOne"]'
        phone = '//*[@id="phone"]'
        confirmInfo = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[3]/div[1]/div[2]/'
        'div/div/div/div[3]/div/div/div/div/div/form/div[2]/div[2]/button/span')
        self.clickButton(firstContinue)
        self.enterData(firstName, self.first_name)
        self.enterData(lastName, self.last_name)
        self.enterData(phone, self.phone)
        self.enterData(email, self.email)
        self.enterData(address, self.address)
        self.clickButton(confirmInfo)

    def fill_out_payment_and_order(self):#FILLS OUT PAYMENT
        creditCardNum = '//*[@id="creditCard"]'
        creditExpireMonth = '//*[@id="month-chooser"]'
        creditExpireYear = '//*[@id="year-chooser"]'
        creditCVV = '//*[@id="cvv"]'
        reviewOrder = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[4]/div[1]/div[2]/div/div'
        '/div/div[3]/div[2]/div/div/div/div[2]/div/div/div/form/div[3]/div/button/span/span/span')
        self.enterData(creditCardNum, self.credit_number)
        self.enterData(creditExpireMonth, self.credit_month)
        self.enterData(creditExpireYear, self.credit_year)
        self.enterData(creditCVV, self.credit_ccv)
        self.clickButton(reviewOrder)

    def clickButton(self, xpath):
        try:
            self.driver.find_element_by_xpath(xpath).click()
        except Exception:
            time.sleep(1)
            self.clickButton(xpath)

    def enterData(self, field, data):
        try:
            self.driver.find_element_by_xpath(field).send_keys(data)
            pass
        except Exception:
            time.sleep(1)
            self.enterData(field, data)

            
if __name__ == "__main__":
    personal_info = dict(
        first_name = "John",
        last_name = "Smith", 
        email = "mail@gmail.com", 
        address = "1234 Apple Lane", 
        phone = "1234567890",
        credit_number = "123456789",
        credit_month = "00", 
        credit_year = "25", 
        credit_ccv = "123",
        chrome_path = "C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe" 
    )
    
    bot = PS5Bot(**personal_info)
    bot.add_ps5_to_cart_and_checkout()
    bot.filling_shipping_info()
    bot.fill_out_payment_and_order()
    # You can add those methods in the __init__ as well

