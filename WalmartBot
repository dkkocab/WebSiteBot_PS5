from selenium import webdriver
import time


def order():
    #ADDS PS5 TO CART AND GOES TO CHECKOUT
    driver.find_element_by_xpath('//*[@id="add-on-atc-container"]/div[1]/section/div[1]/div[3]/button/span/span').click()
    time.sleep(2)
    driver.find_element_by_xpath('//*[@id="cart-root-container-content-skip"]/div[1]/div/div[2]/div/div/div/div/div[3]/div/div/div[2]/div/div[2]/div/button[1]').click()
    time.sleep(2)
    driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[1]/div/div/div/div/div[3]/div/div[1]/div/section/section/div/button/span').click()
    time.sleep(2)

    #FILLS OUT SHIPPING INFO
    driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div[3]/div/div/div[2]/button/span').click()
    time.sleep(2)
    driver.find_element_by_xpath('//*[@id="firstName"]').send_keys('first name')
    driver.find_element_by_xpath('//*[@id="lastName"]').send_keys('last name')
    driver.find_element_by_xpath('//*[@id="addressLineOne"]').send_keys('address')
    driver.find_element_by_xpath('//*[@id="phone"]').send_keys('phone number')
    driver.find_element_by_xpath('//*[@id="email"]').send_keys('email')
    time.sleep(3)
    driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[3]/div[1]/div[2]/div/div/div/div[3]/div/div/div/div/div/form/div[2]/div[2]/button/span').click()
    time.sleep(2)
    driver.find_element_by_xpath('//*[@id="creditCard"]').send_keys('credit card')
    time.sleep(2)
    




if __name__ == "__main__":
    driver = webdriver.Chrome("C:/Users/Alex/Downloads/chromedriver_win32/chromedriver.exe")
    
    #driver.get('https://www.walmart.com/ip/PlayStation-5-Console/363472942')
    driver.get('https://www.walmart.com/ip/Sony-3004377-Dualshock-4-Wireless-Controller-for-PlayStation-4-Glacier-White/620764180')
    time.sleep(1)
    order()
