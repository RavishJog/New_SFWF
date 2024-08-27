#User Story 12597 - Register as Small Breeder

@Main_feature @US12597
Feature: User Story 12597 - Register as Small Breeder

   #Scenario1
  @Registration_as_small_breeder
  Scenario Outline: Application to Register as small breeder

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
    And I Click on Small Breeder Icon
    And I Verify display of REGISTRATION FOR SMALL BREEDERS page
    And I Select an Applicant Title "<Applicant_Title>"
    And I Select Applicant District "<District>"
    And I Select Applicant Level of Education "<Education_Level>"
    And I Select Agricultural Activity "<Act>"
    And I Input Other Occupation "<Other_Occupation>"
    And I Upload Photograph "<Photo>"
    And I Verify for Photo upload success message
    And I Select No of years for Registration membership "<Year_dur>"
    And I Select Marital Status "<Marital_Status>"
    And I Click on Save and Continue
    And I Verify Display of Particulars of Family Beneficiaries Page
    And I Click on Add Family and Beneficiaries
    And Verify Display of Particulars of Family Beneficiaries input table
    And I Select Family relationship for tea grower "<Relationship>"
    And I Input Family Surname "<Family_Surname>"
    And I Input Family Other Names "<Family_Other_Names>"
    And I Select Family Gender "<Gender>"
    And I Input Family Date of Birth "<DOB>"
    And I Input Family Occupation "<Occupation>"
    And I Click on Beneficiary of life Insurance Scheme
    And I Click on Beneficiary of Accident Insurance Scheme
    And I Save Particulars of Family and Beneficiaries
    And I Click on Save and Continue
    And I Verify Display of Livestock Activity
    And I Click on Add Livestock Activity
    And I Verify Display of Particulars for Livestock Activity Table
    And I Select Species "<Spicies>"
    And I Input Number of Male and Female "<Male_Female_Number>"
    And I Input Total Heads "<Total_Heads>"
    And I Select Reason "<Reason>"
    And I Save Livestock Activity
    And I Click on Save and Continue
    And I Verify Display of Particulars for Cattle Page
    And I Click on Add Particular of Cattle
    And I Verify Display of Particulars for Cattle Table
    And I Input Microchip Number "<Microchip_No>"
    And I Select Cattle Sex "<Cattle_Sex>"
    And I Select Cattle Age "<Cattle_Age>"
    And I Save Particulars for Cattle
    And I Click on Save and Continue
    And I Verify Upload Required Documents Page is displayed
    And I Upload Copy of National Identify Card (ID) "<Upload_test>"
    And I Upload Existing SFWF Reg No (if any) "<Upload_test>"
    And I Upload copy of Title Deed "<Upload_test>"
    And I Upload Copy of registered /Non-Registered Lease Paper "<Upload_test>"
    And I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) "<Upload_test>"
    And I Upload Preliminary environmental report, Building and land use Permit and health clearance "<Upload_test>"
    And I Upload Location plan of farm including size "<Upload_test>"
    And I Upload List of Tags Nos. (except poultry and pig) "<Upload_test>"
    And I Upload Animal Card DVs where applicable "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Add Additional Document
    And I Input Additional Document Name "<Additional_Doc_Name>"
    And I Verify Success message for adding Additional Document Name
    And I Upload Additional Document "<Upload_test>"
    And I Verify for Document Upload Success Message
    And I Click on Save and Continue
    And I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS
    And I click on I agree to the Terms and Conditions
    And I Click on Photo checkbox
    And I Select Bank "<Bank_Name>"
    And I Input Bank Branch for Agro-Processing Enterprise "<Bank_Branch>"
    And I Input Personal Bank Account Number Agro-Processing Enterprise "<Bank_Account_No>"
    And I Click on Submit Application "<Confirmation>"
    And I Verify Success message for application submitted for Small Breeders Registration
    And I Click on Cancel button not to proceed with another registration
    And I Verify Application Status "<App_status>"
    And I Verify Payment Status "<Payment_Status>"
    Then I Sign Out as Front Registered User

    Examples:
      |Browser|Username |Password |Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |License    |Land_Extent|Owner_Type|Plot_Location|Spicies |Male_Female_Number|Total_Heads |Reason |Microchip_No|Cattle_Sex|Cattle_Age|Upload_test                        |Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
      |Chrome |Suraj    |Admin@123|Mrs              |Port Louis|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |2        |Married       |Spouse      |Keen          |Dafne             |Female|1Jan94|Actress    |Tea Grower |2.7        |Tenant    |Moka         |Cattle  |550               |550         |Meat   |AAA2563     |Male      |1Month    |src\test\resources\Upload_Test1.pdf|Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |

