l#User Story 13364 -Form - Group Personal Accident Cover (GPAC) – Claim
#User Story 14928 - Workflow

@Main_feature @US13364_14829 @GOC
Feature: User Story 13361 and 14829 -Form - Fertiliser Subsidy Scheme (FSS) and workflow

   #Scenario1
  @Application_for_GPAC
  Scenario Outline: Application for Group Personal Accident Cover (GPAC) – Claim and Workflow

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
    And I Click to Apply for Group Personal Accident Cover (GPAC)
    And I Verify Display of INDIAN OCEAN GENERAL ASSURANCE (IOGA) / SMALL FARMERS WELFARE FUND (SFWF)
    And I Input Type of Farmer "<Farmer_Type>"
    And I Input Accident Particulars "<Date_of_Accident>" "<Time_of_Accident>" "<Place_of_Accident>" "<Cause_of_Accident>" "<Kind_of_Work>" "<Particulars_Statement>"
    And I Click on Save and Continue
    And I Verify General Information Tab
    And I Input Medical Cost "<Medical_Cost>"
    And I Select "<Accident_Related>" for Has the medical treatment related to the accident been completed?
    And I Select "<Additional_Medical_Charges_option>" for If yes, are there any additional medical charges?
    And I Input "<Additional_Medical_Charges_amount>" for Details of Additional Medical Charges
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Click on Add Additional Document
    And I Input Additional Document Name "<Additional_Doc_Name>"
    And I Verify Success message for adding Additional Document Name
    And I Upload Documents "<Upload_test>"
    Then I Sign Out as Front Registered User




    Examples:
      |Browser|Username |FPassword      |Password |Farmer_Type  |Date_of_Accident|Time_of_Accident|Place_of_Accident|Cause_of_Accident|Kind_of_Work |Particulars_Statement|Medical_Cost|Accident_Related|Additional_Medical_Charges_option|Additional_Medical_Charges_amount|Additional_Doc_Name|Upload_test                        |
      |Chrome |ybhunjun5|Mauritius1!1710|Admin@123|Small Planter|01/10/2024      |11:45 AM        |Karo Cane        |Explosion        |Planting Cane|Engine exploded      |45000       |Yes             |Yes                              |Surgery abroad                   |Add Doc Test       |src\test\resources\Upload_Test1.pdf|

