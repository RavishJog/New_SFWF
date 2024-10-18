package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FPS {
    private static WebElement element = null;

    //Objects
    //Object for Fertilizer
    private static By lbl_FPS_Scheme = By.xpath("//a[contains(@id,'idt79')]");

    public static WebElement Farmers_Scheme(WebDriver driver) {
        element = driver.findElement(lbl_FPS_Scheme);
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
    private static By txt_Locality = By.xpath("//input[@id='j_idt71:location']]");

    public static WebElement Locality(WebDriver driver) {
        element = driver.findElement(txt_Locality);
        return element;
    }

    //Object for Number of Animals
    private static By txt_number_of_animals = By.xpath("//input[contains(@id,'idt71:noOfAnimals')]");

    public static WebElement Number_of_Animals(WebDriver driver) {
        element = driver.findElement(txt_number_of_animals);
        return element;

    }

    //Object for DOB
    private static By txt_DOB = By.xpath("//input[@placeholder='dd/MM/yyyy']");

    public static WebElement DOB(WebDriver driver) {
        element = driver.findElement(txt_DOB);
        return element;

    }

    private static By txt_tag_of_animals = By.xpath("//input[@placeholder='dd/MM/yyyy']");

    public static WebElement tag_of_animals(WebDriver driver) {
        element = driver.findElement(txt_tag_of_animals);
        return element;
    }

    private static By txt_number_of_dead_animals = By.xpath("//input[@placeholder='dd/MM/yyyy']");

    public static WebElement number_of_dead_animals(WebDriver driver) {
        element = driver.findElement(txt_number_of_dead_animals);
        return element;
    }

    //Object for upload for copy agreement and lease -
    private static By btn_Copy_agreement_upload = By.xpath("//input[contains(@id, 'fileUploader8_input')]");

    public static WebElement Copy_agreement_upload(WebDriver driver) {
        element = driver.findElement(btn_Copy_agreement_upload);
        return element;

    }

}