import frappe

@frappe.whitelist(allow_guest=True)
def delete_all_sticker():
    list = frappe.db.get_list("sticker", fields=['name'], limit=40000)
    for i in list:
        frappe.delete_doc("sticker", i["name"])
    frappe.db.commit()
    return 'done'
