Ext.define('overrides.form.field.File', {
    override: 'Ext.form.field.File',

    multiSelect: true,

    onRender: function () {
        var me = this;

        me.callParent(arguments);
        me.fileInputEl.set({ multiple: me.multiSelect });
    }

});
