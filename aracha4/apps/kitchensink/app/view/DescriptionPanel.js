Ext.define('KitchenSink.view.DescriptionPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'descriptionPanel',
    id: 'description-panel',
    title: 'Description',
    autoScroll: true,
    rtl: false,

    initComponent: function() {
        this.ui = (Ext.themeName === 'ext-theme-neptune') ? 'light' : 'default';
        this.callParent();
    }
});