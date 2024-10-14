#User Story Back Office Tests

@Back_Office_tests
Feature: Back Office Tests

   #Scenario1
  @PWO
  Scenario Outline: PWO Tests

#    PWO
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input PWO Username "<PwoUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
#    And I Search for Application Ref Number as a Back Office User
    And I search app ref no "<Ref>"
    And I Click to view Application
    And I Click on Action Button
    And I Select PWO Assigned
    And I Select WPO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out



    Examples:
      |Browser|Ref|Username     |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |FCSC2024-00078   |Suraj    |Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

     #Scenario2
    @WPO
    Scenario Outline: WPO Tests

      And I am on SFWF Back Office Home Page "<Browser>"
      And I Input WPO Username "<WpoUsername>" and Password "<Password>"
      And I Click on Sign In button
      And I Verify Successful Login
      And I Click on All Applications
      And I Verify display of list of registrations page
#      And I Search for Application Ref Number as a Back Office User
      And I search app ref no "<Ref>"
      And I Click to view Application
      And I Click on Action Button
      And I Select Approved to approve the registration application
      And I Input Remarks "<Remarks>"
      And I Click on Save Actions
      And I Verify for success message for approval
      And I Sign Out
      And I Verify Successful Sign Out

    Examples:
      |Browser|Ref          |Username |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |APE2024-00131|Suraj    |Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

#    Scenario3
  @WOWA

  Scenario Outline: Test

     #    WO/WA
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WO-WA Username "<WOUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
#    And I Search for Application Ref Number as a Back Office User
    And I search app ref no "<Ref>"
    And I Click to view Application
    And I Click on Site Report Tab
    And I Select Bonafide Planter "<Bonafide>"
    And I Input Site visit remarks in Site Report "<Remarks>"
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


    Examples:
      |Browser|Ref          |Username         |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Off_Num|Mob_Num  |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |FCSC2024-00148|Raksha_Luchun3004|Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |2126666|58967896 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

    #    Scenario4
  @WOWA_Bonafide

  Scenario Outline: Test
    #    WO/WA
    And I am on SFWF Back Office Home Page "<Browser>"
    And I Input WO-WA Username "<WOUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
#    And I Search for Application Ref Number as a Back Office User
    And I search app ref no "<Ref>"
    And I Click to view Application
    And I Click on Site Report Tab
    And I Select Bonafide Planter "<Bonafide>"
    And I Input Site visit remarks "<Remarks>"
    And I Upload Site Report "<Upload_test>"
    And I Verify for Bonafide Document Upload Success Message
    And I Add Information for Crop Details in Section One
    And I Select Drip Irrigation Facility in Section Two
    And I Click on Save Button
    And I Verify Site Visit saved success message
    And I Click on Action Button
    And I Select Assigned (For Small Planters)
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
    #    And I Search for Application Ref Number as a Back Office User
    And I search app ref no "<Ref>"
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
    And I Verify display of REGISTRATION FOR SMALL PLANTERS Page
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Click on Save and Continue
    And I Verify Terms and Conditions Page
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted
    And I Sign Out as Front Registered User

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
      |Browser|Ref          |Username |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |Org_acc_no|Crop_Type|Land_Extent|Owner_Type|Plot_Location|Field_Location |Production_System|Total_Extent |Crop_Grown |Plantation_Type|Date_Plantation_Seedling |Upload_test                        |Crop_Status|Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |SP2024-00265 |Suraj    |Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |Mr              |Black River|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |1        |Married       |Spouse      |Sanon         |Kirti             |Female|1Jan94|Air Hostess|0001252563|Cane     |2.5        |Tenant    |Moka         |Port Louis     |Sheltered Farming|9            |Pepper     |Interline      |1Aug2030                 |src\test\resources\Upload_Test1.pdf|Harvest    |Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

    #Scenario WO Breeder
  @Test_wo_breeder
  Scenario Outline: Test
   #    WO/WA
    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input WO-WA Username "<WOUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Click on All Applications
    And I Verify display of list of registrations page
#    And I Search for Application Ref Number as a Back Office User
    And I search app ref no "<Ref>"

    And I Click to view Application
    And I Click on Site Report Tab
    And I Select Bonafide Planter "<Bonafide>"
    And I Input Site visit remarks "<Remarks>"
    And I Upload Site Report "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Input Section One data "<Breeder_Type>"
    And I Click on Save Button
    And I Verify Site Visit saved success message
    And I Click on Action Button
    And I Select Option Assigned
    And I Select WPO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out


    Examples:
      |Ref          |Browser|Username     |FPassword      | Password  |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |License    |Land_Extent|Owner_Type|Plot_Location|Spicies |Male_Female_Number|Total_Heads |Reason |Microchip_No|Cattle_Sex|Cattle_Age|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |Breeder_Type|
      |SB2024-00031|Chrome |Suraj_Jo     |Admin@123      |Admin@123  |FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |Mrs              |Port Louis|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |2        |Married       |Spouse      |Keen          |Dafne             |Female|1Jan94|Actress    |Tea Grower |2.7        |Tenant    |Moka         |Cattle    |10               |550         |Meat   |AAA2563     |Male      |1Month    |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |Cattle     |

