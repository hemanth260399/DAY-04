//1.Create a own resume data in JSON format 
var resume={"Name":"S.HEMANTHRAJA",
"DOB":"26-03-1999",
"EMAIL ID":"hemanthraja26@gmail.com",
"AGE":25,
"Address":"15/523 , JEEVA NAGAR , KURUPPANAICKEN PALAYAM PO BHAVANI TK , ERODE DIST -638301",
"Contact No":9751126440,
"Marital Status":"Single",
"College Education":"Diploma in electronics and communication engineering - 2014 to 2017 with 90%",
"College Institution":"Sakthi polytechnic college",
"School Education":"SSLC-2014 with 88%",
"Schooling":"kamalavijaya vidhayalaya matriculation school",
"Work Experience-1":"FCA Assistant  - FINANCE & SALES - March-2018 to June-2019",
"Work Experience-2":"SCM Assistant  - LOGISTICS  OPERATIONS - FEB-2021 to Till date",
"CAREER OBJECTIVE":"Seeking a position in industry that will utilize my education & experience and contribute as a team player in the overall success of the company",
"Area of Expertise":"Very Good functional & practical experience in large size Warehouse, Inventory control, Material Planning, Distribution & Logistics operations,Finance operations",
"SOFTWARE SKILL":"Functional knowledge in SAP R/3-MM Module, PEOPLESOFT HRM,Excellent knowledge in Windows, M S Office (Word, Excel, PP etc.).",
"PROFESSIONAL SUMMARY":"Over 2+ years of experience in Materials Management, ecommerce, Warehouse Management and Logistics operations,Worked in SAP R/3 environment for RELIANCE JIO, related to SAP MM",
"System and processes":"To Ensure proof of delivery (POD) and Good Receipt (GRN) is done immediately after receipt of material from the DC ( Telecom materials),Monitoring KPIs and SLA adherence as per company standard."
}
//Iteration using for loop
var resumekey=Object.keys(resume)
for(i=0;i<resumekey.length;i++)
{
    console.log(resumekey[i]+"  -  "+resume[resumekey[i]])
}

//Iteration using for in Loop
for(var i in resume)
{
    console.log(i+"  -  "+resume[i])
}

//Iteration using for of Loop
var resumekey=Object.keys(resume)
for(var i of resumekey)
{
    console.log(i+"  -  "+resume[i])
}

//iteration using foreach Loop
var resumekey=Object.keys(resume)
resumekey.forEach(i=>{
    console.log(i+"  -  "+resume[i])
})