# Steps

## Kalabox create procedure
### <u>add</u>
  Adds the apps in <code>index.js</code> to the list of app in <code>kbox create</code>
  - Adds the create options:
    - Each framework in frameworks
    - With a description
    - With pkg data, including the directory path for the project
  - Adds the frameworks in <code>libs/create.js</code>
    - Creates the framework in the list and prepares the inquiry
  - Adds the task with for each framework in frameworks
  - Loads events and create modules

### <u>createApp</u>
  - Creates variables:
    - dir
    - dest
  - Checks we aren't in another app
  - Emits the pre-create event
  - Makes sure we are in a clean space
  - Creates app skeleton
    - Sets localPath
    - Downloads if necessary
  - Configures the app
    - Sets dir and appPath
    - Reads kalabox.yml and package.json
    - Emits pre-create-configure and gets the data from <code>libs/events.js</code>
      - Grabs the config from the the data
      - Gets the filemount based on the framework
      - It it is a php app it gets
        - config.pluginconfig.nodejs.framework
        - config.pluginconfig.nodejs.version
        - config.pluginconfig.nodejs.filemount
        - config.pluginconfig.sharing.ignore
        - config.version
    - Emits post-create-configure (not used)
  - Installs the new app, using the configuration above
    - Gets the app config from new app
    - Emits pre-create-app (not used)
    - Creates the app
    - Emits post-create-app (not used)
  - Starts the app

### <u>buildTask</u>
  - Makes sure there is a real app
  - 
