//Cloning git repo project
git clone https://user@bitbucket.org/user/repo.git


//Branches
main->release->develop->feature_branch

//Start work with git flow
git flow feature start feature_branch
git checkout -b feature_branch
// Edit some code
git commit -a -m "Add first draft of some feature"
// Put in self repo
git push origin feature_branch
//
git checkout develop
//Merge new features on feature_branch witn develop branch
git merge feature_branch
//Finish work with git flow
git flow feature finish 'feature_branch'



git flow release start 0.1.0
//Switched to a new branch 'release/0.1.0'
git checkout main
git merge release/0.1.0
git flow release finish '0.1.0'