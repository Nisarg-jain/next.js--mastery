import "server-only";

export function fetchServerData() {
  console.log(
    "Reading confidential server data (e.g., database or secret token)"
  );
  return "Confidential Server Data: Token-987654";
}