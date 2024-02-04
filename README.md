### Hexlet tests and linter status:
[![Actions Status](https://github.com/DarthVanster/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/DarthVanster/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e17d3f89d578f19b7895/maintainability)](https://codeclimate.com/github/DarthVanster/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e17d3f89d578f19b7895/test_coverage)](https://codeclimate.com/github/DarthVanster/frontend-project-46/test_coverage)
# Difference Calculator
# Instructions for installing and running the program:

1) Create a directory where you will place the project and navigate to that directory.
2) Run git pull to transfer all files from the remote repository to your local repository.
3) To install the program, use the make install command.
4) While in the root directory of the project, run make publish to update packages in the npm repository.
5) To get help about the utility, use the command: bin/gendiff.js -h
To run a program that compares two files with the output of a certain format, use the command: bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json -f json
Instead of the json format, you can also choose the stylish or plain format. If you do not specify the format output, the stylish format will be output by default.

# Description of the program

- The program compares two configuration files with extensions: json, yaml, yml.
- The cli utility accepts two arguments - the paths to these files;
- The result of comparing files can be output in different formats (json, plain, stylish).

# Calling the utility's help (command: bin/gendiff command.js -h):

https://asciinema.org/a/tYvvKrYJMljJG5celZgNsj1F4

# An example of how the program works with all file formats and structures:

https://asciinema.org/a/n2qgLEUn2wkdvrGbbWO8bF4vm
