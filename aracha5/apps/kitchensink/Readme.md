# How the KitchenSink app was created

The KitchenSink app was created by doing the following steps:

    1. copied the kitchensink and shared folders from ext-5.1.1/examples directory to this workspace's 'apps' folder
    2. tried running 'sencha app build development' from kitchensink folder but did not work
    3. removed the 'require' line from kitchensink/sass/config.rb
    4. tried again running 'sencha app build development' and this time it worked!
    5. however...the build gets written to the workspace's ext directory under build/examples
        - this was due to the this config in the KitchenSink's app.json
        - "base": "${ext.dir}/build/examples/kitchensink/${build.id}"
    6. so change this 'base' config to this:
        - "base": "${workspace.build.dir}/${build.environment}/${app.name}/${build.id}"


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
