#User Story 13363 -Farmers Protection Scheme
#User Story 14928 - Workflow

@Main_feature @US13363_14829 @FPS
Feature: User Story 13361 and 14829 -Form - Farmers Protection Scheme (FPS) and workflow

   #Scenario1
  @Application_for_FPS
  Scenario Outline: Application for Farmers Protection Scheme

    Given I am on SFWF Front Office Home Page GOC "<Browser>"
    When I Input Registered Maupass User's Username "<Username>" and Password "<FPassword>"
    And I Click on Sign In button in Maupass
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on Programmes
    And I Click on New Programmes
    And I Verify Programme Type Page
    And I Click to Apply for Farmers Protection Scheme (FPS)
    And I Verify Display of Farmers Protection Scheme(FPS)
    And I Select SFWF Registration Number "<SFWF_Reg_No>"
    And I Input Type of Farmer "<Farmer_Type>"
    And I Click on Save and Continue
    And I Verify Damage Declaration Tab
    And I Click on Add Damage
    And I Verify Display of Damage Declaration input table
    And I Input Locality "<Locality>"
    And I Select Production System FPS "<Production_system>"
    And I Input Number of Acreage "<number_of_acreage>"
    And I Input Date Planted "<date_planted>"
    And I Input Loss Incurred "<loss_incurred>"
    And I Input Remarks For FPS "<Remarks>"
    And I Click on Save Button For FPS
    And I Click on Save and Continue for FPS
    And I Verify Upload Required Documents Page is displayed for FPS
    And I Upload documents for FPS "<upload_test>"
    And I Click on Save and Continue for FPS
    And I Verify Terms and Conditions Page
    And I click on I hereby declare that the above information is true
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for Application of Programmes Submitted
    And I Copy Programmes Ref Number
    Then I Sign Out as Front Registered User


    #Back_Office_Flow
     #    WPO
    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input WPO Username "<WpoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click to view All Programmes
    And I Search for Programmes Ref Number as a Back Office User
    And I Click to view Programmes
    And I Click on Action Button
    And I Select Under Query for Programmes
    And I Input External Remarks "<Remarks>"
    And I Click on Under Query Notification for Programmes
    And I Verify Success Message for Under Query Notification for Programmes
    And I Click on Save Actions for Programmes
    And I Verify for success message for workflow saved
    And I Sign Out
    And I Verify Successful Sign Out

     #    Applicant after under query
    Given I am on SFWF Front Office Home Page GOC "<Browser>"
    When I Input Registered Maupass User's Username "<Username>" and Password "<FPassword>"
    And I Click on Sign In button in Maupass
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on Programmes
    And I Search for Programme Ref Number for re-submit
    And I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)
    And I Click on Save and Continue
    And I Verify General Information Tab
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    Then I Sign Out as Front Registered User

        #    WPO
    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input WPO Username "<WpoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click to view All Programmes
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Action Button
    And I Select Assigned for Programmes
    And I Select TO User
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out

        #    TO
    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input TO Username "<TOUsername>" and Password "<Password>"
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
    And I Verify for Document Upload Success Message for Site Visit
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

    #PWO
    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input TO Username "<PwoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
    And I Search for Application Ref Number as a Back Office User
    And I Click to view Application
    And I Click on Programme Egilibility
    And I verify display of Programme Eligibilty
    And I Select Egilibility Checklist
    And I Click on Action Button
    And I Select Assigned for Programmes
    And I Select TO User
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out


    Examples:
      |Browser|Username |FPassword      |Password |PwoUsername|WpoUsername|WOUsername |TOUsername|Farmer_Type  |Date_of_Accident|Time_of_Accident|Place_of_Accident|Cause_of_Accident|Kind_of_Work |Particulars_Statement|Medical_Cost|Accident_Related|Additional_Medical_Charges_option|Additional_Medical_Charges_amount|Additional_Doc_Name|Upload_test                        |Confirmation|Remarks        |SFWF_Reg_No|Locality |Production_system|number_of_acreage|date_planted|loss_incurred|upload_test|
    |Chrome |ybhunjun5|Mauritius1!1710|Admin@123|PWO        |WPO        |WO         |TO        |Small Planter|01/10/2024      |11:45 AM        |Karo Cane        |Explosion        |Planting Cane|Engine exploded      |45000       |Yes             |Yes                              |Surgery abroad                   |Add Doc Test       |src\test\resources\Upload_Test1.pdf|Yes         |This is a Test   |00009F     |Lalmatie |Open Field       |3                |14/10/2024  |54           |src\test\resources\Upload_Test1.pdf|



