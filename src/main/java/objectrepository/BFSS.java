package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BFSS {
    private static WebElement element = null;

    //objects for Bio scheme
    private static By lbl_BFSS_Scheme = By.xpath("//a[contains(.,'Click to Apply for Bio Farming Support Scheme (BFSS)')]");

    public static WebElement Bio_Scheme(WebDriver driver) {
        element = driver.findElement(lbl_BFSS_Scheme);
        return element;
    }


    //Object for Agricultural Activities
    private static By btn_Agricultural_Activities = By.xpath("//span[contains(.,'Add Agricultural Activities')]");
    public static WebElement Add_Agricultural_Activities(WebDriver driver) {
        element = driver.findElement(btn_Agricultural_Activities);
        return element;
    }

    //Object for Type of Operator - Select one
    private static By lbl_Select_one_Operator_Type = By.xpath("//label[contains(@id,'operators_label')]");
    public static WebElement Select_one_Operator_Type(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_Operator_Type);
        return element;
    }

    //Object for Contract/lease Agreement
 private static By Btn_Contract_lease_Agreement = By.xpath("//td[contains(.,'Contract/Lease Agreement')]");
 public static WebElement Contract_lease_Agreement(WebDriver driver) {
  element = driver.findElement (Btn_Contract_lease_Agreement);
  return element;
 }
    //Object for Bio Farming (Open Field) - Select one
   private static By lbl_Select_Bio_Farming = By.xpath("//li[contains(.,'Bio Farming (Open Field)')]");
   public static WebElement Bio_Farming (WebDriver driver) {
        element = driver.findElement(lbl_Select_Bio_Farming);
       return element;
    }

    //Object for Maurigap (Open Field) - Select One
    private static By lbl_Select_Maurigap = By.xpath("//li[contains(.,'Maurigap (Open Field)')]");
    public static WebElement Maurigap(WebDriver driver) {
        element = driver.findElement(lbl_Select_Maurigap);
        return element;
    }

    //Object for Protected Culture Sheltered Farming Hydroponics - Select One
    private static By lbl_Select_ProtectedCultureShelteredFarmingHydroponics = By.xpath("//li[contains(.,'Protected Culture (Sheltered Farming/Hydroponics)')]");
    public static WebElement ProtectedCultureShelteredFarmingHydroponics(WebDriver driver) {
        element = driver.findElement(lbl_Select_ProtectedCultureShelteredFarmingHydroponics);
        return element;
    }

    //Object for Protected Culture Sheltered Farming Hydroponics - Select One
    private static By lbl_Select_Intentiontoindulgeinbiofarming = By.xpath("//li[contains(.,'Intention to indulge in bio farming (Open Field)')]");
    public static WebElement Intentiontoindulgeinbiofarming(WebDriver driver) {
        element = driver.findElement(lbl_Select_Intentiontoindulgeinbiofarming);
        return element;
    }

    //Object for Document for selected certificate
    private static By Btn_Document_for_selected_certificate = By.xpath("(//span[contains(.,'ui-button')])[8]X");
    public static WebElement Document_for_selected_certificate(WebDriver driver) {
        element = driver.findElement(Btn_Document_for_selected_certificate);
        return element;
    }

    //Object for Crop Production Plan
    private static By btn_crop_production_plan = By.xpath("XXX");
    public static WebElement crop_production_plan(WebDriver driver) {
        element = driver.findElement(btn_crop_production_plan);
        return element;
    }

    //Object for crop production plan form
    private static By lbl_crop_production_plan_form = By.xpath("(//span[contains(.,'Crop Production Plan')])[2]");
    public static WebElement crop_production_plan_form(WebDriver driver) {
        element = driver.findElement(lbl_crop_production_plan_form);
        return element;
    }

    //Object for crop cycle I - Select One
    private static By lbl_Select_I = By.xpath("(//li[contains(.,'I')])[3]");
    public static WebElement I(WebDriver driver) {
        element = driver.findElement(lbl_Select_I);
        return element;
    }
    //Object for crop cycle II - Select One
    private static By lbl_Select_II = By.xpath("(//li[contains(.,'II')])[1]");
    public static WebElement II (WebDriver driver) {
        element = driver.findElement(lbl_Select_II);
        return element;
    }

    //Object for crop cycle III - Select One
    private static By lbl_Select_III = By.xpath("//li[contains(.,'III')]");
    public static WebElement III (WebDriver driver) {
        element = driver.findElement(lbl_Select_III);
        return element;
    }


   //Object for crop cycle - Select one
    private static By lbl_select_one_crop_cycle = By.xpath("(//label[contains(.,'Select One')])[1]");
    public static WebElement select_one_crop_cycle(WebDriver driver) {
        element = driver.findElement(lbl_select_one_crop_cycle);
        return element;
    }

    //Object for Type of Farmer - Select One
    private static By lbl_Select_one_farmer_type = By.xpath("//label[contains(.,'Select One')]");
    public static WebElement Select_one_farmer_type(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_farmer_type);
        return element;
    }

    //Object for Type of farmer - Small Planter
    private static By lbl_Small_planter = By.xpath("//li[contains(.,'Small Planters')]");
    public static WebElement Small_planter (WebDriver driver) {
        element = driver.findElement(lbl_Small_planter);
        return element;
    }


//Object for small planter type
    private static By lbl_Small_planters_type = By.xpath("//li[contains(.,'Small Planters')]");
    public static WebElement Small_planters_type(WebDriver driver) {
        element = driver.findElement(lbl_Small_planters_type);
        return element;
    }

    //Object for Type of farmer  - Option one
    private static By lbl_option_one_type_of_farmer = By.xpath("//li[contains(@id,'j_idt70:bfss_type_farmer_1')]");
    public static WebElement option_one_type_of_farmer(WebDriver driver) {
        element = driver.findElement(lbl_option_one_type_of_farmer);
        return element;
    }






















}









//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }



