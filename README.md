# simple-catalog
Carsa's simple catalog example 

## Getting Started

To get you started you can simply clone the `simple-catalog` repository and install the dependencies:

### Prerequisites

You need git to clone the `simple-catalog` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `simple-catalog`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `simple-catalog`

Clone the `simple-catalog` repository using git:

```
git clone https://github.com/Carsa85/simple-catalog.git
cd simple-catalog
```

If you just want to start a new project without the `simple-catalog` commit history then you can do:

```
git clone --depth=1 https://github.com/Carsa85/simple-catalog.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`simple-catalog` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].