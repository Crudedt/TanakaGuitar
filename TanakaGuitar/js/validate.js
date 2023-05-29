function validate() {

  const form = document.forms["regisform"];
  const name = form["name"].value;
  const email = form["email"].value;
  const country = form["country"].value;
  const gender = form["gender"].value;
  const password = form["password"].value;
  const ischeck = form["sub"].checked;

  let message = "";
  if (!name || !email || !age || !gender) {
    message = "all field must not be empty!";
  } else if (name.length < 3) {
    message = "name must be minimum 3 characters!";
  } else if (country == "NULL") {
    message = "please choose your country!";
  } else if (password.length < 8) {
    message = "password must be minimum 8 characters!";
  } else if (gender != "male" && gender != "female")
    message = "please choose your gender!";

  if (message) {
    document.getElementById("errormsg").innerHTML = message;
    return false;
    }
}
