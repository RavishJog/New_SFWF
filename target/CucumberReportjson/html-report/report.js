$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/US13280_GOC_Local_run.feature");
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
    },
    {
      "line": 2029,
      "name": "@Local"
    }
  ]
});
formatter.step({
  "line": 2032,
  "name": "I am on SFWF Front Office Home Page GOC \"\u003cBrowser\u003e\" \"\u003cRun\u003e\"",
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
        "Run",
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
        "Local",
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
  "duration": 146901,
  "status": "passed"
});
formatter.before({
  "duration": 30900,
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
      "line": 2029,
      "name": "@Local"
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
  "name": "I am on SFWF Front Office Home Page GOC \"Chrome\" \"Local\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2033,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
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
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2045,
  "name": "I Select Applicant District \"Port Louis\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2046,
  "name": "I Select Applicant Level of Education \"Tertiary\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2047,
  "name": "I Select Agricultural Activity \"Full Time\"",
  "matchedColumns": [
    17
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2048,
  "name": "I Input Other Occupation \"Manager\"",
  "matchedColumns": [
    18
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2049,
  "name": "I Upload Photograph \"src\\test\\resources\\Photo_upload.jpg\"",
  "matchedColumns": [
    19
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
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2052,
  "name": "I Select Marital Status \"Married\"",
  "matchedColumns": [
    21
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
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2058,
  "name": "I Input Family Surname \"Keen\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2059,
  "name": "I Input Family Other Names \"Dafne\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2060,
  "name": "I Select Family Gender \"Female\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2061,
  "name": "I Input Family Date of Birth \"1Jan94\"",
  "matchedColumns": [
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2062,
  "name": "I Input Family Occupation \"Actress\"",
  "matchedColumns": [
    27
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
    33
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2069,
  "name": "I Select Reason \"Meat\"",
  "matchedColumns": [
    35
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
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2073,
  "name": "I Upload Existing SFWF Reg No (if any) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2074,
  "name": "I Upload copy of Title Deed \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2075,
  "name": "I Upload Copy of registered /Non-Registered Lease Paper \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2076,
  "name": "I Upload Copy of title deed of land owner including cooperatives (for non-registered lease paper) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2077,
  "name": "I Upload Preliminary environmental report, Building and land use Permit and health clearance \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2078,
  "name": "I Upload Location plan of farm including size \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2079,
  "name": "I Upload List of Tags Nos. (except poultry and pig) \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2080,
  "name": "I Upload Animal Card DVs where applicable \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
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
    40
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
    39
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
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2092,
  "name": "I Input Bank Branch for Agro-Processing Enterprise \"Port Louis\"",
  "matchedColumns": [
    42
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2093,
  "name": "I Input Personal Bank Account Number Agro-Processing Enterprise \"0001252563636\"",
  "matchedColumns": [
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2094,
  "name": "I Click on Submit Application \"Yes\"",
  "matchedColumns": [
    44
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
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2098,
  "name": "I Verify Payment Status \"Pending\"",
  "matchedColumns": [
    46
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
    47
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
    52
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2115,
  "name": "I Input PWO Username \"PWO\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    6
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
    10
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2133,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    7
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
    10
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2151,
  "name": "I Input WO-WA Username \"WO\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    8
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
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2160,
  "name": "I Input Site visit remarks \"This is a test\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2161,
  "name": "I Upload Site Report \"src\\test\\resources\\Upload_Test1.pdf\"",
  "matchedColumns": [
    39
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
    53
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
    10
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2177,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    7
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
    10
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
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2196,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
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
    44
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2215,
  "name": "I Input WPO Username \"WPO\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    7
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
    10
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
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 2232,
  "name": "I Input IT Department Username \"IT_DEPT\" and Password \"Admin@123\"",
  "matchedColumns": [
    4,
    9
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
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 2245,
  "name": "I Input Registered Maupass User\u0027s Username \"Suraj_Jo\" and Password \"Admin@123\"",
  "matchedColumns": [
    2,
    3
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
    },
    {
      "val": "Local",
      "offset": 50
    }
  ],
  "location": "Steps.iAmOnSFWFFrontOfficeHomePageGOC(String,String)"
});
formatter.result({
  "duration": 9904919200,
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
  "duration": 8060367399,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSignInButtonInMaupass()"
});
formatter.result({
  "duration": 61114000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyApplicantSSuccessfulLogin()"
});
formatter.result({
  "duration": 2212634100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnRegisterAsFarmer()"
});
formatter.result({
  "duration": 356431401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyThatUserIsDirectedToMyApplicationPage()"
});
formatter.result({
  "duration": 19565100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfFarmersCardLink()"
});
formatter.result({
  "duration": 16860100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyProgrammesLink()"
});
formatter.result({
  "duration": 12957701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnNewButtonToApplyForRegistration()"
});
formatter.result({
  "duration": 312757300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfRegistrationTypePage()"
});
formatter.result({
  "duration": 11579799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSmallBreederIcon()"
});
formatter.result({
  "duration": 2437125500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfREGISTRATIONFORSMALLBREEDERSPage()"
});
formatter.result({
  "duration": 54644599,
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
  "duration": 2646493700,
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
  "duration": 5815827699,
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
  "duration": 3704660400,
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
  "duration": 128332200,
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
  "duration": 86667700,
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
  "duration": 1191656000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForPhotoUploadSuccessMessage()"
});
formatter.result({
  "duration": 1039535500,
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
  "duration": 4175440899,
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
  "duration": 1660332200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9189524500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfParticularsOfFamilyBeneficiariesPage()"
});
formatter.result({
  "duration": 93893601,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 3110982500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyDisplayOfParticularsOfFamilyBeneficiariesInputTable()"
});
formatter.result({
  "duration": 3082455700,
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
  "duration": 2676645600,
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
  "duration": 68884600,
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
  "duration": 70762900,
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
  "duration": 1663717400,
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
  "duration": 5887250700,
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
  "duration": 90263500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfLifeInsuranceScheme()"
});
formatter.result({
  "duration": 67592500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnBeneficiaryOfAccidentInsuranceScheme()"
});
formatter.result({
  "duration": 45730300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iSaveParticularsOfFamilyAndBeneficiaries()"
});
formatter.result({
  "duration": 73553100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9184374701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDisplayOfLivestockActivity()"
});
formatter.result({
  "duration": 135784099,
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
  "duration": 1138618701,
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
  "duration": 1641284200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9186768300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyUploadRequiredDocumentsPageIsDisplayed()"
});
formatter.result({
  "duration": 115148800,
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
  "duration": 1677777400,
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
  "duration": 1104756400,
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
  "duration": 1662082600,
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
  "duration": 1105346699,
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
  "duration": 1167854000,
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
  "duration": 1193059301,
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
  "duration": 1129963099,
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
  "duration": 1139242801,
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
  "duration": 1151357100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5036080000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnAddAdditionalDocument()"
});
formatter.result({
  "duration": 3135701300,
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
  "duration": 1638707900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForAddingAdditionalDocumentName()"
});
formatter.result({
  "duration": 56040001,
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
  "duration": 1137910799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyForDocumentUploadSuccessMessage()"
});
formatter.result({
  "duration": 5011509800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnSaveAndContinue()"
});
formatter.result({
  "duration": 9188099701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifyDeclarationPageForREGISTRATIONFORSMALLBREEDERS()"
});
formatter.result({
  "duration": 2161896800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnIAgreeToTheTermsAndConditions()"
});
formatter.result({
  "duration": 1609606000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnPhotoCheckbox()"
});
formatter.result({
  "duration": 71161301,
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
  "duration": 4768030700,
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
  "duration": 1125343400,
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
  "duration": 1145620699,
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
  "duration": 3726130700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iVerifySuccessMessageForApplicationSubmittedForSmallBreedersRegistration()"
});
formatter.result({
  "duration": 10072104600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration()"
});
formatter.result({
  "duration": 12243781800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[contains(.,\u0027Cancel\u0027)] (tried for 10 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat stepdefinition.Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration(Steps.java:1913)\r\n\tat ✽.And I Click on Cancel button not to proceed with another registration(features/US13280_GOC_Local_run.feature:2096)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //span[contains(.,\u0027Cancel\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027SIL-LTDELLI7-G6\u0027, ip: \u0027192.168.8.46\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat stepdefinition.Steps.iClickOnCancelButtonNotToProceedWithAnotherRegistration(Steps.java:1913)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:50)\r\n\tat cucumbertest.TestRunner_web.runCukes(TestRunner_web.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:77)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:110)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
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
  "duration": 1844084300,
  "status": "passed"
});
formatter.after({
  "duration": 235101,
  "status": "passed"
});
});