#User Story 13361 -Form - Fertiliser Subsidy Scheme (FSS)
#User Story 14928 -12 Supplier - Manager User - Assigned Application List

@Main_feature @US13361_14829
Feature: User Story 13361 and 14829 -Form - Fertiliser Subsidy Scheme (FSS) and workflow

   #Scenario1
  @Application_for_Supplier_subsidy_workflow @Fertilizer_FSS
  Scenario Outline: Application for Subsidy scheme (FSS)and workflow

    Given I am on SFWF Front Office Home Page GOC "<Browser>"
    When I Input Registered Maupass User's Username "<Username>" and Password "<FPassword>"
    And I Click on Sign In button in Maupass
    And I Verify Applicant's Successful Login
    And I Click on Register as Farmer
    And I Verify that User is directed to My Application Page
    And I Verify display of Farmers Card link
    And I Verify Programmes link
    And I Click on Programmes
    And I Verify Programme Type Page
    And I Click to Apply for Fertiliser Subsidy (FSS)
    Then I Sign Out as Front Registered User




    Examples:
      |Browser|Username     |FPassword      |Password |Co_Name        |Rep_by       |BRN        |Cert_No  |Act      |Off_Add                  |Enterprise_Address     |Status_Applicant|Year_dur|Prod_man       |No_person|Actual_ann_turnover|Status_business|Years_operation|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |
      |Chrome |vramachundren|Ashven1206!|Admin@123|ABC Agro Co Ltd|Mr John Brown|C123456789 |XLPR852  |Full Time|The Main Road, Grand Port|Royal Road, Port Louis |Company         |1       |Tomato, Pepper |50       |10000000           |Existing       |5              |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |

