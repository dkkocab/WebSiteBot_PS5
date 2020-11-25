import logging
import os
import time

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
import yaml

STANDARD_LOG_FORMAT = '[{levelname}] {asctime}|{module}:{lineno} - {message}'
DATE_FORMAT = '%Y-%m-%dT%H:%M:%S'

logger = logging.getLogger(__name__)


class WebsiteBot:
    
    def __init__(
            self,
            first_name,
            last_name,
            email,
            address,
            phone,
            credit_number,
            credit_month,
            credit_year,
            credit_ccv,
            chrome_path_var,
            product_uri=None
    ):
        self.first_name = first_name 
        self.last_name = last_name 
        self.email = email 
        self.address = address 
        self.phone = phone 
        self.credit_number = credit_number
        self.credit_month = credit_month 
        self.credit_year = credit_year 
        self.credit_ccv = credit_ccv 
        self.driver = webdriver.Chrome(os.getenv(chrome_path_var))
        if product_uri:
            self.product_uri = product_uri
        self.driver.get(self.product_uri)
        logger.debug('initialized')

    def add_item_to_cart_and_checkout(self):
        addToCart = '//*[@id="add-on-atc-container"]/div[1]/section/div[1]/div[3]/button/span/span'
        checkOut = ('//*[@id="cart-root-container-content-skip"]/div[1]/div/div[2]/div/div/div/div/'
        'div[3]/div/div/div[2]/div/div[2]/div/button[1]')
        continueWithoutAccount = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[1]'
        '/div/div/div/div/div[3]/div/div[1]/div/section/section/div/button/span')
        logger.debug('preparing to add item to cart')
        self.click_button(addToCart)
        logger.debug('clicked Add to Cart')
        self.click_button(checkOut)
        logger.debug('clicked Checkout')
        self.click_button(continueWithoutAccount)
        logger.debug('clicked Continue Without Account')

    def filling_shipping_info(self):
        firstContinue = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[2]/div/div[2]/'
        'div/div/div/div[3]/div/div/div[2]/button/span')
        first_continue = '/html/body/div[1]/div/div[1]/div/div[2]/div/div/div/div/div[1]/div/button'
        continue_button_div_class = 'CXO_fulfillment_continue'
        firstName ='//*[@id="firstName"]'
        lastName = '//*[@id="lastName"]'
        email = '//*[@id="email"]'
        address = '//*[@id="addressLineOne"]'
        phone = '//*[@id="phone"]'
        confirmInfo = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[3]/div[1]/div[2]/'
        'div/div/div/div[3]/div/div/div/div/div/form/div[2]/div[2]/button/span')
        logger.debug('preparing to fill shipping info')
        self.click_button(continue_button_div_class, By.CLASS_NAME)
        logger.debug('clicked on the first continue')
        self.enter_data(firstName, self.first_name)
        self.enter_data(lastName, self.last_name)
        self.enter_data(phone, self.phone)
        self.enter_data(email, self.email)
        self.enter_data(address, self.address)
        logger.debug('shipping information filled')
        self.click_button(confirmInfo)
        logger.debug('clicked on Confirm')

        '/html/body/div[1]/div/div[1]/div/div[2]/div/div/div/div/div[1]/div/button'
    def fill_out_payment_and_order(self):
        creditCardNum = '//*[@id="creditCard"]'
        creditExpireMonth = '//*[@id="month-chooser"]'
        creditExpireYear = '//*[@id="year-chooser"]'
        creditCVV = '//*[@id="cvv"]'
        reviewOrder = ('/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[4]/div[1]/div[2]/div/div'
        '/div/div[3]/div[2]/div/div/div/div[2]/div/div/div/form/div[3]/div/button/span/span/span')
        logger.debug('preparing to fill payment information')
        self.enter_data(creditCardNum, self.credit_number)
        self.enter_data(creditExpireMonth, self.credit_month)
        self.enter_data(creditExpireYear, self.credit_year)
        self.enter_data(creditCVV, self.credit_ccv)
        logger.debug('payment information filled')
        self.click_button(reviewOrder)
        logger.debug('clicked Review Order')

    def click_button(self, value, method=By.XPATH):
        self.check_for_captcha()
        try:
            button = self.driver.find_element(method, value)
            button.click()
        except Exception:
            logger.exception('Encountered an error clicking button, will retry in 1s')
            time.sleep(1)
            self.click_button(value, method)

    def enter_data(self, field, data):
        self.check_for_captcha()
        try:
            self.driver.find_element_by_xpath(field).send_keys(data)
            pass
        except Exception:
            time.sleep(1)
            self.enter_data(field, data)

    def check_for_captcha(self):
        while True:
            captcha = self.locate_captchas()
            if captcha and captcha.is_enabled() and captcha.is_displayed():
                logger.warning('Captcha triggered, please handle manually')
                time.sleep(1)
                continue
            else:
                break

    def locate_captchas(self):
        captcha = None
        captcha_ids = [
            'bot-handling-challenge',
            're-captcha'
        ]
        for captcha_id in captcha_ids:
            try:
                captcha = self.driver.find_element_by_class_name(captcha_id)
                return captcha
            except NoSuchElementException:
                pass
        return captcha


class PS5Bot(WebsiteBot):
    product_uri = 'https://www.walmart.com/ip/PlayStation-5-Console/363472942'


class DiaperBot(WebsiteBot):
    product_uri = 'https://www.walmart.com/ip/' \
                  'Parent-s-Choice-Dry-and-Gentle-Baby-Diapers-Size-3-210-Count' \
                  '/999718413'

            
if __name__ == "__main__":
    logging.basicConfig(
        format=STANDARD_LOG_FORMAT,
        level=logging.INFO,
        datefmt='%m-%d-%y %H:%M:%S',
        style='{'
    )
    logger.setLevel(logging.DEBUG)

    with open('personal_info.yml') as f:
        personal_info = yaml.load(f)
    
    bot = DiaperBot(**personal_info)
    bot.add_item_to_cart_and_checkout()
    bot.filling_shipping_info()
    # bot.fill_out_payment_and_order()
    # You can add those methods in the __init__ as well
    logger.info('FINISHED!')
