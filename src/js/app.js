import "../style/index.css";

function render(variables = {}) {
  console.log("Your conditional card");
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class= "${variables.socialMediaPosition}">
            <li><a href="${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background:
      "https://t3.ftcdn.net/jpg/03/30/64/72/360_F_330647225_uIG9w5bfXTTKw6c7781v4riSpgDCaSHL.jpg",
    avatarURL:
      "https://cdn.leonardo.ai/users/8f294079-0068-43cc-8a57-7aca0fc3d79f/generations/b3ae57f0-0f60-45f3-95ad-ca5a152dcc80/RPG_40_hacker_on_computer_realism_focused_no_blur_soft_shadows_no_0.jpg",
    socialMediaPosition: "",
    twitter: "",
    github: "",
    linkedin: "",
    instagram: "",
    name: "Ya Name",
    lastname: "Ya Last Name",
    role: "Ya Job",
    country: "Ya Country",
    city: "Ya City"
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
