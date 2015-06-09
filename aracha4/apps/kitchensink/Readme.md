# How the KitchenSink app was created

The KitchenSink app was created by doing the following steps:

    1. copied the kitchensink and shared folders from ext-4.2.4.1545/examples directory to this workspace's 'apps' folder
    2. tried running 'sencha app build testing' from kitchensink folder but did not work
    3. removed the 'require' line from kitchensink/sass/config.rb
    4. tried again running 'sencha app build development' and still not working
    5. Examined the index.html of KitchenSink and fixed the references to incluced-ext.js and options-toolbar.js

        - before
            <script src="../../examples/shared/include-ext.js?nocss"></script>
            <script src="../../examples/shared/options-toolbar.js"></script>
        -after
            <script src="../shared/include-ext.js?nocss"></script>
            <script src="../shared/options-toolbar.js"></script>

    5. compared index.html of KitchenSink app to that of a newly created app and changed the KitchenSink app's <x-bootstrap> section to not use the include-ext.js but instead use ext/ext-dev.js, which is what a newly created app would use

        - before
            <!-- <x-compile> -->
                <!-- <x-bootstrap> -->
                    <script src="../../examples/shared/include-ext.js?nocss"></script>
                    <script src="../../examples/shared/options-toolbar.js"></script>
                    <script src="bootstrap.js"></script>
                <!-- </x-bootstrap> -->
                <script src="lib/prettify/prettify.js"></script>
                <script src="../shared/examples.js"></script>
                <script src="app.js"></script>
            <!-- </x-compile> -->

        - after

            <!-- <x-compile> -->
                <!-- <x-bootstrap> -->
                    <link rel="stylesheet" href="bootstrap.css">
                    <script src="../../ext/ext-dev.js"></script>
                    <script src="bootstrap.js"></script>
                <!-- </x-bootstrap> -->
                <script src="lib/prettify/prettify.js"></script>
                <script src="../shared/examples.js"></script>
                <script src="app.js"></script>
            <!-- </x-compile> -->



    6. Opening the app in a browser now works (except loading the preview of the soure code).  However, building the app still fails

    7. Removed the workspace.build.dir setting in the kitchensink/.sencha/app/sencha.cfg.  It was this > workspace.build.dir=${app.dir}/../build

    8. Finally read the failure message more carefully and saw that the failure was happening in kitchensink/sass/example/theme.html
        - compared this file to that of a newly created app and found path references to ext files were different
        - updated these path refereneces

    9. redid the build and now it worked!

    10. Opened the KitchenSink app in a browser and it worked too but.... still have an issue loading the source for the preview source code feature of KitchenSink app
        - Found code in Main.js controller that changed the path to the js preview file if !Ext.repoDevMode
        - for now, just commented out this code and now the preview file loads

    11. Discovered that Sencha Cmd 4 does not support the 'builds' config in app.json and this KitchenSink app has custom build targets in build.xml to accomplish this.

    12. So...to do a build, you run this command:
        $sencha ant -t build-all

    13. In order to do custom builds for other non 'ext-theme' prefixed packages had to modify x-run-build macro in build.xml




# KitchenSink/app

This folder contains the javascript files for the application.

# KitchenSink/resources

This folder contains static resources (typically an `"images"` folder as well).

# KitchenSink/overrides

This folder contains override classes. All overrides in this folder will be
automatically included in application builds if the target class of the override
is loaded.

# KitchenSink/sass/etc

This folder contains misc. support code for sass builds (global functions,
mixins, etc.)

# KitchenSink/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this
folder are mapped to the application's root namespace, 'KitchenSink'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in KitchenSink/.sencha/app/sencha.cfg.

# KitchenSink/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this
folder are mapped to the application's root namespace, 'KitchenSink'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in KitchenSink/.sencha/app/sencha.cfg.
