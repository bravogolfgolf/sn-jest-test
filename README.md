sn-jest-test
===============================================
This project was developed in Webstorm to determine how to get Jest working with Enzyme. The Webstorm Configurations used to build, test and deploy are in .run directory.

node version: ```12.16.1```

npm version: ```6.13.4```

snc / ui-component extension versions:
```{
"extensions": {
"ui-component": "21.0.7"
},
"snc": "1.1.0"
}
```

Create a project:
```
snc ui-component project --name @bgg/sn-jest-test
```

Add devDependencies:
```
"enzyme": "3.8.0",
"@servicenow/ui-enzyme-adapter": "quebec",
"jest": "23.4.2"
```
Note: The versions of 'enzyme' and 'jest' were determined by looking into package-lock.json to see what versions other dependencies already depended on. Technically jest did not need to be added to package.json, but adding it does prevent linting warnings.

Run
```
snc ui-component develop
```
This creates .babelrc, which is needed for tests to run properly.

NOTE: The .babelrc file is deleted when ```snc ui-component deploy``` runs. The 'All Test' configuration runs 'develop' before running the test so .babelrc is always available for testing.
