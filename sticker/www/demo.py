import frappe

def get_context(context):
	# context.education_settings = frappe.get_single("Education Settings")
	# if not context.education_settings.enable_lms:
	# 	frappe.local.flags.redirect_location = "/"
	# 	raise frappe.Redirect
	
    context.data = frappe.db.get_list("sticker", fields=["*"], page_length=700)