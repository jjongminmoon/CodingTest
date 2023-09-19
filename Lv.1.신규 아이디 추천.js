function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  const len = new_id.length;

  return len > 2 ? new_id : new_id.padEnd(3, new_id[len - 1]);
}
