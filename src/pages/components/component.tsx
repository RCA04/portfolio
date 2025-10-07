
async function getRepos() {
  const res = await fetch("https://api.github.com/users/RCA04/repos", {
    next: { revalidate: 3600 }, // revalida a cada 1h
  });
  return res.json();
}

export default async function Repos(){
  const repos = await getRepos()
  return console.log(repos)

}