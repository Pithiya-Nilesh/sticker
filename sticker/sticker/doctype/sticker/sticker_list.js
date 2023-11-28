frappe.listview_settings["sticker"] = {
	refresh: show_toggle_sending_button,
	onload: function (list_view) {
		frappe.require("logtypes.bundle.js", () => {
			frappe.utils.logtypes.show_log_retention_message(list_view.doctype);
		});
	},
};

function show_toggle_sending_button(list_view) {

	list_view.page.add_inner_button("Delete All", () => {
        frappe.call({
            method: 'sticker.api.delete_all_sticker',
            callback: function (r) {
                if (r.message) {
                    // Refresh the list view after deletion
                    list_view.refresh();
                }
            },
            freeze: true,
        })
	});
}
