# Creates symlinks on various paths for GitHub Pages to serve the index file
# The actual routing will be handled by React Router
# This allows GitHub Pages to return a proper HTTP 200 rather than the 404 workaround used below
pages=(
  "about"
  "events"
  "sponsors"
  "contact"
  # Have GitHub Pages serve the index otherwise for React Router catch all other routes
  "404"
)

cd build
for page in "${pages[@]}"
do
  ln -s index.html $page.html
done
