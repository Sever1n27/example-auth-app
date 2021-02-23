export function validate(data: { email: string; password: string }) {
  const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.test(String(data.email).toLowerCase())) {
    return "Wrong email format";
  }
  return false;
}
