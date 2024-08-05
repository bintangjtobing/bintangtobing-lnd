document.addEventListener("DOMContentLoaded", function () {
  fetch("json/education.json")
    .then((response) => response.json())
    .then((data) => {
      const list = document.getElementById("education-list");
      data.forEach((item) => {
        const li = document.createElement("li");
        if (item.degree) {
          li.textContent = `${item.year}: ${item.degree} at ${item.institution}, ${item.location}`;
        } else {
          li.textContent = `${item.year}: ${item.degree}, ${item.location}`;
        }
        list.appendChild(li);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("projects-container");
      data.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
          <h2>${project.year}: ${project.title}</h2>
          <h3>${project.subtitle}</h3>
          <p>${project.description}</p>
        `;
        container.appendChild(projectDiv);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/work-experience.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("work-experience-container");
      data.forEach((experience) => {
        const experienceDiv = document.createElement("div");
        experienceDiv.className = "experience";
        experienceDiv.innerHTML = `
          <h2>${experience.period}: ${experience.position} at ${
          experience.company
        }</h2>
          <h3>${experience.location}</h3>
          <ul>
            ${experience.responsibilities
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        `;
        container.appendChild(experienceDiv);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/certifications.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("certifications-container");
      const list = document.createElement("ul");
      data.forEach((certification) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${certification.year}: ${certification.title} from ${certification.provider}`;
        list.appendChild(listItem);
      });
      container.appendChild(list);
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/exhibitions.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("exhibitions-container");
      data.forEach((exhibition) => {
        const exhibitionDiv = document.createElement("div");
        exhibitionDiv.className = "exhibition";
        exhibitionDiv.innerHTML = `
          <h2>${exhibition.year}: ${exhibition.title}</h2>
          <p>This event lasted for ${exhibition.details.dates}, at the ${exhibition.details.location}.</p>
          <p>${exhibition.details.description}</p>
        `;
        container.appendChild(exhibitionDiv);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/speaking.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("speaking-container");
      data.forEach((event) => {
        const eventDiv = document.createElement("div");
        eventDiv.className = "speaking";
        eventDiv.innerHTML = `
          <h2>${event.year}: ${event.title}</h2>
          <p>This event took place on ${event.details.dates}, at ${event.details.location}. It was attended by ${event.details.attendance}.</p>
          <p>${event.details.description}</p>
        `;
        container.appendChild(eventDiv);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("json/awards.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("awards-container");
      data.forEach((award) => {
        const awardDiv = document.createElement("div");
        awardDiv.className = "award";
        awardDiv.innerHTML = `<h2>${award.year}: ${award.title}</h2>`;
        container.appendChild(awardDiv);
      });
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});
