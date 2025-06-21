fetch('profile.md')
  .then(response => response.text())
  .then(markdown => {
    document.getElementById('portfolioContent').innerHTML = marked.parse(markdown);
  })
  .catch(error => {
    document.getElementById('portfolioContent').innerHTML = '<p>Failed to load portfolio content.</p>';
    console.error(error);
  });

