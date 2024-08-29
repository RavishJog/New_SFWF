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
    And I Select Assigned
    And I Select WO
    And I Input Remarks "<Remarks>"
    And I Click on Save Actions
    And I Verify for success message for assigning
    And I Sign Out
    And I Verify Successful Sign Out
    Examples:
      |Browser|Ref|Username     |Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |FCSC2024-00078   |Suraj    |Admin@123|FINANCE  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |
