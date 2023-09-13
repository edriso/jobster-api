require("dotenv").config();

const data = [
  {
    company: "Rowe LLC",
    position: "Mechanical Systems Engineer",
    status: "interview",
    jobType: "remote",
    jobLocation: "Cicapar",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-05-17T13:17:56Z",
  },
  {
    company: "Schimmel Inc",
    position: "Electrical Engineer",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Xiluodu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-22T04:47:48Z",
  },
  {
    company: "Steuber and Sons",
    position: "Clinical Specialist",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Kalnibolotskaya",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-08T19:23:49Z",
  },
  {
    company: "Daniel-Reichel",
    position: "Community Outreach Specialist",
    status: "interview",
    jobType: "remote",
    jobLocation: "Abadou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-02-24T19:42:58Z",
  },
  {
    company: "Luettgen Inc",
    position: "Accountant IV",
    status: "declined",
    jobType: "remote",
    jobLocation: "Lipinki Łużyckie",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-04-21T14:48:40Z",
  },
  {
    company: "Lind-Feil",
    position: "Marketing Assistant",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Shuanglu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-12-27T03:09:59Z",
  },
  {
    company: "Jacobson Group",
    position: "Assistant Media Planner",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Táriba",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-10-21T19:24:16Z",
  },
  {
    company: "Howe-Yost",
    position: "Product Engineer",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Nankou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-01-08T01:03:28Z",
  },
  {
    company: "Erdman LLC",
    position: "Account Coordinator",
    status: "interview",
    jobType: "remote",
    jobLocation: "Marsa Alam",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-04-12T22:00:37Z",
  },
  {
    company: "Gerlach-Buckridge",
    position: "Registered Nurse",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Mbandjok",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-03-02T01:43:09Z",
  },
  {
    company: "Bradtke, Runolfsdottir and Macejkovic",
    position: "Office Assistant II",
    status: "interview",
    jobType: "part-time",
    jobLocation: "Glad",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-24T11:39:28Z",
  },
  {
    company: "Lebsack-Schaefer",
    position: "Speech Pathologist",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Oliveiras",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-08-02T06:49:29Z",
  },
  {
    company: "Murphy, Steuber and Glover",
    position: "Professor",
    status: "interview",
    jobType: "full-time",
    jobLocation: "Sepulu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-04T12:06:25Z",
  },
  {
    company: "Cassin-Balistreri",
    position: "Web Developer IV",
    status: "interview",
    jobType: "full-time",
    jobLocation: "Överkalix",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-13T12:20:19Z",
  },
  {
    company: "Stehr LLC",
    position: "Actuary",
    status: "interview",
    jobType: "part-time",
    jobLocation: "Nizhnekamsk",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-15T04:28:59Z",
  },
  {
    company: "Crist and Sons",
    position: "Operator",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Waihibar",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-04-12T02:21:10Z",
  },
  {
    company: "Hackett-Rau",
    position: "Research Nurse",
    status: "interview",
    jobType: "remote",
    jobLocation: "Krajan Satu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-20T15:23:11Z",
  },
  {
    company: "Mohr-Lindgren",
    position: "Administrative Assistant III",
    status: "declined",
    jobType: "internship",
    jobLocation: "Bolondrón",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-02T07:36:37Z",
  },
  {
    company: "Nikolaus-Jenkins",
    position: "Nuclear Power Engineer",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Cimadang",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-05-18T05:40:31Z",
  },
  {
    company: "Hane-Kling",
    position: "Senior Cost Accountant",
    status: "pending",
    jobType: "internship",
    jobLocation: "Bailadores",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-02-13T20:04:09Z",
  },
  {
    company: "Murray-Hettinger",
    position: "Graphic Designer",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Hezhi",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-11-24T17:44:51Z",
  },
  {
    company: "Bauch, Hansen and Bechtelar",
    position: "Nurse Practicioner",
    status: "interview",
    jobType: "internship",
    jobLocation: "Anambongan",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-03-19T19:11:40Z",
  },
  {
    company: "Mueller Group",
    position: "Administrative Officer",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Gakem",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-12-28T08:30:42Z",
  },
  {
    company: "Schaefer, Turner and Stracke",
    position: "Paralegal",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Vyksa",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-03-12T16:57:07Z",
  },
  {
    company: "Zboncak and Sons",
    position: "Assistant Manager",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Mbomba",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-10-11T18:39:00Z",
  },
  {
    company: "Weber LLC",
    position: "Sales Associate",
    status: "interview",
    jobType: "full-time",
    jobLocation: "Okunoya",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-01-24T18:54:18Z",
  },
  {
    company: "Heaney, Mills and Hand",
    position: "Internal Auditor",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Guankou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-11-08T19:30:28Z",
  },
  {
    company: "Fritsch LLC",
    position: "Information Systems Manager",
    status: "pending",
    jobType: "internship",
    jobLocation: "Le Mans",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-08-06T15:46:39Z",
  },
  {
    company: "Glover-Hane",
    position: "GIS Technical Architect",
    status: "interview",
    jobType: "internship",
    jobLocation: "Goya",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-17T13:31:47Z",
  },
  {
    company: "Effertz-Hoeger",
    position: "Automation Specialist I",
    status: "interview",
    jobType: "internship",
    jobLocation: "Bayaguana",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-03-13T17:52:44Z",
  },
  {
    company: "Hauck Inc",
    position: "Professor",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Huiwen",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-07-30T19:53:13Z",
  },
  {
    company: "Watsica-Hamill",
    position: "Librarian",
    status: "pending",
    jobType: "internship",
    jobLocation: "Bronx",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-07-09T02:02:12Z",
  },
  {
    company: "Mann-Thompson",
    position: "Occupational Therapist",
    status: "interview",
    jobType: "part-time",
    jobLocation: "Kiambu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-08-09T07:32:54Z",
  },
  {
    company: "Dietrich and Sons",
    position: "Payment Adjustment Coordinator",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Zamoskvorech’ye",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-26T10:46:58Z",
  },
  {
    company: "Corkery-Franecki",
    position: "Structural Analysis Engineer",
    status: "interview",
    jobType: "full-time",
    jobLocation: "Den Chai",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-15T10:42:19Z",
  },
  {
    company: "Mann and Sons",
    position: "VP Accounting",
    status: "pending",
    jobType: "full-time",
    jobLocation: "Hai’an",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-11-27T07:24:34Z",
  },
  {
    company: "Hermiston Group",
    position: "VP Quality Control",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Nguken",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-08T21:36:34Z",
  },
  {
    company: "Kassulke, Zemlak and Jacobson",
    position: "Analog Circuit Design manager",
    status: "pending",
    jobType: "internship",
    jobLocation: "Falun",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-09T12:04:01Z",
  },
  {
    company: "Haag, Kertzmann and Ortiz",
    position: "Pharmacist",
    status: "declined",
    jobType: "remote",
    jobLocation: "Daqiao",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-01-04T18:40:19Z",
  },
  {
    company: "Treutel-Konopelski",
    position: "Director of Sales",
    status: "interview",
    jobType: "internship",
    jobLocation: "Futaleufú",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-05-24T18:12:18Z",
  },
  {
    company: "Connelly, Glover and Mann",
    position: "Health Coach III",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Natu",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-03T10:55:35Z",
  },
  {
    company: "Mosciski-Gislason",
    position: "Senior Developer",
    status: "interview",
    jobType: "full-time",
    jobLocation: "Sindi",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-01-26T16:18:44Z",
  },
  {
    company: "Borer, Heaney and Kris",
    position: "Media Manager IV",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Marolambo",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-22T01:37:21Z",
  },
  {
    company: "Haag LLC",
    position: "Internal Auditor",
    status: "pending",
    jobType: "remote",
    jobLocation: "Tianmen",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-06T22:04:51Z",
  },
  {
    company: "Mayert Group",
    position: "Chief Design Engineer",
    status: "declined",
    jobType: "internship",
    jobLocation: "Banjar Delodrurung",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-11-22T10:48:48Z",
  },
  {
    company: "Rohan-Kovacek",
    position: "Software Engineer I",
    status: "declined",
    jobType: "internship",
    jobLocation: "Ambohitseheno",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-10-16T06:29:35Z",
  },
  {
    company: "Windler and Sons",
    position: "Senior Sales Associate",
    status: "pending",
    jobType: "remote",
    jobLocation: "Cirumput",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-17T11:38:49Z",
  },
  {
    company: "Turcotte, Vandervort and Windler",
    position: "Assistant Manager",
    status: "interview",
    jobType: "internship",
    jobLocation: "Krzczonów",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-12T19:29:58Z",
  },
  {
    company: "Stiedemann-Crona",
    position: "VP Quality Control",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Las Vegas",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-05-30T10:50:10Z",
  },
  {
    company: "Swaniawski Group",
    position: "Social Worker",
    status: "declined",
    jobType: "part-time",
    jobLocation: "Lewolere",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-08-06T17:42:10Z",
  },
  {
    company: "Conroy, Luettgen and Leannon",
    position: "Payment Adjustment Coordinator",
    status: "declined",
    jobType: "internship",
    jobLocation: "Tân Trụ",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-20T10:19:51Z",
  },
  {
    company: "Ferry-Veum",
    position: "Media Manager I",
    status: "interview",
    jobType: "internship",
    jobLocation: "Benešov nad Černou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-04-14T21:03:47Z",
  },
  {
    company: "Kautzer and Sons",
    position: "Systems Administrator III",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Santa Gertrudes",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-10-08T16:50:49Z",
  },
  {
    company: "Corwin-McClure",
    position: "Account Representative I",
    status: "declined",
    jobType: "full-time",
    jobLocation: "Chugay",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-09-24T03:25:22Z",
  },
  {
    company: "Dooley, Leffler and Zieme",
    position: "Sales Representative",
    status: "interview",
    jobType: "remote",
    jobLocation: "Jingxin",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-03T01:42:39Z",
  },
  {
    company: "Bailey-Hirthe",
    position: "Help Desk Operator",
    status: "declined",
    jobType: "remote",
    jobLocation: "Avellaneda",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-09-23T14:16:16Z",
  },
  {
    company: "Ortiz Inc",
    position: "Food Chemist",
    status: "interview",
    jobType: "part-time",
    jobLocation: "Huaicheng",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-15T09:27:55Z",
  },
  {
    company: "Hermiston Inc",
    position: "VP Quality Control",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Koksovyy",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-11-23T09:53:33Z",
  },
  {
    company: "Jacobi-Reinger",
    position: "Legal Assistant",
    status: "pending",
    jobType: "remote",
    jobLocation: "Höganäs",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-08-04T10:21:32Z",
  },
  {
    company: "Hoppe, Hoeger and Runolfsson",
    position: "Design Engineer",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Yongledian",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-10-30T07:18:57Z",
  },
  {
    company: "Jast-Heller",
    position: "Sales Associate",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Xilin Hot",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-08T21:08:22Z",
  },
  {
    company: "Turner LLC",
    position: "GIS Technical Architect",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Peuara",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-09-28T12:09:20Z",
  },
  {
    company: "Emmerich-Krajcik",
    position: "Senior Financial Analyst",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Heshan",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-11-24T04:23:04Z",
  },
  {
    company: "Mills, Daniel and Cremin",
    position: "Executive Secretary",
    status: "interview",
    jobType: "remote",
    jobLocation: "Nianba",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-03-24T09:56:48Z",
  },
  {
    company: "Mante, Bruen and Gorczany",
    position: "Database Administrator II",
    status: "declined",
    jobType: "remote",
    jobLocation: "Cela",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-01-10T09:09:06Z",
  },
  {
    company: "Orn Group",
    position: "Legal Assistant",
    status: "interview",
    jobType: "internship",
    jobLocation: "Bozhou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-10-01T17:53:03Z",
  },
  {
    company: "Beahan, Grant and Robel",
    position: "Teacher",
    status: "pending",
    jobType: "remote",
    jobLocation: "Yangshan",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-03-23T09:02:47Z",
  },
  {
    company: "Shields-Bauch",
    position: "Professor",
    status: "pending",
    jobType: "internship",
    jobLocation: "Bantilan",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-10-22T10:08:28Z",
  },
  {
    company: "Romaguera LLC",
    position: "Desktop Support Technician",
    status: "interview",
    jobType: "internship",
    jobLocation: "Pukekohe East",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-05-27T05:05:59Z",
  },
  {
    company: "Jakubowski-Upton",
    position: "Senior Editor",
    status: "interview",
    jobType: "part-time",
    jobLocation: "Hà Đông",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-06-30T20:30:32Z",
  },
  {
    company: "Williamson LLC",
    position: "Accounting Assistant I",
    status: "declined",
    jobType: "remote",
    jobLocation: "Rego de Água",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2021-11-20T07:38:54Z",
  },
  {
    company: "Frami LLC",
    position: "Recruiter",
    status: "pending",
    jobType: "internship",
    jobLocation: "Cerquilho",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-02-13T01:11:32Z",
  },
  {
    company: "Bruen, Lakin and Stokes",
    position: "Media Manager III",
    status: "interview",
    jobType: "internship",
    jobLocation: "Şanā’",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-04-16T08:34:00Z",
  },
  {
    company: "Lueilwitz-Hessel",
    position: "Senior Cost Accountant",
    status: "interview",
    jobType: "internship",
    jobLocation: "Hejia",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2023-07-09T19:02:23Z",
  },
  {
    company: "Wunsch and Sons",
    position: "Administrative Assistant III",
    status: "pending",
    jobType: "part-time",
    jobLocation: "Jinkou",
    createdBy: process.env.TEST_USER_ID,
    createdAt: "2022-01-24T07:07:09Z",
  },
];

module.exports = data;
