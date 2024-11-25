package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Small_breeder {
    private static WebElement element = null;

    //Object for Button for Agro-Processing Enterprise
    private static By btn_Small_breeder_icon = By.xpath("//p[contains(.,'Small Breeder')]");
    public static WebElement Small_breeder_icon(WebDriver driver) {
        element = driver.findElement(btn_Small_breeder_icon);
        return element;
    }

    //Object for Small Breeder Title page
    private static By lbl_Small_breeder_page_title = By.xpath("//h5[contains(.,'REGISTRATION FOR SMALL BREEDERS')]");
    public static WebElement Small_breeder_page_title(WebDriver driver) {
        element = driver.findElement(lbl_Small_breeder_page_title);
        return element;
    }

    //Object for Particulars Livestock Activity Page
    private static By lbl_Livestock_activity_page = By.xpath("//h6[contains(.,'Livestock Activity')]");
    public static WebElement Livestock_activity_page(WebDriver driver) {
        element = driver.findElement(lbl_Livestock_activity_page);
        return element;
    }

    //Object for FPS Page
    private static By lbl_Livestock_activity_page = By.xpath("//h6[contains(.,'Livestock Activity')]");
    public static WebElement Livestock_activity_page(WebDriver driver) {
        element = driver.findElement(lbl_Livestock_activity_page);
        return element;
    }

    //Object for Add Livestock Activity button
    private static By btn_Add_livestock_activity = By.xpath("//span[contains(.,'Add Livestock Activity')]");
    public static WebElement Add_livestock_activity(WebDriver driver) {
        element = driver.findElement(btn_Add_livestock_activity);
        return element;
    }

    //Object for Particulars of Livestock Activity
    private static By lbl_Particulars_of_livestock_activity_tab = By.xpath("//span[contains(@id,'dlglivestock_title')]");
    public static WebElement Particulars_of_livestock_activity_tab(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_of_livestock_activity_tab);
        return element;
    }

    //Object for Save Button for Livestock Activity
    private static By btn_Save_livestock_activity = By.xpath("(//span[contains(.,'Save')])[2]");
    public static WebElement Save_livestock_activity(WebDriver driver) {
        element = driver.findElement(btn_Save_livestock_activity);
        return element;
    }

    //Object for Species - Select One
    private static By lbl_Species_select_one = By.xpath("//label[contains(@id,'species_label')]");
    public static WebElement Species_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Species_select_one);
        return element;
    }

    //Object for Species - Cattle
    private static By lbl_Species_cattle = By.xpath("//li[contains(@id,'species_1')]");
    public static WebElement Species_cattle(WebDriver driver) {
        element = driver.findElement(lbl_Species_cattle);
        return element;
    }

    //Object for Species - Pig
    private static By lbl_Species_pig = By.xpath("//li[contains(@id,'species_2')]");
    public static WebElement Species_pig(WebDriver driver) {
        element = driver.findElement(lbl_Species_pig);
        return element;
    }

    //Object for Species - Poultry
    private static By lbl_Species_poultry = By.xpath("//li[contains(@id,'species_3')]");
    public static WebElement Species_poultry(WebDriver driver) {
        element = driver.findElement(lbl_Species_poultry);
        return element;
    }

    //Object for Species - Goat
    private static By lbl_Species_goat = By.xpath("//li[contains(@id,'species_4')]");
    public static WebElement Species_goat(WebDriver driver) {
        element = driver.findElement(lbl_Species_goat);
        return element;
    }

    //Object for Species - Deer
    private static By lbl_Species_deer = By.xpath("//li[contains(@id,'species_5')]");
    public static WebElement Species_deer(WebDriver driver) {
        element = driver.findElement(lbl_Species_deer);
        return element;
    }

    //Object for Species - Rabbit
    private static By lbl_Species_rabbit = By.xpath("//li[contains(@id,'species_6')]");
    public static WebElement Species_rabbit(WebDriver driver) {
        element = driver.findElement(lbl_Species_rabbit);
        return element;
    }

    //Object for Species - Sheep
    private static By lbl_Species_sheep = By.xpath("//li[contains(@id,'species_7')]");
    public static WebElement Species_sheep(WebDriver driver) {
        element = driver.findElement(lbl_Species_sheep);
        return element;
    }

    //Object for Species - Honey Bee
    private static By lbl_Species_honeybee = By.xpath("//li[contains(@id,'species_8')]");
    public static WebElement Species_honeybee(WebDriver driver) {
        element = driver.findElement(lbl_Species_honeybee);
        return element;
    }

    //Object for Number of Male and Female
    private static By txt_Male_female_number = By.xpath("//input[contains(@id,'no_male_female')]");
    public static WebElement Male_female_number(WebDriver driver) {
        element = driver.findElement(txt_Male_female_number);
        return element;
    }

    //Object for Total Heads
    private static By txt_Total_heads = By.xpath("//input[contains(@id,'total_heads')]");
    public static WebElement Total_heads(WebDriver driver) {
        element = driver.findElement(txt_Total_heads);
        return element;
    }

    //Object for Reason - Select One
    private static By lbl_Reason_select_one = By.xpath("(//label[contains(@id,'label')])[2]");
    public static WebElement Reason_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Reason_select_one);
        return element;
    }

    //Object for Reason - Milk
    private static By lbl_Reason_milk = By.xpath("//li[contains(@id,'j_idt70:livestockdt:0:reason1_1')]");
    public static WebElement Reason_milk(WebDriver driver) {
        element = driver.findElement(lbl_Reason_milk);
        return element;
    }

    //Object for Reason - Meat
    private static By lbl_Reason_meat= By.xpath("//li[contains(@id,'j_idt70:livestockdt:0:reason1_2')]");
    public static WebElement Reason_meat(WebDriver driver) {
        element = driver.findElement(lbl_Reason_meat);
        return element;
    }

    //Object for Particulars for Cattle (Cows and Bulls) to be registered under the Farmers Protection Scheme (FPS) Page
    private static By lbl_Particulars_cattle_page = By.xpath("//h6[contains(.,'Particulars for Cattle (Cows and Bulls)')]");
    public static WebElement Particulars_cattle_page(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_cattle_page);
        return element;
    }

    //Object for Add Particular of Cattle button
    private static By btn_Add_particular_cattle = By.xpath("//span[contains(.,'Add Particular of Cattle')]");
    public static WebElement Add_particular_cattle(WebDriver driver) {
        element = driver.findElement(btn_Add_particular_cattle);
        return element;
    }

    //Object for Particular of Cattle table
    private static By lbl_Particulars_cattle_tab = By.xpath("//span[contains(.,'Particulars for Cattle')]");
    public static WebElement Particulars_cattle_tab(WebDriver driver) {
        element = driver.findElement(lbl_Particulars_cattle_tab);
        return element;
    }

    //Object for Microchip No
    private static By txt_Microchip_no = By.xpath("//input[contains(@id,'microchip')]");
    public static WebElement Microchip_no(WebDriver driver) {
        element = driver.findElement(txt_Microchip_no);
        return element;
    }

    //Object for Cattle Sex - Select One
    private static By lbl_Cattle_sex_select_one = By.xpath("//label[contains(@id,'sex_label')]");
    public static WebElement Cattle_sex_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_sex_select_one);
        return element;
    }

    //Object for Cattle Sex - Male
    private static By lbl_Cattle_sex_male = By.xpath("//li[contains(@id,'sex_1')]");
    public static WebElement Cattle_sex_male(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_sex_male);
        return element;
    }

    //Object for Cattle Sex - Female
    private static By lbl_Cattle_sex_female = By.xpath("//li[contains(@id,'sex_2')]");
    public static WebElement Cattle_sex_female(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_sex_female);
        return element;
    }

    //Object for Cattle Age - Select One
    private static By lbl_Cattle_age_select_one = By.xpath("//label[contains(@id,'age_cattle_label')]");
    public static WebElement Cattle_age_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_select_one);
        return element;
    }

    //Object for Cattle Age - One Month
    private static By lbl_Cattle_age_one_month = By.xpath("//li[contains(.,'1 Month')]");
    public static WebElement Cattle_age_one_month(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_one_month);
        return element;
    }

    //Object for Cattle Age - Two Month
    private static By lbl_Cattle_age_two_month = By.xpath("//li[contains(.,'2 Months')]");
    public static WebElement Cattle_age_two_month(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_two_month);
        return element;
    }

    //Object for Cattle Age - Three Month
    private static By lbl_Cattle_age_three_month = By.xpath("//li[contains(.,'3 Months')]");
    public static WebElement Cattle_age_three_month(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_three_month);
        return element;
    }

    //Object for Cattle Age - Four Month
    private static By lbl_Cattle_age_four_month = By.xpath("//li[contains(.,'4 Months')]");
    public static WebElement Cattle_age_four_month(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_four_month);
        return element;
    }

    //Object for Cattle Age - Five Month
    private static By lbl_Cattle_age_five_month = By.xpath("//li[contains(.,'5 Months')]");
    public static WebElement Cattle_age_five_month(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_age_five_month);
        return element;
    }

    //Object for Save Cattle Particulars
    private static By btn_Save_cattle_particulars = By.xpath("(//span[contains(.,'Save')])[1]");
    public static WebElement Save_cattle_particulars(WebDriver driver) {
        element = driver.findElement(btn_Save_cattle_particulars);
        return element;
    }

    //Object for No of Cow - Female
    private static By txt_No_of_cow = By.xpath("//input[contains(@id,'livestockdt:0:no_female')]");
    public static WebElement No_of_cow(WebDriver driver) {
        element = driver.findElement(txt_No_of_cow);
        return element;
    }

    //Object for Type of Breeder - Select One
    private static By lbl_Select_one_type_breeder_site_visit = By.xpath("//label[contains(@id,'typeBreeders_label')]");
    public static WebElement Select_one_type_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_type_breeder_site_visit);
        return element;
    }

//Object for Type of Breeder - Cattle Breeders
    private static By lbl_Cattle_breeder_site_visit = By.xpath("//li[@data-label='Cattle Breeders']");
    public static WebElement Cattle_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Cattle_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Pig Breeders
    private static By lbl_Pig_breeder_site_visit = By.xpath("//li[@data-label='Pig Breeders']");
    public static WebElement Pig_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Pig_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Poultry Breeders
    private static By lbl_Poultry_breeder_site_visit = By.xpath("//li[@data-label='Poultry Breeders']");
    public static WebElement Poultry_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Poultry_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Goat Breeders
    private static By lbl_Goat_breeder_site_visit = By.xpath("//li[@data-label='Goat Breeders']");
    public static WebElement Goat_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Goat_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Deer Breeders
    private static By lbl_Deer_breeder_site_visit = By.xpath("//li[@data-label='Deer Breeders']");
    public static WebElement Deer_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Deer_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Rabbit Breeders
    private static By lbl_Rabbit_breeder_site_visit = By.xpath("//li[@data-label='Rabbit Breeders']");
    public static WebElement Rabbit_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Rabbit_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Sheep Breeders
    private static By lbl_Sheep_breeder_site_visit = By.xpath("//li[@data-label='Sheep Breeders']");
    public static WebElement Sheep_breeder_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Sheep_breeder_site_visit);
        return element;
    }

    //Object for Type of Breeder - Bee Keepers
    private static By lbl_Bee_Keeper_site_visit = By.xpath("//li[@data-label='Bee Keepers']");
    public static WebElement Bee_Keeper_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Bee_Keeper_site_visit);
        return element;
    }

    //Object for Section 1 - Site Visit
    private static By lbl_Section_one_site_visit = By.xpath("//h6[contains(.,'Section 1')]");
    public static WebElement Section_one_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Section_one_site_visit);
        return element;
    }

    //Object for Category - Select One - Site Visit
    private static By lbl_Select_one_category_site_visit = By.xpath("//label[contains(@id,'cat_breeders_label')]");
    public static WebElement Select_one_category_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_category_site_visit);
        return element;
    }

    //Object for Category - Cow - Site Visit
    private static By lbl_Cow_category_site_visit = By.xpath("//li[contains(@data-label,'Cow')]");
    public static WebElement Cow_category_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Cow_category_site_visit);
        return element;
    }

    //Object for Category - Bull - Site Visit
    private static By lbl_Bull_category_site_visit = By.xpath("//li[contains(@data-label,'Bull')]");
    public static WebElement Bull_category_site_visit(WebDriver driver) {
        element = driver.findElement(lbl_Bull_category_site_visit);
        return element;
    }

    //Object for Tag Number of Animal(s)/Microchip No
    private static By txt_Tag_no_microchip_no_site_visit = By.xpath("//input[contains(@id,'tagNo_input')]");
    public static WebElement Tag_no_microchip_no_site_visit(WebDriver driver) {
        element = driver.findElement(txt_Tag_no_microchip_no_site_visit);
        return element;
    }

    //Object for No Of Animals
    private static By txt_No_of_animal_site_visit = By.xpath("//input[contains(@id,'noAnimals')]");
    public static WebElement No_of_animal_site_visit(WebDriver driver) {
        element = driver.findElement(txt_No_of_animal_site_visit);
        return element;
    }



}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }
