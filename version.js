var semver = process.env.npm_package_version.split('.')
var newver = semver[0]+"."+semver[1]+"."+semver[2]+"-"+process.env.BUILD_NUMBER

console.log("##teamcity[setParameter name='vi-version-number' value='"+newver+"']");
console.log("##teamcity[buildNumber '"+ newver+"']");
