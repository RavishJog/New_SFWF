$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280 - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@silenv"
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
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
    },
    {
      "line": 7,
      "name": "@Smoke_counter_Agro-Processing-Enterprise"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button",
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
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Enterprise Address \"\u003cEnterprise_Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#    Finance"
    }
  ],
  "line": 68,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 76,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 77,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 78,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 79,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    PWO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 101,
      "value": "#    WPO"
    }
  ],
  "line": 102,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 119,
      "value": "#    WO/WA"
    }
  ],
  "line": 120,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I Verify for Document Upload Success Message for Site Visit",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#    WPO"
    }
  ],
  "line": 145,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 163,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 164,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 182,
      "value": "#    WPO"
    }
  ],
  "line": 183,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 199,
      "value": "#    IT Department"
    }
  ],
  "line": 200,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 212,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 213,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 214,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 226,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
      "line": 227,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "Finance_suraj",
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
      "line": 228,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 108500,
  "status": "passed"
});
formatter.before({
  "duration": 27500,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 7,
      "name": "@Smoke_counter_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Click on Sign In button",
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
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I Upload Additional Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#    Finance"
    }
  ],
  "line": 68,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I Input Finance Username \"Finance_suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 76,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 77,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 78,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 79,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "#    PWO"
    }
  ],
  "line": 85,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 101,
      "value": "#    WPO"
    }
  ],
  "line": 102,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 119,
      "value": "#    WO/WA"
    }
  ],
  "line": 120,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I Verify for Document Upload Success Message for Site Visit",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#    WPO"
    }
  ],
  "line": 145,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 163,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 164,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 182,
      "value": "#    WPO"
    }
  ],
  "line": 183,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 199,
      "value": "#    IT Department"
    }
  ],
  "line": 200,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 212,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 213,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 214,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 6823976900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 316573000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8701499200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 89858900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1446780400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 23751400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 26870600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 28683700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 566069300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 1875747000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 3706675700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 74041700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 107982600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 71459100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 70
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRNForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 75981100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 72
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNoForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 68891300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 79160300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 89429200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Royal Road, Port Louis",
      "offset": 28
    }
  ],
  "location": "Steps.iInputEnterpriseAddress(String)"
});
formatter.result({
  "duration": 101351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4165593600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 6269776600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 61
    }
  ],
  "location": "Steps.iSelectStatusOfApplicantForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 162346400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9193603900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 83145400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 3257128700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2179718900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 2180912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 2176947200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 2177572700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 2186008400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 2174820300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 2184500500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5018742400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3128835600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1647145300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 47048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
});
formatter.result({
  "duration": 2177176600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5025138800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9190614900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 66357600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1598052100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3716250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1140851100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1105528700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 4596006000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10079059500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 46024100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 56201300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3146065700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2224482200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 620276900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 629717500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5156082200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2116842900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8067705200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 13830000700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9061738100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance_suraj",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 287960800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2294683600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 86502700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 79507300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1566863100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1584127000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 54968300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1582284300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 11153754800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4724009200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 980831600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 17903731900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 218409400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 11499575900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 68767900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1812613300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1550782500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6606288200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6376841500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 120598209000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //h3[contains(.,\u0027Actions\u0027)] (tried for 120 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir17588_1601731146}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62804}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 30ca9e49e51991f62d47acfc006874f0\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iClickOnActionButton(Steps.java:2167)\r\n\tat ✽.And I Click on Action Button(features/US13280.feature:93)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessageForSiteVisit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1054282600,
  "status": "passed"
});
formatter.after({
  "duration": 189900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 230,
      "value": "#Scenario2"
    }
  ],
  "line": 232,
  "name": "Approval for Payment online for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 231,
      "name": "@Approval_by_BO_Payment_online_for_Agro-Processing-Enterprise"
    },
    {
      "line": 231,
      "name": "@Smoke_online_Agro-Processing-Enterprise"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I Input Enterprise Address \"\u003cEnterprise_Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "I Upload Additional Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 296,
      "value": "#    PWO"
    }
  ],
  "line": 297,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#    WPO"
    }
  ],
  "line": 314,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 331,
      "value": "#    WO/WA"
    }
  ],
  "line": 332,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 356,
      "value": "#    WPO"
    }
  ],
  "line": 357,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 375,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 376,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 394,
      "value": "#    WPO"
    }
  ],
  "line": 395,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 411,
      "value": "#    IT Department"
    }
  ],
  "line": 412,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 424,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 425,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 437,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 438,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
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
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 439,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 9600,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "Approval for Payment online for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 231,
      "name": "@Approval_by_BO_Payment_online_for_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 231,
      "name": "@Smoke_online_Agro-Processing-Enterprise"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I Click on Agro Processing Enterprise",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "I Upload Additional Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    35,
    36,
    37,
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 296,
      "value": "#    PWO"
    }
  ],
  "line": 297,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#    WPO"
    }
  ],
  "line": 314,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 331,
      "value": "#    WO/WA"
    }
  ],
  "line": 332,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 356,
      "value": "#    WPO"
    }
  ],
  "line": 357,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 375,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 376,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I Verify display of REGISTRATION FOR AGRO-PROCESSING ENTERPRISE Page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 394,
      "value": "#    WPO"
    }
  ],
  "line": 395,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 411,
      "value": "#    IT Department"
    }
  ],
  "line": 412,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 424,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 425,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 5288184000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 232732800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3765947100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 54091400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1621142600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 35257300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 23933100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16654300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 1377128500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 45942900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 4500339000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 60405100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 91866000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 71557600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 70
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRNForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 80048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 72
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNoForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 90362100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 67671000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 121147100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Royal Road, Port Louis",
      "offset": 28
    }
  ],
  "location": "Steps.iInputEnterpriseAddress(String)"
});
formatter.result({
  "duration": 97706600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4183429600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 6252040200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 61
    }
  ],
  "location": "Steps.iSelectStatusOfApplicantForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 151394600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9203435500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 82088500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 2174224200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2180944900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 1638390800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 2712882900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 1647741500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 1625821700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 1642503500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 1630956900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5022474000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3154678600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1632524200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 50969700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
});
formatter.result({
  "duration": 2192785800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5031678100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9179443600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 65289500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1601087500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3731991400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1125489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1119338200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 4965227900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10082682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 41545300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 65800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 61844800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3156548700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2234382900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 593053400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 607643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5159684700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 107432100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 5756982200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5429852000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 302744652000,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 300.000\n  (Session info: chrome\u003d130.0.6723.117)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir26620_2043723015}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62927}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 5d25f5e891dd733f12dbe73e70eb0a8f\n*** Element info: {Using\u003dxpath, value\u003d//h5[contains(.,\u0027My Application\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iClickOnPayNowButton(Steps.java:1984)\r\n\tat ✽.And I Click on Pay Now button(features/US13280.feature:291)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 953583100,
  "status": "passed"
});
formatter.after({
  "duration": 237600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 441,
      "value": "#Scenario3"
    }
  ],
  "line": 443,
  "name": "Payment at counter for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 442,
      "name": "@Approval_by_BO_Payment_at_counter_for_Farmers_Cooperative_Association"
    },
    {
      "line": 442,
      "name": "@Smoke_counter_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I Input Business Registration No.(BRN) \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I Input Certificate of Incorporation No \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I Input Office Phone Number \"\u003cOff_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I Input Mobile Phone Number \"\u003cMob_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I Select Status of Applicant \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Input No. of persons employed \"\u003cNo_person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Input Actual Annual Turnover (Rs) \"\u003cActual_ann_turnover\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Select Status of business \"\u003cStatus_business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I Input No. of years of operation \"\u003cYears_operation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "I Upload Additional Documents \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 487,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 489,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 491,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I Input Bank Branch \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 493,
  "name": "I Input Personal Bank Account Number\"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 495,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 503,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 505,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 506,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 508,
      "value": "#    Finance"
    },
    {
      "line": 509,
      "value": "#    Finance"
    }
  ],
  "line": 510,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 512,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 513,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 514,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 515,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 518,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 519,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 520,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 521,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 522,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 525,
      "value": "#    PWO"
    }
  ],
  "line": 526,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 527,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 528,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 529,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 530,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 531,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 532,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 533,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 534,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 535,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 536,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 537,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 538,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 541,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 542,
      "value": "#    WPO"
    }
  ],
  "line": 543,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 549,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 550,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 552,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 555,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 556,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 557,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 558,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 560,
      "value": "#    WO/WA"
    }
  ],
  "line": 561,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 563,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 564,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 565,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 566,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 567,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 568,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 569,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 570,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "I Input Site visit remarks in Site Report \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 574,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 575,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 580,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 581,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 582,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 583,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 585,
      "value": "#    WPO"
    }
  ],
  "line": 586,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 587,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 588,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 589,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 590,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 591,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 592,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 593,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 594,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 595,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 596,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 597,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 598,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 599,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 600,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 601,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 602,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 604,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 605,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 606,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 607,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 608,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 609,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 610,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 611,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 612,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 613,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 615,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 616,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 617,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 618,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 619,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 620,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 621,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 623,
      "value": "#    WPO"
    }
  ],
  "line": 624,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 625,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 626,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 627,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 629,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 630,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 631,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 632,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 633,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 634,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 635,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 636,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 637,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 638,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 640,
      "value": "#    IT Department"
    }
  ],
  "line": 641,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 642,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 643,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 644,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 645,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 647,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 648,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 649,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 650,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 651,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 653,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 654,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 655,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 656,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 657,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 658,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 660,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 661,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 662,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 663,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 664,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 666,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Off_Num",
        "Mob_Num",
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
      "line": 667,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
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
        "2126666",
        "58967896",
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
      "line": 668,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28200,
  "status": "passed"
});
formatter.before({
  "duration": 11700,
  "status": "passed"
});
formatter.scenario({
  "line": 668,
  "name": "Payment at counter for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 442,
      "name": "@Approval_by_BO_Payment_at_counter_for_Farmers_Cooperative_Association"
    },
    {
      "line": 442,
      "name": "@Smoke_counter_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 452,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I Input Office Phone Number \"2126666\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I Input Mobile Phone Number \"58967896\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "I Upload Additional Documents \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 487,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 489,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 491,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 493,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 495,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 503,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 505,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 506,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 508,
      "value": "#    Finance"
    },
    {
      "line": 509,
      "value": "#    Finance"
    }
  ],
  "line": 510,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 512,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 513,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 514,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 515,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 517,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 518,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 519,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 520,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 521,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 522,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 525,
      "value": "#    PWO"
    }
  ],
  "line": 526,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 527,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 528,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 529,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 530,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 531,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 532,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 533,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 534,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 535,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 536,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 537,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 538,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 541,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 542,
      "value": "#    WPO"
    }
  ],
  "line": 543,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 549,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 550,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 552,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 555,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 556,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 557,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 558,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 560,
      "value": "#    WO/WA"
    }
  ],
  "line": 561,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 563,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 564,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 565,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 566,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 567,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 568,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 569,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 570,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "I Input Site visit remarks in Site Report \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 574,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 575,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 580,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 581,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 582,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 583,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 585,
      "value": "#    WPO"
    }
  ],
  "line": 586,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 587,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 588,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 589,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 590,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 591,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 592,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 593,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 594,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 595,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 596,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 597,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 598,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 599,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 600,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 601,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 602,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 604,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 605,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 606,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 607,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 608,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 609,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 610,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 611,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 612,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 613,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 615,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 616,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 617,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 618,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 619,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 620,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 621,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 623,
      "value": "#    WPO"
    }
  ],
  "line": 624,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 625,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 626,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 627,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 629,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 630,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 631,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 632,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 633,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 634,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 635,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 636,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 637,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 638,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 640,
      "value": "#    IT Department"
    }
  ],
  "line": 641,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 642,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 643,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 644,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 645,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 647,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 648,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 649,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 650,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 651,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 653,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 654,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 655,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 656,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 657,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 658,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 660,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 661,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 662,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 663,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 664,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 7342694100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 174394800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6409717500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 30202900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1547353800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 16689800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 14038400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16695200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 373349100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 1860439800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 3672408600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 61629300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 64302400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 61411800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 40
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRN(String)"
});
formatter.result({
  "duration": 65886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 41
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNo(String)"
});
formatter.result({
  "duration": 59639000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 58549400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2126666",
      "offset": 29
    }
  ],
  "location": "Steps.iInputOfficePhoneNumber(String)"
});
formatter.result({
  "duration": 60198000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58967896",
      "offset": 29
    }
  ],
  "location": "Steps.iInputMobilePhoneNumber(String)"
});
formatter.result({
  "duration": 63334300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 73971700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectStatusOfApplicant(String)"
});
formatter.result({
  "duration": 1619529700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
  "duration": 2120610100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 6236816700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "Steps.iInputNoOfPersonsEmployed(String)"
});
formatter.result({
  "duration": 77299300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000",
      "offset": 37
    }
  ],
  "location": "Steps.iInputActualAnnualTurnoverRs(String)"
});
formatter.result({
  "duration": 68469400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectStatusOfBusiness(String)"
});
formatter.result({
  "duration": 53522000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "Steps.iInputNoOfYearsOfOperation(String)"
});
formatter.result({
  "duration": 73305700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9173334400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 121358000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 2719594000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 2648088300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 7870116100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 10489859500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 6874056900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 11686271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 12154688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 6823235000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5006953400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3130540200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1645894000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 38859800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 31
    }
  ],
  "location": "Steps.iUploadAdditionalDocuments(String)"
});
formatter.result({
  "duration": 2651164500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5010497200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9194783700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 69817900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1596363000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3713358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "duration": 1155550300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 37
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumber(String)"
});
formatter.result({
  "duration": 1096328100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 5261012300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10053102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 47465200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 56942400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3122607700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2213497300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 1644489800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 1150339600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5154599000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2133945200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8049992300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 11045533800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 13981398700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 162313700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2547779900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 39073500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 52144200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1557307800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1552259500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 49741700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1581413300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 11136047300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4524222000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1008724900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 8608681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 187538300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 9312306600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 67248400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1231706600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1552681900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6589383600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6731728900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5564632800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 6936011100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1633508900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10132430500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 97040100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5320758200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4525142700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1049203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9390044000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 260864300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6039412700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 58796100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1291689900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1542678800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6608902500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5774824000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4995204800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1676035200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1735652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10112217000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 94107700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5284488500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4529282300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1008150500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9600728400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 231957700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6327366500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 76932300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1279358600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1555707900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6609624200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5884423700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 83872100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 51179900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 43
    }
  ],
  "location": "Steps.iInputSiteVisitRemarksInSiteReport(String)"
});
formatter.result({
  "duration": 89885800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "duration": 7490544500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5023083100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 7993727100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 15834400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4985683200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1656930300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1704252200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10127151600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 83465500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5311578700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4509326400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1066930100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 8205405300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 247462500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6156732500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 84842400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1434846000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1559501600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6600919000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7295773200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5020256500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 6487179100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "duration": 76816100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "duration": 4859322300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "duration": 28242900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 78786700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 4783122500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 7291688400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1018534900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 7060813700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 246422800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 9289305300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 42181300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1736489300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 24420800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13647300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15774900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2207153800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 2415730200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9158464000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 83000400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9164935300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 81616300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 6001209700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10074487400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 14182375200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 14582721100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 247781700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7173740500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 81925600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1445859000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1552930700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6590796000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7456862500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5015932600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "duration": 1665897500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10111007100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 77727700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "duration": 5303433800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4540879300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1036407400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 10753970900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 274743500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1847290300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 82020500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1359799300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1556171200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6602924500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7862880100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "duration": 5339018900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4544195500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1066425800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4044373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 254961100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5641825600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 51926300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 2041611200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 20935700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 21681300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13567900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "duration": 2145467800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "duration": 52317600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 14860538100,
  "status": "passed"
});
formatter.after({
  "duration": 1421100,
  "status": "passed"
});
formatter.after({
  "duration": 24100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 670,
      "value": "#Scenario4"
    }
  ],
  "line": 672,
  "name": "Payment online for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 671,
      "name": "@Approval_by_BO_Payment_online_for_Farmers_Cooperative_Association"
    },
    {
      "line": 671,
      "name": "@Smoke_online_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 674,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I Input Associate/Society/Company Name \"\u003cCo_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I Input Represented by \"\u003cRep_by\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I Input Business Registration No.(BRN) \"\u003cBRN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I Input Certificate of Incorporation No \"\u003cCert_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "I Select Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I Input Office Phone Number \"\u003cOff_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 692,
  "name": "I Input Mobile Phone Number \"\u003cMob_Num\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "I Input Office Address \"\u003cOff_Add\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I Select Status of Applicant \"\u003cStatus_Applicant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 695,
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 696,
  "name": "I Input List of Products manufactured \"\u003cProd_man\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I Input No. of persons employed \"\u003cNo_person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I Input Actual Annual Turnover (Rs) \"\u003cActual_ann_turnover\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I Select Status of business \"\u003cStatus_business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I Input No. of years of operation \"\u003cYears_operation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 701,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "I Upload Business Registration Card \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I Upload Certificate of Incorporation \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "I Upload List of Directors/ Associates \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 706,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 707,
  "name": "I Upload National Identity card of representative \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "I Upload Location Plan Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "I Upload Copy of SMEDA Certificate Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "I Upload Copy of Utility Bill Document \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 711,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 712,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 714,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 715,
  "name": "I Upload Additional Documents \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 716,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 717,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 718,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 720,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I Input Bank Branch \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I Input Personal Bank Account Number\"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 724,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 725,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 727,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 728,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 732,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 733,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 735,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 736,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 738,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 739,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 741,
      "value": "#    PWO"
    }
  ],
  "line": 742,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 743,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 746,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 747,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 748,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 749,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 750,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 752,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 754,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 755,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 756,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 758,
      "value": "#    WPO"
    }
  ],
  "line": 759,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 762,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 763,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 764,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 765,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 767,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 768,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 769,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 770,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 771,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 774,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 776,
      "value": "#    WO/WA"
    }
  ],
  "line": 777,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 781,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 782,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 783,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 785,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I Input Site visit remarks in Site Report \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 793,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 794,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 795,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 796,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 797,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 798,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 799,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 801,
      "value": "#    WPO"
    }
  ],
  "line": 802,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 804,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 805,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 806,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 807,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 808,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 812,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 813,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 814,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 816,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 820,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 821,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 824,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 825,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 826,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 827,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 829,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 830,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 831,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 832,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 833,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 834,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 835,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 836,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 837,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 839,
      "value": "#    WPO"
    }
  ],
  "line": 840,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 846,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 847,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 848,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 849,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 850,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 851,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 852,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 853,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 854,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 856,
      "value": "#    IT Department"
    }
  ],
  "line": 857,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 860,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 861,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 862,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 863,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 864,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 865,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 866,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 867,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 869,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 870,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 873,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 874,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 875,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 876,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 877,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 878,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 879,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 880,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 882,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Off_Num",
        "Mob_Num",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 883,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
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
        "2126666",
        "58967896",
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
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 884,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26800,
  "status": "passed"
});
formatter.before({
  "duration": 7800,
  "status": "passed"
});
formatter.scenario({
  "line": 884,
  "name": "Payment online for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 671,
      "name": "@Smoke_online_Farmers_Cooperative_Association"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 671,
      "name": "@Approval_by_BO_Payment_online_for_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 674,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 681,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 684,
  "name": "I Click on Farmers Cooperatives Association, Society or Company",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "I Input Associate/Society/Company Name \"ABC Agro Co Ltd\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I Input Office Phone Number \"2126666\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 692,
  "name": "I Input Mobile Phone Number \"58967896\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 695,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 696,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 701,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "I Upload Business Registration Card \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 706,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 707,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 711,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 712,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 714,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 715,
  "name": "I Upload Additional Documents \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 716,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 717,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 718,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 720,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 724,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 725,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 727,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 728,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 732,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 733,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 735,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    37,
    38,
    39,
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 736,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 738,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 739,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 741,
      "value": "#    PWO"
    }
  ],
  "line": 742,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 743,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 746,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 747,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 748,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 749,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 750,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 752,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 754,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 755,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 756,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 758,
      "value": "#    WPO"
    }
  ],
  "line": 759,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 762,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 763,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 764,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 765,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 767,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 768,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 769,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 770,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 771,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 774,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 776,
      "value": "#    WO/WA"
    }
  ],
  "line": 777,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 781,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 782,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 783,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 785,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I Input Site visit remarks in Site Report \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 793,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 794,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 795,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 796,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 797,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 798,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 799,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 801,
      "value": "#    WPO"
    }
  ],
  "line": 802,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 804,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 805,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 806,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 807,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 808,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 812,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 813,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 814,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 816,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 820,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 821,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 824,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 825,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 826,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 827,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 829,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 830,
  "name": "I Verify display of Registration of Farmers page",
  "keyword": "And "
});
formatter.step({
  "line": 831,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 832,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 833,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 834,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 835,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 836,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 837,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 839,
      "value": "#    WPO"
    }
  ],
  "line": 840,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 846,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 847,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 848,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 849,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 850,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 851,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 852,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 853,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 854,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 856,
      "value": "#    IT Department"
    }
  ],
  "line": 857,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 860,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 861,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 862,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 863,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 864,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 865,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 866,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 867,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 869,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 870,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 873,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 874,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 875,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 876,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 877,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 878,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 879,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 880,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 5101157500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 265769400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7295142100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 60397900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1921561600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 23203900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 12916600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15462300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 483249000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 948472900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 3588315300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 53795800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Agro Co Ltd",
      "offset": 40
    }
  ],
  "location": "Steps.iInputAssociateSocietyCompanyName(String)"
});
formatter.result({
  "duration": 91653500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr John Brown",
      "offset": 24
    }
  ],
  "location": "Steps.iInputRepresentedBy(String)"
});
formatter.result({
  "duration": 116921500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123456789",
      "offset": 40
    }
  ],
  "location": "Steps.iInputBusinessRegistrationNoBRN(String)"
});
formatter.result({
  "duration": 86341000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XLPR852",
      "offset": 41
    }
  ],
  "location": "Steps.iInputCertificateOfIncorporationNo(String)"
});
formatter.result({
  "duration": 78463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 19
    }
  ],
  "location": "Steps.iSelectActivity(String)"
});
formatter.result({
  "duration": 94414000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2126666",
      "offset": 29
    }
  ],
  "location": "Steps.iInputOfficePhoneNumber(String)"
});
formatter.result({
  "duration": 107472500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58967896",
      "offset": 29
    }
  ],
  "location": "Steps.iInputMobilePhoneNumber(String)"
});
formatter.result({
  "duration": 99287200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Main Road, Grand Port",
      "offset": 24
    }
  ],
  "location": "Steps.iInputOfficeAddress(String)"
});
formatter.result({
  "duration": 93696500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectStatusOfApplicant(String)"
});
formatter.result({
  "duration": 1652823100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembership(String)"
});
formatter.result({
  "duration": 2139291000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomato, Pepper",
      "offset": 39
    }
  ],
  "location": "Steps.iInputListOfProductsManufactured(String)"
});
formatter.result({
  "duration": 6277277700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "Steps.iInputNoOfPersonsEmployed(String)"
});
formatter.result({
  "duration": 97437200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000",
      "offset": 37
    }
  ],
  "location": "Steps.iInputActualAnnualTurnoverRs(String)"
});
formatter.result({
  "duration": 71238900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existing",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectStatusOfBusiness(String)"
});
formatter.result({
  "duration": 59212600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "Steps.iInputNoOfYearsOfOperation(String)"
});
formatter.result({
  "duration": 71405900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9170501200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 82582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 37
    }
  ],
  "location": "Steps.iUploadBusinessRegistrationCard(String)"
});
formatter.result({
  "duration": 2704205600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 39
    }
  ],
  "location": "Steps.iUploadCertificateOfIncorporation(String)"
});
formatter.result({
  "duration": 6920544800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadListOfDirectorsAssociates(String)"
});
formatter.result({
  "duration": 2179967100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 78
    }
  ],
  "location": "Steps.iUploadBoardResolutionOfEnterpriseForAppointmentOfRepresentativeS(String)"
});
formatter.result({
  "duration": 2708646200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 51
    }
  ],
  "location": "Steps.iUploadNationalIdentityCardOfRepresentative(String)"
});
formatter.result({
  "duration": 2173509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 33
    }
  ],
  "location": "Steps.iUploadLocationPlanDocument(String)"
});
formatter.result({
  "duration": 1638522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 45
    }
  ],
  "location": "Steps.iUploadCopyOfSMEDACertificateDocument(String)"
});
formatter.result({
  "duration": 2202232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadCopyOfUtilityBillDocument(String)"
});
formatter.result({
  "duration": 1661371200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5028976900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3144990500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1691504800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 40035200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 31
    }
  ],
  "location": "Steps.iUploadAdditionalDocuments(String)"
});
formatter.result({
  "duration": 4805409900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5032850300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9179000400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 81589500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1594033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3731138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "duration": 1109924600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 37
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumber(String)"
});
formatter.result({
  "duration": 1102137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 11374811000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10086342800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 44907800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 57394600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3123463300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2210511400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 601082500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 1132893700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5132480900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 101254600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 17749498800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5355897400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 303253477900,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 300.000\n  (Session info: chrome\u003d130.0.6723.117)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir25420_1672458314}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63871}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: eae70a20520e2cd67da7b61b5f0acb7c\n*** Element info: {Using\u003dxpath, value\u003d//h5[contains(.,\u0027My Application\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iClickOnPayNowButton(Steps.java:1984)\r\n\tat ✽.And I Click on Pay Now button(features/US13280.feature:736)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 43
    }
  ],
  "location": "Steps.iInputSiteVisitRemarksInSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1079360200,
  "status": "passed"
});
formatter.after({
  "duration": 221100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 887,
      "value": "#Scenario5"
    }
  ],
  "line": 889,
  "name": "Payment at counter for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    },
    {
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 894,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 895,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 896,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 897,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 898,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 899,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 900,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 901,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 902,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 903,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 904,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 905,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 906,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 909,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 910,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 912,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 913,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 915,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 916,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 917,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 918,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 919,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 920,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 921,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 922,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 923,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 924,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 925,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 926,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 927,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 928,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 929,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 934,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 935,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 936,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 937,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 938,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 939,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 940,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 941,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 942,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 943,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 944,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 945,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 946,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 947,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 948,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 949,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 950,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 951,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 952,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 953,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 954,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 955,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 956,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 964,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 965,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 968,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 969,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 970,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 977,
      "value": "#    Finance"
    }
  ],
  "line": 978,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 987,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 988,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 989,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 993,
      "value": "#    PWO"
    }
  ],
  "line": 994,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1003,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1004,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1005,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1010,
      "value": "#    WPO"
    }
  ],
  "line": 1011,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1028,
      "value": "#    WO/WA"
    }
  ],
  "line": 1029,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1030,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1031,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1032,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1049,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1050,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1051,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1052,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1053,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1055,
      "value": "#    WPO"
    }
  ],
  "line": 1056,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1068,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1069,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1070,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1071,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1072,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1074,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1075,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1076,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1077,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1088,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1089,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1092,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1093,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1095,
      "value": "#    WPO"
    }
  ],
  "line": 1096,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1100,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1101,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1102,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1103,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1104,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1106,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1107,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1109,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1110,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1112,
      "value": "#    IT Department"
    }
  ],
  "line": 1113,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1114,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1115,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1116,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1117,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1118,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1119,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1120,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1121,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1122,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1123,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1125,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1126,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1127,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1128,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1135,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1136,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1138,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
      "line": 1139,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
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
        "9",
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
      "line": 1140,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 5400,
  "status": "passed"
});
formatter.scenario({
  "line": 1140,
  "name": "Payment at counter for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration"
    },
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 894,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 895,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 896,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 897,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 898,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 899,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 900,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 901,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 902,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 903,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 904,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 905,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 906,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 909,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 910,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 912,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 913,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 915,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 916,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 917,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 918,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 919,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 920,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 921,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 922,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 923,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 924,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 925,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 926,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 927,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 928,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 929,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 934,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 935,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 936,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 937,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 938,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 939,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 940,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 941,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 942,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 943,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 944,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 945,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 946,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 947,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 948,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 949,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 950,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 951,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 952,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 953,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 954,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 955,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 956,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 964,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 965,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 968,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 969,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 970,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 977,
      "value": "#    Finance"
    }
  ],
  "line": 978,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 987,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 988,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 989,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 993,
      "value": "#    PWO"
    }
  ],
  "line": 994,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1003,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1004,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1005,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1010,
      "value": "#    WPO"
    }
  ],
  "line": 1011,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1028,
      "value": "#    WO/WA"
    }
  ],
  "line": 1029,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1030,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1031,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1032,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1049,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1050,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1051,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1052,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1053,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1055,
      "value": "#    WPO"
    }
  ],
  "line": 1056,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1068,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1069,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1070,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1071,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1072,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1074,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1075,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1076,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1077,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1088,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1089,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1092,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1093,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1095,
      "value": "#    WPO"
    }
  ],
  "line": 1096,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1100,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1101,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1102,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1103,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1104,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1106,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1107,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1109,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1110,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1112,
      "value": "#    IT Department"
    }
  ],
  "line": 1113,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1114,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1115,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1116,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1117,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1118,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1119,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1120,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1121,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1122,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1123,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1125,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1126,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1127,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1128,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1135,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1136,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 5551243300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 189693600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7792343200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 34392400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1677344800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 22142000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 14090500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13347300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 1901366700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 34105600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 3678900800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 52460600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 26
    }
  ],
  "location": "Steps.iSelectApplicantTitle(String)"
});
formatter.result({
  "duration": 2674811800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black River",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5787843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3650417700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 192178400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 62637500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1745405700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1032948900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4156171300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1642730900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9171123100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 96788800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3099609500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3097524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectFamilyRelationship(String)"
});
formatter.result({
  "duration": 2662399700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanon",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 54237100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kirti",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 50300400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1646480000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5878205100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Air Hostess",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 85125400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 46612000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 41830900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 48298100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9187935100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 71285600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3105913800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "duration": 604469400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cane",
      "offset": 20
    }
  ],
  "location": "Steps.iSelectCropType(String)"
});
formatter.result({
  "duration": 1637196800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "duration": 2117672300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "duration": 1627627000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "duration": 61615900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9179269200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 96152200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1586433000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 74520300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3707949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1133058800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1125552000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 5101187400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10069282100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 44901000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 51000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 53689900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3130428700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2228441600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 2215006900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 1166617900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5127944700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2110145800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8084407900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 13626218800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 11976565400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 159117900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3297726100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 41645500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 56504300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1564910400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1553172000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 66470800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1583432700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 11143751600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4554270700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 978474100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 12366114100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 146311600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5592614600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 37386700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1213763000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1562801600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6602142400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5688520400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5034062400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 7923728200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1644679200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10076005600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 96453700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5290194800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4634232100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1024656100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 12733008700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 157983600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8049372600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 43457000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1232910000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1558417700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6601231300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5497989900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5049199600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2176546200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1713953900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10126262500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 90098700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 6388576000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4613773900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1022444600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 15625090800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 174858000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6340931900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 39478400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1405474500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1569495500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6585354800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5492091600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 86545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 52881300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "duration": 90258300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "duration": 8698660300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForBonafideDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 12080300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAddInformationForCropDetailsInSectionOne()"
});
formatter.result({
  "duration": 39893300200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectDripIrrigationFacilityInSectionTwo()"
});
formatter.result({
  "duration": 10376542800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 6507524100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 10544700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5085870900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2167322600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1724565200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10126302600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 90377000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5407250400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4550794100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 993869300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 7898599100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 149191300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6465386200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 40592500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1161146100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1563561700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6590874100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7576394200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5090302000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 6523286800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "duration": 67054600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 4905838300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 15681600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 46168200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 4869910600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4517865200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1019881000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 5353033400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 235259100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5731891700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 35825900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1715660100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18174000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13199700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16607600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2200151200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 2599714000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9184719000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 96701300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9155875400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 75899100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9167076000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 97289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 4831952300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10049838000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 13000655500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 8423458300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 149118900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6835806100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 42706100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1020366700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1559127500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6608864300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7262722000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5015462900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "duration": 1652478300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10108375600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 94340100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "duration": 5282020000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4568333200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1003607600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 13114783800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 154759400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1481103100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 48306100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1057304800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1547045000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6588713600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7389224000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "duration": 5777596400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4558301200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1013405700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4063928500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 221459700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5046228400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 50618100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1680532800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 24391400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 22057900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 17973800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "duration": 2109514800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "duration": 44764500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 13233132300,
  "status": "passed"
});
formatter.after({
  "duration": 1433000,
  "status": "passed"
});
formatter.after({
  "duration": 25400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1142,
      "value": "#Scenario6"
    }
  ],
  "line": 1144,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1143,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 1143,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1146,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1147,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1148,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1159,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1160,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1174,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1175,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1183,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 1184,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1189,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 1190,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1191,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 1192,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 1193,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 1194,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 1195,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 1196,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 1197,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 1198,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 1199,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 1200,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 1201,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 1202,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 1203,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 1204,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 1205,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 1206,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 1207,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 1208,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 1209,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 1210,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 1211,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1217,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1218,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1219,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1220,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1225,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1226,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1227,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1233,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1234,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1236,
      "value": "#    PWO"
    }
  ],
  "line": 1237,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1251,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1252,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1253,
      "value": "#    WPO"
    }
  ],
  "line": 1254,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1255,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1256,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1257,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1258,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1259,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1260,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1261,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1262,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1263,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1268,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1269,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1271,
      "value": "#    WO/WA"
    }
  ],
  "line": 1272,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1273,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1274,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1275,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1292,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1293,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1294,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1295,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1298,
      "value": "#    WPO"
    }
  ],
  "line": 1299,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1310,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1311,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1312,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1313,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1314,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1315,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1317,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1318,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1319,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1320,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1323,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1324,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1325,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1326,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1327,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1331,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1332,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1333,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1336,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1338,
      "value": "#    WPO"
    }
  ],
  "line": 1339,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1340,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1341,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1342,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1343,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1344,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1345,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1346,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1348,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1349,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1350,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1355,
      "value": "#    IT Department"
    }
  ],
  "line": 1356,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1361,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1362,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1363,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1364,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1365,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1368,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1369,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1370,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1371,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1374,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1375,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1376,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1377,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1378,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1379,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1381,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 1382,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
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
        "9",
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
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 1383,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18200,
  "status": "passed"
});
formatter.before({
  "duration": 4500,
  "status": "passed"
});
formatter.scenario({
  "line": 1383,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1143,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 1143,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1146,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1147,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1148,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1159,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1160,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1174,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1175,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1183,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 1184,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1189,
      "value": "#    And I Save Particulars of Crop"
    }
  ],
  "line": 1190,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1191,
      "value": "#    And I Verify Display of Particulars for Horticultural Plantations Page"
    },
    {
      "line": 1192,
      "value": "#    And I Click on Add Horticultural"
    },
    {
      "line": 1193,
      "value": "#    And Verify Display of Particulars for Horticultural Plantations Table"
    },
    {
      "line": 1194,
      "value": "#    And I Input Field Location \"\u003cField_Location\u003e\""
    },
    {
      "line": 1195,
      "value": "#    And I Select Production System \"\u003cProduction_System\u003e\""
    },
    {
      "line": 1196,
      "value": "#    And I Input Total Extent of plot - Size \"\u003cTotal_Extent\u003e\""
    },
    {
      "line": 1197,
      "value": "#    And I Input Crop grown at time of Registration/ Crop to be grown \"\u003cCrop_Grown\u003e\""
    },
    {
      "line": 1198,
      "value": "#    And I Select Owner Type for Horticultural Plantation \"\u003cOwner_Type\u003e\""
    },
    {
      "line": 1199,
      "value": "#    And I Select Plantation Type \"\u003cPlantation_Type\u003e\""
    },
    {
      "line": 1200,
      "value": "#    And I Input Expected Date of Planting/Seedling \"\u003cDate_Plantation_Seedling\u003e\""
    },
    {
      "line": 1201,
      "value": "#    And I Save Particulars for Horticultural Plantations"
    },
    {
      "line": 1202,
      "value": "#    And I Upload documents for Horticultural Plantations \"\u003cUpload_test\u003e\""
    },
    {
      "line": 1203,
      "value": "#    And I Verify for Document Upload Success Message"
    },
    {
      "line": 1204,
      "value": "#    And I Close Horticultural Plantation Documents tab"
    },
    {
      "line": 1205,
      "value": "#    And I Click on Edit button for Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 1206,
      "value": "#    And I Verify Particulars for Horticultural Plantations declared under FPS Table"
    },
    {
      "line": 1207,
      "value": "#    And I Input Crop Status and Organisation \"\u003cCrop_Status\u003e\""
    },
    {
      "line": 1208,
      "value": "#    And I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\""
    },
    {
      "line": 1209,
      "value": "#    And I Save Particulars for Horticultural Plantations declared under FPS"
    },
    {
      "line": 1210,
      "value": "#    And I Click on Save and Continue"
    }
  ],
  "line": 1211,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1217,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1218,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1219,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1220,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1225,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1226,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1227,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    48,
    49,
    50,
    51,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1233,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1234,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1236,
      "value": "#    PWO"
    }
  ],
  "line": 1237,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1251,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1252,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1253,
      "value": "#    WPO"
    }
  ],
  "line": 1254,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1255,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1256,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1257,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1258,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1259,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1260,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1261,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1262,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1263,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1268,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1269,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1271,
      "value": "#    WO/WA"
    }
  ],
  "line": 1272,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1273,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1274,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1275,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1292,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1293,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1294,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1295,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1298,
      "value": "#    WPO"
    }
  ],
  "line": 1299,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1310,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1311,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1312,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1313,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1314,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1315,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1317,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1318,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1319,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1320,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1323,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1324,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1325,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1326,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1327,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1331,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1332,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1333,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1336,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1338,
      "value": "#    WPO"
    }
  ],
  "line": 1339,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1340,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1341,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1342,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1343,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1344,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1345,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1346,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1347,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1348,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1349,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1350,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1355,
      "value": "#    IT Department"
    }
  ],
  "line": 1356,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1361,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1362,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1363,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1364,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1365,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1368,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1369,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1370,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1371,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1374,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1375,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1376,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1377,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1378,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1379,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4355658700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 158641100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5824102200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 30564100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1734374900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 14935900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 12021500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16901600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 551905400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 679267300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 4079620600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 71505000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 26
    }
  ],
  "location": "Steps.iSelectApplicantTitle(String)"
});
formatter.result({
  "duration": 2631305300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black River",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5777850100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3683998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 124004200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 63726500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1737578000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1040545300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4167471100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1628060400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9158214800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 80820200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3093967500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3091584900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 30
    }
  ],
  "location": "Steps.iSelectFamilyRelationship(String)"
});
formatter.result({
  "duration": 2664685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanon",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 59901900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kirti",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 61074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1636244200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5916519600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Air Hostess",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 81436900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 49257200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 41396100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 47922600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9171045100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 74496600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3093830600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "duration": 606080500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cane",
      "offset": 20
    }
  ],
  "location": "Steps.iSelectCropType(String)"
});
formatter.result({
  "duration": 1640023300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "duration": 2165895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "duration": 1623392000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "duration": 60625700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9188981000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 94983300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1586119600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 49587800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3701981500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1152245200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1104010300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 4756317700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10054115100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 45072900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 56344700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3135812100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2224235800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 593492000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 605422600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5159779000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 129583800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 5604522100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5340991100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 303265906000,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 300.000\n  (Session info: chrome\u003d130.0.6723.117)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir12864_1684905975}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64918}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 09d0a29846ccabed1fb363c2f0c8c46c\n*** Element info: {Using\u003dxpath, value\u003d//h5[contains(.,\u0027My Application\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iClickOnPayNowButton(Steps.java:1984)\r\n\tat ✽.And I Click on Pay Now button(features/US13280.feature:1231)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForBonafideDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iAddInformationForCropDetailsInSectionOne()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectDripIrrigationFacilityInSectionTwo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 995319900,
  "status": "passed"
});
formatter.after({
  "duration": 89800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1386,
      "value": "#Scenario7"
    }
  ],
  "line": 1388,
  "name": "Payment at counter for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1387,
      "name": "@Approval_by_BO_Payment_at_counter_for_Tea_grower"
    },
    {
      "line": 1387,
      "name": "@Smoke_counter_Tea_grower"
    }
  ]
});
formatter.step({
  "line": 1389,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1390,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1391,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1392,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1393,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1394,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1395,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1396,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1397,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1398,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1399,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1400,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1401,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1402,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1403,
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1404,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1405,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1406,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1407,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1408,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1409,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1410,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1411,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1412,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1413,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1414,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1415,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1416,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1417,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1418,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1419,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1420,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1421,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1422,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1423,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1424,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1425,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1426,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1427,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1428,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1429,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1430,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1431,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1432,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1433,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1434,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1435,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1436,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1437,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1438,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1439,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1440,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1441,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1442,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1443,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1444,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1445,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1446,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1447,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1448,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1449,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1450,
      "value": "#    Finance"
    },
    {
      "line": 1451,
      "value": "#    Finance"
    }
  ],
  "line": 1452,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1453,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1454,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1455,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1456,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1457,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1458,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1459,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1460,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 1461,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 1462,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 1463,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1464,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1465,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1466,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1467,
      "value": "#    PWO"
    }
  ],
  "line": 1468,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1469,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1470,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1471,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1472,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1473,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1474,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1475,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1476,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1477,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1478,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1479,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1480,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1481,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1482,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1483,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1484,
      "value": "#    WPO"
    }
  ],
  "line": 1485,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1486,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1487,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1488,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1489,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1490,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1491,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1492,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1493,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1494,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1495,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1496,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1497,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1498,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1499,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1500,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1502,
      "value": "#    WO/WA"
    }
  ],
  "line": 1503,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1504,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1505,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1506,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1507,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1508,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1509,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1510,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1511,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1512,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1513,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1514,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1515,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1516,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1517,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1518,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1519,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1520,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1521,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1522,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1523,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1524,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1525,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1527,
      "value": "#    WPO"
    }
  ],
  "line": 1528,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1529,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1530,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1531,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1532,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1533,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1534,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1535,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1536,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1537,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1538,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1539,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1540,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1541,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1542,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1543,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1544,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1546,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1547,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1548,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1549,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1550,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1551,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1552,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1553,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1554,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1555,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1556,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1557,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1558,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1559,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1560,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1561,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1562,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1563,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1564,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1565,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1567,
      "value": "#    WPO"
    }
  ],
  "line": 1568,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1569,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1570,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1571,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1572,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1573,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1574,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1575,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1576,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1577,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1578,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1579,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1580,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1581,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1582,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1584,
      "value": "#    IT Department"
    }
  ],
  "line": 1585,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1586,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1587,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1588,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1589,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1590,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1591,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1592,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1593,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1594,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1595,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1597,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1598,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1599,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1600,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1601,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1602,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1603,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1604,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1605,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1606,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1607,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1608,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1610,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Org_acc_no"
      ],
      "line": 1611,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Counter",
        "ACC58969"
      ],
      "line": 1612,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23100,
  "status": "passed"
});
formatter.before({
  "duration": 8100,
  "status": "passed"
});
formatter.scenario({
  "line": 1612,
  "name": "Payment at counter for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 1387,
      "name": "@Approval_by_BO_Payment_at_counter_for_Tea_grower"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1387,
      "name": "@Smoke_counter_Tea_grower"
    }
  ]
});
formatter.step({
  "line": 1389,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1390,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1391,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1392,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1393,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1394,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1395,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1396,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1397,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1398,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1399,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1400,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1401,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1402,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1403,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1404,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1405,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1406,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1407,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1408,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1409,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1410,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1411,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1412,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1413,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1414,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1415,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1416,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1417,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1418,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1419,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1420,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1421,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1422,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1423,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1424,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1425,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1426,
  "name": "I Input Organisation Account Number \"ACC58969\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1427,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1428,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1429,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1430,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1431,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1432,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1433,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1434,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1435,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1436,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1437,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1438,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1439,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1440,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1441,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1442,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1443,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1444,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1445,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1446,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1447,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1448,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1449,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1450,
      "value": "#    Finance"
    },
    {
      "line": 1451,
      "value": "#    Finance"
    }
  ],
  "line": 1452,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1453,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1454,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1455,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1456,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1457,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1458,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1459,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1460,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 1461,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 1462,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 1463,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1464,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1465,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1466,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1467,
      "value": "#    PWO"
    }
  ],
  "line": 1468,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1469,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1470,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1471,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1472,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1473,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1474,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1475,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1476,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1477,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1478,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1479,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1480,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1481,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1482,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1483,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1484,
      "value": "#    WPO"
    }
  ],
  "line": 1485,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1486,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1487,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1488,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1489,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1490,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1491,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1492,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1493,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1494,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1495,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1496,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1497,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1498,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1499,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1500,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1502,
      "value": "#    WO/WA"
    }
  ],
  "line": 1503,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1504,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1505,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1506,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1507,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1508,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1509,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1510,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1511,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1512,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1513,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1514,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1515,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1516,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1517,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1518,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1519,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1520,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1521,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1522,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1523,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1524,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1525,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1527,
      "value": "#    WPO"
    }
  ],
  "line": 1528,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1529,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1530,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1531,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1532,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1533,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1534,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1535,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1536,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1537,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1538,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1539,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1540,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1541,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1542,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1543,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1544,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1546,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1547,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1548,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1549,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1550,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1551,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1552,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1553,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1554,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1555,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1556,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1557,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1558,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1559,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1560,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1561,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1562,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1563,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1564,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1565,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1567,
      "value": "#    WPO"
    }
  ],
  "line": 1568,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1569,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1570,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1571,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1572,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1573,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1574,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1575,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1576,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1577,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1578,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1579,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1580,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1581,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1582,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1584,
      "value": "#    IT Department"
    }
  ],
  "line": 1585,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1586,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1587,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1588,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1589,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1590,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1591,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1592,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1593,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1594,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1595,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1597,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1598,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1599,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1600,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1601,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1602,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1603,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1604,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1605,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1606,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1607,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1608,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 6981163600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 149862400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 11031696800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 31623700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 2979824700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 26647800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 10302600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15166000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 2530814000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 31380700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 3946535000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 72820700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2675765500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5786598800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 36
    }
  ],
  "location": "Steps.iSelectApplicantEducationLevel(String)"
});
formatter.result({
  "duration": 3664661400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 176935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 60693000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1721395100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1034068000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembershipForTeaGrower(String)"
});
formatter.result({
  "duration": 2120684000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1597191900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9175376200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 82433700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3135511700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3099038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "duration": 2683206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 58209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 47927100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1625050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5936035300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 76901000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 50484600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 41370900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 48339600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9170462100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "duration": 96173700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3110068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACC58969",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "duration": 612501500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.7",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "duration": 2161443900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "duration": 1602128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "duration": 58611600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9157612800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "duration": 95463400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1582344100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 78822400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3734512000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1143205600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1123127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 5093029000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10079046700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 48964600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 51474000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3131046200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2237079800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 590578500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 602648400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5161867900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2119116800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8059428300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 14039275000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9570595800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 145181400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1615270200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 44707200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 52604100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1569630600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1552914400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 66240200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1581179600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 11133901100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4642591900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 960801300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 15127888900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 150896100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8129981300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 49782300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1378945400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1572213000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6601542400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5510021200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5133005000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 7007639800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1641357100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10119558200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 66596700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5383952800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4538337400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1042309300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 10998361300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 185512900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6131943300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 58185400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1260041100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1568705200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6592054000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6114348500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5046525400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1651146600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1681432700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10130249000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 73993200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5399861900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4610589800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 972211500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 11226043100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 144412800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 10205959500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 42539200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 2529953000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1548149900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6602194300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6883950100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 76793900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 55857500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "duration": 77318500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "duration": 9153884000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5021907800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 8611238200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 7145800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4982686100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1618873900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1747429200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10117096700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 66672400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 4888051700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4684933100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1021887800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 15008688200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 159427700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8561901400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 48769400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1160126500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1563842000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6603269600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 8583341700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5032646500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 6525685900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "duration": 61803700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "duration": 5433463100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "duration": 13962500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 45846900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 5391368800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4764761600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1008713700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 3870419400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 135863400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4082479400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 28141600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1733867800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 12977100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 11912800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 14125400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2186674900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 2436481400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 13958700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Save and Continue\u0027)]\"}\n  (Session info: chrome\u003d130.0.6723.117)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir25620_1095545653}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49266}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 4953a0f3ec57ae212555462b78404a96\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Save and Continue\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Farmers_cooperatives_association_society_company.Save_and_continue(Farmers_cooperatives_association_society_company.java:232)\r\n\tat stepdefinition.Steps.iClickOnSaveAndContinue(Steps.java:710)\r\n\tat ✽.And I Click on Save and Continue(features/US13280.feature:1557)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 967464600,
  "status": "passed"
});
formatter.after({
  "duration": 104200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1615,
      "value": "#Scenario8"
    }
  ],
  "line": 1617,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1616,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 1616,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1618,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1619,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1620,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1638,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1639,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1655,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1656,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1672,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1673,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1674,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1679,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1680,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1683,
      "value": "#    PWO"
    }
  ],
  "line": 1684,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1696,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1697,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1698,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1699,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1700,
      "value": "#    WPO"
    }
  ],
  "line": 1701,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1713,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1714,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1715,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1716,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1718,
      "value": "#    WO/WA"
    }
  ],
  "line": 1719,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1720,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1737,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1738,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1739,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1740,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1743,
      "value": "#    WPO"
    }
  ],
  "line": 1744,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1754,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1755,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1756,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1757,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1758,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1759,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1760,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1762,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1763,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1764,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1765,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1767,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1768,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1769,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1770,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1771,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1776,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1777,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1778,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1780,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1781,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1783,
      "value": "#    WPO"
    }
  ],
  "line": 1784,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1785,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1786,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1787,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1788,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1789,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1790,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1791,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1793,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1794,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1795,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1800,
      "value": "#    IT Department"
    }
  ],
  "line": 1801,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1813,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1814,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1815,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1816,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1826,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name",
        "Org_acc_no"
      ],
      "line": 1827,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name",
        "ACC5896"
      ],
      "line": 1828,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40800,
  "status": "passed"
});
formatter.before({
  "duration": 10900,
  "status": "passed"
});
formatter.scenario({
  "line": 1828,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1616,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 1616,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1618,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1619,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1620,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1638,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1639,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1655,
  "name": "I Input Organisation Account Number \"ACC5896\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1656,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1672,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1673,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1674,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    39,
    40,
    41,
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1679,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1680,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1683,
      "value": "#    PWO"
    }
  ],
  "line": 1684,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1696,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1697,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1698,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1699,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1700,
      "value": "#    WPO"
    }
  ],
  "line": 1701,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1713,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1714,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1715,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1716,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1718,
      "value": "#    WO/WA"
    }
  ],
  "line": 1719,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1720,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1737,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1738,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1739,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1740,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1743,
      "value": "#    WPO"
    }
  ],
  "line": 1744,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1754,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1755,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1756,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1757,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1758,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1759,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1760,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1762,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1763,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1764,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1765,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1767,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1768,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1769,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1770,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1771,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1776,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1777,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1778,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1780,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1781,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1783,
      "value": "#    WPO"
    }
  ],
  "line": 1784,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1785,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1786,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1787,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1788,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1789,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1790,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1791,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1793,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1794,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1795,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1800,
      "value": "#    IT Department"
    }
  ],
  "line": 1801,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1813,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1814,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1815,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1816,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4338287200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 146299000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5560531100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 36848200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 2243487600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 19039100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13619700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15049800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 552730100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 2152801900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 5891289400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 52611500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2652193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5818084200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 36
    }
  ],
  "location": "Steps.iSelectApplicantEducationLevel(String)"
});
formatter.result({
  "duration": 3677895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 140062000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 61980200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 2761252900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1038642900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "Steps.iSelectDurationYearForRegistrationMembershipForTeaGrower(String)"
});
formatter.result({
  "duration": 2139826400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1631862500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9185793600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 81371100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3084521200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3100713300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "duration": 2671108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 48536600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 61309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1636908600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5890641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 81724900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 48415100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 39989200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 48397600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9151063400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "duration": 80661600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3126454700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACC5896",
      "offset": 37
    }
  ],
  "location": "Steps.iInputOrganisationAccountNumber(String)"
});
formatter.result({
  "duration": 604333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.7",
      "offset": 42
    }
  ],
  "location": "Steps.iInputTotalExtentOfPlotInArpent(String)"
});
formatter.result({
  "duration": 2127097800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tenant",
      "offset": 21
    }
  ],
  "location": "Steps.iSelectOwnerType(String)"
});
formatter.result({
  "duration": 1633359800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moka",
      "offset": 23
    }
  ],
  "location": "Steps.iInputPlotLocation(String)"
});
formatter.result({
  "duration": 52907800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9150016900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "duration": 94523500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1593173100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 53531900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3724972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1111046600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1133843500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 5099421000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10088212100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 45199800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 54205600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3131674600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2207888300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 1127655500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 623622200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5145668200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 101879100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 5981415800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5334411700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 156934926000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 17914000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "duration": 12915300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 12826350200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9152722500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 148022700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6940324900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 44492200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1804622100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1541625600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6598680300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6136031100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 6133907600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 7579574900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1631309600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10133715800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 66010300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5950249600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4597185700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1030200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 13981979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 148438200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7124875400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 42947800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1135641600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1545894100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6602407700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 6199875400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5114335800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1655812700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1710266300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10129112700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 90316600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5412613700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4493114100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1048626900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 10465048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 181874900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6094633400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 45622400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 1138539100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1559591300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6602002800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 5574300600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 76873900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "duration": 54491100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "duration": 82051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "duration": 9208943300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5014766600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 8112062200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 11708900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 5013974500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1670536100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1719440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "duration": 10128432900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 95249500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 5399926600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4484482700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 983973900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "duration": 9535504900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 161281800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5986994600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 45584700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 993215300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1578199100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 6594357200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 7424207200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 4520581100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 6544134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "duration": 65741500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "duration": 5440635700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "duration": 16271400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 45518700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 4826432500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4485592000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1011608400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 3692583100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 141361900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6825100500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 33473300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1616904200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 20604000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13918900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13786800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2193237100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 2427741900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 16449100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Save and Continue\u0027)]\"}\n  (Session info: chrome\u003d130.0.6723.117)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir20964_1771816507}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50097}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: fd270623166d7d0ccd3a8b6d1ca08534\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Save and Continue\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat objectrepository.Farmers_cooperatives_association_society_company.Save_and_continue(Farmers_cooperatives_association_society_company.java:232)\r\n\tat stepdefinition.Steps.iClickOnSaveAndContinue(Steps.java:710)\r\n\tat ✽.And I Click on Save and Continue(features/US13280.feature:1773)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 940046900,
  "status": "passed"
});
formatter.after({
  "duration": 84800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1830,
      "value": "#Scenario9"
    }
  ],
  "line": 1832,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1831,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    }
  ]
});
formatter.step({
  "line": 1834,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1835,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1836,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1865,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1866,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1867,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1868,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Input Number of Cow Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1879,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1880,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1881,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Upload Additional Document for small breeder \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1893,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1894,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1895,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1897,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1898,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1899,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1910,
      "value": "#    Finance"
    },
    {
      "line": 1911,
      "value": "#    Finance"
    }
  ],
  "line": 1912,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1913,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1915,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1916,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1917,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1920,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 1921,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 1922,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 1923,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1927,
      "value": "#    PWO"
    }
  ],
  "line": 1928,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1929,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1930,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1931,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1941,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1942,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1943,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1944,
      "value": "#    WPO"
    }
  ],
  "line": 1945,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1955,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1956,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1957,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1960,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1962,
      "value": "#    WO/WA"
    }
  ],
  "line": 1963,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1964,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1974,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1975,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1976,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1977,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1978,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1979,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1980,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1981,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1987,
      "value": "#    WPO"
    }
  ],
  "line": 1988,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1996,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1997,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1998,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1999,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2006,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2007,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2008,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2009,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2010,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2011,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2012,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2013,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2014,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2015,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2016,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2022,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2023,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2024,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2025,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2026,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2027,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2029,
      "value": "#    WPO"
    }
  ],
  "line": 2030,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2031,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2032,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2033,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2034,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2040,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2041,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2042,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2043,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2044,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2046,
      "value": "#    IT Department"
    }
  ],
  "line": 2047,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2048,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2049,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2050,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2051,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2052,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2053,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2054,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2055,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2056,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2057,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2059,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2060,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2061,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2062,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2063,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2064,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2065,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2066,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2067,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2068,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2069,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2070,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2072,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Spicies",
        "Male_Female_Number",
        "Total_Heads",
        "Reason",
        "Microchip_No",
        "Cattle_Sex",
        "Cattle_Age",
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
      "line": 2073,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "Cattle",
        "550",
        "550",
        "Meat",
        "AAA2563",
        "Male",
        "1Month",
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
      "line": 2074,
      "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21100,
  "status": "passed"
});
formatter.before({
  "duration": 5500,
  "status": "passed"
});
formatter.scenario({
  "line": 2074,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1831,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    }
  ]
});
formatter.step({
  "line": 1834,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1835,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1836,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1865,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1866,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1867,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1868,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Input Number of Cow Female \"550\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1879,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1880,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1881,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Upload Additional Document for small breeder \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1893,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1894,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1895,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1897,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1898,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1899,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1910,
      "value": "#    Finance"
    },
    {
      "line": 1911,
      "value": "#    Finance"
    }
  ],
  "line": 1912,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1913,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1915,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1916,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1917,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1920,
      "value": "#    And I Select Payment Mode \"\u003cPayment_Mode\u003e\""
    },
    {
      "line": 1921,
      "value": "#    And I Input Amount of payment \"\u003cAmount_To_Pay\u003e\""
    },
    {
      "line": 1922,
      "value": "#    And I Click on Add Payment"
    }
  ],
  "line": 1923,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1927,
      "value": "#    PWO"
    }
  ],
  "line": 1928,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1929,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1930,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1931,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1941,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1942,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1943,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1944,
      "value": "#    WPO"
    }
  ],
  "line": 1945,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1955,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1956,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1957,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1960,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1962,
      "value": "#    WO/WA"
    }
  ],
  "line": 1963,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1964,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1974,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1975,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1976,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1977,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1978,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1979,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1980,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1981,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1987,
      "value": "#    WPO"
    }
  ],
  "line": 1988,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1996,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1997,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1998,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1999,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2006,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2007,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2008,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2009,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2010,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2011,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2012,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2013,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2014,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2015,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2016,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2022,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2023,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2024,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2025,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2026,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2027,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2029,
      "value": "#    WPO"
    }
  ],
  "line": 2030,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2031,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2032,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2033,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2034,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2040,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2041,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2042,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2043,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2044,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2046,
      "value": "#    IT Department"
    }
  ],
  "line": 2047,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2048,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2049,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2050,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2051,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2052,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2053,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2054,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2055,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2056,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2057,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2059,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2060,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2061,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2062,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2063,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2064,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2065,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2066,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2067,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2068,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2069,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2070,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4785355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 154207800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6777289300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 40036100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1836789400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18208700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13977600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 12221000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 1637619300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 25020400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 4150818000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 74431100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2655611300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5802963500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3650503800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 120246100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 63250000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 2801750400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1036600000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4162829400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1633233200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9177693500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 95807100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3098951400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3087187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "duration": 2633465000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 61349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 61281500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1642175800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5909345300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 76542200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 53756700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 40275900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 50177800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9149817400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 105882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "550",
      "offset": 30
    }
  ],
  "location": "Steps.iInputNumberOfCowFemale(String)"
});
formatter.result({
  "duration": 1125409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meat",
      "offset": 17
    }
  ],
  "location": "Steps.iSelectReason(String)"
});
formatter.result({
  "duration": 1646023500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9159624700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 120116550600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //h6[contains(text(),\u0027Upload Required Documents\u0027)] (tried for 120 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed(Steps.java:729)\r\n\tat ✽.And I Verify Upload Required Documents Page is displayed(features/US13280.feature:1873)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //h6[contains(text(),\u0027Upload Required Documents\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed(Steps.java:729)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 46
    }
  ],
  "location": "Steps.iUploadCopyOfNationalIdentifyCardID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadExistingSFWFRegNoIfAny(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 29
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 57
    }
  ],
  "location": "Steps.iUploadCopyOfRegisteredNonRegisteredLeasePaper(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 99
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeedOfLandOwnerIncludingCooperativesForNonRegisteredLeasePaper(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 94
    }
  ],
  "location": "Steps.iUploadPreliminaryEnvironmentalReportBuildingAndLandUsePermitAndHealthClearance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 47
    }
  ],
  "location": "Steps.iUploadLocationPlanOfFarmIncludingSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 53
    }
  ],
  "location": "Steps.iUploadListOfTagsNosExceptPoultryAndPig(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 43
    }
  ],
  "location": "Steps.iUploadAnimalCardDVsWhereApplicable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 48
    }
  ],
  "location": "Steps.iUploadAdditionalDocumentForSmallBreeder(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallBreedersRegistration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Counter",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FINANCE",
      "offset": 26
    },
    {
      "val": "Admin@123",
      "offset": 49
    }
  ],
  "location": "Steps.iInputFinanceUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 996378700,
  "status": "passed"
});
formatter.after({
  "duration": 203800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2077,
      "value": "#Scenario10"
    }
  ],
  "line": 2079,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2078,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 2078,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 2081,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2082,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2083,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2084,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2085,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2086,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2107,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2108,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2112,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2113,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2114,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Input Number of Cow Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2130,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2131,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2132,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Upload Additional Document for small breeder \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2145,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 2146,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2148,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2149,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2150,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2161,
      "value": "#    PWO"
    }
  ],
  "line": 2162,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2174,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2175,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2176,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2177,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2178,
      "value": "#    WPO"
    }
  ],
  "line": 2179,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2193,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2194,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2196,
      "value": "#    WO/WA"
    }
  ],
  "line": 2197,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2211,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2212,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2213,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2214,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2221,
      "value": "#    WPO"
    }
  ],
  "line": 2222,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2229,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2230,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2231,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2236,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2237,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2238,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2240,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2241,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2242,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2243,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2244,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2245,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2246,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2255,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2256,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2257,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2258,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2259,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2260,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2261,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2263,
      "value": "#    WPO"
    }
  ],
  "line": 2264,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2265,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2266,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2267,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2268,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2269,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2270,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2271,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2272,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2273,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2274,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2275,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2276,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2277,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2278,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2280,
      "value": "#    IT Department"
    }
  ],
  "line": 2281,
  "name": "I am on SFWF Back Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2282,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2283,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2284,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2285,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2286,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2287,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2288,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2289,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2290,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2291,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2293,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2294,
  "name": "I am on SFWF Front Office Home Page \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2295,
  "name": "I Input Registered User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2296,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2297,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2298,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2299,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2300,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2301,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2302,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2303,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2304,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2306,
  "name": "",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;",
  "rows": [
    {
      "cells": [
        "Browser",
        "Username",
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
        "License",
        "Land_Extent",
        "Owner_Type",
        "Plot_Location",
        "Spicies",
        "Male_Female_Number",
        "Total_Heads",
        "Reason",
        "Microchip_No",
        "Cattle_Sex",
        "Cattle_Age",
        "Upload_test",
        "Additional_Doc_Name",
        "Bank_Name",
        "Bank_Branch",
        "Bank_Account_No",
        "Confirmation",
        "App_status",
        "Payment_Status",
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 2307,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj",
        "Admin@123",
        "FINANCE",
        "PWO",
        "WPO",
        "WO",
        "IT_DEPT",
        "This is a test",
        "Yes",
        "Cash",
        "850",
        "Mrs",
        "Port Louis",
        "Tertiary",
        "Full Time",
        "Manager",
        "src\\test\\resources\\Photo_upload.jpg",
        "2",
        "Married",
        "Spouse",
        "Keen",
        "Dafne",
        "Female",
        "1Jan94",
        "Actress",
        "Tea Grower",
        "2.7",
        "Tenant",
        "Moka",
        "Cattle",
        "550",
        "550",
        "Meat",
        "AAA2563",
        "Male",
        "1Month",
        "src\\test\\resources\\Upload_Test1.pdf",
        "Additional Document Test",
        "ABC Banking",
        "Port Louis",
        "0001252563636",
        "Yes",
        "Submitted",
        "Pending",
        "Credit",
        "5123-4500-0000-0008",
        "01",
        "39",
        "100",
        "My name"
      ],
      "line": 2308,
      "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16500,
  "status": "passed"
});
formatter.before({
  "duration": 4500,
  "status": "passed"
});
formatter.scenario({
  "line": 2308,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 3,
      "name": "@silenv"
    },
    {
      "line": 3,
      "name": "@US13280"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 2078,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 2078,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 2081,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2082,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2083,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2084,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2085,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2086,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2107,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2108,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2112,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2113,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2114,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Input Number of Cow Female \"550\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2130,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2131,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2132,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Upload Additional Document for small breeder \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2145,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 2146,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2148,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2149,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2150,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    48,
    49,
    50,
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2161,
      "value": "#    PWO"
    }
  ],
  "line": 2162,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2174,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2175,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2176,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2177,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2178,
      "value": "#    WPO"
    }
  ],
  "line": 2179,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2193,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2194,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2196,
      "value": "#    WO/WA"
    }
  ],
  "line": 2197,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2211,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2212,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2213,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2214,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2221,
      "value": "#    WPO"
    }
  ],
  "line": 2222,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2229,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2230,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2231,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Click on Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Verify Success Message for Under Query Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2236,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2237,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2238,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2240,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2241,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2242,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2243,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2244,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2245,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2246,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2255,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2256,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2257,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2258,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2259,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2260,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2261,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2263,
      "value": "#    WPO"
    }
  ],
  "line": 2264,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2265,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2266,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2267,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2268,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2269,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2270,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2271,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2272,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2273,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2274,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2275,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2276,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2277,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2278,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2280,
      "value": "#    IT Department"
    }
  ],
  "line": 2281,
  "name": "I am on SFWF Back Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2282,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2283,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2284,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2285,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2286,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2287,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2288,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2289,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2290,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2291,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2293,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2294,
  "name": "I am on SFWF Front Office Home Page \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2295,
  "name": "I Input Registered User\u0027s Username \"Suraj\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2296,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2297,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2298,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2299,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2300,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2301,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2302,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2303,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2304,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "duration": 4432734500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 129223800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7540903800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 55536700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 2138370400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 19958700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 12629400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15229500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 555785100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 1599851200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 4237140800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 68776900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectAnApplicantTitle(String)"
});
formatter.result({
  "duration": 2654788400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 29
    }
  ],
  "location": "Steps.iSelectApplicantDistrict(String)"
});
formatter.result({
  "duration": 5770724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tertiary",
      "offset": 39
    }
  ],
  "location": "Steps.iSelectApplicantLevelOfEducation(String)"
});
formatter.result({
  "duration": 3672338600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Time",
      "offset": 32
    }
  ],
  "location": "Steps.iSelectAgriculturalActivity(String)"
});
formatter.result({
  "duration": 191683900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 26
    }
  ],
  "location": "Steps.iInputOtherOccupation(String)"
});
formatter.result({
  "duration": 55416500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Photo_upload.jpg",
      "offset": 21
    }
  ],
  "location": "Steps.iUploadPhotograph(String)"
});
formatter.result({
  "duration": 1718672800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1040004700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "Steps.iSelectNoOfYearsForRegistrationMembership(String)"
});
formatter.result({
  "duration": 4148197300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectMaritalStatus(String)"
});
formatter.result({
  "duration": 1600691900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9157043400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 96600100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3116855700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3098404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spouse",
      "offset": 45
    }
  ],
  "location": "Steps.iSelectFamilyRelationshipForTeaGrower(String)"
});
formatter.result({
  "duration": 2622400000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen",
      "offset": 24
    }
  ],
  "location": "Steps.iInputFamilySurname(String)"
});
formatter.result({
  "duration": 53930300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dafne",
      "offset": 28
    }
  ],
  "location": "Steps.iInputFamilyOtherNames(String)"
});
formatter.result({
  "duration": 54128700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 24
    }
  ],
  "location": "Steps.iSelectFamilyGender(String)"
});
formatter.result({
  "duration": 1597467400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1Jan94",
      "offset": 30
    }
  ],
  "location": "Steps.iInputFamilyDateOfBirth(String)"
});
formatter.result({
  "duration": 5864137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Actress",
      "offset": 27
    }
  ],
  "location": "Steps.iInputFamilyOccupation(String)"
});
formatter.result({
  "duration": 64332900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 53200100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 41163600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 46101800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9172387900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 77414800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "550",
      "offset": 30
    }
  ],
  "location": "Steps.iInputNumberOfCowFemale(String)"
});
formatter.result({
  "duration": 1111935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meat",
      "offset": 17
    }
  ],
  "location": "Steps.iSelectReason(String)"
});
formatter.result({
  "duration": 1613637700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9168426500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 16659060000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 46
    }
  ],
  "location": "Steps.iUploadCopyOfNationalIdentifyCardID(String)"
});
formatter.result({
  "duration": 3814776300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 40
    }
  ],
  "location": "Steps.iUploadExistingSFWFRegNoIfAny(String)"
});
formatter.result({
  "duration": 2170037700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 29
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeed(String)"
});
formatter.result({
  "duration": 2177968400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 57
    }
  ],
  "location": "Steps.iUploadCopyOfRegisteredNonRegisteredLeasePaper(String)"
});
formatter.result({
  "duration": 2186803400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 99
    }
  ],
  "location": "Steps.iUploadCopyOfTitleDeedOfLandOwnerIncludingCooperativesForNonRegisteredLeasePaper(String)"
});
formatter.result({
  "duration": 2187328600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 94
    }
  ],
  "location": "Steps.iUploadPreliminaryEnvironmentalReportBuildingAndLandUsePermitAndHealthClearance(String)"
});
formatter.result({
  "duration": 2241822300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 47
    }
  ],
  "location": "Steps.iUploadLocationPlanOfFarmIncludingSize(String)"
});
formatter.result({
  "duration": 2189736600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 53
    }
  ],
  "location": "Steps.iUploadListOfTagsNosExceptPoultryAndPig(String)"
});
formatter.result({
  "duration": 1680012000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 43
    }
  ],
  "location": "Steps.iUploadAnimalCardDVsWhereApplicable(String)"
});
formatter.result({
  "duration": 1662793300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5028448600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3114485300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional Document Test",
      "offset": 34
    }
  ],
  "location": "Steps.iInputAdditionalDocumentName(String)"
});
formatter.result({
  "duration": 1599797700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 41007600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 48
    }
  ],
  "location": "Steps.iUploadAdditionalDocumentForSmallBreeder(String)"
});
formatter.result({
  "duration": 2193119500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5018613900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9195330200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
});
formatter.result({
  "duration": 2100552500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1598532800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 68141700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC Banking",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectBank(String)"
});
formatter.result({
  "duration": 3760978300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Louis",
      "offset": 52
    }
  ],
  "location": "Steps.iInputBankBranchForAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1141999800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001252563636",
      "offset": 65
    }
  ],
  "location": "Steps.iInputPersonalBankAccountNumberAgroProcessingEnterprise(String)"
});
formatter.result({
  "duration": 1122625100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "duration": 5307125400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallBreedersRegistration()"
});
formatter.result({
  "duration": 10052678900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submitted",
      "offset": 29
    }
  ],
  "location": "Steps.iVerifyApplicationStatus(String)"
});
formatter.result({
  "duration": 42733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyPaymentStatus(String)"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 60407900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 3180259600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2204227700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 587992700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 638003200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "duration": 5160942700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 120326500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 5886210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5123-4500-0000-0008",
      "offset": 22
    },
    {
      "val": "01",
      "offset": 44
    },
    {
      "val": "39",
      "offset": 49
    },
    {
      "val": "My name",
      "offset": 54
    },
    {
      "val": "100",
      "offset": 64
    }
  ],
  "location": "Steps.iInputCardDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 5382853300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 302734489700,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 300.000\n  (Session info: chrome\u003d130.0.6723.117)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d130.0.6723.116 (6ac35f94ae3d01152cf1946c896b0678e48f8ec4-refs/branch-heads/6723@{#1764}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir31196_907275065}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50273}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d130.0.6723.117, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 23ff2b2025fb81c3b0963c9adeb1be14\n*** Element info: {Using\u003dxpath, value\u003d//h5[contains(.,\u0027My Application\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iClickOnPayNowButton(Steps.java:1984)\r\n\tat ✽.And I Click on Pay Now button(features/US13280.feature:2157)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PWO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputPWOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WO",
      "offset": 24
    },
    {
      "val": "Admin@123",
      "offset": 42
    }
  ],
  "location": "Steps.iInputWOWAUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 27
    }
  ],
  "location": "Steps.iSelectBonafidePlanter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 28
    }
  ],
  "location": "Steps.iInputSiteVisitRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "src\\test\\resources\\Upload_Test1.pdf",
      "offset": 22
    }
  ],
  "location": "Steps.iUploadSiteReport(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 26
    }
  ],
  "location": "Steps.iInputExternalRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 31
    }
  ],
  "location": "Steps.iClickOnSubmitApplication(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WPO",
      "offset": 22
    },
    {
      "val": "Admin@123",
      "offset": 41
    }
  ],
  "location": "Steps.iInputWPOUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test",
      "offset": 17
    }
  ],
  "location": "Steps.iInputRemarks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 36
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "IT_DEPT",
      "offset": 32
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "Steps.iInputITDepartmentUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 37
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Suraj",
      "offset": 36
    },
    {
      "val": "Admin@123",
      "offset": 57
    }
  ],
  "location": "Steps.iInputRegisteredUserSUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 992351200,
  "status": "passed"
});
formatter.after({
  "duration": 228500,
  "status": "passed"
});
});