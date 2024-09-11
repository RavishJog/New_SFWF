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
  "name": "I Select Duration Year for Registration membership \"\u003cYear_dur\u003e\"",
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
  "name": "I Verify for Document Upload Success Message",
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
        "Counter"
      ],
      "line": 228,
      "id": "user-story-13280---back-office-process-for-registration;approval-for-payment-at-counter-for-registration-as-agro-processing-enterprise-application-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 166200,
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
      "name": "@US13280"
    },
    {
      "line": 7,
      "name": "@Approval_by_BO_Payment_at_counter_for_Agro-Processing-Enterprise"
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
  "name": "I Select Duration Year for Registration membership \"1\"",
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
  "name": "I Input Finance Username \"FINANCE\" and Password \"Admin@123\"",
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
  "name": "I Verify for Document Upload Success Message",
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
  "duration": 4907118000,
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
  "duration": 383435800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3816829400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 77760900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 703664900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 33167600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 25361300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 30790100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 217057600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 293408200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAgroProcessingEnterprise()"
});
formatter.result({
  "duration": 2750481800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 54244100,
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
  "duration": 70118700,
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
  "duration": 76739700,
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
  "duration": 71668400,
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
  "duration": 62718100,
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
  "duration": 49772600,
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
  "duration": 104008500,
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
  "duration": 80257500,
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
  "duration": 2144136800,
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
  "duration": 2139111800,
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
  "duration": 63718800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6175030500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 80408000,
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
  "duration": 1647556500,
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
  "duration": 1658332600,
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
  "duration": 2703695500,
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
  "duration": 2185807600,
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
  "duration": 2175579700,
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
  "duration": 3227424300,
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
  "duration": 1634454000,
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
  "duration": 1144155900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 15411200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3111003600,
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
  "duration": 1628545000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 25559700,
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
  "duration": 1110506400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 13924500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6153337200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 69404100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 77137700,
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
  "duration": 4231848000,
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
  "duration": 1115992200,
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
  "duration": 1113567500,
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
  "duration": 3575321500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10269673800,
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
  "duration": 39313700,
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
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iCopyApplicationNumber()"
});
formatter.result({
  "duration": 46133600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnShoppingCartForPayment()"
});
formatter.result({
  "duration": 2627243400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IselectApplicationForPayment()"
});
formatter.result({
  "duration": 2215138300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnProceedToPayment()"
});
formatter.result({
  "duration": 601283700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPaymentIcon()"
});
formatter.result({
  "duration": 613958400,
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
  "duration": 5149574600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnFinalProceedToPayment()"
});
formatter.result({
  "duration": 2125211100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyMessageToProceedToPostOfficeForPayment()"
});
formatter.result({
  "duration": 8071578500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 12033721800,
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
  "duration": 10240838300,
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
  "duration": 240406900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 892827300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 87907700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnManageCashier()"
});
formatter.result({
  "duration": 73064200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyListOfApplicationsPage()"
});
formatter.result({
  "duration": 1554207500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnConfirmProcessingFees()"
});
formatter.result({
  "duration": 1560551200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfProcessingDetailsFrame()"
});
formatter.result({
  "duration": 58088100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSavePayment()"
});
formatter.result({
  "duration": 269175555200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingPayment()"
});
formatter.result({
  "duration": 52443200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4343516500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1234709000,
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
  "duration": 6886633700,
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
  "duration": 217921600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 923492000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 76308400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 72588100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1541045500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2085223900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2888252300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 2333680600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectPWOAssigned()"
});
formatter.result({
  "duration": 4296715800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1620691800,
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
  "duration": 4605161900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 57017200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 2652140700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4916334000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1052266600,
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
  "duration": 5003079200,
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
  "duration": 283369200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1091001200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 69907500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 65422300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1549216800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2074306100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2674344900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 2325450200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1665191300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWO()"
});
formatter.result({
  "duration": 1690846700,
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
  "duration": 4609301500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 55115000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 2687543300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4702706200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 996533300,
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
  "duration": 5348316600,
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
  "duration": 231323800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 927160600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 75153800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 85782100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1544894000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2078025300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 2671060600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSiteReportTab()"
});
formatter.result({
  "duration": 80953900,
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
  "duration": 82236300,
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
  "duration": 128474700,
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
  "duration": 3810806200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 16198200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 4318411600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySiteVisitSavedSuccessMessage()"
});
formatter.result({
  "duration": 16424500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 2257184200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectAssigned()"
});
formatter.result({
  "duration": 1626248700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectWPO()"
});
formatter.result({
  "duration": 1675616100,
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
  "duration": 4608114300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 56435400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForAssigning()"
});
formatter.result({
  "duration": 2686503800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 5043599000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 995720800,
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
  "duration": 6021082400,
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
  "duration": 193773100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1274352200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 67107600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 66751300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1550134000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2074801300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 3190579500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 2836888000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectUnderQuery()"
});
formatter.result({
  "duration": 4254292500,
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
  "duration": 71078300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnUnderQueryNotification()"
});
formatter.result({
  "duration": 2184564200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForUnderQueryNotification()"
});
formatter.result({
  "duration": 18078000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 50200300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForWorkflowSaved()"
});
formatter.result({
  "duration": 2686316400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 5139828700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1024273000,
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
  "duration": 3076663100,
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
  "duration": 262367800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 10408044200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 55382300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 683353900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 29630500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 16358000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 14218100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForReSubmit()"
});
formatter.result({
  "duration": 2188906600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORAGROPROCESSINGENTERPRISEPage()"
});
formatter.result({
  "duration": 1290524300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6181061300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 80875100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 6150547500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyTermsAndConditionsPage()"
});
formatter.result({
  "duration": 67583700,
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
  "duration": 5811406900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmitted()"
});
formatter.result({
  "duration": 10062544300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 10657736800,
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
  "duration": 5071787100,
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
  "duration": 204759100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 787606000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 78496500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 71911000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1543265900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2078276600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 3204361800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnActionButton()"
});
formatter.result({
  "duration": 2334441200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSelectApprovedToApproveTheRegistrationApplication()"
});
formatter.result({
  "duration": 1641875900,
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
  "duration": 4619543400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveActions()"
});
formatter.result({
  "duration": 54671700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForSuccessMessageForApproval()"
});
formatter.result({
  "duration": 2142209200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4876318100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1013154100,
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
  "duration": 5028665700,
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
  "duration": 267509400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1113074700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IVerifySuccessfulLogin()"
});
formatter.result({
  "duration": 86862000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAllApplications()"
});
formatter.result({
  "duration": 68391900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfListOfRegistrationsPage()"
});
formatter.result({
  "duration": 1548946500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberAsABackOfficeUser()"
});
formatter.result({
  "duration": 2071947400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickToViewApplication()"
});
formatter.result({
  "duration": 3311914000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPrintCard()"
});
formatter.result({
  "duration": 4124661200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOut()"
});
formatter.result({
  "duration": 4870010700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessfulSignOut()"
});
formatter.result({
  "duration": 1032061700,
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
  "duration": 5012839000,
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
  "duration": 259713900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 12790536800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 33756600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 1270173400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 18983000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 13840000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 15905300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSearchForApplicationRefNumberForToCheckStatusCardPrinted()"
});
formatter.result({
  "duration": 2089225000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicationStatusToBeCardPrinted()"
});
formatter.result({
  "duration": 37493400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSignOutAsFrontRegisteredUser()"
});
formatter.result({
  "duration": 14012671600,
  "status": "passed"
});
formatter.after({
  "duration": 153500,
  "status": "passed"
});
formatter.after({
  "duration": 62366200,
  "status": "passed"
});
});