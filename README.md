Hippo Plugins
=============

## Development environment setup
#### Prerequisites

* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Dependencies

* [Grunt](http://gruntjs.com/) (task automation)
* [Bower](http://bower.io/) (package management)

#### Installation
Run the commands below in the project root directory.
#####1. Install Grunt and Bower

    $ sudo npm install -g grunt-cli bower

#####2. Install project dependencies

    $ npm install
    $ bower install

## Useful commands

####Generate build
The build version is located in the `dist` directory.

    $ grunt

####Run tests separately
The tests need to pass in order to generate a build.

    $ grunt test

Tests can also be run continuously:

    $ grunt test:continuous

## Deployment to Nexus
#### Prerequisites

* [Maven](http://maven.apache.org/)

#### Deployment command

    $ mvn deploy
