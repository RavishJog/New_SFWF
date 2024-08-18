#User Story 13280 - Back Office Process for Registration

@Main_feature @US13280
Feature: User Story 13280 - Back Office Process for Registration

   #Scenario1
  @Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise
  Scenario Outline: Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form

    Given I am on SFWF Front Office Home Page "<Browser>"
    When I Input Registered User's Username "<Username>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on New Button to apply for Registration
    And I Verify display of Registration Type Page
    And I Click on Agro Processing Enterprise
    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page
    And I Input Associate/Society/Company Name "<Co_Name>"
    And I Input Represented by "<Rep_by>"
    And I Input Business Registration No(BRN) for Agro-Processing Enterprise "<BRN>"
    And I Input Certificate of Incorporation No for Agro-Processing Enterprise "<Cert_No>"
    And I Select Activity "<Act>"
    And I Input Office Address "<Off_Add>"
    And I Input Enterprise Address "<Enterprise_Address>"
    And I Select Duration Year for Registration membership "<Year_dur>"
    And I Input List of Products manufactured "<Prod_man>"
    And I Select Status of Applicant for Agro-Processing Enterprise "<Status_Applicant>"
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Upload Business Registration Card "<Upload_test>"
    And I Upload Certificate of Incorporation "<Upload_test>"
    And I Upload List of Directors/ Associates "<Upload_test>"
    And I Upload Board Resolution of Enterprise for appointment of representative(s) "<Upload_test>"
    And I Upload National Identity card of representative "<Upload_test>"
    And I Upload National Identity cards of all shareholders "<Upload_test>"
    And I Upload Location Plan "<Upload_test>"
    And I Upload Copy of SMEDA Certificate "<Upload_test>"
    And I Upload Copy of Utility Bill "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Add Additional Document
    And I Input Additional Document Name "<Additional_Doc_Name>"
    And I Verify Success message for adding Additional Document Name
    And I Upload Additional Document "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I click on I agree to the Terms and Conditions
    And I Select Bank "<Bank_Name>"
    And I Input Bank Branch for Agro-Processing Enterprise "<Bank_Branch>"
    And I Input Personal Bank Account Number Agro-Processing Enterprise "<Bank_Account_No>"
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    And I Verify Application Status "<App_status>"
    And I Verify Payment Status "<Payment_Status>"
    And I Copy Application Number
    And I Click on Shopping Cart for payment
    And I Select Application for payment
    And I Click on Proceed to Payment
    And I Click on Payment Icon
    And I Select Payment Method "<Payment_method>"
    And I Click on Final Proceed to Payment
    And I Verify Message to proceed to Post Office for Payment
    And I Sign Out as Front Registered User
#    Finance
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input Finance Username "<FUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on Manage Cashier
    And I Verify List of Applications page
    And I Click on Confirm Processing Fees
    And I Verify display of Processing Details Frame
    And I Select Payment Mode "<Payment_Mode>"
    And I Input Amount of payment "<Amount_To_Pay>"
    And I Click on Add Payment
    And I Click on Save Payment
    And I Verify success message for adding payment
    And I Sign Out
    And I Verify Successful Sign Out
#    PWO
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input PWO Username "<PwoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Action Button
    And I Select Assigned
    And I Select WPO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out
    #    WPO
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WPO Username "<WpoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Action Button
    And I Select Assigned
    And I Select WO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out

    #    WO/WA
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WO-WA Username "<WOUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Site Report Tab
    And I Select Bonafide Planter "<Bonafide>"
    And I Input Site visit remarks "<Remarks>"
    And I Upload Site Report "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Save Button
    And I Verify Site Visit saved success message
    And I Click on Action Button
    And I Select Assigned
    And I Select WPO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out

    #    WPO
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WPO Username "<WpoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Action Button
    And I Select Under Query
    And I Input External Remarks "<Remarks>"
    And I Click on Under Query Notification
    And I Verify Success Message for Under Query Notification
    And I Click on Save Actions
    And I Verify for success message for workflow saved
    And I Sign Out
    And I Verify Successful Sign Out

    #    Applicant after under query
    Given I am on SFWF Front Office Home Page "<Browser>"
    When I Input Registered User's Username "<Username>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Search for Application Ref Number for re-submit
    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    And I Sign Out as Front Registered User
#    PWO
#    And I am on SFWF Back Office Home Page "<Browser>"
#    And I Input PWO Username "<PwoUsername>" and Password "<Password>"
#    And I Click on Sign In button
#    And I Verify Successful Login
#    And I Click on All Applications
#    And I Verify display of list of registrations page
#    And I Search for Application Ref Number as a Back Office User
#    And I Click to view Application
#    And I Click on Action Button
#    And I Select Assigned
#    And I Select WPO
#    And I Input Remarks "<Remarks>"
#    And I Click on Save Actions
#    And I Verify for success message for assigning
#    And I Sign Out
#    And I Verify Successful Sign Out
    #    WPO
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WPO Username "<WpoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Action Button
    And I Select Approved to approve the registration application
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for approval
    And I Sign Out
    And I Verify Successful Sign Out

        #    IT Department
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input IT Department Username "<ITUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Print Card
    And I Sign Out
    And I Verify Successful Sign Out

#    Applicant verify status - Card Printed
    Given I am on SFWF Front Office Home Page "<Browser>"
    When I Input Registered User's Username "<Username>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Search for Application Ref Number for to check Status Card Printed
    And I Verify Application Status to be Card Printed
    And I Sign Out as Front Registered User


    Examples:
      |Browser|Username |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj    |Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

