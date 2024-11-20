$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Back_office_tests.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story Back Office Tests"
    }
  ],
  "line": 4,
  "name": "Back Office Tests",
  "description": "",
  "id": "back-office-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Back_Office_tests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 251,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 250,
      "name": "@Jenkins_Local_Test"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 259,
      "value": "#    And I Verify display of Farmers Card link"
    },
    {
      "line": 260,
      "value": "#    And I Verify Programmes link"
    },
    {
      "line": 261,
      "value": "#    And I Click on New Button to apply for Registration"
    },
    {
      "line": 262,
      "value": "#    And I Verify display of Registration Type Page"
    },
    {
      "line": 263,
      "value": "#    And I Click on Agro Processing Enterprise"
    },
    {
      "line": 264,
      "value": "#    And I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page"
    },
    {
      "line": 265,
      "value": "#    And I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\""
    },
    {
      "line": 266,
      "value": "#    And I Input Represented by \"\u003cRep_by\u003e\""
    },
    {
      "line": 267,
      "value": "#    And I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\""
    },
    {
      "line": 268,
      "value": "#    And I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\""
    },
    {
      "line": 269,
      "value": "#    And I Select Activity \"\u003cAct\u003e\""
    },
    {
      "line": 270,
      "value": "#    And I Input Office Address \"\u003cOff_Add\u003e\""
    },
    {
      "line": 271,
      "value": "#    And I Input Enterprise Address \"\u003cEnterprise_Address\u003e\""
    },
    {
      "line": 272,
      "value": "#    And I Select No of years for Registration membership \"\u003cYear_dur\u003e\""
    },
    {
      "line": 273,
      "value": "#    And I Input List of Products manufactured \"\u003cProd_man\u003e\""
    },
    {
      "line": 274,
      "value": "#    And I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\""
    },
    {
      "line": 275,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 276,
      "value": "#    And I Verify Upload Required Documents Page is displayed"
    },
    {
      "line": 277,
      "value": "#    And I Upload Business Registration Card \"\u003cUpload_test\u003e\""
    },
    {
      "line": 278,
      "value": "#    And I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\""
    },
    {
      "line": 279,
      "value": "#    And I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\""
    },
    {
      "line": 280,
      "value": "#    And I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\""
    },
    {
      "line": 281,
      "value": "#    And I Upload National Identity card of representative \"\u003cUpload_test\u003e\""
    },
    {
      "line": 282,
      "value": "#    And I Upload Location Plan Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 283,
      "value": "#    And I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 284,
      "value": "#    And I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 285,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 286,
      "value": "#    And I Click on Add Additional Document"
    },
    {
      "line": 287,
      "value": "#    And I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\""
    },
    {
      "line": 288,
      "value": "#    And I Verify Success message for adding Additional Document Name"
    },
    {
      "line": 289,
      "value": "#    And I Upload Additional Document \"\u003cUpload_test\u003e\""
    },
    {
      "line": 290,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 291,
      "value": "#    And I Click on Save and Continue"
    },
    {
      "line": 292,
      "value": "#    And I Verify Terms and Conditions Page"
    },
    {
      "line": 293,
      "value": "#    And I click on I agree to the Terms and Conditions"
    },
    {
      "line": 294,
      "value": "#    And I Select Bank \"\u003cBank_Name\u003e\""
    },
    {
      "line": 295,
      "value": "#    And I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\""
    },
    {
      "line": 296,
      "value": "#    And I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\""
    },
    {
      "line": 297,
      "value": "#    And I Click on Submit Application \"\u003cConfirmation\u003e\""
    },
    {
      "line": 298,
      "value": "#    And I Verify Success message for application submitted"
    },
    {
      "line": 299,
      "value": "#    And I Verify Application Status \"\u003cApp_status\u003e\""
    },
    {
      "line": 300,
      "value": "#    And I Verify Payment Status \"\u003cPayment_Status\u003e\""
    },
    {
      "line": 301,
      "value": "#    And I Copy Application Number"
    },
    {
      "line": 302,
      "value": "#    And I Click on Shopping Cart for payment"
    },
    {
      "line": 303,
      "value": "#    And I Select Application for payment"
    },
    {
      "line": 304,
      "value": "#    And I Click on Proceed to Payment"
    },
    {
      "line": 305,
      "value": "#    And I Click on Payment Icon"
    },
    {
      "line": 306,
      "value": "#    And I Select Payment Method \"\u003cPayment_method\u003e\""
    },
    {
      "line": 307,
      "value": "#    And I Click on Final Proceed to Payment"
    },
    {
      "line": 308,
      "value": "#    And I Verify Message to proceed to Post Office for Payment"
    },
    {
      "line": 309,
      "value": "#    And I Sign Out as Front Registered User"
    }
  ],
  "line": 313,
  "name": "",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
        "FPassword",
        "Password",
        "FUsername",
        "PwoUsername",
        "WpoUsername",
        "WOUsername",
        "ITUsername",
        "Remarks",
        "Bonafide",
        "Payment_Mode",
        "Amount_To_Pay",
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
        "Payment_Status",
        "Payment_method"
      ],
      "line": 314,
      "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
        "Admin@123",
        "Finance",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
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
        "Pending",
        "Counter"
      ],
      "line": 315,
      "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 159100,
  "status": "passed"
});
formatter.before({
  "duration": 41800,
  "status": "passed"
});
formatter.scenario({
  "line": 315,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "back-office-tests;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Back_Office_tests"
    },
    {
      "line": 250,
      "name": "@Jenkins_Local_Test"
    }
  ]
});
formatter.step({
  "line": 253,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
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
  "duration": 6578741300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj_Jo",
      "offset": 44
    },
    {
      "val": "Admin@123",
      "offset": 68
    }
  ],
  "location": "Steps.iInputRegisteredMaupassUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 8353460300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 54599700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1524391100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 447544800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 12044000,
  "status": "passed"
});
formatter.after({
  "duration": 1105455100,
  "status": "passed"
});
formatter.after({
  "duration": 59600,
  "status": "passed"
});
});