# Club-Site

This repository is split into multiple folders.

`client` is the main folder with the actual React components and code. Navigate there for a detailed README.

`server` has some functions for interacting with Facebook, although they have not been updated in some time and do not work.

`cdk` has a lot of work for a custom AWS API for getting info for our events. Before, [hack.ics.uci.edu](hack.ics.uci.edu) would call the API for live updates and information like when the next hackathon would happen and the workshop schedule for the next couple of weeks. However, no events were updated from the API, leading to no updates on the website. As a result, the functions have not been used in `client`.

`.github\workflows` has one GitHub workflow. It runs when a commit is pushed to `main`. It builds the app and publishes it to GitHub Pages.
