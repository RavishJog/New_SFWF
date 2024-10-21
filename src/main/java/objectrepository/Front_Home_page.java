package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Front_Home_page {
    private static WebElement element = null;

    //Objects
    //Object for Username
    private static By txt_Username = By.xpath("//input[@id='username']");
    public static WebElement Username(WebDriver driver) {
        element = driver.findElement(txt_Username);
        return element;
    }

    //Object for Password
    private static By txt_Password = By.xpath("//input[@id='password']");
    public static WebElement Password(WebDriver driver) {
        element = driver.findElement(txt_Password);
        return element;
    }

    //Object for Sign In Button
    private static By btn_Sign_in_button = By.xpath("//span[contains(.,'Sign In')]");
    public static WebElement Sign_in_button(WebDriver driver) {
        element = driver.findElement(btn_Sign_in_button);
        return element;
    }

    //Object to Check Successful Login
    private static By lbl_Welcome_user = By.xpath("//h3[contains(.,'Welcome')]");
    public static WebElement Welcome_user(WebDriver driver) {
        element = driver.findElement(lbl_Welcome_user);
        return element;
    }

    //Object for Sign Out
    private static By btn_Sign_out = By.xpath("//span[contains(.,'Sign Out')]");
    public static WebElement Sign_out(WebDriver driver) {
        element = driver.findElement(btn_Sign_out);
        return element;
    }

    //Object for Accept Sign Out
    private static By btn_Yes_sign_out = By.xpath("//i[contains(@class,'pi pi-check')]");
    public static WebElement Yes_sign_out(WebDriver driver) {
        element = driver.findElement(btn_Yes_sign_out);
        return element;
    }

    //Object for Register as Farmer Label
    private static By lbl_Register_as_farmer = By.xpath("(//span[contains(.,'Farmer')])[1]");
    public static WebElement Register_as_farmer(WebDriver driver) {
        element = driver.findElement(lbl_Register_as_farmer);
        return element;
    }

    //Object for My Application Page
    private static By lbl_My_application = By.xpath("//h5[contains(.,'My Application')]");
    public static WebElement My_application(WebDriver driver) {
        element = driver.findElement(lbl_My_application);
        return element;
    }

    //Object for Farmer's Card
    private static By lbl_Farmer_card = By.xpath("//a[contains(@href,'applicantlists:farmersCard')]");
    public static WebElement Farmer_card(WebDriver driver) {
        element = driver.findElement(lbl_Farmer_card);
        return element;
    }

    //Object for Programmes
    private static By lbl_Programmes = By.xpath("//span[contains(.,'Programmes')]");
    public static WebElement Programmes(WebDriver driver) {
        element = driver.findElement(lbl_Programmes);
        return element;
    }

    //Object for New Button
    private static By btn_New_registration_application = By.xpath("//span[contains(.,'New Registration')]");
    public static WebElement New_registration_application(WebDriver driver) {
        element = driver.findElement(btn_New_registration_application);
        return element;
    }

    //Object for Registration Type Page
    private static By lbl_Registration_type_page = By.xpath("//h1[contains(.,'Registration Type')]");
    public static WebElement Registration_type_page(WebDriver driver) {
        element = driver.findElement(lbl_Registration_type_page);
        return element;
    }

    //Object for Application Status - Submitted
    private static By lbl_Application_status_submitted = By.xpath("(//label[contains(.,'SUBMITTED')])[1]");
    public static WebElement Application_status_submitted(WebDriver driver) {
        element = driver.findElement(lbl_Application_status_submitted);
        return element;
    }

    //Object for Application Status - Draft
    private static By lbl_Application_status_draft = By.xpath("(//label[contains(.,'DRAFT')])[1]");
    public static WebElement Application_status_draft(WebDriver driver) {
        element = driver.findElement(lbl_Application_status_draft);
        return element;
    }

    //Object for Application Status - Under Query
    private static By lbl_Application_status_underquery = By.xpath("(//label[contains(.,'UNDER QUERY')])[1]");
    public static WebElement Application_status_underquery(WebDriver driver) {
        element = driver.findElement(lbl_Application_status_underquery);
        return element;
    }

    //Object for Application Status - Card Printed
    private static By lbl_Application_status_card_printed = By.xpath("//label[contains(.,'Card Printed')]");
    public static WebElement Application_status_card_printed(WebDriver driver) {
        element = driver.findElement(lbl_Application_status_card_printed);
        return element;
    }

    //Object for Payment Status - Pending Payment
    private static By lbl_Payment_status_pending = By.xpath("(//label[contains(.,'Payment Pending')])[1]");
    public static WebElement Payment_status_pending(WebDriver driver) {
        element = driver.findElement(lbl_Payment_status_pending);
        return element;
    }

    //Object for Payment Status - Paid
    private static By lbl_Payment_status_paid = By.xpath("(//label[contains(.,'Paid')])[1]");
    public static WebElement Payment_status_paid(WebDriver driver) {
        element = driver.findElement(lbl_Payment_status_paid);
        return element;
    }

    //Object for Search Box for Reference Number
    private static By txt_Search_reference_number = By.xpath("(//td[contains(@role,'gridcell')])[3]");
    public static WebElement Search_reference_number(WebDriver driver) {
        element = driver.findElement(txt_Search_reference_number);
        return element;
    }

    //Object for Edit Button for registration application
    private static By btn_Edit = By.xpath("//button[contains(@id,'applicantlists:regListId:0:edit')]");
    public static WebElement Edit(WebDriver driver) {
        element = driver.findElement(btn_Edit);
        return element;
    }

    //Object for Edit Button for programmes application
    private static By btn_Edit_programmes = By.xpath("//button[contains(@id,'applicantlists:progListId:0:edit')]");
    public static WebElement Edit_programmes(WebDriver driver) {
        element = driver.findElement(btn_Edit_programmes);
        return element;
    }

    //Object for Username_maupass
    private static By txt_Username_maupass = By.xpath("//input[contains(@id,'userEmail-id')]");
    public static WebElement Username_maupass (WebDriver driver) {
        element = driver.findElement(txt_Username_maupass );
        return element;
    }

    //Object for Password_maupass
    private static By txt_Password_maupass  = By.xpath("//input[contains(@id,'plainTextPassword')]");
    public static WebElement Password_maupass (WebDriver driver) {
        element = driver.findElement(txt_Password_maupass );
        return element;
    }

    //Object for Sign In Button_maupass
    private static By btn_Sign_in_button_maupass  = By.xpath("//button[contains(@id,'kt_login_signin_submit')]");
    public static WebElement Sign_in_button_maupass (WebDriver driver) {
        element = driver.findElement(btn_Sign_in_button_maupass );
        return element;
    }

}

    //Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }
