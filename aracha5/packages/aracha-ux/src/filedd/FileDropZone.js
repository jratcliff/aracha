Ext.define('Aracha.filedd.FileDropZone', {
    extend: 'Ext.container.Container',
    alias: 'widget.filedd-dropzone',

    requires: [
        'Aracha.filedd.plugin.FileDropZone'
    ],

    config: {
        dropText: 'Drop Files Here'
    },

    cls: 'filedropzone',
    plugins: ['filedropzone'],

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            html: me.getDropText()
        });

        me.callParent(arguments);
    }
});
