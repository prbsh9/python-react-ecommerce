function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location = "/login";
}
export default logout;
