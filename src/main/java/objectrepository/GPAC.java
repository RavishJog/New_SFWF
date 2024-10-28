package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class  GPAC {
    private static WebElement element = null;

    //Objects

    //Object for Link to Apply for Group Personal Accident Cover (GPAC)
    private static By lbl_GPAC_link = By.xpath("//a[contains(.,'Click to Apply for Group Personal Accident Cover (GPAC)')]");
    public static WebElement GPAC_link(WebDriver driver) {
        element = driver.findElement(lbl_GPAC_link);
        return element;
    }

    //Object for INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)
    private static By lbl_IOGA = By.xpath("//h5[contains(.,'INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)')]");
    public static WebElement IOGA(WebDriver driver) {
        element = driver.findElement(lbl_IOGA);
        return element;
    }

    //Object for Type of Farmer - Select One
    private static By lbl_Select_one_farmer_type = By.xpath("//label[contains (@id, 'type_farmer_label')]");
    public static WebElement Select_one_farmer_type(WebDriver driver) {
        element = driver.findElement(lbl_Select_one_farmer_type);
        return element;
    }

    //Object for Type of Farmer - Small Planters
    private static By lbl_Small_planters_type = By.xpath("//li[contains(.,'Small Planters')]");
    public static WebElement Small_planters_type(WebDriver driver) {
        element = driver.findElement(lbl_Small_planters_type);
        return element;
    }

    //Object for Type of Farmer - Small Breeder
    private static By lbl_Small_breeder_type = By.xpath("//li[contains(.,'Small Breeder')]");
    public static WebElement Small_breeder_type(WebDriver driver) {
        element = driver.findElement(lbl_Small_breeder_type);
        return element;
    }

    //Object for Type of Farmer - Tea Grower
    private static By lbl_Tea_grower_type = By.xpath("//li[contains(.,'Tea Grower')]");
    public static WebElement Tea_grower_type(WebDriver driver) {
        element = driver.findElement(lbl_Tea_grower_type);
        return element;
    }

    //Object for Type of Farmer - Agro Processing Enterprise
    private static By lbl_Agro_processing_enterprise_type = By.xpath("//li[contains(.,'Agro-Processing Enterprise')]");
    public static WebElement Agro_processing_enterprise_type(WebDriver driver) {
        element = driver.findElement(lbl_Agro_processing_enterprise_type);
        return element;
    }

    //Object for Type of Farmer - Farmers Cooperative Association, Society or Company
    private static By lbl_Farmers_CASC_type = By.xpath("//li[contains(.,'Farmers Cooperative Association, Society or Company')]");
    public static WebElement Farmers_CASC_type(WebDriver driver) {
        element = driver.findElement(lbl_Farmers_CASC_type);
        return element;
    }

    //Object for Date of Accident:
    private static By txt_Date_of_accident = By.xpath("//input[contains (@id, 'gpac_dateAcc_input')]");
    public static WebElement Date_of_accident(WebDriver driver) {
        element = driver.findElement(txt_Date_of_accident);
        return element;
    }

    //Object for Time of Accident:
    private static By txt_Time_of_accident = By.xpath("//input[contains (@id, 'gpac_timeAcc_input')]");
    public static WebElement Time_of_accident(WebDriver driver) {
        element = driver.findElement(txt_Time_of_accident);
        return element;
    }

    //Object for Place of Accident:
    private static By txt_Place_of_accident = By.xpath("//textarea[@placeholder='Place of Accident']");
    public static WebElement Place_of_accident(WebDriver driver) {
        element = driver.findElement(txt_Place_of_accident);
        return element;
    }

    //Object for Cause of Accident:
    private static By txt_Cause_of_accident = By.xpath("//textarea[@placeholder='Cause of Accident']");
    public static WebElement Cause_of_accident(WebDriver driver) {
        element = driver.findElement(txt_Cause_of_accident);
        return element;
    }

    //Object for Kind of work being performed at time of accident:
    private static By txt_Kind_of_work = By.xpath("//textarea[@placeholder='Kind of work being performed at time of accident']");
    public static WebElement Kind_of_work(WebDriver driver) {
        element = driver.findElement(txt_Kind_of_work);
        return element;
    }

    //Object for Particulars/Statement:
    private static By txt_Particulars_statement = By.xpath("//textarea[@placeholder='Particulars/Statement']");
    public static WebElement Particulars_statement(WebDriver driver) {
        element = driver.findElement(txt_Particulars_statement);
        return element;
    }

    //Object for Details of Medical Cost:
    private static By txt_Medical_cost = By.xpath("//input[contains(@id,'medcost')]");
    public static WebElement Medical_cost(WebDriver driver) {
        element = driver.findElement(txt_Medical_cost);
        return element;
    }

    //Object for Accident Related - Yes
    private static By btn_Accident_related_yes = By.xpath("//label[contains (@for, 'gpac_ques1:0')]");
    public static WebElement Accident_related_yes(WebDriver driver) {
        element = driver.findElement(btn_Accident_related_yes);
        return element;
    }

    //Object for Accident Related - No
    private static By btn_Accident_related_no = By.xpath("//label[contains (@for, 'gpac_ques1:1')]");
    public static WebElement Accident_related_no(WebDriver driver) {
        element = driver.findElement(btn_Accident_related_no);
        return element;
    }

    //Object for If yes, are there any additional medical charges?: YES
    private static By btn_Additional_medical_charges_yes = By.xpath("//label[contains (@for, 'gpac_ques2:0')]");
    public static WebElement Additional_medical_charges_yes(WebDriver driver) {
        element = driver.findElement(btn_Additional_medical_charges_yes);
        return element;
    }

    //Object for If yes, are there any additional medical charges?: NO
    private static By btn_Additional_medical_charges_no = By.xpath("//label[contains (@for, 'gpac_ques2:1')]");
    public static WebElement Additional_medical_charges_no(WebDriver driver) {
        element = driver.findElement(btn_Additional_medical_charges_no);
        return element;
    }

    //Object for Details of Additional Medical Charges:
    private static By btn_Additional_medical_charges = By.xpath("//textarea[@placeholder='Details of Additional Medical Charges']");
    public static WebElement Additional_medical_charges(WebDriver driver) {
        element = driver.findElement(btn_Additional_medical_charges);
        return element;
    }

    //Object for Farmers Identity Card - Upload & Download button
    private static By btn_Upload_farmers_identity_card = By.xpath("(//input[contains(@type,'file')])[1]");
    public static WebElement Upload_farmers_identity_card(WebDriver driver) {
        element = driver.findElement(btn_Upload_farmers_identity_card);
        return element;
    }

        private static By btn_Download_farmers_identity_card = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[1]");
    public static WebElement Download_farmers_identity_card(WebDriver driver) {
        element = driver.findElement(btn_Download_farmers_identity_card);
        return element;
    }

    //Object for Doctor's Bill - Upload & Download button
    private static By btn_Upload_doctors_bill = By.xpath("(//input[contains(@type,'file')])[2]");
    public static WebElement Upload_doctors_bill(WebDriver driver) {
        element = driver.findElement(btn_Upload_doctors_bill);
        return element;
    }

        private static By btn_Download_doctors_bill = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[2]");
    public static WebElement Download_doctors_bill(WebDriver driver) {
        element = driver.findElement(btn_Download_doctors_bill);
        return element;
    }

    //Object for Identity Card - Upload & Download button
    private static By btn_Upload_identity_card = By.xpath("(//input[contains(@type,'file')])[3]");
    public static WebElement Upload_identity_card(WebDriver driver) {
        element = driver.findElement(btn_Upload_identity_card);
        return element;
    }

        private static By btn_Download_identity_card = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[3]");
    public static WebElement Download_identity_card(WebDriver driver) {
        element = driver.findElement(btn_Download_identity_card);
        return element;
    }

    //Object for Medical Certificate  - Upload & Download button
    private static By btn_Upload_medical_certificate = By.xpath("(//input[contains(@type,'file')])[4]");
    public static WebElement Upload_medical_certificate(WebDriver driver) {
        element = driver.findElement(btn_Upload_medical_certificate);
        return element;
    }

        private static By btn_Download_medical_certificate = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[4]");
    public static WebElement Download_medical_certificate(WebDriver driver) {
        element = driver.findElement(btn_Download_medical_certificate);
        return element;
    }

    //Object for Pharmacy Receipts  - Upload & Download button
    private static By btn_Upload_pharmacy_receipts = By.xpath("(//input[contains(@type,'file')])[5]");
    public static WebElement Upload_pharmacy_receipts(WebDriver driver) {
        element = driver.findElement(btn_Upload_pharmacy_receipts);
        return element;
    }

        private static By btn_Download_pharmacy_receipts = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[5]");
    public static WebElement Download_pharmacy_receipts(WebDriver driver) {
        element = driver.findElement(btn_Download_pharmacy_receipts);
        return element;
    }

    //Object for Add Doc Test  - Upload & Download button
    private static By btn_Upload_Add_doc = By.xpath("(//input[contains(@type,'file')])[6]");
    public static WebElement Upload_Add_doc(WebDriver driver) {
        element = driver.findElement(btn_Upload_Add_doc);
        return element;
    }

        private static By btn_Download_Add_doc = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-download'])[6]");
    public static WebElement Download_Add_doc(WebDriver driver) {
        element = driver.findElement(btn_Download_Add_doc);
        return element;
    }

    //Object for I agree to the Terms and Conditions
    private static By btn_Agree_terms_conditions = By.xpath("//span[contains(.,'I agree to the Terms and Conditions')]");
    public static WebElement Agree_terms_conditions(WebDriver driver) {
        element = driver.findElement(btn_Agree_terms_conditions);
        return element;
    }

    //Object for Search Bar for Programme Reference Number
    private static By txt_Search_programme_reference_number = By.xpath("(//input[@role='textbox'])[5]");
    public static WebElement Search_programme_reference_number(WebDriver driver) {
        element = driver.findElement(txt_Search_programme_reference_number);
        return element;
    }


}

//Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }