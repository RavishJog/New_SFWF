$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280_GOC.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#User Story 13280 - Back Office Process for Registration"
    }
  ],
  "line": 4,
  "name": "User Story 13280-GOC - Back Office Process for Registration",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration",
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
      "name": "@GOC_Registrations"
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
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
    },
    {
      "line": 7,
      "name": "@Smoke_counter_Agro-Processing-Enterprise_GOC"
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 214,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "I Click on Sign In button in Maupass",
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
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;",
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
      "line": 227,
      "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;1"
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
      "line": 228,
      "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 107400,
  "status": "passed"
});
formatter.scenario({
  "line": 228,
  "name": "Approval for Payment at counter for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 7,
      "name": "@Smoke_counter_Agro-Processing-Enterprise_GOC"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
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
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
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
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    20
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
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
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
    28
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
    27
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
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    32
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
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    34
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
    35
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I Input Finance Username \"Finance\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
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
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "I Click on Sign In button in Maupass",
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
    32
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 214,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "I Click on Sign In button in Maupass",
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6944091400,
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
  "duration": 8052598900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 52726900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1948183000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 395236000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 32718300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 22020200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 14593100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 182239500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 206355200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 2704902300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 68765600,
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
  "duration": 79304800,
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
  "duration": 68863900,
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
  "duration": 86330300,
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
  "duration": 66038100,
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
  "duration": 46527400,
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
  "duration": 72220400,
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
  "duration": 84048900,
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
  "duration": 4133173400,
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
  "duration": 4233748800,
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
  "duration": 1604572700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9158484800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 80748700,
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
  "duration": 1107958500,
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
  "duration": 1104821000,
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
  "duration": 1110752400,
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
  "duration": 1108736800,
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
  "duration": 1135018200,
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
  "duration": 623701500,
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
  "duration": 1116146400,
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
  "duration": 611474300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 56940500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir44088_644171444}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63763}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 74311eb78ce8b24c535a309f70f0ee02\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:42)\r\n",
  "status": "failed"
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
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
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
  "location": "Steps.iVerifyTermsAndConditionsPage()"
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
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance",
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1183090400,
  "status": "passed"
});
formatter.after({
  "duration": 782900,
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
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button in Maupass",
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
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;",
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
        "Payment_method",
        "Card_Number",
        "Expiry_Month",
        "Expiry_Year",
        "Security_Code",
        "Cardholder_Name"
      ],
      "line": 438,
      "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "Approval for Payment online for Registration as Agro-Processing Enterprise-Application form",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;approval-for-payment-online-for-registration-as-agro-processing-enterprise-application-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 234,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I Click on Sign In button in Maupass",
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
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Input Business Registration No(BRN) for Agro-Processing Enterprise \"C123456789\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I Input Certificate of Incorporation No for Agro-Processing Enterprise \"XLPR852\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I Input Enterprise Address \"Royal Road, Port Louis\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I Select Status of Applicant for Agro-Processing Enterprise \"Company\"",
  "matchedColumns": [
    20
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
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
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
    28
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
    27
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
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    32
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
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    34
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
    35
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
    36,
    37,
    38,
    39,
    40
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
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
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    27
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 377,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "I Click on Sign In button in Maupass",
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
    32
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 426,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 427,
  "name": "I Click on Sign In button in Maupass",
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4988926700,
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
  "duration": 8139204900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 55039600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1510348800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 498108200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 26127100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 15105800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 14745100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 2572100300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 21845200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 2584964500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 51970300,
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
  "duration": 61496200,
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
  "duration": 59693900,
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
  "duration": 58972200,
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
  "duration": 59441200,
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
  "duration": 52745300,
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
  "duration": 62646500,
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
  "duration": 61901200,
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
  "duration": 4142432800,
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
  "duration": 4207324200,
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
  "duration": 1607495300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9156972100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 81543300,
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
  "duration": 1123563800,
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
  "duration": 1113578400,
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
  "duration": 1110823300,
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
  "duration": 1125340000,
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
  "duration": 593903600,
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
  "duration": 584972200,
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
  "duration": 583523000,
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
  "duration": 591053300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 49230900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir42512_637427628}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63818}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 6b0fe8b45a9c25c8827bf6f7a43eaa8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:266)\r\n",
  "status": "failed"
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
      "offset": 30
    }
  ],
  "location": "Steps.iUploadAdditionalDocument(String)"
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
  "location": "Steps.iVerifyTermsAndConditionsPage()"
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
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
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
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1023131900,
  "status": "passed"
});
formatter.after({
  "duration": 341700,
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
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 442,
      "name": "@Approval_by_BO_Payment_at_counter_for_Farmers_Cooperative_Association"
    },
    {
      "line": 442,
      "name": "@Smoke_counter_Farmers_Cooperative_Association_GOC"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 606,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 607,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 655,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 656,
  "name": "I Click on Sign In button in Maupass",
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
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;",
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
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34400,
  "status": "passed"
});
formatter.scenario({
  "line": 668,
  "name": "Payment at counter for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 442,
      "name": "@Smoke_counter_Farmers_Cooperative_Association_GOC"
    },
    {
      "line": 442,
      "name": "@Approval_by_BO_Payment_at_counter_for_Farmers_Cooperative_Association"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 445,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 446,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 447,
  "name": "I Click on Sign In button in Maupass",
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
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I Input Office Phone Number \"2126666\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I Input Mobile Phone Number \"58967896\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    28
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
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
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
    30
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
    29
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
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 493,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    34
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
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    36
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
    37
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 527,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
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
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "I Input Site visit remarks in Site Report \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 587,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 606,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 607,
  "name": "I Click on Sign In button in Maupass",
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
    34
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 625,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 642,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 655,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 656,
  "name": "I Click on Sign In button in Maupass",
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5120640600,
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
  "duration": 8449625600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 53431300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1559416000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 430869700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 28588900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 25714500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 25361500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 179782400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 163465200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 2566332100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 57785900,
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
  "duration": 67027300,
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
  "duration": 69138000,
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
  "duration": 62292100,
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
  "duration": 82696700,
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
  "duration": 55712600,
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
  "duration": 71544200,
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
  "duration": 56793400,
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
  "duration": 73645200,
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
  "duration": 1630320600,
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
  "duration": 2139818800,
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
  "duration": 4207982400,
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
  "duration": 48064500,
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
  "duration": 109765100,
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
  "duration": 76346200,
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
  "duration": 65354400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9173795700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 80748600,
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
  "duration": 1127589100,
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
  "duration": 1154017800,
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
  "duration": 1132381300,
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
  "duration": 1132934400,
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
  "duration": 1144018200,
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
  "duration": 1120828800,
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
  "duration": 595710800,
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
  "duration": 1139862500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 46230000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir44800_1666848911}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63875}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: daa21be1cdbf3f86d7505e9760f019f8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:482)\r\n",
  "status": "failed"
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
      "offset": 31
    }
  ],
  "location": "Steps.iUploadAdditionalDocuments(String)"
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
  "location": "Steps.iVerifyTermsAndConditionsPage()"
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
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "status": "skipped"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1056428700,
  "status": "passed"
});
formatter.after({
  "duration": 87300,
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
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button in Maupass",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button in Maupass",
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
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;",
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
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15500,
  "status": "passed"
});
formatter.scenario({
  "line": 884,
  "name": "Payment online for Registration for Farmers’ Cooperative Association, Society or Company",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-farmers’-cooperative-association,-society-or-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 671,
      "name": "@Smoke_online_Farmers_Cooperative_Association"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    },
    {
      "line": 671,
      "name": "@Approval_by_BO_Payment_online_for_Farmers_Cooperative_Association"
    }
  ]
});
formatter.step({
  "line": 674,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 675,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 676,
  "name": "I Click on Sign In button in Maupass",
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
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "I Input Represented by \"Mr John Brown\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "I Input Business Registration No.(BRN) \"C123456789\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "I Input Certificate of Incorporation No \"XLPR852\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 690,
  "name": "I Select Activity \"Full Time\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 691,
  "name": "I Input Office Phone Number \"2126666\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 692,
  "name": "I Input Mobile Phone Number \"58967896\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 693,
  "name": "I Input Office Address \"The Main Road, Grand Port\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I Select Status of Applicant \"Company\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 695,
  "name": "I Select Duration Year for Registration membership \"1\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 696,
  "name": "I Input List of Products manufactured \"Tomato, Pepper\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I Input No. of persons employed \"50\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I Input Actual Annual Turnover (Rs) \"10000000\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I Select Status of business \"Existing\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I Input No. of years of operation \"5\"",
  "matchedColumns": [
    28
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
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I Upload Certificate of Incorporation \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 705,
  "name": "I Upload List of Directors/ Associates \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 706,
  "name": "I Upload Board Resolution of Enterprise for appointment of representative(s) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 707,
  "name": "I Upload National Identity card of representative \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "I Upload Location Plan Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 709,
  "name": "I Upload Copy of SMEDA Certificate Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 710,
  "name": "I Upload Copy of Utility Bill Document \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
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
    30
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
    29
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
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I Input Bank Branch \"Port Louis\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I Input Personal Bank Account Number\"0001252563636\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    34
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
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    36
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
    37
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
    38,
    39,
    40,
    41,
    42
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 743,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
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
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I Input Site visit remarks in Site Report \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    29
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 822,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 823,
  "name": "I Click on Sign In button in Maupass",
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
    34
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
    9
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 872,
  "name": "I Click on Sign In button in Maupass",
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4921630100,
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
  "duration": 8116353900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 73536200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1743530900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 456591700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 23127300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 15088600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 12348500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 158003500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 139851700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFarmersCooperativesAssociationSocietyOrCompany()"
});
formatter.result({
  "duration": 2470354700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationOfFarmersPage()"
});
formatter.result({
  "duration": 54775600,
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
  "duration": 80002600,
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
  "duration": 75747700,
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
  "duration": 64866600,
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
  "duration": 73820700,
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
  "duration": 56374400,
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
  "duration": 69431600,
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
  "duration": 64021600,
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
  "duration": 74056100,
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
  "duration": 1622207000,
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
  "duration": 2127840900,
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
  "duration": 4205261900,
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
  "duration": 53995000,
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
  "duration": 79093100,
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
  "duration": 45722900,
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
  "duration": 53788700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9160742400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 81855300,
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
  "duration": 1121913300,
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
  "duration": 1107954300,
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
  "duration": 1116278700,
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
  "duration": 1114087300,
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
  "duration": 1123316200,
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
  "duration": 1111113100,
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
  "duration": 593975300,
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
  "duration": 1112067900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 45260800,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir37424_628125935}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63932}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b931e4b54538c498c71887fc90473568\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:711)\r\n",
  "status": "failed"
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
      "offset": 31
    }
  ],
  "location": "Steps.iUploadAdditionalDocuments(String)"
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
  "location": "Steps.iVerifyTermsAndConditionsPage()"
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
      "offset": 21
    }
  ],
  "location": "Steps.iInputBankBranch(String)"
});
formatter.result({
  "status": "skipped"
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
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1040788100,
  "status": "passed"
});
formatter.after({
  "duration": 132600,
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
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    },
    {
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration_GOC"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button in Maupass",
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
  "line": 928,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 929,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 934,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 935,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 936,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 937,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 938,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 939,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 940,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 941,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 942,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 943,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 944,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 945,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 946,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 947,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 948,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 949,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 950,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 951,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 952,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 953,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 955,
      "value": "#    Finance"
    }
  ],
  "line": 956,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 964,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 965,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 969,
      "value": "#    PWO"
    }
  ],
  "line": 970,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 976,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 977,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 978,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    WPO"
    }
  ],
  "line": 987,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 988,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 989,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 993,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 994,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1004,
      "value": "#    WO/WA"
    }
  ],
  "line": 1005,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1010,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1011,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1027,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1028,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1029,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1031,
      "value": "#    WPO"
    }
  ],
  "line": 1032,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1050,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1051,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1052,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1053,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1054,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1055,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1056,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1068,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1069,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1071,
      "value": "#    WPO"
    }
  ],
  "line": 1072,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1073,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1074,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1075,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1076,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1077,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1088,
      "value": "#    IT Department"
    }
  ],
  "line": 1089,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1092,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1093,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1094,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1095,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1096,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1101,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1102,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1103,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1104,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1106,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1107,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1109,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1110,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1111,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1112,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1114,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;",
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
      "line": 1115,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "line": 1116,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18800,
  "status": "passed"
});
formatter.scenario({
  "line": 1116,
  "name": "Payment at counter for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-for-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "name": "@GOC_Registrations"
    },
    {
      "line": 888,
      "name": "@Smoke_counter_Small_Planters_Registration_GOC"
    },
    {
      "line": 888,
      "name": "@Approval_by_BO_Payment_at_counter_for_Small_Planters_Registration"
    }
  ]
});
formatter.step({
  "line": 891,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 892,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 893,
  "name": "I Click on Sign In button in Maupass",
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
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 904,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 905,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 906,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 907,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 908,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
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
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
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
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 917,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 918,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 919,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 920,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 921,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    26
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
  "line": 928,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 929,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 930,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 931,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 932,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 933,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 934,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 935,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 936,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 937,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 938,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 939,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 940,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 941,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 942,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 943,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 944,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 945,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 946,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 947,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 948,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 949,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 950,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 951,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 952,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 953,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 955,
      "value": "#    Finance"
    }
  ],
  "line": 956,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 957,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 958,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 959,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 960,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 961,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 962,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 963,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 964,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 965,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 966,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 967,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 969,
      "value": "#    PWO"
    }
  ],
  "line": 970,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 971,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 972,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 973,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 974,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 975,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 976,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 977,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 978,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 979,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 980,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 981,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 982,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 983,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 984,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 985,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 986,
      "value": "#    WPO"
    }
  ],
  "line": 987,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 988,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 989,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 990,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 991,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 992,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 993,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 994,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 995,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 996,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 997,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 998,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 999,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1000,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1001,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1002,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1004,
      "value": "#    WO/WA"
    }
  ],
  "line": 1005,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1006,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1007,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1008,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1009,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1010,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1011,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1012,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1013,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1014,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1015,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1016,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1017,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1018,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1019,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1020,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1021,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1022,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1023,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1024,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1025,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1026,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1027,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1028,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1029,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1031,
      "value": "#    WPO"
    }
  ],
  "line": 1032,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1033,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1034,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1035,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1036,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1037,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1038,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1039,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1040,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1041,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1042,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1043,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1044,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1045,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1046,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1047,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1048,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1050,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1051,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1052,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1053,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1054,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1055,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1056,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1057,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1058,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1059,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1060,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1061,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1062,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1063,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1064,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1065,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1066,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1067,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1068,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1069,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1071,
      "value": "#    WPO"
    }
  ],
  "line": 1072,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1073,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1074,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1075,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1076,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1077,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1078,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1079,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1080,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1081,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1082,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1083,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1084,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1085,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1086,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1088,
      "value": "#    IT Department"
    }
  ],
  "line": 1089,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1090,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1091,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1092,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1093,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1094,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1095,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1096,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1097,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1098,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1099,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1101,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1102,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1103,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1104,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1105,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1106,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1107,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1108,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1109,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1110,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1111,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1112,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 4895268400,
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
  "duration": 7707974900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 60275700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1651546600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 347753000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 26866100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 15732200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 25829100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 179258000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 147516700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 2496785600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 52885900,
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
  "duration": 2647556800,
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
  "duration": 5771171100,
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
  "duration": 3629044800,
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
  "duration": 112071300,
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
  "duration": 60309200,
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
  "duration": 1182766400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1036527800,
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
  "duration": 4124443400,
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
  "duration": 1614251500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9159732300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 81166800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3091750700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3072468900,
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
  "duration": 2622868100,
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
  "duration": 56763400,
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
  "duration": 62847600,
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
  "duration": 1611141400,
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
  "duration": 5847087800,
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
  "duration": 64844200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 51289800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 47346000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 44238700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9157610300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 53413700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3093635300,
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
  "duration": 610595900,
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
  "duration": 1630432600,
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
  "duration": 2124179000,
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
  "duration": 1617035600,
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
  "duration": 65713900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9172061900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 80275600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1586726400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 55145400,
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
  "duration": 3686623500,
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
  "duration": 1106624700,
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
  "duration": 1112362200,
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
  "duration": 3429589700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10053455800,
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
  "duration": 39774400,
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
  "duration": 71300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 44162700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2624461300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2189298700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 595710800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 576557300,
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
  "duration": 5133648600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2104192700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8059745200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7967140300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4353161500,
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
  "duration": 172938900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 598586300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 60184800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 56122400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1545892100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1557891200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 51853300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1556755500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 10605695100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4341735800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1057979500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6078738600,
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
  "duration": 155838100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 623746600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 49763300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 616476900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1546649200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5077153200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2137673100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1162017600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 3252005500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1614678700,
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
  "duration": 10096646200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 68273800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1081280400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4339153000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1070193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5307714400,
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
  "duration": 222720500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 601420100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 75349500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 646554500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1546916600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5063821100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2124234400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1173265300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2167539200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1735600600,
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
  "duration": 10092166600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 70984400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1089514900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4339253900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1083064500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5987003900,
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
  "duration": 143874900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 589542600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 66612400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 615730900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1538106100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5082471300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2122093500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 77282100,
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
  "duration": 56841700,
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
  "duration": 89246900,
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
  "duration": 3255599200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForBonafideDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 17985200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAddInformationForCropDetailsInSectionOne()"
});
formatter.result({
  "duration": 19252360100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectDripIrrigationFacilityInSectionTwo()"
});
formatter.result({
  "duration": 10303420000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 2196211400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 15636200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1171474600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2169681600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1669503200,
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
  "duration": 10092337700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 69788300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1094986500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4331174700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1093374700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5693040800,
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
  "duration": 313705500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 509468400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 40612300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 611575100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1540277000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5071529200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2121178400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1176981100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 2672590300,
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
  "duration": 76967100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 1132447000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 16147400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 47861700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 1094720100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4307189900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1079123600,
  "status": "passed"
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
  "duration": 5164328500,
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
  "duration": 8938594200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 52405200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 2168045200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 545954000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18323400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 14417400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 16285000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2164069200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 979540900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9155371100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 80625400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9150226100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 51657300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9165589600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 81545200,
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
  "duration": 3582476100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10060251300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8168365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 7075952800,
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
  "duration": 203582800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 569123000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 42149200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 601757200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1547782200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5065892400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2128597200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1177350800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "duration": 1655552100,
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
  "duration": 10108811400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 79741800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "duration": 1087741500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4344354100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1093012100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6768076000,
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
  "duration": 179332500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 581241600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 57394000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 609000900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1549117100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5080255100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2126111400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "duration": 3670177800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4345276900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1082212000,
  "status": "passed"
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
  "duration": 5001137200,
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
  "duration": 8853560000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 63872800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 2388090300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 417078200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 19209100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 25697700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13158600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "duration": 2101382600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "duration": 38183400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7917337800,
  "status": "passed"
});
formatter.after({
  "duration": 1762000,
  "status": "passed"
});
formatter.after({
  "duration": 35100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1118,
      "value": "#Scenario6"
    }
  ],
  "line": 1120,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-small-planters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1119,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 1119,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1122,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1123,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1124,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1125,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1126,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1127,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1128,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
  "name": "I Select Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1135,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1136,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1137,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1138,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1139,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1140,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1141,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1142,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1143,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1144,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1145,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1146,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1147,
  "name": "I Select Family relationship \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1148,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1159,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 1160,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Select Crop Type \"\u003cCrop_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1174,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1175,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1183,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1184,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1189,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1191,
      "value": "#    PWO"
    }
  ],
  "line": 1192,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1193,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1194,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1195,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1196,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1197,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1198,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1199,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1200,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1201,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1202,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1203,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1204,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1205,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1206,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1207,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1208,
      "value": "#    WPO"
    }
  ],
  "line": 1209,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1210,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1211,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1217,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1218,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1219,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1220,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1226,
      "value": "#    WO/WA"
    }
  ],
  "line": 1227,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1233,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1234,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1235,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1236,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1237,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1251,
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
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
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
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1268,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1269,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1270,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1272,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1273,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1274,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1275,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1294,
      "value": "#    WPO"
    }
  ],
  "line": 1295,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1297,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1298,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1299,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1311,
      "value": "#    IT Department"
    }
  ],
  "line": 1312,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1313,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1314,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1315,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1316,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1317,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1318,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1319,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1320,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1324,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1325,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1326,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1327,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1331,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1332,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1333,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1337,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-small-planters;",
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
      "line": 1338,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "line": 1339,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 43100,
  "status": "passed"
});
formatter.scenario({
  "line": 1339,
  "name": "Payment Online for Registration for Small Planters",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-for-small-planters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 1119,
      "name": "@Approval_by_BO_Payment_at_online_for_Small_Planters_Registration"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    },
    {
      "line": 1119,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1122,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1123,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1124,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1125,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1126,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1127,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1128,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1129,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1130,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1131,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1132,
  "name": "I Click on Small Planters Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1133,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1134,
  "name": "I Select Applicant Title \"Mr\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1135,
  "name": "I Select Applicant District \"Black River\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1136,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1137,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1138,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1139,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1140,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1141,
  "name": "I Select No of years for Registration membership \"1\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1142,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1143,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1144,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1145,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1146,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1147,
  "name": "I Select Family relationship \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1148,
  "name": "I Input Family Surname \"Sanon\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1149,
  "name": "I Input Family Other Names \"Kirti\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1150,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1151,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1152,
  "name": "I Input Family Occupation \"Air Hostess\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1153,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1154,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1155,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1156,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1157,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1158,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1159,
      "value": "#    And I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Table"
    }
  ],
  "line": 1160,
  "name": "I Input Organisation Account Number \"0001252563\"",
  "matchedColumns": [
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1161,
  "name": "I Select Crop Type \"Cane\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1162,
  "name": "I Input Total Extent of plot (In Arpent) \"2.5\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1163,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1164,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1165,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1166,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1167,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1168,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1169,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1170,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1171,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1172,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1173,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1174,
      "value": "#    And I Click on Cancel button not to proceed with another registration"
    }
  ],
  "line": 1175,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1176,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1177,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1178,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1179,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1180,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1181,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1182,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1183,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1184,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1185,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    48,
    49,
    50,
    51,
    52
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1186,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1187,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1188,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1189,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1191,
      "value": "#    PWO"
    }
  ],
  "line": 1192,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1193,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1194,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1195,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1196,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1197,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1198,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1199,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1200,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1201,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1202,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1203,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1204,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1205,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1206,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1207,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1208,
      "value": "#    WPO"
    }
  ],
  "line": 1209,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1210,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1211,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1212,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1213,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1214,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1215,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1216,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1217,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1218,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1219,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1220,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1221,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1222,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1223,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1224,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1226,
      "value": "#    WO/WA"
    }
  ],
  "line": 1227,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1228,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1229,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1230,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1231,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1232,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1233,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1234,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1235,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1236,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1237,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1238,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1239,
  "name": "I Verify for Bonafide Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1240,
  "name": "I Add Information for Crop Details in Section One",
  "keyword": "And "
});
formatter.step({
  "line": 1241,
  "name": "I Select Drip Irrigation Facility in Section Two",
  "keyword": "And "
});
formatter.step({
  "line": 1242,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1243,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1244,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1245,
  "name": "I Select Assigned (For Small Planters)",
  "keyword": "And "
});
formatter.step({
  "line": 1246,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1247,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1248,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1249,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1250,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1251,
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
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1255,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
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
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1264,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1265,
  "name": "I Click on Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1266,
  "name": "I Verify Success Message for Under Query Notification for Small Farmers",
  "keyword": "And "
});
formatter.step({
  "line": 1267,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1268,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1269,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1270,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1272,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1273,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1274,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1275,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1276,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1277,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1278,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1279,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1280,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1281,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1282,
  "name": "I Verify display of REGISTRATION FOR SMALL PLANTERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1283,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1284,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1285,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1286,
  "name": "I Verify Display of Particulars of Crop: Sugarcane and Tea Plantation Page",
  "keyword": "And "
});
formatter.step({
  "line": 1287,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1288,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL PLANTERS",
  "keyword": "And "
});
formatter.step({
  "line": 1289,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1290,
  "name": "I Verify Success message for application submitted for Small Planters Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1291,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1294,
      "value": "#    WPO"
    }
  ],
  "line": 1295,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1296,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1297,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1298,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1299,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1300,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1301,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1302,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1303,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1304,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1305,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1306,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1307,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1308,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1309,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1311,
      "value": "#    IT Department"
    }
  ],
  "line": 1312,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1313,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1314,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1315,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1316,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1317,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1318,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1319,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1320,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1321,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1322,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1324,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1325,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1326,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1327,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1328,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1329,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1330,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1331,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1332,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1333,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1334,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1335,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 5827020800,
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
  "duration": 8168883800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 53664100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1664385800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 402406700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 25820600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 20952700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15113600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 178145700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 162267100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallPlantersIcon()"
});
formatter.result({
  "duration": 2653652900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 51081200,
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
  "duration": 2652301200,
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
  "duration": 5791120800,
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
  "duration": 3637392500,
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
  "duration": 123862600,
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
  "duration": 64516000,
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
  "duration": 1196589000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1030096700,
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
  "duration": 4131435400,
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
  "duration": 1615419700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9166665500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 82032900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3096604800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3069886100,
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
  "duration": 2636073000,
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
  "duration": 69413400,
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
  "duration": 62447200,
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
  "duration": 1603422800,
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
  "duration": 5831354000,
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
  "duration": 64060300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 49669600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 42530000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 50547900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9145521400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 56122300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3096456600,
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
  "duration": 613679600,
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
  "duration": 1618475700,
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
  "duration": 2125598200,
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
  "duration": 1616507000,
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
  "duration": 55684800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9150955800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 81252700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1581090500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 52385000,
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
  "duration": 3697756500,
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
  "duration": 1100101100,
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
  "duration": 1114719200,
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
  "duration": 3418455000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10051000000,
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
  "duration": 37661400,
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
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 45503400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2604592600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2195214800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 593745300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 591348500,
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
  "duration": 5132758400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 97789600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 9577906400,
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
  "duration": 5345386200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 3524721800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 13770600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "duration": 15537400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8939988500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6978214200,
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
  "duration": 170125900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 625482500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 49593100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 602759100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1543101100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5070507600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2126626500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1166776200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 3237244600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1614651500,
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
  "duration": 10111355700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 69675400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1104929400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4372628800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1087888300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6483383700,
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
  "duration": 281017900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 560839200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 77165800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 677229000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1539246400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5071388400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2121249600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1178294300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2180883500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1702806400,
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
  "duration": 10099536400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 72728300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1088507500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4326699100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1037103300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4354439200,
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
  "duration": 158786700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 505717800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 44708100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 607151300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1553122400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5071072200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2125215700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 77978800,
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
  "duration": 58500300,
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
  "duration": 87576200,
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
  "duration": 1677102900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForBonafideDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 11685000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAddInformationForCropDetailsInSectionOne()"
});
formatter.result({
  "duration": 19227524300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectDripIrrigationFacilityInSectionTwo()"
});
formatter.result({
  "duration": 10320962900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 2195969700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 18334500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1151490200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssignedForSmallPlanters()"
});
formatter.result({
  "duration": 2179740400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1666209500,
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
  "duration": 10118103000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 88362500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1077484700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4357445800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1048800600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4609379700,
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
  "duration": 168738400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 652985500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 56535100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 608208100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1544071000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5066514500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2125275300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1202817500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 2701192200,
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
  "duration": 73972800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 1155100000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForSmallFarmers()"
});
formatter.result({
  "duration": 16405900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 49818100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 1100085600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4343351700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1093863900,
  "status": "passed"
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
  "duration": 4766714500,
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
  "duration": 8124388500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 70604600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1472260200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 430707200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 35470200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 17219000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13236000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2187196000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLPLANTERSPage()"
});
formatter.result({
  "duration": 974200000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9165690200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 78172500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9153864900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfCropSugarcaneAndTeaPlantationPage()"
});
formatter.result({
  "duration": 52958700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9147655600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLPLANTERS()"
});
formatter.result({
  "duration": 82402200,
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
  "duration": 3413689800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallPlantersRegistration()"
});
formatter.result({
  "duration": 10055901500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7975372700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4373997100,
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
  "duration": 246046300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 519628100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 63659800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 607386700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1554424700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5061680500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2114837000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1184383300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "duration": 1643585500,
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
  "duration": 10101014700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 69033900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "duration": 1097603700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4312260900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1080175300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4561490900,
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
  "duration": 336772700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 589651600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 61748900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 620407000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1543670800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5058902900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2121359700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "duration": 3644769000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4341670000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1075829500,
  "status": "passed"
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
  "duration": 5100285600,
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
  "duration": 8460862200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 71665000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1534865500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 411518900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18174200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 25768700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 10755000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "duration": 2121819100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "duration": 38298500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 7893074100,
  "status": "passed"
});
formatter.after({
  "duration": 1849600,
  "status": "passed"
});
formatter.after({
  "duration": 48900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1342,
      "value": "#Scenario7"
    }
  ],
  "line": 1344,
  "name": "Payment at counter for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1343,
      "name": "@Approval_by_BO_Payment_at_counter_for_Tea_grower"
    },
    {
      "line": 1343,
      "name": "@Smoke_counter_Tea_grower_GOC"
    }
  ]
});
formatter.step({
  "line": 1345,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1346,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1347,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1348,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1349,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1350,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1354,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1355,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1356,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1361,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1362,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1363,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1364,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1365,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1367,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1368,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1369,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1370,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1371,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1374,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1375,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1376,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1377,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1378,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1379,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1380,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1381,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1382,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1383,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1384,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1385,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1387,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1388,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1389,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1390,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1391,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1392,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1393,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1394,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1395,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1396,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1397,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1398,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1399,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1400,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1401,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1402,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1403,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1404,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1405,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1407,
      "value": "#    Finance"
    }
  ],
  "line": 1408,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1409,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1410,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1411,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1412,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1413,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1414,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1415,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1416,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1417,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1418,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1419,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1421,
      "value": "#    PWO"
    }
  ],
  "line": 1422,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1423,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1424,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1425,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1426,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1427,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1428,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1429,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1430,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1431,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1432,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1433,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1434,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1435,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1436,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1437,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1439,
      "value": "#    WPO"
    }
  ],
  "line": 1440,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1441,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1442,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1443,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1444,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1445,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1446,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1447,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1448,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1449,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1450,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1451,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1452,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1453,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1454,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1455,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1457,
      "value": "#    WO/WA"
    }
  ],
  "line": 1458,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1459,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1460,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1461,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1462,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1463,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1464,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1465,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1466,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1467,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1468,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1469,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1470,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1471,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1472,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1473,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1474,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1475,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1476,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1477,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1478,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1479,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1480,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1482,
      "value": "#    WPO"
    }
  ],
  "line": 1483,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1484,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1485,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1486,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1487,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1488,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1489,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1490,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1491,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1492,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1493,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1494,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1495,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1496,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1497,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1498,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1499,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1501,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1502,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1503,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1504,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1505,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1506,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1507,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1508,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1509,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1510,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1511,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1512,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1513,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1514,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1515,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1516,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1517,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1518,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1519,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1520,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1522,
      "value": "#    WPO"
    }
  ],
  "line": 1523,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1524,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1525,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1526,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1527,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1528,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1529,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1530,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1531,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1532,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1533,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1534,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1535,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1536,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1537,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1539,
      "value": "#    IT Department"
    }
  ],
  "line": 1540,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1541,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1542,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1543,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1544,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1545,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1546,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1547,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1548,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1549,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1550,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1552,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1553,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1554,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1555,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1556,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1557,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1558,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1559,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1560,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1561,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1562,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1563,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1565,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;",
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
      "line": 1566,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "line": 1567,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31400,
  "status": "passed"
});
formatter.scenario({
  "line": 1567,
  "name": "Payment at counter for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-tea-grower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 1343,
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
      "line": 1343,
      "name": "@Smoke_counter_Tea_grower_GOC"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 1345,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1346,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1347,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1348,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1349,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1350,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1351,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1352,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1353,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1354,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1355,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1356,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1357,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1358,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1359,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1360,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1361,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1362,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1363,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1364,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1365,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1366,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1367,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1368,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1369,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1370,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1371,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1372,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1373,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1374,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1375,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1376,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1377,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1378,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1379,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1380,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1381,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1382,
  "name": "I Input Organisation Account Number \"ACC58969\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1383,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1384,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1385,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1386,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1387,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1388,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1389,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1390,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1391,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1392,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1393,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1394,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1395,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1396,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1397,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1398,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1399,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1400,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1401,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1402,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1403,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1404,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1405,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1407,
      "value": "#    Finance"
    }
  ],
  "line": 1408,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1409,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1410,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1411,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1412,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1413,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1414,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1415,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1416,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1417,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1418,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1419,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1421,
      "value": "#    PWO"
    }
  ],
  "line": 1422,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1423,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1424,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1425,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1426,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1427,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1428,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1429,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1430,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1431,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1432,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1433,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1434,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1435,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1436,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1437,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1439,
      "value": "#    WPO"
    }
  ],
  "line": 1440,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1441,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1442,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1443,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1444,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1445,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1446,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1447,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1448,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1449,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1450,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1451,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1452,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1453,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1454,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1455,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1457,
      "value": "#    WO/WA"
    }
  ],
  "line": 1458,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1459,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1460,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1461,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1462,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1463,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1464,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1465,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1466,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1467,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1468,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1469,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1470,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1471,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1472,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1473,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1474,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1475,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1476,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1477,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1478,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1479,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1480,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1482,
      "value": "#    WPO"
    }
  ],
  "line": 1483,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1484,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1485,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1486,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1487,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1488,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1489,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1490,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1491,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1492,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1493,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1494,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1495,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1496,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1497,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1498,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1499,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1501,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1502,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1503,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1504,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1505,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1506,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1507,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1508,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1509,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1510,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1511,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1512,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1513,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1514,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1515,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1516,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1517,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1518,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1519,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1520,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1522,
      "value": "#    WPO"
    }
  ],
  "line": 1523,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1524,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1525,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1526,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1527,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1528,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1529,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1530,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1531,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1532,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1533,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1534,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1535,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1536,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1537,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1539,
      "value": "#    IT Department"
    }
  ],
  "line": 1540,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1541,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1542,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1543,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1544,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1545,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1546,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1547,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1548,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1549,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1550,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1552,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1553,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1554,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1555,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1556,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1557,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1558,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1559,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1560,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1561,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1562,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1563,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 5150607000,
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
  "duration": 7767628100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 55298400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1575185100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 392850600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 21399300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 12754300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 13773700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 180497600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 150794000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 2468393400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 51471100,
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
  "duration": 2624084300,
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
  "duration": 5802299500,
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
  "duration": 3645627400,
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
  "duration": 104910300,
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
  "duration": 59447500,
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
  "duration": 1172419700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1034422900,
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
  "duration": 2120895100,
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
  "duration": 1597037500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9161519300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 80577000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3102797600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3080552600,
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
  "duration": 2636934200,
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
  "duration": 66793800,
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
  "duration": 59540800,
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
  "duration": 1616027600,
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
  "duration": 5907514200,
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
  "duration": 64062100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 53589300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 41951700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 46053200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9158811400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "duration": 80401900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3092878900,
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
  "duration": 599760500,
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
  "duration": 2127227500,
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
  "duration": 1620213100,
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
  "duration": 63028700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9149932000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "duration": 82252700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1586997500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 50981900,
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
  "duration": 3703398400,
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
  "duration": 1103161400,
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
  "duration": 1098004700,
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
  "duration": 3428790800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10727634700,
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
  "duration": 37498600,
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
  "duration": 51300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 46513100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2612365300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2188521000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 609112200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 579345100,
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
  "duration": 5130653000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2114177100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8055303000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8330558100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5887145700,
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
  "duration": 354320900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 611121600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 64980000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 61049400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1547168900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1569939100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 53115500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 1556575500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 10595107000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4329123400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1091405800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5371186100,
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
  "duration": 183951800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 542350600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 43695600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 598253500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1548445100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5076476300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2114805500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1173471700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 3251479000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1607211500,
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
  "duration": 10112918900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 70835000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1079678600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4323411300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1164312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 6831976700,
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
  "duration": 181078700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 548203200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 54478300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 622706800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1545209900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5075697600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2118232200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1170947200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1628373200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1674509500,
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
  "duration": 10112612800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 72023400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1082714100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4316902200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1103646300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 4892558600,
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
  "duration": 150852100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 490517900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 52002100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 612386100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1552950600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5060044500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2130275600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 73968700,
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
  "duration": 54277500,
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
  "duration": 84738200,
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
  "duration": 2715108500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 49903100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir31100_477355290}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65172}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c3f81d7f2e23ccd8b14086978b1b37e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:1470)\r\n",
  "status": "failed"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iClickOnUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForTeaGrower()"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1046794000,
  "status": "passed"
});
formatter.after({
  "duration": 124500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1570,
      "value": "#Scenario8"
    }
  ],
  "line": 1572,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-tea-grower",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1571,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 1571,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1573,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1574,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1575,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1576,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1577,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1578,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1579,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1580,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1581,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1582,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1583,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1584,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1585,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1586,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1587,
  "name": "I Select Applicant Education Level \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1588,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1589,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1590,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1591,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1592,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1593,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1594,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1595,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1596,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1597,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1598,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1599,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1600,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1601,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1602,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1603,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1604,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1605,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1606,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1607,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1608,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1609,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1610,
  "name": "I Input Organisation Account Number \"\u003cOrg_acc_no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1611,
  "name": "I Input Total Extent of plot (In Arpent) \"\u003cLand_Extent\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1612,
  "name": "I Select Owner Type \"\u003cOwner_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1613,
  "name": "I Input Plot Location \"\u003cPlot_Location\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1614,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1615,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1616,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1617,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1618,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1619,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1620,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1638,
      "value": "#    PWO"
    }
  ],
  "line": 1639,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1655,
      "value": "#    WPO"
    }
  ],
  "line": 1656,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1673,
      "value": "#    WO/WA"
    }
  ],
  "line": 1674,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1679,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1680,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1683,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1684,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1696,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1698,
      "value": "#    WPO"
    }
  ],
  "line": 1699,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1700,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1701,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1713,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1714,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1715,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1717,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1718,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1719,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1720,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1738,
      "value": "#    WPO"
    }
  ],
  "line": 1739,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1740,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1742,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1743,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1744,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1755,
      "value": "#    IT Department"
    }
  ],
  "line": 1756,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1757,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1758,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1759,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1760,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1761,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1762,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1763,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1764,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1765,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1768,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1769,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1770,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1771,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1776,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1777,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1778,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 1781,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;",
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
      "line": 1782,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
      "line": 1783,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38100,
  "status": "passed"
});
formatter.scenario({
  "line": 1783,
  "name": "Payment online for Registration as Tea Grower",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-tea-grower;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 1571,
      "name": "@Approval_by_BO_Payment_online_for_Tea_grower"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    },
    {
      "line": 1571,
      "name": "@Smoke_online"
    }
  ]
});
formatter.step({
  "line": 1573,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1574,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1575,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1576,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1577,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1578,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1579,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1580,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1581,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1582,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1583,
  "name": "I Click on Tea Grower Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1584,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1585,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1586,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1587,
  "name": "I Select Applicant Education Level \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1588,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1589,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1590,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1591,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1592,
  "name": "I Select Duration Year for Registration membership for Tea Grower \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1593,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1594,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1595,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1596,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1597,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1598,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1599,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1600,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1601,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1602,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1603,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1604,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1605,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1606,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1607,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1608,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1609,
  "name": "I Click on Add Crop",
  "keyword": "And "
});
formatter.step({
  "line": 1610,
  "name": "I Input Organisation Account Number \"ACC5896\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1611,
  "name": "I Input Total Extent of plot (In Arpent) \"2.7\"",
  "matchedColumns": [
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1612,
  "name": "I Select Owner Type \"Tenant\"",
  "matchedColumns": [
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1613,
  "name": "I Input Plot Location \"Moka\"",
  "matchedColumns": [
    30
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1614,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1615,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1616,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1617,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1618,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1619,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1620,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1621,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1622,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1623,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1624,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1625,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1626,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1627,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1628,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1629,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1630,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1631,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1632,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 1633,
  "name": "I Input Card Details \"5123-4500-0000-0008\" \"01\" \"39\" \"My name\" \"100\"",
  "matchedColumns": [
    40,
    41,
    42,
    43,
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1634,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 1635,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1636,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 1637,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1638,
      "value": "#    PWO"
    }
  ],
  "line": 1639,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1640,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1641,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1642,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1643,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1644,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1645,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1646,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1647,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1648,
  "name": "I Select PWO Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1649,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1650,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1651,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1652,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1653,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1654,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1655,
      "value": "#    WPO"
    }
  ],
  "line": 1656,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1657,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1658,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1659,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1660,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1661,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1662,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1663,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1664,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1665,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1666,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1667,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1668,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1669,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1670,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1671,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1673,
      "value": "#    WO/WA"
    }
  ],
  "line": 1674,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1675,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1676,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1677,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1678,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1679,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1680,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1681,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1682,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1683,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1684,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1685,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1686,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1687,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1688,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1689,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1690,
  "name": "I Select Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1691,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1692,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1693,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1694,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1695,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1696,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1698,
      "value": "#    WPO"
    }
  ],
  "line": 1699,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1700,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1701,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1702,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1703,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1704,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1705,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1706,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1707,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1708,
  "name": "I Select Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1709,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1710,
  "name": "I Click on Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1711,
  "name": "I Verify Success Message for Under Query Notification for Tea Grower",
  "keyword": "And "
});
formatter.step({
  "line": 1712,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1713,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1714,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1715,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1717,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1718,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1719,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1720,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1721,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1722,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1723,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1724,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1725,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1726,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1727,
  "name": "I Verify display of REGISTRATION FOR TEA GROWERS Page",
  "keyword": "And "
});
formatter.step({
  "line": 1728,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1729,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1730,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1731,
  "name": "I Verify Display of Particulars for Registration of Tea Plantation",
  "keyword": "And "
});
formatter.step({
  "line": 1732,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1733,
  "name": "I Verify Declaration Page for REGISTRATION FOR TEA GROWER",
  "keyword": "And "
});
formatter.step({
  "line": 1734,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    36
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1735,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1736,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1738,
      "value": "#    WPO"
    }
  ],
  "line": 1739,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1740,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1741,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1742,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1743,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1744,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1745,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1746,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1747,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1748,
  "name": "I Select Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1749,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1750,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1751,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1752,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1753,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1755,
      "value": "#    IT Department"
    }
  ],
  "line": 1756,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1757,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1758,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1759,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1760,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1761,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1762,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1763,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1764,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 1765,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1766,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1768,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 1769,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1770,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1771,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1772,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1773,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1774,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1775,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1776,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1777,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1778,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 1779,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 4763848200,
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
  "duration": 8269541600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 64385900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1963939600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 611790200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 22366200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 12951100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 14268300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 527524700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 26093300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnTeaGrowerIcon()"
});
formatter.result({
  "duration": 2698926300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
});
formatter.result({
  "duration": 51935200,
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
  "duration": 2640561200,
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
  "duration": 5779207700,
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
  "duration": 3649633700,
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
  "duration": 123760700,
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
  "duration": 59107200,
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
  "duration": 1175285300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1030631600,
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
  "duration": 2121463600,
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
  "duration": 1603454400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9159463100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 81226100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3091273900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3067885900,
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
  "duration": 2618944300,
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
  "duration": 51306500,
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
  "duration": 59992500,
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
  "duration": 1637356900,
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
  "duration": 5845995500,
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
  "duration": 63059800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 51557000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 45008100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 49216100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9153898300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsForRegistrationOfTeaPlantation()"
});
formatter.result({
  "duration": 94896100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddCrop()"
});
formatter.result({
  "duration": 3086752500,
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
  "duration": 595300100,
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
  "duration": 2124841500,
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
  "duration": 1612038000,
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
  "duration": 57502500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9155827500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORTEAGROWER()"
});
formatter.result({
  "duration": 81066000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1594144000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 52214000,
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
  "duration": 3700473400,
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
  "duration": 1100485900,
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
  "duration": 1104152900,
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
  "duration": 3532181500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10068555100,
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
  "duration": 45389200,
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
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 52321000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2606424200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2188294100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 583194800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 595493400,
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
  "duration": 5134988900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "duration": 98497800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "duration": 5442892200,
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
  "duration": 5322797200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
});
formatter.result({
  "duration": 3663169600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 14683900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyPaymentStatusIsChangedToPaid()"
});
formatter.result({
  "duration": 14131700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 8466968700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5678621000,
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
  "duration": 191234500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 638534700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 65711300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 598690100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1542751000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5070114300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2117421100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1170299800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 3247357100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1619421100,
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
  "duration": 10105224300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 75875600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1100550900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4335920700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1104699400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5206542300,
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
  "duration": 169632800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 413583100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 289636700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 598426600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1546272900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5068436400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2111916400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 1180904400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1633728600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1688570800,
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
  "duration": 10111224700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 71005600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 1093606300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4334451000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1069768600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
});
formatter.result({
  "duration": 5490223900,
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
  "duration": 200619400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 522800700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 53028200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 594470100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1549297700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 5080283700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2127030300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 77600700,
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
  "duration": 57413600,
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
  "duration": 87882300,
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
  "duration": 1673114900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 58012100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir34364_474808223}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65393}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 5ae3e0b0c119b253b293e6d393011f57\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:1686)\r\n",
  "status": "failed"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iClickOnUnderQueryNotificationForTeaGrower()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotificationForTeaGrower()"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORTEAGROWERSPage()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1052396100,
  "status": "passed"
});
formatter.after({
  "duration": 160700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 1785,
      "value": "#Scenario9"
    }
  ],
  "line": 1787,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1786,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    },
    {
      "line": 1786,
      "name": "@Smoke_counter_for_Registration_as_Small_Breeder_GOC"
    }
  ]
});
formatter.step({
  "line": 1789,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1790,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1791,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1793,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1794,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1795,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1799,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1800,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1801,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1825,
  "name": "I Input Number of Cow Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1826,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1827,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1828,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1829,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1830,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1831,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1832,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1833,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1834,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1835,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1836,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Upload Additional Document for small breeder \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1866,
      "value": "#    Finance"
    }
  ],
  "line": 1867,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1868,
  "name": "I Input Finance Username \"\u003cFUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1880,
      "value": "#    PWO"
    }
  ],
  "line": 1881,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1893,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1894,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1895,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1898,
      "value": "#    WPO"
    }
  ],
  "line": 1899,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1910,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1911,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1912,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1913,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1916,
      "value": "#    WO/WA"
    }
  ],
  "line": 1917,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1920,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1921,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1922,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1923,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1927,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1928,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1929,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1930,
  "name": "I Input Section One data \"\u003cBreeder_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1931,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1942,
      "value": "#    WPO"
    }
  ],
  "line": 1943,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1944,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1945,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 1955,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1956,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1957,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1961,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1962,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 1963,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 1964,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1974,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1975,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1976,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1977,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1978,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1980,
      "value": "#    WPO"
    }
  ],
  "line": 1981,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1986,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1987,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1988,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1997,
      "value": "#    IT Department"
    }
  ],
  "line": 1998,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 1999,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2005,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2006,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2007,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2008,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2010,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2011,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2012,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2013,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2014,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2015,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2016,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2023,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;",
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
        "Breeder_Type"
      ],
      "line": 2024,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
        "10",
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
        "Counter",
        "Cattle"
      ],
      "line": 2025,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34600,
  "status": "passed"
});
formatter.scenario({
  "line": 2025,
  "name": "Payment at counter for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-at-counter-for-registration-as-small-breeder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
      "line": 1786,
      "name": "@Smoke_counter_for_Registration_as_Small_Breeder_GOC"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 1786,
      "name": "@Approval_by_BO_Payment_at_counter_for_Registration_as_Small_Breeder"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 1789,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1790,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1791,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1792,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1793,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1794,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1795,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1796,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1797,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1798,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 1799,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1800,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1801,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1802,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1803,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1804,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1805,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1806,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1807,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 1808,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1809,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1810,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1811,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 1812,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1813,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 1814,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1815,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1816,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1817,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1818,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1819,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1820,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1821,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 1822,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 1823,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1824,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 1825,
  "name": "I Input Number of Cow Female \"10\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1826,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1827,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1828,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1829,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1830,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1831,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1832,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1833,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1834,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1835,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1836,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1837,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1838,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1839,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 1840,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1841,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 1842,
  "name": "I Upload Additional Document for small breeder \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1843,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1844,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1845,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 1846,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 1847,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 1848,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1849,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1850,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1851,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1852,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 1853,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 1854,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1855,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1856,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 1857,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1858,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 1859,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1860,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 1861,
  "name": "I Select Payment Method \"Counter\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1862,
  "name": "I Click on Final Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1863,
  "name": "I Verify Message to proceed to Post Office for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1864,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 1866,
      "value": "#    Finance"
    }
  ],
  "line": 1867,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1868,
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1869,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1870,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1871,
  "name": "I Click on Manage Cashier",
  "keyword": "And "
});
formatter.step({
  "line": 1872,
  "name": "I Verify List of Applications page",
  "keyword": "And "
});
formatter.step({
  "line": 1873,
  "name": "I Click on Confirm Processing Fees",
  "keyword": "And "
});
formatter.step({
  "line": 1874,
  "name": "I Verify display of Processing Details Frame",
  "keyword": "And "
});
formatter.step({
  "line": 1875,
  "name": "I Click on Save Payment",
  "keyword": "And "
});
formatter.step({
  "line": 1876,
  "name": "I Verify success message for adding payment",
  "keyword": "And "
});
formatter.step({
  "line": 1877,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1878,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1880,
      "value": "#    PWO"
    }
  ],
  "line": 1881,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1882,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1883,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1884,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1885,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1886,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1887,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1888,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1889,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1890,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1891,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1892,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1893,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1894,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1895,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1896,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1898,
      "value": "#    WPO"
    }
  ],
  "line": 1899,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1900,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1901,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1902,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1903,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1904,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1905,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1906,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1907,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1908,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1909,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 1910,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1911,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1912,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1913,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1914,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1916,
      "value": "#    WO/WA"
    }
  ],
  "line": 1917,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1918,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1919,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1920,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1921,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1922,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1923,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1924,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1925,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 1926,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1927,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1928,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1929,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 1930,
  "name": "I Input Section One data \"Cattle\"",
  "matchedColumns": [
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1931,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 1932,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 1933,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1934,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 1935,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 1936,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1937,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1938,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 1939,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1940,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1942,
      "value": "#    WPO"
    }
  ],
  "line": 1943,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1944,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1945,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1946,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1947,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1948,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1949,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1950,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1951,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1952,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 1953,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1954,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 1955,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 1956,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1957,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 1958,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1959,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1961,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 1962,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 1963,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 1964,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 1965,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1966,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 1967,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 1968,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 1969,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 1970,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 1971,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 1972,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1973,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 1974,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 1975,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 1976,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1977,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 1978,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1980,
      "value": "#    WPO"
    }
  ],
  "line": 1981,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1982,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1983,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 1984,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 1985,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 1986,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 1987,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 1988,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 1989,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 1990,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 1991,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1992,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 1993,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 1994,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 1995,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 1997,
      "value": "#    IT Department"
    }
  ],
  "line": 1998,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 1999,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2000,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2001,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2002,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2003,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2004,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2005,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2006,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2007,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2008,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2010,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2011,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2012,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2013,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2014,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2015,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2016,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2017,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2018,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2019,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2020,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2021,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 4871097700,
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
  "duration": 8739441600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 68934400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1814875500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 396095100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 14375300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 21971200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 22322800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 322625200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 12875100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 2441451300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 52416400,
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
  "duration": 2639104100,
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
  "duration": 5795136100,
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
  "duration": 3643328400,
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
  "duration": 111325000,
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
  "duration": 56994900,
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
  "duration": 1175458600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1027473300,
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
  "duration": 4132752100,
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
  "duration": 1612549800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9171232400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 81479000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3093345500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3075836800,
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
  "duration": 2634410500,
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
  "duration": 72985000,
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
  "duration": 53441200,
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
  "duration": 1604973200,
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
  "duration": 5840207100,
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
  "duration": 68186200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 43012000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 46977800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 47193400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9153308200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 83017200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "Steps.iInputNumberOfCowFemale(String)"
});
formatter.result({
  "duration": 1122790500,
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
  "duration": 1621073100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9167907200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 82334600,
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
  "duration": 1123707300,
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
  "duration": 1123004800,
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
  "duration": 594209900,
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
  "duration": 592472400,
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
  "duration": 1092589900,
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
  "duration": 602550500,
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
  "duration": 586164900,
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
  "duration": 1097649900,
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
  "duration": 1110860900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 49519100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir43908_1156055040}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65420}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 1726ba680efc265e954085675fb187d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:1838)\r\n",
  "status": "failed"
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
  "location": "Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "arguments": [
    {
      "val": "Cattle",
      "offset": 26
    }
  ],
  "location": "Steps.iInputSectionOneData(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionUnderQuery()"
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
  "location": "Steps.iClickOnUnderQueryNotificationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryMailNotification()"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionApprovedToApproveTheRegistrationApplication()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1016898600,
  "status": "passed"
});
formatter.after({
  "duration": 98500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2028,
      "value": "#Scenario10"
    }
  ],
  "line": 2030,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-small-breeder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2029,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 2029,
      "name": "@Smoke_online_Registration_as_Small_Breeder_GOC"
    }
  ]
});
formatter.step({
  "line": 2032,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2033,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2034,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2040,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2041,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2042,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2043,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2044,
  "name": "I Select an Applicant Title \"\u003cApplicant_Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2045,
  "name": "I Select Applicant District \"\u003cDistrict\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2046,
  "name": "I Select Applicant Level of Education \"\u003cEducation_Level\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2047,
  "name": "I Select Agricultural Activity \"\u003cAct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2048,
  "name": "I Input Other Occupation \"\u003cOther_Occupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2049,
  "name": "I Upload Photograph \"\u003cPhoto\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2050,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2051,
  "name": "I Select No of years for Registration membership \"\u003cYear_dur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2052,
  "name": "I Select Marital Status \"\u003cMarital_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2053,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2054,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2055,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2056,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2057,
  "name": "I Select Family relationship for tea grower \"\u003cRelationship\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2058,
  "name": "I Input Family Surname \"\u003cFamily_Surname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2059,
  "name": "I Input Family Other Names \"\u003cFamily_Other_Names\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2060,
  "name": "I Select Family Gender \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2061,
  "name": "I Input Family Date of Birth \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2062,
  "name": "I Input Family Occupation \"\u003cOccupation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2063,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2064,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2065,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2066,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2067,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2068,
  "name": "I Input Number of Cow Female \"\u003cMale_Female_Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2069,
  "name": "I Select Reason \"\u003cReason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2070,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2071,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2072,
  "name": "I Upload Copy of National Identify Card (ID) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2073,
  "name": "I Upload Existing SFWF Reg No (if any) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2074,
  "name": "I Upload copy of Title Deed \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2075,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2076,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2077,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2078,
  "name": "I Upload Location plan of farm including size \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2079,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2080,
  "name": "I Upload Animal Card DVs where applicable \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2081,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2082,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2083,
  "name": "I Input Additional Document Name \"\u003cAdditional_Doc_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2084,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2085,
  "name": "I Upload Additional Document for small breeder \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2086,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Select Bank \"\u003cBank_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"\u003cBank_Branch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"\u003cBank_Account_No\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Verify Application Status \"\u003cApp_status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Verify Payment Status \"\u003cPayment_Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Select Payment Method \"\u003cPayment_method\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2107,
  "name": "I Input Card Details \"\u003cCard_Number\u003e\" \"\u003cExpiry_Month\u003e\" \"\u003cExpiry_Year\u003e\" \"\u003cCardholder_Name\u003e\" \"\u003cSecurity_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2108,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2113,
      "value": "#    PWO"
    }
  ],
  "line": 2114,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Input PWO Username \"\u003cPwoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2131,
      "value": "#    WPO"
    }
  ],
  "line": 2132,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2145,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2146,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2149,
      "value": "#    WO/WA"
    }
  ],
  "line": 2150,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Input WO-WA Username \"\u003cWOUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Select Bonafide Planter \"\u003cBonafide\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Input Site visit remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2161,
  "name": "I Upload Site Report \"\u003cUpload_test\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2162,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Input Section One data \"\u003cBreeder_Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2175,
      "value": "#    WPO"
    }
  ],
  "line": 2176,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2177,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2178,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2179,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Input External Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2194,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2195,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2196,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2197,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Click on Submit Application \"\u003cConfirmation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2211,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2213,
      "value": "#    WPO"
    }
  ],
  "line": 2214,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Input WPO Username \"\u003cWpoUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2220,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2221,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2222,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Input Remarks \"\u003cRemarks\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2230,
      "value": "#    IT Department"
    }
  ],
  "line": 2231,
  "name": "I am on SFWF Back Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Input IT Department Username \"\u003cITUsername\u003e\" and Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2236,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2237,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2238,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2239,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2240,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2241,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2243,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2244,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 2245,
  "name": "I Input Registered Maupass User\u0027s Username \"\u003cUsername\u003e\" and Password \"\u003cFPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 2246,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.examples({
  "line": 2256,
  "name": "",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;",
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
        "Cardholder_Name",
        "Breeder_Type"
      ],
      "line": 2257,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;1"
    },
    {
      "cells": [
        "Chrome",
        "Suraj_Jo",
        "Admin@123",
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
        "10",
        "10",
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
        "My name",
        "Cattle"
      ],
      "line": 2258,
      "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22400,
  "status": "passed"
});
formatter.scenario({
  "line": 2258,
  "name": "Payment online for Registration as Small Breeder",
  "description": "",
  "id": "user-story-13280-goc---back-office-process-for-registration;payment-online-for-registration-as-small-breeder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Main_feature"
    },
    {
      "line": 2029,
      "name": "@Smoke_online_Registration_as_Small_Breeder_GOC"
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
      "line": 2029,
      "name": "@Approval_by_BO_Payment_online_for_Registration_as_Small_Breeder"
    },
    {
      "line": 3,
      "name": "@GOC_Registrations"
    }
  ]
});
formatter.step({
  "line": 2032,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2033,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2034,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2035,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2036,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2037,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2038,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2039,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2040,
  "name": "I Click on New Button to apply for Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2041,
  "name": "I Verify display of Registration Type Page",
  "keyword": "And "
});
formatter.step({
  "line": 2042,
  "name": "I Click on Small Breeder Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2043,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2044,
  "name": "I Select an Applicant Title \"Mrs\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2045,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2046,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2047,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2048,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2049,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2050,
  "name": "I Verify for Photo upload success message",
  "keyword": "And "
});
formatter.step({
  "line": 2051,
  "name": "I Select No of years for Registration membership \"2\"",
  "matchedColumns": [
    19
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2052,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2053,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2054,
  "name": "I Verify Display of Particulars of Family Beneficiaries Page",
  "keyword": "And "
});
formatter.step({
  "line": 2055,
  "name": "I Click on Add Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2056,
  "name": "Verify Display of Particulars of Family Beneficiaries input table",
  "keyword": "And "
});
formatter.step({
  "line": 2057,
  "name": "I Select Family relationship for tea grower \"Spouse\"",
  "matchedColumns": [
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2058,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2059,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2060,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2061,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2062,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2063,
  "name": "I Click on Beneficiary of life Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2064,
  "name": "I Click on Beneficiary of Accident Insurance Scheme",
  "keyword": "And "
});
formatter.step({
  "line": 2065,
  "name": "I Save Particulars of Family and Beneficiaries",
  "keyword": "And "
});
formatter.step({
  "line": 2066,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2067,
  "name": "I Verify Display of Livestock Activity",
  "keyword": "And "
});
formatter.step({
  "line": 2068,
  "name": "I Input Number of Cow Female \"10\"",
  "matchedColumns": [
    32
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2069,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    34
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2070,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2071,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2072,
  "name": "I Upload Copy of National Identify Card (ID) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2073,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2074,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2075,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2076,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2077,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2078,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2079,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2080,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2081,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2082,
  "name": "I Click on Add Additional Document",
  "keyword": "And "
});
formatter.step({
  "line": 2083,
  "name": "I Input Additional Document Name \"Additional Document Test\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2084,
  "name": "I Verify Success message for adding Additional Document Name",
  "keyword": "And "
});
formatter.step({
  "line": 2085,
  "name": "I Upload Additional Document for small breeder \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2086,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2087,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2088,
  "name": "I Verify Declaration Page for REGISTRATION FOR SMALL BREEDERS",
  "keyword": "And "
});
formatter.step({
  "line": 2089,
  "name": "I click on I agree to the Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 2090,
  "name": "I Click on Photo checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 2091,
  "name": "I Select Bank \"ABC Banking\"",
  "matchedColumns": [
    40
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2095,
  "name": "I Verify Success message for application submitted for Small Breeders Registration",
  "keyword": "And "
});
formatter.step({
  "line": 2096,
  "name": "I Click on Cancel button not to proceed with another registration",
  "keyword": "And "
});
formatter.step({
  "line": 2097,
  "name": "I Verify Application Status \"Submitted\"",
  "matchedColumns": [
    44
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2099,
  "name": "I Copy Application Number",
  "keyword": "And "
});
formatter.step({
  "line": 2100,
  "name": "I Click on Shopping Cart for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2101,
  "name": "I Select Application for payment",
  "keyword": "And "
});
formatter.step({
  "line": 2102,
  "name": "I Click on Proceed to Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2103,
  "name": "I Click on Payment Icon",
  "keyword": "And "
});
formatter.step({
  "line": 2104,
  "name": "I Select Payment Method \"Credit\"",
  "matchedColumns": [
    46
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2105,
  "name": "I Click on Final Proceed to Online Payment",
  "keyword": "And "
});
formatter.step({
  "line": 2106,
  "name": "I Verify display of Payment Gateway",
  "keyword": "And "
});
formatter.step({
  "line": 2107,
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
  "line": 2108,
  "name": "I Click on Pay Now button",
  "keyword": "And "
});
formatter.step({
  "line": 2109,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2110,
  "name": "I Verify Payment Status is changed to Paid",
  "keyword": "And "
});
formatter.step({
  "line": 2111,
  "name": "I Sign Out as Front Registered User",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 2113,
      "value": "#    PWO"
    }
  ],
  "line": 2114,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2116,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2117,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2118,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2119,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2120,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2121,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2122,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2123,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2124,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2125,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2126,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2127,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2128,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2129,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2131,
      "value": "#    WPO"
    }
  ],
  "line": 2132,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2134,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2135,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2136,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2137,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2138,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2139,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2140,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2141,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2142,
  "name": "I Select WO",
  "keyword": "And "
});
formatter.step({
  "line": 2143,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2144,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2145,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2146,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2147,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2149,
      "value": "#    WO/WA"
    }
  ],
  "line": 2150,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2152,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2153,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2154,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2155,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2156,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2157,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2158,
  "name": "I Click on Site Report Tab",
  "keyword": "And "
});
formatter.step({
  "line": 2159,
  "name": "I Select Bonafide Planter \"Yes\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2161,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    38
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2162,
  "name": "I Verify for Document Upload Success Message",
  "keyword": "And "
});
formatter.step({
  "line": 2163,
  "name": "I Input Section One data \"Cattle\"",
  "matchedColumns": [
    52
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2164,
  "name": "I Click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 2165,
  "name": "I Verify Site Visit saved success message",
  "keyword": "And "
});
formatter.step({
  "line": 2166,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2167,
  "name": "I Select Option Assigned",
  "keyword": "And "
});
formatter.step({
  "line": 2168,
  "name": "I Select WPO",
  "keyword": "And "
});
formatter.step({
  "line": 2169,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2170,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2171,
  "name": "I Verify for success message for assigning",
  "keyword": "And "
});
formatter.step({
  "line": 2172,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2173,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2175,
      "value": "#    WPO"
    }
  ],
  "line": 2176,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2177,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2178,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2179,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2180,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2181,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2182,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2183,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2184,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2185,
  "name": "I Select Option Under Query",
  "keyword": "And "
});
formatter.step({
  "line": 2186,
  "name": "I Input External Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2187,
  "name": "I Click on Under Query Notification Button",
  "keyword": "And "
});
formatter.step({
  "line": 2188,
  "name": "I Verify Success Message for Under Query Mail Notification",
  "keyword": "And "
});
formatter.step({
  "line": 2189,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2190,
  "name": "I Verify for success message for workflow saved",
  "keyword": "And "
});
formatter.step({
  "line": 2191,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2192,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2194,
      "value": "#    Applicant after under query"
    }
  ],
  "line": 2195,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2196,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2197,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2198,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2199,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2200,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2201,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2202,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2203,
  "name": "I Search for Application Ref Number for re-submit",
  "keyword": "And "
});
formatter.step({
  "line": 2204,
  "name": "I Verify display of REGISTRATION FOR SMALL BREEDERS page",
  "keyword": "And "
});
formatter.step({
  "line": 2205,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2206,
  "name": "I Verify Upload Required Documents Page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 2207,
  "name": "I Click on Save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 2208,
  "name": "I Verify Terms and Conditions Page",
  "keyword": "And "
});
formatter.step({
  "line": 2209,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2210,
  "name": "I Verify Success message for application submitted",
  "keyword": "And "
});
formatter.step({
  "line": 2211,
  "name": "I Sign Out as Front Registered User",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2213,
      "value": "#    WPO"
    }
  ],
  "line": 2214,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2216,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2217,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2218,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2219,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2220,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2221,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2222,
  "name": "I Click on Action Button",
  "keyword": "And "
});
formatter.step({
  "line": 2223,
  "name": "I Select Option Approved to approve the registration application",
  "keyword": "And "
});
formatter.step({
  "line": 2224,
  "name": "I Input Remarks \"This is a test\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2225,
  "name": "I Click on Save Actions",
  "keyword": "And "
});
formatter.step({
  "line": 2226,
  "name": "I Verify for success message for approval",
  "keyword": "And "
});
formatter.step({
  "line": 2227,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2228,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2230,
      "value": "#    IT Department"
    }
  ],
  "line": 2231,
  "name": "I am on SFWF Back Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    3,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2233,
  "name": "I Click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 2234,
  "name": "I Verify Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2235,
  "name": "I Click on All Applications",
  "keyword": "And "
});
formatter.step({
  "line": 2236,
  "name": "I Verify display of list of registrations page",
  "keyword": "And "
});
formatter.step({
  "line": 2237,
  "name": "I Search for Application Ref Number as a Back Office User",
  "keyword": "And "
});
formatter.step({
  "line": 2238,
  "name": "I Click to view Application",
  "keyword": "And "
});
formatter.step({
  "line": 2239,
  "name": "I Click on Print Card",
  "keyword": "And "
});
formatter.step({
  "line": 2240,
  "name": "I Sign Out",
  "keyword": "And "
});
formatter.step({
  "line": 2241,
  "name": "I Verify Successful Sign Out",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 2243,
      "value": "#    Applicant verify status - Card Printed"
    }
  ],
  "line": 2244,
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2245,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 2246,
  "name": "I Click on Sign In button in Maupass",
  "keyword": "And "
});
formatter.step({
  "line": 2247,
  "name": "I Verify Applicant\u0027s Successful Login",
  "keyword": "And "
});
formatter.step({
  "line": 2248,
  "name": "I Click on Register as Farmer",
  "keyword": "And "
});
formatter.step({
  "line": 2249,
  "name": "I Verify that User is directed to My Application Page",
  "keyword": "And "
});
formatter.step({
  "line": 2250,
  "name": "I Verify display of Farmers Card link",
  "keyword": "And "
});
formatter.step({
  "line": 2251,
  "name": "I Verify Programmes link",
  "keyword": "And "
});
formatter.step({
  "line": 2252,
  "name": "I Search for Application Ref Number for to check Status Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2253,
  "name": "I Verify Application Status to be Card Printed",
  "keyword": "And "
});
formatter.step({
  "line": 2254,
  "name": "I Sign Out as Front Registered User",
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
  "duration": 5366407100,
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
  "duration": 8130952100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 49684300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 1485096200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 435497700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 21831700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13508800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 11556400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 201155800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 226993600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 2628046800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 53120200,
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
  "duration": 2635355500,
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
  "duration": 5782988800,
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
  "duration": 3634503500,
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
  "duration": 109091200,
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
  "duration": 56384800,
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
  "duration": 1174284000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1034978700,
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
  "duration": 4124121300,
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
  "duration": 1612431400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9169382300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 80220300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3087791600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3071221700,
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
  "duration": 2630436400,
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
  "duration": 52155200,
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
  "duration": 60498600,
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
  "duration": 1613111800,
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
  "duration": 5860121300,
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
  "duration": 62625400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 55977300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 53532500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 50024700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9158896600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 80109300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 30
    }
  ],
  "location": "Steps.iInputNumberOfCowFemale(String)"
});
formatter.result({
  "duration": 1126934600,
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
  "duration": 1632050100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9154717900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 82256700,
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
  "duration": 1123125800,
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
  "duration": 1120077400,
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
  "duration": 1108637200,
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
  "duration": 1092145900,
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
  "duration": 578442300,
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
  "duration": 1101465500,
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
  "duration": 1109243800,
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
  "duration": 586090000,
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
  "duration": 584461600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 50131400,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d129.0.6668.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d129.0.6668.100 (cf58cba358d31ce285c1970a79a9411d0fb381a5-refs/branch-heads/6668@{#1704}), userDataDir\u003dC:\\Users\\SURAJ~1.JOG\\AppData\\Local\\Temp\\scoped_dir30788_1085619848}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65497}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d129.0.6668.100, fedcm:accounts\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 18408f8142fa26daac63104d4cba9888\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefinition.Steps.iVerifyForDocumentUploadSuccessMessage(Steps.java:733)\r\n\tat ✽.And I Verify for Document Upload Success Message(features/US13280_GOC.feature:2081)\r\n",
  "status": "failed"
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
  "location": "Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration()"
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
      "val": "Credit",
      "offset": 25
    }
  ],
  "location": "Steps.iSelectPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToOnlinePayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfPaymentGateway()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnPayNowButton()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "arguments": [
    {
      "val": "Cattle",
      "offset": 26
    }
  ],
  "location": "Steps.iInputSectionOneData(String)"
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
  "location": "Steps.iSelectOptionAssigned()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionUnderQuery()"
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
  "location": "Steps.iClickOnUnderQueryNotificationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryMailNotification()"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
  "location": "Steps.iSelectOptionApprovedToApproveTheRegistrationApplication()"
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
      "offset": 40
    }
  ],
  "location": "Steps.iAmOnSFWFBackOfficeHomePageGOC(String)"
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
      "offset": 41
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
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
  "duration": 1043299200,
  "status": "passed"
});
formatter.after({
  "duration": 122700,
  "status": "passed"
});
});