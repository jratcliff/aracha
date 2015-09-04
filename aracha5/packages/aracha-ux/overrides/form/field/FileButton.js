Ext.define('overrides.form.field.FileButton', {
    override: 'Ext.form.field.FileButton',

    afterRender: function(){
        var me = this;

        me.callParent(arguments);

        // have this FileButton relay the 'selectionchange' event to
        // the ownerCt, which is a (FileField)
        me.ownerCt.relayEvents(me, ['selectionchange']);

    },

    // override that fires the custom 'selectionchange' event for all files
    fireChange: function (e, fileField) {
        this.callParent(arguments);

        // now fire our other event that passes all files
        // we will call this one the 'selectionchange' event to be consistent
        // with other components where a multi selection is done
        this.fireEvent('selectionchange', this, e, fileField.files);
    }

});
