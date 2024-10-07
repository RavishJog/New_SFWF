#User Story 13362 - Bio Farming Support Scheme

@Main_feature @US13362
  Feature: User story 13362-GOC - Register as Bio Farming support scheme

    #Scenario1
    @Registration_as_Bio_Farming_Support_scheme @Scheme
    Scenario Outline:Application to Register as Bio Farming Support Scheme

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
      And I click to apply for Bio Farming support scheme

      Then I Sign Out as Front Registered User


      Examples:
        |Browser|Username |FPassword       |Applicant_Title |District   |Education_Level |Act      |Other_Occupation  |Photo                               |Year_dur |Marital_Status|Relationship|Family_Surname|Family_Other_Names|Gender|DOB   |Occupation |Org_acc_no|Crop_Type|Land_Extent|Owner_Type|Plot_Location|Field_Location |Production_System|Total_Extent |Crop_Grown |Plantation_Type|Date_Plantation_Seedling |Upload_test                        |Crop_Status|Additional_Doc_Name      |Bank_Name  |Bank_Branch|Bank_Account_No|Confirmation|App_status|Payment_Status |Payment_method |
        |Chrome |ybhunjun5 |Mauritius1!1710|Mr              |Black River|Tertiary        |Full Time|Manager           |src\test\resources\Photo_upload.jpg |1        |Married       |Spouse      |Sanon         |Kirti             |Female|1Jan94|Air Hostess|0001252563|Cane     |2.5        |Tenant    |Moka         |Port Louis     |Sheltered Farming|600M2        |Pepper     |Interline      |1Aug2030                 |src\test\resources\Upload_Test1.pdf|Harvest    |Additional Document Test |ABC Banking|Port Louis |0001252563636  |Yes         |Submitted |Pending        |Counter        |
