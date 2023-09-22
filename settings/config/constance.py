from datetime import date


# Config Constance for Project
CONSTANCE_CONFIG = {
    'CLIENT_ACCESS_TOKEN_DIALOG_FLOW': ('','Copiar el Access Token del Agente de Dialog Flow, '
                       'DIALOG FLOW'),
    'FB_PAGE_ACCESS_TOKEN': ('','Copiar el Access Token de la pagina de Facebook, '
                       'PAGES ACCES TOKEN FB'),    

    'TUNNEL_NGROK_PROJECT': ('','Copiar el tunel generado por Ngrok, '
                       'NGROK'),    

    'VERIFY_TOKEN': ('','Colocar el verify Token para conectar FBDV con el backend, '
                       'FBDV'),    

    'SITE_NAME': ('', 'Website title'),
    'SITE_DESCRIPTION': ('', 'Website description'),
    'LOGO_IMAGE': ('default.png','image_field'),   
    'SYSTEM_VERSION': (0.1, 'Version del Sistema'),     
    'DATE_ESTABLISHED': (date(2018, 8, 2), "Ver para que usar"),        
}



CONSTANCE_CONFIG_FIELDSETS = {
    'Pages Options': (
        'SITE_NAME',
        'SITE_DESCRIPTION',
        'SYSTEM_VERSION',
        'DATE_ESTABLISHED',        
      ),
    
    'Chatbot Options': (
        'CLIENT_ACCESS_TOKEN_DIALOG_FLOW',
        'FB_PAGE_ACCESS_TOKEN',
        'TUNNEL_NGROK_PROJECT',
        'VERIFY_TOKEN',
    ),

    'Static Fields':(
        'LOGO_IMAGE',
    ),
}