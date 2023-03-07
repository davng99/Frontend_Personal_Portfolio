const projects = [
	{
		projectType: "Food Blog Page",
		projectTitle: "Code Review 1",
		technology: "HTML & CSS",
		description: "Beautiful food blog page",
		img: "Images/project-1.jpg",
		github: "https://github.com/davng99/FE17-CR1-David",
		demo: "./CR1/index.html"
	},
	{
		projectType: "Weekly Task Page",
		projectTitle: "Code Review 2",
		technology: "HTML, CSS, Bootstrap & JavaScript",
		description: "Weekly task page with sort-function depending on the tasks priority-level",
		img: "Images/project-2.jpg",
		github: "https://github.com/davng99/FE17-CR2-David",
		demo: "./CR2/index.html"
	},
    {
		projectType: "Restaurant Delivery Page",
		projectTitle: "Code Review 3",
		technology: "HTML, CSS, Bootstrap, TypeScript & Angular",
		description: "Homepage for a Restaurant Delivery Service",
		img: "Images/project-3.jpg",
		github: "https://github.com/davng99/FE17-CR3-David",
		demo: "./CR3/index.html"
	},
    {
		projectType: "Rent A Pet",
		projectTitle: "Code Review 5",
		technology: "MySQL, PHP, Bootstrap",
		description: "Webshop for renting a Pet with Login system",
		img: "Images/project-6.jpg",
		github: "https://github.com/davng99/BE17_CR5_David",
		demo: "./CR5/index.php"
	},
];

const projectResult = document.getElementById("projects-container");

for (let project of projects){
	projectResult.innerHTML += 
	`<div class="project" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
		<div class="project-title">${project.projectTitle}</div>
		<img src="${project.img}" alt="survey" class="project-img">
		<div class="folio-item__info">
			<div class="folio-item__cat">${project.projectType}</div>
			<h4 class="folio-item__title">${project.projectTitle}</h4>
			<div class="folio-item__cat">${project.technology}</div>
			<p class="folio-item__description">${project.description}</p>
			<div class="project-btns">
				<a href="${project.github}" class="btn-gitHub">GitHub</a> 
				<a href="${project.demo}" class="btn-demo">Demo</a>
			</div>
		</div>
	</div>`;
}