$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US 13362.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13362 - Bio Farming Support Scheme"
    }
  ],
  "line": 4,
  "name": "User story 13362-GOC - Register as Bio Farming support scheme",
  "description": "",
  "id": "user-story-13362-goc---register-as-bio-farming-support-scheme",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13362"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario1"
    }
  ],
  "line": 8,
  "name": "Application to Register as Bio Farming Support Scheme",
  "description": "",
  "id": "user-story-13362-goc---register-as-bio-farming-support-scheme;application-to-register-as-bio-farming-support-scheme",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Registration_as_Bio_Farming_Support_scheme"
    },
    {
      "line": 7,
      "name": "@Scheme"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on New Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click to apply for Bio Farming support scheme",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "user-story-13362-goc---register-as-bio-farming-support-scheme;application-to-register-as-bio-farming-support-scheme;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "FPassword",
        "Applicant_Title",
        "District",
        "Education_Level",
        "Act",
        "Other_Occupation",
        "Photo",
        "Year_dur",
        "Marital_Status",
        "Relationship",
        "Family_Surname",
        "Family_Other_Names",
        "Gender",
        "DOB",
        "Occupation",
        "Org_acc_no",
        "Crop_Type",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Field_Location",
        "Production_System",
        "Total_Extent",
        "Crop_Grown",
        "Plantation_Type",
        "Date_Plantation_Seedling",
        "Upload_test",
        "Crop_Status",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method"
      ],
      "line": 28,
      "id": "user-story-13362-goc---register-as-bio-farming-support-scheme;application-to-register-as-bio-farming-support-scheme;;1"
    },
    {
      "cells": [
        "Chrome",
        "ybhunjun5",
        "Mauritius1!1710",
        "Mr",
        "Black River",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "1",
        "Married",
        "Spouse",
        "Sanon",
        "Kirti",
        "Female",
        "1Jan94",
        "Air Hostess",
        "0001252563",
        "Cane",
        "2.5",
        "Tenant",
        "Moka",
        "Port Louis",
        "Sheltered Farming",
        "600M2",
        "Pepper",
        "Interline",
        "1Aug2030",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Harvest",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Counter"
      ],
      "line": 29,
      "id": "user-story-13362-goc---register-as-bio-farming-support-scheme;application-to-register-as-bio-farming-support-scheme;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 103600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Application to Register as Bio Farming Support Scheme",
  "description": "",
  "id": "user-story-13362-goc---register-as-bio-farming-support-scheme;application-to-register-as-bio-farming-support-scheme;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 7,
      "name": "@Scheme"
    },
    {
      "line": 3,
      "name": "@US13362"
    },
    {
      "line": 7,
      "name": "@Registration_as_Bio_Farming_Support_scheme"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered Maupass User\u0027s Username \"ybhunjun5\" and Password \"Mauritius1!1710\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on New Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click to apply for Bio Farming support scheme",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 8820453900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ybhunjun5",
      "offset": 44
    },
    {
      "val": "Mauritius1!1710",
      "offset": 69
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 8184276700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 64186000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 5293530100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 743754000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18768600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 24013400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13384300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "duration": 921754600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewProgrammes()"
});
formatter.result({
  "duration": 3023154300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammeTypePage()"
});
formatter.result({
  "duration": 32536800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToApplyForBioFarmingSupportScheme()"
});
formatter.result({
  "duration": 1633119500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 9389127800,
  "status": "passed"
});
formatter.after({
  "duration": 194796100,
  "status": "passed"
});
formatter.after({
  "duration": 91200,
  "status": "passed"
});
});