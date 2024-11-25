#User Story Back Office Tests

  #User Story Sign In
# As an Back Office User
# I want to Sign In
# So that I can access the SFWF Backoffice Portal


@Main_feature @Smoke_Back_office_login
Feature: Login into SFWF Backoffice Portal

#Scenario1
  @Sign_in_correct_credentials @Jenkins_Local_Test
  Scenario Outline: Login into SFWF Backoffice Portal with correct credentials

    And I am on SFWF Back Office Home Page GOC "<Browser>"
    And I Input WO-WA Username "<WOUsername>" and Password "<Password>"
    And I Click on Sign In button
    And I Verify Successful Login
    And I Sign Out
    And I Verify Successful Sign Out
    Then I click on forget password
    And I Verify Forget Password Page

    Examples:
      |Browser|WOUsername   |Password |
      |Chrome |Suraj_Admin1 |Admin@123|

  @Jenkins_Local_Test @Smoke_Back_office_login
  Scenario Outline: Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form

    Given I am on SFWF Front Office Home Page GOC "<Browser>"
    When I Input Registered Maupass User's Username "<Username>" and Password "<FPassword>"
    And I Click on Sign In button in Maupass
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page

    Examples:
      |Browser|Username |FPassword|Password |FUsername|PwoUsername|WpoUsername|WOUsername |ITUsername|Remarks        |Bonafide|Payment_Mode |Amount_To_Pay|Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj_Jo |Admin@123|Admin@123|Finance  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |
#      |Edge |Suraj_Jo |Admin@123|Admin@123|Finance  |PWO        |WPO        |WO         |IT_DEPT   |This is a test |Yes     |Cash         |850          |ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |
