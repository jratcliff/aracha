Ext.define('KitchenSink.view.aracha.FileManager', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aracha-fileuploads-manager',

    requires: [
        'Aracha.filedd.FileDropManager'
    ],

    layout  : 'fit',
    frame   : true,
    title   : 'File(s)',

    width   : 700,
    height  : 500,

    resizable: true,
    draggable: true,

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            text: 'Upload File(s)',
            handler: function (btn) {
                var form = btn.up('form');

                if (form.isValid()){
                    form.submit({
                        url: 'resources/data/form/file-upload.php',
                        waitMsg: 'Uploading your photo...',
                        success: function(fp, o) {
                            var tpl = new Ext.XTemplate(
                                'File processed on the server.<br />',
                                'Name: {fileName}<br />',
                                'Size: {fileSize:fileSize}'
                            );

                            Ext.Msg.alert('Success', tpl.apply(o.result));
                        }
                    });
                }
             }
        }]
    }],

    items: [{
        xtype: 'filedd-manager'
    }]

});
