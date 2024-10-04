$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13361_14829.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13361 -Form - Fertiliser Subsidy Scheme (FSS)"
    },
    {
      "line": 2,
      "value": "#User Story 14928 -12 Supplier - Manager User - Assigned Application List"
    }
  ],
  "line": 5,
  "name": "User Story 13361 and 14829 -Form - Fertiliser Subsidy Scheme (FSS) and workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 4,
      "name": "@US13361_14829"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario1"
    }
  ],
  "line": 9,
  "name": "Application for Subsidy scheme (FSS)and workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-subsidy-scheme-(fss)and-workflow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Application_for_Supplier_subsidy_workflow"
    },
    {
      "line": 8,
      "name": "@Fertilizer_FSS"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click to Apply for Fertiliser Subsidy (FSS)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-subsidy-scheme-(fss)and-workflow;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "FPassword",
        "Password",
        "Co_Name",
        "Rep_by",
        "BRN",
        "Cert_No",
        "Act",
        "Off_Add",
        "Enterprise_Address",
        "Status_Applicant",
        "Year_dur",
        "Prod_man",
        "No_person",
        "Actual_ann_turnover",
        "Status_business",
        "Years_operation",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status"
      ],
      "line": 28,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-subsidy-scheme-(fss)and-workflow;;1"
    },
    {
      "cells": [
        "Chrome",
        "vramachundren",
        "Ashven1206!",
        "Admin@123",
        "ABC Agro Co Ltd",
        "Mr John Brown",
        "C123456789",
        "XLPR852",
        "Full Time",
        "The Main Road, Grand Port",
        "Royal Road, Port Louis",
        "Company",
        "1",
        "Tomato, Pepper",
        "50",
        "10000000",
        "Existing",
        "5",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending"
      ],
      "line": 29,
      "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-subsidy-scheme-(fss)and-workflow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 139000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Application for Subsidy scheme (FSS)and workflow",
  "description": "",
  "id": "user-story-13361-and-14829--form---fertiliser-subsidy-scheme-(fss)-and-workflow;application-for-subsidy-scheme-(fss)and-workflow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Main_feature"
    },
    {
      "line": 8,
      "name": "@Fertilizer_FSS"
    },
    {
      "line": 4,
      "name": "@US13361_14829"
    },
    {
      "line": 8,
      "name": "@Application_for_Supplier_subsidy_workflow"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Input Registered Maupass User\u0027s Username \"vramachundren\" and Password \"Ashven1206!\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on Programmes",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify Programme Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click to Apply for Fertiliser Subsidy (FSS)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
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
  "duration": 6458768900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vramachundren",
      "offset": 44
    },
    {
      "val": "Ashven1206!",
      "offset": 73
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 8219513700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 80090200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 2091107700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 504551000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 25090900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 29274500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 25102800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProgrammes()"
});
formatter.result({
  "duration": 5834516000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammeTypePage()"
});
formatter.result({
  "duration": 46072900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToApplyForFertiliserSubsidyFSS()"
});
formatter.result({
  "duration": 1806589200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 9258998100,
  "status": "passed"
});
formatter.after({
  "duration": 91087500,
  "status": "passed"
});
formatter.after({
  "duration": 55900,
  "status": "passed"
});
});