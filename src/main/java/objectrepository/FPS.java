package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FPS {
    private static WebElement element = null;

    //Objects


    //Object for Fertilizer
    private static By lbl_FPS_Scheme = By.xpath("//a[contains(@id,'idt80')]");

    public static WebElement Farmers_Scheme(WebDriver driver) {
        element = driver.findElement(lbl_FPS_Scheme);
        return element;
    }

    private static By lbl_FPS_Form = By.xpath("//h5[1]");

    public static WebElement FPS_Form(WebDriver driver) {
        element = driver.findElement(lbl_FPS_Form);
        return element;
    }

    //Object for SFWF Reg No - Select One
    private static By txt_SFWF_Select_one = By.xpath("//label[contains(.,'SFWF Reg No:')]");

    public static WebElement SFWF_Select_one(WebDriver driver) {
        element = driver.findElement(txt_SFWF_Select_one);
        return element;
    }

    //Object for SFWF Reg No - B0003F
    private static By txt_SFWF_B0003F = By.xpath("//label[contains(.,'B0003F')]");

    public static WebElement SFWF_B0003F(WebDriver driver) {
        element = driver.findElement(txt_SFWF_B0003F);
        return element;
    }

    //Object for SFWF Reg No - 00006F
    private static By txt_SFWF_00006F = By.xpath("//label[contains(.,'00006F')]");

    public static WebElement SFWF_00006F(WebDriver driver) {
        element = driver.findElement(txt_SFWF_00006F);
        return element;
    }

    //Object for Damage Declaration Tab:
    private static By lbl_damage_declaration = By.xpath("//span[contains(.,'Add Damage')]");

    public static WebElement Damage_Declaration(WebDriver driver) {
        element = driver.findElement(lbl_damage_declaration);
        return element;
    }

    //Object for Add Damage
    private static By btn_add_damage = By.xpath("//span[contains(.,'Add Damage')]");

    public static WebElement Add_Damage(WebDriver driver) {
        element = driver.findElement(btn_add_damage);
        return element;
    }

    //Object for Locality
    private static By txt_Locality = By.xpath("//input[contains(@id,'idt70:location')]");

    public static WebElement Locality(WebDriver driver) {
        element = driver.findElement(txt_Locality);
        return element;
    }

    //Object for Number of Animals
    private static By txt_number_of_acreage = By.xpath("//input[contains(@id,'j_idt70:acreage')]");

    public static WebElement Number_of_Acreage(WebDriver driver) {
        element = driver.findElement(txt_number_of_acreage);
        return element;

    }

    //Object for DOB
    private static By txt_date_planted = By.xpath("//input[@id='j_idt70:dateplanted_input']");

    public static WebElement date_planted(WebDriver driver) {
        element = driver.findElement(txt_date_planted);
        return element;

    }

    private static By txt_loss_incurred = By.xpath("//input[@id='j_idt70:lossIncurred']");

    public static WebElement loss_incurred(WebDriver driver) {
        element = driver.findElement(txt_loss_incurred);
        return element;
    }


    //Object for upload for copy agreement and lease -
    private static By btn_Title_deed_agreement = By.xpath("//td[contains(.,'Copy of title deed/lease agreement')]");

    public static WebElement Title_deed_agreement(WebDriver driver) {
        element = driver.findElement(btn_Title_deed_agreement);
        return element;

    }

    //Object for upload for Site Plan-
    private static By btn_Site_plan = By.xpath("////input[@id='j_idt70:j_idt210_input']");

    public static WebElement Site_plan(WebDriver driver) {
        element = driver.findElement(btn_Site_plan);
        return element;

    }

    //Object for SFWF Reg No - Select One
    private static By lbl_Select_one_sfwf_reg_no = By.xpath("//label[contains(@id,'fps_sfwf_no_label')]");

    public static WebElement Select_one_sfwf_reg_no(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_sfwf_reg_no);
        return element;
    }

    //Object for SFWF Reg No - Option One
    private static By lbl_Option_one_sfwf_ref_no = By.xpath("//li[@id='j_idt70:fps_sfwf_no_1']");

    public static WebElement Option_one_sfwf_ref_no(WebDriver driver) {
        element = driver.findElement(lbl_Option_one_sfwf_ref_no);
        return element;
    }

    //Object for Production System - Select One
    private static By lbl_Select_one_production_system = By.xpath("//label[contains(.,'Select One')]");

    public static WebElement Select_one_production_system(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_production_system);
        return element;
    }

    //Object for Production System - Open Field
    private static By lbl_Open_field = By.xpath("//li[contains(.,'Open Field')]");

    public static WebElement Open_field(WebDriver driver) {
        element = driver.findElement(lbl_Open_field);
        return element;
    }

    //Object for Production System - Sheltered Structured
    private static By lbl_Sheltered_Structured = By.xpath("//li[contains(.,'Sheltered Structure')]");

    public static WebElement Sheltered_Structured(WebDriver driver) {
        element = driver.findElement(lbl_Sheltered_Structured);
        return element;
    }

    //Object for Production System - Sheltered Structured
    private static By lbl_remarks = By.xpath("//textarea[contains(@id,'idt70:remark')]");

    public static WebElement remarks(WebDriver driver) {
        element = driver.findElement(lbl_remarks);
        return element;
    }

    //object for save button
    // private static By btn_save_button = By.xpath("//span[normalize-space()='Save']");

    //public static WebElement save_button(WebDriver driver) {
    //   element = driver.findElement(btn_save_button);
    //  return element;
    // }
    private static By btn_save_and_continue_FPS = By.xpath("//button[contains(@id,'_next')]");

    public static WebElement Save_and_continue_FPS(WebDriver driver) {
        element = driver.findElement(btn_save_and_continue_FPS);
        return element;
    }

    private static By btn_save_button = By.xpath("//button[contains(@id,'saveDamage')]");

    public static WebElement Save_Button(WebDriver driver) {
        element = driver.findElement(btn_save_button);
        return element;
    }

    private static By lbl_upload_required_documents = By.xpath("//h6[contains(.,'Upload Required Documents')]");

    public static Object Upload_required_documents(WebDriver driver) {
        element = driver.findElement(lbl_upload_required_documents);
        return element;

    }

    private static By btn_above_information = By.xpath("//span[contains(.,'I hereby declare that the above information is true and correct to the best of my knowledge')]");

    public static WebElement Above_Information(WebDriver driver) {
        element = driver.findElement(btn_above_information);
        return element;
    }
}





//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }