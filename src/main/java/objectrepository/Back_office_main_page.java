package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Back_office_main_page {
    private static WebElement element = null;

    //Objects
    //Object for Username
    private static By txt_Username = By.xpath("//input[contains(@id,'username')]");
    public static WebElement Username(WebDriver driver) {
        element = driver.findElement(txt_Username);
        return element;
    }

//Object for Welcome Profile
    private static By txt_Welcome_profile = By.xpath("//h3[contains(.,'Welcome')]");
    public static WebElement Welcome_profile(WebDriver driver) {
        element = driver.findElement(txt_Welcome_profile);
        return element;
    }

    //Object for Sign Out
    private static By btn_Sign_out = By.xpath("(//span[contains(.,'Sign Out')])[1]");
    public static WebElement Sign_out(WebDriver driver) {
        element = driver.findElement(btn_Sign_out);
        return element;
    }

    //Object for Confirmation YES
    private static By Txt_Confirmation_yes = By.xpath("//i[contains(@class,'pi pi-check')]");
    public static WebElement Confirmation_yes(WebDriver driver) {
        element = driver.findElement(Txt_Confirmation_yes);
        return element;
    }

    //Object for Confirmation NO
    private static By Txt_Confirmation_no = By.xpath("//span[contains(@class,'ui-button-icon-left ui-icon ui-c pi pi-times')]");
    public static WebElement Confirmation_no(WebDriver driver) {
        element = driver.findElement(Txt_Confirmation_no);
        return element;
    }

    //Object for Finance - Manage Cashier - Click
    private static By lbl_Manage_cashier = By.xpath("(//a[contains(.,'Click')])[2]");
    public static WebElement Manage_cashier(WebDriver driver) {
        element = driver.findElement(lbl_Manage_cashier);
        return element;
    }

    //Object for List of Applications
    private static By lbl_List_of_applications = By.xpath("//h6[contains(.,'List of Applications')]");
    public static WebElement List_of_applications(WebDriver driver) {
        element = driver.findElement(lbl_List_of_applications);
        return element;
    }

    //Object for Confirm Processing Fees
    private static By btn_Confirm_processing_fees = By.xpath("//span[contains(.,'Confirm Processing Fees')]");
    public static WebElement Confirm_processing_fees(WebDriver driver) {
        element = driver.findElement(btn_Confirm_processing_fees);
        return element;
    }

    //Object for Processing Details Frame
    private static By lbl_Processing_details_frame = By.xpath("//span[contains(.,'Payment Details')]");
    public static WebElement Processing_details_frame(WebDriver driver) {
        element = driver.findElement(lbl_Processing_details_frame);
        return element;
    }

    //Object for Payment Mode - Select One
    private static By lbl_Payment_mode_select_one = By.xpath("//label[contains(.,'Select One')]");
    public static WebElement Payment_mode_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_select_one);
        return element;
    }

    //Object for Payment Mode - Cash
    private static By lbl_Payment_mode_cash = By.xpath("//li[contains(.,'Cash payment')]");
    public static WebElement Payment_mode_cash(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_cash);
        return element;
    }

    //Object for Payment Mode - Internet Banking
    private static By lbl_Payment_mode_Internet_banking = By.xpath("//li[contains(.,'Internet Banking and Mobile Application(Juice/Blink)')]");
    public static WebElement Payment_mode_Internet_banking(WebDriver driver) {
        element = driver.findElement(lbl_Payment_mode_Internet_banking);
        return element;
    }

    //Object for Amount
    private static By txt_Amount = By.xpath("//input[@placeholder='Amount']");
    public static WebElement Amount(WebDriver driver) {
        element = driver.findElement(txt_Amount);
        return element;
    }

    //Object for Add Payment
    private static By btn_Add_payment = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Add Payment')]");
    public static WebElement Add_payment(WebDriver driver) {
        element = driver.findElement(btn_Add_payment);
        return element;
    }

    //Object for Save Payment
    private static By btn_Save_payment = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Save Payment')]");
    public static WebElement Save_payment(WebDriver driver) {
        element = driver.findElement(btn_Save_payment);
        return element;
    }

    //Object for Success Message of confirmed payment
    private static By lbl_Success_message_payment_confirmed = By.xpath("//span[contains(.,'Payment confirmed')]");
    public static WebElement Success_message_payment_confirmed(WebDriver driver) {
        element = driver.findElement(lbl_Success_message_payment_confirmed);
        return element;
    }

    //Object for All Applications - Click button
    private static By btn_All_applications_click = By.xpath("//a[contains(.,'Click')]");
    public static WebElement All_applications_click(WebDriver driver) {
        element = driver.findElement(btn_All_applications_click);
        return element;
    }

    //Object for List of Registrations Page
    private static By lbl_List_of_registrations_page = By.xpath("//h5[contains(.,'List of Registrations')]");
    public static WebElement List_of_registrations_page(WebDriver driver) {
        element = driver.findElement(lbl_List_of_registrations_page);
        return element;
    }

    //Object for Search Bar for Application Ref number
    private static By txt_Search_bar_app_num = By.xpath("(//input[@role='textbox'])[1]");
    public static WebElement Search_bar_app_num(WebDriver driver) {
        element = driver.findElement(txt_Search_bar_app_num);
        return element;
    }

    //Object for Button to view last application
    private static By btn_View_last_application = By.xpath("(//span[@class='ui-button-icon-left ui-icon ui-c pi pi-eye'])[1]");
    public static WebElement View_last_application(WebDriver driver) {
        element = driver.findElement(btn_View_last_application);
        return element;
    }

    //Object for Action Button for Back Office Users
    private static By btn_Action_back_office_users = By.xpath("//span[contains(.,'Action')]");
    public static WebElement Action_back_office_users(WebDriver driver) {
        element = driver.findElement(btn_Action_back_office_users);
        return element;
    }

    //Object for Action - Select One - PWO
    private static By lbl_Action_PWO_select_one = By.xpath("//label[contains(@id, 'roleActionId_label')]");
    public static WebElement Action_PWO_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Action_PWO_select_one);
        return element;
    }

    //Object for Action - Select One - PWO2
    private static By lbl_Action_PWO2_select_one = By.xpath("//label[contains(@id, 'roleAction_label')]");
    public static WebElement Action_PWO2_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Action_PWO2_select_one);
        return element;
    }

    //Object for Action - Select One - PWO3
    private static By lbl_Action_PWO3_select_one = By.xpath("//label[contains(@id, 'myActionId_label')]");
    public static WebElement Action_PWO3_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Action_PWO3_select_one);
        return element;
    }

    //Object for Action - Select One - Other BO - Registration
    private static By lbl_Action_select_one = By.xpath("//label[contains(@id, 'roleAction')]");
    public static WebElement Action_select_one(WebDriver driver) {
        element = driver.findElement(lbl_Action_select_one);
        return element;
    }

    //Object for Action - Select One - Other BO -Programmes
    private static By lbl_Action_select_one_programmes = By.xpath("//label[contains(@id, 'myActions')]");
    public static WebElement Action_select_one_programmes(WebDriver driver) {
        element = driver.findElement(lbl_Action_select_one_programmes);
        return element;
    }

    //Object for Action - Assigned
    private static By lbl_Action_Assigned = By.xpath("//li[contains(@data-label,'Assigned')]");
    public static WebElement Action_Assigned(WebDriver driver) {
        element = driver.findElement(lbl_Action_Assigned);
        return element;
    }

    //Object for Action - Approved
    private static By lbl_Action_Approved = By.xpath("//li[contains(@data-label,'Approved')]");
    public static WebElement Action_Approved(WebDriver driver) {
        element = driver.findElement(lbl_Action_Approved);
        return element;
    }

    //Object for Action - Rejected
    private static By lbl_Action_Rejected = By.xpath("//li[contains(@data-label,'Rejected')]");
    public static WebElement Action_Rejected(WebDriver driver) {
        element = driver.findElement(lbl_Action_Rejected);
        return element;
    }

    //Object for Action - Under Query
    private static By lbl_Action_Under_Query = By.xpath("//li[contains(@data-label,'Under Query')]");
    public static WebElement Action_Under_Query(WebDriver driver) {
        element = driver.findElement(lbl_Action_Under_Query);
        return element;
    }

    //Object for Action - Under Query - External Remarks
    private static By lbl_Action_External_remarks = By.xpath("//textarea[contains(@id,'remarksExt')]");
    public static WebElement Action_External_remarks(WebDriver driver) {
        element = driver.findElement(lbl_Action_External_remarks);
        return element;
    }

    //Object for Select User - Select One
    private static By lbl_User_select_one = By.xpath("//label[contains(@id, 'userAssignedId_label')]");
    public static WebElement User_select_one(WebDriver driver) {
        element = driver.findElement(lbl_User_select_one);
        return element;
    }

    //Object for Select User - Select WPO
    private static By lbl_User_select_WPO = By.xpath("//li[contains(.,'WPO WPO')]");
    public static WebElement User_select_WPO(WebDriver driver) {
        element = driver.findElement(lbl_User_select_WPO);
        return element;
    }

    //Object for Select User - Select WO
    private static By lbl_User_select_WO = By.xpath("//li[contains(.,'WO WO')]");
    public static WebElement User_select_WO(WebDriver driver) {
        element = driver.findElement(lbl_User_select_WO);
        return element;
    }

    //Object for Select User - Select TO
    private static By lbl_User_select_TO = By.xpath("//li[contains(.,'TO TO')]");
    public static WebElement User_select_TO(WebDriver driver) {
        element = driver.findElement(lbl_User_select_TO);
        return element;
    }

    //Object for Actions Remarks
    private static By txt_Action_remarks = By.xpath("//textarea[@id='formId:remarksStr']");
    public static WebElement Action_remarks(WebDriver driver) {
        element = driver.findElement(txt_Action_remarks);
        return element;
    }

    //Object for Actions Save
    private static By btn_Action_save = By.xpath("//button[contains(@id,'saveWorkflow')]");
    public static WebElement Action_save(WebDriver driver) {
        element = driver.findElement(btn_Action_save);
        return element;
    }

    //Object for Actions Save - BO - Programmes
    private static By btn_Action_save_bo_programmes = By.xpath("//button[contains(@id,'SaveWflow')]");
    public static WebElement Action_save_bo_programmes(WebDriver driver) {
        element = driver.findElement(btn_Action_save_bo_programmes);
        return element;
    }


    //Object for Success message for asigning
    private static By lbl_Success_message_assign = By.xpath("(//span[contains(.,'Action Assigned done successfully.')])[2]");
    public static WebElement Success_message_assign(WebDriver driver) {
        element = driver.findElement(lbl_Success_message_assign);
        return element;
    }

    //Object for Success message for Approval
    private static By lbl_Success_message_approve = By.xpath("(//span[contains(.,'Action Approved done successfully.')])[2]");
    public static WebElement Success_message_approve(WebDriver driver) {
        element = driver.findElement(lbl_Success_message_approve);
        return element;
    }

    //Object for Action Side Bar
    private static By lbl_Action_side_bar = By.xpath("//span[contains(.,'Action')]");
    public static WebElement Action_side_bar(WebDriver driver) {
        element = driver.findElement(lbl_Action_side_bar);
        return element;
    }

    //Object for WO/WA - Site Report
    private static By lbl_Site_report = By.xpath("//a[contains(.,'Site Report')]");
    public static WebElement Site_report(WebDriver driver) {
        element = driver.findElement(lbl_Site_report);
        return element;
    }

    //Object for Bonafie Planter - Yes
    private static By btn_Bonafide_yes = By.xpath("//label[contains(@for, 'bonafide:0')]");
    public static WebElement Bonafide_yes(WebDriver driver) {
        element = driver.findElement(btn_Bonafide_yes);
        return element;
    }

    //Object for Bonafie Planter - No
    private static By btn_Bonafide_no = By.xpath("//label[contains(@for, 'bonafide:1')]");
    public static WebElement Bonafide_no(WebDriver driver) {
        element = driver.findElement(btn_Bonafide_no);
        return element;
    }

    //Object for Upload Button for Site Visit Report
    private static By btn_Upload_site_visit = By.xpath("(//input[@type='file'][contains(@id,'input')])");
    public static WebElement Upload_site_visit(WebDriver driver) {
        element = driver.findElement(btn_Upload_site_visit);
        return element;
    }

    //Object for Save Button for Back Office Users
    private static By btn_Save_Back_office_users = By.xpath("(//span[contains(.,'Save')])[1]");
    public static WebElement Save_Back_office_users(WebDriver driver) {
        element = driver.findElement(btn_Save_Back_office_users);
        return element;
    }

    //Object for Site Visit - Remarks
    private static By txt_Site_visit_remarks = By.xpath("(//textarea[contains(@role,'textbox')])[1]");
    public static WebElement Site_visit_remarks(WebDriver driver) {
        element = driver.findElement(txt_Site_visit_remarks);
        return element;
    }

    //Object for Site Visit - Remarks for FARMERS' COOPERATIVE ASSOCIATION, SOCIETY AND COMPANY
    private static By txt_Site_visit_remarks_FCASC = By.xpath("(//textarea[contains(@role,'textbox')])[2]");
    public static WebElement Site_visit_remarks_FCASC(WebDriver driver) {
        element = driver.findElement(txt_Site_visit_remarks_FCASC);
        return element;
    }

    //Object for Success message for saved site visit
    private static By lbl_Site_visit_saved_success_message = By.xpath("(//span[contains(.,'successfully saved!')])");
    public static WebElement Site_visit_saved_success_message(WebDriver driver) {
        element = driver.findElement(lbl_Site_visit_saved_success_message);
        return element;
    }

    //Object for Under Query Notification button
    private static By btn_Under_query_notif_send = By.xpath("//span[@class='ui-button-text ui-c'][contains(.,'Under Query Notification')]");
    public static WebElement Under_query_notif_send(WebDriver driver) {
        element = driver.findElement(btn_Under_query_notif_send);
        return element;
    }

    //Object for Under Query Mail Success Message
    private static By lbl_Under_query_mail_success_message = By.xpath("(//span[contains(.,'Mail has been sent successfully')])[3]");
    public static WebElement Under_query_mail_success_message(WebDriver driver) {
        element = driver.findElement(lbl_Under_query_mail_success_message);
        return element;
    }

    //Object for Under Query Mail Success Message - Small Breeder
    private static By lbl_Under_query_mail_success_message_sb = By.xpath("(//span[contains(.,'Mail has been sent successfully')])[5]");
    public static WebElement Under_query_mail_success_message_sb(WebDriver driver) {
        element = driver.findElement(lbl_Under_query_mail_success_message_sb);
        return element;
    }

    //Object for Under Query Mail Success Message - Programmes
    private static By lbl_Under_query_mail_success_message_programmes = By.xpath("(//span[contains(.,'Mail has been sent successfully')])[2]");
    public static WebElement Under_query_mail_success_message_programmes(WebDriver driver) {
        element = driver.findElement(lbl_Under_query_mail_success_message_programmes);
        return element;
    }

    //Object for Under Query Mail Success Message - Small Farmer
    private static By lbl_Under_query_mail_success_message_sf = By.xpath("(//span[contains(.,'Mail has been sent successfully')])[6]");
    public static WebElement Under_query_mail_success_message_sf(WebDriver driver) {
        element = driver.findElement(lbl_Under_query_mail_success_message_sf);
        return element;
    }

    //Object for Under Query Mail Success Message - Tea Grower
    private static By lbl_Under_query_mail_success_message_tg = By.xpath("(//span[contains(.,'Mail has been sent successfully')])[5]");
    public static WebElement Under_query_mail_success_message_tg(WebDriver driver) {
        element = driver.findElement(lbl_Under_query_mail_success_message_tg);
        return element;
    }

    //Object for Success message of Workflow saved successfully
    private static By lbl_Workflow_success_message = By.xpath("//span[contains(.,'Workflow was successfully saved')]");
    public static WebElement Workflow_success_message(WebDriver driver) {
        element = driver.findElement(lbl_Workflow_success_message);
        return element;
    }

    //Object for Print Card
    private static By btn_Print_card = By.xpath("//span[contains(.,'Print Card')]");
    public static WebElement Print_card(WebDriver driver) {
        element = driver.findElement(btn_Print_card);
        return element;
    }

    //Object for All Applications - Sidebar
    private static By lbl_All_applications_sidebar = By.xpath("//span[contains(.,'All Applications')]");
    public static WebElement All_applications_sidebar(WebDriver driver) {
        element = driver.findElement(lbl_All_applications_sidebar);
        return element;
    }

    //Object for All Programmes - Sidebar
    private static By lbl_All_programmes_sidebar = By.xpath("//span[contains(.,'All Programmes')]");
    public static WebElement All_programmes_sidebar(WebDriver driver) {
        element = driver.findElement(lbl_All_programmes_sidebar);
        return element;
    }


}

    //Object for XXX
//    private static By XXX = By.xpath("XXX");
//    public static WebElement XXX(WebDriver driver) {
//        element = driver.findElement(XXX);
//        return element;
//    }


