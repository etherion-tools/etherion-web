export async function fetchRepoInfo() {
  const res = await fetch('https://api.github.com/repos/etherion-tools/landing', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  });
  if (!res.ok) throw new Error('Failed to fetch repo info');
  return res.json();
} 