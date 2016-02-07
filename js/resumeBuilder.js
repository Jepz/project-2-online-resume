var bio = {
    "name": "Jesper",
    "role": "Ninja",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "doe@john.web",
        "github": "Jepz",
        "blog": "jepz.me",
        "twitter": "jeppsonone",
        "location": "Stockholm"
    },
    "welcomeMessage": "Hell! This is a welcome message",
    "skills": ["code", "design", "ux"],
    "biopic": "http://png.clipart.me/graphics/thumbs/162/man-smoking-marijuana-cigarette-and-wearing-sunglasses_162311768.jpg",

};

var education = {
    "schools": [

        {
            "name": "C3L",
            "location": "Tyresö",
            "degree": "Webdeveloper with RIA",
            "majors": ["Flash"],
            "dates": 2012,
            "url": "http://www.c3l.se"
        }, {
            "name": "Media",
            "location": "Tyresö",
            "degree": "Media guy",
            "majors": ["Media, web"],
            "dates": 2011,
            "url": "http://www.c3l.se"
        }

    ],
    "onlineCourses": [{
        "title": "Javascript crash course",
        "school": "Udacity",
        "date": 2016,
        "url": "http://www.udacity.com"
    }]
};

var work = {
    "jobs": [

        {
            "employer": "Avalon Innovation",
            "title": "Front end developer / project manager / UX",
            "dates": "2013",
            "location": "Stockholm",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna nibh, vehicula cursus nisl at, efficitur consequat erat. Mauris mattis risus quam, eget facilisis tortor tincidunt eu. Sed gravida, felis vitae lobortis commodo, quam dolor auctor lectus, at molestie quam dolor et ante. Mauris quam ipsum, dignissim ac euismod ac, dapibus quis magna. Mauris aliquet velit vitae imperdiet blandit. Fusce tincidunt, velit sit amet pulvinar pretium, erat sapien dignissim nisl, vitae feugiat felis augue vitae quam. Mauris hendrerit massa tincidunt quam posuere, ut varius metus iaculis. Pellentesque placerat, neque nec vehicula tempor, lorem ipsum imperdiet felis, ac consequat magna ex in lacus.",
        }, {
            "employer": "Poolia",
            "title": "Consultant",
            "dates": "2011",
            "location": "Stockholm",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna nibh, vehicula cursus nisl at, efficitur consequat erat. Mauris mattis risus quam, eget facilisis tortor tincidunt eu. Sed gravida, felis vitae lobortis commodo, quam dolor auctor lectus, at molestie quam dolor et ante. Mauris quam ipsum, dignissim ac euismod ac, dapibus quis magna. Mauris aliquet velit vitae imperdiet blandit. Fusce tincidunt, velit sit amet pulvinar pretium, erat sapien dignissim nisl, vitae feugiat felis augue vitae quam. Mauris hendrerit massa tincidunt quam posuere, ut varius metus iaculis. Pellentesque placerat, neque nec vehicula tempor, lorem ipsum imperdiet felis, ac consequat magna ex in lacus."
        }

    ]
};
var projects = {
    "projects": [{
        "title": "Sample project 1",
        "dates": "2015-2016",
        "description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
        "images": ["https://image.freepik.com/free-vector/rocket-launch-illustration_23-2147500712.jpg","https://image-gr.s3.envato.com/files/64960412/BIG%20IDEA%20ROCKET-590.jpg","http://www.youtodesign.com/uploads/allimg/1504/3780.jpg","http://www.youtodesign.com/uploads/allimg/1503/3736.jpg"]

    }, {
        "title": "Sample project 2",
        "dates": "2014-2015",
        "description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
        "images": ["https://image.freepik.com/free-vector/rocket-launch-illustration_23-2147500712.jpg","https://image-gr.s3.envato.com/files/64960412/BIG%20IDEA%20ROCKET-590.jpg","http://www.youtodesign.com/uploads/allimg/1504/3780.jpg","http://www.youtodesign.com/uploads/allimg/1503/3736.jpg"]
        

    }, {
        "title": "Sample project 3",
        "dates": "2013-2014",
        "description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
        "images": ["https://image.freepik.com/free-vector/rocket-launch-illustration_23-2147500712.jpg","https://image-gr.s3.envato.com/files/64960412/BIG%20IDEA%20ROCKET-590.jpg","http://www.youtodesign.com/uploads/allimg/1504/3780.jpg","http://www.youtodesign.com/uploads/allimg/1503/3736.jpg"]
        

    }, {
        "title": "Sample project 4",
        "dates": "2012-2013",
        "description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
        "images": ["https://image.freepik.com/free-vector/rocket-launch-illustration_23-2147500712.jpg","https://image-gr.s3.envato.com/files/64960412/BIG%20IDEA%20ROCKET-590.jpg","http://www.youtodesign.com/uploads/allimg/1504/3780.jpg","http://www.youtodesign.com/uploads/allimg/1503/3736.jpg"]
        

    }]
};


bio.display = function() {

    var b_Name = HTMLheaderName.replace("%data%", bio.name),
        b_Role = HTMLheaderRole.replace("%data%", bio.role),
        b_BioPic = HTMLbioPic.replace("%data%", bio.biopic),
        b_Msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
		c_Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		c_Email = HTMLemail.replace("%data%", bio.contacts.email),
        c_Twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        c_Github = HTMLgithub.replace("%data%", bio.contacts.github),
		c_Blog = HTMLblog.replace("%data%", bio.contacts.blog),
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        c_Contact = c_Mobile + c_Email + c_Twitter + c_Github + c_Blog + formattedLocation;

    $("#header").prepend(b_Role)
		.prepend(b_Name)
		.append(b_BioPic)
		.append(b_Msg)
		.append(HTMLskillsStart);
	$("#footerContacts").append(c_Contact);

	
    for (var i = 0; i < bio.skills.length; i++) {
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatedSkill);
    }
};


work.display = function() {
	var len = work.jobs.length;
    for (var i = 0; i < len; i++) {
        if (work.jobs.hasOwnProperty(i)) {
            $("#workExperience").append(HTMLworkStart);
            var w_Employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
                w_Title = HTMLworkTitle.replace("%data%", work.jobs[i].title),
                w_Date = HTMLworkDates.replace("%data%", work.jobs[i].dates),
                w_Location = HTMLworkLocation.replace("%data%", work.jobs[i].location),
                w_Description = HTMLworkDescription.replace("%data%", work.jobs[i].description),
                w_Job = w_Date + w_Location + w_Employer + w_Title + w_Description;

            $(".work-entry:last").append(w_Job);
        }
    }
};

projects.display = function() {
	var len = projects.projects.length;
    for (var i = 0; i < len; i++) {
        if (projects.projects.hasOwnProperty(i)) {
            $("#projects").append(HTMLprojectStart);

            var p_Title = HTMLprojectTitle.replace("%data%", projects.projects[i].title),
                p_Date = HTMLprojectDates.replace("%data%", projects.projects[i].dates),
                p_Image = HTMLprojectImage.replace("%data%", projects.projects[i].images[i]),
                p_Description = HTMLprojectDescription.replace("%data%", projects.projects[i].description),
                p_Project = p_Image + p_Title + p_Date + p_Description;

            $(".project-entry:last").append(p_Project);
        }
    }
};

education.display = function() {
	
	    for (var i = 0, len = education.schools.length; i < len; i++) {
        if (education.schools.hasOwnProperty(i)) {

            $("#education").append(HTMLschoolStart);
            var e_Name = HTMLschoolName.replace("%data%", education.schools[i].name),
                e_Date = HTMLschoolDates.replace("%data%", education.schools[i].dates),
                e_Degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
                e_Location = HTMLschoolLocation.replace("%data%", education.schools[i].location),
                e_School = e_Date + e_Location + e_Name + e_Degree;
            $(".education-entry:last").append(e_School);
			
            for (var x = 0, gth = education.schools[i].majors.length; x < gth; x++) {
                if (education.schools[i].majors.hasOwnProperty(x)) {
                    var e_Major = HTMLschoolMajor.replace("%data%", education.schools[i].majors[x]);
                    $(".education-entry:last").append(e_Major);

                }
            }
        }
    }
	
	$(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0, len = education.onlineCourses.length; i < len; i++) {
        if (education.onlineCourses.hasOwnProperty(i)) {
            var o_Title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title),
                o_School = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
                o_Dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date),
                o_URL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url),
                o_Online = o_Title + o_School + o_Dates + o_URL;

            $(".education-entry:last").append(o_Online);
        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);