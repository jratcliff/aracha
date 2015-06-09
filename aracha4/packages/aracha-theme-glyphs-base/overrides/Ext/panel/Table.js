/**
 * Defaults and other overrides for Table
 */
Ext.define('overrides.panel.Table', {
    override: 'Ext.panel.Table',

    /**
     * Override that places the emptyText into the data-content attribute
     * so that it can be used in the :before pseudo element and styled so
     * that the emptyText is centered both horizontally and vertically in
     * the grid.
     */
    getView: function () {
        var me = this,
            emptyText = me.emptyText;

        me.view = me.callParent(arguments);

        if (emptyText) {
            me.view.emptyText = '<div class="' + me.emptyCls + '" data-content="' + emptyText + '"></div>';
        }

        return me.view;
    }

});
